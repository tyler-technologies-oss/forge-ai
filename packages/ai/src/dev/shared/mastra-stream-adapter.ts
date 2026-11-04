import {
  AgentAdapter,
  generateId,
  toRequestMessages,
  type ChatMessage,
  type McpAppResourceResolveParams,
  type McpAppUiResource,
  type McpModelContextUpdateParams,
  type McpToolCallParams,
  type ToolDefinition
} from '../../lib/ai-chatbot';
import {
  buildRestoredThread,
  buildThreadUrl,
  isRecord,
  MCP_APP_TEMPLATE_MIME,
  MCP_UI_RESOURCE_CHUNK_TYPE,
  readConversationMemoryTurns,
  readMcpResult,
  readTeamConversationTurns,
  toMcpAppHttpError,
  toMcpAppUiResource,
  toMcpCallToolResult,
  type McpAppScope,
  type McpAppWidgetRecord,
  type RestoredThreadHistory
} from './mcp-apps.js';

export const TEAM_RUN_METADATA_CHUNK_TYPE = 'team-run-metadata';
export const TEAM_RUN_METADATA_EVENT_NAME = 'TEAM_RUN_METADATA';

export interface MastraStreamAdapterConfig {
  /** Stream endpoint. Derived as `${baseUrl}/api/{agents|teams}/:id/stream` when omitted. */
  url?: string;
  /** Foundry API origin, e.g. `http://localhost:3001`. Required for MCP Apps and history loading. */
  baseUrl?: string;
  agentId?: string;
  /** Selects the Team routes; takes precedence over `agentId`. */
  teamId?: string;
  /** Trailing debounce for `ui/update-model-context` -> `/context` (default 750 ms). */
  modelContextDebounceMs?: number;
  headers?: Record<string, string>;
  context?: Record<string, unknown>;
  tools?: ToolDefinition[];
}

export interface LoadThreadHistoryParams {
  /** Agent scope: the operational thread id. */
  threadId?: string;
  /** Team scope: the database conversation id. */
  conversationId?: string;
  maxMessagePairs?: number;
}

interface PendingModelContext {
  url: string;
  params: McpModelContextUpdateParams;
  timer: ReturnType<typeof setTimeout>;
}

const DEFAULT_MODEL_CONTEXT_DEBOUNCE_MS = 750;

interface StreamErrorCorrelation {
  requestId?: string;
  traceId?: string;
}

interface MastraChunk {
  type: string;
  payload?: {
    text?: string;
    toolCallId?: string;
    toolName?: string;
    args?: string | Record<string, unknown>;
    argsTextDelta?: string;
    delta?: string;
    result?: unknown;
    isError?: boolean;
    stepName?: string;
    stepIndex?: number;
    message?: string;
    error?: string;
    messageId?: string;
    conversationId?: string;
    artifacts?: unknown[];
    teamRunId?: string;
    threadId?: string;
    requestId?: string;
    traceId?: string;
    resourceUri?: string;
    serverId?: string;
    mimeType?: string;
    structuredContent?: unknown;
    structuredContentOmitted?: boolean;
    mcpResult?: unknown;
    mcpResultOmitted?: boolean;
    cancelled?: boolean;
  };
  delta?: string;
  errorText?: string;
}

interface ArtifactLink {
  url?: string;
  size?: number;
  title?: string;
  filename?: string;
}

function formatStreamError(message: string, correlation: StreamErrorCorrelation): string {
  if (/\n(?:Request|Reference|Trace) ID:/i.test(message)) {
    return message;
  }
  if (correlation.requestId) {
    return `${message}\n\nRequest ID: ${correlation.requestId}`;
  }
  if (correlation.traceId) {
    return `${message}\n\nTrace ID: ${correlation.traceId}`;
  }
  return message;
}

function parseTransportError(errorText: string): { message: string; correlation: StreamErrorCorrelation } {
  const trimmed = errorText?.trim() || 'Unknown error';
  try {
    const payload = JSON.parse(trimmed) as Record<string, unknown>;
    let message = trimmed;
    if (typeof payload.error === 'string') {
      message = payload.error;
    } else if (typeof payload.message === 'string') {
      message = payload.message;
    }
    return {
      message,
      correlation: {
        requestId: typeof payload.requestId === 'string' ? payload.requestId : undefined,
        traceId: typeof payload.traceId === 'string' ? payload.traceId : undefined
      }
    };
  } catch {
    return { message: trimmed, correlation: {} };
  }
}

function resolveScope({
  agentId,
  teamId
}: Pick<MastraStreamAdapterConfig, 'agentId' | 'teamId'>): McpAppScope | undefined {
  if (teamId) {
    return { kind: 'teams', id: teamId };
  }
  if (agentId) {
    return { kind: 'agents', id: agentId };
  }
  return undefined;
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) {
    return `${bytes} B`;
  }
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/**
 * AgentAdapter implementation that uses Mastra's native SSE stream format.
 * Parses SSE lines (`data: {json}\n\n`) from the server's fullStream pass-through.
 *
 * ChunkType -> forge-ai event mapping:
 * - text-start       -> messageStart
 * - text-delta       -> messageDelta
 * - text-end         -> messageEnd
 * - tool-call        -> toolCall (complete tool call)
 * - tool-call-input-streaming-start -> toolCallStart
 * - tool-call-delta  -> toolCallArgs
 * - tool-call-input-streaming-end   -> toolCallEnd
 * - tool-result/tool-error -> toolResult (MCP-app fields passed through; `result` stays model-facing)
 * - mcp-ui-resource  -> mcpUiResource
 * - reasoning-start  -> customEvent('reasoning-start')
 * - reasoning-delta  -> customEvent('reasoning', delta)
 * - reasoning-end    -> customEvent('reasoning-end')
 * - step-start       -> stepStarted
 * - step-finish      -> stepFinished
 * - finish           -> messageEnd + runFinished
 * - error            -> error
 * - message-metadata -> customEvent('MESSAGE_METADATA')
 * - team-run-metadata -> customEvent('TEAM_RUN_METADATA')
 * - artifacts        -> customEvent('ARTIFACTS') + markdown download links
 *
 * MCP Apps (Foundry contract): template fetch, app tool calls, model context and history
 * reload use the thread-scoped routes under `${baseUrl}/api/{agents|teams}/:id/threads/:threadId`.
 * `readMcpResource` is intentionally not implemented: only `ui://` templates are served (§8).
 */
export class MastraStreamAdapter extends AgentAdapter {
  #url: string;
  #baseUrl: string | undefined;
  #scope: McpAppScope | undefined;
  #headers: Record<string, string>;
  #context: Record<string, unknown>;
  #threadId: string;
  #conversationId: string | undefined;
  #abortController: AbortController | null = null;
  #currentMessageId = '';
  #toolCallArgsBuffers = new Map<string, string>();
  #lastRequestId: string | null = null;

  // Serializes back-to-back sends (e.g. sendToolResult firing while the original SSE is still streaming)
  #inFlight: Promise<void> | null = null;
  // Bumped on abort/disconnect so a queued send can detect cancellation before dispatching its fetch
  #abortGeneration = 0;
  #disconnectWarnEmitted = false;
  // Set by sendToolResult mid-stream so the ending stream skips runFinished; the continuation emits it
  #deferRunFinished = false;

  // Client tool calls still awaiting sendToolResult; non-empty at stream end = a continuation follows
  #awaitingClientToolCallIds = new Set<string>();

  // App tool calls announced this turn with no tool-result yet; cancelled when the turn ends
  #openAppToolCallIds = new Set<string>();
  #turnEndWaiters: Array<() => void> = [];
  #pendingModelContext = new Map<string, PendingModelContext>();
  #modelContextDebounceMs: number;

  constructor(config: MastraStreamAdapterConfig, threadId?: string) {
    super();
    this.#baseUrl = config.baseUrl?.replace(/\/+$/, '');
    this.#scope = resolveScope(config);
    const url = config.url ?? this.#deriveStreamUrl();
    if (!url) {
      throw new Error('MastraStreamAdapter requires `url`, or `baseUrl` with `agentId`/`teamId`');
    }
    this.#url = url;
    this.#modelContextDebounceMs = config.modelContextDebounceMs ?? DEFAULT_MODEL_CONTEXT_DEBOUNCE_MS;
    this.#headers = config.headers ?? {};
    this.#context = config.context ?? {};
    this.#threadId = threadId ?? generateId();
    if (config.tools) {
      this.setTools(config.tools);
    }
  }

  public get threadId(): string {
    return this.#threadId;
  }

  public set threadId(value: string) {
    this.#threadId = value;
  }

  public get conversationId(): string | undefined {
    return this.#conversationId;
  }

  public set conversationId(value: string | undefined) {
    this.#conversationId = value?.trim() || undefined;
  }

  public setContext(context: Record<string, unknown>): void {
    this.#context = { ...context };
  }

  public getContext(): Record<string, unknown> {
    return { ...this.#context };
  }

  /** Template fetch (§4). 422 = feature off (fall back to plain tool output); 404 retried once after the turn ends. */
  public async resolveMcpAppResource({
    resourceUri,
    toolCallId
  }: McpAppResourceResolveParams): Promise<McpAppUiResource | undefined> {
    const url = `${this.#requireThreadUrl()}/apps/resource?${new URLSearchParams({ uri: resourceUri, toolCallId })}`;
    const read = (): Promise<Response> => this.#appFetch(url, { method: 'GET' });

    let response = await read();
    if (response.status === 404 && this.#abortController !== null) {
      await this.#waitForTurnEnd();
      response = await read();
    }
    if (response.status === 422) {
      console.warn('[MastraStreamAdapter] MCP Apps not enabled for this tenant; rendering plain tool output');
      return undefined;
    }
    if (!response.ok) {
      throw await toMcpAppHttpError(response, 'MCP App template fetch');
    }
    return toMcpAppUiResource(await response.json(), resourceUri);
  }

  /** View `tools/call` (§5). HTTP errors reject (-> JSON-RPC error); tool errors resolve with `isError: true`. */
  public async callMcpTool({ name, arguments: inputs, toolCallId }: McpToolCallParams): Promise<unknown> {
    const response = await this.#appFetch(
      `${this.#requireThreadUrl()}/apps/tools/${encodeURIComponent(name)}/execute`,
      {
        method: 'POST',
        body: JSON.stringify({ toolCallId, inputs: inputs ?? {} })
      }
    );
    if (!response.ok) {
      throw await toMcpAppHttpError(response, `MCP App tool call "${name}"`);
    }
    return toMcpCallToolResult(await response.json());
  }

  /** View `ui/update-model-context` (§6): latest-wins per widget, debounced, held until the turn ends. */
  public async updateMcpModelContext(params: McpModelContextUpdateParams): Promise<void> {
    const url = `${this.#requireThreadUrl()}/context`;
    const existing = this.#pendingModelContext.get(params.toolCallId);
    if (existing) {
      clearTimeout(existing.timer);
    }
    const timer = setTimeout(() => void this.#flushModelContext(params.toolCallId), this.#modelContextDebounceMs);
    this.#pendingModelContext.set(params.toolCallId, { url, params, timer });
  }

  /** Drops a torn-down widget's held model context (§6) and open app call. */
  public disposeMcpAppView({ toolCallId }: { toolCallId: string }): void {
    const pending = this.#pendingModelContext.get(toolCallId);
    if (pending) {
      clearTimeout(pending.timer);
    }
    this.#pendingModelContext.delete(toolCallId);
    this.#openAppToolCallIds.delete(toolCallId);
  }

  /**
   * Loads a thread from the history endpoint (§7): agent `conversation-memory/.../user/self?threadId=`,
   * team `chat/conversations/:id?teamId=`. Apply `threadState` with `setThreadState`, then call
   * {@link remountMcpAppWidgets} with `widgets`.
   */
  public async loadThreadHistory({
    threadId,
    conversationId,
    maxMessagePairs = 50
  }: LoadThreadHistoryParams): Promise<RestoredThreadHistory> {
    const { baseUrl, scope } = this.#requireAppRoutes();
    const url =
      scope.kind === 'teams'
        ? `${baseUrl}/api/chat/conversations/${encodeURIComponent(conversationId ?? threadId ?? '')}?${new URLSearchParams({ teamId: scope.id })}`
        : `${baseUrl}/api/conversation-memory/agent/${encodeURIComponent(scope.id)}/user/self?${new URLSearchParams({
            threadId: threadId ?? '',
            maxMessagePairs: String(maxMessagePairs)
          })}`;
    const response = await this.#appFetch(url, { method: 'GET' });
    if (!response.ok) {
      throw await toMcpAppHttpError(response, 'Thread history load');
    }
    const body: unknown = await response.json();
    const parsed = scope.kind === 'teams' ? readTeamConversationTurns(body) : readConversationMemoryTurns(body);
    const restored = buildRestoredThread({
      turns: parsed.turns,
      threadId: parsed.threadId ?? threadId ?? this.#threadId,
      conversationId: parsed.conversationId ?? conversationId
    });
    this.#threadId = restored.threadState.threadId ?? this.#threadId;
    this.conversationId = restored.conversationId;
    return restored;
  }

  /** Re-announces restored widgets so core re-fetches each template and remounts it (R6). Call after `setThreadState`. */
  public remountMcpAppWidgets(widgets: McpAppWidgetRecord[]): void {
    for (const { toolCallId, toolName, resourceUri, serverId, mimeType } of widgets) {
      this._emitMcpUiResource({
        toolCallId,
        toolName,
        resourceUri,
        serverId,
        mimeType: mimeType || MCP_APP_TEMPLATE_MIME
      });
    }
  }

  public async connect(): Promise<void> {
    this.#disconnectWarnEmitted = false;
    this._updateState({ isConnected: true, isConnecting: false });
  }

  public async disconnect(): Promise<void> {
    this.#abortGeneration++;
    this.abort();
    this._updateState({ isConnected: false, isConnecting: false, isRunning: false });
  }

  public abort(): void {
    if (this.#abortController === null) {
      return;
    }
    this.#abortGeneration++;
    this.#resetContinuation();
    this.#abortController.abort();
    this._updateState({ isRunning: false });
    if (this.#finalizeCurrentTurn()) {
      this._emitRunAborted();
    }
  }

  public sendMessage(messages: ChatMessage[]): void {
    this.#assertConnected();
    // A new turn with no stream active: a continuation the previous pass waited on never came
    if (this.#abortController === null) {
      this.#resetContinuation();
      this.#cancelOpenAppToolCalls();
    }
    this.#enqueueStream(messages);
  }

  public sendToolResult(toolCallId: string, result: unknown, messages: ChatMessage[]): void {
    this.#assertConnected();
    if (this.#abortController !== null) {
      this.#deferRunFinished = true;
    }
    this.#awaitingClientToolCallIds.delete(toolCallId);
    const toolResultMessage: ChatMessage = {
      id: generateId(),
      role: 'tool',
      content: typeof result === 'string' ? result : JSON.stringify(result),
      toolCallId,
      timestamp: Date.now(),
      status: 'complete'
    };
    this.#enqueueStream([...messages, toolResultMessage]);
  }

  #assertConnected(): void {
    if (!this._state.isConnected) {
      throw new Error('Adapter not connected. Call connect() first.');
    }
  }

  #enqueueStream(messages: ChatMessage[]): void {
    const enqueuedGeneration = this.#abortGeneration;
    const previous = this.#inFlight;
    const next: Promise<void> =
      previous === null
        ? this.#streamRequest(messages)
        : previous
            .catch(() => undefined)
            .then(() => {
              if (!this._state.isConnected) {
                if (!this.#disconnectWarnEmitted) {
                  this.#disconnectWarnEmitted = true;
                  console.warn('[MastraStreamAdapter] Queued send dropped: adapter disconnected before dispatch');
                }
                return Promise.resolve();
              }
              if (this.#abortGeneration > enqueuedGeneration) {
                return Promise.resolve();
              }
              return this.#streamRequest(messages);
            });

    const wrapped: Promise<void> = next
      .catch(() => undefined)
      .finally(() => {
        if (this.#inFlight === wrapped) {
          this.#inFlight = null;
        }
      });
    this.#inFlight = wrapped;

    next.catch(err => {
      if (err?.name === 'AbortError') {
        return;
      }

      console.error('[MastraStreamAdapter] sendMessage error:', err);
      this.#resetContinuation();
      if (!this.#finalizeCurrentTurn()) {
        return;
      }
      this._emitError(this.#withRequestId(err?.message ?? 'Unknown error'));
      this._updateState({ isRunning: false });
    });
  }

  #deriveStreamUrl(): string | undefined {
    if (!this.#baseUrl || !this.#scope) {
      return undefined;
    }
    return `${this.#baseUrl}/api/${this.#scope.kind}/${encodeURIComponent(this.#scope.id)}/stream`;
  }

  #requireAppRoutes(): { baseUrl: string; scope: McpAppScope } {
    if (!this.#baseUrl || !this.#scope) {
      throw new Error('MCP Apps require `baseUrl` and `agentId`/`teamId` in MastraStreamAdapterConfig');
    }
    return { baseUrl: this.#baseUrl, scope: this.#scope };
  }

  #requireThreadUrl(): string {
    return buildThreadUrl({ ...this.#requireAppRoutes(), threadId: this.#threadId });
  }

  /** Same credentials and headers as the stream (§4: required for embed/anonymous callers). */
  #appFetch(url: string, init: RequestInit): Promise<Response> {
    return fetch(url, {
      ...init,
      credentials: 'include',
      headers: {
        ...(init.body ? { 'Content-Type': 'application/json' } : {}),
        ...this.#headers
      }
    });
  }

  #waitForTurnEnd(): Promise<void> {
    if (this.#abortController === null) {
      return Promise.resolve();
    }
    return new Promise(resolve => this.#turnEndWaiters.push(resolve));
  }

  #releaseTurnEndWaiters(): void {
    const waiters = this.#turnEndWaiters;
    this.#turnEndWaiters = [];
    waiters.forEach(resolve => resolve());
  }

  /** `/context` only knows widgets once their turn is finished (§6), so a flush waits for the stream to end. */
  async #flushModelContext(toolCallId: string): Promise<void> {
    await this.#waitForTurnEnd();
    const pending = this.#pendingModelContext.get(toolCallId);
    if (!pending) {
      return;
    }
    this.#pendingModelContext.delete(toolCallId);
    const { content, structuredContent } = pending.params;
    try {
      const response = await this.#appFetch(pending.url, {
        method: 'POST',
        body: JSON.stringify({
          toolCallId,
          ...(content?.length ? { content } : {}),
          ...(isRecord(structuredContent) ? { structuredContent } : {})
        })
      });
      // Widgets of an aborted turn may be unknown to the backend: nothing to apply
      if (response.status === 404) {
        return;
      }
      if (!response.ok) {
        console.warn(
          '[MastraStreamAdapter]',
          (await toMcpAppHttpError(response, 'MCP App model context update')).message
        );
        return;
      }
      const result: unknown = await response.json().catch(() => undefined);
      if (isRecord(result) && result.applied === false) {
        console.info('[MastraStreamAdapter] Model context not applied:', result.reason);
      }
    } catch (error) {
      console.warn('[MastraStreamAdapter] Model context update failed', error);
    }
  }

  /**
   * The pass ends waiting on a client-tool continuation: either `sendToolResult` already queued it
   * mid-stream, or a client tool call from this pass still awaits its result (§2).
   */
  get #isContinuationPending(): boolean {
    return this.#deferRunFinished || this.#awaitingClientToolCallIds.size > 0;
  }

  #resetContinuation(): void {
    this.#deferRunFinished = false;
    this.#awaitingClientToolCallIds.clear();
  }

  /**
   * Clears the controller and pairs the prologue messageStart with a messageEnd. Open app tool
   * calls are cancelled unless a continuation carries them over. Returns false if already finalized.
   */
  #finalizeCurrentTurn(): boolean {
    if (this.#abortController === null) {
      return false;
    }
    this.#abortController = null;
    if (!this.#isContinuationPending) {
      this.#cancelOpenAppToolCalls();
    }
    this._emitMessageEnd(this.#currentMessageId);
    this.#releaseTurnEndWaiters();
    return true;
  }

  #withRequestId(message: string, requestId: string | null = this.#lastRequestId): string {
    if (!requestId || message.includes(requestId)) {
      return message;
    }
    return formatStreamError(message, { requestId });
  }

  async #streamRequest(messages: ChatMessage[]): Promise<void> {
    this.#abortController = new AbortController();
    this.#currentMessageId = generateId();
    this.#toolCallArgsBuffers.clear();

    this._updateState({ isRunning: true });
    this._emitRunStarted();
    this._emitMessageStart(this.#currentMessageId);

    await this.#dispatchStream(messages);

    if (!this.#finalizeCurrentTurn()) {
      return;
    }
    if (this.#deferRunFinished) {
      this.#deferRunFinished = false;
      return;
    }
    this._updateState({ isRunning: false });
    this._emitRunFinished();
  }

  async #dispatchStream(messages: ChatMessage[]): Promise<void> {
    const requestContext = this.getContext();
    delete requestContext.threadId;
    if (this.#conversationId) {
      delete requestContext.conversationId;
    }

    const tools = this.getModelFacingTools();
    const body = JSON.stringify({
      messages: toRequestMessages(messages),
      threadId: this.#threadId,
      ...(this.#conversationId ? { conversationId: this.#conversationId } : {}),
      context: requestContext,
      ...(tools.length ? { tools } : {})
    });

    this.#lastRequestId = null;
    const response = await fetch(this.#url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...this.#headers
      },
      credentials: 'include',
      body,
      signal: this.#abortController?.signal
    });

    this.#lastRequestId = response.headers.get('X-Request-ID')?.trim() || null;

    if (!response.ok) {
      const errorText = await response.text().catch(() => 'Unknown error');
      const parsed = parseTransportError(errorText);
      throw new Error(
        formatStreamError(`Stream request failed (${response.status}): ${parsed.message}`, {
          requestId: parsed.correlation.requestId ?? response.headers.get('X-Request-ID') ?? undefined,
          traceId: parsed.correlation.traceId ?? response.headers.get('X-Trace-Id') ?? undefined
        })
      );
    }

    if (!response.body) {
      throw new Error('Response has no body');
    }

    await this.#readSSEStream(response.body, {
      requestId: this.#lastRequestId ?? undefined,
      traceId: response.headers.get('X-Trace-Id') ?? undefined
    });
  }

  async #readSSEStream(body: ReadableStream<Uint8Array>, responseCorrelation: StreamErrorCorrelation): Promise<void> {
    const reader = body.getReader();
    const decoder = new TextDecoder();
    const abortGeneration = this.#abortGeneration;
    let buffer = '';
    let sawDone = false;

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() ?? '';

        for (const line of lines) {
          if (abortGeneration !== this.#abortGeneration) {
            return;
          }
          const trimmed = line.trim();
          if (!trimmed || !trimmed.startsWith('data: ')) {
            continue;
          }
          const data = trimmed.slice(6);
          // Keep draining this read's remaining events; anything after [DONE] in later reads is dropped
          if (data === '[DONE]') {
            sawDone = true;
            continue;
          }
          try {
            this.#handleChunk(JSON.parse(data) as MastraChunk, responseCorrelation);
          } catch (parseError) {
            console.warn('[MastraStreamAdapter] Skipping malformed SSE line', {
              error: parseError instanceof Error ? parseError.message : String(parseError),
              dataPreview: data.length > 200 ? `${data.slice(0, 200)}…` : data
            });
          }
        }

        if (sawDone) {
          break;
        }
      }
    } finally {
      reader.releaseLock();
    }
  }

  #handleChunk(chunk: MastraChunk, responseCorrelation: StreamErrorCorrelation): void {
    const { type, payload } = chunk;

    switch (type) {
      case 'text-delta':
        this._emitMessageDelta(this.#currentMessageId, payload?.text ?? chunk.delta ?? '', chunk);
        break;

      case 'text-start':
      case 'text-end':
        break;

      case 'tool-call':
        this.#trackClientToolCall(payload?.toolCallId, payload?.toolName);
        this._emitToolCall(
          {
            id: payload?.toolCallId ?? '',
            messageId: this.#currentMessageId,
            name: payload?.toolName ?? '',
            args: this.#coerceToolArgs(payload?.args, payload?.toolCallId, payload?.toolName)
          },
          chunk
        );
        break;

      case 'tool-call-input-streaming-start':
        this.#toolCallArgsBuffers.set(payload?.toolCallId ?? '', '');
        this._emitToolCallStart(
          {
            id: payload?.toolCallId ?? '',
            messageId: this.#currentMessageId,
            name: payload?.toolName ?? ''
          },
          chunk
        );
        break;

      case 'tool-call-delta':
      case 'tool-call-input-streaming-delta': {
        const toolCallId = payload?.toolCallId ?? '';
        const delta = payload?.argsTextDelta ?? payload?.delta ?? '';
        const argsBuffer = (this.#toolCallArgsBuffers.get(toolCallId) ?? '') + delta;
        this.#toolCallArgsBuffers.set(toolCallId, argsBuffer);
        this._emitToolCallArgs(
          {
            id: toolCallId,
            messageId: this.#currentMessageId,
            name: payload?.toolName ?? '',
            argsBuffer
          },
          chunk
        );
        break;
      }

      case 'tool-call-input-streaming-end':
        this._emitToolCallEnd(
          {
            id: payload?.toolCallId ?? '',
            messageId: this.#currentMessageId,
            name: payload?.toolName ?? '',
            args: this.#parseToolArgs(payload?.toolCallId ?? '')
          },
          chunk
        );
        this.#toolCallArgsBuffers.delete(payload?.toolCallId ?? '');
        break;

      case 'tool-result':
        this.#handleToolResultChunk(chunk);
        break;

      case 'tool-error': {
        const toolCallId = payload?.toolCallId ?? '';
        const result = payload?.error ?? payload?.message ?? 'Tool call failed';
        this.#openAppToolCallIds.delete(toolCallId);
        this._emitToolResult(
          {
            toolCallId,
            result,
            isError: true,
            message: this.#toolResultMessage({ toolCallId, result, status: 'error' })
          },
          chunk
        );
        break;
      }

      case MCP_UI_RESOURCE_CHUNK_TYPE:
        this.#handleMcpUiResourceChunk(chunk);
        break;

      case 'reasoning-start':
        this._emitCustomEvent('reasoning-start', {}, chunk);
        break;

      case 'reasoning-delta':
        this._emitCustomEvent('reasoning', { delta: payload?.text ?? '' }, chunk);
        break;

      case 'reasoning-end':
        this._emitCustomEvent('reasoning-end', {}, chunk);
        break;

      case 'step-start':
        this._emitStepStarted(payload?.stepName ?? `step-${payload?.stepIndex ?? 0}`, chunk);
        break;

      case 'step-finish':
        this._emitStepFinished(payload?.stepName ?? `step-${payload?.stepIndex ?? 0}`, chunk);
        break;

      case 'finish':
        break;

      case 'error':
        this._emitError(this.#formatErrorChunk(chunk, responseCorrelation));
        break;

      case 'message-metadata':
        this._emitCustomEvent(
          'MESSAGE_METADATA',
          {
            messageId: payload?.messageId,
            conversationId: payload?.conversationId
          },
          chunk
        );
        break;

      case TEAM_RUN_METADATA_CHUNK_TYPE:
        this._emitCustomEvent(
          TEAM_RUN_METADATA_EVENT_NAME,
          {
            teamRunId: typeof payload?.teamRunId === 'string' ? payload.teamRunId : undefined,
            threadId: typeof payload?.threadId === 'string' ? payload.threadId : undefined,
            messageId: typeof payload?.messageId === 'string' ? payload.messageId : undefined
          },
          chunk
        );
        break;

      case 'artifacts': {
        const artifacts = payload?.artifacts;
        if (Array.isArray(artifacts) && artifacts.length > 0) {
          this._emitCustomEvent('ARTIFACTS', { artifacts }, chunk);
          this._emitMessageDelta(
            this.#currentMessageId,
            this.#buildArtifactsMarkdown(artifacts as ArtifactLink[]),
            chunk
          );
        }
        break;
      }

      default:
        this._emitRawEvent(chunk, chunk);
        break;
    }
  }

  #handleToolResultChunk(chunk: MastraChunk): void {
    const payload = chunk.payload ?? {};
    const toolCallId = payload.toolCallId ?? '';
    const cancelled = payload.cancelled === true;
    const isError = payload.isError === true;
    const mcpResult = readMcpResult(payload.mcpResult);
    this.#openAppToolCallIds.delete(toolCallId);
    this._emitToolResult(
      {
        toolCallId,
        result: payload.result,
        isError,
        ...(cancelled ? { cancelled } : {}),
        ...(payload.structuredContent !== undefined ? { structuredContent: payload.structuredContent } : {}),
        ...(payload.structuredContentOmitted === true ? { structuredContentOmitted: true } : {}),
        ...(mcpResult ? { mcpResult } : {}),
        ...(payload.mcpResultOmitted === true ? { mcpResultOmitted: true } : {}),
        message: this.#toolResultMessage({
          toolCallId,
          result: payload.result ?? '',
          status: isError || cancelled ? 'error' : 'complete'
        })
      },
      chunk
    );
  }

  #trackClientToolCall(toolCallId?: string, toolName?: string): void {
    if (toolCallId && this.getTools().some(tool => tool.name === toolName)) {
      this.#awaitingClientToolCallIds.add(toolCallId);
    }
  }

  #handleMcpUiResourceChunk(chunk: MastraChunk): void {
    const { toolCallId, toolName, resourceUri, serverId, mimeType } = chunk.payload ?? {};
    if (!toolCallId || !resourceUri) {
      console.warn('[MastraStreamAdapter] Ignoring mcp-ui-resource without toolCallId/resourceUri', chunk);
      return;
    }
    this.#openAppToolCallIds.add(toolCallId);
    this._emitMcpUiResource({ toolCallId, toolName, resourceUri, serverId, mimeType }, chunk);
  }

  #toolResultMessage({
    toolCallId,
    result,
    status
  }: {
    toolCallId: string;
    result: unknown;
    status: ChatMessage['status'];
  }): ChatMessage {
    return {
      id: generateId(),
      role: 'tool',
      content: typeof result === 'string' ? result : JSON.stringify(result),
      toolCallId,
      timestamp: Date.now(),
      status
    };
  }

  /** Agent streams have no cancel marker: an app tool call still open when the stream ends was cancelled (§2). */
  #cancelOpenAppToolCalls(): void {
    for (const toolCallId of this.#openAppToolCallIds) {
      const result = 'Tool execution did not return a result.';
      this._emitToolResult({
        toolCallId,
        result,
        isError: true,
        cancelled: true,
        message: this.#toolResultMessage({ toolCallId, result, status: 'error' })
      });
    }
    this.#openAppToolCallIds.clear();
  }

  #formatErrorChunk(chunk: MastraChunk, responseCorrelation: StreamErrorCorrelation): string {
    const { payload } = chunk;
    const rawError = payload?.error as unknown;
    const detail =
      [
        payload?.message,
        typeof rawError === 'string' ? rawError : (rawError as { message?: string } | undefined)?.message,
        chunk.errorText
      ].find((candidate): candidate is string => typeof candidate === 'string' && candidate.length > 0) ??
      'Agent error';

    return formatStreamError(detail, {
      requestId: payload?.requestId ?? responseCorrelation.requestId,
      traceId: payload?.traceId ?? responseCorrelation.traceId
    });
  }

  #buildArtifactsMarkdown(artifacts: ArtifactLink[]): string {
    const baseOrigin = new URL(this.#url, window.location.href).origin;
    const lines = artifacts.map(artifact => {
      const url = artifact.url?.startsWith('http') ? artifact.url : `${baseOrigin}${artifact.url}`;
      const size = artifact.size ? ` (${formatBytes(artifact.size)})` : '';
      return `- [${artifact.title || artifact.filename}](${url})${size}`;
    });
    return `\n\n---\n**Artifacts:**\n${lines.join('\n')}\n`;
  }

  #parseToolArgs(toolCallId: string): Record<string, unknown> {
    const buffer = this.#toolCallArgsBuffers.get(toolCallId) ?? '';
    try {
      return JSON.parse(buffer);
    } catch {
      return {};
    }
  }

  /** Coerces a `tool-call` chunk's args (JSON string or object) without letting a bad payload kill the stream loop. */
  #coerceToolArgs(args: unknown, toolCallId?: string, toolName?: string): Record<string, unknown> {
    if (args == null) {
      return {};
    }
    if (typeof args === 'string') {
      try {
        const parsed = JSON.parse(args);
        return typeof parsed === 'object' && parsed !== null ? (parsed as Record<string, unknown>) : {};
      } catch (parseError) {
        console.warn('[MastraStreamAdapter] Skipping malformed tool-call args', {
          error: parseError instanceof Error ? parseError.message : String(parseError),
          toolCallId,
          toolName,
          argsPreview: args.length > 200 ? `${args.slice(0, 200)}…` : args
        });
        return {};
      }
    }
    return typeof args === 'object' ? (args as Record<string, unknown>) : {};
  }
}

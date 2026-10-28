import { generateId, type ChatMessage, type McpAppUiResource, type McpToolResult, type ThreadState, type ToolCall } from '../../lib/ai-chatbot';
import type { McpAppResourceCsp, McpAppResourcePermissions, ResponseItem } from '../../lib/ai-chatbot/types';

/**
 * Foundry MCP Apps wire helpers (contract: tyler-ai `docs/mcp-apps-forge-ai-adapter.md`).
 * Pure functions only: URL building, response normalization, and history mapping.
 */

export const MCP_UI_RESOURCE_CHUNK_TYPE = 'mcp-ui-resource';
export const MCP_APP_TEMPLATE_MIME = 'text/html;profile=mcp-app';

const CSP_KEYS = ['connectDomains', 'resourceDomains', 'frameDomains', 'baseUriDomains'] as const;
const PERMISSION_KEYS = ['camera', 'microphone', 'geolocation', 'clipboardWrite'] as const;

export type McpAppScope = { kind: 'agents'; id: string } | { kind: 'teams'; id: string };

/** A `widgets[]` entry on a history turn (§7). */
export interface McpAppWidgetRecord {
  toolCallId: string;
  toolName: string;
  resourceUri: string;
  serverId: string;
  mimeType: string;
  structuredContent?: Record<string, unknown>;
  structuredContentOmitted?: true;
  mcpResult?: McpToolResult;
  mcpResultOmitted?: true;
}

/** The View's `CallToolResult` (§2, §5). */
export interface McpCallToolResult extends McpToolResult {
  structuredContent?: Record<string, unknown>;
}

export interface RestoredThreadHistory {
  threadState: ThreadState;
  /** Database conversation id, sent back as `conversationId` on later turns. */
  conversationId?: string;
  /** Widgets to remount via `_emitMcpUiResource` after `setThreadState` (R6). */
  widgets: McpAppWidgetRecord[];
}

/** One user turn from either history endpoint, normalized. */
export interface HistoryTurn {
  id: string;
  query: string;
  response: string;
  createdAt?: string;
  metadataMessages: unknown[];
  widgets: McpAppWidgetRecord[];
  feedback?: ChatMessage['feedback'];
}

/** Non-2xx from an app endpoint. Rejecting with it makes the bridge answer the View with a JSON-RPC error. */
export class McpAppHttpError extends Error {
  public readonly status: number;
  public readonly reason?: string;

  constructor({ status, message, reason }: { status: number; message: string; reason?: string }) {
    super(message);
    this.name = 'McpAppHttpError';
    this.status = status;
    this.reason = reason;
  }
}

export function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function readString(record: Record<string, unknown>, key: string): string | undefined {
  const value = record[key];
  return typeof value === 'string' && value.length > 0 ? value : undefined;
}

/** `${baseUrl}/api/{agents|teams}/:id/threads/:threadId` */
export function buildThreadUrl({
  baseUrl,
  scope,
  threadId
}: {
  baseUrl: string;
  scope: McpAppScope;
  threadId: string;
}): string {
  return `${baseUrl}/api/${scope.kind}/${encodeURIComponent(scope.id)}/threads/${encodeURIComponent(threadId)}`;
}

export async function toMcpAppHttpError(response: Response, operation: string): Promise<McpAppHttpError> {
  const body: unknown = await response.json().catch(() => undefined);
  const record = isRecord(body) ? body : {};
  const detail = readString(record, 'message') ?? readString(record, 'error') ?? response.statusText;
  return new McpAppHttpError({
    status: response.status,
    message: `${operation} failed (${response.status}): ${detail}`,
    reason: readString(record, 'reason')
  });
}

/** Raw MCP result guard, used for `tool-result.mcpResult` and `widgets[].mcpResult`. */
export function readMcpResult(value: unknown): McpToolResult | undefined {
  if (!isRecord(value) || !Array.isArray(value.content)) {
    return undefined;
  }
  return {
    content: value.content,
    ...(value.isError === true ? { isError: true } : {}),
    ...(isRecord(value._meta) ? { _meta: value._meta } : {})
  };
}

function readCsp(value: unknown): McpAppResourceCsp {
  const record = isRecord(value) ? value : {};
  const csp: McpAppResourceCsp = {};
  for (const key of CSP_KEYS) {
    const domains = record[key];
    if (Array.isArray(domains)) {
      csp[key] = domains.filter((domain): domain is string => typeof domain === 'string');
    }
  }
  return csp;
}

/** Keys present = requested (§4); normalized to the spec's `{ key: {} }` shape. */
function readPermissions(value: unknown): McpAppResourcePermissions {
  const record = isRecord(value) ? value : {};
  const permissions: McpAppResourcePermissions = {};
  for (const key of PERMISSION_KEYS) {
    if (record[key] !== undefined && record[key] !== null && record[key] !== false) {
      permissions[key] = {};
    }
  }
  return permissions;
}

/** Template response (§4) -> `McpAppUiResource`. */
export function toMcpAppUiResource(body: unknown, requestedUri: string): McpAppUiResource {
  if (!isRecord(body) || typeof body.text !== 'string') {
    throw new Error(`MCP App template for ${requestedUri} has no HTML text`);
  }
  const ui = isRecord(body._meta) && isRecord(body._meta.ui) ? body._meta.ui : {};
  return {
    html: body.text,
    csp: readCsp(ui.csp),
    permissions: readPermissions(ui.permissions),
    resourceUri: readString(body, 'uri') ?? requestedUri,
    ...(typeof ui.prefersBorder === 'boolean' ? { prefersBorder: ui.prefersBorder } : {})
  };
}

/** Execute response (§5) -> View `CallToolResult`. A tool-level error is a 200 with `isError: true`. */
export function toMcpCallToolResult(body: unknown): McpCallToolResult {
  const record = isRecord(body) ? body : {};
  return {
    content: Array.isArray(record.result) ? record.result : [],
    ...(isRecord(record.structuredContent) ? { structuredContent: record.structuredContent } : {}),
    ...(record.isError === true ? { isError: true } : {}),
    ...(isRecord(record._meta) ? { _meta: record._meta } : {})
  };
}

export function readWidgetRecords(value: unknown): McpAppWidgetRecord[] {
  if (!Array.isArray(value)) {
    return [];
  }
  return value.flatMap(entry => {
    if (!isRecord(entry)) {
      return [];
    }
    const toolCallId = readString(entry, 'toolCallId');
    const toolName = readString(entry, 'toolName');
    const resourceUri = readString(entry, 'resourceUri');
    const serverId = readString(entry, 'serverId');
    if (!toolCallId || !toolName || !resourceUri || !serverId) {
      return [];
    }
    const mcpResult = readMcpResult(entry.mcpResult);
    const widget: McpAppWidgetRecord = {
      toolCallId,
      toolName,
      resourceUri,
      serverId,
      mimeType: readString(entry, 'mimeType') ?? MCP_APP_TEMPLATE_MIME,
      ...(isRecord(entry.structuredContent) ? { structuredContent: entry.structuredContent } : {}),
      ...(entry.structuredContentOmitted === true ? { structuredContentOmitted: true as const } : {}),
      ...(mcpResult ? { mcpResult } : {}),
      ...(entry.mcpResultOmitted === true ? { mcpResultOmitted: true as const } : {})
    };
    return [widget];
  });
}

/** `GET /api/conversation-memory/agent/:agentId/user/self?threadId=` -> turns. */
export function readConversationMemoryTurns(body: unknown): { turns: HistoryTurn[]; threadId?: string; conversationId?: string } {
  const record = isRecord(body) ? body : {};
  const data = Array.isArray(record.data) ? record.data.filter(isRecord) : [];
  const turns = data.map(item => {
    const metadata = isRecord(item.metadata) ? item.metadata : {};
    return {
      id: readString(metadata, 'messageId') ?? readString(item, 'id') ?? generateId(),
      query: readString(item, 'query') ?? '',
      response: readString(item, 'response') ?? '',
      createdAt: readString(item, 'created_at'),
      metadataMessages: Array.isArray(metadata.messages) ? metadata.messages : [],
      widgets: readWidgetRecords(item.widgets),
      feedback: readFeedback(item.feedbackType, item.feedbackComment)
    };
  });
  return {
    turns,
    threadId: readString(record, 'threadId'),
    conversationId: data.map(item => readString(item, 'conversation_id')).find(Boolean)
  };
}

/** `GET /api/chat/conversations/:id?teamId=` -> turns. */
export function readTeamConversationTurns(body: unknown): { turns: HistoryTurn[]; threadId?: string; conversationId?: string } {
  const record = isRecord(body) ? body : {};
  const conversation = isRecord(record.conversation) ? record.conversation : {};
  const conversationMetadata = isRecord(conversation.metadata) ? conversation.metadata : {};
  const messages = Array.isArray(record.messages) ? record.messages.filter(isRecord) : [];
  const conversationId = readString(conversation, 'id');
  const turns = messages.map(item => {
    const metadata = isRecord(item.metadata) ? item.metadata : {};
    return {
      id: readString(item, 'id') ?? generateId(),
      query: readString(item, 'question') ?? '',
      response: readString(item, 'response') ?? '',
      createdAt: readString(item, 'createdAt'),
      metadataMessages: Array.isArray(metadata.messages) ? metadata.messages : [],
      widgets: readWidgetRecords(item.widgets),
      feedback: readFeedback(item.feedbackType === 'THUMBS_UP' ? 'positive' : item.feedbackType === 'THUMBS_DOWN' ? 'negative' : undefined, item.feedbackComment)
    };
  });
  return {
    turns,
    threadId: readString(conversationMetadata, 'threadId') ?? conversationId,
    conversationId
  };
}

function readFeedback(type: unknown, comment: unknown): ChatMessage['feedback'] {
  if (type !== 'positive' && type !== 'negative') {
    return undefined;
  }
  return { type, ...(typeof comment === 'string' && comment ? { reason: comment } : {}) };
}

function textOf(content: unknown): string {
  if (typeof content === 'string') {
    return content;
  }
  if (!Array.isArray(content)) {
    return '';
  }
  return content
    .map(part => (isRecord(part) && part.type === 'text' && typeof part.text === 'string' ? part.text : ''))
    .join('');
}

function toTimestamp(value: string | undefined, fallback: number): number {
  const parsed = value ? Date.parse(value) : Number.NaN;
  return Number.isFinite(parsed) ? parsed : fallback;
}

function appendText(children: ResponseItem[], messageId: string, content: string): void {
  if (!content.trim()) {
    return;
  }
  const last = children[children.length - 1];
  if (last?.type === 'text') {
    last.content = `${last.content}\n\n${content}`;
    return;
  }
  children.push({ type: 'text', messageId, content, status: 'complete' });
}

/**
 * Widget tool call restored from history: input from the turn's `toolCalls` args (§7),
 * View result from `mcpResult` + `structuredContent`. `result` stays model-facing.
 */
function toRestoredToolCall({
  id,
  name,
  args,
  messageId,
  widget,
  toolResultText
}: {
  id: string;
  name: string;
  args: unknown;
  messageId: string;
  widget?: McpAppWidgetRecord;
  toolResultText?: string;
}): ToolCall {
  const mcpText = textOf(widget?.mcpResult?.content);
  return {
    id,
    messageId,
    name,
    args: isRecord(args) ? args : {},
    status: widget?.mcpResult?.isError ? 'error' : 'complete',
    type: widget ? 'agent' : 'client',
    result: toolResultText || mcpText || undefined,
    ...(widget?.structuredContent ? { structuredContent: widget.structuredContent } : {}),
    ...(widget?.structuredContentOmitted ? { structuredContentOmitted: true } : {}),
    ...(widget?.mcpResult ? { mcpResult: widget.mcpResult } : {}),
    ...(widget?.mcpResultOmitted ? { mcpResultOmitted: true } : {})
  };
}

function buildAssistantChildren(turn: HistoryTurn, messageId: string): { children: ResponseItem[]; toolCalls: ToolCall[] } {
  const widgetsById = new Map(turn.widgets.map(widget => [widget.toolCallId, widget]));
  const metadataMessages = turn.metadataMessages.filter(isRecord);
  const toolResults = new Map(
    metadataMessages
      .filter(message => message.role === 'tool' && typeof message.toolCallId === 'string')
      .map(message => [message.toolCallId as string, textOf(message.content)])
  );
  const children: ResponseItem[] = [];
  const toolCalls: ToolCall[] = [];

  for (const message of metadataMessages) {
    if (message.role !== 'assistant') {
      continue;
    }
    appendText(children, messageId, textOf(message.content));
    const calls = Array.isArray(message.toolCalls) ? message.toolCalls.filter(isRecord) : [];
    for (const call of calls) {
      const id = readString(call, 'id');
      const name = readString(call, 'name');
      if (!id || !name) {
        continue;
      }
      const toolCall = toRestoredToolCall({
        id,
        name,
        args: call.args,
        messageId,
        widget: widgetsById.get(id),
        toolResultText: toolResults.get(id)
      });
      widgetsById.delete(id);
      toolCalls.push(toolCall);
      children.push({ type: 'toolCall', data: toolCall });
    }
  }

  // Widgets whose call is missing from the message list still remount, with empty input.
  for (const widget of widgetsById.values()) {
    const toolCall = toRestoredToolCall({ id: widget.toolCallId, name: widget.toolName, args: {}, messageId, widget });
    toolCalls.push(toolCall);
    children.push({ type: 'toolCall', data: toolCall });
  }

  if (!children.some(child => child.type === 'text')) {
    appendText(children, messageId, turn.response);
  }
  return { children, toolCalls };
}

/** History turns -> `ThreadState` + the widgets to remount (§7, R6). */
export function buildRestoredThread({
  turns,
  threadId,
  conversationId
}: {
  turns: HistoryTurn[];
  threadId: string;
  conversationId?: string;
}): RestoredThreadHistory {
  const now = Date.now();
  const messages: ChatMessage[] = turns.flatMap((turn, index) => {
    const timestamp = toTimestamp(turn.createdAt, now - (turns.length - index) * 1000);
    const assistantId = generateId();
    const { children, toolCalls } = buildAssistantChildren(turn, assistantId);
    const user: ChatMessage = { id: generateId(), role: 'user', content: turn.query, timestamp, status: 'complete' };
    const assistant: ChatMessage = {
      id: assistantId,
      role: 'assistant',
      content: turn.response,
      timestamp: timestamp + 1,
      status: 'complete',
      children,
      ...(toolCalls.length ? { toolCalls } : {}),
      ...(turn.feedback ? { feedback: turn.feedback } : {})
    };
    return [user, assistant];
  });

  return {
    threadState: { threadId, messages, timestamp: now },
    conversationId,
    widgets: turns.flatMap(turn => turn.widgets)
  };
}

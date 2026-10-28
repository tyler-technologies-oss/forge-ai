import extAppsSdkSource from '@modelcontextprotocol/ext-apps/app-with-deps?raw';
import type {
  McpAppResourceResolveParams,
  McpModelContextUpdateParams,
  McpResourceReadParams,
  McpToolCallParams
} from '$lib/ai-chatbot/agent-adapter.js';
import type { ChatMessage, McpAppUiResource, ToolCall } from '$lib/ai-chatbot/types.js';
import { generateId } from '$lib/ai-chatbot/utils.js';
import { MockAdapter } from './mock-adapter.js';

export type McpAppWidgetVariant = 'sdk' | 'hand-rolled';

/**
 * How a widget's tool call ends:
 * - `success` — `tool-result` with `mcpResult` + `structuredContent`.
 * - `error` — `tool-result` with `isError` (still delivered to the View).
 * - `cancelled` — `tool-result` with `cancelled: true` (team-stream style).
 * - `no-result` — the run finishes with no `tool-result` (agent-stream style cancellation).
 */
export type McpAppMockOutcome = 'success' | 'error' | 'cancelled' | 'no-result';

/** Stream order of the `mcp-ui-resource` event relative to the `tool-call` chunks. */
export type McpAppMockOrder = 'tool-call-first' | 'resource-first';

export interface McpAppMockWidget {
  /** Shown in the widget and echoed by app tool calls to prove per-widget isolation. */
  label: string;
  outcome?: McpAppMockOutcome;
  order?: McpAppMockOrder;
}

export interface McpAppMockAdapterOptions {
  /** Which mock widget implementation `resolveMcpAppResource` returns. */
  widgetVariant?: McpAppWidgetVariant;
  /** Widgets rendered in one run, in order. Defaults to a single successful widget. */
  widgets?: McpAppMockWidget[];
}

const APP_TOOL_NAME = 'renderMcpApp';
const APP_ONLY_TOOL_NAME = 'refreshWidgetData';
const RESOURCE_URI = 'ui://mock-widget';
const STEP_DELAY = 700;
const STREAM_WORD_DELAY = 40;

const INTRO_TEXT = "Sure, let's take a look — here's an interactive widget with that info.";
const FOLLOW_UP_TEXT = 'Let me know if you want to dig into any of that further.';
const DEFAULT_WIDGETS: McpAppMockWidget[] = [{ label: 'Widget' }];
const HISTORY_WIDGETS = [
  { id: 'history-call-ok', label: 'Restored widget', isError: false },
  { id: 'history-call-error', label: 'Restored error widget', isError: true }
];

/**
 * Drives the MCP-app demos like a Foundry stream: intro text, then per widget a streamed
 * `renderMcpApp` tool call plus an `mcp-ui-resource` event (in either order), then a
 * `tool-result` whose model-facing `result` is plain text and whose View payload travels
 * as `mcpResult` + `structuredContent`. There is no client-side tool definition. Policy
 * (`csp`/`permissions`) comes from `resolveMcpAppResource`. Also services the widget's own
 * `tools/call` (a `visibility:["app"]`-style tool), `resources/read` and
 * `ui/update-model-context`, all keyed by the widget's `toolCallId`.
 */
export class McpAppMockAdapter extends MockAdapter {
  readonly #widgetVariant: McpAppWidgetVariant;
  readonly #widgets: McpAppMockWidget[];
  readonly #labels = new Map<string, string>();

  constructor(options: McpAppMockAdapterOptions = {}) {
    super();
    this.#widgetVariant = options.widgetVariant ?? 'hand-rolled';
    this.#widgets = options.widgets ?? DEFAULT_WIDGETS;
    HISTORY_WIDGETS.forEach(({ id, label }) => this.#labels.set(id, label));
  }

  public override sendMessage(_messages: ChatMessage[]): void {
    this._updateState({ isRunning: true });
    this._emitRunStarted();

    const introId = generateId();
    this._emitMessageStart(introId);
    this.#streamText(introId, INTRO_TEXT, () => {
      this._emitMessageEnd(introId);
      this.#runWidget(0);
    });
  }

  /**
   * Chat history as a consumer would restore it from a backend: finalized tool calls with
   * their `mcpResult`/`structuredContent` but no `uiResource`. Pair with
   * {@link remountHistoryWidgets} after `setMessages`.
   */
  public get historyMessages(): ChatMessage[] {
    const now = Date.now();

    return HISTORY_WIDGETS.flatMap(({ id, label, isError }, index): ChatMessage[] => {
      const args = { label, greeting: 'Restored from history' };
      const toolCall: ToolCall = {
        id,
        messageId: `history-assistant-${index}`,
        name: APP_TOOL_NAME,
        args,
        status: isError ? 'error' : 'complete',
        type: 'agent',
        result: this.#modelText(isError ? 'error' : 'success', label),
        mcpResult: this.#mcpResult(isError ? 'error' : 'success', label),
        structuredContent: isError ? undefined : this.#structuredContent(label)
      };
      return [
        {
          id: `history-user-${index}`,
          role: 'user',
          content: `Show me the ${isError ? 'failing' : 'working'} widget`,
          timestamp: now - 60_000 + index * 2_000,
          status: 'complete'
        },
        {
          id: `history-assistant-${index}`,
          role: 'assistant',
          content: isError ? 'That one failed on the server.' : 'Here you go.',
          timestamp: now - 59_000 + index * 2_000,
          status: 'complete',
          toolCalls: [toolCall]
        }
      ];
    });
  }

  /** Re-announce the history widgets so their resources are resolved and stamped. */
  public remountHistoryWidgets(): void {
    for (const { id: toolCallId } of HISTORY_WIDGETS) {
      this._emitMcpUiResource({
        toolCallId,
        toolName: APP_TOOL_NAME,
        resourceUri: RESOURCE_URI,
        mimeType: 'text/html;profile=mcp-app'
      });
    }
  }

  #runWidget(index: number): void {
    const widget = this.#widgets[index];
    if (!widget) {
      this.#runFollowUp();
      return;
    }

    const outcome = widget.outcome ?? 'success';
    const toolCallId = generateId();
    const messageId = generateId();
    const args = { label: widget.label, greeting: 'Hello from the mock adapter' };
    this.#labels.set(toolCallId, widget.label);

    const toolCallSteps = [
      (): void => this._emitToolCallStart({ id: toolCallId, messageId, name: APP_TOOL_NAME }),
      (): void =>
        this._emitToolCallArgs({
          id: toolCallId,
          messageId,
          name: APP_TOOL_NAME,
          argsBuffer: JSON.stringify(args),
          partialArgs: args
        }),
      (): void => {
        this._emitToolCallEnd({ id: toolCallId, messageId, name: APP_TOOL_NAME, args });
        this._emitToolCall({ id: toolCallId, messageId, name: APP_TOOL_NAME, args });
      }
    ];
    const resourceStep = (): void =>
      this._emitMcpUiResource({
        toolCallId,
        toolName: APP_TOOL_NAME,
        resourceUri: RESOURCE_URI,
        mimeType: 'text/html;profile=mcp-app'
      });
    const resultSteps =
      outcome === 'no-result' ? [] : [(): void => this.#emitResult({ toolCallId, outcome, label: widget.label })];

    const steps =
      widget.order === 'resource-first'
        ? [resourceStep, ...toolCallSteps, ...resultSteps]
        : [...toolCallSteps, resourceStep, ...resultSteps];
    this.#runSteps(steps, () => this.#runWidget(index + 1));
  }

  #emitResult(config: { toolCallId: string; outcome: Exclude<McpAppMockOutcome, 'no-result'>; label: string }): void {
    const { toolCallId, outcome, label } = config;
    const isSuccess = outcome === 'success';
    const modelText = this.#modelText(outcome, label);

    this._emitToolResult({
      toolCallId,
      result: modelText,
      ...(outcome === 'cancelled'
        ? { cancelled: true, isError: true }
        : {
            mcpResult: this.#mcpResult(outcome, label),
            structuredContent: isSuccess ? this.#structuredContent(label) : undefined,
            isError: !isSuccess
          }),
      message: {
        id: generateId(),
        role: 'tool',
        content: modelText,
        timestamp: Date.now(),
        status: isSuccess ? 'complete' : 'error',
        toolCallId
      }
    });
  }

  /** Model-facing text; deliberately distinct from the View's `mcpResult`. */
  #modelText(outcome: 'success' | 'error' | 'cancelled', label: string): string {
    switch (outcome) {
      case 'success':
        return `[model-facing] ${APP_TOOL_NAME} succeeded for "${label}".`;
      case 'error':
        return `[model-facing] Error: ${APP_TOOL_NAME} failed for "${label}" (upstream 503).`;
      case 'cancelled':
        return `[model-facing] ${APP_TOOL_NAME} was cancelled for "${label}".`;
    }
  }

  #mcpResult(outcome: 'success' | 'error', label: string): NonNullable<ToolCall['mcpResult']> {
    if (outcome === 'error') {
      return {
        content: [{ type: 'text', text: `Upstream service unavailable (503) for ${label}.` }],
        isError: true,
        _meta: { upstreamStatus: 503 }
      };
    }
    return { content: [{ type: 'text', text: `Status: ok. Label: ${label}` }], _meta: { source: 'mock' } };
  }

  #structuredContent(label: string): Record<string, unknown> {
    return { label, status: 'ok', items: [1, 2, 3] };
  }

  #runFollowUp(): void {
    const hasSettledWidget = this.#widgets.some(widget => widget.outcome !== 'no-result');
    setTimeout(() => {
      if (!hasSettledWidget) {
        // Mirrors a stream that ends with no tool-result for the widget's tool call.
        this._updateState({ isRunning: false });
        this._emitRunFinished();
        return;
      }
      const followUpId = generateId();
      this._emitMessageStart(followUpId);
      this.#streamText(followUpId, FOLLOW_UP_TEXT, () => {
        this._emitMessageEnd(followUpId);
        this._updateState({ isRunning: false });
        this._emitRunFinished();
      });
    }, STEP_DELAY);
  }

  #runSteps(steps: Array<() => void>, onDone: () => void): void {
    const [step, ...rest] = steps;
    if (!step) {
      onDone();
      return;
    }
    setTimeout(() => {
      step();
      this.#runSteps(rest, onDone);
    }, STEP_DELAY);
  }

  #streamText(messageId: string, text: string, onComplete: () => void): void {
    const words = text.split(' ');
    let i = 0;
    const stream = (): void => {
      if (i < words.length) {
        this._emitMessageDelta(messageId, (i === 0 ? '' : ' ') + words[i]);
        i++;
        setTimeout(stream, STREAM_WORD_DELAY);
      } else {
        onComplete();
      }
    };
    stream();
  }

  public override resolveMcpAppResource(params: McpAppResourceResolveParams): Promise<McpAppUiResource | undefined> {
    console.log('[mcp-app-mock] host: resolveMcpAppResource', params);
    const html = this.#widgetVariant === 'sdk' ? buildSdkWidgetHtml() : buildHandRolledWidgetHtml();
    return Promise.resolve({
      html,
      // Mirrors the template response `_meta.ui`: always present, spec shape, possibly empty.
      csp: { resourceDomains: [], connectDomains: [] },
      permissions: {},
      resourceUri: params.resourceUri,
      prefersBorder: true
    });
  }

  public override callMcpTool(params: McpToolCallParams): Promise<unknown> {
    console.log('[mcp-app-mock] host: callMcpTool', params);
    if (params.name === APP_ONLY_TOOL_NAME) {
      const label = this.#labels.get(params.toolCallId) ?? 'unknown widget';
      return Promise.resolve({
        content: [{ type: 'text', text: `Widget data refreshed for ${label}.` }],
        structuredContent: { refreshedAt: Date.now(), toolCallId: params.toolCallId, label }
      });
    }
    return Promise.reject(new Error(`Tool "${params.name}" is not callable from the app.`));
  }

  public override readMcpResource(params: McpResourceReadParams): Promise<unknown> {
    console.log('[mcp-app-mock] host: readMcpResource', params);
    return Promise.resolve({
      contents: [{ uri: params.uri, mimeType: 'text/plain', text: 'Mock resource content.' }]
    });
  }

  public override updateMcpModelContext(params: McpModelContextUpdateParams): Promise<void> {
    console.log('[mcp-app-mock] host: updateMcpModelContext', params);
    return Promise.resolve();
  }
}

const WIDGET_STYLES = `
  body { font-family: system-ui, sans-serif; margin: 0; padding: 16px; background: #fff; color: #1a1a1a; }
  body[data-theme='dark'] { background: #1e1e1e; color: #f0f0f0; }
  button { margin: 8px 8px 0 0; padding: 6px 12px; cursor: pointer; }
  pre { margin: 4px 0; white-space: pre-wrap; word-break: break-word; font-size: 12px; }
  #status { font-weight: 600; margin-top: 8px; }
  #status[data-state='error'], #status[data-state='cancelled'] { color: #c62828; }
`;

const WIDGET_BODY = `
  <div id="root">
    <div id="args">Connecting…</div>
    <div id="status" data-state="waiting">Waiting for result…</div>
    <pre id="result"></pre>
    <div id="actions" hidden>
      <button id="refresh" type="button">Refresh via app tool call</button>
      <button id="context" type="button">Update model context</button>
    </div>
    <pre id="output"></pre>
  </div>
`;

/** Transport-agnostic widget UI shared by both variants; each wires its own protocol client. */
const WIDGET_UI_SCRIPT = `
  const ui = (function () {
    const $ = id => document.getElementById(id);
    const json = value => JSON.stringify(value, null, 2);
    let label = 'Widget';
    return {
      setArgs(partial, args) {
        label = (args && args.label) || label;
        $('args').textContent = (partial ? 'Args (partial): ' : 'Args: ') + JSON.stringify(args);
      },
      setResult(params) {
        const state = params && params.isError ? 'error' : 'result';
        $('status').dataset.state = state;
        $('status').textContent = state === 'error' ? 'Error result' : 'Result';
        $('result').textContent = json(params);
        $('actions').hidden = false;
      },
      setCancelled(params) {
        $('status').dataset.state = 'cancelled';
        $('status').textContent = 'Cancelled' + (params && params.reason ? ': ' + params.reason : '');
      },
      setOutput(text) {
        $('output').textContent = text;
      },
      getLabel() {
        return label;
      },
      onRefresh(handler) {
        $('refresh').addEventListener('click', handler);
      },
      onContext(handler) {
        $('context').addEventListener('click', handler);
      },
      applyTheme(theme) {
        document.body.dataset.theme = theme || 'light';
      },
      contextPayload() {
        return {
          content: [{ type: 'text', text: 'User selected Tuesday in ' + label }],
          structuredContent: { selectedDay: 'tue', widget: label }
        };
      }
    };
  })();
`;

function buildHandRolledWidgetHtml(): string {
  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>${WIDGET_STYLES}</style>
  </head>
  <body>
    ${WIDGET_BODY}
    <script>
      ${WIDGET_UI_SCRIPT}
      (function () {
        let nextId = 2;
        const pending = new Map();

        function send(message) {
          window.parent.postMessage(message, '*');
        }

        function request(method, params) {
          const id = nextId++;
          return new Promise(resolve => {
            pending.set(id, resolve);
            send({ jsonrpc: '2.0', id, method, params });
          });
        }

        ui.onRefresh(async () => {
          const result = await request('tools/call', { name: 'refreshWidgetData', arguments: {} });
          ui.setOutput('Refreshed: ' + JSON.stringify({ content: result.content, structuredContent: result.structuredContent }));
        });

        ui.onContext(async () => {
          await request('ui/update-model-context', ui.contextPayload());
          ui.setOutput('Model context sent.');
        });

        window.addEventListener('message', event => {
          const data = event.data;
          if (!data || typeof data !== 'object') {
            return;
          }
          if (data.id !== undefined && pending.has(data.id)) {
            pending.get(data.id)(data.result);
            pending.delete(data.id);
            return;
          }
          switch (data.method) {
            case 'ui/notifications/tool-input-partial':
              ui.setArgs(true, data.params && data.params.arguments);
              break;
            case 'ui/notifications/tool-input':
              ui.setArgs(false, data.params && data.params.arguments);
              break;
            case 'ui/notifications/tool-result':
              ui.setResult(data.params);
              break;
            case 'ui/notifications/tool-cancelled':
              ui.setCancelled(data.params);
              break;
            case 'ui/notifications/host-context-changed':
              ui.applyTheme(data.params && data.params.theme);
              break;
          }
        });

        let resizeFrame = null;
        new ResizeObserver(() => {
          if (resizeFrame) {
            return;
          }
          resizeFrame = requestAnimationFrame(() => {
            resizeFrame = null;
            send({
              jsonrpc: '2.0',
              method: 'ui/notifications/size-changed',
              params: { width: Math.ceil(document.documentElement.scrollWidth), height: Math.ceil(document.documentElement.scrollHeight) }
            });
          });
        }).observe(document.documentElement);

        request('ui/initialize', {
          appInfo: { name: 'mock-widget-hand-rolled', version: '1.0.0' },
          appCapabilities: {},
          protocolVersion: '2026-01-26'
        }).then(result => {
          send({ jsonrpc: '2.0', method: 'ui/notifications/initialized' });
          ui.applyTheme(result && result.hostContext && result.hostContext.theme);
        });
      })();
    </script>
  </body>
</html>`;
}

/**
 * `app-with-deps.js` ends with a single `export {realName as PublicName, ...}` clause.
 * Concatenating the bundle text into an inline `<script type="module">` puts its top-level
 * declarations in scope, but the export aliases themselves aren't bindings — parsing this
 * clause to recover the current `App`/`PostMessageTransport` local names (rather than
 * hardcoding them) keeps this working across SDK versions/minification.
 */
function extractSdkLocalNames(sdkSource: string): { app: string; postMessageTransport: string; source: string } {
  const exportMatch = sdkSource.match(/export\s*\{([^}]*)\}\s*;?\s*$/);
  if (!exportMatch) {
    throw new Error('mcp-app-mock-adapter: could not locate the trailing export clause in the ext-apps SDK bundle.');
  }

  const pairs = exportMatch[1].split(',').map(pair => pair.trim());
  const findLocal = (publicName: string): string | undefined =>
    pairs.find(pair => pair.endsWith(` as ${publicName}`))?.split(' as ')[0];

  const app = findLocal('App');
  const postMessageTransport = findLocal('PostMessageTransport');
  if (!app || !postMessageTransport) {
    throw new Error('mcp-app-mock-adapter: could not resolve App/PostMessageTransport in the ext-apps SDK bundle.');
  }

  return { app, postMessageTransport, source: sdkSource.slice(0, exportMatch.index) };
}

function buildSdkWidgetHtml(): string {
  const { app, postMessageTransport, source } = extractSdkLocalNames(extAppsSdkSource);

  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>${WIDGET_STYLES}</style>
  </head>
  <body>
    ${WIDGET_BODY}
    <script type="module">
      ${source}
      window.__mcpAppSdk = { App: ${app}, PostMessageTransport: ${postMessageTransport} };
    </script>
    <script type="module">
      ${WIDGET_UI_SCRIPT}
      const { App, PostMessageTransport } = window.__mcpAppSdk;
      const app = new App({ name: 'mock-widget-sdk', version: '1.0.0' }, {});

      app.ontoolinputpartial = params => ui.setArgs(true, params.arguments);
      app.ontoolinput = params => ui.setArgs(false, params.arguments);
      app.ontoolresult = params => ui.setResult(params);
      app.ontoolcancelled = params => ui.setCancelled(params);
      app.onhostcontextchanged = ctx => ui.applyTheme(ctx.theme);

      ui.onRefresh(async () => {
        const result = await app.callServerTool({ name: 'refreshWidgetData', arguments: {} });
        ui.setOutput('Refreshed: ' + JSON.stringify({ content: result.content, structuredContent: result.structuredContent }));
      });

      ui.onContext(async () => {
        await app.updateModelContext(ui.contextPayload());
        ui.setOutput('Model context sent.');
      });

      app.connect(new PostMessageTransport(window.parent, window.parent)).then(() => {
        ui.applyTheme(app.getHostContext()?.theme);
      });
    </script>
  </body>
</html>`;
}

import extAppsSdkSource from '@modelcontextprotocol/ext-apps/app-with-deps?raw';
import type { McpResourceReadParams, McpToolCallParams } from '$lib/ai-chatbot/agent-adapter.js';
import type {
  ChatMessage,
  McpAppResourceCsp,
  McpAppResourcePermissions,
  McpAppUiResource
} from '$lib/ai-chatbot/types.js';
import { generateId } from '$lib/ai-chatbot/utils.js';
import { MockAdapter } from './mock-adapter.js';

export type McpAppWidgetVariant = 'sdk' | 'hand-rolled';

export interface McpAppMockAdapterOptions {
  /** Which mock widget implementation `resolveMcpAppResource` returns. */
  widgetVariant?: McpAppWidgetVariant;
}

const APP_TOOL_NAME = 'renderMcpApp';
const APP_ONLY_TOOL_NAME = 'refreshWidgetData';
const STEP_DELAY = 700;
const STREAM_WORD_DELAY = 40;

const INTRO_TEXT = "Sure, let's take a look — here's an interactive widget with that info.";
const FOLLOW_UP_TEXT = 'Let me know if you want to dig into any of that further.';

/**
 * Drives the Step 4 MCP-app demo: streams intro text, then a `renderMcpApp` tool call
 * (stamps a UI resource once args land, then completes the tool result), then a short
 * follow-up text chunk — mirroring how a real agent narrates around a widget render.
 * Also services the widget's own `tools/call` (a `visibility:["app"]`-style tool hidden
 * from the model tool list) and `resources/read` forwarding.
 */
export class McpAppMockAdapter extends MockAdapter {
  readonly #widgetVariant: McpAppWidgetVariant;

  constructor(options: McpAppMockAdapterOptions = {}) {
    super({ tools: [{ name: APP_TOOL_NAME, displayName: 'Render MCP app', mcpApp: {} }] });
    this.#widgetVariant = options.widgetVariant ?? 'hand-rolled';
  }

  public override sendMessage(_messages: ChatMessage[]): void {
    this._updateState({ isRunning: true });
    this._emitRunStarted();

    const introId = generateId();
    this._emitMessageStart(introId);
    this.#streamText(introId, INTRO_TEXT, () => {
      this._emitMessageEnd(introId);
      this.#runToolCall();
    });
  }

  #runToolCall(): void {
    const toolCallId = generateId();
    const messageId = generateId();
    const args = { greeting: 'Hello from the mock adapter' };

    setTimeout(() => {
      this._emitToolCallStart({ id: toolCallId, messageId, name: APP_TOOL_NAME });

      setTimeout(() => {
        this._emitToolCallArgs({
          id: toolCallId,
          messageId,
          name: APP_TOOL_NAME,
          argsBuffer: JSON.stringify(args),
          partialArgs: args
        });

        setTimeout(() => {
          this._emitToolCallEnd({ id: toolCallId, messageId, name: APP_TOOL_NAME, args });

          setTimeout(() => {
            this._emitMcpUiResource({ toolCallId, resourceUri: 'ui://mock-widget', csp: {}, permissions: [] });

            setTimeout(() => {
              this._emitToolResult({
                toolCallId,
                result: { content: [{ type: 'text', text: `Status: ok. Greeting: ${args.greeting}` }] },
                message: {
                  id: generateId(),
                  role: 'tool',
                  content: '',
                  timestamp: Date.now(),
                  status: 'complete',
                  toolCallId
                }
              });
              this.#runFollowUp();
            }, STEP_DELAY);
          }, STEP_DELAY);
        }, STEP_DELAY);
      }, STEP_DELAY);
    }, STEP_DELAY);
  }

  #runFollowUp(): void {
    setTimeout(() => {
      const followUpId = generateId();
      this._emitMessageStart(followUpId);
      this.#streamText(followUpId, FOLLOW_UP_TEXT, () => {
        this._emitMessageEnd(followUpId);
        this._updateState({ isRunning: false });
        this._emitRunFinished();
      });
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

  public override resolveMcpAppResource(params: {
    resourceUri: string;
    csp?: McpAppResourceCsp;
    permissions?: McpAppResourcePermissions;
  }): Promise<McpAppUiResource | undefined> {
    const html = this.#widgetVariant === 'sdk' ? buildSdkWidgetHtml() : buildHandRolledWidgetHtml();
    return Promise.resolve({
      html,
      csp: {},
      permissions: [],
      resourceUri: params.resourceUri,
      prefersBorder: true
    });
  }

  public override callMcpTool(params: McpToolCallParams): Promise<unknown> {
    if (params.name === APP_ONLY_TOOL_NAME) {
      return Promise.resolve({
        content: [{ type: 'text', text: 'Widget data refreshed.' }],
        structuredContent: { refreshedAt: Date.now() }
      });
    }
    return Promise.reject(new Error(`Tool "${params.name}" is not callable from the app.`));
  }

  public override readMcpResource(params: McpResourceReadParams): Promise<unknown> {
    return Promise.resolve({
      contents: [{ uri: params.uri, mimeType: 'text/plain', text: 'Mock resource content.' }]
    });
  }
}

const WIDGET_STYLES = `
  body { font-family: system-ui, sans-serif; margin: 0; padding: 16px; background: #fff; color: #1a1a1a; }
  body[data-theme='dark'] { background: #1e1e1e; color: #f0f0f0; }
  button { margin-top: 8px; padding: 6px 12px; cursor: pointer; }
  #root { white-space: pre-wrap; word-break: break-word; }
`;

function buildHandRolledWidgetHtml(): string {
  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>${WIDGET_STYLES}</style>
  </head>
  <body>
    <div id="root">Connecting…</div>
    <script>
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

        function render(text) {
          document.getElementById('root').textContent = text;
        }

        function applyTheme(theme) {
          document.body.dataset.theme = theme || 'light';
        }

        function renderResult(params) {
          render('Result: ' + JSON.stringify((params && params.content) || params));
          const root = document.getElementById('root');
          const btn = document.createElement('button');
          btn.textContent = 'Refresh via app tool call';
          btn.onclick = async () => {
            const result = await request('tools/call', { name: 'refreshWidgetData', arguments: {} });
            render('Refreshed: ' + JSON.stringify((result && result.content) || result));
          };
          root.appendChild(document.createElement('br'));
          root.appendChild(btn);
        }

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
              render('Args (partial): ' + JSON.stringify(data.params && data.params.arguments));
              break;
            case 'ui/notifications/tool-input':
              render('Args: ' + JSON.stringify(data.params && data.params.arguments));
              break;
            case 'ui/notifications/tool-result':
              renderResult(data.params);
              break;
            case 'ui/notifications/host-context-changed':
              applyTheme(data.params && data.params.theme);
              break;
          }
        });

        request('ui/initialize', {
          appInfo: { name: 'mock-widget-hand-rolled', version: '1.0.0' },
          appCapabilities: {},
          protocolVersion: '2026-01-26'
        }).then(result => {
          send({ jsonrpc: '2.0', method: 'ui/notifications/initialized' });
          applyTheme(result && result.hostContext && result.hostContext.theme);
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
    <div id="root">Connecting…</div>
    <script type="module">
      ${source}
      window.__mcpAppSdk = { App: ${app}, PostMessageTransport: ${postMessageTransport} };
    </script>
    <script type="module">
      const { App, PostMessageTransport } = window.__mcpAppSdk;
      const app = new App({ name: 'mock-widget-sdk', version: '1.0.0' }, {});
      const root = document.getElementById('root');

      function applyTheme(theme) {
        document.body.dataset.theme = theme || 'light';
      }

      app.ontoolinputpartial = params => {
        root.textContent = 'Args (partial): ' + JSON.stringify(params.arguments);
      };
      app.ontoolinput = params => {
        root.textContent = 'Args: ' + JSON.stringify(params.arguments);
      };
      app.ontoolresult = params => {
        root.textContent = 'Result: ' + JSON.stringify(params.content ?? params);
        const btn = document.createElement('button');
        btn.textContent = 'Refresh via app tool call';
        btn.addEventListener('click', async () => {
          const result = await app.callServerTool({ name: 'refreshWidgetData', arguments: {} });
          root.textContent = 'Refreshed: ' + JSON.stringify(result.content);
        });
        root.appendChild(document.createElement('br'));
        root.appendChild(btn);
      };
      app.onhostcontextchanged = ctx => applyTheme(ctx.theme);

      app.connect(new PostMessageTransport(window.parent, window.parent)).then(() => {
        applyTheme(app.getHostContext()?.theme);
      });
    </script>
  </body>
</html>`;
}

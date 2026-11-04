import type {
  McpAppResourceResolveParams,
  McpModelContextUpdateParams,
  McpResourceReadParams,
  McpToolCallParams
} from '$lib/ai-chatbot/agent-adapter.js';
import type { ChatMessage, McpAppUiResource, McpToolResult } from '$lib/ai-chatbot/types.js';
import { generateId } from '$lib/ai-chatbot/utils.js';
import { MockAdapter } from './mock-adapter.js';

export type McpAppDemoScenario = 'weather' | 'form' | 'store-locator';

export interface McpAppDemoAdapterOptions {
  /** Which demo widget `resolveMcpAppResource` returns. */
  scenario: McpAppDemoScenario;
}

const STEP_DELAY = 500;
const STREAM_WORD_DELAY = 30;

const SCENARIOS: Record<
  McpAppDemoScenario,
  { toolName: string; displayName: string; intro: string; followUp: string; args: Record<string, unknown> }
> = {
  weather: {
    toolName: 'getWeather',
    displayName: 'Get weather',
    intro: "Sure, here's the current weather.",
    followUp: 'Let me know if you want the forecast for another city.',
    args: { location: 'Columbus, OH' }
  },
  form: {
    toolName: 'collectTripDetails',
    displayName: 'Collect trip details',
    intro: "I'll need a few details to book that — go ahead and fill out the form below.",
    followUp: "Thanks! I've got everything I need.",
    args: { purpose: 'business trip' }
  },
  'store-locator': {
    toolName: 'findNearbyStores',
    displayName: 'Find nearby stores',
    intro: 'Here are the closest locations — you can expand the map for a better view.',
    followUp: 'Let me know if you want directions to any of these.',
    args: { query: 'coffee near downtown' }
  }
};

/**
 * Drives one of three realistic MCP-app demos end to end (intro text -> streamed tool
 * call -> `tool-call` chunk -> `mcp-ui-resource` -> tool result -> follow-up text), shaped
 * like a Foundry stream: no client-side tool definition, the model-facing `result` is
 * plain text, and the widget's payload travels as `mcpResult` + `structuredContent`.
 * Policy (`csp`/`permissions`) comes from `resolveMcpAppResource`. Exercises a
 * distinct slice of the app<->host surface per scenario:
 *
 * - `weather` — read-only widget. No app->host interactivity; exists to prove a widget
 *   can be pure display, driven entirely by streamed tool args + the final result.
 * - `form` — the widget collects user input and forwards it back as an app-initiated
 *   `tools/call` (`submitTripDetails`, a `visibility:["app"]`-style tool hidden from the
 *   model's tool list), then reports the server's structured result inline. Exercises
 *   `oncalltool`.
 * - `store-locator` — exercises `ui/request-display-mode` (expand to fullscreen via the
 *   Popover API) and `ui/open-link` (directions link opens in a new tab from the host).
 */
export class McpAppDemoAdapter extends MockAdapter {
  readonly #scenario: McpAppDemoScenario;
  #hasRunToolCall = false;

  constructor(options: McpAppDemoAdapterOptions) {
    super();
    this.#scenario = options.scenario;
  }

  public override sendMessage(messages: ChatMessage[]): void {
    // Once the widget has rendered, a widget-forwarded `ui/message` (e.g. "ask about
    // hours") re-enters this same method — answer it directly rather than re-running the
    // tool call, matching how a real agent would route a follow-up question.
    if (this.#hasRunToolCall) {
      this.#runFollowUpAnswer(messages);
      return;
    }

    this._updateState({ isRunning: true });
    this._emitRunStarted();

    const introId = generateId();
    this._emitMessageStart(introId);
    this.#streamText(introId, SCENARIOS[this.#scenario].intro, () => {
      this._emitMessageEnd(introId);
      this.#runToolCall();
    });
  }

  #runFollowUpAnswer(messages: ChatMessage[]): void {
    this._updateState({ isRunning: true });
    this._emitRunStarted();

    const lastMessage = messages[messages.length - 1];
    const answer = lastMessage?.content
      ? `Sorry, I don't have that information handy — try checking their website for "${lastMessage.content}".`
      : "I'm not sure — try checking their website for that.";

    const messageId = generateId();
    this._emitMessageStart(messageId);
    this.#streamText(messageId, answer, () => {
      this._emitMessageEnd(messageId);
      this._updateState({ isRunning: false });
      this._emitRunFinished();
    });
  }

  #runToolCall(): void {
    const config = SCENARIOS[this.#scenario];
    const toolCallId = generateId();
    const messageId = generateId();
    const args = config.args;

    const emitResource = (): void => {
      this._emitMcpUiResource({
        toolCallId,
        toolName: config.toolName,
        resourceUri: `ui://${this.#scenario}`,
        mimeType: 'text/html;profile=mcp-app'
      });
    };
    const emitToolCall = [
      (): void => this._emitToolCallStart({ id: toolCallId, messageId, name: config.toolName }),
      (): void =>
        this._emitToolCallArgs({
          id: toolCallId,
          messageId,
          name: config.toolName,
          argsBuffer: JSON.stringify(args),
          partialArgs: args
        }),
      (): void => {
        this._emitToolCallEnd({ id: toolCallId, messageId, name: config.toolName, args });
        this._emitToolCall({ id: toolCallId, messageId, name: config.toolName, args });
      }
    ];
    const emitResult = (): void => {
      const modelText = this.#modelText();
      this._emitToolResult({
        toolCallId,
        result: modelText,
        mcpResult: this.#mcpResult(),
        structuredContent: this.#structuredContent(),
        message: {
          id: generateId(),
          role: 'tool',
          content: modelText,
          timestamp: Date.now(),
          status: 'complete',
          toolCallId
        }
      });
      this.#hasRunToolCall = true;
    };

    // The store locator announces its widget before the tool-call chunks; the others after.
    const steps =
      this.#scenario === 'store-locator'
        ? [emitResource, ...emitToolCall, emitResult]
        : [...emitToolCall, emitResource, emitResult];
    this.#runSteps(steps, () => this.#runFollowUp());
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

  #resultText(): string {
    switch (this.#scenario) {
      case 'weather':
        return '72°F, partly cloudy in Columbus, OH.';
      case 'form':
        return 'Trip details form ready — waiting on user input.';
      case 'store-locator':
        return 'Found 3 coffee shops within a mile of downtown.';
    }
  }

  /** Model-facing text; deliberately distinct from the View's `mcpResult`. */
  #modelText(): string {
    return `[model-facing] ${SCENARIOS[this.#scenario].toolName} succeeded: ${this.#resultText()}`;
  }

  #mcpResult(): McpToolResult {
    return { content: [{ type: 'text', text: this.#resultText() }] };
  }

  #structuredContent(): unknown {
    switch (this.#scenario) {
      case 'weather':
        return {
          location: 'Columbus, OH',
          temperatureF: 72,
          condition: 'Partly cloudy',
          high: 78,
          low: 61,
          humidity: 48,
          windMph: 7
        };
      case 'form':
        return undefined;
      case 'store-locator':
        return {
          query: 'coffee near downtown',
          results: [
            { name: 'Stauf’s Coffee Roasters', distanceMi: 0.3, address: '999 W 5th Ave' },
            { name: 'One Line Coffee', distanceMi: 0.6, address: '15 W Gay St' },
            { name: 'Yeah, Me Too', distanceMi: 0.8, address: '32 Price Ave' }
          ]
        };
    }
  }

  #runFollowUp(): void {
    setTimeout(() => {
      const followUpId = generateId();
      this._emitMessageStart(followUpId);
      this.#streamText(followUpId, SCENARIOS[this.#scenario].followUp, () => {
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

  public override updateMcpModelContext(params: McpModelContextUpdateParams): Promise<void> {
    console.log(`[mcp-app-demo:${this.#scenario}] host: updateMcpModelContext`, params);
    return Promise.resolve();
  }

  public override resolveMcpAppResource(params: McpAppResourceResolveParams): Promise<McpAppUiResource | undefined> {
    console.log(`[mcp-app-demo:${this.#scenario}] host: resolveMcpAppResource`, params);
    return Promise.resolve({
      html: buildWidgetHtml(this.#scenario),
      ...this.#resourcePolicy(),
      resourceUri: params.resourceUri,
      prefersBorder: this.#scenario !== 'weather'
    });
  }

  /** Mirrors the template response's `_meta.ui`: always present, possibly empty. */
  #resourcePolicy(): Pick<McpAppUiResource, 'csp' | 'permissions'> {
    if (this.#scenario === 'store-locator') {
      return {
        csp: { resourceDomains: ['https://maps.example.com'], connectDomains: ['https://api.maps.example.com'] },
        permissions: { geolocation: {} }
      };
    }
    return { csp: {}, permissions: {} };
  }

  public override callMcpTool(params: McpToolCallParams): Promise<unknown> {
    console.log(`[mcp-app-demo:${this.#scenario}] host: callMcpTool`, params);
    if (this.#scenario === 'form' && params.name === 'submitTripDetails') {
      const result = {
        content: [
          { type: 'text', text: `Trip details received for ${String(params.arguments?.destination ?? 'your trip')}.` }
        ],
        structuredContent: { confirmationId: generateId(), receivedAt: Date.now(), ...params.arguments }
      };
      console.log(`[mcp-app-demo:${this.#scenario}] host: callMcpTool result`, result);
      return Promise.resolve(result);
    }
    const error = new Error(`Tool "${params.name}" is not callable from the app.`);
    console.error(`[mcp-app-demo:${this.#scenario}] host: callMcpTool rejected`, error);
    return Promise.reject(error);
  }

  public override readMcpResource(params: McpResourceReadParams): Promise<unknown> {
    console.log(`[mcp-app-demo:${this.#scenario}] host: readMcpResource`, params);
    return Promise.resolve({
      contents: [{ uri: params.uri, mimeType: 'text/plain', text: 'Demo resource content.' }]
    });
  }
}

const BASE_WIDGET_STYLES = `
  :root { color-scheme: light dark; }
  * { box-sizing: border-box; }
  body {
    font-family: var(--font-sans, system-ui, sans-serif);
    font-size: var(--font-text-md-size, 1rem);
    margin: 0;
    padding: 16px;
    background: var(--color-background-primary, #fff);
    color: var(--color-text-primary, #1a1a1a);
  }
  body[data-theme='dark'] {
    background: var(--color-background-primary, #1e1e1e);
    color: var(--color-text-primary, #f0f0f0);
  }
  button {
    font: inherit;
    padding: 8px 14px;
    border-radius: var(--border-radius-md, 6px);
    border: var(--border-width-regular, 1px) solid transparent;
    cursor: pointer;
  }
  button.primary { background: var(--color-ring-primary, #2f5fdb); color: var(--color-text-inverse, #fff); }
  button.secondary {
    background: transparent;
    border-color: var(--color-border-primary, currentColor);
    color: inherit;
  }
`;

function widgetShell(scenario: McpAppDemoScenario, bodyHtml: string, script: string): string {
  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>${BASE_WIDGET_STYLES}</style>
  </head>
  <body data-scenario="${scenario}">
    ${bodyHtml}
    <script>${script}</script>
  </body>
</html>`;
}

/**
 * Shared bridge client injected into every demo widget: JSON-RPC 2.0 over `postMessage`,
 * mirroring the protocol impl B (`app-bridge.ts`) speaks, plus a resize observer so the
 * host container tracks content height without a feedback loop.
 *
 * Every message sent and received is logged to the console (tagged with the widget's
 * scenario, from \`data-scenario\` on \`<body>\`) so the full app<->host JSON-RPC traffic —
 * handshake, streamed tool args, tool result, resize, any app-initiated call — is visible
 * without opening devtools on the sandboxed iframe specifically. These logs are demo-only
 * scaffolding, not something a production widget would ship.
 */
const BRIDGE_CLIENT = `
  window.__bridge = (function () {
    let nextId = 2;
    const pending = new Map();
    const listeners = {};
    const logPrefix = '[mcp-app:' + (document.body.dataset.scenario || 'widget') + ']';

    function send(message) {
      console.log(logPrefix, '→ host', message.method || ('response #' + message.id), message);
      window.parent.postMessage(message, '*');
    }

    function request(method, params) {
      const id = nextId++;
      return new Promise(resolve => {
        pending.set(id, resolve);
        send({ jsonrpc: '2.0', id, method, params });
      });
    }

    function notify(method, params) {
      send({ jsonrpc: '2.0', method, params });
    }

    function on(method, handler) {
      listeners[method] = handler;
    }

    window.addEventListener('message', event => {
      const data = event.data;
      if (!data || typeof data !== 'object') {
        return;
      }
      if (data.id !== undefined && pending.has(data.id)) {
        console.log(logPrefix, '← host', 'response #' + data.id, data);
        pending.get(data.id)(data.result);
        pending.delete(data.id);
        return;
      }
      console.log(logPrefix, '← host', data.method, data);
      if (data.method === 'ui/notifications/host-context-changed') {
        applyStyles(data.params && data.params.styles);
      }
      const handler = listeners[data.method];
      if (handler) {
        handler(data.params || {});
      }
    });

    // Spec hostContext.styles.variables, set on :root so widget CSS can use var(--color-*, fallback).
    function applyStyles(styles) {
      const variables = (styles && styles.variables) || {};
      Object.keys(variables).forEach(key => document.documentElement.style.setProperty(key, variables[key]));
    }

    let resizeTimer = null;
    function reportSize() {
      if (resizeTimer) {
        return;
      }
      resizeTimer = requestAnimationFrame(() => {
        resizeTimer = null;
        notify('ui/notifications/size-changed', {
          width: Math.ceil(document.documentElement.scrollWidth),
          height: Math.ceil(document.documentElement.scrollHeight)
        });
      });
    }
    new ResizeObserver(reportSize).observe(document.documentElement);

    function connect() {
      return request('ui/initialize', {
        appInfo: { name: 'mcp-app-demo', version: '1.0.0' },
        appCapabilities: { availableDisplayModes: ['inline', 'fullscreen', 'pip'] },
        protocolVersion: '2026-01-26'
      }).then(result => {
        applyStyles(result.hostContext && result.hostContext.styles);
        notify('ui/notifications/initialized');
        reportSize();
        return result;
      });
    }

    return { request, notify, on, connect };
  })();
`;

function buildWidgetHtml(scenario: McpAppDemoScenario): string {
  switch (scenario) {
    case 'weather':
      return buildWeatherWidgetHtml();
    case 'form':
      return buildFormWidgetHtml();
    case 'store-locator':
      return buildStoreLocatorWidgetHtml();
  }
}

/** Read-only widget: no app->host interactivity, just tool-args + result rendering. */
function buildWeatherWidgetHtml(): string {
  const body = `
    <div id="card" style="text-align: center; min-width: 220px;">
      <div id="location" style="font-size: 14px; opacity: 0.7;">Loading…</div>
      <div id="temp" style="font-size: 48px; font-weight: 600; margin: 4px 0;">—</div>
      <div id="condition" style="font-size: 14px; margin-bottom: 12px;"></div>
      <div id="details" style="display: flex; justify-content: space-around; font-size: 12px; opacity: 0.8;"></div>
    </div>
  `;

  const script = `
    ${BRIDGE_CLIENT}
    (function () {
      function applyTheme(theme) {
        document.body.dataset.theme = theme || 'light';
      }

      function render(structured) {
        if (!structured) {
          return;
        }
        document.getElementById('location').textContent = structured.location || '';
        document.getElementById('temp').textContent = (structured.temperatureF ?? '—') + '°F';
        document.getElementById('condition').textContent = structured.condition || '';
        document.getElementById('details').innerHTML =
          '<span>H: ' + structured.high + '°</span>' +
          '<span>L: ' + structured.low + '°</span>' +
          '<span>Humidity: ' + structured.humidity + '%</span>' +
          '<span>Wind: ' + structured.windMph + ' mph</span>';
      }

      window.__bridge.on('ui/notifications/tool-input-partial', params => {
        document.getElementById('location').textContent = (params.arguments && params.arguments.location) + '…';
      });
      window.__bridge.on('ui/notifications/tool-result', params => {
        render(params.structuredContent);
      });
      window.__bridge.on('ui/notifications/host-context-changed', params => applyTheme(params.theme));

      window.__bridge.connect().then(result => applyTheme(result.hostContext && result.hostContext.theme));
    })();
  `;

  return widgetShell('weather', body, script);
}

/**
 * Interactive widget: collects input, forwards it via an app-initiated `tools/call`.
 *
 * Deliberately not a real `<form>`/`type="submit"` pair: the inner widget frame runs
 * under `sandbox="allow-scripts allow-same-origin"` (no `allow-forms`), so the browser
 * blocks the `submit` event before any JS handler runs — `evt.preventDefault()` never
 * executes because the listener itself never fires. A plain button + manual field reads
 * sidesteps the native form-submission gate entirely.
 */
function buildFormWidgetHtml(): string {
  const body = `
    <div id="trip-form" style="display: flex; flex-direction: column; gap: 10px; min-width: 260px;">
      <label style="font-size: 13px;">
        Destination
        <input id="destination" required style="width: 100%; padding: 6px; margin-top: 2px;" />
      </label>
      <label style="font-size: 13px;">
        Travel date
        <input id="date" type="date" required style="width: 100%; padding: 6px; margin-top: 2px;" />
      </label>
      <button id="submit" type="button" class="primary">Submit</button>
      <div id="status" style="font-size: 13px; margin-top: 4px;"></div>
    </div>
  `;

  const script = `
    ${BRIDGE_CLIENT}
    (function () {
      function applyTheme(theme) {
        document.body.dataset.theme = theme || 'light';
      }

      const destinationInput = document.getElementById('destination');
      const dateInput = document.getElementById('date');
      const submitButton = document.getElementById('submit');
      const status = document.getElementById('status');

      submitButton.addEventListener('click', async () => {
        if (!destinationInput.value || !dateInput.value) {
          status.textContent = 'Please fill out both fields.';
          return;
        }
        const args = { destination: destinationInput.value, date: dateInput.value };
        status.textContent = 'Submitting…';
        [destinationInput, dateInput, submitButton].forEach(el => (el.disabled = true));
        try {
          const result = await window.__bridge.request('tools/call', { name: 'submitTripDetails', arguments: args });
          const text = (result && result.content && result.content[0] && result.content[0].text) || 'Submitted.';
          status.textContent = text;
        } catch (err) {
          status.textContent = 'Something went wrong submitting the form.';
          [destinationInput, dateInput, submitButton].forEach(el => (el.disabled = false));
        }
      });

      window.__bridge.on('ui/notifications/host-context-changed', params => applyTheme(params.theme));
      window.__bridge.connect().then(result => applyTheme(result.hostContext && result.hostContext.theme));
    })();
  `;

  return widgetShell('form', body, script);
}

/** Exercises `ui/request-display-mode` (expand) and `ui/open-link` (directions). */
function buildStoreLocatorWidgetHtml(): string {
  const body = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
      <strong style="font-size: 14px;">Nearby coffee shops</strong>
      <div style="display: flex; gap: 8px;">
        <button id="pip" class="secondary" type="button">Pop out</button>
        <button id="expand" class="secondary" type="button">Expand</button>
      </div>
    </div>
    <ul id="results" style="list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px;"></ul>
  `;

  const script = `
    ${BRIDGE_CLIENT}
    (function () {
      let mode = 'inline';

      function applyTheme(theme) {
        document.body.dataset.theme = theme || 'light';
      }

      function render(structured) {
        if (!structured || !structured.results) {
          return;
        }
        const list = document.getElementById('results');
        list.innerHTML = '';
        structured.results.forEach(store => {
          const item = document.createElement('li');
          item.style.cssText = 'display: flex; justify-content: space-between; align-items: center; font-size: 13px; padding: 8px; border: 1px solid var(--color-border-primary, currentColor); border-radius: var(--border-radius-md, 6px);';
          const label = document.createElement('span');
          label.textContent = store.name + ' — ' + store.distanceMi + ' mi';
          const actions = document.createElement('div');
          actions.style.cssText = 'display: flex; gap: 6px;';

          const askHours = document.createElement('button');
          askHours.type = 'button';
          askHours.className = 'secondary';
          askHours.textContent = 'Ask about hours';
          askHours.addEventListener('click', () => {
            window.__bridge.request('ui/message', {
              content: [{ type: 'text', text: 'What are the hours for ' + store.name + '?' }],
              role: 'user'
            });
          });

          const link = document.createElement('button');
          link.type = 'button';
          link.className = 'secondary';
          link.textContent = 'Directions';
          link.addEventListener('click', () => {
            const query = encodeURIComponent(store.name + ' ' + store.address);
            window.__bridge.request('ui/open-link', { url: 'https://maps.example.com/search?q=' + query });
          });

          actions.appendChild(askHours);
          actions.appendChild(link);
          item.appendChild(label);
          item.appendChild(actions);
          list.appendChild(item);
        });
      }

      // The host can change the mode itself (exit button, Escape), so track it from host context.
      function applyDisplayMode(nextMode) {
        mode = nextMode || 'inline';
        document.getElementById('expand').textContent = mode === 'fullscreen' ? 'Collapse' : 'Expand';
        document.getElementById('pip').textContent = mode === 'pip' ? 'Dock' : 'Pop out';
      }

      async function toggleDisplayMode(target) {
        const result = await window.__bridge.request('ui/request-display-mode', { mode: mode === target ? 'inline' : target });
        applyDisplayMode(result.mode);
      }

      document.getElementById('expand').addEventListener('click', () => toggleDisplayMode('fullscreen'));
      document.getElementById('pip').addEventListener('click', () => toggleDisplayMode('pip'));

      window.__bridge.on('ui/notifications/tool-result', params => render(params.structuredContent));
      window.__bridge.on('ui/notifications/host-context-changed', params => {
        applyTheme(params.theme);
        applyDisplayMode(params.displayMode);
      });

      window.__bridge.connect().then(result => applyTheme(result.hostContext && result.hostContext.theme));
    })();
  `;

  return widgetShell('store-locator', body, script);
}

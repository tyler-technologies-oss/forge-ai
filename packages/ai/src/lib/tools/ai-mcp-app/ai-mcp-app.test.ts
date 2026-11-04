import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import type { McpAppUiResource, ToolCall } from '../../ai-chatbot/types.js';
import type { McpAppToolElement } from './ai-mcp-app.js';
import type { McpAppHost } from './mcp-app-context.js';

import './ai-mcp-app.js';

const RESOURCE: McpAppUiResource = { html: '<p>app</p>', csp: {}, permissions: {} };

function toolCall(overrides: Partial<ToolCall> = {}): ToolCall {
  return {
    id: 'call-1',
    messageId: 'msg-1',
    name: 'get_weather',
    args: {},
    status: 'executing',
    type: 'agent',
    ...overrides
  };
}

function createHost(registered: string[]): McpAppHost {
  return {
    callTool: async () => ({}),
    readResource: async () => ({}),
    updateModelContext: async () => {},
    draftMessage: async () => ({}),
    teardownView: () => {},
    registerView: view => {
      registered.push(view.toolCallId);
      return () => {};
    },
    hostContext: { theme: 'light' },
    sandboxUrl: `${window.location.origin}/__mcp-sandbox__`,
    hostCapabilities: {}
  };
}

async function render(value: ToolCall, host: McpAppHost): Promise<McpAppToolElement> {
  return fixture<McpAppToolElement>(html`<forge-ai-mcp-app .toolCall=${value} .host=${host}></forge-ai-mcp-app>`);
}

describe('McpAppToolElement loading state', () => {
  let warn: typeof console.warn;

  beforeEach(() => {
    warn = console.warn;
    console.warn = (): void => {};
  });

  afterEach(() => {
    console.warn = warn;
  });

  it('should render a placeholder without an iframe or bridge connection while loading', async () => {
    const registered: string[] = [];
    const el = await render(toolCall({ uiResourceStatus: 'loading' }), createHost(registered));

    expect(el.shadowRoot?.querySelector('.loading .forge-skeleton')).to.be.ok;
    expect(el.shadowRoot?.querySelector('iframe')).to.be.null;
    expect(registered).to.be.empty;
  });

  it('should switch to the iframe and connect when the resource arrives on the same element', async () => {
    const registered: string[] = [];
    const el = await render(toolCall({ uiResourceStatus: 'loading' }), createHost(registered));

    el.toolCall = toolCall({ uiResource: RESOURCE });
    await el.updateComplete;

    expect(el.shadowRoot?.querySelector('.loading')).to.be.null;
    expect(el.shadowRoot?.querySelector('iframe')).to.be.ok;
    expect(registered).to.deep.equal(['call-1']);
  });

  it('should render the error artifact when the resource failed to load', async () => {
    const el = await render(toolCall({ uiResourceStatus: 'error' }), createHost([]));

    expect(el.shadowRoot?.querySelector('forge-ai-empty-state')).to.be.ok;
    expect(el.shadowRoot?.textContent).to.contain('failed to load');
    expect(el.shadowRoot?.querySelector('iframe')).to.be.null;
  });

  it('should keep the missing-policy error for a resource without a policy', async () => {
    const resource = { html: '<p>app</p>' } as McpAppUiResource;
    const el = await render(toolCall({ uiResource: resource }), createHost([]));

    expect(el.shadowRoot?.textContent).to.contain('security policy is missing');
  });
});

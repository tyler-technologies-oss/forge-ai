import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import type { AssistantResponse, McpAppUiResource, ResponseItem, ToolCall } from '../ai-chatbot/types.js';
import type { AiAssistantResponseComponent } from './ai-assistant-response.js';

import './ai-assistant-response.js';

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

function response(children: ResponseItem[]): AssistantResponse {
  return { id: 'response-1', children, status: 'streaming', timestamp: 0 };
}

const TEXT: ResponseItem = { type: 'text', messageId: 'text-1', content: 'It is sunny.', status: 'streaming' };

async function render(value: AssistantResponse, showThinking = false): Promise<AiAssistantResponseComponent> {
  return fixture<AiAssistantResponseComponent>(
    html`<forge-ai-assistant-response .response=${value} ?show-thinking=${showThinking}></forge-ai-assistant-response>`
  );
}

function rendered(el: AiAssistantResponseComponent): Element[] {
  return Array.from(el.shadowRoot?.querySelector('.assistant-response')?.children ?? []);
}

describe('AiAssistantResponse MCP-app tool calls', () => {
  it('should render a loading MCP app ahead of later text, never the tool-call indicator', async () => {
    const el = await render(response([{ type: 'toolCall', data: toolCall({ uiResourceStatus: 'loading' }) }, TEXT]));

    const tags = rendered(el).map(child => child.localName);
    expect(tags.indexOf('forge-ai-mcp-app')).to.equal(0);
    expect(rendered(el)[1].classList.contains('text-chunk')).to.be.true;
    expect(el.shadowRoot?.querySelector('forge-ai-tool-call-indicator')).to.be.null;
  });

  it('should render a failed MCP app as a widget, not the tool-call indicator', async () => {
    const el = await render(response([{ type: 'toolCall', data: toolCall({ uiResourceStatus: 'error' }) }]));

    expect(el.shadowRoot?.querySelector('forge-ai-mcp-app')).to.be.ok;
    expect(el.shadowRoot?.querySelector('forge-ai-tool-call-indicator')).to.be.null;
  });

  it('should keep the same widget element when the resource resolves', async () => {
    const el = await render(response([{ type: 'toolCall', data: toolCall({ uiResourceStatus: 'loading' }) }]));
    const loading = el.shadowRoot?.querySelector('forge-ai-mcp-app');

    el.response = response([{ type: 'toolCall', data: toolCall({ uiResource: RESOURCE }) }]);
    await el.updateComplete;

    expect(el.shadowRoot?.querySelector('forge-ai-mcp-app')).to.equal(loading);
  });

  it('should render a plain agent tool call in the tool-call indicator', async () => {
    const el = await render(response([{ type: 'toolCall', data: toolCall() }]));

    expect(el.shadowRoot?.querySelector('forge-ai-tool-call-indicator')).to.be.ok;
    expect(el.shadowRoot?.querySelector('forge-ai-mcp-app')).to.be.null;
  });

  it('should hide the thinking indicator while an MCP app is loading', async () => {
    const el = await render(response([{ type: 'toolCall', data: toolCall({ uiResourceStatus: 'loading' }) }]), true);

    expect(el.shadowRoot?.querySelector('forge-ai-thinking-indicator')).to.be.null;
  });

  it('should show the thinking indicator once a loading MCP app call settles', async () => {
    const el = await render(
      response([{ type: 'toolCall', data: toolCall({ uiResourceStatus: 'loading', status: 'complete' }) }]),
      true
    );

    expect(el.shadowRoot?.querySelector('forge-ai-thinking-indicator')).to.be.ok;
  });
});

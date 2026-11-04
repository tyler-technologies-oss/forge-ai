import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import type { MessageItem, ToolCall } from '../ai-chatbot/types.js';
import type { AiMessageThreadComponent } from './ai-message-thread.js';

import './ai-message-thread.js';

function toolCallItem(overrides: Partial<ToolCall> = {}): MessageItem {
  return {
    type: 'toolCall',
    data: {
      id: 'call-1',
      messageId: 'msg-1',
      name: 'get_weather',
      args: {},
      status: 'complete',
      type: 'agent',
      ...overrides
    }
  };
}

async function render(messageItems: MessageItem[]): Promise<AiMessageThreadComponent> {
  return fixture<AiMessageThreadComponent>(
    html`<forge-ai-message-thread .messageItems=${messageItems}></forge-ai-message-thread>`
  );
}

describe('AiMessageThread MCP-app tool calls', () => {
  it('should render a top-level loading MCP app tool call as a widget', async () => {
    const el = await render([toolCallItem({ uiResourceStatus: 'loading' })]);

    expect(el.shadowRoot?.querySelector('forge-ai-mcp-app')).to.be.ok;
  });

  it('should not render a top-level plain agent tool call without a renderer', async () => {
    const el = await render([toolCallItem()]);

    expect(el.shadowRoot?.querySelector('forge-ai-mcp-app')).to.be.null;
    expect(el.shadowRoot?.querySelector('forge-ai-chatbot-tool-call')).to.be.null;
  });
});

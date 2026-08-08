import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';

import '$lib/ai-chatbot';
import { McpAppMockAdapter } from '../../../utils/mcp-app-mock-adapter';

const SANDBOX_URL = 'http://localhost:6017/sandbox.html';

const meta = {
  title: 'AI Components/Primitives/Chatbot/MCP App',
  component: 'forge-ai-chatbot'
} satisfies Meta;

export default meta;

type Story = StoryObj;

const onToolCall = action('forge-ai-chatbot-tool-call');
const onError = action('forge-ai-chatbot-error');
const onOpenLink = action('forge-ai-mcp-app-open-link');
const onMessage = action('forge-ai-mcp-app-message');
const onRequestDisplayMode = action('forge-ai-mcp-app-request-display-mode');
const onUpdateModelContext = action('forge-ai-mcp-app-update-model-context');

export const HandRolledWidget: Story = {
  render: () => {
    const adapter = new McpAppMockAdapter({ widgetVariant: 'hand-rolled' });
    return html`
      <forge-ai-chatbot
        style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;"
        .adapter=${adapter}
        mcp-app-sandbox-url=${SANDBOX_URL}
        @forge-ai-chatbot-tool-call=${onToolCall}
        @forge-ai-chatbot-error=${onError}
        @forge-ai-mcp-app-open-link=${onOpenLink}
        @forge-ai-mcp-app-message=${onMessage}
        @forge-ai-mcp-app-request-display-mode=${onRequestDisplayMode}
        @forge-ai-mcp-app-update-model-context=${onUpdateModelContext}>
      </forge-ai-chatbot>
    `;
  }
};

export const RealAppSdkWidget: Story = {
  render: () => {
    const adapter = new McpAppMockAdapter({ widgetVariant: 'sdk' });
    return html`
      <forge-ai-chatbot
        style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;"
        .adapter=${adapter}
        mcp-app-sandbox-url=${SANDBOX_URL}
        @forge-ai-chatbot-tool-call=${onToolCall}
        @forge-ai-chatbot-error=${onError}
        @forge-ai-mcp-app-open-link=${onOpenLink}
        @forge-ai-mcp-app-message=${onMessage}
        @forge-ai-mcp-app-request-display-mode=${onRequestDisplayMode}
        @forge-ai-mcp-app-update-model-context=${onUpdateModelContext}>
      </forge-ai-chatbot>
    `;
  }
};

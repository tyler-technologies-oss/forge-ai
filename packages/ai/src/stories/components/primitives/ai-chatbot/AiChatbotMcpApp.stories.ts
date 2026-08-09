import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ref } from 'lit/directives/ref.js';
import { action } from 'storybook/actions';
import type { AiChatbotComponent } from '$lib/ai-chatbot';

import '$lib/ai-chatbot';
import { McpAppMockAdapter } from '../../../utils/mcp-app-mock-adapter';
import { McpAppDemoAdapter } from '../../../utils/mcp-app-demo-adapter';

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

/**
 * Opens a widget-requested URL in a new tab. `url` comes from an untrusted widget, so it
 * is validated against an `http(s)` allowlist before ever reaching `window.open` — a
 * `javascript:`/`data:` URL is refused rather than executed.
 */
function handleOpenLink(evt: CustomEvent<{ url: string }>): void {
  onOpenLink(evt);
  const { url } = evt.detail;
  try {
    const parsed = new URL(url);
    if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
      console.log('[mcp-app-demo:store-locator] host: opening link', parsed.href);
      window.open(parsed.href, '_blank', 'noopener,noreferrer');
    } else {
      console.warn('[mcp-app-demo:store-locator] host: refused non-http(s) link', url);
    }
  } catch {
    console.warn('[mcp-app-demo:store-locator] host: refused malformed link', url);
  }
}

/** Re-enters the normal chat stream with the widget's message, as a real app would. */
function handleWidgetMessage(chatbot: AiChatbotComponent | undefined, evt: CustomEvent<{ content: string }>): void {
  onMessage(evt);
  console.log('[mcp-app-demo:store-locator] host: widget-initiated ui/message', evt.detail);
  void chatbot?.sendMessage(evt.detail.content);
}

/** Logs the mode the host applied via the Popover API, echoed back to the widget. */
function handleRequestDisplayMode(evt: CustomEvent<{ mode: string }>): void {
  onRequestDisplayMode(evt);
  console.log('[mcp-app-demo:store-locator] host: display mode changed', evt.detail);
}

export const WeatherCard: Story = {
  name: 'Read-only widget (weather card)',
  render: () => {
    const adapter = new McpAppDemoAdapter({ scenario: 'weather' });
    return html`
      <forge-ai-chatbot
        style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;"
        .adapter=${adapter}
        mcp-app-sandbox-url=${SANDBOX_URL}
        @forge-ai-chatbot-tool-call=${onToolCall}
        @forge-ai-chatbot-error=${onError}>
      </forge-ai-chatbot>
    `;
  }
};

export const TripDetailsForm: Story = {
  name: 'Interactive widget (form -> app tool call)',
  render: () => {
    const adapter = new McpAppDemoAdapter({ scenario: 'form' });
    return html`
      <forge-ai-chatbot
        style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;"
        .adapter=${adapter}
        mcp-app-sandbox-url=${SANDBOX_URL}
        @forge-ai-chatbot-tool-call=${onToolCall}
        @forge-ai-chatbot-error=${onError}>
      </forge-ai-chatbot>
    `;
  }
};

export const StoreLocator: Story = {
  name: 'Display mode + open link (store locator)',
  render: () => {
    const adapter = new McpAppDemoAdapter({ scenario: 'store-locator' });
    let chatbotRef: AiChatbotComponent | undefined;
    return html`
      <forge-ai-chatbot
        ${ref(el => {
          chatbotRef = el as AiChatbotComponent;
        })}
        style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;"
        .adapter=${adapter}
        mcp-app-sandbox-url=${SANDBOX_URL}
        @forge-ai-chatbot-tool-call=${onToolCall}
        @forge-ai-chatbot-error=${onError}
        @forge-ai-mcp-app-open-link=${handleOpenLink}
        @forge-ai-mcp-app-message=${(evt: CustomEvent<{ content: string }>) => handleWidgetMessage(chatbotRef, evt)}
        @forge-ai-mcp-app-request-display-mode=${handleRequestDisplayMode}>
      </forge-ai-chatbot>
    `;
  }
};

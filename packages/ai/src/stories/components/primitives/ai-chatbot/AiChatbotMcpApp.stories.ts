import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ref } from 'lit/directives/ref.js';
import { action } from 'storybook/actions';
import { addons } from 'storybook/preview-api';
import type { AiChatbotComponent } from '$lib/ai-chatbot';

import '$lib/ai-chatbot';
import { McpAppMockAdapter } from '../../../utils/mcp-app-mock-adapter';
import { McpAppDemoAdapter } from '../../../utils/mcp-app-demo-adapter';

const SANDBOX_URL = 'http://localhost:6017/sandbox.html';

const meta = {
  title: 'AI Components/Primitives/Chatbot/MCP App',
  component: 'forge-ai-chatbot',
  argTypes: {
    theme: {
      control: 'select',
      options: ['auto', 'light', 'dark'],
      description:
        "Explicit theme fed into the widget's `hostContext.theme` (spec-defined `'light' | 'dark'`). Does not affect the chatbot's own appearance, which is controlled by Forge design tokens — this control only demonstrates the widget-facing signal. `auto` follows Storybook's own dark-mode toolbar toggle (the sun/moon icon, via `@vueless/storybook-dark-mode`) rather than `prefers-color-scheme`."
    }
  },
  args: {
    theme: 'auto'
  }
} satisfies Meta;

export default meta;

type Story = StoryObj<{ theme: 'auto' | 'light' | 'dark' }>;

/**
 * Returns a `ref()` callback that keeps `<forge-ai-chatbot>.theme` in sync with the
 * requested control value. For an explicit `light`/`dark`, sets it once. For `auto`,
 * subscribes to the same `DARK_MODE` channel event `.storybook/preview.ts` already
 * listens to for Forge's own dark theme — so toggling Storybook's toolbar icon updates
 * the widget's `hostContext.theme` live, without needing a page reload. The initial
 * value is read synchronously off `document.body`'s class (set by that same listener)
 * to avoid a flash before the first channel event arrives.
 */
function bindChatbotTheme(theme: 'auto' | 'light' | 'dark') {
  let unsubscribe: (() => void) | undefined;
  return (el: Element | undefined): void => {
    unsubscribe?.();
    unsubscribe = undefined;
    if (!el) {
      return;
    }

    const chatbot = el as AiChatbotComponent;
    if (theme !== 'auto') {
      chatbot.theme = theme;
      return;
    }

    const channel = addons.getChannel();
    const applyDarkMode = (isDark: boolean): void => {
      chatbot.theme = isDark ? 'dark' : 'light';
    };
    applyDarkMode(document.body.classList.contains('forge-storybook-dark'));
    channel.on('DARK_MODE', applyDarkMode);
    unsubscribe = () => channel.off('DARK_MODE', applyDarkMode);
  };
}

const onToolCall = action('forge-ai-chatbot-tool-call');
const onError = action('forge-ai-chatbot-error');
const onOpenLink = action('forge-ai-mcp-app-open-link');
const onMessage = action('forge-ai-mcp-app-message');
const onRequestDisplayMode = action('forge-ai-mcp-app-request-display-mode');
const onUpdateModelContext = action('forge-ai-mcp-app-update-model-context');

export const HandRolledWidget: Story = {
  render: args => {
    const adapter = new McpAppMockAdapter({ widgetVariant: 'hand-rolled' });
    return html`
      <forge-ai-chatbot
        ${ref(bindChatbotTheme(args.theme))}
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
  render: args => {
    const adapter = new McpAppMockAdapter({ widgetVariant: 'sdk' });
    return html`
      <forge-ai-chatbot
        ${ref(bindChatbotTheme(args.theme))}
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
  render: args => {
    const adapter = new McpAppDemoAdapter({ scenario: 'weather' });
    return html`
      <forge-ai-chatbot
        ${ref(bindChatbotTheme(args.theme))}
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
  render: args => {
    const adapter = new McpAppDemoAdapter({ scenario: 'form' });
    return html`
      <forge-ai-chatbot
        ${ref(bindChatbotTheme(args.theme))}
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
  render: args => {
    const adapter = new McpAppDemoAdapter({ scenario: 'store-locator' });
    let chatbotRef: AiChatbotComponent | undefined;
    const bindTheme = bindChatbotTheme(args.theme);
    return html`
      <forge-ai-chatbot
        ${ref(el => {
          chatbotRef = el as AiChatbotComponent | undefined;
          bindTheme(el);
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

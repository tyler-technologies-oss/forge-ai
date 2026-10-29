import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ref } from 'lit/directives/ref.js';
import { action } from 'storybook/actions';
import { addons } from 'storybook/preview-api';
import type { AiChatbotComponent } from '$lib/ai-chatbot';

import '$lib/ai-chatbot';
import {
  McpAppMockAdapter,
  type McpAppMockWidget,
  type McpAppWidgetVariant
} from '../../../utils/mcp-app-mock-adapter';
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
    },
    widgetVariant: {
      control: 'select',
      options: ['hand-rolled', 'sdk'],
      description:
        'Mock widget implementation for the lifecycle stories (error, cancelled, model context, ordering, multiple widgets, restored history): a hand-rolled JSON-RPC client or the real `@modelcontextprotocol/ext-apps` guest `App`.'
    }
  },
  args: {
    theme: 'auto',
    widgetVariant: 'hand-rolled'
  }
} satisfies Meta;

export default meta;

type Story = StoryObj<{ theme: 'auto' | 'light' | 'dark'; widgetVariant: McpAppWidgetVariant }>;

/**
 * Returns a `ref()` callback that keeps `<forge-ai-chatbot>.mcpAppTheme` in sync with the
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
      chatbot.mcpAppTheme = theme;
      return;
    }

    const channel = addons.getChannel();
    const applyDarkMode = (isDark: boolean): void => {
      chatbot.mcpAppTheme = isDark ? 'dark' : 'light';
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
const onRequestTeardown = action('forge-ai-mcp-app-request-teardown');

/**
 * Renders a chatbot backed by a {@link McpAppMockAdapter} with the lifecycle events the
 * stories inspect (open the Actions panel and the console to see them).
 */
function renderMockChatbot(config: { args: { theme: 'auto' | 'light' | 'dark' }; adapter: McpAppMockAdapter }) {
  return html`
    <forge-ai-chatbot
      ${ref(bindChatbotTheme(config.args.theme))}
      style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;"
      .adapter=${config.adapter}
      mcp-app-sandbox-url=${SANDBOX_URL}
      @forge-ai-chatbot-tool-call=${onToolCall}
      @forge-ai-chatbot-error=${onError}
      @forge-ai-mcp-app-open-link=${onOpenLink}
      @forge-ai-mcp-app-message=${onMessage}
      @forge-ai-mcp-app-request-display-mode=${onRequestDisplayMode}
      @forge-ai-mcp-app-update-model-context=${onUpdateModelContext}
      @forge-ai-mcp-app-request-teardown=${onRequestTeardown}>
    </forge-ai-chatbot>
  `;
}

function renderWidgets(
  args: { theme: 'auto' | 'light' | 'dark'; widgetVariant: McpAppWidgetVariant },
  widgets: McpAppMockWidget[]
) {
  return renderMockChatbot({ args, adapter: new McpAppMockAdapter({ widgetVariant: args.widgetVariant, widgets }) });
}

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
        @forge-ai-mcp-app-update-model-context=${onUpdateModelContext}
        @forge-ai-mcp-app-request-teardown=${onRequestTeardown}>
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
        @forge-ai-mcp-app-update-model-context=${onUpdateModelContext}
        @forge-ai-mcp-app-request-teardown=${onRequestTeardown}>
      </forge-ai-chatbot>
    `;
  }
};

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
        @forge-ai-mcp-app-request-display-mode=${handleRequestDisplayMode}>
      </forge-ai-chatbot>
    `;
  }
};

export const ToolErrorResult: Story = {
  name: 'Tool error result (isError)',
  render: args => renderWidgets(args, [{ label: 'Failing widget', outcome: 'error' }])
};

export const CancelledByAdapter: Story = {
  name: 'Cancelled (tool-result with cancelled: true)',
  render: args => renderWidgets(args, [{ label: 'Cancelled widget', outcome: 'cancelled' }])
};

export const CancelledNoResult: Story = {
  name: 'Cancelled (run ends with no tool-result)',
  render: args => renderWidgets(args, [{ label: 'Abandoned widget', outcome: 'no-result' }])
};

export const ModelContext: Story = {
  name: 'Model context (structuredContent + toolCallId)',
  render: args => renderWidgets(args, [{ label: 'Context widget' }])
};

export const ToolCallBeforeResource: Story = {
  name: 'Order: tool-call chunk, then mcp-ui-resource',
  render: args => renderWidgets(args, [{ label: 'Tool-call-first widget', order: 'tool-call-first' }])
};

export const ResourceBeforeToolCall: Story = {
  name: 'Order: mcp-ui-resource, then tool-call chunk',
  render: args => renderWidgets(args, [{ label: 'Resource-first widget', order: 'resource-first' }])
};

export const MultipleWidgets: Story = {
  name: 'Multiple widgets in one thread',
  render: args =>
    renderWidgets(args, [
      { label: 'Widget A' },
      { label: 'Widget B', order: 'resource-first' },
      { label: 'Widget C', outcome: 'error' }
    ])
};

/**
 * Restores history the way a consumer would on reload: `setMessages` with finalized tool
 * calls (no `uiResource`), then one `mcp-ui-resource` event per widget so each is resolved
 * and remounted.
 */
export const RestoredHistory: Story = {
  name: 'Restored history (setMessages + mcp-ui-resource)',
  render: args => {
    const adapter = new McpAppMockAdapter({ widgetVariant: args.widgetVariant });
    const restore = async (el: Element | undefined): Promise<void> => {
      if (!el) {
        return;
      }
      const chatbot = el as AiChatbotComponent;
      await chatbot.updateComplete;
      await new Promise(resolve => setTimeout(resolve));
      chatbot.setMessages(adapter.historyMessages);
      adapter.remountHistoryWidgets();
    };
    const bindTheme = bindChatbotTheme(args.theme);
    return html`
      <forge-ai-chatbot
        ${ref(el => {
          bindTheme(el);
          void restore(el);
        })}
        style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;"
        .adapter=${adapter}
        mcp-app-sandbox-url=${SANDBOX_URL}
        @forge-ai-chatbot-error=${onError}
        @forge-ai-mcp-app-update-model-context=${onUpdateModelContext}
        @forge-ai-mcp-app-request-teardown=${onRequestTeardown}>
      </forge-ai-chatbot>
    `;
  }
};

import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';
import { IconRegistry } from '@tylertech/forge';
import {
  tylIconMenu,
  tylIconSettings,
  tylIconPerson,
  tylIconDashboard,
  tylIconAnalytics,
  tylIconNotifications,
  tylIconChat
} from '@tylertech/tyler-icons';

import '$lib/ai-sidebar-chat';
import '$lib/ai-user-message';
import '$lib/ai-response-message';
import '$lib/ai-suggestions';
import '$lib/ai-button';
import '$lib/ai-prompt';

import {
  defineScaffoldComponent,
  defineAppBarComponent,
  defineCardComponent,
  defineToolbarComponent
} from '@tylertech/forge';

// Define Forge components
defineScaffoldComponent();
defineAppBarComponent();
defineCardComponent();
defineToolbarComponent();

// Register icons
IconRegistry.define([
  tylIconMenu,
  tylIconSettings,
  tylIconPerson,
  tylIconDashboard,
  tylIconAnalytics,
  tylIconNotifications,
  tylIconChat
]);

const component = 'forge-ai-sidebar-chat';

const meta = {
  title: 'AI Components/Form Factors/Sidebar',
  component,
  argTypes: {
    open: {
      control: { type: 'boolean' },
      description: 'Controls whether the sidebar chat is open'
    },
    expanded: {
      control: { type: 'boolean' },
      description: 'Controls whether the chat is displayed in an expanded modal state'
    }
  },
  args: {
    open: true,
    expanded: false
  },
  render: args => {
    const handleOpen = action('forge-ai-sidebar-chat-open');
    const handleClose = action('forge-ai-sidebar-chat-close');
    const handleExpand = action('forge-ai-sidebar-chat-expand');
    const handleCollapse = action('forge-ai-sidebar-chat-collapse');

    const sidebarChat = html`
      <forge-ai-sidebar-chat
        ?open=${args.open}
        ?expanded=${args.expanded}
        @forge-ai-sidebar-chat-open=${handleOpen}
        @forge-ai-sidebar-chat-close=${handleClose}
        @forge-ai-sidebar-chat-expand=${handleExpand}
        @forge-ai-sidebar-chat-collapse=${handleCollapse}>
        <forge-ai-user-message>
          Hello! Can you help me understand the analytics data I'm seeing in my dashboard?
        </forge-ai-user-message>
        <forge-ai-response-message>
          I'd be happy to help you understand your analytics data! I can see you're looking at your dashboard with
          various metrics and activity reports. What specific aspects would you like me to explain? I can help with: -
          Interpreting trends and patterns - Explaining key performance indicators - Suggesting areas for improvement -
          Answering questions about specific data points
        </forge-ai-response-message>
        <forge-ai-user-message> What should I focus on first when reviewing my dashboard? </forge-ai-user-message>
        <forge-ai-response-message>
          Great question! Here's a recommended approach for dashboard review: 1. **Start with key metrics** - Look at
          your primary KPIs first 2. **Check for anomalies** - Notice any unusual spikes or drops 3. **Review time
          trends** - Compare current data to historical patterns 4. **Identify opportunities** - Look for areas showing
          positive growth 5. **Address concerns** - Investigate any declining metrics Would you like me to walk through
          any of these areas with your current data?
        </forge-ai-response-message>

        <forge-ai-prompt slot="prompt"></forge-ai-prompt>
      </forge-ai-sidebar-chat>
    `;

    return html`
      <forge-scaffold style="overflow: hidden; height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-app-bar slot="header" title-text="AI Sidebar Chat Demo"></forge-app-bar>

        <forge-toolbar slot="body-header">
          <h2 class="forge-typography--heading4">Page Title</h2>
          <forge-ai-button
            slot="end"
            @click=${() => {
              const sidebar = document.querySelector('forge-ai-sidebar-chat');
              sidebar?.toggle();
            }}
            >Ask AI Assistant</forge-ai-button
          >
        </forge-toolbar>

        <main slot="body" style="padding: 24px;">
          <forge-card>
            <p>Demo of the AI Sidebar Chat component within a typical application layout.</p>
            <p>This is a structured form factor component that combines ai-sidebar and ai-chat-interface.</p>
            <p>The sidebar chat automatically handles composition and includes a minimize button in the header.</p>
          </forge-card>
        </main>

        ${args.position === 'left'
          ? html`<div slot="body-left">${sidebarChat}</div>`
          : html`<div slot="body-right">${sidebarChat}</div>`}
      </forge-scaffold>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};

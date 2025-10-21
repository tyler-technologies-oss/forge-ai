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

import '$lib/ai-sidebar';
import '$lib/ai-chat-interface';
import '$lib/ai-prompt';
import '$lib/ai-chat-header';
import '$lib/ai-user-message';
import '$lib/ai-response-message';
import '$lib/ai-button';

import { defineScaffoldComponent, defineAppBarComponent, defineCardComponent } from '@tylertech/forge';

// Define Forge components
defineScaffoldComponent();
defineAppBarComponent();
defineCardComponent();

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

const component = 'forge-ai-sidebar';

const meta = {
  title: 'AI Components/Primitives/Sidebar',
  component,
  argTypes: {
    open: {
      control: { type: 'boolean' },
      description: 'Controls whether the sidebar is open'
    },
    expanded: {
      control: { type: 'boolean' },
      description: 'Controls whether the sidebar is displayed in an expanded state'
    }
  },
  args: {
    open: false,
    expanded: false
  },
  render: args => {
    const handleOpen = action('forge-ai-sidebar-open');
    const handleClose = action('forge-ai-sidebar-close');

    const handleExpandClick = () => {
      const chatInterface = document.querySelector('forge-ai-chat-interface') as any;
      if (chatInterface) {
        chatInterface.expanded = !chatInterface.expanded;
      }
    };

    const handleMinimizeClick = () => {
      const sidebarEl = document.querySelector('forge-ai-sidebar') as any;
      sidebarEl?.close();
    };

    return html`
      <forge-scaffold style="overflow: hidden; height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-app-bar slot="header" title-text="AI Sidebar Demo"></forge-app-bar>

        <forge-toolbar slot="body-header">
          <h2 class="forge-typography--heading4">Page Title</h2>
          <forge-ai-button
            slot="end"
            @click=${() => {
              const sidebar = document.querySelector('forge-ai-sidebar');
              sidebar?.toggle();
            }}
            >Ask AI Assistant</forge-ai-button
          >
        </forge-toolbar>

        <main slot="body" style="padding: 24px;">
          <forge-card>
            <p>Demo of the AI Sidebar component within a typical application layout.</p>
          </forge-card>
        </main>

        <forge-ai-sidebar
          slot="body-right"
          ?open=${args.open}
          @forge-ai-sidebar-open=${handleOpen}
          @forge-ai-sidebar-close=${handleClose}>
          <forge-ai-chat-interface>
            <forge-ai-chat-header
              slot="header"
              show-expand-button
              show-minimize-button
              minimize-icon="panel"
              ?expanded=${args.expanded}
              @forge-ai-chat-header-expand=${handleExpandClick}
              @forge-ai-chat-header-minimize=${handleMinimizeClick}>
            </forge-ai-chat-header>
            <forge-ai-user-message>
              Hello! Can you help me understand the analytics data I'm seeing in my dashboard?
            </forge-ai-user-message>
            <forge-ai-response-message>
              I'd be happy to help you understand your analytics data! I can see you're looking at your dashboard with
              various metrics and activity reports. What specific aspects would you like me to explain? I can help with:
              - Interpreting trends and patterns - Explaining key performance indicators - Suggesting areas for
              improvement - Answering questions about specific data points
            </forge-ai-response-message>
            <forge-ai-user-message> What should I focus on first when reviewing my dashboard? </forge-ai-user-message>
            <forge-ai-response-message>
              Great question! Here's a recommended approach for dashboard review: 1. **Start with key metrics** - Look
              at your primary KPIs first 2. **Check for anomalies** - Notice any unusual spikes or drops 3. **Review
              time trends** - Compare current data to historical patterns 4. **Identify opportunities** - Look for areas
              showing positive growth 5. **Address concerns** - Investigate any declining metrics Would you like me to
              walk through any of these areas with your current data?
            </forge-ai-response-message>

            <forge-ai-prompt slot="prompt"></forge-ai-prompt>
          </forge-ai-chat-interface>
        </forge-ai-sidebar>
      </forge-scaffold>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};

import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';

import '$lib/ai-chatbot-launcher';
import type { Suggestion } from '$lib/ai-suggestions';
import { MockAdapter } from '../../../utils/mock-adapter';
import { standaloneStoryParams } from '../../../utils';
import { defineIconButtonComponent } from '@tylertech/forge';

const component = 'forge-ai-chatbot-launcher';

const meta = {
  title: 'AI Components/Form Factors/Launcher',
  component,
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input field'
    },
    titleText: {
      control: 'text',
      description: 'Title text displayed in the welcome view'
    },
    descriptionText: {
      control: 'text',
      description: 'Description text displayed below the title'
    },
    fileUpload: {
      control: 'select',
      options: ['on', 'off'],
      description: 'Enable file upload functionality'
    },
    voiceInput: {
      control: 'select',
      options: ['on', 'off'],
      description: 'Enable voice input functionality'
    },
    enableReactions: {
      control: 'boolean',
      description: 'Enable thumbs up/down reaction buttons'
    },
    disclaimerText: {
      control: 'text',
      description: 'Disclaimer text displayed below the prompt'
    }
  },
  args: {
    placeholder: 'How can I help you today?',
    titleText: 'AI Assistant',
    descriptionText: '',
    fileUpload: 'on',
    voiceInput: 'on',
    enableReactions: false,
    disclaimerText: 'AI can make mistakes. Always verify responses.'
  },
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });

    const onConnected = action('forge-ai-chatbot-launcher-connected');
    const onMessageSent = action('forge-ai-chatbot-launcher-message-sent');
    const onMessageReceived = action('forge-ai-chatbot-launcher-message-received');
    const onToolCall = action('forge-ai-chatbot-launcher-tool-call');
    const onError = action('forge-ai-chatbot-launcher-error');
    const onConversationStart = action('forge-ai-chatbot-launcher-conversation-start');
    const onClear = action('forge-ai-chatbot-launcher-clear');
    const onFeedback = action('forge-ai-chatbot-launcher-response-feedback');
    const onInfo = action('forge-ai-chatbot-launcher-info');
    const onAgentChange = action('forge-ai-chatbot-launcher-agent-change');

    return html`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=${adapter}
          placeholder=${args.placeholder}
          title-text=${args.titleText}
          description-text=${args.descriptionText}
          file-upload=${args.fileUpload}
          voice-input=${args.voiceInput}
          ?enable-reactions=${args.enableReactions}
          .disclaimerText=${args.disclaimerText}
          @forge-ai-chatbot-launcher-connected=${onConnected}
          @forge-ai-chatbot-launcher-message-sent=${onMessageSent}
          @forge-ai-chatbot-launcher-message-received=${onMessageReceived}
          @forge-ai-chatbot-launcher-tool-call=${onToolCall}
          @forge-ai-chatbot-launcher-error=${onError}
          @forge-ai-chatbot-launcher-conversation-start=${onConversationStart}
          @forge-ai-chatbot-launcher-clear=${onClear}
          @forge-ai-chatbot-launcher-response-feedback=${(evt: CustomEvent) => onFeedback(evt.detail)}
          @forge-ai-chatbot-launcher-info=${onInfo}
          @forge-ai-chatbot-launcher-agent-change=${(evt: CustomEvent) => onAgentChange(evt.detail)}>
        </forge-ai-chatbot-launcher>
      </div>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};

export const WithSuggestions: Story = {
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });

    const suggestions = [
      { text: 'Create report with AI', value: 'create-report' },
      { text: 'Create a report from scratch', value: 'scratch-report' },
      { text: 'Start with a template', value: 'template' }
    ] as Suggestion[];

    return html`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=${adapter}
          .suggestions=${suggestions}
          placeholder=${args.placeholder}
          title-text=${args.titleText}
          file-upload=${args.fileUpload}
          voice-input=${args.voiceInput}
          ?enable-reactions=${args.enableReactions}
          .disclaimerText=${args.disclaimerText}
          @forge-ai-chatbot-launcher-conversation-start=${action('forge-ai-chatbot-launcher-conversation-start')}>
        </forge-ai-chatbot-launcher>
      </div>
    `;
  }
};

export const FullPage: Story = {
  parameters: {
    layout: 'fullscreen'
  },
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });

    return html`
      <div style="width: 100%; height: 100vh;">
        <forge-ai-chatbot-launcher
          .adapter=${adapter}
          placeholder=${args.placeholder}
          title-text=${args.titleText}
          file-upload=${args.fileUpload}
          voice-input=${args.voiceInput}
          ?enable-reactions=${args.enableReactions}
          .disclaimerText=${args.disclaimerText}
          @forge-ai-chatbot-launcher-conversation-start=${action('forge-ai-chatbot-launcher-conversation-start')}>
        </forge-ai-chatbot-launcher>
      </div>
    `;
  }
};

export const WithCustomHeader: Story = {
  ...standaloneStoryParams,
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });

    return html`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=${adapter}
          placeholder=${args.placeholder}
          file-upload=${args.fileUpload}
          voice-input=${args.voiceInput}
          ?enable-reactions=${args.enableReactions}
          .disclaimerText=${args.disclaimerText}
          @forge-ai-chatbot-launcher-conversation-start=${action('forge-ai-chatbot-launcher-conversation-start')}>
          <svg slot="icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="var(--forge-theme-tertiary)" />
            <path d="M16 8v16M8 16h16" stroke="white" stroke-width="2" stroke-linecap="round" />
          </svg>
          <span slot="heading">Reporting Assistant</span>
          <span slot="description">I'm your Forge AI assistant. What would you like to do?</span>
        </forge-ai-chatbot-launcher>
      </div>
    `;
  }
};

export const WithHeaderActions: Story = {
  render: (args: any) => {
    defineIconButtonComponent();

    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });

    return html`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=${adapter}
          placeholder=${args.placeholder}
          title-text=${args.titleText}
          file-upload=${args.fileUpload}
          voice-input=${args.voiceInput}
          ?enable-reactions=${args.enableReactions}
          .disclaimerText=${args.disclaimerText}
          @forge-ai-chatbot-launcher-conversation-start=${action('forge-ai-chatbot-launcher-conversation-start')}>
          <forge-icon-button slot="header-actions" aria-label="History">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" />
            </svg>
          </forge-icon-button>
          <forge-icon-button slot="header-actions" aria-label="Settings">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94L14.4 2.81a.488.488 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
            </svg>
          </forge-icon-button>
        </forge-ai-chatbot-launcher>
      </div>
    `;
  }
};

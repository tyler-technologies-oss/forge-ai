import { tylIconForgeLogo, tylIconInfoOutline } from '@tylertech/tyler-icons';
import {
  AgUiAdapter,
  generateId,
  createToolRenderer,
  type AiChatbotComponent,
  type ForgeAiChatbotToolCallEventData,
  type ToolDefinition
} from '../../../lib/ai-chatbot';

import {
  defineAppBarComponent,
  defineCardComponent,
  defineIconButtonComponent,
  defineIconComponent,
  defineListComponent,
  defineListItemComponent,
  definePopoverComponent,
  defineScaffoldComponent,
  IconRegistry
} from '@tylertech/forge';

import './recipe-card.js';

defineScaffoldComponent();
defineAppBarComponent();
defineCardComponent();
defineListComponent();
defineListItemComponent();
defineIconButtonComponent();
definePopoverComponent();
defineIconComponent();

IconRegistry.define([tylIconForgeLogo, tylIconInfoOutline]);

const BASE_URL = 'http://localhost:3001/api/agents';
const AGENT_ID = 'agent-9b3ff935-f32d-477b-ac45-ce2a3570b90c';

const chatbot = document.getElementById('chatbot') as AiChatbotComponent;
const eventStreamEl = document.getElementById('eventStream') as HTMLElement;

let eventCounter = 0;

function addEventToStream(type: string, data: unknown): void {
  const time = new Date().toLocaleTimeString();
  const typeClass = type.toLowerCase().replace(/-/g, '_');
  const eventId = `event-${eventCounter++}`;
  const popoverId = `popover-${eventId}`;

  const listItem = document.createElement('forge-list-item');
  listItem.innerHTML = `
    <span class="${typeClass}">${type}</span>
    <span slot="secondary-text">${time}</span>
    <forge-icon-button id="${eventId}" slot="end">
      <forge-icon name="info_outline"></forge-icon>
    </forge-icon-button>
  `;

  const popover = document.createElement('forge-popover');
  popover.id = popoverId;
  popover.placement = 'bottom-end';
  popover.anchor = eventId;
  popover.innerHTML = `
    <div class="event-data-popover">
      <pre>${JSON.stringify(data, null, 2)}</pre>
    </div>
  `;

  listItem.appendChild(popover);

  eventStreamEl.appendChild(listItem);

  if (eventStreamEl.children.length > 1000) {
    eventStreamEl.removeChild(eventStreamEl.firstChild as Node);
  }

  eventStreamEl.scrollTo({ top: eventStreamEl.scrollHeight });
}

interface ConfettiArgs {
  particleCount?: number;
  spread?: number;
}

const tools: ToolDefinition[] = [
  {
    name: 'showConfetti',
    description: 'Show a confetti animation to celebrate',
    parameters: {
      type: 'object' as const,
      properties: {
        particleCount: { type: 'number', description: 'Number of particles (default: 100)' },
        spread: { type: 'number', description: 'Spread angle in degrees (default: 70)' }
      }
    }
    // renderer: createToolRenderer({
    //   render: toolCall => {
    //     const container = document.createElement('div');
    //     container.style.padding = '16px';
    //     container.style.backgroundColor = 'var(--forge-theme-surface-container)';
    //     container.style.borderRadius = '8px';
    //     container.style.marginBlockStart = '8px';

    //     const args = toolCall.args as ConfettiArgs;
    //     const result = toolCall.result as { success: boolean; message: string };

    //     container.innerHTML = `
    //       <div style="display: flex; align-items: center; gap: 8px; margin-block-end: 8px;">
    //         <span style="font-size: 24px;">🎉</span>
    //         <strong>Confetti Animation</strong>
    //       </div>
    //       <div style="font-size: 14px; color: var(--forge-theme-on-surface-variant);">
    //         <div>Particles: ${args?.particleCount || 100}</div>
    //         <div>Spread: ${args?.spread || 100}°</div>
    //         <div style="margin-block-start: 8px; color: var(--forge-theme-success);">${result?.message || 'Success!'}</div>
    //       </div>
    //     `;

    //     return container;
    //   }
    // })
  },
  {
    name: 'displayRecipe',
    description:
      'Display a recipe in a formatted card with ingredients and instructions. Use this tool when you want to present recipe information in a visually structured way.',
    parameters: {
      type: 'object' as const,
      properties: {
        title: { type: 'string', description: 'Recipe name' },
        description: { type: 'string', description: 'Brief description of the dish' },
        prepTime: { type: 'string', description: 'Preparation time (e.g., "15 minutes")' },
        cookTime: { type: 'string', description: 'Cooking time (e.g., "30 minutes")' },
        servings: { type: 'number', description: 'Number of servings' },
        ingredients: {
          type: 'array',
          items: { type: 'string' },
          description: 'List of ingredients with quantities'
        },
        instructions: {
          type: 'array',
          items: { type: 'string' },
          description: 'Step-by-step cooking instructions'
        }
      },
      required: ['title', 'prepTime', 'cookTime', 'servings', 'ingredients', 'instructions']
    },
    renderer: createToolRenderer({
      elementTag: 'recipe-card'
    })
  }
];

const threadId = generateId('thread');

const adapter = new AgUiAdapter(
  {
    url: `${BASE_URL}/${AGENT_ID}/ag-ui`,
    context: {
      pageUrl: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString()
    }
  },
  threadId
);

adapter.setFileUploadCallback(async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`${BASE_URL}/${AGENT_ID}/threads/${threadId}/upload`, {
    method: 'POST',
    body: formData,
    credentials: 'include'
  });

  if (!response.ok) {
    throw new Error(`Upload failed: ${response.statusText}`);
  }

  const reader = response.body!.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop() || '';

    for (const line of lines) {
      if (line.startsWith('data: ')) {
        const data = JSON.parse(line.slice(6));

        if (data.type === 'progress') {
          document.dispatchEvent(
            new CustomEvent('file-upload-progress', {
              detail: {
                fileName: file.name,
                progress: data.progress,
                message: data.message
              }
            })
          );
        }

        if (data.type === 'complete') {
          return {
            fileId: data.file.file_id,
            fileName: data.file.file_metadata.fileName,
            fileType: data.file.file_metadata.fileType,
            fileSize: data.file.file_metadata.fileSize,
            uploadedAt: data.file.file_metadata.uploadedAt
          };
        }

        if (data.type === 'error') {
          throw new Error(data.error);
        }
      }
    }
  }

  throw new Error('Upload failed: No response');
});

// Track SDK events via subscriber
adapter.onRunStarted(() => addEventToStream('RUN_STARTED', { isRunning: true }));
adapter.onRunFinished(() => addEventToStream('RUN_FINISHED', { isRunning: false }));
adapter.onMessageStart(event => addEventToStream('TEXT_MESSAGE_START', event));
adapter.onMessageDelta(event => addEventToStream('TEXT_MESSAGE_CONTENT', event));
adapter.onMessageEnd(event => addEventToStream('TEXT_MESSAGE_END', event));
adapter.onToolCall(event => addEventToStream('TOOL_CALL', event));
adapter.onToolCallStart(event => addEventToStream('TOOL_CALL_START', event));
adapter.onToolCallArgs(event => addEventToStream('TOOL_CALL_ARGS', event));
adapter.onToolCallEnd(event => addEventToStream('TOOL_CALL_END', event));
adapter.onError(event => addEventToStream('ERROR', event));
adapter.onStateChange(state => addEventToStream('STATE_CHANGE', state));

chatbot.adapter = adapter;
chatbot.tools = tools;
chatbot.suggestions = [
  { text: 'What can you help me with?', value: 'What can you help me with?' },
  { text: 'Show me confetti!', value: 'Show me confetti!' },
  { text: 'Show me a recipe for chocolate chip cookies', value: 'Show me a recipe for chocolate chip cookies' }
];

chatbot.addEventListener('forge-ai-chatbot-message-sent', (e: CustomEvent) => {
  addEventToStream('USER_MESSAGE', e.detail.message);
});

chatbot.addEventListener('forge-ai-chatbot-message-received', (e: CustomEvent) => {
  addEventToStream('ASSISTANT_MESSAGE', e.detail.message);
});

chatbot.addEventListener('forge-ai-chatbot-tool-call', async (e: CustomEvent<ForgeAiChatbotToolCallEventData>) => {
  const { toolName, arguments: args, respond } = e.detail;
  console.log('🔧 Tool call:', { toolName, args });

  if (toolName === 'showConfetti') {
    const confettiArgs = args as ConfettiArgs;
    (window as any).confetti({
      particleCount: confettiArgs?.particleCount || 100,
      spread: confettiArgs?.spread || 100
    });

    await respond({
      success: true,
      args
    });
  }

  if (toolName === 'displayRecipe') {
    await respond({ success: true, args });
  }
});

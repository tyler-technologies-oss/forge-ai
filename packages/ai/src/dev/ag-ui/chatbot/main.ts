import { tylIconForgeLogo, tylIconInfoOutline } from '@tylertech/tyler-icons';
import {
  AgUiAdapter,
  generateId,
  createToolRenderer,
  type AiChatbotComponent,
  type ForgeAiChatbotToolCallEventData,
  type ToolDefinition,
  HandlerContext
} from '../../../lib/ai-chatbot';

import {
  type ButtonComponent,
  defineAppBarComponent,
  defineButtonComponent,
  defineCardComponent,
  defineIconButtonComponent,
  defineIconComponent,
  defineListComponent,
  defineListItemComponent,
  definePopoverComponent,
  defineScaffoldComponent,
  defineTextFieldComponent,
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
defineTextFieldComponent();
defineButtonComponent();

IconRegistry.define([tylIconForgeLogo, tylIconInfoOutline]);

const chatbot = document.getElementById('chatbot') as AiChatbotComponent;
const eventStreamEl = document.getElementById('eventStream') as HTMLElement;
const eventStreamHeader = document.getElementById('eventStreamHeader') as HTMLElement;
const baseUrlInput = document.getElementById('baseUrl') as HTMLInputElement;
const agentIdInput = document.getElementById('agentId') as HTMLInputElement;
const reconnectBtn = document.getElementById('reconnectBtn') as ButtonComponent;

const urlParams = new URLSearchParams(window.location.search);
const urlBaseUrl = urlParams.get('baseUrl');
const urlAgentId = urlParams.get('agentId');

if (urlBaseUrl) {
  baseUrlInput.value = urlBaseUrl;
}
if (urlAgentId) {
  agentIdInput.value = urlAgentId;
}

let initialBaseUrl = baseUrlInput.value;
let initialAgentId = agentIdInput.value;

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

  eventStreamHeader.textContent = `Event Stream (${eventStreamEl.children.length})`;
  eventStreamEl.scrollTo({ top: eventStreamEl.scrollHeight });
}

interface ConfettiArgs {
  particleCount?: number;
  spread?: number;
}

const showConfettiTool: ToolDefinition<ConfettiArgs> = {
  name: 'showConfetti',
  displayName: 'Show Confetti',
  description: 'Show a confetti animation to celebrate',
  parameters: {
    type: 'object' as const,
    properties: {
      particleCount: { type: 'number', description: 'Number of particles (default: 100)' },
      spread: { type: 'number', description: 'Spread angle in degrees (default: 70)' }
    }
  },
  handler: async (context: HandlerContext<ConfettiArgs>) => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    const confettiArgs = context.args;
    (window as any).confetti({
      particleCount: confettiArgs?.particleCount || 100,
      spread: confettiArgs?.spread || 100
    });

    return {
      result: `Confetti animation displayed with ${confettiArgs?.particleCount || 100} particles and ${confettiArgs?.spread || 100}° spread`
    };
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
};

const displayRecipeTool: ToolDefinition = {
  name: 'displayRecipe',
  displayName: 'Display Recipe',
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
  handler: async (context: HandlerContext) => {
    const { title, ingredients, instructions } = context.args;
    const ingredientsArray = ingredients as string[] | undefined;
    const instructionsArray = instructions as string[] | undefined;

    return {
      result: `Recipe for "${title}" has been displayed with ${ingredientsArray?.length || 0} ingredients and ${instructionsArray?.length || 0} steps`
    };
  },
  renderer: createToolRenderer({
    elementTag: 'recipe-card'
  })
};

const tools: Array<ToolDefinition<any>> = [showConfettiTool, displayRecipeTool];

let threadId = generateId('thread');
let adapter: AgUiAdapter;

function createAdapter(baseUrl: string, agentId: string): AgUiAdapter {
  const newAdapter = new AgUiAdapter(
    {
      url: `${baseUrl}/api/agents/${agentId}/ag-ui`,
      context: {
        pageUrl: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString()
      },
      tools
    },
    threadId
  );

  newAdapter.onFileUpload(async ({ file, markComplete, markError, onAbort, updateProgress }) => {
    console.log('Starting upload for file:', file.name);

    onAbort(() => {
      console.log('Upload aborted for file:', file.name);
    });

    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${baseUrl}/${agentId}/threads/${threadId}/upload`, {
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

          switch (data.type) {
            case 'progress':
              updateProgress(data.progress);
              break;
            case 'complete':
              markComplete({
                fileId: data.file.file_id,
                fileName: data.file.file_metadata.fileName,
                fileType: data.file.file_metadata.fileType,
                fileSize: data.file.file_metadata.fileSize,
                uploadedAt: data.file.file_metadata.uploadedAt
              });
              return;
            case 'error':
              markError(data.error);
              return;
          }
        }
      }
    }
  });

  newAdapter.onRunStarted(() => addEventToStream('RUN_STARTED', { isRunning: true }));
  newAdapter.onRunFinished(() => addEventToStream('RUN_FINISHED', { isRunning: false }));
  newAdapter.onRunAborted(() => addEventToStream('RUN_ABORTED', { isRunning: false }));
  newAdapter.onMessageStart(event => addEventToStream('TEXT_MESSAGE_START', event));
  newAdapter.onMessageDelta(event => addEventToStream('TEXT_MESSAGE_CONTENT', event));
  newAdapter.onMessageEnd(event => addEventToStream('TEXT_MESSAGE_END', event));
  newAdapter.onToolCall(event => addEventToStream('TOOL_CALL', event));
  newAdapter.onToolCallStart(event => addEventToStream('TOOL_CALL_START', event));
  newAdapter.onToolCallArgs(event => addEventToStream('TOOL_CALL_ARGS', event));
  newAdapter.onToolCallEnd(event => addEventToStream('TOOL_CALL_END', event));
  newAdapter.onToolCallResult(event => addEventToStream('TOOL_CALL_RESULT', event));
  newAdapter.onError(event => addEventToStream('RUN_ERROR', event));
  newAdapter.onStateChange(state => addEventToStream('STATE_CHANGE', state));

  return newAdapter;
}

function initializeAdapter(baseUrl: string, agentId: string): void {
  adapter?.disconnect();

  threadId = generateId('thread');
  adapter = createAdapter(baseUrl, agentId);
  chatbot.adapter = adapter;

  initialBaseUrl = baseUrl;
  initialAgentId = agentId;
  reconnectBtn.disabled = true;

  eventStreamEl.innerHTML = '';
  eventCounter = 0;
  eventStreamHeader.textContent = 'Event Stream (0)';

  const params = new URLSearchParams(window.location.search);
  params.set('baseUrl', baseUrl);
  params.set('agentId', agentId);
  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState({}, '', newUrl);
}

function checkForChanges(): void {
  const hasChanges = baseUrlInput.value.trim() !== initialBaseUrl || agentIdInput.value.trim() !== initialAgentId;
  reconnectBtn.disabled = !hasChanges;
}

baseUrlInput.addEventListener('input', checkForChanges);
agentIdInput.addEventListener('input', checkForChanges);

reconnectBtn.addEventListener('click', () => {
  const baseUrl = baseUrlInput.value.trim();
  const agentId = agentIdInput.value.trim();

  if (!baseUrl || !agentId) {
    return;
  }

  initializeAdapter(baseUrl, agentId);
});

initializeAdapter(baseUrlInput.value, agentIdInput.value);
chatbot.suggestions = [
  { text: 'What can you help me with?', value: 'What can you help me with?' },
  { text: 'Show me confetti!', value: 'Show me confetti!' },
  { text: 'Show me a recipe for chocolate chip cookies', value: 'Show me a recipe for chocolate chip cookies' }
];
chatbot.agentInfo = {
  name: 'My Agent',
  description: 'A helpful AI assistant with access to recipes and celebration tools',
  identifier: 'agent-9b3ff935-f32d-477b-ac45-ce2a3570b90c',
  version: '1.0.0',
  model: 'us.anthropic.claude-sonnet-4-20250514-v1:0',
  lastUpdated: '2025-11-25'
};

chatbot.addEventListener('forge-ai-chatbot-message-sent', (e: CustomEvent) => {
  addEventToStream('USER_MESSAGE', e.detail.message);
});

chatbot.addEventListener('forge-ai-chatbot-message-received', (e: CustomEvent) => {
  addEventToStream('ASSISTANT_MESSAGE', e.detail.message);
});

chatbot.addEventListener('forge-ai-chatbot-tool-call', async (e: CustomEvent<ForgeAiChatbotToolCallEventData>) => {
  console.log('🔧 Tool call:', e);
});

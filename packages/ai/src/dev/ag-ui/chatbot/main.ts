import { tylIconForgeLogo, tylIconInfoOutline } from '@tylertech/tyler-icons';
import {
  AgUiAdapter,
  generateId,
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
  popover.anchorElement = listItem.querySelector(`#${eventId}`) as HTMLElement;
  popover.innerHTML = `
    <div class="event-data-popover">
      <pre>${JSON.stringify(data, null, 2)}</pre>
    </div>
  `;

  listItem.appendChild(popover);

  eventStreamEl.appendChild(listItem);

  if (eventStreamEl.children.length > 200) {
    eventStreamEl.removeChild(eventStreamEl.firstChild as Node);
  }

  eventStreamEl.scrollTo({ top: eventStreamEl.scrollHeight, behavior: 'smooth' });
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
  }
];

const threadId = generateId('thread');

const adapter = new AgUiAdapter(
  {
    baseUrl: BASE_URL,
    agentId: AGENT_ID,
    credentials: 'include',
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

// Hook into raw protocol events by overriding the protected method
const originalHandleProtocolEvent = (adapter as any)._handleProtocolEvent.bind(adapter);
(adapter as any)._handleProtocolEvent = function (event: any) {
  addEventToStream(event.type, event);
  return originalHandleProtocolEvent(event);
};

chatbot.adapter = adapter;
chatbot.tools = tools;
chatbot.suggestions = [
  { text: 'What can you help me with?', value: 'What can you help me with?' },
  { text: 'Show me confetti!', value: 'Show me confetti!' }
];

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
      message: `Confetti shown with ${confettiArgs?.particleCount || 100} particles!`
    });
  }
});

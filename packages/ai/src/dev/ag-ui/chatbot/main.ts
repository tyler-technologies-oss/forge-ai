import { tylIconForgeLogo, tylIconInfoOutline } from '@tylertech/tyler-icons';
import {
  AgUiAdapter,
  generateId,
  type AiChatbotComponent,
  type ForgeAiChatbotToolCallEventData
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
  defineStackComponent,
  defineSwitchComponent,
  defineTextFieldComponent,
  IconRegistry,
  type SwitchComponent
} from '@tylertech/forge';

import { tools } from '../shared/tools.js';

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
defineSwitchComponent();
defineStackComponent();

IconRegistry.define([tylIconForgeLogo, tylIconInfoOutline]);

const chatbot = document.getElementById('chatbot') as AiChatbotComponent;
const eventStreamEl = document.getElementById('eventStream') as HTMLElement;
const eventStreamHeader = document.getElementById('eventStreamHeader') as HTMLElement;
const baseUrlInput = document.getElementById('baseUrl') as HTMLInputElement;
const agentIdInput = document.getElementById('agentId') as HTMLInputElement;
const reconnectBtn = document.getElementById('reconnectBtn') as ButtonComponent;
const persistSwitch = document.getElementById('persist') as SwitchComponent;

const urlParams = new URLSearchParams(window.location.search);
const urlBaseUrl = urlParams.get('baseUrl');
const urlAgentId = urlParams.get('agentId');
const urlPersist = urlParams.get('persist');

if (urlBaseUrl) {
  baseUrlInput.value = urlBaseUrl;
}
if (urlAgentId) {
  agentIdInput.value = urlAgentId;
}
if (urlPersist === 'true') {
  persistSwitch.checked = true;
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

let threadId = generateId();
let adapter: AgUiAdapter;

function getThreadStateKey(agentId: string): string {
  return `chatbot-thread-state-${agentId}`;
}

function saveThreadState(agentId: string): void {
  if (!persistSwitch.checked) {
    return;
  }
  const key = getThreadStateKey(agentId);
  const threadState = chatbot.getThreadState();
  localStorage.setItem(key, JSON.stringify(threadState));
  console.log('💾 Thread state saved:', threadState);
}

function getSavedThreadId(agentId: string): string | null {
  if (!persistSwitch.checked) {
    return null;
  }
  const key = getThreadStateKey(agentId);
  const savedState = localStorage.getItem(key);
  if (savedState) {
    try {
      const threadState = JSON.parse(savedState);
      return threadState.threadId || null;
    } catch (error) {
      console.error('Failed to parse saved thread state:', error);
    }
  }
  return null;
}

async function loadThreadState(agentId: string): Promise<void> {
  if (!persistSwitch.checked) {
    return;
  }
  const key = getThreadStateKey(agentId);
  const savedState = localStorage.getItem(key);
  if (savedState) {
    try {
      const threadState = JSON.parse(savedState);
      await chatbot.setThreadState(threadState);
      console.log('✅ Thread state restored:', threadState);
      addEventToStream('THREAD_RESTORED', { messageCount: threadState.messages?.length || 0 });
    } catch (error) {
      console.error('Failed to restore thread state:', error);
    }
  }
}

function clearThreadState(agentId: string): void {
  const key = getThreadStateKey(agentId);
  localStorage.removeItem(key);
  console.log('🗑️ Thread state cleared');
}

function createAdapter(baseUrl: string, agentId: string): AgUiAdapter {
  const newAdapter = new AgUiAdapter(
    {
      url: `${baseUrl}/api/agents/${agentId}/ag-ui`,
      context: {
        pageUrl: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        language: navigator.language,
        platform: navigator.platform,
        colorScheme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
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

  newAdapter.onRunStarted(() => {
    newAdapter.setContext({
      ...newAdapter.getContext(),
      timestamp: new Date().toISOString(),
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight
    });
    addEventToStream('RUN_STARTED', { isRunning: true, context: newAdapter.getContext() });
  });
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

async function initializeAdapter(baseUrl: string, agentId: string, restoreState = false): Promise<void> {
  adapter?.disconnect();

  if (restoreState) {
    const savedThreadId = getSavedThreadId(agentId);
    threadId = savedThreadId || generateId();
  } else {
    threadId = generateId();
    clearThreadState(agentId);
  }

  adapter = createAdapter(baseUrl, agentId);
  chatbot.adapter = adapter;

  if (restoreState) {
    await loadThreadState(agentId);
  }

  initialBaseUrl = baseUrl;
  initialAgentId = agentId;
  reconnectBtn.disabled = true;

  eventStreamEl.innerHTML = '';
  eventCounter = 0;
  eventStreamHeader.textContent = 'Event Stream (0)';

  const params = new URLSearchParams(window.location.search);
  params.set('baseUrl', baseUrl);
  params.set('agentId', agentId);

  if (persistSwitch.checked) {
    params.set('persist', persistSwitch.checked.toString());
  } else {
    params.delete('persist');
  }

  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState({}, '', newUrl);
}

function checkForChanges(): void {
  const hasChanges = baseUrlInput.value.trim() !== initialBaseUrl || agentIdInput.value.trim() !== initialAgentId;
  reconnectBtn.disabled = !hasChanges;
}

baseUrlInput.addEventListener('input', checkForChanges);
agentIdInput.addEventListener('input', checkForChanges);

persistSwitch.addEventListener('change', () => {
  const params = new URLSearchParams(window.location.search);
  if (persistSwitch.checked) {
    params.set('persist', persistSwitch.checked.toString());
  } else {
    params.delete('persist');
  }
  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState({}, '', newUrl);

  if (!persistSwitch.checked) {
    clearThreadState(agentIdInput.value.trim());
  }
});

reconnectBtn.addEventListener('click', () => {
  const baseUrl = baseUrlInput.value.trim();
  const agentId = agentIdInput.value.trim();

  if (!baseUrl || !agentId) {
    return;
  }

  initializeAdapter(baseUrl, agentId);
});

const agents = [
  {
    id: 'agent-f586a37b-5a2d-4984-b791-5301105854e9',
    name: 'Tyler Forge Agent',
    description: 'An AI assistant that can help you with Tyler Forge UI framework related questions and tasks.'
  },
  {
    id: 'agent-4a5a6c19-3009-4ab2-b7f8-ffee889eb71f',
    name: 'ERP Agent',
    description: 'An AI assistant that can help you with Tyler Technologies ERP software related questions and tasks.'
  },
  {
    id: 'agent-bc5448e1-3503-47d4-81a0-5dda3f0cbbfe',
    name: 'Case Researcher',
    description:
      'Specialized agent for searching and analyzing old CRM cases using Dynamics 365 Public Safety. Investigates incident history, communications, timelines, and related customer information.'
  }
];

chatbot.agents = agents;

initializeAdapter(baseUrlInput.value, agentIdInput.value, true);
chatbot.suggestions = [
  { text: 'What can you help me with?', value: 'What can you help me with?' },
  { text: 'Show me confetti!', value: 'Show me confetti!' },
  { text: 'Show me a recipe for chocolate chip cookies', value: 'Show me a recipe for chocolate chip cookies' },
  { text: 'Show me a data table with random data', value: 'Show me a data table with random data' }
];
chatbot.agentInfo = {
  name: 'My Agent',
  description: 'A helpful AI assistant with access to recipes, data tables, and celebration tools',
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

chatbot.addEventListener('forge-ai-chatbot-thread-state-change', () => {
  saveThreadState(agentIdInput.value.trim());
});

chatbot.addEventListener('forge-ai-chatbot-response-feedback', (e: CustomEvent) => {
  console.log('👍👎 Response feedback:', e.detail);
});

chatbot.addEventListener('forge-ai-chatbot-agent-change', async (e: CustomEvent) => {
  const { agent, previousAgentId } = e.detail;
  console.log('🔄 Agent changed:', { agent, previousAgentId });

  const baseUrl = baseUrlInput.value.trim();
  const agentId = agent?.id ?? agentIdInput.value.trim();

  const savedThreadId = getSavedThreadId(agentId);
  threadId = savedThreadId || generateId();

  adapter = createAdapter(baseUrl, agentId);
  chatbot.adapter = adapter;

  if (savedThreadId && persistSwitch.checked) {
    await loadThreadState(agentId);
  }
});

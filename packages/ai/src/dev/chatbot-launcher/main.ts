import { tylIconForgeLogo, tylIconMenu } from '@tylertech/tyler-icons';
import '../../lib/ai-chatbot-launcher';
import { type AiChatbotLauncherComponent } from '../../lib/ai-chatbot-launcher';
import { generateId } from '../../lib/ai-chatbot';
import { MastraStreamAdapter } from '../shared/mastra-stream-adapter.js';

import {
  type ButtonComponent,
  type DrawerComponent,
  defineAppBarComponent,
  defineButtonComponent,
  defineCardComponent,
  defineDrawerComponent,
  defineIconButtonComponent,
  defineIconComponent,
  defineListComponent,
  defineListItemComponent,
  defineScaffoldComponent,
  defineTextFieldComponent,
  defineToolbarComponent,
  IconRegistry
} from '@tylertech/forge';

import { tools } from '../shared/tools.js';

defineScaffoldComponent();
defineAppBarComponent();
defineDrawerComponent();
defineIconButtonComponent();
defineIconComponent();
defineTextFieldComponent();
defineButtonComponent();
defineToolbarComponent();
defineCardComponent();
defineListComponent();
defineListItemComponent();

IconRegistry.define([tylIconForgeLogo, tylIconMenu]);

const launcher = document.getElementById('launcher') as AiChatbotLauncherComponent;
const drawer = document.getElementById('drawer') as DrawerComponent;
const menuBtn = document.getElementById('menuBtn') as HTMLElement;
const baseUrlInput = document.getElementById('baseUrl') as HTMLInputElement;
const agentIdInput = document.getElementById('agentId') as HTMLInputElement;
const reconnectBtn = document.getElementById('reconnectBtn') as ButtonComponent;
const landingContent = document.getElementById('landingContent') as HTMLElement;
const mainEl = launcher.closest('main') as HTMLElement;

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

menuBtn.addEventListener('click', () => (drawer.open = !drawer.open));

let threadId = generateId();
let adapter: MastraStreamAdapter;

function createAdapter(baseUrl: string, agentId: string): MastraStreamAdapter {
  return new MastraStreamAdapter(
    {
      url: `${baseUrl}/api/agents/${agentId}/stream`,
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
}

function initializeAdapter(baseUrl: string, agentId: string): void {
  adapter?.disconnect();
  threadId = generateId();

  adapter = createAdapter(baseUrl, agentId);
  launcher.adapter = adapter;

  initialBaseUrl = baseUrl;
  initialAgentId = agentId;
  reconnectBtn.disabled = true;

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
  }
];

launcher.agents = agents;
launcher.suggestions = [
  { text: 'What can you help me with?', value: 'What can you help me with?' },
  { text: 'Show me confetti!', value: 'Show me confetti!' },
  { text: 'Show me a recipe for chocolate chip cookies', value: 'Show me a recipe for chocolate chip cookies' },
  { text: 'Show me a data table with random data', value: 'Show me a data table with random data' }
];
launcher.agentInfo = {
  name: 'My Agent',
  description: 'A helpful AI assistant with access to recipes, data tables, and celebration tools',
  identifier: 'agent-9b3ff935-f32d-477b-ac45-ce2a3570b90c',
  version: '1.0.0',
  model: 'us.anthropic.claude-sonnet-4-20250514-v1:0',
  lastUpdated: '2025-11-25'
};

initializeAdapter(baseUrlInput.value, agentIdInput.value);

launcher.addEventListener('forge-ai-chatbot-launcher-connected', logEvent);
launcher.addEventListener('forge-ai-chatbot-launcher-message-sent', logEvent);
launcher.addEventListener('forge-ai-chatbot-launcher-message-received', logEvent);
launcher.addEventListener('forge-ai-chatbot-launcher-tool-call', logEvent);
launcher.addEventListener('forge-ai-chatbot-launcher-error', logEvent);
launcher.addEventListener('forge-ai-chatbot-launcher-file-select', logEvent);
launcher.addEventListener('forge-ai-chatbot-launcher-response-feedback', logEvent);
launcher.addEventListener('forge-ai-chatbot-launcher-conversation-start', evt => {
  logEvent(evt);
  landingContent.classList.add('content-hidden');
  mainEl.classList.add('conversation-active');
});
launcher.addEventListener('forge-ai-chatbot-launcher-clear', logEvent);
launcher.addEventListener('forge-ai-chatbot-launcher-thread-state-change', logEvent);
launcher.addEventListener('forge-ai-chatbot-launcher-info', logEvent);
launcher.addEventListener('forge-ai-chatbot-launcher-agent-change', logEvent);

function logEvent(event: Event): void {
  console.log(`Event: ${event.type}`, event);
}

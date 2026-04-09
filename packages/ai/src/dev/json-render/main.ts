/**
 * GenUI Demo: Demonstrates LLM-driven UI generation using GenUI specs.
 *
 * This demo shows how an LLM can dynamically generate Forge component-based UIs
 * by calling tools that output JSON Patch operations. The patches are compiled
 * into a declarative spec and rendered to the DOM.
 */

import { tylIconForgeLogo } from '@tylertech/tyler-icons';
import {
  defineAppBarComponent,
  defineAvatarComponent,
  defineBadgeComponent,
  defineButtonComponent,
  defineCardComponent,
  defineCheckboxComponent,
  defineDividerComponent,
  defineDrawerComponent,
  defineIconButtonComponent,
  defineIconComponent,
  defineInlineMessageComponent,
  defineListComponent,
  defineListItemComponent,
  definePageStateComponent,
  defineScaffoldComponent,
  defineStackComponent,
  defineTextFieldComponent,
  defineToolbarComponent,
  IconRegistry
} from '@tylertech/forge';
import { generateId, type AiChatbotComponent } from '../../lib/ai-chatbot';
import { MastraStreamAdapter } from '../shared/mastra-stream-adapter.js';
import { loadAgentConfig } from '../shared/load-agent-config.js';
import { type ActionEvent, type SpecRendererState } from '@tylertech/forge-genui-core';
import { createRenderer } from '@tylertech/forge-genui-lit';
import { customComponents } from './custom-components.js';

const BASE_URL = 'https://staging-ai-foundry.socrata-qa.com';
const AGENT_ID = 'a20fd44f-8edb-4559-a128-accb5610c4a2';
const STORAGE_KEY = 'json-render-thread-state';

defineScaffoldComponent();
defineAppBarComponent();
defineDrawerComponent();
defineIconComponent();
defineButtonComponent();
defineIconButtonComponent();
defineCardComponent();
defineCheckboxComponent();
defineListComponent();
defineListItemComponent();
definePageStateComponent();
defineTextFieldComponent();
defineStackComponent();
defineBadgeComponent();
defineDividerComponent();
defineInlineMessageComponent();
defineAvatarComponent();
defineToolbarComponent();

IconRegistry.define([tylIconForgeLogo]);

const chatbot = document.getElementById('chatbot') as AiChatbotComponent;
const rendererEl = document.getElementById('renderer')!;

// ----- GenUI Renderer Setup -----
const renderer = createRenderer({
  components: customComponents
});

renderer.attach(rendererEl);
renderer.onRender = () => hideEmptyState();

function showEmptyState(): void {
  rendererEl.classList.remove('has-content');
}

function hideEmptyState(): void {
  rendererEl.classList.add('has-content');
}

function getSavedThreadId(): string | null {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved).threadId || null;
    } catch (e) {
      console.warn('Failed to parse saved thread state.', { error: e });
      return null;
    }
  }
  return null;
}

function saveThreadState(): void {
  try {
    const threadState = chatbot.getThreadState();
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...threadState, uiState: renderer.getState() }));
  } catch (e) {
    console.warn('Failed to save thread state.', { error: e });
  }
}

async function loadThreadState(): Promise<void> {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const state = JSON.parse(saved);
      const { uiState: savedUiState, ...threadState } = state;
      await chatbot.setThreadState(threadState);

      if (savedUiState?.spec) {
        renderer.setState(savedUiState as SpecRendererState);
      }
    } catch (e) {
      console.warn('Failed to load saved thread state, starting fresh.', { error: e });
    }
  }
}

// ----- Adapter Setup -----
const threadId = getSavedThreadId() || generateId();
const streamAdapter = new MastraStreamAdapter(
  {
    url: `${BASE_URL}/api/agents/${AGENT_ID}/stream`,
    tools: renderer.tools
  },
  threadId
);

chatbot.adapter = streamAdapter;

const stopLoading = (): void => renderer.setLoading(false);
streamAdapter.onRunFinished(stopLoading);
streamAdapter.onRunAborted(stopLoading);
streamAdapter.onError(stopLoading);

// ----- Client Context -----
chatbot.addEventListener('forge-ai-chatbot-run-started', () => {
  renderer.setLoading(true);
  streamAdapter.setContext({
    clientContext: {
      uiState: JSON.stringify(renderer.getState()),
      componentCatalog: JSON.stringify(renderer.componentSchemas),
      employeeData: JSON.stringify([
        { name: 'Alice', age: 30, city: 'New York', occupation: 'Engineer', salary: 90000 },
        { name: 'Bob', age: 25, city: 'San Francisco', occupation: 'Designer', salary: 85000 },
        { name: 'Charlie', age: 35, city: 'Chicago', occupation: 'Manager', salary: 95000 },
        { name: 'Diana', age: 28, city: 'Seattle', occupation: 'Developer', salary: 92000 },
        { name: 'Ethan', age: 32, city: 'Austin', occupation: 'Analyst', salary: 88000 },
        { name: 'Fiona', age: 27, city: 'Boston', occupation: 'Consultant', salary: 87000 },
        { name: 'George', age: 40, city: 'Denver', occupation: 'Director', salary: 100000 },
        { name: 'Hannah', age: 29, city: 'Atlanta', occupation: 'Architect', salary: 91000 },
        { name: 'Ian', age: 31, city: 'Miami', occupation: 'Developer', salary: 93000 },
        { name: 'Jane', age: 26, city: 'Portland', occupation: 'Designer', salary: 86000 },
        { name: 'Kevin', age: 33, city: 'Dallas', occupation: 'Engineer', salary: 94000 },
        { name: 'Laura', age: 38, city: 'Philadelphia', occupation: 'Manager', salary: 97000 }
      ])
    }
  });
});

loadAgentConfig(chatbot, BASE_URL, AGENT_ID);
loadThreadState();

chatbot.addEventListener('forge-ai-chatbot-thread-state-change', saveThreadState);

chatbot.addEventListener('forge-ai-chatbot-clear', () => {
  localStorage.removeItem(STORAGE_KEY);
  renderer.reset();
  showEmptyState();
});

// ----- Action Handler -----
renderer.onAction(async (event: ActionEvent) => {
  const { action, payload, state } = event;
  const message = `User action: ${action}\n\`\`\`json\n${JSON.stringify({ action, payload, formData: state }, undefined, 2)}\n\`\`\``;
  console.log('Action:', { action, payload, state });
  await chatbot.sendMessage(message);
});

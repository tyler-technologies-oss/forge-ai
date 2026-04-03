/**
 * json-render Demo: Demonstrates LLM-driven UI generation using json-render specs.
 *
 * This demo shows how an LLM can dynamically generate Forge component-based UIs
 * by calling tools that output JSON Patch operations. The patches are compiled
 * into a declarative spec and rendered to the DOM.
 *
 * Key concepts:
 * - SpecRendererController: Encapsulates the render_ui/patch_ui tools and rendering logic
 * - forgeRegistry: Maps component type names (e.g. "Button") to template factories
 * - componentSchemas: Zod schemas describing available components (sent to LLM for guidance)
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
import {
  forgeRegistry,
  componentSchemas,
  SpecRendererController,
  type ActionEvent,
  type SpecRendererState,
  ForgeSpecRenderer
} from './renderer/index.js';
import { customComponents, customComponentSchemas } from './custom-components.js';

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

// ----- Register Custom Components -----
// Custom components extend the built-in set. Register them with the renderer's
// registry so the LLM can use them in generated UIs.
for (const [name, factory] of Object.entries(customComponents)) {
  forgeRegistry.register(name, factory);
}

// Merge schemas so the LLM knows about all available components
const allComponentSchemas = { ...componentSchemas, ...customComponentSchemas };

const chatbot = document.getElementById('chatbot') as AiChatbotComponent;
const rendererEl = document.getElementById('renderer')!;

// ----- Spec Renderer Controller -----
// The controller manages the render_ui and patch_ui tools internally.
// It handles spec compilation, validation, and rendering to the DOM.
// Consumer just needs to: attach to container, wire up loading callback, pass tools to adapter.
const controller = new SpecRendererController({
  registry: forgeRegistry,
  componentSchemas: allComponentSchemas
});
controller.attach(rendererEl);
controller.onLoading = loading => {
  const specRenderer = rendererEl.querySelector('forge-spec-renderer') as ForgeSpecRenderer;
  if (specRenderer) {
    specRenderer.loading = loading;
  }
};
controller.onRender = () => hideEmptyState();

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
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...threadState, uiState: controller.getState() }));
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
        controller.setState(savedUiState as SpecRendererState);
      }
    } catch (e) {
      console.warn('Failed to load saved thread state, starting fresh.', { error: e });
    }
  }
}

// ----- Adapter Setup -----
// MastraStreamAdapter connects the chatbot to a remote Mastra agent.
// The controller.tools array contains the render_ui and patch_ui tool definitions
// that the agent can call to generate UI.
const threadId = getSavedThreadId() || generateId();
const adapter = new MastraStreamAdapter(
  {
    url: `${BASE_URL}/api/agents/${AGENT_ID}/stream`,
    tools: controller.tools
  },
  threadId
);

chatbot.adapter = adapter;

const stopLoading = (): void => controller.onLoading?.(false);
adapter.onRunFinished(stopLoading);
adapter.onRunAborted(stopLoading);
adapter.onError(stopLoading);

// ----- Client Context -----
// Before each agent run, send context to help the LLM make informed decisions:
// - uiState: Current rendered spec (so agent knows what's already on screen)
// - employeeData: Sample data the agent can use for generating data-driven UIs
// - componentCatalog: Available components the agent can use
chatbot.addEventListener('forge-ai-chatbot-run-started', () => {
  controller.onLoading?.(true);
  adapter.setContext({
    clientContext: {
      uiState: JSON.stringify(controller.getState()),
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
      ]),
      componentCatalog: JSON.stringify(allComponentSchemas)
    }
  });
});

loadAgentConfig(chatbot, BASE_URL, AGENT_ID);
loadThreadState();

chatbot.addEventListener('forge-ai-chatbot-thread-state-change', saveThreadState);

chatbot.addEventListener('forge-ai-chatbot-clear', () => {
  localStorage.removeItem(STORAGE_KEY);
  controller.reset();
  showEmptyState();
});

// ----- Action Handler -----
// When user interacts with the rendered UI (clicks buttons, submits forms),
// the renderer dispatches action events. Forward these to the agent so it
// can respond (e.g., update the UI, perform calculations, etc.)
rendererEl.addEventListener('forge-spec-renderer-action', async (e: Event) => {
  const { action, payload, state } = (e as CustomEvent<ActionEvent>).detail;
  const message = `User action: ${action}\n\`\`\`json\n${JSON.stringify({ action, payload, formData: state }, undefined, 2)}\n\`\`\``;
  console.log('Action:', { action, payload, state });
  await chatbot.sendMessage(message);
});

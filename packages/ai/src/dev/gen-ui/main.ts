/**
 * Gen-UI Demo: Demonstrates LLM-driven UI generation using the A2UI protocol.
 *
 * The chatbot connects to an agent that can call the `render_ui` tool to
 * generate Forge component-based UIs dynamically. Users can ask for UIs (e.g.,
 * "show me a todo list") and the LLM generates A2UI declarative UI JSON that
 * renders as real Forge components in the renderer content area.
 */

import { tylIconForgeLogo } from '@tylertech/tyler-icons';
import {
  defineAppBarComponent,
  defineButtonComponent,
  defineCardComponent,
  defineCheckboxComponent,
  defineDrawerComponent,
  defineIconComponent,
  defineListComponent,
  defineListItemComponent,
  definePageStateComponent,
  defineScaffoldComponent,
  defineTextFieldComponent,
  IconRegistry
} from '@tylertech/forge';
import { generateId, type AiChatbotComponent, type ToolDefinition, type HandlerContext } from '../../lib/ai-chatbot';
import { MastraStreamAdapter } from '../shared/mastra-stream-adapter.js';
import { loadAgentConfig } from '../shared/load-agent-config.js';
import { ForgeA2uiSurface, componentSchemas, forgeCatalog } from './renderer/index.js';

import '../../lib/ai-chatbot';

// Mastra agent backend configuration
const BASE_URL = 'https://staging-ai-foundry.socrata-qa.com';
const AGENT_ID = '45efe869-bf62-415c-8959-7040df6af238';
const STORAGE_KEY = 'gen-ui-thread-state';
const TODOS_STORAGE_KEY = 'gen-ui-todos';

interface UiState {
  currentView: Record<string, unknown> | null;
  lastRenderedAt: string | null;
}

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
}

// Tracks the current rendered UI state for persistence and context
let uiState: UiState = {
  currentView: null,
  lastRenderedAt: null
};

function loadTodos(): Todo[] {
  const saved = localStorage.getItem(TODOS_STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
}

function saveTodos(items: Todo[]): void {
  localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(items));
}

let todos: Todo[] = loadTodos();


defineScaffoldComponent();
defineAppBarComponent();
defineDrawerComponent();
defineIconComponent();
defineButtonComponent();
defineCardComponent();
defineCheckboxComponent();
defineListComponent();
defineListItemComponent();
definePageStateComponent();
defineTextFieldComponent();

IconRegistry.define([tylIconForgeLogo]);

/**
 * Converts the LLM's ui output into individual A2UI protocol messages.
 * A2UI (Agent-to-UI) is a protocol for declarative UI generation where the LLM
 * outputs JSON that describes UI components, and the client renders them.
 *
 * The LLM may return multiple operations in one response (create surface,
 * update components, update data model, delete surface). This function
 * splits them into separate messages for the ForgeA2uiSurface to process.
 */
function convertToA2uiMessages(ui: Record<string, unknown>): Array<Record<string, unknown>> {
  const messages: Array<Record<string, unknown>> = [];

  if (ui.createSurface) {
    messages.push({ createSurface: ui.createSurface });
  }

  if (ui.updateComponents) {
    const updateComponents = ui.updateComponents as Record<string, unknown>;
    const components = updateComponents.components as Array<Record<string, unknown>> | undefined;
    // Use first component as root if not explicitly specified
    const rootId = components?.[0]?.id as string | undefined;
    messages.push({
      updateComponents: {
        ...updateComponents,
        root: rootId
      }
    });
  }

  if (ui.updateDataModel) {
    messages.push({ updateDataModel: ui.updateDataModel });
  }

  if (ui.deleteSurface) {
    messages.push({ deleteSurface: ui.deleteSurface });
  }

  return messages;
}

function showEmptyState(): void {
  renderer.classList.remove('has-content');
}

function hideEmptyState(): void {
  renderer.classList.add('has-content');
}

/**
 * Client-side tool that the LLM calls to render UI.
 * When the LLM wants to display a UI, it calls this tool with A2UI JSON.
 * The handler creates/updates a ForgeA2uiSurface element in the renderer container.
 */
const renderUiTool: ToolDefinition = {
  name: 'render_ui',
  description: 'Renders dynamic UI from A2UI JSON schema. Always call this tool with the latest UI schema to update the rendered UI.',
  parameters: {
    type: 'object',
    properties: {
      ui: { type: 'object', description: 'A2UI JSON schema to render' }
    },
    required: ['ui']
  },
  handler: async (context: HandlerContext) => {
    const ui = context.args.ui as Record<string, unknown>;

    uiState = {
      currentView: ui,
      lastRenderedAt: new Date().toISOString()
    };

    let surface = renderer.querySelector('forge-a2ui-surface') as ForgeA2uiSurface | null;
    if (!surface) {
      surface = new ForgeA2uiSurface();
      renderer.appendChild(surface);
      hideEmptyState();
    }

    const messages = convertToA2uiMessages(ui);
    if (messages.length > 0) {
      surface.processMessages(messages as any);
    }

    console.log('render_ui:', ui, 'messages:', messages);
  }
};

// Thread state persistence: saves/restores conversation history and rendered UI
// across page refreshes.

function getSavedThreadId(): string | null {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved).threadId || null;
    } catch {
      return null;
    }
  }
  return null;
}

function saveThreadState(): void {
  const state = chatbot.getThreadState();
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...state, uiState }));
}

async function loadThreadState(): Promise<void> {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const state = JSON.parse(saved);
      const { uiState: savedUiState, ...threadState } = state;
      await chatbot.setThreadState(threadState);

      // Re-render the last UI state if one was saved
      if (savedUiState?.currentView) {
        uiState = savedUiState;
        const surface = new ForgeA2uiSurface();
        renderer.appendChild(surface);
        hideEmptyState();
        const messages = convertToA2uiMessages(savedUiState.currentView);
        if (messages.length > 0) {
          surface.processMessages(messages as any);
        }
      }
    } catch {
      // ignore
    }
  }
}

const chatbot = document.getElementById('chatbot') as AiChatbotComponent;
const renderer = document.getElementById('renderer')!;
const threadId = getSavedThreadId() || generateId();
const adapter = new MastraStreamAdapter(
  {
    url: `${BASE_URL}/api/agents/${AGENT_ID}/stream`,
    tools: [renderUiTool]
  },
  threadId
);

chatbot.adapter = adapter;

// Before each LLM run, inject current state into the agent context.
// This gives the LLM awareness of: current UI state, todo list data,
// and the component catalog (available Forge components it can render).
chatbot.addEventListener('forge-ai-chatbot-run-started', () => {
  adapter.setContext({
    clientContext: {
      uiState: JSON.stringify(uiState),
      todos: JSON.stringify(todos),
      catalogId: forgeCatalog.id,
      componentCatalog: JSON.stringify(componentSchemas)
    }
  });
});

loadAgentConfig(chatbot, BASE_URL, AGENT_ID);
loadThreadState();

chatbot.addEventListener('forge-ai-chatbot-thread-state-change', saveThreadState);
chatbot.addEventListener('forge-ai-chatbot-clear', () => {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(TODOS_STORAGE_KEY);
  todos = [];
  uiState = { currentView: null, lastRenderedAt: null };
  renderer.querySelector('forge-a2ui-surface')?.remove();
  showEmptyState();
});

// Listen for user interactions with the rendered A2UI components.
// Actions bubble up from the surface when users click buttons, submit forms, etc.
// Forward all actions to the LLM with the current form data context.
renderer.addEventListener('a2uiaction', async (e: Event) => {
  const { action, dataContext } = (e as CustomEvent).detail;
  const actionObj = action as { type?: string; payload?: Record<string, unknown> };
  const actionType = actionObj.type ?? 'unknown';
  const label = actionType.replace(/([A-Z])/g, ' $1').toLowerCase();
  const message = `User action: ${label}\n\`\`\`json\n${JSON.stringify({ action, formData: dataContext }, undefined, 2)}\n\`\`\``;
  console.log('A2UI Action:', { action, formData: dataContext });
  await chatbot.sendMessage(message);
});

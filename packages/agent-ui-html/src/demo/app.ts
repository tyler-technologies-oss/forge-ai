import { LitElement, html, nothing } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import type { TemplateResult } from 'lit';
import type { AiChatbotComponent } from '@tylertech/forge-ai';
import { generateId } from '@tylertech/forge-ai';
import type { ActionEvent, Spec } from '@tylertech/agent-ui';
import { MastraStreamAdapter } from './MastraStreamAdapter.js';
import { loadAgentConfig, type AgentConfig } from './utils.js';
import { saveThreadState, loadThreadState, clearThreadState, getThreadId } from './storage.js';
import { AgentUIManager } from '../lib/agentui-manager.js';
import '../lib/spec-renderer.js';
import { catalog } from './catalog.js';
import { registry } from './registry.js';

const BASE_URL = 'https://foundry.tylertechai.com';
const AGENT_ID = '28186a3b-1ee1-4c5c-bb79-ba5e836dcb37';
const STORAGE_KEY = 'agent-ui-html-demo-thread-state';

const FINANCIAL_DATA = {
  budgets: [
    { id: 'it', department: 'IT', budgeted: 150000, spent: 142500, category: 'Operations' },
    { id: 'hr', department: 'Human Resources', budgeted: 80000, spent: 65000, category: 'Administration' },
    { id: 'marketing', department: 'Marketing', budgeted: 120000, spent: 135000, category: 'Growth' },
    { id: 'facilities', department: 'Facilities', budgeted: 95000, spent: 88000, category: 'Operations' },
    { id: 'legal', department: 'Legal', budgeted: 60000, spent: 52000, category: 'Administration' }
  ],
  transactions: [
    { date: '2024-03-15', description: 'Cloud hosting (AWS)', amount: 12500, department: 'IT', category: 'Software' },
    {
      date: '2024-03-14',
      description: 'Q1 Marketing campaign',
      amount: 45000,
      department: 'Marketing',
      category: 'Advertising'
    },
    {
      date: '2024-03-13',
      description: 'Office supplies',
      amount: 2800,
      department: 'Facilities',
      category: 'Supplies'
    },
    {
      date: '2024-03-12',
      description: 'Legal consulting',
      amount: 8500,
      department: 'Legal',
      category: 'Professional Services'
    },
    { date: '2024-03-11', description: 'Software licenses', amount: 15000, department: 'IT', category: 'Software' },
    { date: '2024-03-10', description: 'Recruitment ads', amount: 3200, department: 'HR', category: 'Advertising' },
    {
      date: '2024-03-08',
      description: 'Building maintenance',
      amount: 6500,
      department: 'Facilities',
      category: 'Maintenance'
    },
    { date: '2024-03-07', description: 'Trade show booth', amount: 22000, department: 'Marketing', category: 'Events' },
    { date: '2024-03-05', description: 'Employee training', amount: 4800, department: 'HR', category: 'Training' },
    {
      date: '2024-03-03',
      description: 'Security audit',
      amount: 9500,
      department: 'IT',
      category: 'Professional Services'
    }
  ],
  summary: {
    totalBudget: 505000,
    totalSpent: 482500,
    projectedOverrun: 15000,
    departmentsOverBudget: 1,
    ytdSavings: 22500,
    pendingApprovals: 12
  }
};

@customElement('agent-ui-demo-app')
export class AgentUIDemoApp extends LitElement {
  @query('forge-ai-chatbot') private _chatbot!: AiChatbotComponent;

  @state() private _agentConfig: AgentConfig | null = null;
  @state() private _loading = false;

  #agentui = new AgentUIManager({
    catalog,
    onSpecChange: () => this.requestUpdate(),
    onAction: (event: ActionEvent) => {
      console.log('[AgentUI] Action:', event);
    }
  });
  #adapter: MastraStreamAdapter | null = null;

  public override connectedCallback(): void {
    super.connectedCallback();
    this.#loadConfig();
  }

  protected override createRenderRoot(): HTMLElement {
    return this;
  }

  protected override firstUpdated(): void {
    this.#initAdapter();
  }

  protected override render(): TemplateResult {
    return html`
      <forge-scaffold>
        <forge-app-bar slot="header" title-text="Agent UI HTML Demo">
          <forge-icon slot="logo" name="forge_logo"></forge-icon>
        </forge-app-bar>

        <forge-drawer slot="body-left" open>
          <forge-ai-chatbot
            .titleText=${this._agentConfig?.name as string}
            .disclaimerText=${this._agentConfig?.chatExperience?.disclaimerText as string}
            .placeholder=${this._agentConfig?.chatExperience?.placeholder as string}
            .agentInfo=${this._agentConfig?.name
              ? { name: this._agentConfig.name, description: this._agentConfig.description }
              : undefined}
            .suggestions=${this._agentConfig?.chatExperience?.sampleQuestions?.map(q => ({ text: q, value: q })) ?? []}
            @forge-ai-chatbot-run-started=${this.#handleRunStarted}
            @forge-ai-chatbot-thread-state-change=${this.#handleThreadStateChange}
            @forge-ai-chatbot-clear=${this.#handleClear}>
            ${this._agentConfig?.chatExperience?.welcomeMessageTitle
              ? html`<span slot="empty-state-heading">${this._agentConfig.chatExperience.welcomeMessageTitle}</span>`
              : nothing}
            ${this._agentConfig?.chatExperience?.welcomeMessage
              ? html`<span slot="empty-state-message">${this._agentConfig.chatExperience.welcomeMessage}</span>`
              : nothing}
          </forge-ai-chatbot>
        </forge-drawer>

        <main slot="body" id="content" class=${this._loading ? 'loading' : ''}>
          ${this.#agentui.spec
            ? html`
                <div class="spec-renderer-container" ?inert=${this._loading}>
                  <spec-renderer
                    .spec=${this.#agentui.spec}
                    .registry=${registry}
                    .externalState=${this.#agentui.state}
                    @spec-renderer-action=${this.#handleAction}>
                  </spec-renderer>
                </div>
              `
            : html`
                <forge-page-state class="empty-state">
                  <forge-card slot="graphic">
                    <forge-icon name="forge_logo"></forge-icon>
                  </forge-card>
                  <div slot="title">Generate UI</div>
                  <div slot="message">Start a conversation to generate interactive UI components.</div>
                </forge-page-state>
              `}
        </main>
      </forge-scaffold>
    `;
  }

  async #loadConfig(): Promise<void> {
    this._agentConfig = await loadAgentConfig(BASE_URL, AGENT_ID);
  }

  async #initAdapter(): Promise<void> {
    const savedThreadId = await getThreadId(STORAGE_KEY);
    const threadId = savedThreadId || generateId();

    this.#adapter = new MastraStreamAdapter(
      { url: `${BASE_URL}/api/agents/${AGENT_ID}/stream`, tools: this.#agentui.tools },
      threadId
    );

    const stopLoading = (): void => {
      this._loading = false;
    };
    this.#adapter.onRunFinished(stopLoading);
    this.#adapter.onRunAborted(stopLoading);
    this.#adapter.onError(stopLoading);

    if (this._chatbot) {
      this._chatbot.adapter = this.#adapter;
      const saved = await loadThreadState(STORAGE_KEY);
      if (saved) {
        this._chatbot.setThreadState({
          threadId: saved.threadId,
          messages: saved.messages as Parameters<typeof this._chatbot.setThreadState>[0]['messages']
        });
        if (saved.uiSpec) {
          this.#agentui.spec = saved.uiSpec as Spec;
        }
      }
    }
  }

  #handleRunStarted = (): void => {
    this._loading = true;
    this.#adapter?.setContext({
      clientContext: {
        uiState: JSON.stringify(this.#agentui.spec),
        componentCatalog: JSON.stringify(catalog.components()),
        actionCatalog: JSON.stringify(catalog.actions()),
        financialData: JSON.stringify(FINANCIAL_DATA)
      }
    });
  };

  #handleAction = (e: CustomEvent<ActionEvent>): void => {
    this.#agentui.handleAction(e.detail);
  };

  #handleThreadStateChange = (): void => {
    const threadState = this._chatbot?.getThreadState();
    if (threadState?.threadId && threadState.messages?.length) {
      saveThreadState(
        STORAGE_KEY,
        { threadId: threadState.threadId, messages: threadState.messages },
        this.#agentui.spec
      );
    } else {
      clearThreadState(STORAGE_KEY);
    }
  };

  #handleClear = (): void => {
    clearThreadState(STORAGE_KEY);
    this.#agentui.reset();
  };
}

declare global {
  interface HTMLElementTagNameMap {
    'agent-ui-demo-app': AgentUIDemoApp;
  }
}

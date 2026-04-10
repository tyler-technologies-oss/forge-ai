import { useRef, useEffect, useCallback, useState } from 'react';

declare module 'react' {
  interface HTMLAttributes<T> {
    inert?: string;
  }
}
import type { FC } from 'react';
import { ForgeScaffold, ForgeAppBar, ForgeDrawer, ForgeIcon, ForgePageState, ForgeCard } from '@tylertech/forge-react';
import { ForgeAiChatbot, type ForgeAiChatbotElement } from '@tylertech/forge-ai-react';
import { generateId } from '@tylertech/forge-ai';
import { MastraStreamAdapter } from './mastra-stream-adapter';
import { loadAgentConfig, type AgentConfig } from './utils';
import { saveThreadState, loadThreadState, clearThreadState, getThreadId } from './storage';
import { useGenUI } from './lib';
import { catalog } from './catalog';
import { registry } from './registry';
import type { ActionEvent } from './core';

export const BASE_URL = 'https://foundry.tylertechai.com';
export const AGENT_ID = '28186a3b-1ee1-4c5c-bb79-ba5e836dcb37';
export const STORAGE_KEY = 'gen-ui-demo-thread-state';

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

const App: FC = () => {
  const chatbotRef = useRef<ForgeAiChatbotElement>(null);
  const adapterRef = useRef<MastraStreamAdapter | null>(null);
  const [agentConfig, setAgentConfig] = useState<AgentConfig | null>(null);

  const handleAction = useCallback((event: ActionEvent): void => {
    console.log('[GenUI] Action:', event);
  }, []);

  const { tools, Renderer, spec, setSpec, loading, setLoading, reset } = useGenUI({
    catalog,
    registry,
    onAction: handleAction
  });

  useEffect(() => {
    loadAgentConfig(BASE_URL, AGENT_ID).then(setAgentConfig);
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function init(): Promise<void> {
      const savedThreadId = await getThreadId(STORAGE_KEY);
      const threadId = savedThreadId || generateId();

      if (cancelled) return;

      const adapter = new MastraStreamAdapter({ url: `${BASE_URL}/api/agents/${AGENT_ID}/stream`, tools }, threadId);

      const stopLoading = (): void => setLoading(false);
      adapter.onRunFinished(stopLoading);
      adapter.onRunAborted(stopLoading);
      adapter.onError(stopLoading);

      adapterRef.current = adapter;

      if (chatbotRef.current) {
        chatbotRef.current.adapter = adapter;
        const saved = await loadThreadState(STORAGE_KEY);
        if (saved && !cancelled) {
          chatbotRef.current.setThreadState({
            threadId: saved.threadId,
            messages: saved.messages
          });
          if (saved.uiSpec) {
            setSpec(saved.uiSpec as Parameters<typeof setSpec>[0]);
          }
        }
      }
    }

    init();
    return () => {
      cancelled = true;
    };
  }, [tools, setSpec, setLoading]);

  const handleThreadStateChange = useCallback((): void => {
    const threadState = chatbotRef.current?.getThreadState();
    if (threadState?.messages?.length) {
      saveThreadState(STORAGE_KEY, threadState, spec);
    } else {
      clearThreadState(STORAGE_KEY);
    }
  }, [spec]);

  const handleRunStarted = useCallback((): void => {
    setLoading(true);
    adapterRef.current?.setContext({
      clientContext: {
        uiState: JSON.stringify(spec),
        componentCatalog: JSON.stringify(catalog.components()),
        financialData: JSON.stringify(FINANCIAL_DATA)
      }
    });
  }, [spec, setLoading]);

  const handleClear = useCallback((): void => {
    clearThreadState(STORAGE_KEY);
    reset();
  }, [reset]);

  return (
    <ForgeScaffold>
      <ForgeAppBar slot="header" titleText="GenUI Demo">
        <ForgeIcon slot="logo" name="forge_logo" />
      </ForgeAppBar>

      <ForgeDrawer slot="body-left" open>
        <ForgeAiChatbot
          ref={chatbotRef}
          titleText={agentConfig?.name}
          disclaimerText={agentConfig?.chatExperience?.disclaimerText}
          placeholder={agentConfig?.chatExperience?.placeholder}
          agentInfo={agentConfig?.name ? { name: agentConfig.name, description: agentConfig.description } : undefined}
          suggestions={agentConfig?.chatExperience?.sampleQuestions?.map(q => ({ text: q, value: q }))}
          onForgeAiChatbotRunStarted={handleRunStarted}
          onForgeAiChatbotThreadStateChange={handleThreadStateChange}
          onForgeAiChatbotClear={handleClear}>
          {agentConfig?.chatExperience?.welcomeMessageTitle && (
            <span slot="empty-state-heading">{agentConfig.chatExperience.welcomeMessageTitle}</span>
          )}
          {agentConfig?.chatExperience?.welcomeMessage && (
            <span slot="empty-state-message">{agentConfig.chatExperience.welcomeMessage}</span>
          )}
        </ForgeAiChatbot>
      </ForgeDrawer>

      <main slot="body" id="content">
        {spec ? (
          <div className={`genui-renderer ${loading ? 'loading' : ''}`} inert={loading ? '' : undefined}>
            <Renderer />
          </div>
        ) : (
          <ForgePageState className="empty-state">
            <ForgeCard slot="graphic">
              <ForgeIcon name="forge_logo" />
            </ForgeCard>
            <div slot="title">Generate UI</div>
            <div slot="message">Start a conversation to generate interactive UI components.</div>
          </ForgePageState>
        )}
      </main>
    </ForgeScaffold>
  );
};

export default App;

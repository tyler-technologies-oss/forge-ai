import { useRef, useEffect, useCallback, useState } from 'react';
import type { FC } from 'react';
import { ForgeScaffold, ForgeAppBar, ForgeDrawer, ForgeIcon, ForgePageState, ForgeCard } from '@tylertech/forge-react';
import { ForgeAiChatbot, type ForgeAiChatbotElement } from '@tylertech/forge-ai-react';
import type { ActionEvent, SpecRendererState } from '@tylertech/forge-genui-core';
import { generateId } from '@tylertech/forge-ai';
import { useRenderer } from '../src';
import { MastraStreamAdapter } from './mastra-stream-adapter';
import { customComponents } from './custom-components';

const BASE_URL = 'https://foundry.tylertechai.com';
// const BASE_URL = 'https://staging-ai-foundry.socrata-qa.com';
const AGENT_ID = '28186a3b-1ee1-4c5c-bb79-ba5e836dcb37';
// const AGENT_ID = 'a20fd44f-8edb-4559-a128-accb5610c4a2';
const STORAGE_KEY = 'react-genui-thread-state';

interface AgentConfig {
  name?: string;
  description?: string;
  chatExperience?: {
    sampleQuestions?: string[];
    disclaimerText?: string;
    placeholder?: string;
    welcomeMessageTitle?: string;
    welcomeMessage?: string;
  };
}

async function loadAgentConfig(baseUrl: string, agentId: string): Promise<AgentConfig | null> {
  const url = `${baseUrl}/api/configurable-agents/${agentId}/agent_ui_config`;
  try {
    const response = await fetch(url, { credentials: 'omit' });
    if (!response.ok) {
      console.error(`Failed to fetch agent config: ${response.statusText}`);
      return null;
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to load agent config:', error);
    return null;
  }
}

const EMPLOYEE_DATA = [
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
];

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

const App: FC = () => {
  const chatbotRef = useRef<ForgeAiChatbotElement>(null);
  const [hasContent, setHasContent] = useState(false);
  const [agentConfig, setAgentConfig] = useState<AgentConfig | null>(null);

  useEffect(() => {
    loadAgentConfig(BASE_URL, AGENT_ID).then(setAgentConfig);
  }, []);

  const handleAction = useCallback(async (event: ActionEvent): Promise<void> => {
    const { action, payload, state } = event;
    const message = `User action: ${action}\n\`\`\`json\n${JSON.stringify({ action, payload, formData: state }, undefined, 2)}\n\`\`\``;
    console.log('Action:', { action, payload, state });
    await chatbotRef.current?.sendMessage(message);
  }, []);

  const handleRender = useCallback((): void => {
    setHasContent(true);
  }, []);

  const { tools, Renderer, setLoading, reset, getState, setState, componentSchemas } = useRenderer({
    components: customComponents,
    onAction: handleAction,
    onRender: handleRender
  });

  const adapterRef = useRef<MastraStreamAdapter | null>(null);

  useEffect(() => {
    const threadId = getSavedThreadId() || generateId();
    const adapter = new MastraStreamAdapter(
      {
        url: `${BASE_URL}/api/agents/${AGENT_ID}/stream`,
        tools
      },
      threadId
    );

    const stopLoading = (): void => setLoading(false);
    adapter.onRunFinished(stopLoading);
    adapter.onRunAborted(stopLoading);
    adapter.onError(stopLoading);

    adapterRef.current = adapter;

    if (chatbotRef.current) {
      chatbotRef.current.adapter = adapter;

      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          const state = JSON.parse(saved);
          const { uiState: savedUiState, ...threadState } = state;
          chatbotRef.current.setThreadState(threadState);
          if (savedUiState?.spec) {
            setState(savedUiState as SpecRendererState);
            setHasContent(true);
          }
        } catch (e) {
          console.warn('Failed to load saved thread state.', { error: e });
        }
      }
    }
  }, [tools, setLoading, setState]);

  const handleRunStarted = useCallback((): void => {
    setLoading(true);
    adapterRef.current?.setContext({
      clientContext: {
        uiState: JSON.stringify(getState()),
        componentCatalog: JSON.stringify(componentSchemas),
        employeeData: JSON.stringify(EMPLOYEE_DATA)
      }
    });
  }, [setLoading, getState, componentSchemas]);

  const handleThreadStateChange = useCallback((): void => {
    try {
      const threadState = chatbotRef.current?.getThreadState();
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...threadState, uiState: getState() }));
    } catch (e) {
      console.warn('Failed to save thread state.', { error: e });
    }
  }, [getState]);

  const handleClear = useCallback((): void => {
    localStorage.removeItem(STORAGE_KEY);
    reset();
    setHasContent(false);
  }, [reset]);

  return (
    <ForgeScaffold>
      <ForgeAppBar slot="header" titleText="GenUI React Demo">
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

      <main slot="body" id="renderer" className={hasContent ? 'has-content' : ''}>
        <Renderer />
        {!hasContent && (
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

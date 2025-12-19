import { AgUiAdapter } from '@tylertech/forge-ai/ai-chatbot';
import type { AgentUIConfig } from './types.js';

export interface FoundryAdapterConfig {
  baseUrl: string;
  agentId?: string;
  teamId?: string;
  headers?: Record<string, string>;
}

/** AG-UI adapter for Foundry agents with auth support. */
export class FoundryAgentAdapter extends AgUiAdapter {
  readonly #agentConfig: AgentUIConfig;
  readonly #config: FoundryAdapterConfig;

  constructor(config: FoundryAdapterConfig, agentConfig: AgentUIConfig = {}) {
    const { baseUrl, agentId, teamId, headers } = config;

    if (!agentId && !teamId) {
      throw new Error('Either agentId or teamId must be provided');
    }

    const url = teamId ? `${baseUrl}/api/team/${teamId}/ag-ui` : `${baseUrl}/api/agents/${agentId}/ag-ui`;

    super({ url, headers });
    this.#agentConfig = agentConfig;
    this.#config = config;
  }

  public get agentConfig(): AgentUIConfig {
    return this.#agentConfig;
  }

  public async clearMemory(): Promise<void> {
    const { baseUrl, agentId, teamId, headers } = this.#config;

    const memoryEndpoint = teamId
      ? `${baseUrl}/api/team/${teamId}/conversation-memory/clear`
      : `${baseUrl}/api/conversation-memory/clear/agent/${agentId}`;

    const memoryResponse = await fetch(memoryEndpoint, {
      method: 'DELETE',
      credentials: 'include',
      headers
    });

    if (!memoryResponse.ok) {
      const error = await memoryResponse.text().catch(() => 'Unknown error');
      throw new Error(`Failed to clear memory: ${error}`);
    }

    if (agentId && this.threadId) {
      const filesEndpoint = `${baseUrl}/api/agents/${agentId}/threads/${this.threadId}/files`;
      const filesResponse = await fetch(filesEndpoint, {
        method: 'DELETE',
        credentials: 'include',
        headers
      });

      if (!filesResponse.ok) {
        const error = await filesResponse.text().catch(() => 'Unknown error');
        console.error(`Failed to clear thread files: ${error}`);
      }
    }
  }
}

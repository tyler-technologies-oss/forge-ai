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

  constructor(config: FoundryAdapterConfig, agentConfig: AgentUIConfig = {}) {
    const { baseUrl, agentId, teamId, headers } = config;

    if (!agentId && !teamId) {
      throw new Error('Either agentId or teamId must be provided');
    }

    const url = teamId ? `${baseUrl}/api/team/${teamId}/ag-ui` : `${baseUrl}/api/agents/${agentId}/ag-ui`;

    super({ url, headers });
    this.#agentConfig = agentConfig;
  }

  public get agentConfig(): AgentUIConfig {
    return this.#agentConfig;
  }
}

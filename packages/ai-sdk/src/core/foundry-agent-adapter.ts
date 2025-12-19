import { AgUiAdapter } from '@tylertech/forge-ai/ai-chatbot';
import type { AgentUIConfig, AuthStatus, SessionInfo } from './types.js';

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
  readonly #authStatus: AuthStatus | null;
  readonly #sessionInfo: SessionInfo | null;

  constructor(
    config: FoundryAdapterConfig,
    agentConfig: AgentUIConfig = {},
    authStatus?: AuthStatus | null,
    sessionInfo?: SessionInfo | null,
    threadId?: string
  ) {
    const { baseUrl, agentId, teamId, headers } = config;

    if (!agentId && !teamId) {
      throw new Error('Either agentId or teamId must be provided');
    }

    const url = teamId ? `${baseUrl}/api/team/${teamId}/ag-ui` : `${baseUrl}/api/agents/${agentId}/ag-ui`;

    super({ url, headers }, threadId);
    this.#agentConfig = agentConfig;
    this.#config = config;
    this.#authStatus = authStatus ?? null;
    this.#sessionInfo = sessionInfo ?? null;
  }

  public get agentConfig(): AgentUIConfig {
    return this.#agentConfig;
  }

  public async clearMemory(): Promise<void> {
    const { baseUrl, agentId, teamId, headers } = this.#config;

    const userId = this.#authStatus?.userDetails?.id ?? this.#sessionInfo?.anonymousUserId;

    let memoryEndpoint: string;
    if (teamId) {
      memoryEndpoint = `${baseUrl}/api/team/${teamId}/conversation-memory/clear`;
    } else if (agentId && userId) {
      memoryEndpoint = `${baseUrl}/api/conversation-memory/clear/agent/${agentId}/user/${userId}`;
    } else if (agentId) {
      memoryEndpoint = `${baseUrl}/api/conversation-memory/clear/agent/${agentId}`;
    } else {
      console.warn('[FoundryAgentAdapter] Cannot clear memory: missing agentId or teamId');
      return;
    }

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

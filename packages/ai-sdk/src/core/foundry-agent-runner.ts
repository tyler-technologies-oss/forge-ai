import { AgentRunner, type AgentRunnerConfig, type AgentRunnerResult } from '@tylertech/forge-ai/ai-chatbot';
import { FoundryAgentAdapter } from './foundry-agent-adapter.js';

export interface FoundryAgentRunnerConfig extends Omit<AgentRunnerConfig, 'adapter'> {
  adapter?: AgentRunnerConfig['adapter'];
  baseUrl?: string;
  agentId?: string;
  teamId?: string;
  headers?: Record<string, string>;
  agentConfig?: import('./types.js').AgentUIConfig;
}

/**
 * Wrapper for running agent logic in Foundry context.
 * Provides a simplified interface to the core AgentRunner.
 */
export class FoundryAgentRunner {
  private constructor() {}

  /**
   * Execute an agent run with the provided configuration.
   * Either provide an `adapter` or provide `baseUrl` with `agentId` or `teamId`.
   */
  public static async run(config: FoundryAgentRunnerConfig): Promise<AgentRunnerResult> {
    const { adapter, baseUrl, agentId, teamId, headers, agentConfig, ...runnerConfig } = config;

    if (!adapter && !baseUrl) {
      throw new Error('Either adapter or baseUrl must be provided');
    }

    if (!adapter && !agentId && !teamId) {
      throw new Error('Either adapter or (baseUrl with agentId/teamId) must be provided');
    }

    const resolvedAdapter =
      adapter ||
      new FoundryAgentAdapter(
        {
          baseUrl: baseUrl as string,
          agentId,
          teamId,
          headers
        },
        agentConfig
      );

    return AgentRunner.run({
      ...runnerConfig,
      adapter: resolvedAdapter
    });
  }
}

import { AgentRunner, type AgentRunnerConfig, type AgentRunnerResult } from '@tylertech/forge-ai/ai-chatbot';

/**
 * Wrapper for running agent logic in Foundry context.
 * Provides a simplified interface to the core AgentRunner.
 */
export class FoundryAgentRunner {
  private constructor() {}

  /**
   * Execute an agent run with the provided configuration.
   */
  public static async run(config: AgentRunnerConfig): Promise<AgentRunnerResult> {
    return AgentRunner.run(config);
  }
}

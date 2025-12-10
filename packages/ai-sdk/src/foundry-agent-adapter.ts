import { AgUiAdapter } from '@tylertech/forge-ai/ai-chatbot';
import type { AgentUIConfig } from './types.js';

/**
 * Adapter for connecting Tyler AI chatbot to Foundry backend services.
 */
export class FoundryAgentAdapter extends AgUiAdapter {
  readonly #agentConfig: AgentUIConfig;

  constructor(adapterConfig: { url: string; headers?: Record<string, string> }, agentConfig: AgentUIConfig) {
    super(adapterConfig);
    this.#agentConfig = agentConfig;
  }

  public get agentConfig(): AgentUIConfig {
    return this.#agentConfig;
  }
}

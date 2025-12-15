import { loadComponent } from './component-loader.js';
import type { ChatbotAPI, ChatbotConfig } from './types.js';

/**
 * Initialize the Tyler AI chatbot with the provided configuration.
 * @param {ChatbotConfig} config - Configuration object for the chatbot.
 * @returns {Promise<ChatbotAPI>} Promise that resolves to the chatbot API for the newly initialized chatbot instance.
 */
export async function initChatbot(config: Partial<ChatbotConfig> = {}): Promise<ChatbotAPI> {
  try {
    // Attempt to read configuration from the global window object and merge it with the provided config.
    // This is optional and allows for easier integration in certain environments where config might be set dynamically.
    const windowConfig = window.tylerAIConfig;
    config = { ...windowConfig, ...config }; // Config that is passed directly takes precedence

    if (!config.baseUrl) {
      throw new Error('baseUrl is required');
    }

    if (!config.agentId && !config.teamId) {
      throw new Error('Either agentId or teamId is required');
    }

    const api = await loadComponent(config);

    // Dispatch a global event indicating the chatbot is ready
    window.dispatchEvent(new CustomEvent('tyler-ai-chatbot-ready', { detail: { api } }));
    config.onReady?.(api);

    return api;
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error));
    console.error('Failed to initialize Tyler AI chatbot:', err);
    config.onError?.(err);
    throw err;
  }
}

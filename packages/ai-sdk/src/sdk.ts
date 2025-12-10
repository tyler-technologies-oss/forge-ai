import type { ChatbotConfig, ChatbotAPI } from './types.js';
import { checkThirdPartyCookies } from './cookie-checker.js';
import { checkAuthentication } from './auth-manager.js';
import { loadAgentConfig } from './config-loader.js';
import { loadComponent } from './component-loader.js';

/**
 * Initialize the Tyler AI chatbot with the provided configuration.
 * @param {ChatbotConfig} config - Configuration object for the chatbot.
 * @returns {Promise<ChatbotAPI>} Promise that resolves to the chatbot API for the newly initialized chatbot instance.
 */
export async function initChatbot(config: ChatbotConfig): Promise<ChatbotAPI> {
  try {
    if (!config.baseUrl) {
      throw new Error('baseUrl is required');
    }

    if (!config.agentId && !config.teamId) {
      throw new Error('Either agentId or teamId is required');
    }

    // Check for third-party cookies to ensure proper functionality
    const cookiesEnabled = await checkThirdPartyCookies();
    if (!cookiesEnabled) {
      const error = new Error(
        'Third-party cookies are disabled. Please enable cookies in your browser settings to use the Tyler AI chatbot.'
      );
      console.error(error);
      config.onError?.(error);
      throw error;
    }

    // Check authentication status
    const authStatus = await checkAuthentication(config);

    // Load agent configuration
    const agentConfig = await loadAgentConfig(config, authStatus);

    // Load the chatbot component and form factor based on provided config
    const api = await loadComponent(config, agentConfig);

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

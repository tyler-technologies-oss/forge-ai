import type { ChatbotConfig, ChatbotAPI } from './types.js';
import { checkThirdPartyCookies } from './cookie-checker.js';
import { checkAuthentication } from './auth-manager.js';
import { loadAgentConfig } from './config-loader.js';
import { loadComponent } from './component-loader.js';

export async function initChatbot(config: ChatbotConfig): Promise<ChatbotAPI> {
  if (window.__TYLER_AI_CHATBOT__) {
    return window.__TYLER_AI_CHATBOT__;
  }

  try {
    if (!config.baseUrl) {
      throw new Error('baseUrl is required');
    }

    if (!config.agentId && !config.teamId) {
      throw new Error('Either agentId or teamId is required');
    }

    const cookiesEnabled = await checkThirdPartyCookies();
    if (!cookiesEnabled) {
      const error = new Error(
        'Third-party cookies are disabled. Please enable cookies in your browser settings to use this chatbot.'
      );
      console.error(error);
      if (config.onError) {
        config.onError(error);
      }
      throw error;
    }

    const authStatus = await checkAuthentication(config);

    const agentConfig = await loadAgentConfig(config, authStatus);

    const api = await loadComponent(config, agentConfig);

    window.__TYLER_AI_CHATBOT__ = api;

    window.dispatchEvent(new CustomEvent('tyler-ai-chatbot-ready', { detail: { api } }));

    if (config.onReady) {
      config.onReady(api);
    }

    return api;
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error));
    console.error('Failed to initialize chatbot:', err);
    if (config.onError) {
      config.onError(err);
    }
    throw err;
  }
}

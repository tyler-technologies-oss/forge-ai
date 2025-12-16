import type { ChatbotConfig, AuthConfig, AuthStatus } from './types.js';

const AUTH_POLL_INTERVAL = 1000;
const AUTH_POLL_TIMEOUT = 300000;

/**
 * Check authentication status for the chatbot agent to determine if the user is authenticated or needs to authenticate.
 * @param {ChatbotConfig} config - Configuration object for the chatbot.
 * @returns {AuthStatus} indicating authentication status and user details if authenticated.
 */
export async function checkAuthentication(config: ChatbotConfig): Promise<AuthStatus> {
  const { agentId, baseUrl, credentials = 'include', headers = {} } = config;

  if (!agentId) {
    return { isAuthenticated: true };
  }

  const authConfigResponse = await fetch(`${baseUrl}/api/agents/${agentId}/auth-config`, {
    credentials,
    headers
  });

  if (!authConfigResponse.ok) {
    throw new Error(`Failed to fetch auth config: ${authConfigResponse.statusText}`);
  }

  const authConfig: AuthConfig = await authConfigResponse.json();

  if (!authConfig.authEnabled) {
    return { isAuthenticated: true };
  }

  const statusResponse = await fetch(`${baseUrl}/api/agents/${agentId}/auth-status`, {
    credentials,
    headers
  });

  if (!statusResponse.ok) {
    throw new Error(`Failed to fetch auth status: ${statusResponse.statusText}`);
  }

  const authStatus: AuthStatus = await statusResponse.json();

  if (!authStatus.isAuthenticated) {
    return await initiateAuthFlow(config);
  }

  return authStatus;
}

async function initiateAuthFlow(config: ChatbotConfig): Promise<AuthStatus> {
  const { agentId, baseUrl } = config;

  const width = 500;
  const height = 600;
  const left = window.screenX + (window.outerWidth - width) / 2;
  const top = window.screenY + (window.outerHeight - height) / 2;

  const popup = window.open(
    `${baseUrl}/auth/agent/${agentId}/login`,
    'tyler-ai-auth',
    `width=${width},height=${height},left=${left},top=${top}`
  );

  if (!popup) {
    throw new Error('Failed to open authentication popup. Please allow popups for this site.');
  }

  return await pollAuthStatus(config, popup);
}

async function pollAuthStatus(config: ChatbotConfig, popup: Window): Promise<AuthStatus> {
  const { agentId, baseUrl, credentials = 'include', headers = {} } = config;
  const startTime = Date.now();

  return new Promise((resolve, reject) => {
    const interval = setInterval(async () => {
      if (popup.closed) {
        clearInterval(interval);
        reject(new Error('Authentication cancelled by user'));
        return;
      }

      if (Date.now() - startTime > AUTH_POLL_TIMEOUT) {
        clearInterval(interval);
        popup.close();
        reject(new Error('Authentication timeout'));
        return;
      }

      try {
        const statusResponse = await fetch(`${baseUrl}/api/agents/${agentId}/auth-status`, {
          credentials,
          headers
        });

        if (!statusResponse.ok) {
          return;
        }

        const authStatus: AuthStatus = await statusResponse.json();

        if (authStatus.isAuthenticated) {
          clearInterval(interval);
          popup.close();
          resolve(authStatus);
        }
      } catch {
        // Continue polling on error
      }
    }, AUTH_POLL_INTERVAL);
  });
}

import type { ChatbotConfig, AuthConfig, AuthStatus } from './types.js';
import { ChatbotError, ChatbotErrorCode } from './error-codes.js';
import { detectBrowser, buildCookieCheckResult } from './cookie-checker.js';

const AUTH_POLL_INTERVAL = 1000;
const AUTH_POLL_TIMEOUT = 300000;

/**
 * Checks agent auth status and initiates OIDC login if needed.
 * @throws If popup blocked, auth cancelled, or times out (5min)
 */
export async function checkAuthentication(config: ChatbotConfig): Promise<AuthStatus> {
  const { agentId, baseUrl = '', credentials = 'include', headers = {} } = config;

  if (!agentId) {
    return { isAuthenticated: true };
  }

  const browser = detectBrowser();

  const authConfigResponse = await fetch(`${baseUrl}/api/agents/${agentId}/auth-config`, {
    credentials,
    headers
  });

  if (!authConfigResponse.ok) {
    throw new ChatbotError(
      ChatbotErrorCode.AUTH_CONFIG_FETCH_FAILED,
      `Failed to fetch auth config: ${authConfigResponse.statusText}`
    );
  }

  const authConfig: AuthConfig = await authConfigResponse.json();

  const endpointTest = {
    reachable: true,
    corsConfigured: authConfigResponse.ok || authConfigResponse.status === 401 || authConfigResponse.status === 403
  };

  const cookieCheck = buildCookieCheckResult(browser, endpointTest, baseUrl);

  if (cookieCheck.message) {
    console.warn('[FoundryChatbot] Cookie check warning:', cookieCheck.message);
  }

  if (!authConfig.authEnabled) {
    return { isAuthenticated: true, cookieCheck };
  }

  const statusResponse = await fetch(`${baseUrl}/api/agents/${agentId}/auth-status`, {
    credentials,
    headers
  });

  if (!statusResponse.ok) {
    throw new ChatbotError(
      ChatbotErrorCode.AUTH_STATUS_FETCH_FAILED,
      `Failed to fetch auth status: ${statusResponse.statusText}`
    );
  }

  const authStatus: AuthStatus = await statusResponse.json();

  if (!authStatus.isAuthenticated) {
    return await initiateAuthFlow(config, cookieCheck);
  }

  return { ...authStatus, cookieCheck };
}

async function requestStorageAccess(): Promise<boolean> {
  if (!document.requestStorageAccess) {
    return true;
  }

  try {
    await document.requestStorageAccess();
    return true;
  } catch (error) {
    console.error('[Auth] Storage Access API denied:', error);
    return false;
  }
}

function isSafari(): boolean {
  const ua = navigator.userAgent.toLowerCase();
  return ua.includes('safari') && !ua.includes('chrome') && !ua.includes('chromium');
}

async function initiateAuthFlow(config: ChatbotConfig, cookieCheck?: AuthStatus['cookieCheck']): Promise<AuthStatus> {
  const { agentId, baseUrl } = config;

  if (isSafari()) {
    const accessGranted = await requestStorageAccess();
    if (!accessGranted) {
      throw new ChatbotError(
        ChatbotErrorCode.AUTH_STORAGE_ACCESS_DENIED,
        'Storage access required for authentication. Please grant permission and try again.'
      );
    }
  }

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
    throw new ChatbotError(
      ChatbotErrorCode.AUTH_POPUP_BLOCKED,
      'Failed to open authentication popup. Please allow popups for this site.'
    );
  }

  return await pollAuthStatus(config, popup, cookieCheck);
}

/** Polls auth status every 1s until complete or timeout. */
async function pollAuthStatus(
  config: ChatbotConfig,
  popup: Window,
  cookieCheck?: AuthStatus['cookieCheck']
): Promise<AuthStatus> {
  const { agentId, baseUrl, credentials = 'include', headers = {} } = config;
  const startTime = Date.now();

  return new Promise((resolve, reject) => {
    const interval = setInterval(async () => {
      if (popup.closed) {
        clearInterval(interval);

        try {
          // Final check in case closed after auth
          const statusResponse = await fetch(`${baseUrl}/api/agents/${agentId}/auth-status`, {
            credentials,
            headers
          });

          if (statusResponse.ok) {
            const authStatus: AuthStatus = await statusResponse.json();
            if (authStatus.isAuthenticated) {
              resolve({ ...authStatus, cookieCheck });
              return;
            }
          }
        } catch {
          // Ignore final check errors
        }

        reject(new ChatbotError(ChatbotErrorCode.AUTH_CANCELLED, 'Authentication cancelled or failed.'));
        return;
      }

      if (Date.now() - startTime > AUTH_POLL_TIMEOUT) {
        clearInterval(interval);
        popup.close();
        reject(new ChatbotError(ChatbotErrorCode.AUTH_TIMEOUT, 'Authentication timeout'));
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
          resolve({ ...authStatus, cookieCheck });
        }
      } catch {
        // Continue polling on error
      }
    }, AUTH_POLL_INTERVAL);
  });
}

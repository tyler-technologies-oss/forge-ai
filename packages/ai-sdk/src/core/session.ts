import type { ChatbotConfig, AuthStatus, SessionInfo } from './types.js';
import { ChatbotError, ChatbotErrorCode } from './error-codes.js';

/**
 * Establishes an anonymous session for non-authenticated users.
 * Returns null for authenticated users or when agentId is not available.
 */
export async function establishAnonymousSession(
  config: ChatbotConfig,
  authStatus: AuthStatus
): Promise<SessionInfo | null> {
  if (authStatus.isAuthenticated && authStatus.userDetails) {
    return null;
  }

  if (!config.agentId) {
    return null;
  }

  try {
    return await fetchSession(config);
  } catch (error) {
    console.warn('[SessionManager] Failed to establish anonymous session:', error);
    return null;
  }
}

async function fetchSession(config: ChatbotConfig): Promise<SessionInfo> {
  const { baseUrl, agentId, credentials = 'include', headers = {} } = config;

  if (!baseUrl || !agentId) {
    throw new ChatbotError(ChatbotErrorCode.SESSION_FETCH_FAILED, 'baseUrl and agentId are required for session');
  }

  const response = await fetch(`${baseUrl}/api/session`, {
    method: 'GET',
    credentials,
    headers: {
      'Content-Type': 'application/json',
      ...headers
    }
  });

  if (!response.ok) {
    throw new ChatbotError(ChatbotErrorCode.SESSION_FETCH_FAILED, `Failed to fetch session: ${response.statusText}`);
  }

  const data = await response.json();

  if (!data.sessionId || typeof data.sessionId !== 'string') {
    throw new ChatbotError(ChatbotErrorCode.SESSION_INVALID, 'Invalid session response: missing sessionId');
  }

  return {
    sessionId: data.sessionId,
    anonymousUserId: `anon_${data.sessionId}_${agentId}`,
    createdAt: Date.now()
  };
}

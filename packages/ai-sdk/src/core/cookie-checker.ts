import type { ChatbotErrorCode } from './error-codes.js';

export interface CookieCheckResult {
  authSupported: boolean;
  requiresStorageAccess: boolean;
  browser: string;
  message?: string;
  code?: ChatbotErrorCode;
  details?: {
    endpointReachable: boolean;
    corsConfigured: boolean;
    browserPolicy: string;
  };
}

export function detectBrowser(): { name: string; requiresStorageAccess: boolean; policy: string } {
  const ua = navigator.userAgent.toLowerCase();

  if (ua.includes('safari') && !ua.includes('chrome') && !ua.includes('chromium')) {
    return {
      name: 'Safari',
      requiresStorageAccess: true,
      policy: 'Intelligent Tracking Prevention blocks third-party cookies by default'
    };
  }

  if (ua.includes('firefox')) {
    return {
      name: 'Firefox',
      requiresStorageAccess: false,
      policy: 'Enhanced Tracking Protection may block third-party cookies'
    };
  }

  if (ua.includes('chrome') || ua.includes('chromium') || ua.includes('edg')) {
    return {
      name: 'Chrome',
      requiresStorageAccess: false,
      policy: 'Third-party cookies supported (being phased out)'
    };
  }

  return {
    name: 'Unknown',
    requiresStorageAccess: false,
    policy: 'Unknown cookie policy'
  };
}

export async function testAuthEndpoint(
  baseUrl: string,
  agentId: string
): Promise<{ reachable: boolean; corsConfigured: boolean }> {
  try {
    const response = await fetch(`${baseUrl}/api/agents/${agentId}/auth-config`, {
      method: 'GET',
      credentials: 'include',
      mode: 'cors'
    });

    return {
      reachable: true,
      corsConfigured: response.ok || response.status === 401 || response.status === 403
    };
  } catch (error) {
    if (error instanceof TypeError && error.message.includes('CORS')) {
      return { reachable: true, corsConfigured: false };
    }
    return { reachable: false, corsConfigured: false };
  }
}

export function buildCookieCheckResult(
  browser: { name: string; requiresStorageAccess: boolean; policy: string },
  endpointTest: { reachable: boolean; corsConfigured: boolean },
  baseUrl: string
): CookieCheckResult {
  if (!endpointTest.reachable) {
    return {
      authSupported: false,
      requiresStorageAccess: false,
      browser: browser.name,
      message: `Cannot connect to authentication server at ${baseUrl}`,
      code: 'AUTH_SERVER_UNREACHABLE',
      details: {
        endpointReachable: false,
        corsConfigured: false,
        browserPolicy: browser.policy
      }
    };
  }

  if (!endpointTest.corsConfigured) {
    return {
      authSupported: false,
      requiresStorageAccess: false,
      browser: browser.name,
      message: 'Authentication server not properly configured for cross-origin requests',
      code: 'AUTH_CORS_MISCONFIGURED',
      details: {
        endpointReachable: true,
        corsConfigured: false,
        browserPolicy: browser.policy
      }
    };
  }

  if (browser.requiresStorageAccess) {
    return {
      authSupported: true,
      requiresStorageAccess: true,
      browser: browser.name,
      message: 'Cross-domain authentication requires Storage Access API permission',
      code: 'AUTH_REQUIRES_STORAGE_ACCESS',
      details: {
        endpointReachable: true,
        corsConfigured: true,
        browserPolicy: browser.policy
      }
    };
  }

  const mayHaveRestrictions = browser.name === 'Firefox';

  return {
    authSupported: true,
    requiresStorageAccess: false,
    browser: browser.name,
    message: mayHaveRestrictions ? 'Authentication may require disabling tracking protection' : undefined,
    code: mayHaveRestrictions ? 'AUTH_TRACKING_PROTECTION' : undefined,
    details: {
      endpointReachable: true,
      corsConfigured: true,
      browserPolicy: browser.policy
    }
  };
}

export async function checkAuthCookieSupport(baseUrl: string, agentId?: string): Promise<CookieCheckResult> {
  const browser = detectBrowser();

  if (!agentId) {
    return {
      authSupported: true,
      requiresStorageAccess: false,
      browser: browser.name,
      message: 'No agent ID provided, skipping auth endpoint check'
    };
  }

  const endpointTest = await testAuthEndpoint(baseUrl, agentId);
  return buildCookieCheckResult(browser, endpointTest, baseUrl);
}

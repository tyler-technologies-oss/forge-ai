export const ChatbotErrorCode = {
  AUTH_CONFIG_FETCH_FAILED: 'AUTH_CONFIG_FETCH_FAILED',
  AUTH_STATUS_FETCH_FAILED: 'AUTH_STATUS_FETCH_FAILED',
  AUTH_STORAGE_ACCESS_DENIED: 'AUTH_STORAGE_ACCESS_DENIED',
  AUTH_POPUP_BLOCKED: 'AUTH_POPUP_BLOCKED',
  AUTH_CANCELLED: 'AUTH_CANCELLED',
  AUTH_TIMEOUT: 'AUTH_TIMEOUT',
  AUTH_SERVER_UNREACHABLE: 'AUTH_SERVER_UNREACHABLE',
  AUTH_CORS_MISCONFIGURED: 'AUTH_CORS_MISCONFIGURED',
  AUTH_REQUIRES_STORAGE_ACCESS: 'AUTH_REQUIRES_STORAGE_ACCESS',
  AUTH_TRACKING_PROTECTION: 'AUTH_TRACKING_PROTECTION',
  SESSION_FETCH_FAILED: 'SESSION_FETCH_FAILED',
  SESSION_INVALID: 'SESSION_INVALID',
  SESSION_EXPIRED: 'SESSION_EXPIRED',
  CONFIG_INVALID: 'CONFIG_INVALID'
} as const;

export type ChatbotErrorCode = (typeof ChatbotErrorCode)[keyof typeof ChatbotErrorCode];

export class ChatbotError extends Error {
  public readonly code: ChatbotErrorCode;
  public readonly originalError?: Error;

  constructor(code: ChatbotErrorCode, message: string, originalError?: Error) {
    super(message);
    this.name = 'ChatbotError';
    this.code = code;
    this.originalError = originalError;
  }
}

export function isChatbotError(error: unknown): error is ChatbotError {
  return error instanceof ChatbotError;
}

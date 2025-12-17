import type { TemplateResult } from 'lit';
import { html } from 'lit';
import { ChatbotErrorCode, type ChatbotError } from '../../core/error-codes.js';

export function getErrorTitle(errorCode: ChatbotErrorCode): string {
  switch (errorCode) {
    case ChatbotErrorCode.CONFIG_INVALID:
      return 'Configuration Error';
    case ChatbotErrorCode.AUTH_CONFIG_FETCH_FAILED:
    case ChatbotErrorCode.AUTH_STATUS_FETCH_FAILED:
    case ChatbotErrorCode.AUTH_SERVER_UNREACHABLE:
    case ChatbotErrorCode.AUTH_CORS_MISCONFIGURED:
      return 'Connection Error';
    case ChatbotErrorCode.AUTH_STORAGE_ACCESS_DENIED:
    case ChatbotErrorCode.AUTH_POPUP_BLOCKED:
    case ChatbotErrorCode.AUTH_CANCELLED:
    case ChatbotErrorCode.AUTH_TIMEOUT:
    case ChatbotErrorCode.AUTH_REQUIRES_STORAGE_ACCESS:
    case ChatbotErrorCode.AUTH_TRACKING_PROTECTION:
      return 'Authentication Error';
    default:
      return 'Error';
  }
}

export function getErrorMessage(error: ChatbotError): TemplateResult {
  switch (error.code) {
    case ChatbotErrorCode.AUTH_STORAGE_ACCESS_DENIED:
    case ChatbotErrorCode.AUTH_REQUIRES_STORAGE_ACCESS:
    case ChatbotErrorCode.AUTH_TRACKING_PROTECTION:
      return html`
        <p>Third-party cookies are required for authentication.</p>
        <p><strong>To resolve this issue:</strong></p>
        <ul>
          <li>If using incognito/private mode, try opening in a normal browser window</li>
          <li>Check your browser settings to enable third-party cookies for this site</li>
          <li>Some browser extensions may block cookies - try disabling them temporarily</li>
        </ul>
      `;

    case ChatbotErrorCode.AUTH_CANCELLED:
      return html`
        <p>Authentication was cancelled or could not be completed.</p>
        <p>This can happen if:</p>
        <ul>
          <li>You closed the authentication window before completing sign-in</li>
          <li>Your browser is blocking third-party cookies (common in incognito/private mode)</li>
          <li>The authentication session expired</li>
        </ul>
        <p>Please refresh the page and try again in a normal browser window.</p>
      `;

    case ChatbotErrorCode.AUTH_TIMEOUT:
      return html`
        <p>Authentication took too long and timed out.</p>
        <p>Please refresh the page and try again. If the problem persists, contact support.</p>
      `;

    case ChatbotErrorCode.AUTH_POPUP_BLOCKED:
      return html`
        <p>Unable to open authentication window.</p>
        <p>Please allow popups for this site and try again.</p>
      `;

    case ChatbotErrorCode.AUTH_SERVER_UNREACHABLE:
      return html`
        <p>Cannot connect to authentication server.</p>
        <p>Please check your network connection and try again.</p>
      `;

    case ChatbotErrorCode.AUTH_CORS_MISCONFIGURED:
      return html`
        <p>Authentication server not properly configured.</p>
        <p>Please contact support for assistance.</p>
      `;

    case ChatbotErrorCode.CONFIG_INVALID:
      return html`
        <p>Configuration error: ${error.message}</p>
        <p>Please check your setup and try again.</p>
      `;

    default:
      return html`
        <p>${error.message}</p>
        <p>Please refresh the page and try again. If the problem persists, contact support.</p>
      `;
  }
}

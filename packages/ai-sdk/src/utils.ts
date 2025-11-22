import type { AuthStatus } from './types.js';

export function applyTemplateVariables(template: string, userDetails?: AuthStatus['userDetails']): string {
  if (!userDetails) {
    return template;
  }

  return template
    .replace(/\{\{id\}\}/g, userDetails.id)
    .replace(/\{\{email\}\}/g, userDetails.email)
    .replace(/\{\{name\}\}/g, userDetails.name);
}

export function waitForDOMReady(): Promise<void> {
  if (document.readyState === 'loading') {
    return new Promise(resolve => {
      document.addEventListener('DOMContentLoaded', () => resolve(), { once: true });
    });
  }
  return Promise.resolve();
}

export function resolveMountPoint(mountPoint: string | HTMLElement): HTMLElement | null {
  if (typeof mountPoint === 'string') {
    return document.querySelector(mountPoint);
  }
  return mountPoint;
}

export function showError(message: string): void {
  const errorDiv = document.createElement('div');
  errorDiv.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #f44336;
    color: white;
    padding: 24px;
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.2);
    z-index: 10000;
    max-width: 400px;
    font-family: system-ui, -apple-system, sans-serif;
    font-size: 14px;
    line-height: 1.5;
  `;
  errorDiv.textContent = message;
  document.body.appendChild(errorDiv);

  setTimeout(() => errorDiv.remove(), 10000);
}

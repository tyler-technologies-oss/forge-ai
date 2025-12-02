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

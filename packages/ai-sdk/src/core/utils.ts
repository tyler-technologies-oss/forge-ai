import type { AuthStatus } from './types.js';

/**
 * Replace template variables in a string with user details.
 * Supports {{id}}, {{email}}, and {{name}} placeholders.
 */
export function applyTemplateVariables(template: string, userDetails?: AuthStatus['userDetails']): string {
  if (!userDetails) {
    return template;
  }

  return template
    .replace(/\{\{id\}\}/g, userDetails.id)
    .replace(/\{\{email\}\}/g, userDetails.email)
    .replace(/\{\{name\}\}/g, userDetails.name);
}

/**
 * Wait for the DOM to be fully loaded before proceeding.
 * Returns immediately if the DOM is already ready.
 */
export function waitForDOMReady(): Promise<void> {
  if (document.readyState === 'loading') {
    return new Promise(resolve => {
      document.addEventListener('DOMContentLoaded', () => resolve(), { once: true });
    });
  }
  return Promise.resolve();
}

/**
 * Resolve a mount point to an HTMLElement.
 * If a string is provided, queries the DOM for a matching element.
 */
export function resolveMountPoint(mountPoint: string | HTMLElement): HTMLElement | null {
  if (typeof mountPoint === 'string') {
    return document.querySelector(mountPoint);
  }
  return mountPoint;
}

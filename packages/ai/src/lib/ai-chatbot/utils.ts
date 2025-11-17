import { marked } from 'marked';

/**
 * Generates a unique ID with a given prefix
 */
export function generateId(prefix: string): string {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
}

/**
 * Renders markdown content to HTML
 */
export function renderMarkdown(content: string): string {
  return marked.parse(content, { async: false, gfm: true, breaks: true }) as string;
}

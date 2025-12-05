import { marked } from 'marked';
import DOMPurify from 'dompurify';

const DOMPURIFY_CONFIG = {
  FORBID_TAGS: ['script', 'style', 'iframe', 'object', 'embed'],
  FORBID_ATTR: ['onerror', 'onload', 'onclick', 'onmouseover']
};

/**
 * Generates a unique ID with a given prefix
 */
export function generateId(prefix: string): string {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
}

/**
 * Renders markdown content to sanitized HTML
 */
export function renderMarkdown(content: string): string {
  const rawHtml = marked.parse(content, { async: false, gfm: true, breaks: true }) as string;
  return DOMPurify.sanitize(rawHtml, DOMPURIFY_CONFIG);
}

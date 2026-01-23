import { marked } from 'marked';
import DOMPurify from 'dompurify';
import remend from 'remend';
import { v4 as uuidv4 } from 'uuid';

const DOMPURIFY_CONFIG: DOMPurify.Config = {
  FORBID_TAGS: ['script', 'style', 'iframe', 'object', 'embed'],
  FORBID_ATTR: ['onerror', 'onload', 'onclick', 'onmouseover'],
  ADD_ATTR: ['target', 'rel']
};

/**
 * Generates a unique ID using UUID v4
 */
export function generateId(): string {
  return uuidv4();
}

/**
 * Renders markdown content to sanitized HTML
 */
export function renderMarkdown(content: string): string {
  const completedMarkdown = remend(content);
  const renderer = new marked.Renderer();
  renderer.link = function (args) {
    const link = marked.Renderer.prototype.link.call(this, args);
    return link.replace(/^<a /, '<a target="_blank" rel="noreferrer noopener" ');
  };
  const rawHtml = marked.parse(completedMarkdown, {
    async: false,
    gfm: true,
    breaks: true,
    renderer
  }) as string;
  return DOMPurify.sanitize(rawHtml, DOMPURIFY_CONFIG);
}

/**
 * Downloads content as a file with specified MIME type
 */
export function downloadFile(content: string, filename: string, mimeType = 'text/plain'): void {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

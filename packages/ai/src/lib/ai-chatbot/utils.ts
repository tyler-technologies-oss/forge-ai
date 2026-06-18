import { marked } from 'marked';
import DOMPurify, { type Config } from 'dompurify';
import remend from 'remend';
import { v4 as uuidv4 } from 'uuid';
import type { FileAttachment, ContextItem } from './types.js';

const DOMPURIFY_CONFIG: Config = {
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

/**
 * Converts file attachments to context items
 */
export function fileAttachmentsToContextItems(
  completedAttachments: FileAttachment[],
  pendingAttachments: FileAttachment[]
): ContextItem[] {
  const pending = pendingAttachments.map(file => ({
    id: file.id,
    label: file.filename,
    sublabel: formatBytes(file.size),
    loading: file.uploading ?? true,
    removable: true,
    type: 'file' as const
  }));

  const completed = completedAttachments.map(file => ({
    id: file.id,
    label: file.filename,
    sublabel: formatBytes(file.size),
    removable: true,
    type: 'file' as const
  }));

  return [...pending, ...completed];
}

function formatBytes(bytes: number): string {
  if (bytes === 0) {
    return '0 B';
  }
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${Math.round((bytes / Math.pow(k, i)) * 100) / 100} ${sizes[i]}`;
}

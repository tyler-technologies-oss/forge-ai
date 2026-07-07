import { marked } from 'marked';
import DOMPurify, { type Config } from 'dompurify';
import remend, { type RemendOptions } from 'remend';
import { v4 as uuidv4 } from 'uuid';

export interface RenderMarkdownOptions {
  /**
   * Whether the content is still being streamed. Streaming content (the
   * default) is run through markdown-completion repairs that finish partial
   * syntax as tokens arrive. Complete content (e.g. finalized user messages)
   * should set this to `false` so those repairs don't mangle intentional text
   * such as `[text](` into incomplete-link placeholders.
   */
  streaming?: boolean;
}

/**
 * `remend` config applied to complete (non-streaming) content: disable the
 * link/image completion handlers, keeping escaping repairs intact.
 */
const COMPLETE_CONTENT_REMEND_OPTIONS: RemendOptions = { links: false, images: false };
import type { ChatMessage, ContextItem, FileAttachment, ResponseItem, ToolCall } from './types.js';

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
export function renderMarkdown(content: string, { streaming = true }: RenderMarkdownOptions = {}): string {
  const completedMarkdown = remend(content, streaming ? undefined : COMPLETE_CONTENT_REMEND_OPTIONS);
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

/**
 * Formats a single tool call as indented text lines for a chat export.
 */
export function formatToolCallForExport(toolCall: ToolCall): string {
  const lines = [`  - Tool: ${toolCall.name}`, `    Args: ${JSON.stringify(toolCall.args)}`];

  if (toolCall.status === 'error') {
    const errorMsg =
      typeof toolCall.result === 'object' && toolCall.result !== null && 'error' in toolCall.result
        ? (toolCall.result as { error: string }).error
        : 'Unknown error';
    lines.push(`    Error: ${errorMsg}`);
  } else if (toolCall.result !== undefined) {
    lines.push(`    Result: ${JSON.stringify(toolCall.result)}`);
  }

  return lines.join('\n');
}

/**
 * Formats a list of chat messages into a plain-text transcript. Tool call
 * details are only included when `includeToolCalls` is enabled. When a message
 * retains its interleaved `children`, text and tool calls are emitted in the
 * exact order they occurred; otherwise it falls back to the flat content plus a
 * trailing tool call block.
 */
export function formatChatTranscript(messages: ChatMessage[], { includeToolCalls = false } = {}): string {
  return messages
    .map(message => {
      const timestamp = new Date(message.timestamp).toLocaleString();
      const role = message.role === 'user' ? 'You' : 'Agent';
      const body = message.children?.length
        ? formatInterleavedBody(message.children, includeToolCalls)
        : formatFlatBody(message, includeToolCalls);

      return `[${timestamp}] ${role}:\n${body}\n`;
    })
    .join('\n');
}

function formatInterleavedBody(children: ResponseItem[], includeToolCalls: boolean): string {
  return children
    .map(item => {
      if (item.type === 'text') {
        return item.content;
      }
      return includeToolCalls ? formatToolCallForExport(item.data) : '';
    })
    .filter(part => part.trim().length > 0)
    .join('\n\n');
}

function formatFlatBody(message: ChatMessage, includeToolCalls: boolean): string {
  let body = message.content;

  if (includeToolCalls && message.toolCalls?.length) {
    body += '\n' + message.toolCalls.map(formatToolCallForExport).join('\n\n') + '\n';
  }

  return body;
}

/**
 * Builds a timestamped filename for an exported chat transcript, optionally
 * prefixed with a slugified agent name.
 */
export function createChatExportFilename(agentName?: string): string {
  const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
  const slug = agentName
    ?.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  const prefix = slug ? `${slug}-` : '';
  return `${prefix}chat-history-${timestamp}.txt`;
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

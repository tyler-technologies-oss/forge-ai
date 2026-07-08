import { v4 as uuidv4 } from 'uuid';
import type { ChatMessage, ContextItem, FileAttachment, ResponseItem, ToolCall } from './types.js';

export { renderMarkdown, renderInlineMarkdown, type RenderMarkdownOptions } from '../utils/markdown.js';

/**
 * Generates a unique ID using UUID v4
 */
export function generateId(): string {
  return uuidv4();
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

import type { Tool as SDKTool } from '@ag-ui/core';

export interface ToolRenderer {
  elementTag?: string;
  render?: (toolCall: ToolCall) => HTMLElement | DocumentFragment;
}

export interface ToolDefinition extends SDKTool {
  renderer?: ToolRenderer;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system' | 'tool';
  content: string;
  timestamp: number;
  status: 'pending' | 'streaming' | 'complete' | 'error';
  toolCalls?: ToolCall[];
  attachments?: FileAttachment[];
  uploadedFiles?: UploadedFileMetadata[];
  toolCallId?: string;
}

export interface ToolCall {
  id: string;
  messageId: string;
  name: string;
  args: Record<string, unknown>;
  argsBuffer?: string;
  result?: unknown;
  status: 'pending' | 'parsing' | 'executing' | 'complete' | 'error';
}

export interface FileAttachment {
  id: string;
  filename: string;
  size: number;
  mimeType: string;
  timestamp: number;
  thumbnail?: string;
  uploading?: boolean;
  progress?: number;
}

export interface UploadedFileMetadata {
  fileId: string;
  fileName: string;
  fileType: string;
  fileSize: number;
  uploadedAt: string;
}

export type MessageItem = { type: 'message'; data: ChatMessage } | { type: 'toolCall'; data: ToolCall };

export interface ThreadState {
  threadId?: string;
  messages: ChatMessage[];
  timestamp?: number;
}

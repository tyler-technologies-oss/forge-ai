export interface ToolRenderer {
  elementTag?: string;
  render?: (toolCall: ToolCall) => HTMLElement | DocumentFragment;
}

/**
 * Context provided to tool handlers when they are invoked.
 */
export interface HandlerContext {
  /** Tool call arguments */
  args: Record<string, unknown>;
  /** Unique identifier for this tool call */
  toolCallId: string;
  /** Name of the tool being called */
  toolName: string;
  /** Optional abort signal for cancellation support */
  signal?: AbortSignal;
}

export interface ToolDefinition {
  name: string;
  description?: string;
  parameters?: {
    type: 'object';
    properties?: Record<string, unknown>;
    required?: string[];
  };
  /** Optional renderer for displaying tool call results within the chat UI. */
  renderer?: ToolRenderer;
  /**
   * Optional handler function invoked when tool is called.
   * If provided, tool result is automatically sent to backend.
   * If omitted and renderer exists, tool auto-responds with success.
   * If both omitted, dispatches event for external handling.
   */
  handler?: (context: HandlerContext) => Promise<unknown> | unknown;
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

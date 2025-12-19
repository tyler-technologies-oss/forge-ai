/**
 * Valid HTML heading levels for accessibility and semantic structure
 */
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface ToolRenderer {
  elementTag?: string;
  render?: (toolCall: ToolCall) => HTMLElement | DocumentFragment;
}

/**
 * Tool result with custom response string.
 * Return this from tool handlers to provide a custom result message to the LLM.
 */
export interface ToolResult {
  result: string;
}

/**
 * Context provided to tool handlers when they are invoked.
 * @template TArgs - Type of the tool call arguments
 */
export interface HandlerContext<TArgs = Record<string, unknown>> {
  /** Tool call arguments */
  args: TArgs;
  /** Unique identifier for this tool call */
  toolCallId: string;
  /** Name of the tool being called */
  toolName: string;
  /** Optional abort signal for cancellation support */
  signal?: AbortSignal;
}

export type ToolType = 'client' | 'agent';

/**
 * Tool definition with optional type-safe handler.
 * @template TArgs - Type of the tool call arguments for type-safe handler context
 */
export interface ToolDefinition<THandlerArgs = Record<string, unknown>> {
  name: string;
  displayName?: string;
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
   * Can return a custom result string to include in tool response.
   */
  handler?: (context: HandlerContext<THandlerArgs>) => Promise<ToolResult | void> | ToolResult | void;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system' | 'tool';
  content: string;
  timestamp: number;
  status: 'pending' | 'streaming' | 'complete' | 'error';
  toolCalls?: ToolCall[];
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
  type: ToolType;
}

export interface FileAttachment {
  id: string;
  filename: string;
  size: number;
  mimeType: string;
  timestamp: number;
  uploading?: boolean;
  progress?: number;
  status?: 'pending' | 'uploading' | 'success' | 'error';
  error?: string;
  fileId?: string;
}

export interface UploadedFileMetadata {
  fileId: string;
  fileName: string;
  fileType: string;
  fileSize: number;
  uploadedAt: string;
}

export interface FileUploadCallbacks {
  updateProgress: (progress: number) => void;
  markComplete: (metadata: UploadedFileMetadata) => void;
  markError: (error: string) => void;
  onAbort: (callback: () => void) => void;
}

export type FileUploadHandler = (file: File, callbacks: FileUploadCallbacks) => Promise<void> | void;

export interface FileRemoveCallbacks {
  onSuccess: () => void;
  onError: (error: string) => void;
}

export interface FileRemoveEvent extends FileRemoveCallbacks {
  fileId: string;
}

export interface ForgeAiChatbotFileSelectEventData {
  fileId: string;
  file: File;
  filename: string;
  size: number;
  mimeType: string;
  timestamp: number;
  updateProgress: (progress: number) => void;
  markComplete: (metadata: UploadedFileMetadata) => void;
  markError: (error: string) => void;
  onAbort: (callback: () => void) => void;
}

export type MessageItem = { type: 'message'; data: ChatMessage } | { type: 'toolCall'; data: ToolCall };

export interface ThreadState {
  threadId?: string;
  messages: ChatMessage[];
  timestamp?: number;
}

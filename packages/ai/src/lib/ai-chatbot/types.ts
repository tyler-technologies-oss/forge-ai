/**
 * Valid HTML heading levels for accessibility and semantic structure
 */
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface Agent {
  id: string;
  name: string;
  description?: string;
}

export type SlashCommandId = 'clear' | 'export' | 'info' | 'debug';

export type SlashCommandGroup = 'Conversation' | 'Help';

export interface SlashCommand {
  id: SlashCommandId;
  name: string;
  group: SlashCommandGroup;
}

export interface ForgeAiSlashCommandMenuSelectEventData {
  command: SlashCommand;
  index: number;
}

export interface ToolRenderer {
  elementTag?: string;
  render?: (toolCall: ToolCall) => HTMLElement | DocumentFragment;
}

/**
 * Interface that tool renderer components should implement for type-safe tool call handling.
 * @template TArgs - Type of the tool call arguments
 */
export interface IToolRenderer<TArgs = Record<string, unknown>> {
  toolCall: ToolCall<TArgs>;
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
   * Can return a string, object, or void. Strings and objects are used directly as tool results.
   */
  handler?: (
    context: HandlerContext<THandlerArgs>
  ) => Promise<string | Record<string, unknown> | void> | string | Record<string, unknown> | void;
}

export interface MessageStartEvent {
  messageId: string;
}

export interface MessageDeltaEvent {
  messageId: string;
  delta: string;
}

export interface MessageEndEvent {
  messageId: string;
}

export interface ToolCallStartEvent {
  id: string;
  messageId: string;
  name: string;
}

export interface ToolCallArgsEvent {
  id: string;
  messageId: string;
  name: string;
  argsBuffer: string;
  partialArgs?: Record<string, unknown>;
}

export interface ToolCallEndEvent {
  id: string;
  messageId: string;
  name: string;
  args: Record<string, unknown>;
}

export interface ToolResultEvent {
  toolCallId: string;
  result: unknown;
  message: ChatMessage;
}

export type StreamEvent =
  | { type: 'message-start'; timestamp: number; data: MessageStartEvent; rawEvent?: unknown }
  | { type: 'message-delta'; timestamp: number; data: MessageDeltaEvent; rawEvent?: unknown }
  | { type: 'message-end'; timestamp: number; data: MessageEndEvent; rawEvent?: unknown }
  | { type: 'tool-call-start'; timestamp: number; data: ToolCallStartEvent; rawEvent?: unknown }
  | { type: 'tool-call-args'; timestamp: number; data: ToolCallArgsEvent; rawEvent?: unknown }
  | { type: 'tool-call-end'; timestamp: number; data: ToolCallEndEvent; rawEvent?: unknown }
  | { type: 'tool-result'; timestamp: number; data: ToolResultEvent; rawEvent?: unknown };

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system' | 'tool';
  content: string;
  timestamp: number;
  status: 'pending' | 'streaming' | 'complete' | 'error';
  toolCalls?: ToolCall[];
  toolCallId?: string;
  eventStream?: StreamEvent[];
  feedback?: ResponseFeedback;
  children?: ResponseItem[];
  clientOnly?: boolean;
}

export interface ToolCall<TArgs = Record<string, unknown>> {
  id: string;
  messageId: string;
  name: string;
  args: TArgs;
  argsBuffer?: string;
  result?: unknown;
  status: 'pending' | 'parsing' | 'executing' | 'complete' | 'error';
  type: ToolType;
  eventStream?: StreamEvent[];
}

export type ResponseItem =
  | { type: 'text'; messageId: string; content: string; status: 'streaming' | 'complete' }
  | { type: 'toolCall'; data: ToolCall };

export type FeedbackType = 'positive' | 'negative';

export interface ResponseFeedback {
  type: FeedbackType;
  reason?: string;
}

export interface AssistantResponse {
  id: string;
  children: ResponseItem[];
  status: 'streaming' | 'complete' | 'error';
  timestamp: number;
  eventStream?: StreamEvent[];
  feedback?: ResponseFeedback;
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

export type MessageItem =
  | { type: 'message'; data: ChatMessage }
  | { type: 'toolCall'; data: ToolCall }
  | { type: 'assistant'; data: AssistantResponse };

export interface ThreadState {
  threadId?: string;
  messages: ChatMessage[];
  timestamp?: number;
  selectedAgentId?: string;
}

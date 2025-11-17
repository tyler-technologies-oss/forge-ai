/**
 * Generic chatbot types - protocol agnostic
 */

export interface ToolDefinition {
  name: string;
  description: string;
  parameters: {
    type: 'object';
    properties: Record<string, unknown>;
    required?: string[];
  };
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'tool';
  content: string;
  timestamp: number;
  status: 'pending' | 'streaming' | 'complete' | 'error';
  toolCalls?: ToolCall[];
  attachments?: FileAttachment[];
}

export interface ToolCall {
  id: string;
  messageId: string;
  name: string;
  args: Record<string, unknown>;
  argsBuffer: string;
  result?: unknown;
  status: 'pending' | 'executing' | 'complete' | 'error';
}

export interface FileAttachment {
  file: File;
  timestamp: number;
}

export interface CoreMessage {
  id: string;
  role: 'user' | 'assistant' | 'system' | 'tool';
  content: string;
}

/**
 * Internal types (AG-UI protocol implementation details)
 */

interface ContextItem {
  description: string;
  value: unknown;
}

interface RunAgentInput {
  runId: string;
  threadId: string;
  messages: CoreMessage[];
  context?: ContextItem[];
  tools?: ToolDefinition[];
}

type AgUiEventType =
  | 'TEXT_MESSAGE_START'
  | 'TEXT_MESSAGE_CHUNK'
  | 'TEXT_MESSAGE_END'
  | 'TOOL_CALL_START'
  | 'TOOL_CALL_ARGS'
  | 'TOOL_CALL_END'
  | 'error';

interface AgUiEvent {
  type: AgUiEventType;
  delta?: string;
  messageId?: string;
  toolCallId?: string;
  toolName?: string;
  args?: Record<string, unknown>;
  error?: string;
}

/**
 * Public type aliases (behavior-specific, protocol-agnostic names)
 */

export type ResponseEventType = AgUiEventType;
export type ResponseEvent = AgUiEvent;
export type AdapterMessageInput = RunAgentInput;
export type ContextEntry = ContextItem;

/**
 * Adapter message input
 */
export interface MessageInput {
  threadId: string;
  messages: CoreMessage[];
  tools?: ToolDefinition[];
}

/**
 * Adapter interface
 */
export interface AiChatbotAdapter {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  sendMessage(input: MessageInput): void;
  onEvent(callback: (event: ResponseEvent) => void): void;
  abort(): void;
}

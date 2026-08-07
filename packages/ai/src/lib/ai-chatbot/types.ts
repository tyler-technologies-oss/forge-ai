import type { Thread } from '../ai-threads';

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

/**
 * Context provided to onStart callback when tool call begins.
 */
export interface ToolStartContext {
  toolCallId: string;
  toolName: string;
}

/**
 * Context provided to onDelta callback during streaming.
 * @template TArgs - Type of the tool call arguments
 */
export interface ToolDeltaContext<TArgs = Record<string, unknown>> {
  argsBuffer: string;
  partialArgs: Partial<TArgs>;
  toolCallId: string;
  toolName: string;
}

/**
 * Context provided to onEnd callback when args are complete.
 * @template TArgs - Type of the tool call arguments
 */
export interface ToolEndContext<TArgs = Record<string, unknown>> {
  args: TArgs;
  toolCallId: string;
  toolName: string;
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
  /** If true, renderer shows immediately on tool call start (default: false). */
  renderOnStart?: boolean;
  /**
   * Opt-in marker declaring this tool is backed by an MCP-app UI resource. Presence
   * signals the core controller to resolve + stamp a {@link McpAppUiResource} when the
   * tool is called. `resourceUri` is informational; the resolved URI arrives on the
   * `mcp-ui-resource` event.
   */
  mcpApp?: { resourceUri?: string };
  /** Called when tool call starts (before args stream). */
  onStart?: (context: ToolStartContext) => void;
  /** Called during streaming with partial args. */
  onDelta?: (context: ToolDeltaContext<THandlerArgs>) => void;
  /** Called when args are complete (before handler execution). */
  onEnd?: (context: ToolEndContext<THandlerArgs>) => void;
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
  /**
   * Companion structured payload delivered 1:1 with the tool result. Fed to an MCP-app
   * widget alongside the result; stripped from the LLM-facing context.
   */
  structuredContent?: unknown;
}

/**
 * Content-Security-Policy domain allow-lists for an MCP-app resource, mirroring the
 * spec's `_meta.ui.csp` shape (2026-01-26). The sandbox proxy composes these into the
 * enforced CSP; when omitted a restrictive default block applies.
 *
 * Local type — intentionally NOT aliased from `@modelcontextprotocol/ext-apps` so the
 * type layer stays bridge-agnostic.
 */
export interface McpAppResourceCsp {
  /** Domains the widget may `connect-src` to (fetch/XHR/WebSocket). */
  connectDomains?: string[];
  /** Domains the widget may load passive resources from (img/media/etc.). */
  resourceDomains?: string[];
  /** Domains allowed in `frame-src`; absent → `frame-src 'none'`. */
  frameDomains?: string[];
  /** Domains allowed in `base-uri`; absent → `base-uri 'self'`. */
  baseUriDomains?: string[];
}

/**
 * Iframe permission policy for an MCP-app resource. Either a list of raw
 * Permissions-Policy feature tokens or a map of boolean flags the sandbox proxy
 * translates into the inner-iframe `allow` attribute.
 *
 * Local type — not aliased from ext-apps.
 */
export type McpAppResourcePermissions =
  | string[]
  | {
      camera?: boolean;
      microphone?: boolean;
      geolocation?: boolean;
      clipboardRead?: boolean;
      clipboardWrite?: boolean;
      displayCapture?: boolean;
      fullscreen?: boolean;
    };

/**
 * The resolved UI resource stamped onto a {@link ToolCall} once a `mcp-ui-resource`
 * event arrives. Presence of this on a tool call is the single render discriminator for
 * mounting `<forge-ai-mcp-app>`.
 *
 * Local type — not aliased from ext-apps.
 */
export interface McpAppUiResource {
  /** The complete standalone app HTML document, resolved server-side. */
  html: string;
  /** CSP domain allow-lists to enforce in the sandbox. */
  csp?: McpAppResourceCsp;
  /** Iframe permission policy for the sandbox inner frame. */
  permissions?: McpAppResourcePermissions;
  /** The concrete resolved `ui://` resource URI (never a template). */
  resourceUri?: string;
  /**
   * Whether the widget prefers the host to draw a border/background around it.
   * `true` → visible chrome, `false` → none, omitted → renderer default.
   */
  prefersBorder?: boolean;
}

/** Display modes an MCP-app widget can be presented in (spec 2026-01-26). */
export type McpAppDisplayMode = 'inline' | 'fullscreen' | 'pip';

/**
 * Host context projected into an MCP-app widget. Deliberately narrow for the MVP:
 * `theme` light/dark is the whole theming surface — the ~80 standardized CSS variables
 * and font declarations are NOT propagated, so widgets fall back to their own defaults.
 *
 * Local type — not aliased from ext-apps.
 */
export interface McpAppHostContext {
  theme: 'light' | 'dark';
  /** Container dimensions available to the widget, in CSS pixels. */
  container?: {
    width: number;
    height: number;
  };
  /** Display modes the host is able to present. */
  availableDisplayModes?: McpAppDisplayMode[];
}

/**
 * Host capability advertisement returned to the widget in `McpUiInitializeResult`.
 * Spec-compliant widgets gate `ui/open-link` / `tools/call` / `resources/read` on these,
 * so they must be declared, not left implicit.
 *
 * Local type — not aliased from ext-apps.
 */
export interface McpAppHostCapabilities {
  openLinks?: Record<string, never>;
  serverTools?: { listChanged?: boolean };
  serverResources?: { listChanged?: boolean };
  logging?: Record<string, never>;
  sandbox?: Record<string, unknown>;
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
  startTimestamp?: number;
  endTimestamp?: number;
  /**
   * The resolved MCP-app UI resource. When present, this tool call renders as a
   * sandboxed `<forge-ai-mcp-app>` widget instead of the standard tool-call UI. Its
   * presence is the single render discriminator.
   */
  uiResource?: McpAppUiResource;
  /** Companion structured payload for the widget, stripped from LLM context. */
  structuredContent?: unknown;
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
  isThinking?: boolean;
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

export interface ForgeAiChatbotConversationSelectEventData {
  id: string;
  title: string;
}

export interface ForgeAiChatbotConversationSearchEventData {
  query: string;
  setResults: (results: Thread[]) => void;
}

export interface ForgeAiChatbotConversationLoadMoreEventData {
  query: string;
  appendResults: (results: Thread[]) => void;
}

export interface ForgeAiChatbotConversationRenameEventData {
  id: string;
  oldTitle: string;
  newTitle: string;
  onSuccess: () => void;
  onError: (error?: string) => void;
}

export interface ForgeAiChatbotConversationDeleteEventData {
  id: string;
  thread: Thread;
  onSuccess: () => void;
  onError: (error?: string) => void;
}

export interface ContextItem {
  id: string;
  label: string;
  removable?: boolean;
  sublabel?: string;
  loading?: boolean;
  type?: 'file' | 'context';
}

export interface ForgeAiChatbotContextRemoveEventData {
  id: string;
  item: ContextItem;
}

export type { Thread };

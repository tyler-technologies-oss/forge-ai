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

/**
 * Function of a tool call whose parameter stays bivariant, so a `ToolDefinition<MyArgs>` can be stored in a
 * `ToolDefinition[]` alongside untyped tools without casts.
 */
export type ToolCallMapper<TReturn, TArgs = Record<string, unknown>, TResult = unknown> = {
  bivarianceHack(toolCall: ToolCall<TArgs, TResult>): TReturn;
}['bivarianceHack'];

/** A static value, or one derived from the tool call. */
export type ToolCallValue<TValue, TArgs = Record<string, unknown>, TResult = unknown> =
  TValue | ToolCallMapper<TValue, TArgs, TResult>;

/** Host-provided context passed to a tool renderer's `render` function. */
export interface ToolRenderContext {
  presentation: ToolPresentation;
  /** Controls captured when `render` runs; element renderers receive a reactive `canvas` property instead. */
  canvas: ToolCanvas;
}

/**
 * Bivariant like `ToolCallMapper`. `context` is optional so existing `render(toolCall)` implementations and
 * callers keep compiling; hosts always pass it.
 */
export type ToolRenderFunction<TArgs = Record<string, unknown>, TResult = unknown> = {
  bivarianceHack(toolCall: ToolCall<TArgs, TResult>, context?: ToolRenderContext): HTMLElement | DocumentFragment;
}['bivarianceHack'];

// `any` defaults keep `ToolRenderer` assignable on any `ToolDefinition<TArgs>`, as it was before it became generic.
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ToolRenderer<TArgs = any, TResult = any> {
  elementTag?: string;
  render?: ToolRenderFunction<TArgs, TResult>;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

/**
 * Where a tool renderer instance is displayed. Set by the host on the elements it creates.
 * - `inline`: in the message thread with no canvas available
 * - `inline-expandable`: in the message thread; a canvas is available and the renderer may request it
 * - `canvas`: inside the canvas panel
 */
export type ToolPresentation = 'inline' | 'inline-expandable' | 'canvas';

/** Artifact card icon: an `<svg>` element, or SVG markup reduced to static shape elements and attributes. */
export type ToolCanvasIcon = SVGElement | string;

/** Artifact card labels for each state; shown as the tooltip and read by assistive technology. */
export interface ToolCanvasActionLabel {
  /** Label while the artifact is not in the canvas, e.g. "Open report". */
  open: string;
  /** Label while the artifact is in the canvas, e.g. "Collapse report". */
  collapse: string;
}

/**
 * Opts a tool into the canvas panel of hosts that provide one (e.g. `forge-ai-chatbot-launcher`).
 * Hosts without a canvas ignore this and render the tool inline as usual. Every mapper receives the
 * `ToolCall`, so values can come from the agent's `args` or the handler's `result`.
 */
export interface ToolCanvasConfig<TArgs = Record<string, unknown>, TResult = unknown> {
  /**
   * When the canvas opens. `auto`: as soon as the tool call renders (launcher only; other hosts treat it as
   * `on-request`). `on-request` (default): only when the renderer or artifact card asks for it.
   */
  open?: 'auto' | 'on-request';
  /**
   * What the thread shows for the tool call. `renderer`: the inline renderer. `card`: an artifact card that
   * opens the canvas. `card-while-open`: the renderer, swapped for the card while this call is in the canvas.
   * Defaults to `card` when `open` is `auto`, otherwise `renderer`.
   */
  inline?: ToolCanvasInline;
  /** Renderer used inside the canvas. Defaults to the tool's `renderer`. */
  renderer?: ToolRenderer<TArgs, TResult>;
  /** Canvas and artifact card title. Defaults to `displayName`, then `name`. */
  title?: ToolCallValue<string, TArgs, TResult>;
  /** Artifact card subtitle, e.g. a row count. */
  subtitle?: ToolCallValue<string, TArgs, TResult>;
  /** Artifact card icon. Defaults to a generic artifact glyph. */
  icon?: ToolCallValue<ToolCanvasIcon, TArgs, TResult>;
  /** Artifact card action labels. Defaults to "Open in canvas" / "Collapse canvas". */
  actionLabel?: ToolCallValue<ToolCanvasActionLabel, TArgs, TResult>;
}

export type ToolCanvasInline = 'renderer' | 'card' | 'card-while-open';

/**
 * Canvas controls the host injects into a tool renderer as `canvas`. A new object is assigned whenever
 * `available` or `isOpen` changes, so declaring `canvas` as a reactive property re-renders the renderer.
 * Hosts without a canvas inject one with `available: false` whose methods return `false`.
 */
export interface ToolCanvas {
  /** Whether the host can show this tool call in a canvas. */
  readonly available: boolean;
  /** Whether this tool call is the one currently shown in the canvas. */
  readonly isOpen: boolean;
  /** Shows this tool call in the canvas. Returns false when unavailable or the host declined. */
  open(options?: { title?: string }): boolean;
  /** Closes the canvas if it is showing this tool call. Returns false when it was not or the host declined. */
  close(): boolean;
  /** Closes the canvas when this tool call is open, otherwise opens it. */
  toggle(): boolean;
}

/**
 * Interface that tool renderer components should implement for type-safe tool call handling.
 * @template TArgs - Type of the tool call arguments
 * @template TResult - Type returned by the tool's handler
 */
export interface IToolRenderer<TArgs = Record<string, unknown>, TResult = unknown> {
  toolCall: ToolCall<TArgs, TResult>;
  /** Assigned by the host to tell the renderer where it is displayed. */
  presentation?: ToolPresentation;
  /** Assigned by the host to let the renderer open and close the canvas. */
  canvas?: ToolCanvas;
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
 * @template TArgs - Type of the tool call arguments, typed through the handler, renderer, and canvas mappers
 * @template TResult - Type returned by `handler`, available as `toolCall.result`
 */
export interface ToolDefinition<TArgs = Record<string, unknown>, TResult = string | Record<string, unknown>> {
  name: string;
  displayName?: string;
  description?: string;
  parameters?: {
    type: 'object';
    properties?: Record<string, unknown>;
    required?: string[];
  };
  /**
   * Optional renderer for displaying tool call results within the chat UI. Deliberately untyped (`any`
   * arguments) so renderers written before `ToolDefinition` had a `TResult`, including `render` callbacks
   * annotated with plain `ToolCall`, keep compiling on any `ToolDefinition<TArgs>`.
   */
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
  /** Canvas behavior for hosts that provide a canvas panel. Requires `renderer`. */
  canvas?: ToolCanvasConfig<TArgs, TResult>;
  /** Called when tool call starts (before args stream). */
  onStart?(context: ToolStartContext): void;
  /** Called during streaming with partial args. */
  onDelta?(context: ToolDeltaContext<TArgs>): void;
  /** Called when args are complete (before handler execution). */
  onEnd?(context: ToolEndContext<TArgs>): void;
  /**
   * Optional handler function invoked when tool is called.
   * Strings and objects are used directly as the tool result; `void` yields a generic success message.
   */
  handler?(context: HandlerContext<TArgs>): Promise<TResult | void> | TResult | void;
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
 * Iframe permission policy for an MCP-app resource, mirroring the spec's
 * `_meta.ui.permissions` shape (2026-01-26): a key being present (with an empty object
 * value) means the permission is requested. The sandbox maps requested keys onto the
 * iframe `allow` attribute.
 *
 * Local type — not aliased from ext-apps.
 */
export interface McpAppResourcePermissions {
  camera?: Record<string, never>;
  microphone?: Record<string, never>;
  geolocation?: Record<string, never>;
  clipboardWrite?: Record<string, never>;
}

/**
 * The resolved UI resource stamped onto a {@link ToolCall} once a `mcp-ui-resource`
 * event arrives. Presence of this on a tool call is the single render discriminator for
 * mounting `<forge-ai-mcp-app>`.
 *
 * Returned by `AgentAdapter.resolveMcpAppResource`, which fills `csp`/`permissions` from
 * the template response's `_meta.ui` (pass `{}` when the template declares none). The
 * widget refuses to render when either is missing.
 *
 * Local type — not aliased from ext-apps.
 */
export interface McpAppUiResource {
  /** The complete standalone app HTML document, resolved server-side. */
  html: string;
  /** CSP domain allow-lists to enforce in the sandbox. Empty → restrictive default. */
  csp: McpAppResourceCsp;
  /** Iframe permission policy for the sandbox inner frame. */
  permissions: McpAppResourcePermissions;
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
 * The raw MCP `CallToolResult` (minus `structuredContent`) for an MCP-app tool call. The
 * View's `ui/notifications/tool-result` is built from this plus
 * {@link ToolCall.structuredContent} — never from the model-facing `result`.
 */
export interface McpToolResult {
  content: unknown[];
  isError?: boolean;
  _meta?: Record<string, unknown>;
}

/**
 * Size of the container holding a widget, in CSS pixels (spec `containerDimensions`): a
 * fixed `height` or a `maxHeight` bound, and a fixed `width` or a `maxWidth` bound.
 */
export type McpAppContainerDimensions = ({ height: number } | { maxHeight?: number }) &
  ({ width: number } | { maxWidth?: number });

/** The tool call that instantiated a widget (spec `toolInfo`). */
export interface McpAppToolInfo {
  id?: string | number;
  tool: {
    name: string;
    inputSchema: { type: 'object'; [key: string]: unknown };
    [key: string]: unknown;
  };
}

/**
 * Theming sent to MCP-app widgets (spec `hostContext.styles`): spec CSS variables (e.g.
 * `--color-background-primary`) resolved from Forge tokens. Font loading (`css.fonts`) is not sent.
 */
export interface McpAppHostStyles {
  variables?: Record<string, string>;
}

/**
 * Host context projected into an MCP-app widget.
 *
 * Local type — not aliased from ext-apps.
 */
export interface McpAppHostContext {
  theme: 'light' | 'dark';
  /** Spec CSS variables resolved from the widget's Forge tokens. */
  styles?: McpAppHostStyles;
  /** The tool call that instantiated the widget. */
  toolInfo?: McpAppToolInfo;
  /** Size of the container holding the widget. */
  containerDimensions?: McpAppContainerDimensions;
  /** The widget's current display mode. */
  displayMode?: McpAppDisplayMode;
  /** Display modes the host is able to present. */
  availableDisplayModes?: McpAppDisplayMode[];
  /** BCP 47 language tag. */
  locale?: string;
  /** IANA time zone. */
  timeZone?: string;
  userAgent?: string;
  platform?: 'web' | 'desktop' | 'mobile';
  deviceCapabilities?: { touch?: boolean; hover?: boolean };
  safeAreaInsets?: { top: number; right: number; bottom: number; left: number };
}

/** Content-block types a host accepts for `ui/message` / `ui/update-model-context`. */
export interface McpAppContentModalities {
  text?: Record<string, never>;
  image?: Record<string, never>;
  audio?: Record<string, never>;
  resource?: Record<string, never>;
  resourceLink?: Record<string, never>;
  structuredContent?: Record<string, never>;
}

/** The sandbox policy the host enforces for a widget, echoed in its host capabilities. */
export interface McpAppSandboxCapabilities {
  csp?: McpAppResourceCsp;
  permissions?: McpAppResourcePermissions;
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
  message?: McpAppContentModalities;
  updateModelContext?: McpAppContentModalities;
  sandbox?: McpAppSandboxCapabilities;
}

/**
 * Type-erased tool definition for collections that mix tools with different argument types, e.g. the
 * `tools` passed to an adapter. Any `ToolDefinition<TArgs, TResult>` is assignable to it.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyToolDefinition = ToolDefinition<object, any>;

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system' | 'tool';
  content: string;
  timestamp: number;
  status: 'pending' | 'streaming' | 'complete' | 'error';
  toolCalls?: ToolCall[];
  toolCallId?: string;
  feedback?: ResponseFeedback;
  children?: ResponseItem[];
  clientOnly?: boolean;
  kind?: ClientMessageKind;
  header?: string;
  actions?: ClientMessageAction[];
}

/**
 * Visual treatment for a client-only message. `text` matches the plain,
 * italic system-message style; the others render as a Forge inline-message
 * banner with a matching icon.
 */
export type ClientMessageKind = 'text' | 'info' | 'warning' | 'error' | 'success';

export interface ClientMessageAction {
  id: string;
  label: string;
  onClick: () => void;
}

/**
 * Input to {@link AiChatbotBase.addClientMessage}. Pass the same `id` on a
 * later call to upsert (replace) a previously added client message.
 */
export interface ClientMessageInput {
  id?: string;
  content: string;
  kind?: ClientMessageKind;
  header?: string;
  actions?: ClientMessageAction[];
}

export interface ToolCall<TArgs = Record<string, unknown>, TResult = unknown> {
  id: string;
  messageId: string;
  name: string;
  args: TArgs;
  argsBuffer?: string;
  /** Handler return value once the call completes; an `{ error }` object if the handler threw. */
  result?: TResult;
  status: ToolCallStatus;
  type: ToolType;
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
  /** `true` when `structuredContent` was dropped by the backend (size caps). */
  structuredContentOmitted?: boolean;
  /** Raw MCP result for an MCP-app tool call; the source of the View's `tool-result`. */
  mcpResult?: McpToolResult;
  /** `true` when `mcpResult` was dropped by the backend (size caps). */
  mcpResultOmitted?: boolean;
}

/**
 * Tool call lifecycle. `cancelled` means the call ended without a result (run aborted,
 * stream ended/errored, or the adapter reported `cancelled: true`).
 */
export type ToolCallStatus = 'pending' | 'parsing' | 'executing' | 'complete' | 'error' | 'cancelled';

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

export interface ForgeAiChatbotThreadSelectEventData {
  id: string;
  title: string;
}

export interface ForgeAiChatbotThreadSearchEventData {
  query: string;
  setResults: (results: Thread[]) => void;
}

export interface ForgeAiChatbotThreadLoadMoreEventData {
  query: string;
  appendResults: (results: Thread[]) => void;
}

export interface ForgeAiChatbotThreadRenameEventData {
  id: string;
  oldTitle: string;
  newTitle: string;
  onSuccess: () => void;
  onError: (error?: string) => void;
}

export interface ForgeAiChatbotThreadDeleteEventData {
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

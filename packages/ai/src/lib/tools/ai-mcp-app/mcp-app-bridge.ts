import type {
  McpAppDisplayMode,
  McpAppHostContext,
  McpAppResourcePermissions,
  McpToolCallParams,
  McpResourceReadParams
} from '../../ai-chatbot';

/**
 * The common host-side bridge surface both implementations satisfy — impl A
 * (`app-bridge.ts`, wraps `@modelcontextprotocol/ext-apps`) and impl B
 * (`app-bridge2.ts`, hand-rolled, zero-dep). The element + controller depend on this
 * interface ONLY, so either impl is interchangeable behind a config/build switch.
 *
 * Bridge-agnostic on purpose: no ext-apps types leak through this surface.
 */

/** Parameters a widget passes to `ui/open-link`. */
export interface McpAppOpenLinkParams {
  url: string;
}

/** Parameters a widget passes to `ui/message`. */
export interface McpAppMessageParams {
  content: string;
  role?: 'user' | 'assistant';
}

/** Parameters a widget passes to `ui/update-model-context`. */
export interface McpAppUpdateModelContextParams {
  content: unknown;
}

/** Parameters a widget passes to `ui/request-display-mode`. */
export interface McpAppRequestDisplayModeParams {
  mode: McpAppDisplayMode;
}

/** Result the host returns for a display-mode request — echoes the mode actually set. */
export interface McpAppRequestDisplayModeResult {
  mode: McpAppDisplayMode;
}

/** Payload for a widget `notifications/message` (logging). */
export interface McpAppLoggingMessage {
  level: string;
  data?: unknown;
  logger?: string;
}

/** Payload for a widget `size-changed` notification. */
export interface McpAppSizeChange {
  width?: number;
  height: number;
}

/**
 * Config for the `ui/initialize` handshake and injecting the resource into the sandbox.
 *
 * The controller owns the outer sandbox iframe DOM (setting `src` with the `?csp=` query
 * param + the outer `allow` attribute); it hands the bridge the loaded iframe's
 * `contentWindow` so the bridge can scope its transport to that window and drive the
 * `sandbox-proxy-ready` → `sandbox-resource-ready` → `initialized` handshake. All fields
 * are bridge-agnostic (no ext-apps types leak through this surface).
 */
export interface McpAppBridgeConnectConfig {
  /** The loaded outer sandbox proxy iframe's window; the bridge scopes its transport here. */
  sandboxWindow: Window;
  /** The complete standalone app HTML to inject into the inner sandboxed frame. */
  html: string;
  /** Initial host context sent to the widget on `ui/initialize`. */
  hostContext: McpAppHostContext;
  /** Iframe permission policy forwarded to the inner frame via `sandbox-resource-ready`. */
  permissions?: McpAppResourcePermissions;
  /** Optional override for the inner iframe's `sandbox` attribute. */
  sandbox?: string;
}

export interface McpAppBridge {
  /**
   * Connect to the loaded sandbox proxy: perform the `ui/initialize` handshake and send
   * the resource in via `sandbox-resource-ready`. Resolves once the widget has sent
   * `initialized`. The host MUST NOT send tool input before this resolves.
   */
  connect(config: McpAppBridgeConnectConfig): Promise<void>;

  /** Streaming partial tool arguments (each args delta). */
  sendToolInputPartial(args: Record<string, unknown>): void;

  /** Final, complete tool arguments (args complete). */
  sendToolInput(args: Record<string, unknown>): void;

  /** The final tool result (+ optional companion structured content). */
  sendToolResult(result: unknown, structuredContent?: unknown): void;

  /** Notify the widget its tool call was cancelled. */
  sendToolCancelled(reason?: string): void;

  /** Push an updated host context (e.g. theme or container-size change). */
  sendHostContextChange(hostContext: McpAppHostContext): void;

  /**
   * Request the widget tear down. Returns a promise the caller awaits before removing
   * the iframe — the spec SHOULD wait for the widget's ack to prevent data loss.
   */
  sendTeardown(): Promise<void>;

  // --- View→host handler slots (assigned by the controller) ---

  /** Widget forwarded a `tools/call` to the server. */
  oncalltool?: (params: McpToolCallParams) => Promise<unknown>;
  /** Widget forwarded a `resources/read` to the server. */
  onreadresource?: (params: McpResourceReadParams) => Promise<unknown>;
  /** Widget requested opening an external link. */
  onopenlink?: (params: McpAppOpenLinkParams) => void;
  /** Widget sent a chat message (`ui/message`). Resolves once accepted/queued. */
  onmessage?: (params: McpAppMessageParams) => Promise<void>;
  /** Widget emitted a logging message (`notifications/message`). */
  onloggingmessage?: (params: McpAppLoggingMessage) => void;
  /** Widget reported a size change. */
  onsizechange?: (params: McpAppSizeChange) => void;
  /** Widget requested a display-mode change; the host echoes the resulting mode. */
  onrequestdisplaymode?: (params: McpAppRequestDisplayModeParams) => Promise<McpAppRequestDisplayModeResult>;
  /** Widget requested a silent model-context update. */
  onupdatemodelcontext?: (params: McpAppUpdateModelContextParams) => Promise<void>;
}

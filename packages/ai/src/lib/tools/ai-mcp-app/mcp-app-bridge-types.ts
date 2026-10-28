import type {
  McpAppDisplayMode,
  McpAppHostCapabilities,
  McpAppHostContext,
  McpAppResourcePermissions,
  McpModelContextUpdateParams,
  McpResourceReadParams,
  McpToolCallParams,
  McpToolResult
} from '../../ai-chatbot';

/**
 * The host-side bridge surface `mcp-app-bridge.ts` (`McpAppBridge`) implements. The
 * element + controller depend on this interface only.
 */

/**
 * A View's `tools/call` as received by the bridge. The bridge has no widget identity;
 * the element adds its `toolCallId` before forwarding to the host.
 */
export type McpAppToolCallRequest = Omit<McpToolCallParams, 'toolCallId'>;

/** A View's `resources/read` as received by the bridge (no widget identity). */
export type McpAppResourceReadRequest = Omit<McpResourceReadParams, 'toolCallId'>;

/** The `CallToolResult` delivered to the View via `ui/notifications/tool-result`. */
export interface McpAppViewToolResult extends McpToolResult {
  structuredContent?: unknown;
}

/** Parameters a widget passes to `ui/open-link`. */
export interface McpAppOpenLinkParams {
  url: string;
}

/**
 * Result of a View request the host may decline (`ui/open-link`, `ui/message`): `{}` on
 * success, `{ isError: true }` when the host refused or could not deliver it.
 */
export interface McpAppRequestResult {
  isError?: boolean;
}

/** Parameters a widget passes to `ui/message`. `role` is always `user` (never trusted from the View). */
export interface McpAppMessageParams {
  /** The View's MCP content blocks, unvalidated. */
  content: unknown[];
  role: 'user';
}

/** Parameters a widget passes to `ui/update-model-context` (no widget identity). */
export type McpAppUpdateModelContextParams = Omit<McpModelContextUpdateParams, 'toolCallId'>;

/** Parameters a widget passes to `ui/request-display-mode`. */
export interface McpAppRequestDisplayModeParams {
  mode: McpAppDisplayMode;
  /** Modes the View declared in `ui/initialize` (`appCapabilities.availableDisplayModes`). */
  appDisplayModes: McpAppDisplayMode[];
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
  /** Origin of the sandbox proxy; only messages from it are accepted and all posts target it. */
  sandboxOrigin: string;
  /** The complete standalone app HTML to inject into the inner sandboxed frame. */
  html: string;
  /** Initial host context sent to the widget on `ui/initialize`. */
  hostContext: McpAppHostContext;
  /** Iframe permission policy forwarded to the inner frame via `sandbox-resource-ready`. */
  permissions?: McpAppResourcePermissions;
  /** Optional override for the inner iframe's `sandbox` attribute. */
  sandbox?: string;
  /** Advertised to the View in the `ui/initialize` result. */
  hostCapabilities: McpAppHostCapabilities;
}

export interface IMcpAppBridge {
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

  /** The final tool result, built from the raw MCP result + structured content. */
  sendToolResult(result: McpAppViewToolResult): void;

  /** Notify the widget its tool call was cancelled. */
  sendToolCancelled(reason?: string): void;

  /**
   * Push an updated host context (e.g. theme or container-size change). Before the View
   * is initialized the change is held and returned from `ui/initialize` / flushed on
   * `initialized` instead of being sent.
   */
  sendHostContextChange(hostContext: McpAppHostContext): void;

  /**
   * Request the widget tear down. Returns a promise the caller awaits before removing
   * the iframe — the spec SHOULD wait for the widget's ack to prevent data loss.
   */
  sendTeardown(): Promise<void>;

  // --- View→host handler slots (assigned by the controller) ---

  /** Widget forwarded a `tools/call` to the server. Rejections become JSON-RPC errors. */
  oncalltool?: (params: McpAppToolCallRequest) => Promise<unknown>;
  /** Widget forwarded a `resources/read` to the server. Rejections become JSON-RPC errors. */
  onreadresource?: (params: McpAppResourceReadRequest) => Promise<unknown>;
  /** Widget requested opening an external link. Absent → `{ isError: true }`. */
  onopenlink?: (params: McpAppOpenLinkParams) => Promise<McpAppRequestResult>;
  /** Widget sent a chat message (`ui/message`). Absent → `{ isError: true }`. */
  onmessage?: (params: McpAppMessageParams) => Promise<McpAppRequestResult>;
  /** Widget emitted a logging message (`notifications/message`). */
  onloggingmessage?: (params: McpAppLoggingMessage) => void;
  /** Widget reported a size change. */
  onsizechange?: (params: McpAppSizeChange) => void;
  /** Widget requested a display-mode change; the host echoes the resulting mode. */
  onrequestdisplaymode?: (params: McpAppRequestDisplayModeParams) => Promise<McpAppRequestDisplayModeResult>;
  /** Widget requested a silent model-context update. */
  onupdatemodelcontext?: (params: McpAppUpdateModelContextParams) => Promise<void>;
  /** Widget asked the host to tear it down (`ui/notifications/request-teardown`). */
  onrequestteardown?: () => void;
}

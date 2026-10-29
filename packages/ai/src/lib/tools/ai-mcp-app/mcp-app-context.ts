import { createContext } from '@lit/context';
import type {
  McpAppHostCapabilities,
  McpAppHostContext,
  McpModelContextUpdateParams,
  McpResourceReadParams,
  McpToolCallParams
} from '../../ai-chatbot';
import type { McpAppRequestResult } from './mcp-app-bridge-types.js';

/** A mounted widget, registered so the host can tear it down before removing it. */
export interface McpAppViewRegistration {
  toolCallId: string;
  teardown(): void;
}

/**
 * Host surface an `<forge-ai-mcp-app>` consumes to service widget→host calls and to read
 * the current host context. Provided by the chatbot base component (Step 4) and updated
 * in place; consumers use `@consume({ subscribe: true })` and re-render when it changes.
 *
 * The library never owns an MCP `Client` — `callTool`/`readResource`/`updateModelContext`
 * delegate to the adapter's `callMcpTool`/`readMcpResource`/`updateMcpModelContext`.
 * Every call carries the widget's `toolCallId`.
 */
export interface McpAppHost {
  callTool(params: McpToolCallParams): Promise<unknown>;
  readResource(params: McpResourceReadParams): Promise<unknown>;
  updateModelContext(params: McpModelContextUpdateParams): Promise<void>;
  /**
   * Place a widget's `ui/message` text in the prompt for the user to send. Resolves
   * `{ isError: true }` when there is no text or no prompt.
   */
  draftMessage(params: { toolCallId: string; content: unknown[] }): Promise<McpAppRequestResult>;
  /** Tear down one widget through the host's normal per-widget teardown path. */
  teardownView(params: { toolCallId: string }): void;
  /** Register a mounted widget; returns the unregister callback. */
  registerView(view: McpAppViewRegistration): () => void;
  hostContext: McpAppHostContext;
  /** Cross-origin sandbox proxy URL. Absent → the element renders an error artifact. */
  sandboxUrl?: string;
  /**
   * Advertised to the widget in `McpUiInitializeResult`, derived from what the host and
   * adapter implement. The element adds `sandbox` (the enforced csp/permissions) per widget.
   */
  hostCapabilities: McpAppHostCapabilities;
}

export const mcpAppHostContext = createContext<McpAppHost>(Symbol('forge-mcp-app-host'));

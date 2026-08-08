import { createContext } from '@lit/context';
import type { McpAppHostContext, McpResourceReadParams, McpToolCallParams } from '../../ai-chatbot';

/**
 * Host surface an `<forge-ai-mcp-app>` consumes to service widget→host calls and to read
 * the current host context. Provided by the chatbot base component (Step 4) and updated
 * in place; consumers use `@consume({ subscribe: true })` and re-render when it changes.
 *
 * The library never owns an MCP `Client` — `callTool`/`readResource` delegate to the
 * adapter's `callMcpTool`/`readMcpResource`.
 */
export interface McpAppHost {
  callTool(params: McpToolCallParams): Promise<unknown>;
  readResource(params: McpResourceReadParams): Promise<unknown>;
  hostContext: McpAppHostContext;
  /** Cross-origin sandbox proxy URL. Absent → the element renders an error artifact. */
  sandboxUrl?: string;
}

export const mcpAppHostContext = createContext<McpAppHost>(Symbol('forge-mcp-app-host'));

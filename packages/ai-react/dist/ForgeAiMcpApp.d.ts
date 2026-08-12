import React from "react";
import { ForgeAiMcpApp as ForgeAiMcpAppElement } from "@tylertech/forge-ai/tools/ai-mcp-app";

export type { ForgeAiMcpAppElement };

export interface ForgeAiMcpAppProps extends Pick<
  React.AllHTMLAttributes<HTMLElement>,
  | "children"
  | "dir"
  | "hidden"
  | "id"
  | "lang"
  | "slot"
  | "style"
  | "title"
  | "translate"
  | "onClick"
  | "onFocus"
  | "onBlur"
> {
  /** A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access specific elements via the class selectors or functions like the method `Document.getElementsByClassName()`. */
  className?: string;

  /** Contains a space-separated list of the part names of the element that should be exposed on the host element. */
  exportparts?: string;

  /** Used for labels to link them with their inputs (using input id). */
  htmlFor?: string;

  /** Used to help React identify which items have changed, are added, or are removed within a list. */
  key?: number | string;

  /** Contains a space-separated list of the part names of the element. Part names allows CSS to select and style specific elements in a shadow tree via the ::part pseudo-element. */
  part?: string;

  /** A mutable ref object whose `.current` property is initialized to the passed argument (`initialValue`). The returned object will persist for the full lifetime of the component. */
  ref?: any;

  /** Allows developers to make HTML elements focusable, allow or prevent them from being sequentially focusable (usually with the `Tab` key, hence the name) and determine their relative ordering for sequential focus navigation. */
  tabIndex?: number;

  /** Fired when the app requests to open a link */
  onForgeAiMcpAppOpenLink?: (
    event: CustomEvent<CustomEvent<{ url: string }>>,
  ) => void;

  /** Fired when the app sends a message */
  onForgeAiMcpAppMessage?: (
    event: CustomEvent<CustomEvent<{ content: unknown; role: string }>>,
  ) => void;

  /** Fired when the app sends a logging message */
  onForgeAiMcpAppLoggingMessage?: (
    event: CustomEvent<CustomEvent<unknown>>,
  ) => void;

  /** Fired when the app's display mode changes */
  onForgeAiMcpAppRequestDisplayMode?: (
    event: CustomEvent<CustomEvent<{ mode: McpAppDisplayMode }>>,
  ) => void;

  /** Fired when the app updates model context */
  onForgeAiMcpAppUpdateModelContext?: (
    event: CustomEvent<CustomEvent<{ content: unknown }>>,
  ) => void;
}

/**
 * Renders an MCP-app UI resource stamped onto a ToolCall as a sandboxed,
 * cross-origin widget. The iframe + bridge are mounted once and survive every `toolCall`
 * delta (Lit reuses this node at its keyed position), so args stream live without
 * remounting.
 *
 * The cross-origin sandbox is mandatory: when no `sandboxUrl` is available the element
 * renders an error artifact rather than an insecure same-origin iframe.
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-ai-mcp-app-open-link** - Fired when the app requests to open a link
 * - **forge-ai-mcp-app-message** - Fired when the app sends a message
 * - **forge-ai-mcp-app-logging-message** - Fired when the app sends a logging message
 * - **forge-ai-mcp-app-request-display-mode** - Fired when the app's display mode changes
 * - **forge-ai-mcp-app-update-model-context** - Fired when the app updates model context
 */
export const ForgeAiMcpApp: React.ForwardRefExoticComponent<ForgeAiMcpAppProps>;

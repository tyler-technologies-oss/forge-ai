import React from "react";
import {
  ForgeAiChatHeader as ForgeAiChatHeaderElement,
  CustomEvent,
} from "@tylertech/forge-ai/ai-chat-header";

export type { ForgeAiChatHeaderElement, CustomEvent };

export interface ForgeAiChatHeaderProps extends Pick<
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
  /** Controls whether the expand button is visible */
  showExpandButton?: boolean;

  /** Controls whether the minimize button is visible */
  showMinimizeButton?: boolean;

  /** Indicates the current expanded state for displaying the appropriate expand/collapse icon */
  expanded?: boolean;

  /** Disables the agent selector (e.g., during streaming) */
  disableAgentSelector?: boolean;

  /** Controls which minimize icon to display */
  minimizeIcon?: ForgeAiChatHeaderElement["minimizeIcon"];

  /** Controls state of the options dropdown menu */
  options?: ForgeAiChatHeaderElement["options"];

  /** Controls state of the export option */
  exportOption?: ForgeAiChatHeaderElement["exportOption"];

  /** Controls state of the clear chat option */
  clearOption?: ForgeAiChatHeaderElement["clearOption"];

  /** Controls the heading level for the title content (default: 2) */
  headingLevel?: ForgeAiChatHeaderElement["headingLevel"];

  /** The title text to display in the header (default: 'AI Assistant') */
  titleText?: ForgeAiChatHeaderElement["titleText"];

  /** ID of the currently selected agent */
  selectedAgentId?: ForgeAiChatHeaderElement["selectedAgentId"];

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

  /** Agent information to display in the info dialog */
  agentInfo?: ForgeAiChatHeaderElement["agentInfo"];

  /** Array of available agents for the agent selector */
  agents?: ForgeAiChatHeaderElement["agents"];

  /** Fired when the export option is selected */
  onForgeAiChatHeaderExport?: (event: CustomEvent) => void;

  /** Fired when the clear chat option is selected */
  onForgeAiChatHeaderClear?: (event: CustomEvent) => void;

  /** undefined */
  onForgeAiChatHeaderAgentChange?: (event: CustomEvent) => void;

  /** Fired when the expand button is clicked */
  onForgeAiChatHeaderExpand?: (event: CustomEvent) => void;

  /** Fired when the minimize button is clicked */
  onForgeAiChatHeaderMinimize?: (event: CustomEvent) => void;
}

/**
 * AI chat header component with accessible tooltips
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-ai-chat-header-export** - Fired when the export option is selected
 * - **forge-ai-chat-header-clear** - Fired when the clear chat option is selected
 * - **forge-ai-chat-header-agent-change**
 * - **forge-ai-chat-header-expand** - Fired when the expand button is clicked
 * - **forge-ai-chat-header-minimize** - Fired when the minimize button is clicked
 *
 * ### **Methods:**
 *  - **showAgentInfo(): _void_** - Shows the agent info modal
 *
 * ### **Slots:**
 *  - **icon** - Slot for custom icon (default: forge-ai-icon)
 */
export const ForgeAiChatHeader: React.ForwardRefExoticComponent<ForgeAiChatHeaderProps>;

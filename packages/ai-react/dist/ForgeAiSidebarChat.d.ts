import React from "react";
import { ForgeAiSidebarChat as ForgeAiSidebarChatElement } from "@tylertech/forge-ai/ai-sidebar-chat";

export type { ForgeAiSidebarChatElement };

export interface ForgeAiSidebarChatProps
  extends Pick<
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
  /** Indicates whether the sidebar chat is open. */
  open?: boolean;

  /** Controls whether the chat is displayed in an expanded modal state.
When true, the chat content will be shown in a fullscreen modal.
When false, the chat will be displayed in the sidebar. */
  expanded?: boolean;

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

  /** Fired when the sidebar chat is opened */
  onForgeAiSidebarChatOpen?: (event: CustomEvent) => void;

  /** Fired when the sidebar chat is closed */
  onForgeAiSidebarChatClose?: (event: CustomEvent) => void;

  /** Fired when the sidebar chat is expanded to modal */
  onForgeAiSidebarChatExpand?: (event: CustomEvent) => void;

  /** Fired when the sidebar chat is collapsed from modal */
  onForgeAiSidebarChatCollapse?: (event: CustomEvent) => void;
}

/**
 *
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-ai-sidebar-chat-open** - Fired when the sidebar chat is opened
 * - **forge-ai-sidebar-chat-close** - Fired when the sidebar chat is closed
 * - **forge-ai-sidebar-chat-expand** - Fired when the sidebar chat is expanded to modal
 * - **forge-ai-sidebar-chat-collapse** - Fired when the sidebar chat is collapsed from modal
 *
 * ### **Methods:**
 *  - **show(): _void_** - Opens the sidebar chat.
 * - **close(): _void_** - Closes the sidebar chat.
 * - **toggle(): _void_** - Toggles the sidebar chat open state.
 * - **expand(): _void_** - Expands the chat to fullscreen modal.
 * - **collapse(): _void_** - Collapses the chat from fullscreen modal back to sidebar.
 *
 * ### **Slots:**
 *  - _default_ - Default slot for messages (ai-user-message, ai-response-message components)
 * - **suggestions** - Slot for AI suggestions component
 * - **prompt** - Slot for custom AI prompt component. If not provided, a default forge-ai-prompt will be used.
 */
export const ForgeAiSidebarChat: React.ForwardRefExoticComponent<ForgeAiSidebarChatProps>;

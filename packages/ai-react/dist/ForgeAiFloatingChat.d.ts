import React from "react";
import { ForgeAiFloatingChat as ForgeAiFloatingChatElement } from "@tylertech/forge-ai/ai-floating-chat";

export type { ForgeAiFloatingChatElement };

export interface ForgeAiFloatingChatProps
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
  /** Indicates whether the chat is open. */
  open?: boolean;

  /** Controls the chat's positioning and size behavior.
When true, the chat will have an expanded width and be centered on the screen.
When false, the chat will be positioned at the bottom-right corner with a fixed width. */
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

  /** Fired when the chat is opened */
  onForgeAiFloatingChatOpen?: (event: CustomEvent) => void;

  /** Fired when the chat is closed */
  onForgeAiFloatingChatClose?: (event: CustomEvent) => void;

  /** Fired when the chat is expanded */
  onForgeAiFloatingChatExpand?: (event: CustomEvent) => void;

  /** Fired when the chat is collapsed */
  onForgeAiFloatingChatCollapse?: (event: CustomEvent) => void;
}

/**
 *
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-ai-floating-chat-open** - Fired when the chat is opened
 * - **forge-ai-floating-chat-close** - Fired when the chat is closed
 * - **forge-ai-floating-chat-expand** - Fired when the chat is expanded
 * - **forge-ai-floating-chat-collapse** - Fired when the chat is collapsed
 *
 * ### **Methods:**
 *  - **show(): _void_** - Opens the chat.
 * - **close(): _void_** - Closes the chat.
 * - **toggle(): _void_** - Toggles the chat open state.
 * - **expand(): _void_** - Expands the chat to full width.
 * - **collapse(): _void_** - Collapses the chat to normal width.
 *
 * ### **Slots:**
 *  - _default_ - Default slot for messages (ai-user-message, ai-response-message components)
 * - **suggestions** - Slot for AI suggestions component
 * - **prompt** - Slot for custom AI prompt component. If not provided, a default forge-ai-prompt will be used.
 */
export const ForgeAiFloatingChat: React.ForwardRefExoticComponent<ForgeAiFloatingChatProps>;

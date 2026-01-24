import React from "react";
import { ForgeAiMessageThread as ForgeAiMessageThreadElement } from "@tylertech/forge-ai/ai-message-thread";

export type { ForgeAiMessageThreadElement };

export interface ForgeAiMessageThreadProps extends Pick<
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
  /** undefined */
  enableReactions?: boolean;

  /** undefined */
  showThinking?: boolean;

  /** undefined */
  debugMode?: boolean;

  /** undefined */
  autoScroll?: ForgeAiMessageThreadElement["autoScroll"];

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

  /** Fired when user clicks copy on a message */
  onForgeAiMessageThreadCopy?: (
    event: CustomEvent<CustomEvent<ForgeAiMessageThreadCopyEventData>>,
  ) => void;

  /** Fired when user clicks refresh on a message */
  onForgeAiMessageThreadRefresh?: (
    event: CustomEvent<CustomEvent<ForgeAiMessageThreadRefreshEventData>>,
  ) => void;

  /** Fired when user gives thumbs up */
  onForgeAiMessageThreadThumbsUp?: (
    event: CustomEvent<CustomEvent<ForgeAiMessageThreadThumbsEventData>>,
  ) => void;

  /** Fired when user gives thumbs down */
  onForgeAiMessageThreadThumbsDown?: (
    event: CustomEvent<CustomEvent<ForgeAiMessageThreadThumbsEventData>>,
  ) => void;
}

/**
 * A primitive component for rendering a thread of chat messages, including user, assistant, system, and tool call messages.
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-ai-message-thread-copy** - Fired when user clicks copy on a message
 * - **forge-ai-message-thread-refresh** - Fired when user clicks refresh on a message
 * - **forge-ai-message-thread-thumbs-up** - Fired when user gives thumbs up
 * - **forge-ai-message-thread-thumbs-down** - Fired when user gives thumbs down
 *
 * ### **Slots:**
 *  - **empty-state-heading** - Slot for custom empty state heading content
 * - **empty-state-actions** - Slot for custom empty state actions (e.g., suggestions)
 */
export const ForgeAiMessageThread: React.ForwardRefExoticComponent<ForgeAiMessageThreadProps>;

import React from "react";
import { ForgeAiConversationsPanel as ForgeAiConversationsPanelElement } from "@tylertech/forge-ai/ai-conversations-panel";

export type { ForgeAiConversationsPanelElement };

export interface ForgeAiConversationsPanelProps extends Pick<
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
  recentThreads?: ForgeAiConversationsPanelElement["recentThreads"];

  /** undefined */
  selectedThreadId?: ForgeAiConversationsPanelElement["selectedThreadId"];

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

  /** Fired when a conversation thread is selected. */
  onForgeAiConversationsPanelSelect?: (
    event: CustomEvent<CustomEvent<ForgeAiConversationsPanelSelectEventData>>,
  ) => void;

  /** Fired when the new chat list item is clicked. */
  onForgeAiConversationsPanelNewChat?: (
    event: CustomEvent<CustomEvent<void>>,
  ) => void;

  /** Fired when the close button is clicked. */
  onForgeAiConversationsPanelClose?: (
    event: CustomEvent<CustomEvent<void>>,
  ) => void;

  /** Fired when search query changes (debounced). Cancelable - if prevented, shows loading and waits for setResults callback. */
  onForgeAiConversationsPanelSearch?: (
    event: CustomEvent<CustomEvent<ForgeAiConversationsPanelSearchEventData>>,
  ) => void;

  /** Fired when scrolling near bottom in search view. Always shows loading - call appendResults([]) to signal end. */
  onForgeAiConversationsPanelLoadMore?: (
    event: CustomEvent<CustomEvent<ForgeAiConversationsPanelLoadMoreEventData>>,
  ) => void;
}

/**
 *
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-ai-conversations-panel-select** - Fired when a conversation thread is selected.
 * - **forge-ai-conversations-panel-new-chat** - Fired when the new chat list item is clicked.
 * - **forge-ai-conversations-panel-close** - Fired when the close button is clicked.
 * - **forge-ai-conversations-panel-search** - Fired when search query changes (debounced). Cancelable - if prevented, shows loading and waits for setResults callback.
 * - **forge-ai-conversations-panel-load-more** - Fired when scrolling near bottom in search view. Always shows loading - call appendResults([]) to signal end.
 */
export const ForgeAiConversationsPanel: React.ForwardRefExoticComponent<ForgeAiConversationsPanelProps>;

import React from "react";
import {
  ForgeAiThreadsSearch as ForgeAiThreadsSearchElement,
  CustomEvent,
} from "@tylertech/forge-ai/ai-threads-search";

export type { ForgeAiThreadsSearchElement, CustomEvent };

export interface ForgeAiThreadsSearchProps extends Pick<
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
  showThreadRename?: boolean;

  /** undefined */
  showThreadDelete?: boolean;

  /** undefined */
  threads?: ForgeAiThreadsSearchElement["threads"];

  /** undefined */
  placeholder?: ForgeAiThreadsSearchElement["placeholder"];

  /** undefined */
  emptyMessage?: ForgeAiThreadsSearchElement["emptyMessage"];

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

  /** Fired when search query changes (debounced). */
  onForgeAiThreadsSearchQuery?: (
    event: CustomEvent<CustomEvent<ForgeAiThreadsSearchQueryEventData>>,
  ) => void;

  /** Fired when user scrolls near bottom for pagination. */
  onForgeAiThreadsSearchLoadMore?: (
    event: CustomEvent<CustomEvent<ForgeAiThreadsSearchLoadMoreEventData>>,
  ) => void;

  /** Fired when a thread is selected. */
  onForgeAiThreadsSearchSelect?: (
    event: CustomEvent<CustomEvent<ForgeAiThreadsSearchSelectEventData>>,
  ) => void;

  /** Fired when new chat button clicked. */
  onForgeAiThreadsSearchNewChat?: (event: CustomEvent) => void;

  /** Fired when thread renamed. Cancelable - if prevented, call onSuccess() to commit or onError() to revert. */
  onForgeAiThreadsSearchRename?: (
    event: CustomEvent<CustomEvent<ForgeAiThreadsSearchRenameEventData>>,
  ) => void;

  /** Fired when thread delete confirmed. Cancelable - if prevented, call onSuccess() to commit deletion or onError() to revert. */
  onForgeAiThreadsSearchDelete?: (
    event: CustomEvent<CustomEvent<ForgeAiThreadsSearchDeleteEventData>>,
  ) => void;
}

/**
 *
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-ai-threads-search-query** - Fired when search query changes (debounced).
 * - **forge-ai-threads-search-load-more** - Fired when user scrolls near bottom for pagination.
 * - **forge-ai-threads-search-select** - Fired when a thread is selected.
 * - **forge-ai-threads-search-new-chat** - Fired when new chat button clicked.
 * - **forge-ai-threads-search-rename** - Fired when thread renamed. Cancelable - if prevented, call onSuccess() to commit or onError() to revert.
 * - **forge-ai-threads-search-delete** - Fired when thread delete confirmed. Cancelable - if prevented, call onSuccess() to commit deletion or onError() to revert.
 */
export const ForgeAiThreadsSearch: React.ForwardRefExoticComponent<ForgeAiThreadsSearchProps>;

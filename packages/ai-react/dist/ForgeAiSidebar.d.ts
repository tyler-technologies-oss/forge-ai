import React from "react";
import { ForgeAiSidebar as ForgeAiSidebarElement } from "@tylertech/forge-ai/ai-sidebar";

export type { ForgeAiSidebarElement };

export interface ForgeAiSidebarProps
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
  /** Indicates whether the sidebar is open. */
  open?: boolean;

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

  /** Fired when the sidebar is opened */
  onForgeAiSidebarOpen?: (event: CustomEvent) => void;

  /** Fired when the sidebar is closed */
  onForgeAiSidebarClose?: (event: CustomEvent) => void;
}

/**
 *
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-ai-sidebar-open** - Fired when the sidebar is opened
 * - **forge-ai-sidebar-close** - Fired when the sidebar is closed
 *
 * ### **Methods:**
 *  - **show(): _void_** - Opens the sidebar.
 * - **close(): _void_** - Closes the sidebar.
 * - **toggle(): _void_** - Toggles the sidebar open state.
 *
 * ### **Slots:**
 *  - _default_ - Default slot for sidebar content (typically ai-chat-interface)
 */
export const ForgeAiSidebar: React.ForwardRefExoticComponent<ForgeAiSidebarProps>;

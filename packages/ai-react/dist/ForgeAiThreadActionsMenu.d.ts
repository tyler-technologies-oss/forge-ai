import React from "react";
import { ForgeAiThreadActionsMenu as ForgeAiThreadActionsMenuElement } from "@tylertech/forge-ai/ai-thread-actions-menu";

export type { ForgeAiThreadActionsMenuElement };

export interface ForgeAiThreadActionsMenuProps extends Pick<
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
  showRename?: boolean;

  /** undefined */
  showDelete?: boolean;

  /** undefined */
  thread?: ForgeAiThreadActionsMenuElement["thread"];

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

  /** Fired when rename menu item is clicked. */
  onForgeAiThreadActionsMenuRename?: (
    event: CustomEvent<CustomEvent<ForgeAiThreadActionsMenuRenameEventData>>,
  ) => void;

  /** Fired when delete menu item is clicked. Parent should show confirmation modal. */
  onForgeAiThreadActionsMenuDeleteClick?: (
    event: CustomEvent<
      CustomEvent<ForgeAiThreadActionsMenuDeleteClickEventData>
    >,
  ) => void;

  /** Fired when the dropdown menu is opened. */
  onForgeAiThreadActionsMenuOpen?: (
    event: CustomEvent<CustomEvent<ForgeAiThreadActionsMenuOpenEventData>>,
  ) => void;

  /** Fired when the dropdown menu is closed. */
  onForgeAiThreadActionsMenuClose?: (
    event: CustomEvent<CustomEvent<void>>,
  ) => void;
}

/**
 *
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-ai-thread-actions-menu-rename** - Fired when rename menu item is clicked.
 * - **forge-ai-thread-actions-menu-delete-click** - Fired when delete menu item is clicked. Parent should show confirmation modal.
 * - **forge-ai-thread-actions-menu-open** - Fired when the dropdown menu is opened.
 * - **forge-ai-thread-actions-menu-close** - Fired when the dropdown menu is closed.
 */
export const ForgeAiThreadActionsMenu: React.ForwardRefExoticComponent<ForgeAiThreadActionsMenuProps>;

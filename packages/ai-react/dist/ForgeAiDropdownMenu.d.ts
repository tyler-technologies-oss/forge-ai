import React from "react";
import {
  ForgeAiDropdownMenu as ForgeAiDropdownMenuElement,
  CustomEvent,
} from "@tylertech/forge-ai/ai-dropdown-menu";

export type { ForgeAiDropdownMenuElement, CustomEvent };

export interface ForgeAiDropdownMenuProps extends Pick<
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
  /** Whether the dropdown is open. */
  open?: boolean;

  /** Whether the dropdown menu is disabled. */
  disabled?: boolean;

  /** The variant of the dropdown menu trigger button. */
  variant?: ForgeAiDropdownMenuElement["variant"];

  /** The selection mode for the dropdown menu.
- 'none': No selection state, items act as actions only
- 'single': Single selection with radio button behavior
- 'multi': Multiple selection with checkbox behavior */
  selectionMode?: ForgeAiDropdownMenuElement["selectionMode"];

  /** The currently selected value(s).
For single selection: string or null
For multi selection: string array
For none mode: null */
  value?: ForgeAiDropdownMenuElement["value"];

  /** The placement of the popover relative to the trigger button.
Only applies to root-level menus; submenus always use 'right-start'. */
  popoverPlacement?: ForgeAiDropdownMenuElement["popoverPlacement"];

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

  /** undefined */
  onForgeAiDropdownMenuChange?: (event: CustomEvent) => void;

  /** undefined */
  onEventName?: (event: CustomEvent) => void;
}

/**
 * An AI dropdown menu component with advanced selection modes and submenu support.
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-ai-dropdown-menu-change**
 * - **eventName**
 *
 * ### **Slots:**
 *  - _default_ - The default slot for dropdown menu items, item groups, and separators.
 * - **header** - The header content displayed at the top of the dropdown menu.
 * - **trigger-content** - The content of the trigger button (text or icon) when no selection is made.
 * - **selected-text** - Custom content for the trigger button when selections are made (overrides default selection text).
 * - **start** - The start icon slot for additional trigger button content.
 * - **end** - The end icon slot for additional trigger button content.
 *
 * ### **CSS Properties:**
 *  - **--forge-ai-dropdown-menu-min-width** - Minimum width of the dropdown menu. _(default: undefined)_
 * - **--forge-ai-dropdown-menu-max-width** - Maximum width of the dropdown menu. _(default: undefined)_
 * - **--forge-ai-dropdown-menu-max-height** - Maximum height of the dropdown menu. _(default: undefined)_
 * - **--forge-ai-dropdown-menu-padding** - Padding inside the dropdown menu. _(default: undefined)_
 */
export const ForgeAiDropdownMenu: React.ForwardRefExoticComponent<ForgeAiDropdownMenuProps>;

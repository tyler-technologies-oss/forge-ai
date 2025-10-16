import React from "react";
import { ForgeAiDropdownMenuItem as ForgeAiDropdownMenuItemElement } from "@tylertech/forge-ai/ai-dropdown-menu";

export type { ForgeAiDropdownMenuItemElement };

export interface ForgeAiDropdownMenuItemProps
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
  /** Whether this menu item is selected. */
  selected?: boolean;

  /** Whether this menu item is disabled. */
  disabled?: boolean;

  /** The value associated with this menu item. */
  value?: ForgeAiDropdownMenuItemElement["value"];

  /** The selection mode for this menu item.
This is typically set by the parent dropdown menu component. */
  selectionMode?: ForgeAiDropdownMenuItemElement["selectionMode"];

  /** The trigger behavior for submenu opening.
- 'hover': Opens on mouse hover (default)
- 'click': Opens on click
- 'both': Opens on both hover and click */
  submenuTrigger?: ForgeAiDropdownMenuItemElement["submenuTrigger"];

  /** The delay in milliseconds before opening a submenu on hover. */
  submenuOpenDelay?: ForgeAiDropdownMenuItemElement["submenuOpenDelay"];

  /** The delay in milliseconds before closing a submenu when mouse leaves. */
  submenuCloseDelay?: ForgeAiDropdownMenuItemElement["submenuCloseDelay"];

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

  /** Gets the text content from the default slot (label text only). */
  labelText?: ForgeAiDropdownMenuItemElement["labelText"];
}

/**
 * An item component for use within ai-dropdown-menu with submenu support.
 * ---
 *
 *
 * ### **Slots:**
 *  - _default_ - The default slot for item text content.
 * - **description** - The description slot for additional item details.
 * - **start** - The start icon slot.
 * - **end** - The end icon slot.
 * - **submenu** - The slot for nested dropdown menu components.
 *
 * ### **CSS Properties:**
 *  - **--ai-dropdown-menu-item-submenu-open-delay** - Delay before opening submenu on hover. _(default: undefined)_
 * - **--ai-dropdown-menu-item-submenu-close-delay** - Delay before closing submenu when mouse leaves. _(default: undefined)_
 * - **--ai-dropdown-menu-item-selection-icon-size** - Size of selection and submenu icons. _(default: undefined)_
 */
export const ForgeAiDropdownMenuItem: React.ForwardRefExoticComponent<ForgeAiDropdownMenuItemProps>;

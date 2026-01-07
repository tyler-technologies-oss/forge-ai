import React from "react";
import { ForgeAiOverlay as ForgeAiOverlayElement } from "@tylertech/forge-ai/core/overlay";

export type { ForgeAiOverlayElement };

export interface ForgeAiOverlayProps extends Pick<
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
  /** Whether the overlay should flip to the opposite side when there's no space. */
  flip?: boolean;

  /** Whether the overlay should shift to stay in view. */
  shift?: boolean;

  /** Whether the overlay is open. */
  open?: boolean;

  /** The anchor element to position the overlay relative to. */
  anchor?: ForgeAiOverlayElement["anchor"];

  /** The placement of the overlay relative to the anchor. */
  placement?: ForgeAiOverlayElement["placement"];

  /** The arrow element to position relative to the overlay. */
  arrowElement?: ForgeAiOverlayElement["arrowElement"];

  /** The offset of the overlay from the anchor element.
Can be a number (main axis offset) or an object with mainAxis, crossAxis, and alignmentAxis properties. */
  offset?: ForgeAiOverlayElement["offset"];

  /** The dismiss mode for the overlay.
- 'auto': Automatically closes on outside clicks and Escape key
- 'manual': Requires manual control to close */
  dismissMode?: ForgeAiOverlayElement["dismissMode"];

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
}

/**
 * A low-level overlay component for internal use within AI components.
 * ---
 *
 *
 * ### **Slots:**
 *  - _default_ - The default slot for overlay content.
 *
 * ### **CSS Properties:**
 *  - **--ai-overlay-max-width** - The maximum width of the overlay. _(default: undefined)_
 * - **--ai-overlay-max-height** - The maximum height of the overlay. _(default: undefined)_
 * - **--ai-overlay-min-width** - The minimum width of the overlay. _(default: undefined)_
 * - **--ai-overlay-min-height** - The minimum height of the overlay. _(default: undefined)_
 */
export const ForgeAiOverlay: React.ForwardRefExoticComponent<ForgeAiOverlayProps>;

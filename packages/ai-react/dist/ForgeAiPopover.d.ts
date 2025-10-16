import React from "react";
import { ForgeAiPopover as ForgeAiPopoverElement } from "@tylertech/forge-ai/core/popover";

export type { ForgeAiPopoverElement };

export interface ForgeAiPopoverProps
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
  /** Whether the popover should flip to the opposite side when there's no space. */
  flip?: boolean;

  /** Whether the popover should shift to stay in view. */
  shift?: boolean;

  /** Whether the popover is open. */
  open?: boolean;

  /** The anchor element to position the popover relative to. */
  anchor?: ForgeAiPopoverElement["anchor"];

  /** The placement of the popover relative to the anchor. */
  placement?: ForgeAiPopoverElement["placement"];

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
 * A popover component that provides styled overlay functionality.
 * ---
 *
 *
 * ### **Slots:**
 *  - _default_ - The default slot for popover content.
 *
 * ### **CSS Properties:**
 *  - **--ai-popover-max-width** - The maximum width of the popover. _(default: undefined)_
 * - **--ai-popover-max-height** - The maximum height of the popover. _(default: undefined)_
 * - **--ai-popover-min-width** - The minimum width of the popover. _(default: undefined)_
 * - **--ai-popover-min-height** - The minimum height of the popover. _(default: undefined)_
 */
export const ForgeAiPopover: React.ForwardRefExoticComponent<ForgeAiPopoverProps>;

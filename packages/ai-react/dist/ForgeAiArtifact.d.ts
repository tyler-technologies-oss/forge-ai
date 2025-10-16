import React from "react";
import { ForgeAiArtifact as ForgeAiArtifactElement } from "@tylertech/forge-ai/ai-artifact";

export type { ForgeAiArtifactElement };

export interface ForgeAiArtifactProps
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
 *
 * ---
 *
 *
 * ### **Slots:**
 *  - **start** - Content for the start (left) side of the toolbar, typically used for titles or headings
 * - **actions** - Action buttons for the end (right) side of the toolbar
 * - _default_ - Main content area below the toolbar
 *
 * ### **CSS Properties:**
 *  - **--forge-theme-surface** - Surface color override for the toolbar (defaults to transparent) _(default: undefined)_
 */
export const ForgeAiArtifact: React.ForwardRefExoticComponent<ForgeAiArtifactProps>;

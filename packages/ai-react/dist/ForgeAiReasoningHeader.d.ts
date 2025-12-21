import React from "react";
import { ForgeAiReasoningHeader as ForgeAiReasoningHeaderElement } from "@tylertech/forge-ai/ai-reasoning-header";

export type { ForgeAiReasoningHeaderElement };

export interface ForgeAiReasoningHeaderProps extends Pick<
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
  /** Whether the header is expanded */
  expanded?: boolean;

  /** Whether this is a reasoning header */
  reasoning?: boolean;

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

  /** Fired when the header is clicked and the expanded state changes */
  onToggle?: (event: CustomEvent<CustomEvent<{ expanded: boolean }>>) => void;
}

/**
 *
 * ---
 *
 *
 * ### **Events:**
 *  - **toggle** - Fired when the header is clicked and the expanded state changes
 *
 * ### **Slots:**
 *  - **title** - Content for the header when in regular (non-reasoning) state
 * - **reasoning-title** - Content for the header when in reasoning state
 */
export const ForgeAiReasoningHeader: React.ForwardRefExoticComponent<ForgeAiReasoningHeaderProps>;

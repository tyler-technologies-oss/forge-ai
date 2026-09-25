import React from "react";
import { ForgeAiArtifactCardGroup as ForgeAiArtifactCardGroupElement } from "@tylertech/forge-ai/ai-artifact-card";

export type { ForgeAiArtifactCardGroupElement };

export interface ForgeAiArtifactCardGroupProps extends Pick<
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
  /** Whether every card is showing. */
  expanded?: boolean;

  /** How many cards show while the list is collapsed. Values below 1 are treated as 1. */
  visibleCount?: ForgeAiArtifactCardGroupElement["visibleCount"];

  /** Label of the toggle while collapsed. `{count}` is replaced with the number of hidden cards. */
  showMoreText?: ForgeAiArtifactCardGroupElement["showMoreText"];

  /** Label of the toggle while expanded. */
  showLessText?: ForgeAiArtifactCardGroupElement["showLessText"];

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

  /** Fired when the user expands or collapses the list with the toggle. */
  onForgeAiArtifactCardGroupToggle?: (
    event: CustomEvent<CustomEvent<ForgeAiArtifactCardGroupToggleEventData>>,
  ) => void;
}

/**
 * Presents several artifact cards as a single list that collapses past a set count.
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-ai-artifact-card-group-toggle** - Fired when the user expands or collapses the list with the toggle.
 *
 * ### **Slots:**
 *  - _default_ - The `forge-ai-artifact-card` elements to list.
 *
 * ### **CSS Properties:**
 *  - **--forge-ai-artifact-card-group-border-radius** - Corner radius of the group _(default: undefined)_
 */
export const ForgeAiArtifactCardGroup: React.ForwardRefExoticComponent<ForgeAiArtifactCardGroupProps>;

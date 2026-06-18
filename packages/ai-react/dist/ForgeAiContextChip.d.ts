import React from "react";
import { ForgeAiContextChip as ForgeAiContextChipElement } from "@tylertech/forge-ai/ai-context-chip";

export type { ForgeAiContextChipElement };

export interface ForgeAiContextChipProps extends Pick<
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
  removable?: boolean;

  /** undefined */
  loading?: boolean;

  /** undefined */
  id?: ForgeAiContextChipElement["id"];

  /** undefined */
  label?: ForgeAiContextChipElement["label"];

  /** undefined */
  description?: ForgeAiContextChipElement["description"];

  /** undefined */
  sublabel?: ForgeAiContextChipElement["sublabel"];

  /** undefined */
  type?: ForgeAiContextChipElement["type"];

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

  /** Fired when the remove button is clicked */
  onForgeAiContextChipRemove?: (
    event: CustomEvent<CustomEvent<ForgeAiContextChipRemoveEventData>>,
  ) => void;
}

/**
 * Displays context information as a removable chip.
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-ai-context-chip-remove** - Fired when the remove button is clicked
 *
 * ### **CSS Properties:**
 *  - **--forge-ai-context-chip-background** - Background color of the chip _(default: undefined)_
 * - **--forge-ai-context-chip-border-color** - Border color of the chip _(default: undefined)_
 * - **--forge-ai-context-chip-padding** - Padding inside the chip _(default: undefined)_
 * - **--forge-ai-context-chip-gap** - Gap between elements _(default: undefined)_
 */
export const ForgeAiContextChip: React.ForwardRefExoticComponent<ForgeAiContextChipProps>;

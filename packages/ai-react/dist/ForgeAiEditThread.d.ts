import React from "react";
import { ForgeAiEditThread as ForgeAiEditThreadElement } from "@tylertech/forge-ai/ai-edit-thread";

export type { ForgeAiEditThreadElement };

export interface ForgeAiEditThreadProps extends Pick<
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
  thread?: ForgeAiEditThreadElement["thread"];

  /** undefined */
  value?: ForgeAiEditThreadElement["value"];

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

  /** Fired when save button is clicked or Enter is pressed. */
  onForgeAiEditThreadSave?: (
    event: CustomEvent<CustomEvent<ForgeAiEditThreadSaveEventData>>,
  ) => void;

  /** Fired when cancel button is clicked, Escape is pressed, or focus leaves the component. */
  onForgeAiEditThreadCancel?: (event: CustomEvent<CustomEvent<void>>) => void;
}

/**
 *
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-ai-edit-thread-save** - Fired when save button is clicked or Enter is pressed.
 * - **forge-ai-edit-thread-cancel** - Fired when cancel button is clicked, Escape is pressed, or focus leaves the component.
 */
export const ForgeAiEditThread: React.ForwardRefExoticComponent<ForgeAiEditThreadProps>;

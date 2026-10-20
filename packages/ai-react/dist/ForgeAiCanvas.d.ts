import React from "react";
import { ForgeAiCanvas as ForgeAiCanvasElement } from "@tylertech/forge-ai/ai-canvas";

export type { ForgeAiCanvasElement };

export interface ForgeAiCanvasProps extends Pick<
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
  /** Title shown in the panel header. Also names the panel region for assistive technology, including when the `title` slot replaces the heading */
  titleText?: ForgeAiCanvasElement["titleText"];

  /** Heading level applied to the default title (default: 2) */
  headingLevel?: ForgeAiCanvasElement["headingLevel"];

  /** Accessible label and tooltip for the close button (default: 'Close canvas') */
  closeLabel?: ForgeAiCanvasElement["closeLabel"];

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

  /** Fired when the close button is clicked */
  onForgeAiCanvasClose?: (event: CustomEvent<CustomEvent<void>>) => void;
}

/**
 * A side panel that presents an artifact next to a conversation.
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-ai-canvas-close** - Fired when the close button is clicked
 *
 * ### **Slots:**
 *  - **title** - Replaces the default title heading
 * - **actions** - Action buttons rendered before the close button
 * - _default_ - Panel body content
 *
 * ### **CSS Properties:**
 *  - **--forge-ai-canvas-body-padding** - Padding around the body content _(default: undefined)_
 */
export const ForgeAiCanvas: React.ForwardRefExoticComponent<ForgeAiCanvasProps>;

import React from "react";
import { ForgeAiDialog as ForgeAiDialogElement } from "@tylertech/forge-ai/ai-dialog";

export type { ForgeAiDialogElement };

export interface ForgeAiDialogProps
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
  /** Indicates whether the dialog is open. */
  open?: boolean;

  /** Controls the dialog's positioning and size behavior.
When true, the dialog will have an expanded width and be centered on the screen.
When false, the dialog will be positioned at the bottom-right corner with a fixed width. */
  expanded?: boolean;

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

  /** Gets the current fullscreen state (readonly) */
  isFullscreen?: ForgeAiDialogElement["isFullscreen"];

  /** Fired when the fullscreen state changes due to viewport size */
  onForgeAiDialogFullscreenChange?: (
    event: CustomEvent<CustomEvent<{ isFullscreen: boolean }>>,
  ) => void;

  /** Fired when the dialog is closed */
  onForgeAiDialogClose?: (event: CustomEvent<CustomEvent<void>>) => void;
}

/**
 *
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-ai-dialog-fullscreen-change** - Fired when the fullscreen state changes due to viewport size
 * - **forge-ai-dialog-close** - Fired when the dialog is closed
 *
 * ### **Methods:**
 *  - **show(): _void_** - Opens the dialog.
 * - **close(): _void_** - Closes the dialog.
 * - **toggle(): _void_** - Toggles the dialog open state.
 *
 * ### **Slots:**
 *  - _default_ - Default slot for dialog content (typically ai-chat-interface)
 */
export const ForgeAiDialog: React.ForwardRefExoticComponent<ForgeAiDialogProps>;

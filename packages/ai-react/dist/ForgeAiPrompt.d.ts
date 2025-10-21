import React from "react";
import { ForgeAiPrompt as ForgeAiPromptElement } from "@tylertech/forge-ai/ai-prompt";

export type { ForgeAiPromptElement };

export interface ForgeAiPromptProps
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
  /** Whether the send button is disabled */
  sendDisabled?: boolean;

  /** Whether to autofocus the textarea field when the component renders */
  autofocus?: boolean;

  /** Whether the textarea field is disabled */
  inputDisabled?: boolean;

  /** Whether to dispatch escape events when Escape key is pressed */
  cancelOnEscape?: boolean;

  /** Whether the component is in running state (shows stop button instead of send button) */
  running?: boolean;

  /** Placeholder text for the textarea field */
  placeholder?: ForgeAiPromptElement["placeholder"];

  /** Current value of the textarea field */
  value?: ForgeAiPromptElement["value"];

  /** Layout variant for the prompt component */
  variant?: ForgeAiPromptElement["variant"];

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

  /** Fired when the send button is clicked or Enter is pressed (without Shift). Cancelable - if cancelled, running state is not set and input is not cleared. */
  onForgeAiPromptSend?: (
    event: CustomEvent<CustomEvent<ForgeAiPromptSendEventData>>,
  ) => void;

  /** Fired when the Escape key is pressed (if cancelOnEscape is true). */
  onForgeAiPromptCancel?: (event: CustomEvent<CustomEvent<void>>) => void;

  /** Fired when files are pasted into the textarea. */
  onForgeAiPromptAttachment?: (
    event: CustomEvent<CustomEvent<ForgeAiPromptAttachmentEventData>>,
  ) => void;

  /** Fired when the stop button is clicked. Cancelable - if cancelled, running state remains true. */
  onForgeAiPromptStop?: (event: CustomEvent<CustomEvent<void>>) => void;
}

/**
 *
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-ai-prompt-send** - Fired when the send button is clicked or Enter is pressed (without Shift). Cancelable - if cancelled, running state is not set and input is not cleared.
 * - **forge-ai-prompt-cancel** - Fired when the Escape key is pressed (if cancelOnEscape is true).
 * - **forge-ai-prompt-attachment** - Fired when files are pasted into the textarea.
 * - **forge-ai-prompt-stop** - Fired when the stop button is clicked. Cancelable - if cancelled, running state remains true.
 *
 * ### **Methods:**
 *  - **focus(): _void_** - Focuses the textarea element
 *
 * ### **Slots:**
 *  - **actions** - Slot for action components that are hidden in inline mode (voice input, file picker, model selectors, web search, etc.)
 */
export const ForgeAiPrompt: React.ForwardRefExoticComponent<ForgeAiPromptProps>;

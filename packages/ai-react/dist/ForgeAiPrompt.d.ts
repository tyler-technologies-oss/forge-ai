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
  /** Placeholder text for the input field */
  placeholder?: ForgeAiPromptElement["placeholder"];

  /** Current value of the input field */
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

  /** Fired when the send button is clicked or Enter is pressed. */
  onForgeAiPromptSend?: (
    event: CustomEvent<CustomEvent<AiPromptSendEventData>>,
  ) => void;
}

/**
 *
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-ai-prompt-send** - Fired when the send button is clicked or Enter is pressed.
 *
 * ### **Slots:**
 *  - **actions** - Slot for action components like dropdown menus, voice input, buttons, etc.
 */
export const ForgeAiPrompt: React.ForwardRefExoticComponent<ForgeAiPromptProps>;

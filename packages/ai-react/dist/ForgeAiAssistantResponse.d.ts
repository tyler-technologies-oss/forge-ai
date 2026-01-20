import React from "react";
import { ForgeAiAssistantResponse as ForgeAiAssistantResponseElement } from "@tylertech/forge-ai/ai-assistant-response";

export type { ForgeAiAssistantResponseElement };

export interface ForgeAiAssistantResponseProps extends Pick<
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
  enableReactions?: boolean;

  /** undefined */
  debugMode?: boolean;

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

  /** Fired when copy action is clicked */
  onForgeAiAssistantResponseCopy?: (
    event: CustomEvent<CustomEvent<{ responseId: string }>>,
  ) => void;

  /** Fired when refresh action is clicked */
  onForgeAiAssistantResponseRefresh?: (
    event: CustomEvent<CustomEvent<{ responseId: string }>>,
  ) => void;

  /** Fired when thumbs up is clicked */
  onForgeAiAssistantResponseThumbsUp?: (
    event: CustomEvent<CustomEvent<ForgeAiAssistantResponseFeedbackEventData>>,
  ) => void;

  /** Fired when thumbs down is clicked */
  onForgeAiAssistantResponseThumbsDown?: (
    event: CustomEvent<CustomEvent<ForgeAiAssistantResponseFeedbackEventData>>,
  ) => void;
}

/**
 * Renders a complete assistant response with interleaved text chunks and tool calls.
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-ai-assistant-response-copy** - Fired when copy action is clicked
 * - **forge-ai-assistant-response-refresh** - Fired when refresh action is clicked
 * - **forge-ai-assistant-response-thumbs-up** - Fired when thumbs up is clicked
 * - **forge-ai-assistant-response-thumbs-down** - Fired when thumbs down is clicked
 */
export const ForgeAiAssistantResponse: React.ForwardRefExoticComponent<ForgeAiAssistantResponseProps>;

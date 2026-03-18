import React from "react";
import { ForgeAiChatbot as ForgeAiChatbotElement } from "@tylertech/forge-ai/ai-chatbot";

export type { ForgeAiChatbotElement };

export interface ForgeAiChatbotProps extends Pick<
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
  showExpandButton?: boolean;

  /** undefined */
  showMinimizeButton?: boolean;

  /** undefined */
  expanded?: boolean;

  /** undefined */
  enableReactions?: boolean;

  /** undefined */
  debugMode?: boolean;

  /** undefined */
  minimizeIcon?: ForgeAiChatbotElement["minimizeIcon"];

  /** undefined */
  fileUpload?: ForgeAiChatbotElement["fileUpload"];

  /** undefined */
  voiceInput?: ForgeAiChatbotElement["voiceInput"];

  /** undefined */
  placeholder?: ForgeAiChatbotElement["placeholder"];

  /** undefined */
  titleText?: ForgeAiChatbotElement["titleText"];

  /** undefined */
  headingLevel?: ForgeAiChatbotElement["headingLevel"];

  /** undefined */
  disclaimerText?: ForgeAiChatbotElement["disclaimerText"];

  /** undefined */
  debugCommand?: ForgeAiChatbotElement["debugCommand"];

  /** undefined */
  selectedAgentId?: ForgeAiChatbotElement["selectedAgentId"];

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

  /** Fired when adapter connects */
  onForgeAiChatbotConnected?: (event: CustomEvent<CustomEvent<void>>) => void;

  /** Fired when adapter disconnects */
  onForgeAiChatbotDisconnected?: (
    event: CustomEvent<CustomEvent<void>>,
  ) => void;

  /** Fired when user sends a message */
  onForgeAiChatbotMessageSent?: (
    event: CustomEvent<CustomEvent<ForgeAiChatbotMessageEventData>>,
  ) => void;

  /** Fired when assistant message is complete */
  onForgeAiChatbotMessageReceived?: (
    event: CustomEvent<CustomEvent<ForgeAiChatbotMessageEventData>>,
  ) => void;

  /** Fired when a tool needs to be executed */
  onForgeAiChatbotToolCall?: (
    event: CustomEvent<CustomEvent<ForgeAiChatbotToolCallEventData>>,
  ) => void;

  /** Fired when an error occurs */
  onForgeAiChatbotError?: (
    event: CustomEvent<CustomEvent<ForgeAiChatbotErrorEventData>>,
  ) => void;

  /** Fired when header expand button is clicked */
  onForgeAiChatbotExpand?: (event: CustomEvent<CustomEvent<void>>) => void;

  /** Fired when header minimize button is clicked */
  onForgeAiChatbotMinimize?: (event: CustomEvent<CustomEvent<void>>) => void;

  /** Fired when header clear option is selected (cancelable, prevents clearMessages() if default prevented) */
  onForgeAiChatbotClear?: (event: CustomEvent<CustomEvent<void>>) => void;

  /** Fired when header info option is selected */
  onForgeAiChatbotInfo?: (event: CustomEvent<CustomEvent<void>>) => void;

  /** Fired when user provides feedback on a response (thumbs up/down) */
  onForgeAiChatbotResponseFeedback?: (
    event: CustomEvent<CustomEvent<ForgeAiChatbotResponseFeedbackEventData>>,
  ) => void;
}

/**
 * A complete, self-contained AI chatbot component.
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-ai-chatbot-connected** - Fired when adapter connects
 * - **forge-ai-chatbot-disconnected** - Fired when adapter disconnects
 * - **forge-ai-chatbot-message-sent** - Fired when user sends a message
 * - **forge-ai-chatbot-message-received** - Fired when assistant message is complete
 * - **forge-ai-chatbot-tool-call** - Fired when a tool needs to be executed
 * - **forge-ai-chatbot-error** - Fired when an error occurs
 * - **forge-ai-chatbot-expand** - Fired when header expand button is clicked
 * - **forge-ai-chatbot-minimize** - Fired when header minimize button is clicked
 * - **forge-ai-chatbot-clear** - Fired when header clear option is selected (cancelable, prevents clearMessages() if default prevented)
 * - **forge-ai-chatbot-info** - Fired when header info option is selected
 * - **forge-ai-chatbot-response-feedback** - Fired when user provides feedback on a response (thumbs up/down)
 *
 * ### **Slots:**
 *  - **header** - Slot for custom header content
 * - **icon** - Slot for custom header icon (default: forge-ai-icon)
 * - **empty-state** - Slot for custom empty state content (overrides default suggestions)
 *
 * ### **CSS Properties:**
 *  - **--forge-ai-chatbot-icon-color** - The fill color for the AI icon. Defaults to `tertiary`. _(default: undefined)_
 * - **--forge-ai-chatbot-suggestion-background** - The background color for suggestion buttons. Defaults to `tertiary-container`. _(default: undefined)_
 * - **--forge-ai-chatbot-suggestion-foreground** - The text color for suggestion buttons. Defaults to `on-tertiary-container`. _(default: undefined)_
 */
export const ForgeAiChatbot: React.ForwardRefExoticComponent<ForgeAiChatbotProps>;

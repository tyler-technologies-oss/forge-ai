import React from "react";
import { ForgeAiChatbotLauncher as ForgeAiChatbotLauncherElement } from "@tylertech/forge-ai/ai-chatbot-launcher";

export type { ForgeAiChatbotLauncherElement };

export interface ForgeAiChatbotLauncherProps extends Pick<
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

  /** The description text displayed below the title in the welcome view. */
  descriptionText?: ForgeAiChatbotLauncherElement["descriptionText"];

  /** undefined */
  fileUpload?: ForgeAiChatbotLauncherElement["fileUpload"];

  /** undefined */
  voiceInput?: ForgeAiChatbotLauncherElement["voiceInput"];

  /** undefined */
  placeholder?: ForgeAiChatbotLauncherElement["placeholder"];

  /** undefined */
  titleText?: ForgeAiChatbotLauncherElement["titleText"];

  /** undefined */
  headingLevel?: ForgeAiChatbotLauncherElement["headingLevel"];

  /** undefined */
  disclaimerText?: ForgeAiChatbotLauncherElement["disclaimerText"];

  /** undefined */
  debugCommand?: ForgeAiChatbotLauncherElement["debugCommand"];

  /** undefined */
  selectedAgentId?: ForgeAiChatbotLauncherElement["selectedAgentId"];

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

  /** Agent metadata for info dialog */
  agentInfo?: ForgeAiChatbotLauncherElement["agentInfo"];

  /** List of available agents for selector */
  agents?: ForgeAiChatbotLauncherElement["agents"];

  /** Fired when adapter connects */
  onForgeAiChatbotLauncherConnected?: (
    event: CustomEvent<CustomEvent<void>>,
  ) => void;

  /** Fired when user sends a message */
  onForgeAiChatbotLauncherMessageSent?: (
    event: CustomEvent<CustomEvent<ForgeAiChatbotLauncherMessageEventData>>,
  ) => void;

  /** Fired when assistant message is complete */
  onForgeAiChatbotLauncherMessageReceived?: (
    event: CustomEvent<CustomEvent<ForgeAiChatbotLauncherMessageEventData>>,
  ) => void;

  /** Fired when a tool needs to be executed */
  onForgeAiChatbotLauncherToolCall?: (
    event: CustomEvent<CustomEvent<ForgeAiChatbotLauncherToolCallEventData>>,
  ) => void;

  /** Fired when an error occurs */
  onForgeAiChatbotLauncherError?: (
    event: CustomEvent<CustomEvent<ForgeAiChatbotLauncherErrorEventData>>,
  ) => void;

  /** Fired when transitioning from welcome to conversation view */
  onForgeAiChatbotLauncherConversationStart?: (
    event: CustomEvent<CustomEvent<void>>,
  ) => void;

  /** Fired when user provides feedback on a response */
  onForgeAiChatbotLauncherResponseFeedback?: (
    event: CustomEvent<
      CustomEvent<ForgeAiChatbotLauncherResponseFeedbackEventData>
    >,
  ) => void;

  /** Fired when header info option is selected */
  onForgeAiChatbotLauncherInfo?: (
    event: CustomEvent<CustomEvent<void>>,
  ) => void;

  /** Fired when agent selection changes */
  onForgeAiChatbotLauncherAgentChange?: (
    event: CustomEvent<CustomEvent<ForgeAiChatbotLauncherAgentChangeEventData>>,
  ) => void;
}

/**
 * An embedded AI chatbot component with a welcome view that transitions to conversation mode.
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-ai-chatbot-launcher-connected** - Fired when adapter connects
 * - **forge-ai-chatbot-launcher-message-sent** - Fired when user sends a message
 * - **forge-ai-chatbot-launcher-message-received** - Fired when assistant message is complete
 * - **forge-ai-chatbot-launcher-tool-call** - Fired when a tool needs to be executed
 * - **forge-ai-chatbot-launcher-error** - Fired when an error occurs
 * - **forge-ai-chatbot-launcher-conversation-start** - Fired when transitioning from welcome to conversation view
 * - **forge-ai-chatbot-launcher-response-feedback** - Fired when user provides feedback on a response
 * - **forge-ai-chatbot-launcher-info** - Fired when header info option is selected
 * - **forge-ai-chatbot-launcher-agent-change** - Fired when agent selection changes
 *
 * ### **Slots:**
 *  - **icon** - Slot for custom icon (used in both welcome view and conversation header)
 * - **heading** - Slot for custom heading content
 * - **description** - Slot for custom description/welcome message below the title
 *
 * ### **CSS Properties:**
 *  - **--forge-ai-chatbot-launcher-icon-color** - The fill color for the AI icon. _(default: undefined)_
 */
export const ForgeAiChatbotLauncher: React.ForwardRefExoticComponent<ForgeAiChatbotLauncherProps>;

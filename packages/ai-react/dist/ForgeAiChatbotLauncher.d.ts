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
  /** Whether to show the rename option in thread actions menu */
  showThreadRename?: boolean;

  /** Whether to show the delete option in thread actions menu */
  showThreadDelete?: boolean;

  /** undefined */
  enableReactions?: boolean;

  /** undefined */
  debugMode?: boolean;

  /** The description text displayed below the title in the welcome view. */
  descriptionText?: ForgeAiChatbotLauncherElement["descriptionText"];

  /** The name of the current thread (shown in conversation view breadcrumb) */
  threadName?: ForgeAiChatbotLauncherElement["threadName"];

  /** undefined */
  fileUpload?: ForgeAiChatbotLauncherElement["fileUpload"];

  /** undefined */
  maxFileSize?: ForgeAiChatbotLauncherElement["maxFileSize"];

  /** undefined */
  acceptedFileTypes?: ForgeAiChatbotLauncherElement["acceptedFileTypes"];

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
  exportOption?: ForgeAiChatbotLauncherElement["exportOption"];

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
  onForgeAiChatbotConnected?: (event: CustomEvent<CustomEvent<void>>) => void;

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

  /** Fired when transitioning from welcome to conversation view */
  onForgeAiChatbotLauncherConversationStart?: (
    event: CustomEvent<CustomEvent<void>>,
  ) => void;

  /** Fired when user provides feedback on a response */
  onForgeAiChatbotResponseFeedback?: (
    event: CustomEvent<CustomEvent<ForgeAiChatbotResponseFeedbackEventData>>,
  ) => void;

  /** Fired when header info option is selected */
  onForgeAiChatbotInfo?: (event: CustomEvent<CustomEvent<void>>) => void;

  /** Fired when agent selection changes */
  onForgeAiChatbotAgentChange?: (
    event: CustomEvent<CustomEvent<ForgeAiChatbotAgentChangeEventData>>,
  ) => void;

  /** Fired when thread rename is saved. Parent should update threadName property and call onSuccess() or onError() */
  onForgeAiChatbotLauncherThreadRename?: (
    event: CustomEvent<
      CustomEvent<ForgeAiChatbotLauncherThreadRenameEventData>
    >,
  ) => void;

  /** Fired when thread deletion is confirmed. Parent should delete thread and call onSuccess() or onError() */
  onForgeAiChatbotLauncherThreadDelete?: (
    event: CustomEvent<
      CustomEvent<ForgeAiChatbotLauncherThreadDeleteEventData>
    >,
  ) => void;
}

/**
 * An embedded AI chatbot component with a welcome view that transitions to conversation mode.
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-ai-chatbot-connected** - Fired when adapter connects
 * - **forge-ai-chatbot-message-sent** - Fired when user sends a message
 * - **forge-ai-chatbot-message-received** - Fired when assistant message is complete
 * - **forge-ai-chatbot-tool-call** - Fired when a tool needs to be executed
 * - **forge-ai-chatbot-error** - Fired when an error occurs
 * - **forge-ai-chatbot-launcher-conversation-start** - Fired when transitioning from welcome to conversation view
 * - **forge-ai-chatbot-response-feedback** - Fired when user provides feedback on a response
 * - **forge-ai-chatbot-info** - Fired when header info option is selected
 * - **forge-ai-chatbot-agent-change** - Fired when agent selection changes
 * - **forge-ai-chatbot-launcher-thread-rename** - Fired when thread rename is saved. Parent should update threadName property and call onSuccess() or onError()
 * - **forge-ai-chatbot-launcher-thread-delete** - Fired when thread deletion is confirmed. Parent should delete thread and call onSuccess() or onError()
 *
 * ### **Methods:**
 *  - **clearMessages(): _boolean_** - Clears all messages from the chat.
 *
 * This is a lower-level operation that removes message history without
 * the semantic meaning of "starting a new conversation". For user-facing
 * "new chat" actions, prefer startNewChat which provides
 * conversation-level cleanup.
 * - **startNewChat(): _void_** - Starts a new chat conversation.
 *
 * This clears all messages and resets the conversation to a fresh state.
 * Use this when the user explicitly wants to begin a new conversation.
 *
 * Contrast with clearMessages, which fires events and can be prevented.
 * This method does not fire events - it's meant for programmatic use.
 * For user-initiated actions, use event handlers that fire events before calling this.
 *
 * Subclasses may override this to add conversation-specific cleanup like
 * resetting thread IDs or closing panels.
 *
 * ### **Slots:**
 *  - **icon** - Slot for custom icon (used in both welcome view and conversation header)
 * - **heading** - Slot for custom heading content (welcome view only)
 * - **description** - Slot for custom description/welcome message below the title (welcome view only)
 * - **header-actions** - Slot for custom header action buttons in conversation mode (rendered before built-in header actions)
 *
 * ### **CSS Properties:**
 *  - **--forge-ai-chatbot-launcher-icon-color** - The fill color for the AI icon. _(default: undefined)_
 */
export const ForgeAiChatbotLauncher: React.ForwardRefExoticComponent<ForgeAiChatbotLauncherProps>;

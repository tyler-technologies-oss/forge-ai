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

  /** Controls conversations button visibility (default: false) */
  showConversationsButton?: boolean;

  /** undefined */
  conversationsOpen?: boolean;

  /** undefined */
  showConversationRename?: boolean;

  /** undefined */
  showConversationDelete?: boolean;

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

  /** Agent metadata for info dialog */
  agentInfo?: ForgeAiChatbotElement["agentInfo"];

  /** List of available agents for selector */
  agents?: ForgeAiChatbotElement["agents"];

  /** Suggestions to display in the empty state */
  suggestions?: ForgeAiChatbotElement["suggestions"];

  /** Fired when adapter connects */
  onForgeAiChatbotConnected?: (event: CustomEvent<CustomEvent<void>>) => void;

  /** Fired when adapter disconnects */
  onForgeAiChatbotDisconnected?: (
    event: CustomEvent<CustomEvent<void>>,
  ) => void;

  /** Fired synchronously when a run starts, before the request is sent. Use this to set adapter context just-in-time. */
  onForgeAiChatbotRunStarted?: (event: CustomEvent<CustomEvent<void>>) => void;

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

  /** Fired when user changes agent from the header */
  onForgeAiChatbotAgentChange?: (
    event: CustomEvent<CustomEvent<ForgeAiChatbotAgentChangeEventData>>,
  ) => void;

  /** Fired when there is a change to the thread state (messages, files, selected agent, etc). Use this to capture the latest thread state for persistence. */
  onForgeAiChatbotThreadStateChange?: (
    event: CustomEvent<CustomEvent<void>>,
  ) => void;

  /** Fired when conversations panel opens */
  onForgeAiChatbotConversationsOpen?: (
    event: CustomEvent<CustomEvent<void>>,
  ) => void;

  /** Fired when conversations panel closes */
  onForgeAiChatbotConversationsClose?: (
    event: CustomEvent<CustomEvent<void>>,
  ) => void;

  /** Fired when user selects a conversation thread */
  onForgeAiChatbotConversationSelect?: (
    event: CustomEvent<CustomEvent<ForgeAiChatbotConversationSelectEventData>>,
  ) => void;

  /** Fired when user clicks new chat button (cancelable) */
  onForgeAiChatbotNewChat?: (event: CustomEvent<CustomEvent<void>>) => void;

  /** Fired when search query changes in conversations panel (debounced, cancelable) */
  onForgeAiChatbotConversationSearch?: (
    event: CustomEvent<CustomEvent<ForgeAiChatbotConversationSearchEventData>>,
  ) => void;

  /** Fired when scrolling near bottom in recent chats or search chats. Query field differentiates contexts. */
  onForgeAiChatbotConversationLoadMore?: (
    event: CustomEvent<
      CustomEvent<ForgeAiChatbotConversationLoadMoreEventData>
    >,
  ) => void;

  /** Fired when user renames a conversation thread. Cancelable - if prevented, call onSuccess() to commit or onError() to revert. */
  onForgeAiChatbotConversationRename?: (
    event: CustomEvent<CustomEvent<ForgeAiChatbotConversationRenameEventData>>,
  ) => void;

  /** Fired when user deletes a conversation thread. Cancelable - if prevented, call onSuccess() to commit deletion or onError() to revert. Otherwise optimistically removed. */
  onForgeAiChatbotConversationDelete?: (
    event: CustomEvent<CustomEvent<ForgeAiChatbotConversationDeleteEventData>>,
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
 * - **forge-ai-chatbot-run-started** - Fired synchronously when a run starts, before the request is sent. Use this to set adapter context just-in-time.
 * - **forge-ai-chatbot-message-sent** - Fired when user sends a message
 * - **forge-ai-chatbot-message-received** - Fired when assistant message is complete
 * - **forge-ai-chatbot-tool-call** - Fired when a tool needs to be executed
 * - **forge-ai-chatbot-error** - Fired when an error occurs
 * - **forge-ai-chatbot-expand** - Fired when header expand button is clicked
 * - **forge-ai-chatbot-minimize** - Fired when header minimize button is clicked
 * - **forge-ai-chatbot-clear** - Fired when header clear option is selected (cancelable, prevents clearMessages() if default prevented)
 * - **forge-ai-chatbot-info** - Fired when header info option is selected
 * - **forge-ai-chatbot-response-feedback** - Fired when user provides feedback on a response (thumbs up/down)
 * - **forge-ai-chatbot-agent-change** - Fired when user changes agent from the header
 * - **forge-ai-chatbot-thread-state-change** - Fired when there is a change to the thread state (messages, files, selected agent, etc). Use this to capture the latest thread state for persistence.
 * - **forge-ai-chatbot-conversations-open** - Fired when conversations panel opens
 * - **forge-ai-chatbot-conversations-close** - Fired when conversations panel closes
 * - **forge-ai-chatbot-conversation-select** - Fired when user selects a conversation thread
 * - **forge-ai-chatbot-new-chat** - Fired when user clicks new chat button (cancelable)
 * - **forge-ai-chatbot-conversation-search** - Fired when search query changes in conversations panel (debounced, cancelable)
 * - **forge-ai-chatbot-conversation-load-more** - Fired when scrolling near bottom in recent chats or search chats. Query field differentiates contexts.
 * - **forge-ai-chatbot-conversation-rename** - Fired when user renames a conversation thread. Cancelable - if prevented, call onSuccess() to commit or onError() to revert.
 * - **forge-ai-chatbot-conversation-delete** - Fired when user deletes a conversation thread. Cancelable - if prevented, call onSuccess() to commit deletion or onError() to revert. Otherwise optimistically removed.
 *
 * ### **Methods:**
 *  - **startNewChat(): _void_** - Starts a new chat conversation by clearing messages and resetting conversation state.
 *
 * This method:
 * - Clears all messages via the controller
 * - Resets the selected thread ID
 *
 * Does not fire events - meant for programmatic use.
 * For user-initiated actions, the event handler fires the event before calling this.
 * - **clearMessages(): __** - Clears all messages from the chat.
 *
 * This is a lower-level operation that removes message history without
 * the semantic meaning of "starting a new conversation". For user-facing
 * "new chat" actions, prefer startNewChat which provides
 * conversation-level cleanup.
 *
 * ### **Slots:**
 *  - **header** - Slot for custom header content
 * - **icon** - Slot for custom header icon (default: forge-ai-icon)
 * - **header-actions** - Slot for custom header action buttons (rendered before built-in header actions)
 * - **empty-state-icon** - Slot for custom empty state icon
 * - **empty-state** - Slot for custom empty state content (overrides default suggestions)
 *
 * ### **CSS Properties:**
 *  - **--forge-ai-chatbot-icon-color** - The fill color for the AI icon. Defaults to `tertiary`. _(default: undefined)_
 * - **--forge-ai-chatbot-suggestion-background** - The background color for suggestion buttons. Defaults to `tertiary-container`. _(default: undefined)_
 * - **--forge-ai-chatbot-suggestion-foreground** - The text color for suggestion buttons. Defaults to `on-tertiary-container`. _(default: undefined)_
 */
export const ForgeAiChatbot: React.ForwardRefExoticComponent<ForgeAiChatbotProps>;

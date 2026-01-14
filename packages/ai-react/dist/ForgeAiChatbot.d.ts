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
  fileUpload?: ForgeAiChatbotElement["fileUpload"];

  /** undefined */
  voiceInput?: ForgeAiChatbotElement["voiceInput"];

  /** undefined */
  debugCommand?: ForgeAiChatbotElement["debugCommand"];

  /** undefined */
  placeholder?: ForgeAiChatbotElement["placeholder"];

  /** undefined */
  minimizeIcon?: ForgeAiChatbotElement["minimizeIcon"];

  /** The title text to display in the header (default: 'AI Assistant') */
  titleText?: ForgeAiChatbotElement["titleText"];

  /** Controls the heading level for the title content (default: 2) */
  headingLevel?: ForgeAiChatbotElement["headingLevel"];

  /** The disclaimer text to display below the prompt. Set to empty string, null, or undefined to hide. */
  disclaimerText?: ForgeAiChatbotElement["disclaimerText"];

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
}

/**
 * A complete, self-contained AI chatbot component that implements the AG-UI protocol using an adapter pattern.
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
 *
 * ### **Methods:**
 *  - **clearMessages(): _void_** - Clears all messages from the chat history.
 * - **getMessages(): __** - Gets the current message history.
 * - **setMessages(messages: _ChatMessage[]_): _void_** - Sets the message history. Useful for restoring conversation state.
 * - **sendMessage(content: _string_, files: _File[]_): _Promise<void>_** - Programmatically sends a message as the user.
 * - **abort(): _void_** - Aborts the current streaming response.
 * - **scrollToBottom({ behavior }: _{ behavior?: ScrollBehavior }_): _Promise<void>_** - Scrolls the chat interface to the bottom.
 * - **getThreadState(): __** - Gets the complete serializable thread state including threadId and messages.
 * - **setThreadState(state: _ThreadState_): _void_** - Restores thread state from a serialized ThreadState object.
 *
 * ### **Slots:**
 *  - **header** - Slot for custom header content
 * - **empty-state** - Slot for custom empty state content (overrides default suggestions)
 */
export const ForgeAiChatbot: React.ForwardRefExoticComponent<ForgeAiChatbotProps>;

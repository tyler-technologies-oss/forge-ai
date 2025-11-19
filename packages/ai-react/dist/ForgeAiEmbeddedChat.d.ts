import React from "react";
import { ForgeAiEmbeddedChat as ForgeAiEmbeddedChatElement } from "@tylertech/forge-ai/ai-embedded-chat";

export type { ForgeAiEmbeddedChatElement };

export interface ForgeAiEmbeddedChatProps
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
  /** Controls whether the modal view is open when expanded. */
  expanded?: boolean;

  /** Enable file upload functionality (default: false) */
  enableFileUpload?: boolean;

  /** Gradient variant for embedded view ('low' | 'medium' | 'high', default: 'medium') */
  gradientVariant?: ForgeAiEmbeddedChatElement["gradientVariant"];

  /** undefined */
  threadId?: ForgeAiEmbeddedChatElement["threadId"];

  /** Placeholder text for input (default: "Ask a question...") */
  placeholder?: ForgeAiEmbeddedChatElement["placeholder"];

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

  /** Required. The adapter for communication with the AI service */
  adapter?: ForgeAiEmbeddedChatElement["adapter"];

  /** Optional client-side tools for the agent to execute */
  tools?: ForgeAiEmbeddedChatElement["tools"];

  /** Optional suggestions for empty state */
  suggestions?: ForgeAiEmbeddedChatElement["suggestions"];

  /** Fired when the chat is expanded to modal view */
  onForgeAiEmbeddedChatExpand?: (event: CustomEvent<CustomEvent<void>>) => void;

  /** Fired when the chat is collapsed from modal view */
  onForgeAiEmbeddedChatCollapse?: (
    event: CustomEvent<CustomEvent<void>>,
  ) => void;
}

/**
 *
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-ai-embedded-chat-expand** - Fired when the chat is expanded to modal view
 * - **forge-ai-embedded-chat-collapse** - Fired when the chat is collapsed from modal view
 *
 * ### **Methods:**
 *  - **expand(): _void_** - Expands the chat to modal view.
 * - **collapse(): _void_** - Collapses the chat from modal view back to embedded view.
 *
 * ### **Slots:**
 *  - **header-title** - Slot for custom header title content (default: "AI Assistant")
 * - **empty-state-heading** - Slot for custom empty state heading
 */
export const ForgeAiEmbeddedChat: React.ForwardRefExoticComponent<ForgeAiEmbeddedChatProps>;

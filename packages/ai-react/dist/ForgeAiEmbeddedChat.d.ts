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

  /** Controls the gradient variant applied to the container. */
  gradientVariant?: ForgeAiEmbeddedChatElement["gradientVariant"];

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
 *  - _default_ - Default slot for messages (ai-user-message, ai-response-message components)
 * - **suggestions** - Slot for AI suggestions component
 * - **prompt** - Slot for custom AI prompt component. If not provided, a default forge-ai-prompt will be used.
 */
export const ForgeAiEmbeddedChat: React.ForwardRefExoticComponent<ForgeAiEmbeddedChatProps>;

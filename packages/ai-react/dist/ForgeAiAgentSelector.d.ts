import React from "react";
import {
  ForgeAiAgentSelector as ForgeAiAgentSelectorElement,
  CustomEvent,
} from "@tylertech/forge-ai/ai-agent-selector";

export type { ForgeAiAgentSelectorElement, CustomEvent };

export interface ForgeAiAgentSelectorProps extends Pick<
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
  /** Disables the selector (e.g., during streaming) */
  disabled?: boolean;

  /** ID of the currently selected agent */
  selectedAgentId?: ForgeAiAgentSelectorElement["selectedAgentId"];

  /** Fallback text when no agent is selected */
  titleText?: ForgeAiAgentSelectorElement["titleText"];

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

  /** Array of available agents */
  agents?: ForgeAiAgentSelectorElement["agents"];

  /** Fired when an agent is selected */
  onForgeAiAgentSelectorChange?: (event: CustomEvent) => void;
}

/**
 * Agent selector component for switching between AI agents.
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-ai-agent-selector-change** - Fired when an agent is selected
 */
export const ForgeAiAgentSelector: React.ForwardRefExoticComponent<ForgeAiAgentSelectorProps>;

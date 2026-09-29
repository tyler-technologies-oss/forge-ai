import React from "react";
import { ForgeAiArtifactCard as ForgeAiArtifactCardElement } from "@tylertech/forge-ai/ai-artifact-card";

export type { ForgeAiArtifactCardElement };

export interface ForgeAiArtifactCardProps extends Pick<
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
  /** Whether the artifact this card points at is the one currently being viewed. Exposed to
assistive technology as `aria-current`. */
  active?: boolean;

  /** Whether the card can be activated. */
  disabled?: boolean;

  /** The primary line of text. Truncates to a single line. */
  titleText?: ForgeAiArtifactCardElement["titleText"];

  /** The secondary line of text. Truncates to a single line. */
  subtitleText?: ForgeAiArtifactCardElement["subtitleText"];

  /** Describes what activating the card does, for assistive technology only. Appended to the button's
accessible name after the title and subtitle. Set it when activation does something other than
open, such as collapsing an already-open artifact ("Collapse report"). Omit it and the name is
just the card text. */
  actionLabel?: ForgeAiArtifactCardElement["actionLabel"];

  /** An opaque identifier echoed back in the open event detail. The component never
interprets it. */
  assetId?: ForgeAiArtifactCardElement["assetId"];

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

  /** Fired when the card is activated by click, Enter, or Space. Not fired while disabled. */
  onForgeAiArtifactCardOpen?: (
    event: CustomEvent<CustomEvent<ForgeAiArtifactCardOpenEventData>>,
  ) => void;
}

/**
 * A compact, clickable card representing an artifact an agent produced.
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-ai-artifact-card-open** - Fired when the card is activated by click, Enter, or Space. Not fired while disabled.
 *
 * ### **Slots:**
 *  - **icon** - The leading icon, shown inside a bordered tile. Replaces the default artifact glyph.
 * - **action-icon** - The trailing action glyph. Replaces the default arrow, and unlike the arrow stays visible while `active`, so consumers that collapse on a second activation can show a matching glyph.
 *
 * ### **CSS Properties:**
 *  - **--forge-ai-artifact-card-accent-color** - Color of the active border and ring, and the focus indicator _(default: undefined)_
 * - **--forge-ai-artifact-card-background** - Background color of the card _(default: undefined)_
 * - **--forge-ai-artifact-card-border-radius** - Corner radius of the card _(default: undefined)_
 * - **--forge-ai-artifact-card-padding** - Padding inside the card _(default: undefined)_
 * - **--forge-ai-artifact-card-gap** - Gap between the icon and the text _(default: undefined)_
 */
export const ForgeAiArtifactCard: React.ForwardRefExoticComponent<ForgeAiArtifactCardProps>;

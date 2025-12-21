import React from "react";
import {
  ForgeAiFilePicker as ForgeAiFilePickerElement,
  CustomEvent,
} from "@tylertech/forge-ai/ai-file-picker";

export type { ForgeAiFilePickerElement, CustomEvent };

export interface ForgeAiFilePickerProps extends Pick<
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
  /** Whether the file picker is disabled. */
  disabled?: boolean;

  /** Whether to allow multiple file selection. */
  multiple?: boolean;

  /** The variant of the file picker button. */
  variant?: ForgeAiFilePickerElement["variant"];

  /** Accepted file types (comma-separated MIME types or extensions). */
  accept?: ForgeAiFilePickerElement["accept"];

  /** Maximum file size in bytes. Default is 10MB. */
  maxSize?: ForgeAiFilePickerElement["maxSize"];

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

  /** Array of currently selected file names for duplicate checking. */
  selectedFiles?: ForgeAiFilePickerElement["selectedFiles"];

  /** Fired when a file is selected via click or drag & drop. The event detail contains the selected file and timestamp. */
  onForgeAiFilePickerChange?: (
    event: CustomEvent<CustomEvent<ForgeAiFilePickerChangeEventData>>,
  ) => void;

  /** undefined */
  onForgeAiFilePickerError?: (event: CustomEvent) => void;
}

/**
 * An AI file picker component with button and icon-button variants.
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-ai-file-picker-change** - Fired when a file is selected via click or drag & drop. The event detail contains the selected file and timestamp.
 * - **forge-ai-file-picker-error**
 *
 * ### **Slots:**
 *  - _default_ - The default slot for button content when no file is selected.
 * - **icon** - The icon slot for icon-button variant.
 *
 * ### **CSS Properties:**
 *  - **--ai-file-picker-width** - The width of the file picker button. _(default: undefined)_
 * - **--ai-file-picker-height** - The height of the file picker button. _(default: undefined)_
 */
export const ForgeAiFilePicker: React.ForwardRefExoticComponent<ForgeAiFilePickerProps>;

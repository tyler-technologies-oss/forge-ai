import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-file-picker";
import { useEventListener, useProperties } from "./react-utils.js";

export const ForgeAiFilePicker = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    disabled,
    multiple,
    variant,
    accept,
    maxSize,
    selectedFiles,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-ai-file-picker-change",
    props.onForgeAiFilePickerChange,
  );
  useEventListener(
    ref,
    "forge-ai-file-picker-error",
    props.onForgeAiFilePickerError,
  );

  /** Properties - run whenever a property has changed */
  useProperties(ref, "selectedFiles", props.selectedFiles);

  return React.createElement(
    "forge-ai-file-picker",
    {
      ref: (node) => {
        ref.current = node;
        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          forwardedRef.current = node;
        }
      },
      ...filteredProps,
      variant: props.variant,
      accept: props.accept,
      "max-size": props.maxSize || props["max-size"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      disabled: props.disabled ? true : undefined,
      multiple: props.multiple ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

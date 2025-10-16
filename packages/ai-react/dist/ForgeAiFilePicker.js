import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-file-picker";
import { useEventListener } from "./react-utils.js";

export const ForgeAiFilePicker = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { disabled, multiple, variant, accept, ...filteredProps } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-ai-file-picker-change",
    props.onForgeAiFilePickerChange,
  );

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

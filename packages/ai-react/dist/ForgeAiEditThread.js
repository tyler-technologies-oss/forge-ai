import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-edit-thread";
import { useEventListener } from "./react-utils.js";

export const ForgeAiEditThread = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { thread, value, ...filteredProps } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-ai-edit-thread-save",
    props.onForgeAiEditThreadSave,
  );
  useEventListener(
    ref,
    "forge-ai-edit-thread-cancel",
    props.onForgeAiEditThreadCancel,
  );

  return React.createElement(
    "forge-ai-edit-thread",
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
      thread: props.thread,
      value: props.value,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      style: { ...props.style },
    },
    props.children,
  );
});

import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-user-message-toolbar";
import { useEventListener } from "./react-utils.js";

export const ForgeAiUserMessageToolbar = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { streaming, ...filteredProps } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-ai-user-message-toolbar-copy",
    props.onForgeAiUserMessageToolbarCopy,
  );
  useEventListener(
    ref,
    "forge-ai-user-message-toolbar-resend",
    props.onForgeAiUserMessageToolbarResend,
  );
  useEventListener(
    ref,
    "forge-ai-user-message-toolbar-edit",
    props.onForgeAiUserMessageToolbarEdit,
  );

  return React.createElement(
    "forge-ai-user-message-toolbar",
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
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      streaming: props.streaming ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

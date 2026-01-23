import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-user-message";
import { useEventListener } from "./react-utils.js";

export const ForgeAiUserMessage = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { streaming, messageId, ...filteredProps } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-ai-user-message-copy",
    props.onForgeAiUserMessageCopy,
  );
  useEventListener(
    ref,
    "forge-ai-user-message-resend",
    props.onForgeAiUserMessageResend,
  );
  useEventListener(
    ref,
    "forge-ai-user-message-edit",
    props.onForgeAiUserMessageEdit,
  );

  return React.createElement(
    "forge-ai-user-message",
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
      "message-id": props.messageId || props["message-id"],
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

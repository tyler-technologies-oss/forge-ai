import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-chatbot";
import { useEventListener } from "./react-utils.js";

export const ForgeAiChatbotToolCall = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-ai-message-thread-scroll-request",
    props.onForgeAiMessageThreadScrollRequest,
  );

  return React.createElement(
    "forge-ai-chatbot-tool-call",
    {
      ref: (node) => {
        ref.current = node;
        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          forwardedRef.current = node;
        }
      },
      ...props,
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

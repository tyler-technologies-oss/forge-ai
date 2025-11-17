import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-response-message";
import { useEventListener } from "./react-utils.js";

export const ForgeAiResponseMessage = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { complete, ...filteredProps } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-ai-response-message-copy",
    props.onForgeAiResponseMessageCopy,
  );
  useEventListener(
    ref,
    "forge-ai-response-message-refresh",
    props.onForgeAiResponseMessageRefresh,
  );
  useEventListener(
    ref,
    "forge-ai-response-message-thumbs-up",
    props.onForgeAiResponseMessageThumbsUp,
  );
  useEventListener(
    ref,
    "forge-ai-response-message-thumbs-down",
    props.onForgeAiResponseMessageThumbsDown,
  );

  return React.createElement(
    "forge-ai-response-message",
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
      complete: props.complete ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

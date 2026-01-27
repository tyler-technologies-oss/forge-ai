import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-assistant-response";
import { useEventListener } from "./react-utils.js";

export const ForgeAiAssistantResponse = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { enableReactions, debugMode, ...filteredProps } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-ai-assistant-response-copy",
    props.onForgeAiAssistantResponseCopy,
  );
  useEventListener(
    ref,
    "forge-ai-assistant-response-resend",
    props.onForgeAiAssistantResponseResend,
  );
  useEventListener(
    ref,
    "forge-ai-assistant-response-thumbs-up",
    props.onForgeAiAssistantResponseThumbsUp,
  );
  useEventListener(
    ref,
    "forge-ai-assistant-response-thumbs-down",
    props.onForgeAiAssistantResponseThumbsDown,
  );

  return React.createElement(
    "forge-ai-assistant-response",
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
      "enable-reactions": props.enableReactions ? true : undefined,
      "debug-mode": props.debugMode ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

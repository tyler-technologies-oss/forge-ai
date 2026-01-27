import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-message-thread";
import { useEventListener } from "./react-utils.js";

export const ForgeAiMessageThread = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    enableReactions,
    showThinking,
    debugMode,
    autoScroll,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-ai-message-thread-copy",
    props.onForgeAiMessageThreadCopy,
  );
  useEventListener(
    ref,
    "forge-ai-message-thread-resend",
    props.onForgeAiMessageThreadResend,
  );
  useEventListener(
    ref,
    "forge-ai-message-thread-thumbs-up",
    props.onForgeAiMessageThreadThumbsUp,
  );
  useEventListener(
    ref,
    "forge-ai-message-thread-thumbs-down",
    props.onForgeAiMessageThreadThumbsDown,
  );

  return React.createElement(
    "forge-ai-message-thread",
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
      "auto-scroll": props.autoScroll || props["auto-scroll"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      "enable-reactions": props.enableReactions ? true : undefined,
      "show-thinking": props.showThinking ? true : undefined,
      "debug-mode": props.debugMode ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

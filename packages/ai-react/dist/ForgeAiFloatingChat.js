import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-floating-chat";
import { useEventListener } from "./react-utils.js";

export const ForgeAiFloatingChat = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { open, expanded, ...filteredProps } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-ai-floating-chat-open",
    props.onForgeAiFloatingChatOpen,
  );
  useEventListener(
    ref,
    "forge-ai-floating-chat-close",
    props.onForgeAiFloatingChatClose,
  );
  useEventListener(
    ref,
    "forge-ai-floating-chat-expand",
    props.onForgeAiFloatingChatExpand,
  );
  useEventListener(
    ref,
    "forge-ai-floating-chat-collapse",
    props.onForgeAiFloatingChatCollapse,
  );

  return React.createElement(
    "forge-ai-floating-chat",
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
      open: props.open ? true : undefined,
      expanded: props.expanded ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

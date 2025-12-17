import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-sidebar-chat";
import { useEventListener } from "./react-utils.js";

export const ForgeAiSidebarChat = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { open, expanded, ...filteredProps } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-ai-sidebar-chat-open",
    props.onForgeAiSidebarChatOpen,
  );
  useEventListener(
    ref,
    "forge-ai-sidebar-chat-close",
    props.onForgeAiSidebarChatClose,
  );
  useEventListener(
    ref,
    "forge-ai-sidebar-chat-expand",
    props.onForgeAiSidebarChatExpand,
  );
  useEventListener(
    ref,
    "forge-ai-sidebar-chat-collapse",
    props.onForgeAiSidebarChatCollapse,
  );

  return React.createElement(
    "forge-ai-sidebar-chat",
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

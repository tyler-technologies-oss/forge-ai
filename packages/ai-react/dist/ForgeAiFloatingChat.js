import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-floating-chat";
import { useEventListener, useProperties } from "./react-utils.js";

export const ForgeAiFloatingChat = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    open,
    expanded,
    enableFileUpload,
    threadId,
    placeholder,
    adapter,
    tools,
    suggestions,
    ...filteredProps
  } = props;

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

  /** Properties - run whenever a property has changed */
  useProperties(ref, "adapter", props.adapter);
  useProperties(ref, "tools", props.tools);
  useProperties(ref, "suggestions", props.suggestions);

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
      "thread-id": props.threadId || props["thread-id"],
      placeholder: props.placeholder,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      open: props.open ? true : undefined,
      expanded: props.expanded ? true : undefined,
      "enable-file-upload": props.enableFileUpload ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

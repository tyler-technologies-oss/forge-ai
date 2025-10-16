import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-embedded-chat";
import { useEventListener } from "./react-utils.js";

export const ForgeAiEmbeddedChat = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { expanded, gradientVariant, ...filteredProps } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-ai-embedded-chat-expand",
    props.onForgeAiEmbeddedChatExpand,
  );
  useEventListener(
    ref,
    "forge-ai-embedded-chat-collapse",
    props.onForgeAiEmbeddedChatCollapse,
  );

  return React.createElement(
    "forge-ai-embedded-chat",
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
      "gradient-variant": props.gradientVariant || props["gradient-variant"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      expanded: props.expanded ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

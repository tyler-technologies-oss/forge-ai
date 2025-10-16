import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-chat-header";
import { useEventListener } from "./react-utils.js";

export const ForgeAiChatHeader = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    showExpandButton,
    showMinimizeButton,
    expanded,
    minimizeIcon,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-ai-chat-header-clear",
    props.onForgeAiChatHeaderClear,
  );
  useEventListener(
    ref,
    "forge-ai-chat-header-info",
    props.onForgeAiChatHeaderInfo,
  );
  useEventListener(
    ref,
    "forge-ai-chat-header-expand",
    props.onForgeAiChatHeaderExpand,
  );
  useEventListener(
    ref,
    "forge-ai-chat-header-minimize",
    props.onForgeAiChatHeaderMinimize,
  );

  return React.createElement(
    "forge-ai-chat-header",
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
      "minimize-icon": props.minimizeIcon || props["minimize-icon"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      "show-expand-button": props.showExpandButton ? true : undefined,
      "show-minimize-button": props.showMinimizeButton ? true : undefined,
      expanded: props.expanded ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-chat-header";
import { useEventListener, useProperties } from "./react-utils.js";

export const ForgeAiChatHeader = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    showExpandButton,
    showMinimizeButton,
    expanded,
    minimizeIcon,
    titleText,
    options,
    exportOption,
    clearOption,
    agentInfo,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-ai-chat-header-export",
    props.onForgeAiChatHeaderExport,
  );
  useEventListener(
    ref,
    "forge-ai-chat-header-clear",
    props.onForgeAiChatHeaderClear,
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

  /** Properties - run whenever a property has changed */
  useProperties(ref, "agentInfo", props.agentInfo);

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
      "title-text": props.titleText || props["title-text"],
      options: props.options,
      "export-option": props.exportOption || props["export-option"],
      "clear-option": props.clearOption || props["clear-option"],
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

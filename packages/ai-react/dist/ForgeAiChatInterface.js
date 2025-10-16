import React, { forwardRef } from "react";
import "@tylertech/forge-ai/ai-chat-interface";

export const ForgeAiChatInterface = forwardRef((props, forwardedRef) => {
  const {
    showExpandButton,
    showMinimizeButton,
    expanded,
    minimizeIcon,
    ...filteredProps
  } = props;

  return React.createElement(
    "forge-ai-chat-interface",
    {
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

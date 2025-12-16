import React, { forwardRef } from "react";
import "@tylertech/forge-ai/ai-chat-interface";

export const ForgeAiChatInterface = forwardRef((props, forwardedRef) => {
  return React.createElement(
    "forge-ai-chat-interface",
    {
      ...props,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      style: { ...props.style },
    },
    props.children,
  );
});

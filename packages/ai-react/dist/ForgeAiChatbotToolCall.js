import React, { forwardRef } from "react";
import "@tylertech/forge-ai/ai-chatbot";

export const ForgeAiChatbotToolCall = forwardRef((props, forwardedRef) => {
  return React.createElement(
    "forge-ai-chatbot-tool-call",
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

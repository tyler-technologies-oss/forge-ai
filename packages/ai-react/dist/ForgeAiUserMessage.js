import React, { forwardRef } from "react";
import "@tylertech/forge-ai/ai-user-message";

export const ForgeAiUserMessage = forwardRef((props, forwardedRef) => {
  return React.createElement(
    "forge-ai-user-message",
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

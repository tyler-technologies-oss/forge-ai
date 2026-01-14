import React, { forwardRef } from "react";
import "@tylertech/forge-ai/ai-response-message";

export const ForgeAiResponseMessage = forwardRef((props, forwardedRef) => {
  return React.createElement(
    "forge-ai-response-message",
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

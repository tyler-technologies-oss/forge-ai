import React, { forwardRef } from "react";
import "@tylertech/forge-ai/ai-thinking-indicator";

export const ForgeAiThinkingIndicator = forwardRef((props, forwardedRef) => {
  return React.createElement(
    "forge-ai-thinking-indicator",
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

import React, { forwardRef } from "react";
import "@tylertech/forge-ai/ai-reasoning/reasoning-content";

export const ForgeAiReasoningContent = forwardRef((props, forwardedRef) => {
  return React.createElement(
    "forge-ai-reasoning-content",
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

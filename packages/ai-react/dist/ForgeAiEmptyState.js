import React, { forwardRef } from "react";
import "@tylertech/forge-ai/ai-empty-state";

export const ForgeAiEmptyState = forwardRef((props, forwardedRef) => {
  return React.createElement(
    "forge-ai-empty-state",
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

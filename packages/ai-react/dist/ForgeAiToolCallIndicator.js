import React, { forwardRef } from "react";
import "@tylertech/forge-ai/ai-tool-call-indicator";

export const ForgeAiToolCallIndicator = forwardRef((props, forwardedRef) => {
  const { debugMode, ...filteredProps } = props;

  return React.createElement(
    "forge-ai-tool-call-indicator",
    {
      ...filteredProps,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      "debug-mode": props.debugMode ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

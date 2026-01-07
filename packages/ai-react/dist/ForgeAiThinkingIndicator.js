import React, { forwardRef } from "react";
import "@tylertech/forge-ai/ai-thinking-indicator";

export const ForgeAiThinkingIndicator = forwardRef((props, forwardedRef) => {
  const { showText, initialDelay, cycleInterval, ...filteredProps } = props;

  return React.createElement(
    "forge-ai-thinking-indicator",
    {
      ...filteredProps,
      "initial-delay": props.initialDelay || props["initial-delay"],
      "cycle-interval": props.cycleInterval || props["cycle-interval"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      "show-text": props.showText ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

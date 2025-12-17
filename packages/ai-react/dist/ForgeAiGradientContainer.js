import React, { forwardRef } from "react";
import "@tylertech/forge-ai/ai-gradient-container";

export const ForgeAiGradientContainer = forwardRef((props, forwardedRef) => {
  const { variant, ...filteredProps } = props;

  return React.createElement(
    "forge-ai-gradient-container",
    {
      ...filteredProps,
      variant: props.variant,
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

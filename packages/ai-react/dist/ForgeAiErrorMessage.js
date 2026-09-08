import React, { forwardRef } from "react";
import "@tylertech/forge-ai/ai-error-message";

export const ForgeAiErrorMessage = forwardRef((props, forwardedRef) => {
  const { density, ...filteredProps } = props;

  return React.createElement(
    "forge-ai-error-message",
    {
      ...filteredProps,
      density: props.density,
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

import React, { forwardRef } from "react";
import "@tylertech/forge-ai/ai-spinner";

export const ForgeAiSpinner = forwardRef((props, forwardedRef) => {
  const { size, ...filteredProps } = props;

  return React.createElement(
    "forge-ai-spinner",
    {
      ...filteredProps,
      size: props.size,
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

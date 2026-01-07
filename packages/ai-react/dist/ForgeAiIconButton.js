import React, { forwardRef } from "react";
import "@tylertech/forge-ai/ai-icon-button";

export const ForgeAiIconButton = forwardRef((props, forwardedRef) => {
  const { disabled, ...filteredProps } = props;

  return React.createElement(
    "forge-ai-icon-button",
    {
      ...filteredProps,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      disabled: props.disabled ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

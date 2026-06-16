import React, { forwardRef } from "react";
import "@tylertech/forge-ai/ai-copy-button";

export const ForgeAiCopyButton = forwardRef((props, forwardedRef) => {
  const { disabled, value, ...filteredProps } = props;

  return React.createElement(
    "forge-ai-copy-button",
    {
      ...filteredProps,
      value: props.value,
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

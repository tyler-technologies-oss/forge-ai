import React, { forwardRef } from "react";
import "@tylertech/forge-ai/ai-fab";

export const ForgeAiFab = forwardRef((props, forwardedRef) => {
  const { disabled, extended, ...filteredProps } = props;

  return React.createElement(
    "forge-ai-fab",
    {
      ...filteredProps,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      disabled: props.disabled ? true : undefined,
      extended: props.extended ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

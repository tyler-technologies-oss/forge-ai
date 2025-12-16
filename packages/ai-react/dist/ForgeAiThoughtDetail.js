import React, { forwardRef } from "react";
import "@tylertech/forge-ai/ai-chain-of-thought/thought-detail";

export const ForgeAiThoughtDetail = forwardRef((props, forwardedRef) => {
  return React.createElement(
    "forge-ai-thought-detail",
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

import React, { forwardRef } from "react";
import "@tylertech/forge-ai/ai-chain-of-thought/thought-image";

export const ForgeAiThoughtImage = forwardRef((props, forwardedRef) => {
  const { step, ...filteredProps } = props;

  return React.createElement(
    "forge-ai-thought-image",
    {
      ...filteredProps,
      step: props.step,
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

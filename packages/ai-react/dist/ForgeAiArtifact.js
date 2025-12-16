import React, { forwardRef } from "react";
import "@tylertech/forge-ai/ai-artifact";

export const ForgeAiArtifact = forwardRef((props, forwardedRef) => {
  return React.createElement(
    "forge-ai-artifact",
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

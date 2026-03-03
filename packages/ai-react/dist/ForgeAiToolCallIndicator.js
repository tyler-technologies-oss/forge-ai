import React, { forwardRef } from "react";
import "@tylertech/forge-ai/ai-tool-call-indicator";

export const ForgeAiToolCallIndicator = forwardRef((props, forwardedRef) => {
  const { complete, elapsedMs, ...filteredProps } = props;

  return React.createElement(
    "forge-ai-tool-call-indicator",
    {
      ...filteredProps,
      "elapsed-ms": props.elapsedMs || props["elapsed-ms"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      complete: props.complete ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

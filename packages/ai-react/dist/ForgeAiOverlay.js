import React, { forwardRef } from "react";
import "@tylertech/forge-ai/core/overlay";

export const ForgeAiOverlay = forwardRef((props, forwardedRef) => {
  const { flip, shift, open, anchor, placement, ...filteredProps } = props;

  return React.createElement(
    "forge-ai-overlay",
    {
      ...filteredProps,
      anchor: props.anchor,
      placement: props.placement,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      flip: props.flip ? true : undefined,
      shift: props.shift ? true : undefined,
      open: props.open ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

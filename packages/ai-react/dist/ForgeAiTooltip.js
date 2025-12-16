import React, { forwardRef } from "react";
import "@tylertech/forge-ai/core/tooltip";

export const ForgeAiTooltip = forwardRef((props, forwardedRef) => {
  const { open, text, placement, trigger, delay, hideDelay, ...filteredProps } =
    props;

  return React.createElement(
    "forge-ai-tooltip",
    {
      ...filteredProps,
      for: props.for,
      text: props.text,
      placement: props.placement,
      trigger: props.trigger,
      delay: props.delay,
      "hide-delay": props.hideDelay || props["hide-delay"],
      class: props.className,
      exportparts: props.exportparts,
      part: props.part,
      tabindex: props.tabIndex,
      open: props.open ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

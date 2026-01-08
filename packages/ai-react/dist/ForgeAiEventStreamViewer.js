import React, { forwardRef } from "react";
import "@tylertech/forge-ai/ai-event-stream-viewer";

export const ForgeAiEventStreamViewer = forwardRef((props, forwardedRef) => {
  return React.createElement(
    "forge-ai-event-stream-viewer",
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

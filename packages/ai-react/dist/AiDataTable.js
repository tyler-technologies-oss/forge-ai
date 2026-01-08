import React, { forwardRef } from "react";
import "@tylertech/forge-ai/tools/ai-data-table";

export const AiDataTable = forwardRef((props, forwardedRef) => {
  return React.createElement(
    "ai-data-table",
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

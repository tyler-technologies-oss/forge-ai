import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/tools/ai-data-table";
import { useProperties } from "./react-utils.js";

export const ForgeAiToolDataTable = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { toolCall, ...filteredProps } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, "toolCall", props.toolCall);

  return React.createElement(
    "forge-ai-tool-data-table",
    {
      ref: (node) => {
        ref.current = node;
        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          forwardedRef.current = node;
        }
      },
      ...filteredProps,
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

import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-reasoning-header";
import { useEventListener } from "./react-utils.js";

export const ForgeAiReasoningHeader = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { expanded, reasoning, ...filteredProps } = props;

  /** Event listeners - run once */
  useEventListener(ref, "toggle", props.onToggle);

  return React.createElement(
    "forge-ai-reasoning-header",
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
      expanded: props.expanded ? true : undefined,
      reasoning: props.reasoning ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

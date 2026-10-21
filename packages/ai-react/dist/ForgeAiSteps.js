import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-steps";
import { useProperties } from "./react-utils.js";

export const ForgeAiSteps = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { running, steps, ...filteredProps } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, "steps", props.steps);

  return React.createElement(
    "forge-ai-steps",
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
      running: props.running ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

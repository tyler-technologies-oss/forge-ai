import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-agent-info";
import { useProperties } from "./react-utils.js";

export const ForgeAiAgentInfo = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { agentInfo, ...filteredProps } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, "agentInfo", props.agentInfo);

  return React.createElement(
    "forge-ai-agent-info",
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

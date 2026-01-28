import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-agent-selector";
import { useEventListener, useProperties } from "./react-utils.js";

export const ForgeAiAgentSelector = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { disabled, selectedAgentId, titleText, agents, ...filteredProps } =
    props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-ai-agent-selector-change",
    props.onForgeAiAgentSelectorChange,
  );

  /** Properties - run whenever a property has changed */
  useProperties(ref, "agents", props.agents);

  return React.createElement(
    "forge-ai-agent-selector",
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
      "selected-agent-id": props.selectedAgentId || props["selected-agent-id"],
      "title-text": props.titleText || props["title-text"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      disabled: props.disabled ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-slash-command-menu";
import { useEventListener } from "./react-utils.js";

export const ForgeAiSlashCommandMenu = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { open, filterQuery, ...filteredProps } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-ai-slash-command-menu-select",
    props.onForgeAiSlashCommandMenuSelect,
  );
  useEventListener(
    ref,
    "forge-ai-slash-command-menu-close",
    props.onForgeAiSlashCommandMenuClose,
  );

  return React.createElement(
    "forge-ai-slash-command-menu",
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
      "filter-query": props.filterQuery || props["filter-query"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      open: props.open ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

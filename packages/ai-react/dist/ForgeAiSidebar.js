import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-sidebar";
import { useEventListener } from "./react-utils.js";

export const ForgeAiSidebar = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { open, ...filteredProps } = props;

  /** Event listeners - run once */
  useEventListener(ref, "forge-ai-sidebar-open", props.onForgeAiSidebarOpen);
  useEventListener(ref, "forge-ai-sidebar-close", props.onForgeAiSidebarClose);

  return React.createElement(
    "forge-ai-sidebar",
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
      open: props.open ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

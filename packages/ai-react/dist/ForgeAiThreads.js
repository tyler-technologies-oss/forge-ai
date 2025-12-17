import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-threads";
import { useEventListener } from "./react-utils.js";

export const ForgeAiThreads = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { threads, ...filteredProps } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-ai-threads-select",
    props.onForgeAiThreadsSelect,
  );
  useEventListener(
    ref,
    "forge-ai-threads-new-chat",
    props.onForgeAiThreadsNewChat,
  );
  useEventListener(
    ref,
    "forge-ai-threads-clear-history",
    props.onForgeAiThreadsClearHistory,
  );

  return React.createElement(
    "forge-ai-threads",
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
      threads: props.threads,
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

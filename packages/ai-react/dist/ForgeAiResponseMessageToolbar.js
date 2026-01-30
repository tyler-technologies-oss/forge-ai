import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-response-message-toolbar";
import { useEventListener } from "./react-utils.js";

export const ForgeAiResponseMessageToolbar = forwardRef(
  (props, forwardedRef) => {
    const ref = useRef(null);
    const { enableReactions, feedbackType, feedbackReason, ...filteredProps } =
      props;

    /** Event listeners - run once */
    useEventListener(
      ref,
      "forge-ai-response-message-toolbar-action",
      props.onForgeAiResponseMessageToolbarAction,
    );
    useEventListener(
      ref,
      "forge-ai-response-message-toolbar-feedback",
      props.onForgeAiResponseMessageToolbarFeedback,
    );

    return React.createElement(
      "forge-ai-response-message-toolbar",
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
        "feedback-type": props.feedbackType || props["feedback-type"],
        "feedback-reason": props.feedbackReason || props["feedback-reason"],
        class: props.className,
        exportparts: props.exportparts,
        for: props.htmlFor,
        part: props.part,
        tabindex: props.tabIndex,
        "enable-reactions": props.enableReactions ? true : undefined,
        style: { ...props.style },
      },
      props.children,
    );
  },
);

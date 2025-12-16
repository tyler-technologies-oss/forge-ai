import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-modal";
import { useEventListener } from "./react-utils.js";

export const ForgeAiModal = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { open, fullscreen, ...filteredProps } = props;

  /** Event listeners - run once */
  useEventListener(ref, "forge-ai-modal-open", props.onForgeAiModalOpen);
  useEventListener(ref, "forge-ai-modal-close", props.onForgeAiModalClose);
  useEventListener(
    ref,
    "forge-ai-modal-fullscreen-change",
    props.onForgeAiModalFullscreenChange,
  );

  return React.createElement(
    "forge-ai-modal",
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
      fullscreen: props.fullscreen ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

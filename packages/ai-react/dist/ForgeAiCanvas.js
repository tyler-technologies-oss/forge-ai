import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-canvas";
import { useEventListener } from "./react-utils.js";

export const ForgeAiCanvas = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { titleText, headingLevel, closeLabel, ...filteredProps } = props;

  /** Event listeners - run once */
  useEventListener(ref, "forge-ai-canvas-close", props.onForgeAiCanvasClose);

  return React.createElement(
    "forge-ai-canvas",
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
      "title-text": props.titleText || props["title-text"],
      "heading-level": props.headingLevel || props["heading-level"],
      "close-label": props.closeLabel || props["close-label"],
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

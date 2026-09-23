import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-artifact-card";
import { useEventListener } from "./react-utils.js";

export const ForgeAiArtifactCardGroup = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    expanded,
    visibleCount,
    showMoreText,
    showLessText,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-ai-artifact-card-group-toggle",
    props.onForgeAiArtifactCardGroupToggle,
  );

  return React.createElement(
    "forge-ai-artifact-card-group",
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
      "visible-count": props.visibleCount || props["visible-count"],
      "show-more-text": props.showMoreText || props["show-more-text"],
      "show-less-text": props.showLessText || props["show-less-text"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      expanded: props.expanded ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

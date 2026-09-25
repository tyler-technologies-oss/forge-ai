import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-artifact-card";
import { useEventListener } from "./react-utils.js";

export const ForgeAiArtifactCard = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    active,
    disabled,
    titleText,
    subtitleText,
    assetId,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-ai-artifact-card-open",
    props.onForgeAiArtifactCardOpen,
  );

  return React.createElement(
    "forge-ai-artifact-card",
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
      "subtitle-text": props.subtitleText || props["subtitle-text"],
      "asset-id": props.assetId || props["asset-id"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      active: props.active ? true : undefined,
      disabled: props.disabled ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

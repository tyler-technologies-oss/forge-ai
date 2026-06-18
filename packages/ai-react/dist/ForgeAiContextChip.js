import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-context-chip";
import { useEventListener } from "./react-utils.js";

export const ForgeAiContextChip = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    removable,
    loading,
    id,
    label,
    description,
    sublabel,
    type,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-ai-context-chip-remove",
    props.onForgeAiContextChipRemove,
  );

  return React.createElement(
    "forge-ai-context-chip",
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
      id: props.id,
      label: props.label,
      description: props.description,
      sublabel: props.sublabel,
      type: props.type,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      removable: props.removable ? true : undefined,
      loading: props.loading ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

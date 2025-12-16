import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-suggestions";
import { useEventListener, useProperties } from "./react-utils.js";

export const ForgeAiSuggestions = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { variant, suggestions, ...filteredProps } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-ai-suggestions-select",
    props.onForgeAiSuggestionsSelect,
  );

  /** Properties - run whenever a property has changed */
  useProperties(ref, "suggestions", props.suggestions);

  return React.createElement(
    "forge-ai-suggestions",
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
      variant: props.variant,
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

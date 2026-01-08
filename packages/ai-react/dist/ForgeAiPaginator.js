import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/tools/ai-paginator";
import { useEventListener } from "./react-utils.js";

export const ForgeAiPaginator = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { disabled, currentPage, totalPages, ...filteredProps } = props;

  /** Event listeners - run once */
  useEventListener(ref, "page-change", props.onPageChange);

  return React.createElement(
    "forge-ai-paginator",
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
      "current-page": props.currentPage || props["current-page"],
      "total-pages": props.totalPages || props["total-pages"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      disabled: props.disabled ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

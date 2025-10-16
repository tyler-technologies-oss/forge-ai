import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-dropdown-menu";
import { useEventListener } from "./react-utils.js";

export const ForgeAiDropdownMenu = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { open, disabled, variant, selectionMode, value, ...filteredProps } =
    props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-ai-dropdown-menu-change",
    props.onForgeAiDropdownMenuChange,
  );
  useEventListener(ref, "eventName", props.onEventName);

  return React.createElement(
    "forge-ai-dropdown-menu",
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
      "selection-mode": props.selectionMode || props["selection-mode"],
      value: props.value,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      open: props.open ? true : undefined,
      disabled: props.disabled ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-dropdown-menu";
import { useProperties } from "./react-utils.js";

export const ForgeAiDropdownMenuItem = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    selected,
    disabled,
    value,
    selectionMode,
    submenuTrigger,
    submenuOpenDelay,
    submenuCloseDelay,
    labelText,
    ...filteredProps
  } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, "labelText", props.labelText);

  return React.createElement(
    "forge-ai-dropdown-menu-item",
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
      value: props.value,
      "selection-mode": props.selectionMode || props["selection-mode"],
      "submenu-trigger": props.submenuTrigger || props["submenu-trigger"],
      "submenu-open-delay":
        props.submenuOpenDelay || props["submenu-open-delay"],
      "submenu-close-delay":
        props.submenuCloseDelay || props["submenu-close-delay"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      selected: props.selected ? true : undefined,
      disabled: props.disabled ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

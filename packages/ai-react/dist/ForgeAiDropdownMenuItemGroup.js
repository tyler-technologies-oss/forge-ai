import React, { forwardRef } from "react";
import "@tylertech/forge-ai/ai-dropdown-menu";

export const ForgeAiDropdownMenuItemGroup = forwardRef(
  (props, forwardedRef) => {
    return React.createElement(
      "forge-ai-dropdown-menu-item-group",
      {
        ...props,
        class: props.className,
        exportparts: props.exportparts,
        for: props.htmlFor,
        part: props.part,
        tabindex: props.tabIndex,
        style: { ...props.style },
      },
      props.children,
    );
  },
);

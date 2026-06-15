import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-thread-actions-menu";
import { useEventListener } from "./react-utils.js";

export const ForgeAiThreadActionsMenu = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { showRename, showDelete, thread, ...filteredProps } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-ai-thread-actions-menu-rename",
    props.onForgeAiThreadActionsMenuRename,
  );
  useEventListener(
    ref,
    "forge-ai-thread-actions-menu-delete-click",
    props.onForgeAiThreadActionsMenuDeleteClick,
  );
  useEventListener(
    ref,
    "forge-ai-thread-actions-menu-open",
    props.onForgeAiThreadActionsMenuOpen,
  );
  useEventListener(
    ref,
    "forge-ai-thread-actions-menu-close",
    props.onForgeAiThreadActionsMenuClose,
  );

  return React.createElement(
    "forge-ai-thread-actions-menu",
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
      thread: props.thread,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      "show-rename": props.showRename ? true : undefined,
      "show-delete": props.showDelete ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

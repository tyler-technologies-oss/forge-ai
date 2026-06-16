import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-threads-search";
import { useEventListener } from "./react-utils.js";

export const ForgeAiThreadsSearch = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    showThreadRename,
    showThreadDelete,
    threads,
    totalChats,
    placeholder,
    emptyMessage,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-ai-threads-search-query",
    props.onForgeAiThreadsSearchQuery,
  );
  useEventListener(
    ref,
    "forge-ai-threads-search-load-more",
    props.onForgeAiThreadsSearchLoadMore,
  );
  useEventListener(
    ref,
    "forge-ai-threads-search-select",
    props.onForgeAiThreadsSearchSelect,
  );
  useEventListener(
    ref,
    "forge-ai-threads-search-new-chat",
    props.onForgeAiThreadsSearchNewChat,
  );
  useEventListener(
    ref,
    "forge-ai-threads-search-rename",
    props.onForgeAiThreadsSearchRename,
  );
  useEventListener(
    ref,
    "forge-ai-threads-search-delete",
    props.onForgeAiThreadsSearchDelete,
  );

  return React.createElement(
    "forge-ai-threads-search",
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
      threads: props.threads,
      "total-chats": props.totalChats || props["total-chats"],
      placeholder: props.placeholder,
      "empty-message": props.emptyMessage || props["empty-message"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      "show-thread-rename": props.showThreadRename ? true : undefined,
      "show-thread-delete": props.showThreadDelete ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

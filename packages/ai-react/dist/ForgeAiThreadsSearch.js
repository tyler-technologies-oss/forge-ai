import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-threads-search";
import { useEventListener } from "./react-utils.js";

export const ForgeAiThreadsSearch = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    showNewChatButton,
    showBackButton,
    showSearch,
    showThreadRename,
    showThreadDelete,
    threads,
    headerTitle,
    totalChats,
    placeholder,
    emptyMessage,
    selectedThreadId,
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
  useEventListener(
    ref,
    "forge-ai-threads-search-delete-confirm",
    props.onForgeAiThreadsSearchDeleteConfirm,
  );
  useEventListener(
    ref,
    "forge-ai-threads-search-back",
    props.onForgeAiThreadsSearchBack,
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
      "header-title": props.headerTitle || props["header-title"],
      "total-chats": props.totalChats || props["total-chats"],
      placeholder: props.placeholder,
      "empty-message": props.emptyMessage || props["empty-message"],
      "selected-thread-id":
        props.selectedThreadId || props["selected-thread-id"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      "show-new-chat-button": props.showNewChatButton ? true : undefined,
      "show-back-button": props.showBackButton ? true : undefined,
      "show-search": props.showSearch ? true : undefined,
      "show-thread-rename": props.showThreadRename ? true : undefined,
      "show-thread-delete": props.showThreadDelete ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

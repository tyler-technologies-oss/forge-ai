import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-threads";
import { useEventListener } from "./react-utils.js";

export const ForgeAiThreads = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    showThreadRename,
    showThreadDelete,
    threads,
    totalChats,
    selectedThreadId,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-ai-threads-select",
    props.onForgeAiThreadsSelect,
  );
  useEventListener(
    ref,
    "forge-ai-threads-new-chat",
    props.onForgeAiThreadsNewChat,
  );
  useEventListener(
    ref,
    "forge-ai-threads-search-chats",
    props.onForgeAiThreadsSearchChats,
  );
  useEventListener(
    ref,
    "forge-ai-threads-load-more",
    props.onForgeAiThreadsLoadMore,
  );
  useEventListener(
    ref,
    "forge-ai-threads-rename",
    props.onForgeAiThreadsRename,
  );
  useEventListener(
    ref,
    "forge-ai-threads-delete",
    props.onForgeAiThreadsDelete,
  );

  return React.createElement(
    "forge-ai-threads",
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
      "selected-thread-id":
        props.selectedThreadId || props["selected-thread-id"],
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

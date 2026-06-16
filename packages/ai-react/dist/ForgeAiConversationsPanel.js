import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-conversations-panel";
import { useEventListener } from "./react-utils.js";

export const ForgeAiConversationsPanel = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    showConversationRename,
    showConversationDelete,
    recentThreads,
    totalChats,
    selectedThreadId,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-ai-conversations-panel-select",
    props.onForgeAiConversationsPanelSelect,
  );
  useEventListener(
    ref,
    "forge-ai-conversations-panel-new-chat",
    props.onForgeAiConversationsPanelNewChat,
  );
  useEventListener(
    ref,
    "forge-ai-conversations-panel-close",
    props.onForgeAiConversationsPanelClose,
  );
  useEventListener(
    ref,
    "forge-ai-conversations-panel-search",
    props.onForgeAiConversationsPanelSearch,
  );
  useEventListener(
    ref,
    "forge-ai-conversations-panel-load-more",
    props.onForgeAiConversationsPanelLoadMore,
  );
  useEventListener(
    ref,
    "forge-ai-conversations-panel-rename",
    props.onForgeAiConversationsPanelRename,
  );
  useEventListener(
    ref,
    "forge-ai-conversations-panel-delete",
    props.onForgeAiConversationsPanelDelete,
  );

  return React.createElement(
    "forge-ai-conversations-panel",
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
      recentThreads: props.recentThreads,
      "total-chats": props.totalChats || props["total-chats"],
      "selected-thread-id":
        props.selectedThreadId || props["selected-thread-id"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      "show-conversation-rename": props.showConversationRename
        ? true
        : undefined,
      "show-conversation-delete": props.showConversationDelete
        ? true
        : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

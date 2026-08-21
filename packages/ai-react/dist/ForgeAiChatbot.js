import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-chatbot";
import { useEventListener, useProperties } from "./react-utils.js";

export const ForgeAiChatbot = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    showExpandButton,
    showMinimizeButton,
    expanded,
    showConversationsButton,
    conversationsOpen,
    showThreadRename,
    showThreadDelete,
    threadsLoading,
    enableReactions,
    debugMode,
    minimizeIcon,
    selectedThreadId,
    fileUpload,
    maxFileSize,
    acceptedFileTypes,
    voiceInput,
    placeholder,
    titleText,
    headingLevel,
    disclaimerText,
    debugCommand,
    exportOption,
    clearOption,
    selectedAgentId,
    agentInfo,
    agents,
    suggestions,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-ai-chatbot-connected",
    props.onForgeAiChatbotConnected,
  );
  useEventListener(
    ref,
    "forge-ai-chatbot-disconnected",
    props.onForgeAiChatbotDisconnected,
  );
  useEventListener(
    ref,
    "forge-ai-chatbot-run-started",
    props.onForgeAiChatbotRunStarted,
  );
  useEventListener(
    ref,
    "forge-ai-chatbot-message-sent",
    props.onForgeAiChatbotMessageSent,
  );
  useEventListener(
    ref,
    "forge-ai-chatbot-message-received",
    props.onForgeAiChatbotMessageReceived,
  );
  useEventListener(
    ref,
    "forge-ai-chatbot-tool-call",
    props.onForgeAiChatbotToolCall,
  );
  useEventListener(ref, "forge-ai-chatbot-error", props.onForgeAiChatbotError);
  useEventListener(
    ref,
    "forge-ai-chatbot-expand",
    props.onForgeAiChatbotExpand,
  );
  useEventListener(
    ref,
    "forge-ai-chatbot-minimize",
    props.onForgeAiChatbotMinimize,
  );
  useEventListener(ref, "forge-ai-chatbot-clear", props.onForgeAiChatbotClear);
  useEventListener(ref, "forge-ai-chatbot-info", props.onForgeAiChatbotInfo);
  useEventListener(
    ref,
    "forge-ai-chatbot-response-feedback",
    props.onForgeAiChatbotResponseFeedback,
  );
  useEventListener(
    ref,
    "forge-ai-chatbot-agent-change",
    props.onForgeAiChatbotAgentChange,
  );
  useEventListener(
    ref,
    "forge-ai-chatbot-thread-state-change",
    props.onForgeAiChatbotThreadStateChange,
  );
  useEventListener(
    ref,
    "forge-ai-chatbot-conversations-open",
    props.onForgeAiChatbotConversationsOpen,
  );
  useEventListener(
    ref,
    "forge-ai-chatbot-conversations-close",
    props.onForgeAiChatbotConversationsClose,
  );
  useEventListener(
    ref,
    "forge-ai-chatbot-thread-select",
    props.onForgeAiChatbotThreadSelect,
  );
  useEventListener(
    ref,
    "forge-ai-chatbot-new-chat",
    props.onForgeAiChatbotNewChat,
  );
  useEventListener(
    ref,
    "forge-ai-chatbot-thread-search",
    props.onForgeAiChatbotThreadSearch,
  );
  useEventListener(
    ref,
    "forge-ai-chatbot-thread-load-more",
    props.onForgeAiChatbotThreadLoadMore,
  );
  useEventListener(
    ref,
    "forge-ai-chatbot-thread-rename",
    props.onForgeAiChatbotThreadRename,
  );
  useEventListener(
    ref,
    "forge-ai-chatbot-thread-delete",
    props.onForgeAiChatbotThreadDelete,
  );

  /** Properties - run whenever a property has changed */
  useProperties(ref, "agentInfo", props.agentInfo);
  useProperties(ref, "agents", props.agents);
  useProperties(ref, "suggestions", props.suggestions);

  return React.createElement(
    "forge-ai-chatbot",
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
      "minimize-icon": props.minimizeIcon || props["minimize-icon"],
      "selected-thread-id":
        props.selectedThreadId || props["selected-thread-id"],
      "file-upload": props.fileUpload || props["file-upload"],
      "max-file-size": props.maxFileSize || props["max-file-size"],
      "accepted-file-types":
        props.acceptedFileTypes || props["accepted-file-types"],
      "voice-input": props.voiceInput || props["voice-input"],
      placeholder: props.placeholder,
      "title-text": props.titleText || props["title-text"],
      "heading-level": props.headingLevel || props["heading-level"],
      "disclaimer-text": props.disclaimerText || props["disclaimer-text"],
      "debug-command": props.debugCommand || props["debug-command"],
      "export-option": props.exportOption || props["export-option"],
      "clear-option": props.clearOption || props["clear-option"],
      "selected-agent-id": props.selectedAgentId || props["selected-agent-id"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      "show-expand-button": props.showExpandButton ? true : undefined,
      "show-minimize-button": props.showMinimizeButton ? true : undefined,
      expanded: props.expanded ? true : undefined,
      "show-conversations-button": props.showConversationsButton
        ? true
        : undefined,
      "conversations-open": props.conversationsOpen ? true : undefined,
      "show-thread-rename": props.showThreadRename ? true : undefined,
      "show-thread-delete": props.showThreadDelete ? true : undefined,
      "threads-loading": props.threadsLoading ? true : undefined,
      "enable-reactions": props.enableReactions ? true : undefined,
      "debug-mode": props.debugMode ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

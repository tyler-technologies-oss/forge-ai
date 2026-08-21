import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-chatbot-launcher";
import { useEventListener, useProperties } from "./react-utils.js";

export const ForgeAiChatbotLauncher = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    showConversationRename,
    showConversationDelete,
    threadsLoading,
    enableReactions,
    debugMode,
    descriptionText,
    threadName,
    totalThreads,
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
    threads,
    agentInfo,
    agents,
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
    "forge-ai-chatbot-launcher-conversation-start",
    props.onForgeAiChatbotLauncherConversationStart,
  );
  useEventListener(
    ref,
    "forge-ai-chatbot-response-feedback",
    props.onForgeAiChatbotResponseFeedback,
  );
  useEventListener(ref, "forge-ai-chatbot-info", props.onForgeAiChatbotInfo);
  useEventListener(
    ref,
    "forge-ai-chatbot-agent-change",
    props.onForgeAiChatbotAgentChange,
  );
  useEventListener(
    ref,
    "forge-ai-chatbot-launcher-thread-rename",
    props.onForgeAiChatbotLauncherThreadRename,
  );
  useEventListener(
    ref,
    "forge-ai-chatbot-launcher-thread-delete",
    props.onForgeAiChatbotLauncherThreadDelete,
  );
  useEventListener(
    ref,
    "forge-ai-chatbot-launcher-thread-select",
    props.onForgeAiChatbotLauncherThreadSelect,
  );
  useEventListener(
    ref,
    "forge-ai-chatbot-launcher-thread-search",
    props.onForgeAiChatbotLauncherThreadSearch,
  );
  useEventListener(
    ref,
    "forge-ai-chatbot-launcher-thread-load-more",
    props.onForgeAiChatbotLauncherThreadLoadMore,
  );
  useEventListener(
    ref,
    "forge-ai-chatbot-launcher-new-chat",
    props.onForgeAiChatbotLauncherNewChat,
  );

  /** Properties - run whenever a property has changed */
  useProperties(ref, "threads", props.threads);
  useProperties(ref, "agentInfo", props.agentInfo);
  useProperties(ref, "agents", props.agents);

  return React.createElement(
    "forge-ai-chatbot-launcher",
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
      "description-text": props.descriptionText || props["description-text"],
      "thread-name": props.threadName || props["thread-name"],
      "total-threads": props.totalThreads || props["total-threads"],
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
      "show-conversation-rename": props.showConversationRename
        ? true
        : undefined,
      "show-conversation-delete": props.showConversationDelete
        ? true
        : undefined,
      "threads-loading": props.threadsLoading ? true : undefined,
      "enable-reactions": props.enableReactions ? true : undefined,
      "debug-mode": props.debugMode ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

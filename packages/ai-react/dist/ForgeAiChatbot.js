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
    enableReactions,
    debugMode,
    minimizeIcon,
    fileUpload,
    voiceInput,
    placeholder,
    titleText,
    headingLevel,
    disclaimerText,
    debugCommand,
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
    "forge-ai-chatbot-conversation-select",
    props.onForgeAiChatbotConversationSelect,
  );
  useEventListener(
    ref,
    "forge-ai-chatbot-new-chat",
    props.onForgeAiChatbotNewChat,
  );
  useEventListener(
    ref,
    "forge-ai-chatbot-conversation-search",
    props.onForgeAiChatbotConversationSearch,
  );
  useEventListener(
    ref,
    "forge-ai-chatbot-conversation-load-more",
    props.onForgeAiChatbotConversationLoadMore,
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
      "file-upload": props.fileUpload || props["file-upload"],
      "voice-input": props.voiceInput || props["voice-input"],
      placeholder: props.placeholder,
      "title-text": props.titleText || props["title-text"],
      "heading-level": props.headingLevel || props["heading-level"],
      "disclaimer-text": props.disclaimerText || props["disclaimer-text"],
      "debug-command": props.debugCommand || props["debug-command"],
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
      "enable-reactions": props.enableReactions ? true : undefined,
      "debug-mode": props.debugMode ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

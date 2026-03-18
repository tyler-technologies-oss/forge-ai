import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-chatbot-launcher";
import { useEventListener, useProperties } from "./react-utils.js";

export const ForgeAiChatbotLauncher = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    enableReactions,
    debugMode,
    descriptionText,
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
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-ai-chatbot-launcher-connected",
    props.onForgeAiChatbotLauncherConnected,
  );
  useEventListener(
    ref,
    "forge-ai-chatbot-launcher-message-sent",
    props.onForgeAiChatbotLauncherMessageSent,
  );
  useEventListener(
    ref,
    "forge-ai-chatbot-launcher-message-received",
    props.onForgeAiChatbotLauncherMessageReceived,
  );
  useEventListener(
    ref,
    "forge-ai-chatbot-launcher-tool-call",
    props.onForgeAiChatbotLauncherToolCall,
  );
  useEventListener(
    ref,
    "forge-ai-chatbot-launcher-error",
    props.onForgeAiChatbotLauncherError,
  );
  useEventListener(
    ref,
    "forge-ai-chatbot-launcher-conversation-start",
    props.onForgeAiChatbotLauncherConversationStart,
  );
  useEventListener(
    ref,
    "forge-ai-chatbot-launcher-response-feedback",
    props.onForgeAiChatbotLauncherResponseFeedback,
  );
  useEventListener(
    ref,
    "forge-ai-chatbot-launcher-info",
    props.onForgeAiChatbotLauncherInfo,
  );
  useEventListener(
    ref,
    "forge-ai-chatbot-launcher-agent-change",
    props.onForgeAiChatbotLauncherAgentChange,
  );

  /** Properties - run whenever a property has changed */
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
      "enable-reactions": props.enableReactions ? true : undefined,
      "debug-mode": props.debugMode ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

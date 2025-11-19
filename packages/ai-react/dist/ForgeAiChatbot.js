import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-chatbot";
import { useEventListener } from "./react-utils.js";

export const ForgeAiChatbot = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    enableFileUpload,
    showExpandButton,
    showMinimizeButton,
    expanded,
    enableReactions,
    placeholder,
    minimizeIcon,
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
      placeholder: props.placeholder,
      "minimize-icon": props.minimizeIcon || props["minimize-icon"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      "enable-file-upload": props.enableFileUpload ? true : undefined,
      "show-expand-button": props.showExpandButton ? true : undefined,
      "show-minimize-button": props.showMinimizeButton ? true : undefined,
      expanded: props.expanded ? true : undefined,
      "enable-reactions": props.enableReactions ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-embedded-chat";
import { useEventListener, useProperties } from "./react-utils.js";

export const ForgeAiEmbeddedChat = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    expanded,
    gradientVariant,
    threadId,
    fileUpload,
    placeholder,
    adapter,
    suggestions,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-ai-embedded-chat-expand",
    props.onForgeAiEmbeddedChatExpand,
  );
  useEventListener(
    ref,
    "forge-ai-embedded-chat-collapse",
    props.onForgeAiEmbeddedChatCollapse,
  );

  /** Properties - run whenever a property has changed */
  useProperties(ref, "adapter", props.adapter);
  useProperties(ref, "suggestions", props.suggestions);

  return React.createElement(
    "forge-ai-embedded-chat",
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
      "gradient-variant": props.gradientVariant || props["gradient-variant"],
      "thread-id": props.threadId || props["thread-id"],
      "file-upload": props.fileUpload || props["file-upload"],
      placeholder: props.placeholder,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      expanded: props.expanded ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

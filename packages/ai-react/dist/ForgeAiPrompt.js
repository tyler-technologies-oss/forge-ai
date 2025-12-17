import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-prompt";
import { useEventListener } from "./react-utils.js";

export const ForgeAiPrompt = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    sendDisabled,
    autofocus,
    inputDisabled,
    cancelOnEscape,
    running,
    placeholder,
    value,
    variant,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, "forge-ai-prompt-send", props.onForgeAiPromptSend);
  useEventListener(ref, "forge-ai-prompt-cancel", props.onForgeAiPromptCancel);
  useEventListener(
    ref,
    "forge-ai-prompt-attachment",
    props.onForgeAiPromptAttachment,
  );
  useEventListener(ref, "forge-ai-prompt-stop", props.onForgeAiPromptStop);

  return React.createElement(
    "forge-ai-prompt",
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
      value: props.value,
      variant: props.variant,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      "send-disabled": props.sendDisabled ? true : undefined,
      autofocus: props.autofocus ? true : undefined,
      "input-disabled": props.inputDisabled ? true : undefined,
      "cancel-on-escape": props.cancelOnEscape ? true : undefined,
      running: props.running ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

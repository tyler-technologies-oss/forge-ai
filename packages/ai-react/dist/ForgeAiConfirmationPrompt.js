import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-confirmation-prompt";
import { useEventListener } from "./react-utils.js";

export const ForgeAiConfirmationPrompt = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { disabled, text, confirmText, denyText, ...filteredProps } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-ai-confirmation-prompt-confirm",
    props.onForgeAiConfirmationPromptConfirm,
  );
  useEventListener(
    ref,
    "forge-ai-confirmation-prompt-deny",
    props.onForgeAiConfirmationPromptDeny,
  );

  return React.createElement(
    "forge-ai-confirmation-prompt",
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
      text: props.text,
      "confirm-text": props.confirmText || props["confirm-text"],
      "deny-text": props.denyText || props["deny-text"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      disabled: props.disabled ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

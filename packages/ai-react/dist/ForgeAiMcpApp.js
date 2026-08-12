import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/tools/ai-mcp-app";
import { useEventListener } from "./react-utils.js";

export const ForgeAiMcpApp = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-ai-mcp-app-open-link",
    props.onForgeAiMcpAppOpenLink,
  );
  useEventListener(
    ref,
    "forge-ai-mcp-app-message",
    props.onForgeAiMcpAppMessage,
  );
  useEventListener(
    ref,
    "forge-ai-mcp-app-logging-message",
    props.onForgeAiMcpAppLoggingMessage,
  );
  useEventListener(
    ref,
    "forge-ai-mcp-app-request-display-mode",
    props.onForgeAiMcpAppRequestDisplayMode,
  );
  useEventListener(
    ref,
    "forge-ai-mcp-app-update-model-context",
    props.onForgeAiMcpAppUpdateModelContext,
  );

  return React.createElement(
    "forge-ai-mcp-app",
    {
      ref: (node) => {
        ref.current = node;
        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          forwardedRef.current = node;
        }
      },
      ...props,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      style: { ...props.style },
    },
    props.children,
  );
});

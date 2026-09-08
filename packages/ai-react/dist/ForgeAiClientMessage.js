import React, { forwardRef } from "react";
import "@tylertech/forge-ai/ai-client-message";

export const ForgeAiClientMessage = forwardRef((props, forwardedRef) => {
  const { kind, header, content, ...filteredProps } = props;

  return React.createElement(
    "forge-ai-client-message",
    {
      ...filteredProps,
      kind: props.kind,
      header: props.header,
      content: props.content,
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

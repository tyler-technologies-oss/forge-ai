import React, { forwardRef } from "react";
import "@tylertech/forge-ai/ai-chain-of-thought/thought-search-result";

export const ForgeAiThoughtSearchResult = forwardRef((props, forwardedRef) => {
  const { step, sources, ...filteredProps } = props;

  return React.createElement(
    "forge-ai-thought-search-result",
    {
      ...filteredProps,
      step: props.step,
      sources: props.sources,
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

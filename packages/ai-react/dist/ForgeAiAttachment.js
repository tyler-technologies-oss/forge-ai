import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-ai/ai-attachment";
import { useEventListener } from "./react-utils.js";

export const ForgeAiAttachment = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { removable, uploading, filename, size, progress, ...filteredProps } =
    props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-ai-attachment-remove",
    props.onForgeAiAttachmentRemove,
  );

  return React.createElement(
    "forge-ai-attachment",
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
      filename: props.filename,
      size: props.size,
      progress: props.progress,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      removable: props.removable ? true : undefined,
      uploading: props.uploading ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});

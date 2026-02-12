import{x as i}from"./iframe-ysd04RiF.js";import"./ai-response-message-toolbar-1BXmkdiy.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,c="forge-ai-response-message-toolbar",p={title:"AI Components/Primitives/Response Message Toolbar",component:c,argTypes:{enableReactions:{control:"boolean",description:"Whether to show thumbs up/down reaction buttons"},feedbackType:{control:"select",options:[void 0,"positive","negative"],description:"The current feedback state"}},args:{enableReactions:!1,feedbackType:void 0},render:s=>{const n=r("forge-ai-response-message-toolbar-action"),t=r("forge-ai-response-message-toolbar-feedback");return i`
      <p style="margin: 0 0 16px 0; color: var(--forge-theme-text-primary);">
        Click any button to see events in the Actions panel below.
      </p>
      <forge-ai-response-message-toolbar
        ?enable-reactions=${s.enableReactions}
        feedback-type=${s.feedbackType||""}
        @forge-ai-response-message-toolbar-action=${n}
        @forge-ai-response-message-toolbar-feedback=${t}>
      </forge-ai-response-message-toolbar>
    `}},e={},o={args:{enableReactions:!0}},a={args:{enableReactions:!0},render:s=>{const n=r("forge-ai-response-message-toolbar-action"),t=r("forge-ai-response-message-toolbar-feedback");return i`
      <div style="max-width: 600px; background: var(--forge-theme-surface); border-radius: 8px; padding: 16px;">
        <div
          style="margin-bottom: 12px; padding: 12px; background: var(--forge-theme-surface-variant); border-radius: 4px; color: var(--forge-theme-text-primary);">
          This is sample AI response content. The toolbar demonstrates how it would appear below an AI response message.
        </div>
        <forge-ai-response-message-toolbar
          ?enable-reactions=${s.enableReactions}
          @forge-ai-response-message-toolbar-action=${n}
          @forge-ai-response-message-toolbar-feedback=${t}>
        </forge-ai-response-message-toolbar>
      </div>
    `}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    enableReactions: true
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    enableReactions: true
  },
  render: (args: any) => {
    const onAction = action('forge-ai-response-message-toolbar-action');
    const onFeedback = action('forge-ai-response-message-toolbar-feedback');
    return html\`
      <div style="max-width: 600px; background: var(--forge-theme-surface); border-radius: 8px; padding: 16px;">
        <div
          style="margin-bottom: 12px; padding: 12px; background: var(--forge-theme-surface-variant); border-radius: 4px; color: var(--forge-theme-text-primary);">
          This is sample AI response content. The toolbar demonstrates how it would appear below an AI response message.
        </div>
        <forge-ai-response-message-toolbar
          ?enable-reactions=\${args.enableReactions}
          @forge-ai-response-message-toolbar-action=\${onAction}
          @forge-ai-response-message-toolbar-feedback=\${onFeedback}>
        </forge-ai-response-message-toolbar>
      </div>
    \`;
  }
}`,...a.parameters?.docs?.source}}};const g=["Demo","WithReactions","InMessageContext"],l=Object.freeze(Object.defineProperty({__proto__:null,Demo:e,InMessageContext:a,WithReactions:o,__namedExportsOrder:g,default:p},Symbol.toStringTag,{value:"Module"}));export{l as A,e as D,o as W};

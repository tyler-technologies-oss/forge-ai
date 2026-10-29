import{x as i}from"./iframe-YR1K9nbB.js";import"./ai-user-message-toolbar-OUW0WJ6E.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,g="forge-ai-user-message-toolbar",d={title:"AI Components/Primitives/User Message Toolbar",component:g,argTypes:{timestamp:{control:"number",description:"Timestamp to display (Unix timestamp in milliseconds)"},streaming:{control:"boolean",description:"Whether the AI is currently streaming a response (disables resend/edit buttons)"}},args:{timestamp:Date.now(),streaming:!1},render:a=>{const t=e("forge-ai-user-message-toolbar-copy"),n=e("forge-ai-user-message-toolbar-resend"),m=e("forge-ai-user-message-toolbar-edit");return i`
      <p style="margin: 0 0 16px 0; color: var(--forge-theme-text-primary);">
        Click any button to see events in the Actions panel below.
      </p>
      <forge-ai-user-message-toolbar
        .timestamp=${a.timestamp}
        ?streaming=${a.streaming}
        @forge-ai-user-message-toolbar-copy=${t}
        @forge-ai-user-message-toolbar-resend=${n}
        @forge-ai-user-message-toolbar-edit=${m}>
      </forge-ai-user-message-toolbar>
    `}},o={},r={args:{streaming:!0}},s={render:()=>{const a=e("forge-ai-user-message-toolbar-copy"),t=e("forge-ai-user-message-toolbar-resend"),n=e("forge-ai-user-message-toolbar-edit");return i`
      <div style="max-width: 600px;">
        <div
          style="margin-left: auto; width: fit-content; margin-bottom: 12px; padding: 12px; background: var(--forge-theme-surface-container-minimum); border-radius: 8px; border-top-right-radius: 0; color: var(--forge-theme-text-primary);">
          This is a sample user message. The toolbar demonstrates how it would appear below a user's message in the
          chat.
        </div>
        <div style="display: flex; justify-content: flex-end;">
          <forge-ai-user-message-toolbar
            .timestamp=${Date.now()}
            @forge-ai-user-message-toolbar-copy=${a}
            @forge-ai-user-message-toolbar-resend=${t}
            @forge-ai-user-message-toolbar-edit=${n}>
          </forge-ai-user-message-toolbar>
        </div>
      </div>
    `}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    streaming: true
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const onCopy = action('forge-ai-user-message-toolbar-copy');
    const onResend = action('forge-ai-user-message-toolbar-resend');
    const onEdit = action('forge-ai-user-message-toolbar-edit');
    return html\`
      <div style="max-width: 600px;">
        <div
          style="margin-left: auto; width: fit-content; margin-bottom: 12px; padding: 12px; background: var(--forge-theme-surface-container-minimum); border-radius: 8px; border-top-right-radius: 0; color: var(--forge-theme-text-primary);">
          This is a sample user message. The toolbar demonstrates how it would appear below a user's message in the
          chat.
        </div>
        <div style="display: flex; justify-content: flex-end;">
          <forge-ai-user-message-toolbar
            .timestamp=\${Date.now()}
            @forge-ai-user-message-toolbar-copy=\${onCopy}
            @forge-ai-user-message-toolbar-resend=\${onResend}
            @forge-ai-user-message-toolbar-edit=\${onEdit}>
          </forge-ai-user-message-toolbar>
        </div>
      </div>
    \`;
  }
}`,...s.parameters?.docs?.source}}};const l=["Demo","Streaming","InMessageContext"],u=Object.freeze(Object.defineProperty({__proto__:null,Demo:o,InMessageContext:s,Streaming:r,__namedExportsOrder:l,default:d},Symbol.toStringTag,{value:"Module"}));export{u as A,o as D,r as S};

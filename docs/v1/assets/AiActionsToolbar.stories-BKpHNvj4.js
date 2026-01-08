import{x as a}from"./iframe-iHczl8pU.js";import"./ai-actions-toolbar-DtcwDNRW.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,i="forge-ai-actions-toolbar",s={title:"AI Components/Primitives/Actions Toolbar",component:i,render:n=>{const t=r("forge-ai-actions-toolbar-action");return a`
      <p style="margin: 0 0 16px 0; color: var(--forge-theme-text-primary);">
        Click any button to see the action event in the Actions panel below.
      </p>
      <forge-ai-actions-toolbar @forge-ai-actions-toolbar-action=${t}></forge-ai-actions-toolbar>
    `}},o={},e={render:n=>{const t=r("forge-ai-actions-toolbar-action");return a`
      <div style="max-width: 600px; background: var(--forge-theme-surface); border-radius: 8px; padding: 16px;">
        <div
          data-copyable
          style="margin-bottom: 12px; padding: 12px; background: var(--forge-theme-surface-variant); border-radius: 4px; color: var(--forge-theme-text-primary);">
          This is sample message content that can be copied using the copy button in the toolbar below. The toolbar
          demonstrates how it would appear in an AI response message context.
        </div>
        <forge-ai-actions-toolbar @forge-ai-actions-toolbar-action=${t}></forge-ai-actions-toolbar>
      </div>
    `}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const onAction = action('forge-ai-actions-toolbar-action');
    return html\`
      <div style="max-width: 600px; background: var(--forge-theme-surface); border-radius: 8px; padding: 16px;">
        <div
          data-copyable
          style="margin-bottom: 12px; padding: 12px; background: var(--forge-theme-surface-variant); border-radius: 4px; color: var(--forge-theme-text-primary);">
          This is sample message content that can be copied using the copy button in the toolbar below. The toolbar
          demonstrates how it would appear in an AI response message context.
        </div>
        <forge-ai-actions-toolbar @forge-ai-actions-toolbar-action=\${onAction}></forge-ai-actions-toolbar>
      </div>
    \`;
  }
}`,...e.parameters?.docs?.source}}};const c=["Demo","InMessageContext"],l=Object.freeze(Object.defineProperty({__proto__:null,Demo:o,InMessageContext:e,__namedExportsOrder:c,default:s},Symbol.toStringTag,{value:"Module"}));export{l as A,o as D};

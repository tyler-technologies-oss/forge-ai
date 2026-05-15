import{x as s}from"./iframe-C4mdDn9Y.js";import"./ai-fab-6QTbiTaR.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,n="forge-ai-fab",a=i("click"),d={title:"AI Components/Primitives/FAB",component:n,render:r=>s`
      <forge-ai-fab .disabled=${r.disabled} .extended=${r.extended} @click=${a}>
        ${r.content}
      </forge-ai-fab>
    `,argTypes:{disabled:{control:"boolean",description:"Whether the button is disabled"},extended:{control:"boolean",description:"Whether the button is extended"},content:{control:"text",description:"The text content of the button"}},args:{disabled:!1,extended:!1,content:"AI Assistant"}},e={},t={args:{disabled:!0}},o={parameters:{controls:{disable:!0}},render:()=>s`
      <forge-ai-fab .extended=${!0} @click=${a}>
        <img slot="icon" src="${"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Crect width='24' height='24' fill='%234A90E2'/%3E%3Ctext x='12' y='16' font-family='Arial, sans-serif' font-size='12' font-weight='bold' fill='white' text-anchor='middle'%3EAC%3C/text%3E%3C/svg%3E"}" alt="Acme Corp" style="width: 24px; height: 24px; border-radius: 50%;" />
        Acme Support
      </forge-ai-fab>
    `};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const fabLogo = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Crect width='24' height='24' fill='%234A90E2'/%3E%3Ctext x='12' y='16' font-family='Arial, sans-serif' font-size='12' font-weight='bold' fill='white' text-anchor='middle'%3EAC%3C/text%3E%3C/svg%3E";
    return html\`
      <forge-ai-fab .extended=\${true} @click=\${clickAction}>
        <img slot="icon" src="\${fabLogo}" alt="Acme Corp" style="width: 24px; height: 24px; border-radius: 50%;" />
        Acme Support
      </forge-ai-fab>
    \`;
  }
}`,...o.parameters?.docs?.source}}};const c=["Demo","Disabled","Branded"],g=Object.freeze(Object.defineProperty({__proto__:null,Branded:o,Demo:e,Disabled:t,__namedExportsOrder:c,default:d},Symbol.toStringTag,{value:"Module"}));export{g as A,e as D};

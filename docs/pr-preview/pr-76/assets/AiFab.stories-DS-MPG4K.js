import{x as l}from"./iframe-9kznCVoF.js";import"./ai-fab-WcZ54hAb.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,f="forge-ai-fab",i=g("click"),u={title:"AI Components/Primitives/FAB",component:f,render:o=>l`
      <forge-ai-fab .disabled=${o.disabled} .extended=${o.extended} @click=${i}>
        ${o.content}
      </forge-ai-fab>
    `,argTypes:{disabled:{control:"boolean",description:"Whether the button is disabled"},extended:{control:"boolean",description:"Whether the button is extended"},content:{control:"text",description:"The text content of the button"}},args:{disabled:!1,extended:!1,content:"AI Assistant"}},e={},t={args:{disabled:!0}},r={parameters:{controls:{include:["backgroundColor","textColor","outlineColor"]}},argTypes:{backgroundColor:{control:"color",description:"Background color (--forge-ai-fab-background)"},textColor:{control:"color",description:"Text color (--forge-ai-fab-text-color)"},outlineColor:{control:"color",description:"Outline color (--forge-ai-fab-outline-color)"}},args:{backgroundColor:"",textColor:"",outlineColor:""},render:o=>{const a="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Crect width='24' height='24' fill='%234A90E2'/%3E%3Ctext x='12' y='16' font-family='Arial, sans-serif' font-size='12' font-weight='bold' fill='white' text-anchor='middle'%3EAC%3C/text%3E%3C/svg%3E",n={};o.backgroundColor&&(n["--forge-ai-fab-background"]=o.backgroundColor),o.textColor&&(n["--forge-ai-fab-text-color"]=o.textColor),o.outlineColor&&(n["--forge-ai-fab-outline-color"]=o.outlineColor);const s=Object.entries(n).map(([c,d])=>`${c}: ${d}`).join("; ");return l`
      <forge-ai-fab .extended=${!0} @click=${i} style=${s}>
        <img slot="icon" src="${a}" alt="Acme Corp" style="width: 24px; height: 24px; border-radius: 50%;" />
        Acme Support
      </forge-ai-fab>
    `}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['backgroundColor', 'textColor', 'outlineColor']
    }
  },
  argTypes: {
    backgroundColor: {
      control: 'color',
      description: 'Background color (--forge-ai-fab-background)'
    },
    textColor: {
      control: 'color',
      description: 'Text color (--forge-ai-fab-text-color)'
    },
    outlineColor: {
      control: 'color',
      description: 'Outline color (--forge-ai-fab-outline-color)'
    }
  },
  args: {
    backgroundColor: '',
    textColor: '',
    outlineColor: ''
  },
  render: args => {
    const fabLogo = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Crect width='24' height='24' fill='%234A90E2'/%3E%3Ctext x='12' y='16' font-family='Arial, sans-serif' font-size='12' font-weight='bold' fill='white' text-anchor='middle'%3EAC%3C/text%3E%3C/svg%3E";
    const styles: Record<string, string> = {};
    if (args.backgroundColor) {
      styles['--forge-ai-fab-background'] = args.backgroundColor;
    }
    if (args.textColor) {
      styles['--forge-ai-fab-text-color'] = args.textColor;
    }
    if (args.outlineColor) {
      styles['--forge-ai-fab-outline-color'] = args.outlineColor;
    }
    const styleString = Object.entries(styles).map(([key, value]) => \`\${key}: \${value}\`).join('; ');
    return html\`
      <forge-ai-fab .extended=\${true} @click=\${clickAction} style=\${styleString}>
        <img slot="icon" src="\${fabLogo}" alt="Acme Corp" style="width: 24px; height: 24px; border-radius: 50%;" />
        Acme Support
      </forge-ai-fab>
    \`;
  }
}`,...r.parameters?.docs?.source}}};const b=["Demo","Disabled","Branded"],m=Object.freeze(Object.defineProperty({__proto__:null,Branded:r,Demo:e,Disabled:t,__namedExportsOrder:b,default:u},Symbol.toStringTag,{value:"Module"}));export{m as A,e as D};

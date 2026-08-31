import{x as o}from"./iframe-Dv2diMBA.js";import"./ai-client-message-Dmgu0F8L.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,d="forge-ai-client-message",l={title:"AI Components/Primitives/Client Message",component:d,argTypes:{kind:{control:"select",options:["text","info","warning","error","success"],description:'Visual treatment. "text" matches the plain, italic system-message style.'},header:{control:"text",description:'Optional bold title, shown above the content (ignored for kind="text")'},content:{control:"text",description:"Message text"}},args:{kind:"info",header:"",content:"Your document finished indexing and is ready to search."},render:e=>{const s=r("action-click"),i=[{id:"dismiss",label:"Dismiss",onClick:()=>s("dismiss")},{id:"retry",label:"Retry",onClick:()=>s("retry")}];return o`
      <forge-ai-client-message
        kind=${e.kind}
        .header=${e.header||void 0}
        .content=${e.content}
        .actions=${i}>
      </forge-ai-client-message>
    `}},n={},t={render:()=>{const e=r("action-click");return o`
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 480px;">
        ${[{kind:"text",content:"Switched to Research Assistant"},{kind:"info",header:"Heads up",content:"This agent has access to your uploaded documents."},{kind:"warning",header:"Approaching limit",content:"You're nearing the monthly usage limit for this agent."},{kind:"error",header:"Session expired",content:"Your session expired. Please refresh the page to re-authenticate."},{kind:"success",content:"File uploaded successfully."}].map(({kind:i,header:a,content:c})=>o`
            <forge-ai-client-message
              kind=${i}
              .header=${a}
              .content=${c}
              .actions=${i==="error"?[{id:"refresh",label:"Refresh",onClick:()=>e("refresh")}]:[]}></forge-ai-client-message>
          `)}
      </div>
    `}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const onActionClick = action('action-click');
    const kinds: {
      kind: ClientMessageKind;
      header?: string;
      content: string;
    }[] = [{
      kind: 'text',
      content: 'Switched to Research Assistant'
    }, {
      kind: 'info',
      header: 'Heads up',
      content: 'This agent has access to your uploaded documents.'
    }, {
      kind: 'warning',
      header: 'Approaching limit',
      content: "You're nearing the monthly usage limit for this agent."
    }, {
      kind: 'error',
      header: 'Session expired',
      content: 'Your session expired. Please refresh the page to re-authenticate.'
    }, {
      kind: 'success',
      content: 'File uploaded successfully.'
    }];
    return html\`
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 480px;">
        \${kinds.map(({
      kind,
      header,
      content
    }) => {
      const actions: ClientMessageAction[] = kind === 'error' ? [{
        id: 'refresh',
        label: 'Refresh',
        onClick: () => onActionClick('refresh')
      }] : [];
      return html\`
            <forge-ai-client-message
              kind=\${kind}
              .header=\${header}
              .content=\${content}
              .actions=\${actions}></forge-ai-client-message>
          \`;
    })}
      </div>
    \`;
  }
}`,...t.parameters?.docs?.source}}};const h=["Demo","AllKinds"],u=Object.freeze(Object.defineProperty({__proto__:null,AllKinds:t,Demo:n,__namedExportsOrder:h,default:l},Symbol.toStringTag,{value:"Module"}));export{u as A,n as D,t as a};

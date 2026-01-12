import{x as o}from"./iframe-S5vhSwLC.js";import"./ai-button-CjJsTyhl.js";const{action:n}=__STORYBOOK_MODULE_ACTIONS__,r="forge-ai-button",i=n("click"),s={title:"AI Components/Primitives/Button",component:r,render:e=>o`
      <forge-ai-button .disabled=${e.disabled} attention=${e.attention} @click=${i}>
        ${e.content}
      </forge-ai-button>
    `,argTypes:{disabled:{control:"boolean",description:"Whether the button is disabled"},attention:{control:"select",options:["subtle","strong"],description:"Attention level for the gradient container"},content:{control:"text",description:"The text content of the button"}},args:{disabled:!1,attention:"subtle",content:"AI Assistant"}},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const c=["Demo"],d=Object.freeze(Object.defineProperty({__proto__:null,Demo:t,__namedExportsOrder:c,default:s},Symbol.toStringTag,{value:"Module"}));export{d as A,t as D};

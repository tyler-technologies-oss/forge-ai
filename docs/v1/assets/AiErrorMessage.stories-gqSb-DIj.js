import{x as o}from"./iframe-Ctu7MqZS.js";import"./ai-error-message-5fIgSMmQ.js";const t="forge-ai-error-message",a={title:"AI Components/Primitives/Error Message",component:t,argTypes:{density:{control:"select",options:["medium","small"],description:'The density of the banner. "small" tightens the padding, gap, and icon for compact surfaces'}},args:{density:"medium"},render:s=>o`
      <forge-ai-error-message density=${s.density}>
        <span slot="title">Error</span>
        Failed to connect to the server. Please check your network connection and try again.
      </forge-ai-error-message>
    `},r={},e={args:{density:"small"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    density: 'small'
  }
}`,...e.parameters?.docs?.source},description:{story:"Tightened padding, gap, and icon for use inside lists, panels, and other compact surfaces.",...e.parameters?.docs?.description}}};const n=["Demo","Dense"],d=Object.freeze(Object.defineProperty({__proto__:null,Demo:r,Dense:e,__namedExportsOrder:n,default:a},Symbol.toStringTag,{value:"Module"}));export{d as A,r as D};

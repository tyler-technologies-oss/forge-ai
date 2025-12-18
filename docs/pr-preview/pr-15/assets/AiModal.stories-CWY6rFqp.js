import{x as r}from"./iframe-DiGPE8Ub.js";import{n as l,e as n}from"./ref-DlL8SIVM.js";import"./ai-modal-C4pDoKY_.js";const s="forge-ai-modal",i={title:"AI Components/Primitives/Modal",render:t=>{const o=n();function a(){o.value.open?o.value.close():o.value.show()}return r`
      <forge-button variant="raised" @click=${a}>Show Modal</forge-button>
      <forge-ai-modal ${l(o)} .open=${t.open}>
        <div style="padding: 24px;">
          <h3 style="margin: 0 0 16px 0;">Modal Title</h3>
          <p style="margin: 0 0 16px 0;">This is a basic modal dialog with some sample content.</p>
          <forge-button variant="outlined" @click=${()=>o.value.close()}> Close Modal </forge-button>
        </div>
      </forge-ai-modal>
    `},component:s,argTypes:{open:{control:"boolean"}},args:{open:!1}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const d=["Demo"],g=Object.freeze(Object.defineProperty({__proto__:null,Demo:e,__namedExportsOrder:d,default:i},Symbol.toStringTag,{value:"Module"}));export{g as A,e as D};

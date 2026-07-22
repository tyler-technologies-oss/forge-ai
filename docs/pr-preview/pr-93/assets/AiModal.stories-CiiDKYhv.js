import{x as l}from"./iframe-Cs5ZdWGX.js";import{n as r,e as n}from"./ref-Bw7RBaX-.js";import"./ai-modal-0JfbgJIZ.js";const s="forge-ai-modal",i={title:"AI Components/Primitives/Modal",render:t=>{const e=n();function a(){e.value.open?e.value.close():e.value.show()}return l`
      <forge-button variant="raised" @click=${a}>Show Modal</forge-button>
      <forge-ai-modal ${r(e)} .open=${t.open} label=${t.label}>
        <div style="padding: 24px;">
          <h3 style="margin: 0 0 16px 0;">Modal Title</h3>
          <p style="margin: 0 0 16px 0;">This is a basic modal dialog with some sample content.</p>
          <forge-button variant="outlined" @click=${()=>e.value.close()}> Close Modal </forge-button>
        </div>
      </forge-ai-modal>
    `},component:s,argTypes:{open:{control:"boolean"},label:{control:"text"}},args:{open:!1,label:"AI Assistant"}},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const d=["Demo"],u=Object.freeze(Object.defineProperty({__proto__:null,Demo:o,__namedExportsOrder:d,default:i},Symbol.toStringTag,{value:"Module"}));export{u as A,o as D};

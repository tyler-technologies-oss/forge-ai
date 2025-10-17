import{x as t}from"./iframe-R5aeJAG_.js";import"./ai-dialog-hbPnuM_s.js";import"./ai-chat-interface-cou_-AAO.js";import"./ai-user-message-CkN920Mm.js";import"./ai-response-message-qaQsOOvW.js";import"./ai-fab-Do-BGOrj.js";const d="forge-ai-dialog",p={title:"AI Components/Primitives/Dialog",component:d,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the dialog is open"},expanded:{control:{type:"boolean"},description:"Controls whether the dialog is displayed in an expanded state"}},args:{open:!1,expanded:!1},render:i=>{const a=()=>{const e=document.querySelector("forge-ai-dialog");e&&(e.expanded=!e.expanded)},n=()=>{document.querySelector("forge-ai-dialog")?.close()},r=t`
      <forge-ai-dialog ?open=${i.open} ?expanded=${i.expanded}>
        <forge-ai-chat-interface
          ?show-expand-button=${window.innerWidth>768}
          show-minimize-button
          ?expanded=${i.expanded}
          @forge-ai-chat-header-expand=${a}
          @forge-ai-chat-header-minimize=${n}>
          <forge-ai-user-message>
            Hello! Can you help me understand how to use TypeScript generics?
          </forge-ai-user-message>
          <forge-ai-response-message>
            I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components
            that can work with different types while maintaining type safety.
          </forge-ai-response-message>
        </forge-ai-chat-interface>
      </forge-ai-dialog>
    `,s=t`
      <forge-ai-fab
        style="position: fixed; bottom: 24px; right: 24px; z-index: 1000;"
        @click=${()=>{document.querySelector("forge-ai-dialog")?.show()}}>
      </forge-ai-fab>
    `;return t`
      <div style="min-height: 300px;">
        <div>
          <h2>AI Dialog Demo (Atomic Composition)</h2>
          <p>Click the FAB in the bottom right corner to open the AI dialog.</p>
          <p>This demo shows manual composition of ai-dialog + ai-chat-interface components.</p>
        </div>
        ${s} ${r}
      </div>
    `}},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const l=["Demo"],x=Object.freeze(Object.defineProperty({__proto__:null,Demo:o,__namedExportsOrder:l,default:p},Symbol.toStringTag,{value:"Module"}));export{x as A,o as D};

import{x as a}from"./iframe-Cs5ZdWGX.js";import"./ai-dialog-DbVyaxR8.js";import"./ai-chat-interface-DxkrwRdk.js";import"./ai-chat-header-nK59OzoC.js";import"./ai-prompt-j16akz15.js";import"./ai-user-message-CLGA-1Ud.js";import"./ai-response-message-Dy6ZtO57.js";import"./ai-fab-CJQQusP-.js";const d="forge-ai-dialog",l={title:"AI Components/Primitives/Dialog",component:d,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the dialog is open"},expanded:{control:{type:"boolean"},description:"Controls whether the dialog is displayed in an expanded state"},label:{control:{type:"text"},description:"Accessible label announced by screen readers when the dialog opens"}},args:{open:!1,expanded:!1,label:"AI Assistant"},render:t=>{const i=()=>{const e=document.querySelector("forge-ai-dialog");e&&(e.expanded=!e.expanded)},r=()=>{document.querySelector("forge-ai-dialog")?.close()},n=a`
      <forge-ai-dialog ?open=${t.open} ?expanded=${t.expanded} label=${t.label}>
        <forge-ai-chat-interface>
          <forge-ai-chat-header
            slot="header"
            ?show-expand-button=${window.innerWidth>768}
            show-minimize-button
            ?expanded=${t.expanded}
            @forge-ai-chat-header-expand=${i}
            @forge-ai-chat-header-minimize=${r}>
          </forge-ai-chat-header>
          <forge-ai-user-message>
            Hello! Can you help me understand how to use TypeScript generics?
          </forge-ai-user-message>
          <forge-ai-response-message>
            I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components
            that can work with different types while maintaining type safety.
          </forge-ai-response-message>

          <forge-ai-prompt slot="prompt"></forge-ai-prompt>
        </forge-ai-chat-interface>
      </forge-ai-dialog>
    `,s=a`
      <forge-ai-fab
        style="position: fixed; bottom: 24px; right: 24px; z-index: 1000;"
        @click=${()=>{document.querySelector("forge-ai-dialog")?.show()}}>
      </forge-ai-fab>
    `;return a`
      <div style="min-height: 300px;">
        <div>
          <h2>AI Dialog Demo (Atomic Composition)</h2>
          <p>Click the FAB in the bottom right corner to open the AI dialog.</p>
          <p>This demo shows manual composition of ai-dialog + ai-chat-interface components.</p>
        </div>
        ${s} ${n}
      </div>
    `}},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const p=["Demo"],x=Object.freeze(Object.defineProperty({__proto__:null,Demo:o,__namedExportsOrder:p,default:l},Symbol.toStringTag,{value:"Module"}));export{x as A,o as D};

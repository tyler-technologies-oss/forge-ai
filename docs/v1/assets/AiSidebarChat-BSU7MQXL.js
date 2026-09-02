import{j as t,M as n,T as a}from"./blocks-B1EsKxXs.js";import{useMDXComponents as r}from"./index-P89lMxvl.js";import{C as s}from"./CustomArgTypes-CuZitMlP.js";import{A as c}from"./AiSidebarChat.stories-CKGhs6fi.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CADuIDkh.js";import"./utils-DFuhqIoU.js";import"./scaffold-HMTDwZcG.js";import"./class-map-lxKQWI2x.js";import"./property-D1A7vE6P.js";import"./custom-element-UsVr97OX.js";import"./ref-WNweeo31.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-23WjStn0.js";import"./query-assigned-nodes-DuXvx4mS.js";import"./if-defined-DqyJVthq.js";import"./ai-sidebar-ClcFfAsq.js";import"./when-CI7b_ccM.js";import"./index-QEpirUDe.js";import"./ai-modal-BhsABjza.js";import"./utils-DIqd7FWX.js";import"./ai-button-B4tlkAXa.js";import"./ai-icon-YaVCEgEj.js";import"./ai-gradient-container-SjTC3hZA.js";import"./ai-disclaimer-CGFxe1nx.js";import"./ai-chatbot-base-COlPhqop.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-Dh4dl-y1.js";import"./ai-attachment-a2O7_tMU.js";import"./ai-spinner-DPF0Ecuu.js";import"./tooltip-BaYlHZuv.js";import"./overlay-BK9yFc7r.js";import"./ai-chat-header-1wXRb5Sv.js";import"./ai-dropdown-menu-w3IhAWpG.js";import"./popover-Ct5fZSUJ.js";import"./ai-dropdown-menu-item-DlZC2t7i.js";import"./ai-agent-info-DlkgZ-HL.js";import"./ai-agent-selector-DhnJCaeY.js";import"./ai-chat-interface-DXI32o8A.js";import"./ai-prompt-CeVCu0Of.js";import"./ai-conversations-panel-ksP_yHrJ.js";import"./ai-edit-thread-BHAaE5vs.js";import"./ai-file-picker-C7E-0pRb.js";import"./ai-message-thread-BlF4XE16.js";import"./ai-response-message-toolbar-KzBcozAV.js";import"./ai-thinking-indicator-BEp1fhiI.js";import"./ai-client-message-rQsx8zFI.js";import"./ai-empty-state-BnS6U1d1.js";import"./ai-error-message-DhZi8Lt1.js";import"./ai-response-message-BTlvxeX1.js";import"./ai-user-message-DSgABtbI.js";import"./ai-user-message-toolbar-mqgRxP6I.js";import"./ai-suggestions-CbE1dL_G.js";import"./ai-voice-input-C-BllxmB.js";import"./mock-adapter-BpgeerXX.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
`,t.jsx(a,{children:"AI Sidebar Chat"}),`
`,t.jsxs(o.p,{children:["The AI Sidebar Chat component is a form factor component that positions a slotted chatbot in a sidebar or fullscreen modal. It manages positioning and expand/collapse state while delegating all chat functionality to the slotted ",t.jsx(o.code,{children:"ai-chatbot"})," component. When expanded, the chat is displayed in a fullscreen modal. When collapsed, it's displayed in a sidebar."]}),`
`,t.jsx(o.h2,{id:"features",children:"Features"}),`
`,t.jsxs(o.ul,{children:[`
`,t.jsxs(o.li,{children:[t.jsx(o.strong,{children:"Composition-based"}),": Accepts slotted chatbot component for maximum flexibility"]}),`
`,t.jsxs(o.li,{children:[t.jsx(o.strong,{children:"Built-in event handling"}),": Manages open/close events and expand/collapse interactions"]}),`
`,t.jsxs(o.li,{children:[t.jsx(o.strong,{children:"Dual display modes"}),": Sidebar for normal view, fullscreen modal when expanded"]}),`
`,t.jsxs(o.li,{children:[t.jsx(o.strong,{children:"Direct chatbot access"}),": Exposes slotted chatbot via ",t.jsx(o.code,{children:"chatbot"})," property for programmatic control"]}),`
`,t.jsxs(o.li,{children:[t.jsx(o.strong,{children:"Event bubbling"}),": All chatbot events bubble through unchanged"]}),`
`]}),`
`,t.jsx(o.h2,{id:"when-to-use",children:"When to Use"}),`
`,t.jsx(o.p,{children:"Use the AI Sidebar Chat component when you want:"}),`
`,t.jsxs(o.ul,{children:[`
`,t.jsx(o.li,{children:"A sidebar container for your chatbot that can expand to fullscreen"}),`
`,t.jsx(o.li,{children:"Standard sidebar positioning without custom logic"}),`
`,t.jsx(o.li,{children:"Built-in modal transition for expanded view"}),`
`,t.jsx(o.li,{children:"Direct control over the chatbot configuration"}),`
`]}),`
`,t.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-html",children:`<forge-ai-sidebar-chat>
  <forge-ai-chatbot .adapter="\\\${adapter}" file-upload="on"> </forge-ai-chatbot>
</forge-ai-sidebar-chat>
`})}),`
`,t.jsx(o.h3,{id:"programmatic-control",children:"Programmatic Control"}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-javascript",children:`const sidebarChat = document.querySelector('forge-ai-sidebar-chat');

// Control form factor
sidebarChat.show();
sidebarChat.close();
sidebarChat.expand(); // Switch to fullscreen modal
sidebarChat.collapse(); // Return to sidebar

// Access slotted chatbot
const chatbot = sidebarChat.chatbot;
chatbot.sendMessage('Hello!');
`})}),`
`,t.jsx(o.h2,{id:"api",children:"API"}),`
`,t.jsx(s,{})]})}function mt(e={}){const{wrapper:o}={...r(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(i,{...e})}):i(e)}export{mt as default};

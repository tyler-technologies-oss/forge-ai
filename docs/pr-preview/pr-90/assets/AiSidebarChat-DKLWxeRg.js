import{j as t,M as n,T as a}from"./blocks-Bnoq5Q0P.js";import{useMDXComponents as r}from"./index-yb_pWoqm.js";import{C as s}from"./CustomArgTypes-BZhW84v2.js";import{A as c}from"./AiSidebarChat.stories-IQwnLdnV.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Bw2u-vpc.js";import"./utils-CBdkreSp.js";import"./scaffold-BtIQK-Ry.js";import"./class-map-D3KeiMuF.js";import"./property-D8uSlpb8.js";import"./custom-element-UsVr97OX.js";import"./ref-YwmFed37.js";import"./floating-ui.dom-C0FiGihr.js";import"./split-button-Dtc71eKg.js";import"./query-assigned-nodes-bVY-CfgN.js";import"./ai-sidebar-kRMQiKQ_.js";import"./when-CI7b_ccM.js";import"./index-3KCaiOt7.js";import"./ai-modal-BqtXbgmD.js";import"./utils-BGBq21po.js";import"./ai-button-BX1xwmwV.js";import"./ai-icon-CiggPghx.js";import"./ai-gradient-container-Bgnj6_tW.js";import"./ai-disclaimer-ctTGPJ_1.js";import"./ai-chatbot-base-D5LPqfL7.js";import"./mock-adapter-DymPxr2h.js";import"./markdown-C0nyZhUE.js";import"./ai-chatbot-z6JWVOh5.js";import"./ai-attachment-Biir6dFT.js";import"./ai-spinner-DTx7K_IC.js";import"./tooltip-D_ToKNwE.js";import"./overlay-BbFnEif-.js";import"./ai-chat-header-NLrB4GQt.js";import"./ai-dropdown-menu-Drx1Ljob.js";import"./if-defined-CmrZs3Oc.js";import"./popover-DFIKMxzg.js";import"./ai-dropdown-menu-item-DBOqy3mQ.js";import"./ai-agent-info-CRcWqVQN.js";import"./ai-agent-selector-CNXcq8Li.js";import"./ai-chat-interface-BqSOdxFN.js";import"./ai-prompt-C1SXWAjE.js";import"./ai-conversations-panel-B_KswbIi.js";import"./ai-edit-thread-BT1csIIl.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-CPOyvClG.js";import"./ai-message-thread-CKKXGr3e.js";import"./ai-response-message-toolbar-epbW3GPT.js";import"./ai-empty-state-e2g83Wx-.js";import"./ai-error-message-CZWUz-ZA.js";import"./ai-response-message-32REYoGS.js";import"./ai-thinking-indicator-CC2RwDDm.js";import"./ai-user-message-D4Ftg9pm.js";import"./ai-user-message-toolbar-DqyDgos8.js";import"./ai-suggestions-Un4Gj_GR.js";import"./ai-voice-input-CA2i1i3u.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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
`,t.jsx(s,{})]})}function pt(e={}){const{wrapper:o}={...r(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(i,{...e})}):i(e)}export{pt as default};

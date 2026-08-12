import{j as t,M as n,T as a}from"./blocks-K-b86g8p.js";import{useMDXComponents as r}from"./index-D2uPRfRn.js";import{C as s}from"./CustomArgTypes-QT5zF8p2.js";import{A as c}from"./AiSidebarChat.stories-CP4tzSiv.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-ByaASZAq.js";import"./utils-CuPOqGty.js";import"./scaffold-B-E1JR_D.js";import"./class-map-ntPvOCSg.js";import"./property-DR4X3CdD.js";import"./custom-element-UsVr97OX.js";import"./ref-B25wxmZ_.js";import"./floating-ui.dom-alButkyJ.js";import"./split-button-BkpTChmM.js";import"./query-assigned-nodes-DL4sh39u.js";import"./provide-Bxw6gKTd.js";import"./consume-D3B5J4hk.js";import"./if-defined-x4iZ2Mw3.js";import"./ai-sidebar-C1yCKvcd.js";import"./when-CI7b_ccM.js";import"./index-DRpoem5W.js";import"./ai-modal-srScDJ9e.js";import"./utils-BGBq21po.js";import"./ai-button-N3-tXd2q.js";import"./ai-icon-DHGABlSg.js";import"./ai-gradient-container-CnNTGVoV.js";import"./ai-disclaimer-DWvUgaE9.js";import"./ai-chatbot-base-C1SC2pGM.js";import"./ai-message-thread-DqIe38mM.js";import"./markdown-CtLA8yAF.js";import"./ai-response-message-toolbar-BhfO3bjd.js";import"./tooltip-DJ_M162U.js";import"./overlay-DlSuCDEe.js";import"./popover-CkBxFejF.js";import"./ai-spinner-CPCAC9IA.js";import"./ai-thinking-indicator-DmwwLsAS.js";import"./ai-empty-state-me-XG0w2.js";import"./ai-error-message-DUQuOp8f.js";import"./ai-response-message-zxHIY9AQ.js";import"./ai-user-message-cH4PUP_l.js";import"./ai-user-message-toolbar-CwXpzVp2.js";import"./mock-adapter-6zZ6n2sP.js";import"./ai-chatbot-B96XI2Cs.js";import"./ai-attachment-o623x0VO.js";import"./ai-chat-header-1caPUllS.js";import"./ai-dropdown-menu-CW4X6aNf.js";import"./ai-dropdown-menu-item-DZaucG6L.js";import"./ai-agent-info-CkRp85ok.js";import"./ai-agent-selector-CenwOcxj.js";import"./ai-chat-interface-DD4_IQCF.js";import"./ai-prompt-Bpa8qUkV.js";import"./ai-conversations-panel-ztzF4HzN.js";import"./ai-edit-thread-C6VUlZjf.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-BRD6RHBI.js";import"./ai-suggestions-BwffHetq.js";import"./ai-voice-input-Ds1NxwCe.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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
`,t.jsx(s,{})]})}function ht(e={}){const{wrapper:o}={...r(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(i,{...e})}):i(e)}export{ht as default};

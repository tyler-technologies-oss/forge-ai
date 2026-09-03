import{j as t,M as n,T as a}from"./blocks-k3Gflb2G.js";import{useMDXComponents as r}from"./index-ibuR-4C5.js";import{C as s}from"./CustomArgTypes-BzgUZnqM.js";import{A as c}from"./AiSidebarChat.stories-e63jO9KZ.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BtPVa2L3.js";import"./utils-BOm36jxh.js";import"./scaffold-DVsBBhp8.js";import"./class-map-CrkkJ1zN.js";import"./property-CMgXidO8.js";import"./custom-element-UsVr97OX.js";import"./ref-DxSCTEKf.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-_wHAg7ku.js";import"./query-assigned-nodes-BYNnKO0l.js";import"./if-defined-BMWTDTx4.js";import"./ai-sidebar-Blsv6myF.js";import"./when-CI7b_ccM.js";import"./index-DLA0E3AF.js";import"./ai-modal-D9B3H2_Z.js";import"./utils-DIqd7FWX.js";import"./ai-button-L8ltn9dT.js";import"./ai-icon-gd1nSAx8.js";import"./ai-gradient-container-DtXgmP_b.js";import"./ai-disclaimer-BAHMtMsE.js";import"./ai-chatbot-base-Lpn6xIbg.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-ZyMt7Hd2.js";import"./ai-attachment-spyZYEF9.js";import"./ai-spinner-CMyfcJLb.js";import"./tooltip-Dnl9gHZ7.js";import"./overlay-BLkJscCs.js";import"./ai-chat-header-ql2xvtxi.js";import"./ai-dropdown-menu-D861xWQ4.js";import"./popover-CyRY591m.js";import"./ai-dropdown-menu-item-D7FN1kcn.js";import"./ai-agent-info-9RjcDH4K.js";import"./ai-agent-selector-BU1h3ayk.js";import"./ai-chat-interface-DpYiUVov.js";import"./ai-prompt-CZZ2cFJW.js";import"./ai-conversations-panel-DbqGTixs.js";import"./ai-edit-thread-Bwnu9FJD.js";import"./ai-file-picker-CBIUUaH6.js";import"./ai-message-thread-Dq5DnKAb.js";import"./ai-response-message-toolbar-B6qQWlcH.js";import"./ai-thinking-indicator-BwLbvy2S.js";import"./ai-client-message-D7_8eAV6.js";import"./ai-empty-state-BEOQoe7M.js";import"./ai-error-message-BSGIT9X2.js";import"./ai-response-message-CTGkXsrv.js";import"./ai-user-message-DXxcOxDq.js";import"./ai-user-message-toolbar-L1LmuJH1.js";import"./ai-suggestions-MomTgJey.js";import"./ai-voice-input-BTmd7fNC.js";import"./mock-adapter-BpgeerXX.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

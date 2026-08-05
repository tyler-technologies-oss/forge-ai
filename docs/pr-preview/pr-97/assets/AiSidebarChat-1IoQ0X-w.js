import{j as t,M as n,T as a}from"./blocks-CDruEe6C.js";import{useMDXComponents as r}from"./index-8zN2A5qD.js";import{C as s}from"./CustomArgTypes-Cuy31iXB.js";import{A as c}from"./AiSidebarChat.stories-DHv6UUIR.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BU0qbW8_.js";import"./utils-CMD24z5I.js";import"./scaffold-a0PHeq18.js";import"./class-map-Bg05esO9.js";import"./property-jRf143t2.js";import"./custom-element-UsVr97OX.js";import"./ref-obwCGz03.js";import"./floating-ui.dom-alButkyJ.js";import"./split-button-CLyAzCiN.js";import"./query-assigned-nodes-DeRjluGE.js";import"./if-defined-BM8MtdYj.js";import"./ai-sidebar-l-iaGYtv.js";import"./when-CI7b_ccM.js";import"./index-CcEWOSRX.js";import"./ai-modal-DxVZt6i-.js";import"./utils-BGBq21po.js";import"./ai-button-_BxKU1Hn.js";import"./ai-icon-CBqQm4Iy.js";import"./ai-gradient-container-DRzp4g5a.js";import"./ai-disclaimer-DaZF7dIX.js";import"./ai-chatbot-base-D7bO5MWP.js";import"./mock-adapter-DbkpGE97.js";import"./markdown-BZ_ChyzU.js";import"./ai-chatbot-D9pb9dyb.js";import"./ai-attachment-CgVDC_sm.js";import"./ai-spinner-BdNuRWBS.js";import"./tooltip-CCWqnKrI.js";import"./overlay-4qc19BKt.js";import"./ai-chat-header-w4J60qOf.js";import"./ai-dropdown-menu-DQLuqXJG.js";import"./popover-D2XTFUOu.js";import"./ai-dropdown-menu-item-PjNIx_QH.js";import"./ai-agent-info-DXEsZvVg.js";import"./ai-agent-selector-B-OdgaKk.js";import"./ai-chat-interface-BxIn2UzM.js";import"./ai-prompt-ZoPe6jQl.js";import"./ai-conversations-panel-C6Z45JrU.js";import"./ai-edit-thread-C1DddSD4.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-Biv_7Tn0.js";import"./ai-message-thread-CKwPThYl.js";import"./ai-response-message-toolbar-C8Vxnv9A.js";import"./ai-thinking-indicator-BrTpvpYQ.js";import"./ai-empty-state-BW2EYgAq.js";import"./ai-error-message-BqXLs5kq.js";import"./ai-response-message-B-wRRFaX.js";import"./ai-user-message-B3Ee38hf.js";import"./ai-user-message-toolbar--K4a17MB.js";import"./ai-suggestions-FckrQ9m3.js";import"./ai-voice-input-CRNmCTY9.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

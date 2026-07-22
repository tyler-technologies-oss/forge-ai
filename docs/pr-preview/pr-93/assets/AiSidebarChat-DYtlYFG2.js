import{j as t,M as n,T as a}from"./blocks-BdewPg69.js";import{useMDXComponents as r}from"./index-DWUyMydA.js";import{C as s}from"./CustomArgTypes-BXr0aEQQ.js";import{A as c}from"./AiSidebarChat.stories-BSDvsk4w.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Cs5ZdWGX.js";import"./utils-BcVRbqrP.js";import"./scaffold-DxExeDzo.js";import"./class-map-b3Nfja24.js";import"./property-sdxP6XNC.js";import"./custom-element-UsVr97OX.js";import"./ref-Bw7RBaX-.js";import"./floating-ui.dom-C0FiGihr.js";import"./split-button-DO3wAA6w.js";import"./query-assigned-nodes-D1iUf7i8.js";import"./ai-sidebar-ZY7AuZzc.js";import"./when-CI7b_ccM.js";import"./index-CwPcT4nE.js";import"./ai-modal-0JfbgJIZ.js";import"./utils-BGBq21po.js";import"./ai-button-EzPLmYrk.js";import"./ai-icon-KrTHy3bF.js";import"./ai-gradient-container-CxZxC0Ic.js";import"./ai-disclaimer-vSapznxs.js";import"./ai-chatbot-base-C5jDlS8N.js";import"./mock-adapter-DymPxr2h.js";import"./markdown-C0nyZhUE.js";import"./ai-chatbot-OQ-R9-gI.js";import"./ai-attachment-Cpfp3x18.js";import"./ai-spinner-BDnZbafO.js";import"./tooltip-C-ac1KaW.js";import"./overlay-CQIcmWbV.js";import"./ai-chat-header-nK59OzoC.js";import"./ai-dropdown-menu-Dq1eTt5b.js";import"./if-defined-DPyZDAOG.js";import"./popover-B1dnQP7b.js";import"./ai-dropdown-menu-item-B6bdAqtH.js";import"./ai-agent-info-BafqRyAW.js";import"./ai-agent-selector-DIiXbUcU.js";import"./ai-chat-interface-DxkrwRdk.js";import"./ai-prompt-j16akz15.js";import"./ai-conversations-panel-Dvcihs5E.js";import"./ai-edit-thread-DHse0RC2.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-DYABMCox.js";import"./ai-message-thread-CAvmrOST.js";import"./ai-response-message-toolbar-BTyHZhWY.js";import"./ai-empty-state-CKd7zSe3.js";import"./ai-error-message-CbPvaIyG.js";import"./ai-response-message-Dy6ZtO57.js";import"./ai-thinking-indicator-DJRLK9Uf.js";import"./ai-user-message-CLGA-1Ud.js";import"./ai-user-message-toolbar-iqw80Yu6.js";import"./ai-suggestions-DcZ-v9Pe.js";import"./ai-voice-input-B-Es-6DZ.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

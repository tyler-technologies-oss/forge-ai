import{j as t,M as n,T as a}from"./blocks-DlBdzCoP.js";import{useMDXComponents as r}from"./index-BqDqhnd8.js";import{C as s}from"./CustomArgTypes-A9r6HFQF.js";import{A as c}from"./AiSidebarChat.stories-DbDBhVpk.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Dp0GADNh.js";import"./utils-B5D7Nk_P.js";import"./scaffold-emYXntWu.js";import"./class-map-DvcBAVKi.js";import"./property-BzAhKD2C.js";import"./custom-element-UsVr97OX.js";import"./ref-ObUI66tn.js";import"./floating-ui.dom-C0FiGihr.js";import"./split-button-DYU2RByJ.js";import"./query-assigned-nodes-DgE2mQ6_.js";import"./ai-sidebar-HB9khpme.js";import"./when-CI7b_ccM.js";import"./index-ClQn3WF0.js";import"./ai-modal-D3VFAM_0.js";import"./utils-BGBq21po.js";import"./ai-button-D5mTumwc.js";import"./ai-icon-DzOuC4BR.js";import"./ai-gradient-container-CbSc8iqt.js";import"./ai-disclaimer-B8zqvp6u.js";import"./ai-chatbot-base-DFieK6aw.js";import"./mock-adapter-Dv6Maef-.js";import"./utils-YPQNW8lZ.js";import"./ai-chatbot-DH4CJuhn.js";import"./ai-attachment-CKjM0z09.js";import"./ai-spinner-BSr3yGv8.js";import"./tooltip-BsvWpolw.js";import"./overlay-C8dBgaI2.js";import"./ai-chat-header-fCP8UsJM.js";import"./ai-dropdown-menu-DK1_6gir.js";import"./if-defined-DTkRxWUh.js";import"./popover-B40ldSwg.js";import"./ai-dropdown-menu-item-DQ2NI7V9.js";import"./ai-agent-info-jNBNCLmJ.js";import"./ai-agent-selector-s9IFu2kz.js";import"./ai-chat-interface-q0H7oJ4i.js";import"./ai-prompt-DUIFsu2t.js";import"./ai-conversations-panel-DF_oa0iv.js";import"./ai-edit-thread-DrQNkXvO.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-C12QHkHV.js";import"./ai-message-thread-CeEKBd42.js";import"./ai-response-message-toolbar-BxGjb8OO.js";import"./ai-empty-state-SCqAG4Ca.js";import"./ai-error-message-2cvxC5BT.js";import"./ai-response-message-ZBzSDSt_.js";import"./ai-thinking-indicator-DI5X_RR_.js";import"./ai-user-message-BASIjpPP.js";import"./ai-user-message-toolbar-Dn2ThBAV.js";import"./ai-suggestions-BhjfvBIk.js";import"./ai-voice-input-zSCaU4EW.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

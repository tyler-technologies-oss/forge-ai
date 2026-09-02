import{j as t,M as n,T as a}from"./blocks-THmgHpiz.js";import{useMDXComponents as r}from"./index-fZg2tg8d.js";import{C as s}from"./CustomArgTypes-B-rHPcEk.js";import{A as c}from"./AiSidebarChat.stories-DoUJ80P6.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BSmKQs1u.js";import"./utils-Sy6_uoxV.js";import"./scaffold-BlZ3zN10.js";import"./class-map-DMblrozl.js";import"./property-BGszvd3v.js";import"./custom-element-UsVr97OX.js";import"./ref-Ts25pZNB.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-CDrn8cSq.js";import"./query-assigned-nodes-SvM0S0Jt.js";import"./if-defined-CvR0wAfJ.js";import"./ai-sidebar-BBDNvrO5.js";import"./when-CI7b_ccM.js";import"./index-CPLRq-qF.js";import"./ai-modal-Bgtoh6kf.js";import"./utils-DIqd7FWX.js";import"./ai-button-DgseK4i_.js";import"./ai-icon-CRqL-INL.js";import"./ai-gradient-container-Cgte-NhV.js";import"./ai-disclaimer-DQ8Z6Sw2.js";import"./ai-chatbot-base-BZRw7vDJ.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-lfgYA6SZ.js";import"./ai-attachment-D3DAvL8l.js";import"./ai-spinner-DiUIE3bT.js";import"./tooltip-BFznctOD.js";import"./overlay-VltynnP9.js";import"./ai-chat-header-Do2JpEYs.js";import"./ai-dropdown-menu-COmOhjQ_.js";import"./popover-Y-zrbxwt.js";import"./ai-dropdown-menu-item-DqwFMPE4.js";import"./ai-agent-info-BC3CU81X.js";import"./ai-agent-selector-DqgIoLGo.js";import"./ai-chat-interface-Bcpw4QF9.js";import"./ai-prompt-DcEk_oU5.js";import"./ai-conversations-panel-dKNa8vXM.js";import"./ai-edit-thread-CSW_9Li1.js";import"./ai-file-picker-ytzP6k6B.js";import"./ai-message-thread-DFSddJrO.js";import"./ai-response-message-toolbar-Z7Z8jS-l.js";import"./ai-thinking-indicator-LdNRIz4w.js";import"./ai-client-message-D_tD75o4.js";import"./ai-empty-state-BPyheJ_o.js";import"./ai-error-message-BDynFuhU.js";import"./ai-response-message-gpGMW6ag.js";import"./ai-user-message-C_17XcYZ.js";import"./ai-user-message-toolbar-DeqHOKxe.js";import"./ai-suggestions-DrGfYCrd.js";import"./ai-voice-input-DuITqIZV.js";import"./mock-adapter-BpgeerXX.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

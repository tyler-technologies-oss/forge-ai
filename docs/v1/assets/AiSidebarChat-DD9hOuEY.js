import{j as t,M as n,T as a}from"./blocks-Clley0La.js";import{useMDXComponents as r}from"./index-CvPtnTv1.js";import{C as s}from"./CustomArgTypes-CNJmCcdP.js";import{A as c}from"./AiSidebarChat.stories-DhlH1eOX.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Dye8ZKA5.js";import"./utils-CXuCZZkS.js";import"./scaffold-CnxluL7q.js";import"./class-map-C-Vm7qAC.js";import"./property-CSVhZUH2.js";import"./custom-element-UsVr97OX.js";import"./ref-DTbB5e9O.js";import"./floating-ui.dom-alButkyJ.js";import"./split-button-DxKObkis.js";import"./query-assigned-nodes-C08U1rRi.js";import"./if-defined-DB6czLUl.js";import"./ai-sidebar-B5pevH8A.js";import"./when-CI7b_ccM.js";import"./index-CS-jZIIg.js";import"./ai-modal-mlSLNT1K.js";import"./utils-BGBq21po.js";import"./ai-button-DrbQi0-0.js";import"./ai-icon-DxaiajKT.js";import"./ai-gradient-container-kls7ss2d.js";import"./ai-disclaimer-LEP9ePLU.js";import"./ai-chatbot-base-By36OxwM.js";import"./mock-adapter-ph_xQ6k2.js";import"./markdown-CtLA8yAF.js";import"./ai-chatbot-Cxuyhrzr.js";import"./ai-attachment-BJ1mHTmt.js";import"./ai-spinner-ChGg4s1h.js";import"./tooltip-B2ZqyyMn.js";import"./overlay-E_yvTlvY.js";import"./ai-chat-header-p7Qe1N6Z.js";import"./ai-dropdown-menu-CehISYXs.js";import"./popover-DXNPGDhS.js";import"./ai-dropdown-menu-item-BsIeXVo7.js";import"./ai-agent-info-A0TR0QU1.js";import"./ai-agent-selector-BKpudfOt.js";import"./ai-chat-interface-Dt5Uzi7X.js";import"./ai-prompt-C4kPwTAt.js";import"./ai-conversations-panel-Y0U0Aluz.js";import"./ai-edit-thread-DpP_-oS2.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-DdxGJKEg.js";import"./ai-message-thread-D0Qpnw94.js";import"./ai-response-message-toolbar-BAaBJcbK.js";import"./ai-thinking-indicator-C0hblZw4.js";import"./ai-client-message-DDVHiC_q.js";import"./ai-empty-state-DvNSAr90.js";import"./ai-error-message-CpvfUCaY.js";import"./ai-response-message-CsWNjFr8.js";import"./ai-user-message-DZGcHQU7.js";import"./ai-user-message-toolbar-Cu-zJ5MW.js";import"./ai-suggestions-B0vAtPsV.js";import"./ai-voice-input-CB0wA1oW.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

import{j as t,M as n,T as a}from"./blocks-B5Z80lh6.js";import{useMDXComponents as r}from"./index-BW-3ujwX.js";import{C as s}from"./CustomArgTypes-e0ruzkXP.js";import{A as c}from"./AiSidebarChat.stories-B4Bko1GB.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-JS6wZa5t.js";import"./utils-B_iZMiSg.js";import"./scaffold-5leeyL7P.js";import"./class-map-B6Wsz2a7.js";import"./property-CzP0hvoa.js";import"./custom-element-UsVr97OX.js";import"./ref-CMZ1GDcC.js";import"./floating-ui.dom-C0FiGihr.js";import"./split-button-BWo7QRrP.js";import"./query-assigned-nodes-CBvrqxop.js";import"./ai-sidebar-D8GwR53j.js";import"./when-CI7b_ccM.js";import"./index-CPcbJOiu.js";import"./ai-modal-7_as5TQd.js";import"./utils-BGBq21po.js";import"./ai-button-CRC_QJwk.js";import"./ai-icon-CRLSxXHp.js";import"./ai-gradient-container-tW-pQav-.js";import"./ai-disclaimer-CDpPynB_.js";import"./ai-chatbot-base-B_5cBMa8.js";import"./mock-adapter-B6avymXj.js";import"./utils-B8dv6FBY.js";import"./ai-chatbot-D5UoBiGJ.js";import"./ai-attachment-CebnFFFa.js";import"./ai-spinner-DNI8bbKS.js";import"./tooltip-BR4orBkw.js";import"./overlay-DAlCbg2u.js";import"./ai-chat-header-C-PtU_yv.js";import"./ai-dropdown-menu-BrVMDBOp.js";import"./if-defined-4iJwT7ay.js";import"./popover-DLBAIfMN.js";import"./ai-dropdown-menu-item-DJcoZIHk.js";import"./ai-agent-info-rXVe5M7M.js";import"./ai-agent-selector-jjubuNH5.js";import"./ai-chat-interface-HjP3Zz7l.js";import"./ai-prompt-DwmBl8GY.js";import"./ai-conversations-panel-D-jgEtgM.js";import"./ai-edit-thread-BCUZfuhn.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-BNOSpjo_.js";import"./ai-message-thread-CC3lSCnh.js";import"./ai-response-message-toolbar-CkQOy9kS.js";import"./ai-empty-state-zZ2AvKx1.js";import"./ai-error-message-YyOiiIbM.js";import"./ai-response-message-C_SkkDWU.js";import"./ai-thinking-indicator-CcnZ3vV8.js";import"./ai-user-message-C78Blyvb.js";import"./ai-user-message-toolbar-BEym6G2C.js";import"./ai-suggestions-Bs7LAqce.js";import"./ai-voice-input-b3b4PI5O.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

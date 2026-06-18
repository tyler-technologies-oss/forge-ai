import{j as t,M as n,T as a}from"./blocks-Bnp-cXth.js";import{useMDXComponents as r}from"./index-BJlZkGW2.js";import{C as s}from"./CustomArgTypes-DZB4uOMb.js";import{A as c}from"./AiSidebarChat.stories-BcMjnGbr.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Ci2EQNjX.js";import"./utils-DUMfLMpS.js";import"./scaffold-BQewB3cP.js";import"./class-map-DFUZIkHp.js";import"./property-DCLvBLH6.js";import"./custom-element-UsVr97OX.js";import"./ref-DVqoa94d.js";import"./floating-ui.dom-C0FiGihr.js";import"./split-button-BwB9ZcN_.js";import"./query-assigned-nodes-HF-bGjz1.js";import"./ai-sidebar-DT9ECQ1f.js";import"./when-CI7b_ccM.js";import"./index-EAuGOsvn.js";import"./ai-modal-JNLADSlS.js";import"./utils-BGBq21po.js";import"./ai-button-D1KN9Rwg.js";import"./ai-icon-C0SmS9ZM.js";import"./ai-gradient-container-Cpf0qufw.js";import"./ai-disclaimer-BiDw1ou8.js";import"./ai-chatbot-base-CZUtyx0p.js";import"./mock-adapter-DtTa1VKp.js";import"./utils-BPGIXM68.js";import"./ai-chatbot-Caz6IGhX.js";import"./ai-attachment-CwBnlWvU.js";import"./ai-spinner-C9HwdYW0.js";import"./tooltip-f3wnCPJr.js";import"./overlay-CHOZm8MI.js";import"./ai-chat-header-D3wmU5Ud.js";import"./ai-dropdown-menu-BeUVnIuA.js";import"./if-defined-BCytmrNz.js";import"./popover-DRt8UQ8L.js";import"./ai-dropdown-menu-item-BEPz4Z0O.js";import"./ai-agent-info-DK5lUx6m.js";import"./ai-agent-selector-fA7hraEy.js";import"./ai-chat-interface-Drc0GBVr.js";import"./ai-prompt-D9QErE2u.js";import"./ai-conversations-panel-CyM2nZYD.js";import"./ai-edit-thread-DQfnN53O.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-BwapaYD6.js";import"./ai-message-thread-fHPQoLln.js";import"./ai-response-message-toolbar-DihzPqxY.js";import"./ai-empty-state-Bcl4PAH6.js";import"./ai-error-message-BkR-zdyB.js";import"./ai-response-message-CXvi5lnK.js";import"./ai-thinking-indicator-7ydwhXcm.js";import"./ai-user-message-C7Ai-3On.js";import"./ai-user-message-toolbar-BOrnGvve.js";import"./ai-suggestions-BLvW4QSW.js";import"./ai-voice-input-CyORsGgw.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

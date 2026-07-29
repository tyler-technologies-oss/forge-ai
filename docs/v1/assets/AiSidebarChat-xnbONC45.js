import{j as t,M as n,T as a}from"./blocks-CGRuPnvO.js";import{useMDXComponents as r}from"./index-DdKxwanU.js";import{C as s}from"./CustomArgTypes-B0_lzovi.js";import{A as c}from"./AiSidebarChat.stories-CWjxn9WL.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BrGJEje7.js";import"./utils-CgHXNsZX.js";import"./scaffold-DCpOEidj.js";import"./class-map-DCdAc5pm.js";import"./property-BCDuNA5l.js";import"./custom-element-UsVr97OX.js";import"./ref-nQfGmz9T.js";import"./floating-ui.dom-alButkyJ.js";import"./split-button-C4q2U-5G.js";import"./query-assigned-nodes-Bmew1fjd.js";import"./if-defined-DPQFg8BI.js";import"./ai-sidebar-C1CDgcvH.js";import"./when-CI7b_ccM.js";import"./index-DX1mVo9L.js";import"./ai-modal-CwSWh2bK.js";import"./utils-BGBq21po.js";import"./ai-button-C5Idp_Fe.js";import"./ai-icon-BhGlgcwX.js";import"./ai-gradient-container-DPKlOMPF.js";import"./ai-disclaimer-9Dd3X_ML.js";import"./ai-chatbot-base-bQo3FBpC.js";import"./mock-adapter-DbkpGE97.js";import"./markdown-BZ_ChyzU.js";import"./ai-chatbot-sD2_n9xB.js";import"./ai-attachment-p2QyfL1M.js";import"./ai-spinner-BfV45CJk.js";import"./tooltip-CIvpBflQ.js";import"./overlay-BT-c_yc4.js";import"./ai-chat-header-BboVh0b9.js";import"./ai-dropdown-menu-Bua1tXiW.js";import"./popover-CT_-w64m.js";import"./ai-dropdown-menu-item-DRlNlM2Y.js";import"./ai-agent-info-C2iolfJD.js";import"./ai-agent-selector-DDqwUSrN.js";import"./ai-chat-interface-rgJvLgBL.js";import"./ai-prompt-CsA6Z-ZH.js";import"./ai-conversations-panel-CjEobQBE.js";import"./ai-edit-thread-BKtRFmvi.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-CDc8UvYY.js";import"./ai-message-thread-C5wBRYTW.js";import"./ai-response-message-toolbar-DI0WfsYD.js";import"./ai-thinking-indicator-BXB5Y9LS.js";import"./ai-empty-state-1SkpXwGQ.js";import"./ai-error-message-CIPA-cQm.js";import"./ai-response-message-CFr5Hr3V.js";import"./ai-user-message-CMZOUDqA.js";import"./ai-user-message-toolbar-DellKX8y.js";import"./ai-suggestions-DyBUqbfj.js";import"./ai-voice-input-DFQWrHlr.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

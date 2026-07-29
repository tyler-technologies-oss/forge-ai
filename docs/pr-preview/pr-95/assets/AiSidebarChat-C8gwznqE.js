import{j as t,M as n,T as a}from"./blocks-DuEO9GZt.js";import{useMDXComponents as r}from"./index-HbhePmRf.js";import{C as s}from"./CustomArgTypes-Dj_AEyIQ.js";import{A as c}from"./AiSidebarChat.stories-48cw1dfj.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C3ZZ1L_l.js";import"./utils-DBpttFAl.js";import"./scaffold-La9kFSFt.js";import"./class-map-Bx4lXkIE.js";import"./property-BUQ8TDcl.js";import"./custom-element-UsVr97OX.js";import"./ref-iesEo_Rh.js";import"./floating-ui.dom-alButkyJ.js";import"./split-button-Dn8y4lhl.js";import"./query-assigned-nodes-ClnhmG2v.js";import"./if-defined-B0aYDQeC.js";import"./ai-sidebar-De2Xoz_S.js";import"./when-CI7b_ccM.js";import"./index-BvuAtJR7.js";import"./ai-modal-BK7HGgA5.js";import"./utils-BGBq21po.js";import"./ai-button-CH187k3P.js";import"./ai-icon-otuciuMu.js";import"./ai-gradient-container-CaFVvMaa.js";import"./ai-disclaimer-4BM2eEEw.js";import"./ai-chatbot-base-CSWYq6Ez.js";import"./mock-adapter-DbkpGE97.js";import"./markdown-BZ_ChyzU.js";import"./ai-chatbot-BwCopccN.js";import"./ai-attachment-CbniRXZl.js";import"./ai-spinner-C-hREVja.js";import"./tooltip-Ce3yHpSO.js";import"./overlay-BN-f8ZsA.js";import"./ai-chat-header-Dj7KJMAd.js";import"./ai-dropdown-menu-Br0eKtuY.js";import"./popover-D4EweVOQ.js";import"./ai-dropdown-menu-item-zhSmGeyq.js";import"./ai-agent-info-m1_bJqtP.js";import"./ai-agent-selector-CGt6SENF.js";import"./ai-chat-interface-gnxEWgyY.js";import"./ai-prompt-4hHZQ6pR.js";import"./ai-conversations-panel-D5X3hdSt.js";import"./ai-edit-thread-I6GhgTcX.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-DtTUoRW1.js";import"./ai-message-thread-XZJimg13.js";import"./ai-response-message-toolbar-DnXARal9.js";import"./ai-thinking-indicator-BUiJyhFS.js";import"./ai-empty-state-C6z5pSSe.js";import"./ai-error-message-BgWx94-o.js";import"./ai-response-message-bb4nC65L.js";import"./ai-user-message-CSBqDt53.js";import"./ai-user-message-toolbar-BvBQwD3h.js";import"./ai-suggestions-th7GEp3V.js";import"./ai-voice-input-R-K_euXt.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

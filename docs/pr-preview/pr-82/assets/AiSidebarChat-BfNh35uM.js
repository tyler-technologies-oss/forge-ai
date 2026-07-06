import{j as t,M as n,T as a}from"./blocks-DnsKDb_K.js";import{useMDXComponents as r}from"./index-EJWLSoxO.js";import{C as s}from"./CustomArgTypes-D7WGxvMZ.js";import{A as c}from"./AiSidebarChat.stories-DaNDEFMj.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-P4hGHOGH.js";import"./utils-Bf05wzxr.js";import"./scaffold-DH4YMC_B.js";import"./class-map-D_2ixPEz.js";import"./property-Dn0ooM16.js";import"./custom-element-UsVr97OX.js";import"./ref-Ct08eNfc.js";import"./floating-ui.dom-C0FiGihr.js";import"./split-button-BJJx5us2.js";import"./query-assigned-nodes-Dmiw2-ts.js";import"./ai-sidebar-Gat_iLFC.js";import"./when-CI7b_ccM.js";import"./index-CF5Uzfq1.js";import"./ai-modal-KpIKe_U9.js";import"./utils-BGBq21po.js";import"./ai-button-BH8KkJ_P.js";import"./ai-icon-DidZ7Zwl.js";import"./ai-gradient-container-nN9p2llo.js";import"./ai-disclaimer-Dg__7IH5.js";import"./ai-chatbot-base-CPZToUHK.js";import"./mock-adapter-B6avymXj.js";import"./utils-B8dv6FBY.js";import"./ai-chatbot-D4EHSY6N.js";import"./ai-attachment-Q0qQKCxY.js";import"./ai-spinner-DxJKwAWk.js";import"./tooltip-BaY8qp99.js";import"./overlay-C-VttksQ.js";import"./ai-chat-header-CfC8X2A8.js";import"./ai-dropdown-menu-C8IviNgG.js";import"./if-defined-hk5iVpVj.js";import"./popover-DxXKhpi4.js";import"./ai-dropdown-menu-item-CywDaN8z.js";import"./ai-agent-info-D1Lmpd37.js";import"./ai-agent-selector-CFyRW6K9.js";import"./ai-chat-interface-CaoCHF9w.js";import"./ai-prompt-BW-CSswj.js";import"./ai-conversations-panel-Q_3ntr4r.js";import"./ai-edit-thread-zl3J4lvF.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-DzLS_au2.js";import"./ai-message-thread-Mpq6b5Uf.js";import"./ai-response-message-toolbar-Ci4UU_N8.js";import"./ai-empty-state-DfENjh_S.js";import"./ai-error-message-kXGqPWLZ.js";import"./ai-response-message-BoSFMVwD.js";import"./ai-thinking-indicator-DqDj8v0A.js";import"./ai-user-message-CVCkC577.js";import"./ai-user-message-toolbar-DBGoZNf7.js";import"./ai-suggestions-ByjIYH9e.js";import"./ai-voice-input-D-9lDO4p.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

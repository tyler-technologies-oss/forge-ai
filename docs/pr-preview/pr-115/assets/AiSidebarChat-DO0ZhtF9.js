import{j as t,M as n,T as a}from"./blocks-BHnrd8dB.js";import{useMDXComponents as r}from"./index-AexSIA4C.js";import{C as s}from"./CustomArgTypes-aBqXvnXI.js";import{A as c}from"./AiSidebarChat.stories-CwiiP75s.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-D9OWRBHb.js";import"./utils-BtNL0iZM.js";import"./scaffold-D9mQj82C.js";import"./class-map-CMCRj_XZ.js";import"./custom-element-UsVr97OX.js";import"./property-CmuU5QQg.js";import"./ref-C_L6tUxX.js";import"./state-BDhzG9rV.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-eiX92rTl.js";import"./query-assigned-elements-qCVb6420.js";import"./query-assigned-nodes-BdZEJq_N.js";import"./query-DmKfqgUS.js";import"./if-defined-BrQsoYbm.js";import"./ai-sidebar-j_ozeBg-.js";import"./when-CI7b_ccM.js";import"./index-Cq62epCf.js";import"./ai-modal-mqX_UQhc.js";import"./utils-DIqd7FWX.js";import"./ai-button-DkCoE2gX.js";import"./ai-icon-BpInNiOe.js";import"./ai-gradient-container-BAYZphHg.js";import"./ai-disclaimer-e_yEgm93.js";import"./ai-chatbot-base-Ds_pintQ.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-DecXx7RE.js";import"./ai-attachment-Cu2kuhBN.js";import"./ai-spinner-B1kol2XU.js";import"./tooltip-BM6wspih.js";import"./overlay-BZrKvIri.js";import"./ai-chat-header-D1s7SvoJ.js";import"./ai-dropdown-menu-CFc3mfut.js";import"./popover-CaLlRn_0.js";import"./ai-dropdown-menu-item-CzhSZoSG.js";import"./ai-agent-info-Dzu1a2ct.js";import"./ai-agent-selector-BcdV2Azs.js";import"./ai-chat-interface-CtFe-6LT.js";import"./ai-prompt-BQUU8dAr.js";import"./ai-conversations-panel-D0xs7GTP.js";import"./ai-edit-thread-Cs8MkgTb.js";import"./ai-error-message-By52ni75.js";import"./ai-file-picker-C9RcEC_f.js";import"./ai-message-thread-D3HQgbui.js";import"./ai-response-message-toolbar-BrzT7sf5.js";import"./ai-thinking-indicator-kLafgn6_.js";import"./ai-client-message-DQk8vDwm.js";import"./ai-empty-state-DlA3DOo-.js";import"./ai-response-message-BLDYRRnp.js";import"./ai-user-message-CDl6a0Ex.js";import"./ai-user-message-toolbar-C9Pv9rS4.js";import"./ai-suggestions-81tWUjN6.js";import"./ai-voice-input-C1M90KED.js";import"./mock-adapter-BpgeerXX.js";function e(i){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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
`,t.jsx(s,{})]})}function bt(i={}){const{wrapper:o}={...r(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(e,{...i})}):e(i)}export{bt as default};

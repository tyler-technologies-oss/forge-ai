import{j as t,M as n,T as a}from"./blocks-CUBBxk8T.js";import{useMDXComponents as r}from"./index-Djnv-rDn.js";import{C as s}from"./CustomArgTypes-B4Iykdo1.js";import{A as c}from"./AiSidebarChat.stories-D6VnZ0tU.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DBu_aRNF.js";import"./utils-Cz69Y9xv.js";import"./scaffold-BDL36_yV.js";import"./class-map-BBV8ttGz.js";import"./custom-element-UsVr97OX.js";import"./property-BQArVD-s.js";import"./ref-DjOzj-cY.js";import"./query-C8gtr_bk.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-DhZRVN58.js";import"./query-assigned-elements-ZaFpSoD-.js";import"./query-assigned-nodes-D0nbv8bG.js";import"./if-defined-CRhkeTgW.js";import"./ai-sidebar-CCPfVsPS.js";import"./when-CI7b_ccM.js";import"./index-B9pIXEcg.js";import"./ai-modal-Dkk1ivr0.js";import"./utils-DIqd7FWX.js";import"./ai-button-CtigDr7M.js";import"./ai-icon-BuJRiIq2.js";import"./ai-gradient-container-Dr30WmXl.js";import"./ai-disclaimer-CPQ4qlMy.js";import"./ai-chatbot-base-DAbWkyD6.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-9S5yRTdQ.js";import"./ai-attachment-BE-uiccc.js";import"./ai-spinner-Br5AqTkD.js";import"./tooltip-DrDfgwx1.js";import"./overlay-Dvc5Eyv4.js";import"./ai-chat-header-DBOsJFNh.js";import"./ai-dropdown-menu-CxNqr_uD.js";import"./popover-CJjF60ss.js";import"./ai-dropdown-menu-item-BK5hXoYD.js";import"./ai-agent-info-Bz5rwvS-.js";import"./ai-agent-selector-9tmcSk9H.js";import"./ai-chat-interface-D4nrRxND.js";import"./ai-prompt-DXaUhYV_.js";import"./ai-conversations-panel-COwUtVSt.js";import"./ai-edit-thread-DZYOT-La.js";import"./ai-error-message-IhNgrsu3.js";import"./ai-file-picker-BQowF0gK.js";import"./ai-message-thread-D2wzu7dd.js";import"./ai-response-message-toolbar-B4opUUMS.js";import"./ai-thinking-indicator-Bz8gyAvX.js";import"./ai-client-message-D08iBtui.js";import"./ai-empty-state-cujxxYcY.js";import"./ai-response-message-U6RZqLa0.js";import"./ai-user-message-ChuUloPc.js";import"./ai-user-message-toolbar-BGUC7_Yr.js";import"./ai-suggestions-DroVpFCF.js";import"./ai-voice-input-VVQ5qY_U.js";import"./mock-adapter-BpgeerXX.js";function e(i){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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
`,t.jsx(s,{})]})}function xt(i={}){const{wrapper:o}={...r(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(e,{...i})}):e(i)}export{xt as default};

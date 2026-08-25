import{j as t,M as n,T as a}from"./blocks-Dcf7-di_.js";import{useMDXComponents as r}from"./index-DfFA3Jd6.js";import{C as s}from"./CustomArgTypes-CpA82i9A.js";import{A as c}from"./AiSidebarChat.stories-oAR4avLU.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-ByKvojHV.js";import"./utils-qCOiSbr7.js";import"./scaffold-DiPo558V.js";import"./class-map-Ch4sPrn0.js";import"./property-0e-aft1k.js";import"./custom-element-UsVr97OX.js";import"./ref-R-CyawPw.js";import"./floating-ui.dom-alButkyJ.js";import"./split-button-weD3IJyI.js";import"./query-assigned-nodes-BOebrTYg.js";import"./if-defined-4astQP6M.js";import"./ai-sidebar-B8A6hZXT.js";import"./when-CI7b_ccM.js";import"./index-DPZ-ZhST.js";import"./ai-modal-DAhYDkBT.js";import"./utils-BGBq21po.js";import"./ai-button-DaKwtqJ5.js";import"./ai-icon-C2yeqLrn.js";import"./ai-gradient-container-De7b3on_.js";import"./ai-disclaimer-h16lDlzt.js";import"./ai-chatbot-base-DaJYipl-.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-BQMOao96.js";import"./ai-attachment-C0YG5VoP.js";import"./ai-spinner-DGmqIGta.js";import"./tooltip-BCZhifmR.js";import"./overlay-QGkHfjyR.js";import"./ai-chat-header-oUG740w7.js";import"./ai-dropdown-menu-DR-tskYZ.js";import"./popover-pj9ihTP8.js";import"./ai-dropdown-menu-item-SbQkEL42.js";import"./ai-agent-info-D1JelOvi.js";import"./ai-agent-selector-DXj65DUH.js";import"./ai-chat-interface-CWfZt0tF.js";import"./ai-prompt-Dyj1qeW_.js";import"./ai-conversations-panel-BinTueD_.js";import"./ai-edit-thread-C6GEaHMd.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-Xq3gzx-2.js";import"./ai-message-thread-yJT8o_yZ.js";import"./ai-response-message-toolbar-C6TQramB.js";import"./ai-thinking-indicator-BIFMpGEK.js";import"./ai-client-message-D3dTVx0a.js";import"./ai-empty-state-BftJTFZy.js";import"./ai-error-message-lgDRqe_O.js";import"./ai-response-message-O3T_YdU3.js";import"./ai-user-message-ByAxbkI0.js";import"./ai-user-message-toolbar-MWH-Fsis.js";import"./ai-suggestions-CFUu-o2k.js";import"./ai-voice-input-pIMcg5h9.js";import"./mock-adapter-BpgeerXX.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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
`,t.jsx(s,{})]})}function ht(e={}){const{wrapper:o}={...r(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(i,{...e})}):i(e)}export{ht as default};

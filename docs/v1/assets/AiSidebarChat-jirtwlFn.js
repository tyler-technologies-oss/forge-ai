import{j as t,M as n,T as a}from"./blocks-DVOqpP8H.js";import{useMDXComponents as r}from"./index-t9llu-Gf.js";import{C as s}from"./CustomArgTypes-CUoWFSvL.js";import{A as c}from"./AiSidebarChat.stories-D5YojRHl.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CMrRvUvX.js";import"./utils-BiNMEL_Y.js";import"./scaffold-DP-DX86o.js";import"./class-map-BKDB7sSQ.js";import"./property-QGRfNHL6.js";import"./custom-element-UsVr97OX.js";import"./ref-BY6Vyj7F.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-BM6__-OF.js";import"./query-assigned-nodes-CKxVThWi.js";import"./if-defined-DHt2KXOo.js";import"./ai-sidebar-Dn-kECI-.js";import"./when-CI7b_ccM.js";import"./index-BXgF015p.js";import"./ai-modal-CgWV1Zw-.js";import"./utils-DIqd7FWX.js";import"./ai-button-Bphix86v.js";import"./ai-icon-H39y9dMV.js";import"./ai-gradient-container-DIUMC8Ne.js";import"./ai-disclaimer-DYJmoCIC.js";import"./ai-chatbot-base-CTc-XLdp.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-DGdlZ7T5.js";import"./ai-attachment-BP5Browv.js";import"./ai-spinner-Bx6d6WT6.js";import"./tooltip-LXXh0UOH.js";import"./overlay-GUKprEb7.js";import"./ai-chat-header-DSM_K5as.js";import"./ai-dropdown-menu-FFpeK-Mt.js";import"./popover-ChcxWc5U.js";import"./ai-dropdown-menu-item-CLjPJgC_.js";import"./ai-agent-info-CYSKNNcp.js";import"./ai-agent-selector-Cl1v7wAs.js";import"./ai-chat-interface-dd4noILU.js";import"./ai-prompt-DrcpaA9J.js";import"./ai-conversations-panel-PZFcFAgU.js";import"./ai-edit-thread-4XIAgKeN.js";import"./ai-file-picker-B5q_l1-g.js";import"./ai-message-thread-C83tVUlV.js";import"./ai-response-message-toolbar-DZmyH8uS.js";import"./ai-thinking-indicator-D6sKnIXS.js";import"./ai-client-message-BnPPeXYo.js";import"./ai-empty-state-CGPrbDYx.js";import"./ai-error-message-D6U-084Y.js";import"./ai-response-message-DhF-XEif.js";import"./ai-user-message-Gxslol3q.js";import"./ai-user-message-toolbar-CYWedd92.js";import"./ai-suggestions-VPbUdTpD.js";import"./ai-voice-input-d3U_0Sn9.js";import"./mock-adapter-BpgeerXX.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

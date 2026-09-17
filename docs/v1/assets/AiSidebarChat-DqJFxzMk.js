import{j as t,M as n,T as a}from"./blocks-BJ6P6wbA.js";import{useMDXComponents as r}from"./index-C5QvBoYv.js";import{C as s}from"./CustomArgTypes-CZsa3bm4.js";import{A as c}from"./AiSidebarChat.stories-6CHVceeg.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-FPwTVxxm.js";import"./utils-BgonhVMT.js";import"./scaffold-Dgyvxk6o.js";import"./class-map-Dv4mo833.js";import"./custom-element-UsVr97OX.js";import"./property-De04r_Wq.js";import"./ref-jwX_Oi9I.js";import"./query-T2N9g4xa.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-J9h4Nxg7.js";import"./query-assigned-elements-6CJlglU1.js";import"./query-assigned-nodes-DK0m2C9Q.js";import"./if-defined-C6HR2Nhv.js";import"./ai-sidebar-CJiQJO0N.js";import"./when-CI7b_ccM.js";import"./index-DqHkRFlN.js";import"./ai-modal-CfzojY4Z.js";import"./utils-DIqd7FWX.js";import"./ai-button-Cclw-eTh.js";import"./ai-icon-CUjXlJ16.js";import"./ai-gradient-container-BjRjft2T.js";import"./ai-disclaimer-BFG_AgkQ.js";import"./ai-chatbot-base-5kNqFmAh.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-B893lbEo.js";import"./ai-attachment-CKP_kyJn.js";import"./ai-spinner-DBoxoIiD.js";import"./tooltip-j-YYWvut.js";import"./overlay-CsQex2FO.js";import"./ai-chat-header-DKepkVUc.js";import"./ai-dropdown-menu-BxySTc4z.js";import"./popover-PQ_VpYqu.js";import"./ai-dropdown-menu-item-CR39z10M.js";import"./ai-agent-info-B_wONI3i.js";import"./ai-agent-selector-dhRMSRfe.js";import"./ai-chat-interface-9kH5ZeOX.js";import"./ai-prompt-CoHb3RTN.js";import"./ai-conversations-panel-Ce2nKzf7.js";import"./ai-edit-thread-BzhFSGTi.js";import"./ai-error-message-CCHMws0O.js";import"./ai-file-picker-B0vkjTLO.js";import"./ai-message-thread-B2vnSncO.js";import"./ai-response-message-toolbar-Dhsi6AEn.js";import"./ai-thinking-indicator-CVlsMSkm.js";import"./ai-client-message-B3kiISU_.js";import"./ai-empty-state-D0iZ7mrq.js";import"./ai-response-message-aPu8zXeU.js";import"./ai-user-message-3Cemhm5u.js";import"./ai-user-message-toolbar-Dvlj17K8.js";import"./ai-suggestions-CjyjU3o2.js";import"./ai-voice-input-CjfcXjPr.js";import"./mock-adapter-BpgeerXX.js";function e(i){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

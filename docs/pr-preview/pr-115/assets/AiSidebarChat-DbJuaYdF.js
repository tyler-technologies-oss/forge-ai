import{j as t,M as n,T as a}from"./blocks-BYkNfCqL.js";import{useMDXComponents as r}from"./index-BtP88gmk.js";import{C as s}from"./CustomArgTypes-x1x4PozR.js";import{A as c}from"./AiSidebarChat.stories-Cpu6d35y.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DxrcIlqE.js";import"./utils-Cm3OEPRV.js";import"./scaffold-Btqm-7lB.js";import"./class-map-Cun9pzS-.js";import"./custom-element-UsVr97OX.js";import"./property-BgfAjtjt.js";import"./ref-BEvzTNKE.js";import"./query-BuwvS0Z-.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-D-ka5zWe.js";import"./query-assigned-elements-Dz4MGyXf.js";import"./query-assigned-nodes-BgwaftGp.js";import"./if-defined-CeL7a31Q.js";import"./ai-sidebar-DBnZ6qce.js";import"./when-CI7b_ccM.js";import"./index-zDMI3kNu.js";import"./ai-modal-B8PJAZ-u.js";import"./utils-DIqd7FWX.js";import"./ai-button-Ba-AAd-2.js";import"./ai-icon-D7cRsvpN.js";import"./ai-gradient-container-CTBtBnXy.js";import"./ai-disclaimer-B4zswCpc.js";import"./ai-chatbot-base-DdINFf82.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-B4bbHXKC.js";import"./ai-chatbot-A3qcNX8X.js";import"./ai-attachment-BjCWFre7.js";import"./ai-spinner-m2IAuJP0.js";import"./tooltip-fXyupsw_.js";import"./overlay-Cw4naUtu.js";import"./ai-chat-header-Br1-IqKh.js";import"./ai-dropdown-menu-BJW9rkh2.js";import"./popover-Bj8mN7Tz.js";import"./ai-dropdown-menu-item-D-kFeR8D.js";import"./ai-agent-info-Co2a7dYB.js";import"./ai-agent-selector-CoTCJQeZ.js";import"./ai-chat-interface-Dzf_hGWr.js";import"./ai-prompt-BtdWZKGb.js";import"./ai-conversations-panel-JiBFEJp2.js";import"./ai-edit-thread-TvjZxWVu.js";import"./ai-error-message-C-EXa3Pj.js";import"./ai-file-picker-BMVtTqr7.js";import"./ai-message-thread-DJ6tNu_j.js";import"./ai-response-message-toolbar-B5pb_4IM.js";import"./ai-thinking-indicator-DpWfaiCw.js";import"./ai-client-message-B85QoNGE.js";import"./ai-empty-state-CLIDCkJ7.js";import"./ai-response-message-CYzYyjln.js";import"./ai-user-message-BGPvTqOx.js";import"./ai-user-message-toolbar-B8swTXk1.js";import"./ai-suggestions-B6mtYb_F.js";import"./ai-voice-input-DjXdTPv5.js";import"./mock-adapter-D0dkxTL5.js";function e(i){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

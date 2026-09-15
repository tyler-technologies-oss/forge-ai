import{j as t,M as n,T as a}from"./blocks-BcbKRsSd.js";import{useMDXComponents as r}from"./index-Bvspi5X_.js";import{C as s}from"./CustomArgTypes-S9YR2g0r.js";import{A as c}from"./AiSidebarChat.stories-Bg4I30F_.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BpFBzDrY.js";import"./utils-xFDN5OoI.js";import"./scaffold-DHtTQcGW.js";import"./class-map-GwhremVD.js";import"./custom-element-UsVr97OX.js";import"./property-gR_NzGdO.js";import"./ref-BfDzH1Dq.js";import"./query-CZCG-zk4.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-DfxxUw_v.js";import"./query-assigned-elements-pTSbYizz.js";import"./query-assigned-nodes-BqOKN2yG.js";import"./if-defined-Dkcaqdnb.js";import"./ai-sidebar-Bqac8cLH.js";import"./when-CI7b_ccM.js";import"./index-Dd_ApHgi.js";import"./ai-modal-CPMj5sHf.js";import"./utils-DIqd7FWX.js";import"./ai-button-Cx0DV6je.js";import"./ai-icon-BRHZ6MBG.js";import"./ai-gradient-container-DSZ1ONR6.js";import"./ai-disclaimer-ASfdkGQT.js";import"./ai-chatbot-base-Cs3ASxe2.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-CGtDWSh_.js";import"./ai-attachment-OAmcy0kg.js";import"./ai-spinner-CoR9Ao4i.js";import"./tooltip-BiEXPFoc.js";import"./overlay-C0QCfe2r.js";import"./ai-chat-header-CEmRavcR.js";import"./ai-dropdown-menu-B6Kp4QAp.js";import"./popover-mhsNlbav.js";import"./ai-dropdown-menu-item-fGxuVZvS.js";import"./ai-agent-info-23ST8Mud.js";import"./ai-agent-selector-C1n7Whhn.js";import"./ai-chat-interface-BtXrWrmS.js";import"./ai-prompt-BX6kyJQA.js";import"./ai-conversations-panel-CS-A-Alc.js";import"./ai-edit-thread-jwIM78W5.js";import"./ai-error-message-mFotfp2X.js";import"./ai-file-picker-D0TSFxfl.js";import"./ai-message-thread-BSdhbDo-.js";import"./ai-response-message-toolbar-CFAzxHl7.js";import"./ai-thinking-indicator-BqEW4WcC.js";import"./ai-client-message-DGJFFit5.js";import"./ai-empty-state-Ba-qPfDz.js";import"./ai-response-message-CJHTE7E0.js";import"./ai-user-message-CbEDogWc.js";import"./ai-user-message-toolbar-DgBTt1kE.js";import"./ai-suggestions-CFdRUVOR.js";import"./ai-voice-input-BAdJEWh4.js";import"./mock-adapter-BpgeerXX.js";function e(i){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

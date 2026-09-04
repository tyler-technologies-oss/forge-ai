import{j as t,M as n,T as a}from"./blocks-CljgmeqY.js";import{useMDXComponents as r}from"./index-LyQ7glNB.js";import{C as s}from"./CustomArgTypes-evKtraF8.js";import{A as c}from"./AiSidebarChat.stories-DU5EJC7-.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-2YRMZZJu.js";import"./utils-BX4gMDEK.js";import"./scaffold-IK8GJKlF.js";import"./class-map-DqZV1JtM.js";import"./property-BoEpMLLw.js";import"./custom-element-UsVr97OX.js";import"./ref--LeVE9LM.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-E0rCKJjL.js";import"./query-assigned-nodes-C3is7UuH.js";import"./if-defined-s9LFKYVM.js";import"./ai-sidebar-C2BAzubu.js";import"./when-CI7b_ccM.js";import"./index-BQhWM1PB.js";import"./ai-modal-t6Hychff.js";import"./utils-DIqd7FWX.js";import"./ai-button-DdL46cPu.js";import"./ai-icon-B30nF0RM.js";import"./ai-gradient-container-UdtvPBWS.js";import"./ai-disclaimer-B5hVwWZs.js";import"./ai-chatbot-base-Djfs0N5l.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-lk6wAi_S.js";import"./ai-attachment-89yYnTHY.js";import"./ai-spinner-9zkLa4RO.js";import"./tooltip-DzgvmAPo.js";import"./overlay-c4eNp3CY.js";import"./ai-chat-header-DvpeKLlj.js";import"./ai-dropdown-menu-B1Rykk3B.js";import"./popover-AUFHiq3c.js";import"./ai-dropdown-menu-item-BAvY36jQ.js";import"./ai-agent-info-BNq34y7h.js";import"./ai-agent-selector-BXqL1ZIG.js";import"./ai-chat-interface-CqkRKHVm.js";import"./ai-prompt-DP-frT8L.js";import"./ai-conversations-panel-DXTDc7sy.js";import"./ai-edit-thread-CaWOH-qf.js";import"./ai-file-picker-BuH2LAGQ.js";import"./ai-message-thread-BnAqodJ7.js";import"./ai-response-message-toolbar-D-tGACPQ.js";import"./ai-thinking-indicator-CHAhk7Cx.js";import"./ai-client-message-DIt5k76r.js";import"./ai-empty-state-CdElkJmS.js";import"./ai-error-message-xAhNo7LD.js";import"./ai-response-message-CraXlDfk.js";import"./ai-user-message-4BXZf5NG.js";import"./ai-user-message-toolbar-C6E4OUxc.js";import"./ai-suggestions-RNcZy9qB.js";import"./ai-voice-input-BPuKWlIW.js";import"./mock-adapter-BpgeerXX.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

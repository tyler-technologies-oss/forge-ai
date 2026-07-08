import{j as t,M as n,T as a}from"./blocks-BaGBbzHk.js";import{useMDXComponents as r}from"./index-Cm2H8N8e.js";import{C as s}from"./CustomArgTypes-DXgPgTNu.js";import{A as c}from"./AiSidebarChat.stories-NjdTK6lX.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CF9r1dbF.js";import"./utils-MZ-Apu34.js";import"./scaffold-B_xxiq0T.js";import"./class-map-C1LG_UmT.js";import"./property-B2e6J01Q.js";import"./custom-element-UsVr97OX.js";import"./ref-BGspCUwM.js";import"./floating-ui.dom-C0FiGihr.js";import"./split-button-C52iej1u.js";import"./query-assigned-nodes-BCZijQiN.js";import"./ai-sidebar-CYsdSOGf.js";import"./when-CI7b_ccM.js";import"./index-vbmFwcUE.js";import"./ai-modal-BrKBNzNg.js";import"./utils-BGBq21po.js";import"./ai-button-CgiQA5Ke.js";import"./ai-icon-Bosn_pQe.js";import"./ai-gradient-container-i8zvC4wC.js";import"./ai-disclaimer-CU-tX-xi.js";import"./ai-chatbot-base-D-4B77pY.js";import"./mock-adapter-DymPxr2h.js";import"./markdown-C0nyZhUE.js";import"./ai-chatbot-CYkJiCew.js";import"./ai-attachment-D9PZMLSQ.js";import"./ai-spinner-gIrXpSIj.js";import"./tooltip-4yAWEj8K.js";import"./overlay-C4R2Atfg.js";import"./ai-chat-header-D05HNpY9.js";import"./ai-dropdown-menu-CSN5rE17.js";import"./if-defined-CwBVknGD.js";import"./popover-B9jS5rTM.js";import"./ai-dropdown-menu-item-qSQDJME8.js";import"./ai-agent-info-BsK3U8ZB.js";import"./ai-agent-selector-CbcaAfj_.js";import"./ai-chat-interface-CBwRzUFE.js";import"./ai-prompt-Bxd2nryu.js";import"./ai-conversations-panel-CbfnduTY.js";import"./ai-edit-thread-Cyk8sVO8.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-Dn1r6g8m.js";import"./ai-message-thread-CShBz8uu.js";import"./ai-response-message-toolbar-CHTQSY6N.js";import"./ai-empty-state-BOMlt_-r.js";import"./ai-error-message-BhoeyZEQ.js";import"./ai-response-message-RvPb5AQ_.js";import"./ai-thinking-indicator-d9EmIVpo.js";import"./ai-user-message-Dnr2ecqU.js";import"./ai-user-message-toolbar-BHlYEwR2.js";import"./ai-suggestions-Cn0H8rxp.js";import"./ai-voice-input-CusnSWCW.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

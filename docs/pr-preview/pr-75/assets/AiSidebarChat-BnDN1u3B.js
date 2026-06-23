import{j as t,M as n,T as a}from"./blocks-2ZFvFfi3.js";import{useMDXComponents as r}from"./index-ZWUF4VMt.js";import{C as s}from"./CustomArgTypes-BibJ30Lq.js";import{A as c}from"./AiSidebarChat.stories-BSsXiFWD.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C2o41EYo.js";import"./utils-Bikz1eRQ.js";import"./scaffold-C6e2z5jS.js";import"./class-map-CUx3F5tw.js";import"./property-778xKGhN.js";import"./custom-element-UsVr97OX.js";import"./ref-DNfKLuG9.js";import"./floating-ui.dom-C0FiGihr.js";import"./split-button-CCVjlI7-.js";import"./query-assigned-nodes-DoUIWdv6.js";import"./ai-sidebar-CH0PCaPf.js";import"./when-CI7b_ccM.js";import"./index-B0vKcRtE.js";import"./ai-modal-CF1EB23c.js";import"./utils-BGBq21po.js";import"./ai-button-B-d9XTMa.js";import"./ai-icon-HQ2ZYr6N.js";import"./ai-gradient-container-CMPdNj2m.js";import"./ai-disclaimer-Db8aa0Xh.js";import"./ai-chatbot-base-Dqh4As3I.js";import"./mock-adapter-B6avymXj.js";import"./utils-B8dv6FBY.js";import"./ai-chatbot-B-1khugo.js";import"./ai-attachment-DQZ2469j.js";import"./ai-spinner-DHZ9KWDh.js";import"./tooltip-BPU2yJd0.js";import"./overlay-PREfkCzS.js";import"./ai-chat-header-DJjRozp7.js";import"./ai-dropdown-menu-B2rg6M_O.js";import"./if-defined-CNXFvrLy.js";import"./popover-D4NlkBmS.js";import"./ai-dropdown-menu-item-DDKi1Nh7.js";import"./ai-agent-info-DtuHYTCE.js";import"./ai-agent-selector-CKD185hu.js";import"./ai-chat-interface-QaHqA2Kl.js";import"./ai-prompt-Bvg-8R9J.js";import"./ai-conversations-panel-DyXVi2M-.js";import"./ai-edit-thread-CtkM5XGT.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-CrY1hUtp.js";import"./ai-message-thread-CvKtGfKE.js";import"./ai-response-message-toolbar-DR2RJB5E.js";import"./ai-empty-state-CXWBlGKK.js";import"./ai-error-message-CJa6Rm7p.js";import"./ai-response-message-c8DsCjs5.js";import"./ai-thinking-indicator-JED1TLFb.js";import"./ai-user-message-Cr2vTxXc.js";import"./ai-user-message-toolbar-BOdeRbpc.js";import"./ai-suggestions-Ct4kJCWq.js";import"./ai-voice-input-C55-anIu.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

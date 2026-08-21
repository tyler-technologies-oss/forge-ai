import{j as t,M as n,T as a}from"./blocks-h4-PBAW1.js";import{useMDXComponents as r}from"./index-BjXugjM0.js";import{C as s}from"./CustomArgTypes-CzUX8J-m.js";import{A as c}from"./AiSidebarChat.stories-DCkC2lFG.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DiOCH7Dj.js";import"./utils-DkDZKAQP.js";import"./scaffold-DT2z-NGc.js";import"./class-map-dvwAE95Y.js";import"./property-B0F2CeGY.js";import"./custom-element-UsVr97OX.js";import"./ref-DgWQRCQ7.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-CTh06gCM.js";import"./query-assigned-nodes-C1LoiU-7.js";import"./if-defined-gI1lzchr.js";import"./ai-sidebar-DLdX-YID.js";import"./when-CI7b_ccM.js";import"./index-ZPrl-vgC.js";import"./ai-modal-Dpj2sVQw.js";import"./utils-DIqd7FWX.js";import"./ai-button-HtHwqIjZ.js";import"./ai-icon-CTg_hCHt.js";import"./ai-gradient-container-BxfRMC7S.js";import"./ai-disclaimer-BTm8r_6Y.js";import"./ai-chatbot-base-VJAtgYHz.js";import"./mock-adapter-ph_xQ6k2.js";import"./markdown-CtLA8yAF.js";import"./ai-chatbot-CYeSskXT.js";import"./ai-attachment-CoSBFMO8.js";import"./ai-spinner-BQ73pPV9.js";import"./tooltip-C7ZPBmgU.js";import"./overlay-WkS8ATbn.js";import"./ai-chat-header-Dq4AC9JO.js";import"./ai-dropdown-menu-C__67-my.js";import"./popover-BYFrxvpx.js";import"./ai-dropdown-menu-item-C9wGXfVG.js";import"./ai-agent-info-eAzT3svC.js";import"./ai-agent-selector-y4kVowun.js";import"./ai-chat-interface-CCfb5yhA.js";import"./ai-prompt-B4mox89Q.js";import"./ai-conversations-panel-BQH_9ceB.js";import"./ai-edit-thread-cZSVIDl_.js";import"./ai-file-picker-B_82MM-o.js";import"./ai-message-thread-DLb8FPqC.js";import"./ai-response-message-toolbar-Bku-lA6p.js";import"./ai-thinking-indicator-BC8bkXZn.js";import"./ai-empty-state-B2idIC9j.js";import"./ai-error-message-Dth-O15t.js";import"./ai-response-message-SykWk7qj.js";import"./ai-user-message-C3QFQhX8.js";import"./ai-user-message-toolbar-B6uCF77o.js";import"./ai-suggestions-DGEDYS6q.js";import"./ai-voice-input-BJLUEodR.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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
`,t.jsx(s,{})]})}function dt(e={}){const{wrapper:o}={...r(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(i,{...e})}):i(e)}export{dt as default};

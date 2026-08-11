import{j as t,M as n,T as a}from"./blocks-XSgIOzBr.js";import{useMDXComponents as r}from"./index-BBhWSdBn.js";import{C as s}from"./CustomArgTypes-BsBPTET5.js";import{A as c}from"./AiSidebarChat.stories-B_TdMwoj.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CT8aTrUD.js";import"./utils-Cp678McA.js";import"./scaffold-BhZ0tNEP.js";import"./class-map-DqaYJRwU.js";import"./property-BYN9SZug.js";import"./custom-element-UsVr97OX.js";import"./ref-kKaXfD1S.js";import"./floating-ui.dom-alButkyJ.js";import"./split-button-B-qhQz7B.js";import"./query-assigned-nodes-Bae88zyY.js";import"./provide-Bxw6gKTd.js";import"./consume-D3B5J4hk.js";import"./if-defined-Ctqvb-ON.js";import"./ai-sidebar-B5J38lXk.js";import"./when-CI7b_ccM.js";import"./index-BVKmBZ7P.js";import"./ai-modal-TqbNCh2K.js";import"./utils-BGBq21po.js";import"./ai-button-CLO3a06m.js";import"./ai-icon-B_MpfO3w.js";import"./ai-gradient-container-CKrFco1R.js";import"./ai-disclaimer-DabpXKif.js";import"./ai-chatbot-base-CWYaAuSG.js";import"./ai-message-thread-CwqhL2dx.js";import"./markdown-CtLA8yAF.js";import"./ai-response-message-toolbar-BwlSm175.js";import"./tooltip-CW0bSAwg.js";import"./overlay-CkC9bm_E.js";import"./popover-C31U5eWB.js";import"./ai-spinner-CbunOA-Q.js";import"./ai-thinking-indicator-1U5Ry1f2.js";import"./ai-empty-state-B8rhv3e3.js";import"./ai-error-message-D1Ga38or.js";import"./ai-response-message-CnZ_638a.js";import"./ai-user-message-CMqBaTZX.js";import"./ai-user-message-toolbar-bdzNKp7D.js";import"./mock-adapter-6zZ6n2sP.js";import"./ai-chatbot-DKovxT-G.js";import"./ai-attachment-ZtYpr-6d.js";import"./ai-chat-header-B5KievFi.js";import"./ai-dropdown-menu-CF8QeNYI.js";import"./ai-dropdown-menu-item-CISMvfun.js";import"./ai-agent-info-BrzqVyJE.js";import"./ai-agent-selector-BDdhk9WV.js";import"./ai-chat-interface-CjGxkuME.js";import"./ai-prompt-Dkiq_vL3.js";import"./ai-conversations-panel-MZL5s_XE.js";import"./ai-edit-thread-04tCXzP7.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-8c3pAnbZ.js";import"./ai-suggestions-D00Es9-w.js";import"./ai-voice-input-D704c7Ra.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

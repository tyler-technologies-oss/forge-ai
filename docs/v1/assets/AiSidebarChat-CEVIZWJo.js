import{j as t,M as n,T as a}from"./blocks-C-dCWL8a.js";import{useMDXComponents as r}from"./index-BHYAh8Fq.js";import{C as s}from"./CustomArgTypes-DPqhwroz.js";import{A as c}from"./AiSidebarChat.stories-G4yDyBx2.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BXMJy_H5.js";import"./utils-Ci4bjnpZ.js";import"./scaffold-raNEgom5.js";import"./class-map-DDQn7RKi.js";import"./property-DxtuxblG.js";import"./custom-element-UsVr97OX.js";import"./ref-DGvLtm0i.js";import"./floating-ui.dom-alButkyJ.js";import"./split-button-Dfk5OYZD.js";import"./query-assigned-nodes-BLsdObf6.js";import"./if-defined-AmG7YlOc.js";import"./ai-sidebar-M4LIIeTf.js";import"./when-CI7b_ccM.js";import"./index-iGa36sHG.js";import"./ai-modal-Bhw5QMKg.js";import"./utils-BGBq21po.js";import"./ai-button-oH-LvijU.js";import"./ai-icon-BqaJ6p6K.js";import"./ai-gradient-container-Bddj_taG.js";import"./ai-disclaimer-Bj2flmyq.js";import"./ai-chatbot-base-DoXFw_Z8.js";import"./agent-adapter-ByAhrqd5.js";import"./markdown-BmTprob7.js";import"./ai-chatbot-5xETNBCK.js";import"./ai-attachment-4RMJ2V-o.js";import"./ai-spinner-DDde5dN4.js";import"./tooltip-DaMf3_Os.js";import"./overlay-DqmmALS5.js";import"./ai-chat-header-DP6emkAT.js";import"./ai-dropdown-menu-5hVLRy57.js";import"./popover-BkOanYw8.js";import"./ai-dropdown-menu-item-D4408ybD.js";import"./ai-agent-info-0NuxMdng.js";import"./ai-agent-selector-CjytUF17.js";import"./ai-chat-interface-lhrmh0I9.js";import"./ai-prompt-BVJglB13.js";import"./ai-conversations-panel-AIixJ9FE.js";import"./ai-edit-thread-CbvYgpHy.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-B8VCL8_m.js";import"./ai-message-thread-o2em9lh_.js";import"./ai-response-message-toolbar-ZdkwTZbS.js";import"./ai-thinking-indicator-B-MA8HNu.js";import"./ai-client-message-DfMrjWxl.js";import"./ai-empty-state-aKcGFe-l.js";import"./ai-error-message-BgcQanyS.js";import"./ai-response-message-DL_kciQr.js";import"./ai-user-message-CS0DCKtd.js";import"./ai-user-message-toolbar-lwtDwFNa.js";import"./ai-suggestions-CwtkP-P6.js";import"./ai-voice-input-Bj-1vico.js";import"./mock-adapter-BCD0_cR6.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

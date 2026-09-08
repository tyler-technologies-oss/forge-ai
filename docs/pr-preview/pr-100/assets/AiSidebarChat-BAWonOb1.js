import{j as t,M as n,T as a}from"./blocks-Cq_s8mW4.js";import{useMDXComponents as r}from"./index-BWjv3K9s.js";import{C as s}from"./CustomArgTypes-CCbojtDc.js";import{A as c}from"./AiSidebarChat.stories-2ZAfQefR.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CMqpidyD.js";import"./utils-BgDgMwuK.js";import"./scaffold-lc0pEJCI.js";import"./class-map-Cee3Ru6l.js";import"./custom-element-UsVr97OX.js";import"./property-UTg6fKn8.js";import"./ref-BdCVDbx1.js";import"./query-LLfzfoTQ.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-xc5wDH8P.js";import"./query-assigned-elements-DsZdSlp5.js";import"./query-assigned-nodes-CfOzAFon.js";import"./provide-Bxw6gKTd.js";import"./consume-D3B5J4hk.js";import"./if-defined-BFRCVrxJ.js";import"./ai-sidebar-DRyUfMAv.js";import"./when-CI7b_ccM.js";import"./index-DSTV2O-r.js";import"./ai-modal-CiIFraxs.js";import"./utils-DIqd7FWX.js";import"./ai-button-CG40eEUl.js";import"./ai-icon-idzaSzy8.js";import"./ai-gradient-container-DYIxxphU.js";import"./ai-disclaimer-CLM1OKro.js";import"./ai-chatbot-base-BrDMhVeQ.js";import"./ai-message-thread-DtDkmlMJ.js";import"./utils-CwmN9dOd.js";import"./ai-response-message-toolbar-C_crbQKk.js";import"./tooltip-DFWELXDf.js";import"./overlay-BMdxoq9W.js";import"./popover-C3kSoxY5.js";import"./ai-spinner-Dm874uye.js";import"./ai-thinking-indicator-C00m-hLm.js";import"./ai-empty-state-B_cao-nv.js";import"./ai-client-message-DlOgtkXx.js";import"./ai-error-message-BPEQWjjZ.js";import"./ai-response-message-C8iE1417.js";import"./ai-user-message-DdD9-QWH.js";import"./ai-user-message-toolbar-DnRMaBm9.js";import"./agent-adapter-CiODA7QC.js";import"./ai-chatbot-czwvr4sN.js";import"./ai-attachment-DY5kbVEd.js";import"./ai-chat-header-DklFpnTd.js";import"./ai-dropdown-menu-DtTuPzYM.js";import"./ai-dropdown-menu-item-D7_dEO6j.js";import"./ai-agent-info-C9WH-Bfd.js";import"./ai-agent-selector-Pyd8ON0z.js";import"./ai-chat-interface-KUqEGZ5F.js";import"./ai-prompt-DB5Ws98_.js";import"./ai-conversations-panel-CUCz8DtA.js";import"./ai-edit-thread-CS1XnJH-.js";import"./ai-file-picker-5eOjqAq6.js";import"./ai-suggestions-C1Xh4d2x.js";import"./ai-voice-input-26zFn7Xu.js";import"./mock-adapter-BIlxH578.js";function e(i){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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
`,t.jsx(s,{})]})}function ut(i={}){const{wrapper:o}={...r(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(e,{...i})}):e(i)}export{ut as default};

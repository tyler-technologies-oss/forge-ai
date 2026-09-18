import{j as e,M as o,T as s}from"./blocks-dtQ4_oy7.js";import{useMDXComponents as n}from"./index-wKQio2n4.js";import{C as a}from"./CustomArgTypes-Wa4_H1xK.js";import{A as d}from"./AiSidebarChat.stories-NFgr9uYH.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DyQYgWl0.js";import"./utils-BLmcI4rU.js";import"./scaffold-B6zxWFJS.js";import"./class-map-f9Bf7M9J.js";import"./custom-element-UsVr97OX.js";import"./property-CmgIO3_d.js";import"./ref-8wIzWuNC.js";import"./query-BBNLfp-r.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-ipudLEL4.js";import"./query-assigned-elements-CUOxr20e.js";import"./query-assigned-nodes-iTfdJNRX.js";import"./if-defined-B4mzDfpo.js";import"./ai-sidebar-C4UqLBHL.js";import"./when-CI7b_ccM.js";import"./index-DwyLQWxx.js";import"./ai-modal-CbDWTDmb.js";import"./utils-DIqd7FWX.js";import"./ai-button-Crl2s3zM.js";import"./ai-icon-CKunhnjC.js";import"./ai-gradient-container-CvWRe7Bu.js";import"./ai-disclaimer-Clywl8J1.js";import"./ai-chatbot-base-BZq1tcNn.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-CeQn4hwz.js";import"./ai-attachment-6OUZsvaU.js";import"./ai-spinner-DKgKBs8M.js";import"./tooltip-Cosh5o8D.js";import"./overlay-CPyHJzs7.js";import"./ai-chat-header-DXhhG_77.js";import"./ai-dropdown-menu-LVxiAyqQ.js";import"./popover-JJJpkSw8.js";import"./ai-dropdown-menu-item-CziZ-7Fa.js";import"./ai-agent-info-n6yf2k-d.js";import"./ai-agent-selector-IF7SGBII.js";import"./ai-chat-interface-CofUt4_C.js";import"./ai-prompt-C70WV34v.js";import"./ai-conversations-panel-B-fgonyP.js";import"./ai-edit-thread-Cqzm81WR.js";import"./ai-error-message-DrmNAv5h.js";import"./ai-file-picker-9HgUSAiM.js";import"./ai-message-thread-DX_q-S9Y.js";import"./ai-response-message-toolbar-Cq4V_X2p.js";import"./ai-thinking-indicator-BODV8OYa.js";import"./ai-client-message-1j0kadSB.js";import"./ai-empty-state-BdaKkruJ.js";import"./ai-response-message-C2_AzxNa.js";import"./ai-user-message-B2yGVQna.js";import"./ai-user-message-toolbar-tZSp2GOg.js";import"./ai-suggestions-Dm2RAip_.js";import"./ai-voice-input-DA3kaA_Y.js";import"./mock-adapter-BpgeerXX.js";function r(t){const i={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
`,e.jsx(s,{children:"AI Sidebar Chat"}),`
`,e.jsxs(i.p,{children:["The AI Sidebar Chat component is a form factor component that positions a slotted chatbot in a sidebar or fullscreen modal. It manages positioning and expand/collapse state while delegating all chat functionality to the slotted ",e.jsx(i.code,{children:"ai-chatbot"})," component. When expanded, the chat is displayed in a fullscreen modal. When collapsed, it's displayed in a sidebar."]}),`
`,e.jsx(i.h2,{id:"features",children:"Features"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Composition-based"}),": Accepts slotted chatbot component for maximum flexibility"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Built-in event handling"}),": Manages open/close events and expand/collapse interactions"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Dual display modes"}),": Sidebar for normal view, fullscreen modal when expanded"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Direct chatbot access"}),": Exposes slotted chatbot via ",e.jsx(i.code,{children:"chatbot"})," property for programmatic control"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Event bubbling"}),": All chatbot events bubble through unchanged"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Resizable sidebar"}),": Width is retained when switching between sidebar and modal"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Width persistence"}),": Remembers the resized width across page loads"]}),`
`]}),`
`,e.jsx(i.h2,{id:"when-to-use",children:"When to Use"}),`
`,e.jsx(i.p,{children:"Use the AI Sidebar Chat component when you want:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"A sidebar container for your chatbot that can expand to fullscreen"}),`
`,e.jsx(i.li,{children:"Standard sidebar positioning without custom logic"}),`
`,e.jsx(i.li,{children:"Built-in modal transition for expanded view"}),`
`,e.jsx(i.li,{children:"Direct control over the chatbot configuration"}),`
`]}),`
`,e.jsx(i.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<forge-ai-sidebar-chat>
  <forge-ai-chatbot .adapter="\\\${adapter}" file-upload="on"> </forge-ai-chatbot>
</forge-ai-sidebar-chat>
`})}),`
`,e.jsx(i.h3,{id:"programmatic-control",children:"Programmatic Control"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-javascript",children:`const sidebarChat = document.querySelector('forge-ai-sidebar-chat');

// Control form factor
sidebarChat.show();
sidebarChat.close();
sidebarChat.expand(); // Switch to fullscreen modal
sidebarChat.collapse(); // Return to sidebar

// Access slotted chatbot
const chatbot = sidebarChat.chatbot;
chatbot.sendMessage('Hello!');
`})}),`
`,e.jsx(i.h3,{id:"resizing-and-width-persistence",children:"Resizing and Width Persistence"}),`
`,e.jsxs(i.p,{children:["The sidebar width is retained when expanding to the modal and collapsing back, and remembered across page reloads. Each tab keeps its own width via ",e.jsx(i.code,{children:"sessionStorage"}),"; new tabs start at the most recently used width on the origin via ",e.jsx(i.code,{children:"localStorage"}),". See the Sidebar primitive docs for details."]}),`
`,e.jsxs(i.p,{children:["Listen for ",e.jsx(i.code,{children:"forge-ai-sidebar-chat-resize"})," to react to width changes. ",e.jsx(i.code,{children:"event.detail.width"})," contains the new width in pixels."]}),`
`,e.jsx(i.h2,{id:"api",children:"API"}),`
`,e.jsx(a,{}),`
`,e.jsx(i.h3,{id:"events",children:"Events"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"forge-ai-sidebar-chat-open"}),": Fired when the sidebar chat is opened"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"forge-ai-sidebar-chat-close"}),": Fired when the sidebar chat is closed"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"forge-ai-sidebar-chat-expand"}),": Fired when the sidebar chat is expanded to modal"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"forge-ai-sidebar-chat-collapse"}),": Fired when the sidebar chat is collapsed from modal"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"forge-ai-sidebar-chat-resize"}),": Fired when the sidebar width is resized"]}),`
`]})]})}function xe(t={}){const{wrapper:i}={...n(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(r,{...t})}):r(t)}export{xe as default};

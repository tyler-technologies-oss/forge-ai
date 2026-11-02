import{j as e,M as o,T as s,C as a}from"./blocks-BXdAqhM4.js";import{useMDXComponents as r}from"./index-D8Wl0gln.js";import{C as d}from"./CustomArgTypes-CGwAoTko.js";import{A as c,W as h}from"./AiSidebarChat.stories-qHjdP52v.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B2iIPFms.js";import"./utils-Dc-_7Ywc.js";import"./scaffold-Cil7DQOg.js";import"./class-map-2BfWKpIT.js";import"./custom-element-UsVr97OX.js";import"./property-De7pFSXt.js";import"./ref-CGaQPDJ6.js";import"./query-Dqn61YSF.js";import"./style-map-LJQtHGIb.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-XRMcNRLj.js";import"./query-assigned-elements-CC18lbKK.js";import"./query-assigned-nodes-rK0fzJJV.js";import"./context-consumer-CIN_xSLl.js";import"./if-defined-PssoKMmO.js";import"./context-provider-NnzmXA_k.js";import"./ai-sidebar-ahuXthfN.js";import"./when-CI7b_ccM.js";import"./storage-utils-C8x8JGnW.js";import"./index-DE4c5nOq.js";import"./ai-modal-BhQp6dc8.js";import"./utils-DIqd7FWX.js";import"./ai-button-Cs5n0Gx2.js";import"./ai-icon-BT3VehvF.js";import"./ai-gradient-container-B9D2cQiF.js";import"./ai-disclaimer-CJ7sYSoG.js";import"./ai-canvas-ldwguwcS.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-pfIOHICc.js";import"./ai-message-thread-B-Layra-.js";import"./ai-response-message-toolbar-BKzakm2o.js";import"./tooltip-Dq656zF8.js";import"./overlay-CTn02HG_.js";import"./popover-BSFCTzJf.js";import"./ai-artifact-card-xOsoSJ1c.js";import"./ai-spinner-L2_xbDtg.js";import"./ai-thinking-indicator-SkIhQdgs.js";import"./ai-client-message-BnAurKKy.js";import"./ai-empty-state-iR-y05I9.js";import"./ai-error-message-CLNhY57w.js";import"./ai-response-message-C9kcIxeK.js";import"./ai-user-message-DLOdKByt.js";import"./ai-user-message-toolbar-C_R7timq.js";import"./ai-chat-header-DUqE_QCd.js";import"./ai-dropdown-menu-BSohdQMa.js";import"./ai-dropdown-menu-item-CaSd2Hn1.js";import"./ai-agent-info-CKI1FDmN.js";import"./ai-agent-selector-2LFpxz42.js";import"./ai-chatbot-B6HE7nBB.js";import"./ai-attachment-CL6WRLNe.js";import"./ai-chat-interface-Bmuc7ry6.js";import"./ai-prompt-GV7h7WkK.js";import"./ai-conversations-panel-DjWNlmdB.js";import"./ai-edit-thread-BGgCz7MH.js";import"./ai-file-picker-DnA0Sjk2.js";import"./ai-suggestions-CBbcgOeU.js";import"./ai-voice-input-q_eUNLj3.js";import"./mock-adapter-tBtA3Vjv.js";import"./canvas-table-tool-DwzndKgf.js";import"./create-tool-renderer-BxivDorU.js";function n(t){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
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
`,e.jsx(i.h3,{id:"artifact-canvas",children:"Artifact Canvas"}),`
`,e.jsxs(i.p,{children:["Artifacts open in a modal over the sidebar, using the slotted chatbot's canvas API (",e.jsx(i.code,{children:"openCanvas()"}),", ",e.jsx(i.code,{children:"closeCanvas()"}),", the ",e.jsx(i.code,{children:"forge-ai-chatbot-canvas-open"})," and ",e.jsx(i.code,{children:"-canvas-close"})," events). The sidebar keeps its width underneath. See ",e.jsx(i.a,{href:"?path=/docs/ai-components-primitives-chatbot--docs",children:"Chatbot → Artifact Canvas"})," for the details."]}),`
`,e.jsx(a,{of:h}),`
`,e.jsx(i.h2,{id:"api",children:"API"}),`
`,e.jsx(d,{}),`
`,e.jsx(i.h3,{id:"events",children:"Events"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"forge-ai-sidebar-chat-open"}),": Fired when the sidebar chat is opened"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"forge-ai-sidebar-chat-close"}),": Fired when the sidebar chat is closed"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"forge-ai-sidebar-chat-expand"}),": Fired when the sidebar chat is expanded to modal"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"forge-ai-sidebar-chat-collapse"}),": Fired when the sidebar chat is collapsed from modal"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"forge-ai-sidebar-chat-resize"}),": Fired when the sidebar width is resized"]}),`
`]})]})}function Ae(t={}){const{wrapper:i}={...r(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(n,{...t})}):n(t)}export{Ae as default};

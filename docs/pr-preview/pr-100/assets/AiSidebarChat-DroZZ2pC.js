import{j as e,M as o,T as s,C as a}from"./blocks-BYZcTz10.js";import{useMDXComponents as r}from"./index-RBU1lV0J.js";import{C as d}from"./CustomArgTypes-CINl-ndf.js";import{A as c,W as h}from"./AiSidebarChat.stories-D1HqvXMs.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DYSaFelY.js";import"./utils-DGoFphpS.js";import"./scaffold-BjaAFHFX.js";import"./class-map-kByeKa_n.js";import"./custom-element-UsVr97OX.js";import"./property-DkFqThWM.js";import"./ref-bUehiFAX.js";import"./query-Dp9XAxQR.js";import"./style-map-f8u1Y54S.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-BtbQt3R2.js";import"./query-assigned-elements-Bmda_lBl.js";import"./query-assigned-nodes-Ce0C7lls.js";import"./provide-RUGHcQ60.js";import"./consume-BHVW6YKk.js";import"./if-defined-DH2E4TDh.js";import"./ai-sidebar-HC2FTTcF.js";import"./when-CI7b_ccM.js";import"./storage-utils-C8x8JGnW.js";import"./index-DRmfJBOV.js";import"./ai-modal-BFFKKtB6.js";import"./utils-DIqd7FWX.js";import"./ai-button-BM7EBKKr.js";import"./ai-icon-Br_Z5HN7.js";import"./ai-gradient-container-DJNzp8E5.js";import"./ai-disclaimer-ab3WJ_Kh.js";import"./ai-canvas-CDaPtOg-.js";import"./ai-message-thread-vIa1E2kF.js";import"./utils-BRoM8yNS.js";import"./ai-response-message-toolbar-LbzA22Bi.js";import"./tooltip-BlTgUL6G.js";import"./overlay-CVsvSJBe.js";import"./popover-Bi1s3AUw.js";import"./ai-artifact-card-C03RMoP-.js";import"./ai-spinner-D9H1n32d.js";import"./ai-thinking-indicator-SISBpi14.js";import"./ai-empty-state-Cs0blS8-.js";import"./ai-client-message-HVbZRQg-.js";import"./ai-error-message-Bjnw0-Id.js";import"./ai-response-message-wlghvFlR.js";import"./ai-user-message-Dq8qaUZ9.js";import"./ai-user-message-toolbar-Dg9dSk6A.js";import"./agent-adapter-CiODA7QC.js";import"./ai-chat-header-D9rliu_W.js";import"./ai-dropdown-menu-B8je-9Sd.js";import"./ai-dropdown-menu-item-Dz1JOG7x.js";import"./ai-agent-info-LDKpp5xR.js";import"./ai-agent-selector-Be1Yty9X.js";import"./ai-chatbot-A9D-6QP8.js";import"./ai-attachment-C1ZHMn2W.js";import"./ai-chat-interface-bMTJaJzB.js";import"./ai-prompt-bYTsxnub.js";import"./ai-conversations-panel-1NI6IWDY.js";import"./ai-edit-thread-BGUxgRSd.js";import"./ai-file-picker-CX1nU8Gb.js";import"./ai-suggestions-DIhPjnEO.js";import"./ai-voice-input-CYHj0qLq.js";import"./mock-adapter-BkYea8t_.js";import"./canvas-table-tool-BkQqTCxr.js";import"./create-tool-renderer-BxivDorU.js";function n(t){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
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

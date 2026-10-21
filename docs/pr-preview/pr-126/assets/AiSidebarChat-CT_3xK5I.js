import{j as e,M as o,T as s,C as a}from"./blocks-BRTFfZTW.js";import{useMDXComponents as r}from"./index-CFIrZNWx.js";import{C as d}from"./CustomArgTypes-Di7JqghJ.js";import{A as c,W as h}from"./AiSidebarChat.stories-BLt2tuRF.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B0FAvQxw.js";import"./utils-CIN-DptI.js";import"./scaffold-D7npUdzY.js";import"./class-map-D0yJruiV.js";import"./custom-element-UsVr97OX.js";import"./property-BcVae0nA.js";import"./ref-DFNpC9p1.js";import"./query-Dco82qd-.js";import"./style-map-BckEYuWK.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-BQxL9Ps8.js";import"./query-assigned-elements-CqfNGEkr.js";import"./query-assigned-nodes-XGC4ql_x.js";import"./context-consumer-CIN_xSLl.js";import"./if-defined-zmP3W5JS.js";import"./context-provider-NnzmXA_k.js";import"./ai-sidebar-DcNmbcyf.js";import"./when-CI7b_ccM.js";import"./storage-utils-C8x8JGnW.js";import"./index-p1SNVVGT.js";import"./ai-modal-CJbTkz6N.js";import"./utils-DIqd7FWX.js";import"./ai-button-DzE2OBmI.js";import"./ai-icon-OdUJk7Rx.js";import"./ai-gradient-container-mNAtvNn7.js";import"./ai-disclaimer-D-pFBMyA.js";import"./ai-canvas-CsvbbqJl.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-B4bbHXKC.js";import"./ai-message-thread-D1kZ8AFx.js";import"./ai-response-message-toolbar-BWEspZgZ.js";import"./tooltip-qm9lEQhw.js";import"./overlay-DCVAKiV0.js";import"./popover-Cz64sAjV.js";import"./ai-artifact-card-vUBlxPHx.js";import"./ai-spinner-B_sGbXxh.js";import"./ai-thinking-indicator-ClZcSSOx.js";import"./ai-client-message-BeWl6SBf.js";import"./ai-empty-state-DVH3aBPU.js";import"./ai-error-message-D9c5BfJ5.js";import"./ai-response-message-NAUW8wnz.js";import"./ai-user-message-DLhd2oZf.js";import"./ai-user-message-toolbar-CgPUB3q7.js";import"./ai-chat-header-COTs6uov.js";import"./ai-dropdown-menu-aNWOG36H.js";import"./ai-dropdown-menu-item-IySpgsAM.js";import"./ai-agent-info-n_qJFaVg.js";import"./ai-agent-selector-BbV73Fje.js";import"./ai-chatbot-CBePH4St.js";import"./ai-attachment-SMUIAPeW.js";import"./ai-chat-interface-C-g4kQtR.js";import"./ai-prompt-4sWSCp-e.js";import"./ai-conversations-panel-BtiwqAcX.js";import"./ai-edit-thread-BzS5B1s7.js";import"./ai-file-picker-DJvRBhBU.js";import"./ai-suggestions-BzPsUb_z.js";import"./ai-voice-input-rXwPZhne.js";import"./mock-adapter-BpXd5o7R.js";import"./canvas-table-tool-DoMMfIj8.js";import"./create-tool-renderer-BxivDorU.js";function n(t){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
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

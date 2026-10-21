import{j as e,M as o,T as s}from"./blocks-IxAfAUqv.js";import{useMDXComponents as n}from"./index-DpamjPI5.js";import{C as a}from"./CustomArgTypes-UvyJiGzn.js";import{A as d}from"./AiSidebarChat.stories-CUDx3bRa.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BbMGqXF-.js";import"./utils-wxzMc8Lz.js";import"./scaffold-D6ArZGii.js";import"./class-map-B09pr6n_.js";import"./custom-element-UsVr97OX.js";import"./property-BeSBlfHJ.js";import"./ref-_0g1XPVM.js";import"./query-CMCy8NNY.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-yCmMrydM.js";import"./query-assigned-elements-BZ1g8U-l.js";import"./query-assigned-nodes-Cl5NwPHY.js";import"./provide-Bxw6gKTd.js";import"./consume-D3B5J4hk.js";import"./if-defined-DTN-FRxt.js";import"./ai-sidebar--H4iTcb8.js";import"./when-CI7b_ccM.js";import"./index-j8YnWGIG.js";import"./ai-modal-D-WzSVys.js";import"./utils-DIqd7FWX.js";import"./ai-button-RKzirZYX.js";import"./ai-icon-BYise_xm.js";import"./ai-gradient-container-CJ6ZOGLS.js";import"./ai-disclaimer-BkcrRCwY.js";import"./ai-chatbot-base-JCLZMZon.js";import"./ai-message-thread-Cgey95qd.js";import"./utils-CwmN9dOd.js";import"./ai-response-message-toolbar-CYjLZaWW.js";import"./tooltip-BRIRHCVz.js";import"./overlay-BHZmvB8W.js";import"./popover-DAsYSN8B.js";import"./ai-spinner-DPBPOPj8.js";import"./ai-thinking-indicator-402n54k4.js";import"./ai-empty-state-BJ7dV3St.js";import"./ai-client-message-ByrGellB.js";import"./ai-error-message-GoREP76Y.js";import"./ai-response-message-FOA6WGb2.js";import"./ai-user-message-CVmEXTCg.js";import"./ai-user-message-toolbar-CKp7vlRs.js";import"./agent-adapter-CiODA7QC.js";import"./ai-chatbot-Dn0fngtF.js";import"./ai-attachment-CD0ghk8C.js";import"./ai-chat-header-CE5ezCmo.js";import"./ai-dropdown-menu-DShEoju9.js";import"./ai-dropdown-menu-item-B4M2zrkd.js";import"./ai-agent-info-MZ5AV6qL.js";import"./ai-agent-selector-CNRQd-Az.js";import"./ai-chat-interface-CC7zjyxl.js";import"./ai-prompt-Ca-_43sO.js";import"./ai-conversations-panel-C5tLdCoP.js";import"./ai-edit-thread-Cf1C0JnO.js";import"./ai-file-picker-CCfJwzI8.js";import"./ai-suggestions-CeIXsEaA.js";import"./ai-voice-input-Cgjap6d-.js";import"./mock-adapter-BIlxH578.js";function r(t){const i={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function je(t={}){const{wrapper:i}={...n(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(r,{...t})}):r(t)}export{je as default};

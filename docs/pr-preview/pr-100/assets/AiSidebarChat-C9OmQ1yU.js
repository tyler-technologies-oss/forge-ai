import{j as e,M as o,T as s}from"./blocks-BMq_-Ydb.js";import{useMDXComponents as n}from"./index-Db33oXfe.js";import{C as a}from"./CustomArgTypes-CSxF1WY7.js";import{A as d}from"./AiSidebarChat.stories-BHFrrZgA.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B3xO85yu.js";import"./utils-DFiK_7l2.js";import"./scaffold-vdfcDjyn.js";import"./class-map-jjxocif1.js";import"./custom-element-UsVr97OX.js";import"./property-D2dUUzhA.js";import"./ref-CENuII8n.js";import"./query-DCR03eDw.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-xKHZbCQg.js";import"./query-assigned-elements-B6zK_KiS.js";import"./query-assigned-nodes-D6imQ5Dm.js";import"./provide-Bxw6gKTd.js";import"./consume-D3B5J4hk.js";import"./if-defined-BBSjWmC5.js";import"./ai-sidebar-CWRxXVOg.js";import"./when-CI7b_ccM.js";import"./index-DzQ4IpqS.js";import"./ai-modal-NnBjKH5s.js";import"./utils-DIqd7FWX.js";import"./ai-button-m34sQscW.js";import"./ai-icon-dzZni7F9.js";import"./ai-gradient-container-CpOSyVge.js";import"./ai-disclaimer--erKvuWK.js";import"./ai-chatbot-base-CReW923m.js";import"./ai-message-thread-DNhqfRuH.js";import"./utils-BRoM8yNS.js";import"./ai-response-message-toolbar-Dn6fp7-k.js";import"./tooltip-BN7xokHm.js";import"./overlay-DGgKM79R.js";import"./popover-DxMFPUmL.js";import"./ai-spinner-CwmkST4L.js";import"./ai-thinking-indicator-BYQv71wk.js";import"./ai-empty-state-BgxUEWo8.js";import"./ai-client-message-Dh3E9FS3.js";import"./ai-error-message-B1GBxPJ6.js";import"./ai-response-message-DqlZnJMh.js";import"./ai-user-message-CnUBMi1Z.js";import"./ai-user-message-toolbar-DQ8-UGFB.js";import"./agent-adapter-CiODA7QC.js";import"./ai-chatbot-BIaRJXR0.js";import"./ai-attachment-D7uVJ13P.js";import"./ai-chat-header-DLif8hU0.js";import"./ai-dropdown-menu-CmCMkh46.js";import"./ai-dropdown-menu-item-Df4XBUJM.js";import"./ai-agent-info-DVjbCllq.js";import"./ai-agent-selector-DUr1_o1G.js";import"./ai-chat-interface-7b4w3LHw.js";import"./ai-prompt-DRa1YP29.js";import"./ai-conversations-panel-QNmNBGdK.js";import"./ai-edit-thread-FiNy_BDt.js";import"./ai-file-picker-y20tF4p-.js";import"./ai-suggestions-Cwx4Pk76.js";import"./ai-voice-input-Cj-SLDrh.js";import"./mock-adapter-LuDjfxfL.js";function r(t){const i={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

import{j as e,M as o,T as s}from"./blocks-CyGRmqos.js";import{useMDXComponents as n}from"./index-pBqp21sU.js";import{C as a}from"./CustomArgTypes-if-oAoKh.js";import{A as d}from"./AiSidebarChat.stories-Bl7bluMg.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-HRf4U2o3.js";import"./utils-DUh4HCba.js";import"./scaffold-g0xL2hnm.js";import"./class-map-C52KeIj6.js";import"./custom-element-UsVr97OX.js";import"./property-B2ef_bsN.js";import"./ref-COF0aLZX.js";import"./query-DhOo42JF.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-Bece21jN.js";import"./query-assigned-elements-D0ANyHVz.js";import"./query-assigned-nodes-yxrr_BWY.js";import"./if-defined-BzECiych.js";import"./ai-sidebar-EPU31Pdj.js";import"./when-CI7b_ccM.js";import"./index-BOd1zjGZ.js";import"./ai-modal-BPztCUwd.js";import"./utils-DIqd7FWX.js";import"./ai-button-BzZlKIh8.js";import"./ai-icon-DfyzzV1Y.js";import"./ai-gradient-container-5LOFxwLB.js";import"./ai-disclaimer-DaB1egaD.js";import"./ai-chatbot-base-D9sWv0YN.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-B4bbHXKC.js";import"./ai-chatbot-BPwUfYAD.js";import"./ai-attachment-BHI-RteN.js";import"./ai-spinner-_BNS5Nlo.js";import"./tooltip-CI4Xxz__.js";import"./overlay-CA7whSQ8.js";import"./ai-chat-header-DvUwPl13.js";import"./ai-dropdown-menu-BHUdB6Th.js";import"./popover-D3ipgP9I.js";import"./ai-dropdown-menu-item-wwl7zcHL.js";import"./ai-agent-info-DfGS0ce-.js";import"./ai-agent-selector-ChU03XHq.js";import"./ai-chat-interface-WfIdKwTU.js";import"./ai-prompt-C2j0dNBF.js";import"./ai-conversations-panel-BifYGucb.js";import"./ai-edit-thread-AUWk2m6e.js";import"./ai-error-message-BiGv1dwO.js";import"./ai-file-picker-Cn7e2y4m.js";import"./ai-message-thread-J07fUF8V.js";import"./ai-response-message-toolbar-BeayXO3s.js";import"./ai-thinking-indicator-Db-68Z_C.js";import"./ai-client-message-HTPnHuuk.js";import"./ai-empty-state-jaBQ5tVn.js";import"./ai-response-message-BXvWGe2L.js";import"./ai-user-message-ByxkxCmi.js";import"./ai-user-message-toolbar-BXRvazDv.js";import"./ai-suggestions-Bdi1PK7D.js";import"./ai-voice-input-BX1fBPgM.js";import"./mock-adapter-D0dkxTL5.js";function r(t){const i={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

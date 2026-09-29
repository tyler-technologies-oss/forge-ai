import{j as e,M as o,T as s}from"./blocks-DJ3sY-kS.js";import{useMDXComponents as n}from"./index-BebnpE3h.js";import{C as a}from"./CustomArgTypes-CmLM3LYE.js";import{A as d}from"./AiSidebarChat.stories-Bs1wjtQ_.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CsRSgPVx.js";import"./utils-ByXa_qZf.js";import"./scaffold-DT2e9oC9.js";import"./class-map-DgHf1H92.js";import"./custom-element-UsVr97OX.js";import"./property-DkwU8VYm.js";import"./ref-CZMKxvsJ.js";import"./query-BIaN0jjP.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-CpBA3N-a.js";import"./query-assigned-elements-DXyApNBv.js";import"./query-assigned-nodes--6ULkBDq.js";import"./if-defined-t_EhrTPt.js";import"./ai-sidebar-D6F9UwTH.js";import"./when-CI7b_ccM.js";import"./index-BbBQ3ChV.js";import"./ai-modal-DOBLNO11.js";import"./utils-DIqd7FWX.js";import"./ai-button-B5AIDAkM.js";import"./ai-icon-BWU-zE7E.js";import"./ai-gradient-container-Btr5blvZ.js";import"./ai-disclaimer-1qI40UaF.js";import"./ai-chatbot-base-43c_NviE.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-B4bbHXKC.js";import"./ai-chatbot-CWDdxAuf.js";import"./ai-attachment-J_ezucJy.js";import"./ai-spinner-8_V9gCAa.js";import"./tooltip-Czm3NlJe.js";import"./overlay-DmgGx83i.js";import"./ai-chat-header-Wz2R-iM1.js";import"./ai-dropdown-menu-DgvIwM7i.js";import"./popover-CMEuDf-J.js";import"./ai-dropdown-menu-item-D1y8kQ5n.js";import"./ai-agent-info-BpDr5R7I.js";import"./ai-agent-selector-CyyzFk4w.js";import"./ai-chat-interface-DgkZtpJ8.js";import"./ai-prompt-CQ4U8Hx-.js";import"./ai-conversations-panel-C9ZWSpVa.js";import"./ai-edit-thread-CWbPBd1x.js";import"./ai-error-message-BHgcbyAy.js";import"./ai-file-picker-DlSxzDjI.js";import"./ai-message-thread-Byo54bh8.js";import"./ai-response-message-toolbar-Cw6s5pAk.js";import"./ai-thinking-indicator-BuZPMrsh.js";import"./ai-client-message-mEOhB7yg.js";import"./ai-empty-state-BkylkgVu.js";import"./ai-response-message-BWRNln1A.js";import"./ai-user-message-DQUW_VQe.js";import"./ai-user-message-toolbar-BMsVIgHD.js";import"./ai-suggestions-CstZ3ed-.js";import"./ai-voice-input-B1V8sZJ0.js";import"./mock-adapter-D0dkxTL5.js";function r(t){const i={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

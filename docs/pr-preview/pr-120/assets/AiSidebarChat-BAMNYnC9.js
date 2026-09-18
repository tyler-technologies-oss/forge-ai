import{j as e,M as o,T as s}from"./blocks-DP6pT7oX.js";import{useMDXComponents as n}from"./index-DnLa8hOl.js";import{C as a}from"./CustomArgTypes-D4vZjf10.js";import{A as d}from"./AiSidebarChat.stories-DVaC9eMp.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DWqIu4Sk.js";import"./utils-R5KNxOhk.js";import"./scaffold-LfuSH1dB.js";import"./class-map-Bn7GXKR1.js";import"./custom-element-UsVr97OX.js";import"./property-8r5sPkjn.js";import"./ref-CKPrdJ8B.js";import"./query-C7e3t810.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-B9yKWlWu.js";import"./query-assigned-elements-CfAGXkfV.js";import"./query-assigned-nodes-Jpc1afho.js";import"./if-defined-CeA9NAxq.js";import"./ai-sidebar-DKTBXJ_f.js";import"./when-CI7b_ccM.js";import"./index-BFbjRguE.js";import"./ai-modal-BrqCFTCC.js";import"./utils-DIqd7FWX.js";import"./ai-button-0Gty9VjM.js";import"./ai-icon-BFB7yN99.js";import"./ai-gradient-container-DM9EbWu2.js";import"./ai-disclaimer-BmAH_2tm.js";import"./ai-chatbot-base-DxOCeJhd.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-MXgt2iQL.js";import"./ai-attachment-BR72NFVL.js";import"./ai-spinner-DIBYBhNv.js";import"./tooltip-tIIm-Jz0.js";import"./overlay-DYR0TT5v.js";import"./ai-chat-header-Dw7_s8gr.js";import"./ai-dropdown-menu-JfjEL4ti.js";import"./popover-CiBfzVB5.js";import"./ai-dropdown-menu-item-BOG8tHTy.js";import"./ai-agent-info-D9JHmV9h.js";import"./ai-agent-selector-CQea-nlu.js";import"./ai-chat-interface-BOYnY76Q.js";import"./ai-prompt-B8AEUb25.js";import"./ai-conversations-panel-CIpNoPAE.js";import"./ai-edit-thread-8LY9s0h2.js";import"./ai-error-message-BGgMahn3.js";import"./ai-file-picker-CkFZuPvf.js";import"./ai-message-thread-D-huTDcu.js";import"./ai-response-message-toolbar-DnHAJwq6.js";import"./ai-thinking-indicator-rakyynRX.js";import"./ai-client-message-B4hxnZgE.js";import"./ai-empty-state-CGyjUQUC.js";import"./ai-response-message-sCoqKEpS.js";import"./ai-user-message-TPP9mT4a.js";import"./ai-user-message-toolbar-D-Sh728Q.js";import"./ai-suggestions-CCOvgx51.js";import"./ai-voice-input-Ddgh_uJJ.js";import"./mock-adapter-BpgeerXX.js";function r(t){const i={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

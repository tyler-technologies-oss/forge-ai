import{j as e,M as o,T as s}from"./blocks-E4-pjSju.js";import{useMDXComponents as n}from"./index-Cc-fxKYB.js";import{C as a}from"./CustomArgTypes-D1DQGMUd.js";import{A as d}from"./AiSidebarChat.stories-DkQ7ij7e.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CzPtoTTq.js";import"./utils-R5KNxOhk.js";import"./scaffold-E2A64zpd.js";import"./class-map-DxWtJcVW.js";import"./custom-element-UsVr97OX.js";import"./property-DPXn_ynT.js";import"./ref-BR2RbN_M.js";import"./query-D95vg08y.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-CpBvu3kq.js";import"./query-assigned-elements-BBTbZsG0.js";import"./query-assigned-nodes-tAffZHpD.js";import"./if-defined-T1rTDN5e.js";import"./ai-sidebar-7dEGHUtk.js";import"./when-CI7b_ccM.js";import"./index-0oo9Taq7.js";import"./ai-modal-7EWNBzsb.js";import"./utils-DIqd7FWX.js";import"./ai-button-D1DPA2YS.js";import"./ai-icon-Cv6sBGat.js";import"./ai-gradient-container-CQ8bWpoF.js";import"./ai-disclaimer-RSBvBQ1F.js";import"./ai-chatbot-base-P-xbLe9w.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-2AMQdmmC.js";import"./ai-attachment-jAsB3zXU.js";import"./ai-spinner-B0W159Hj.js";import"./tooltip-olkHsWti.js";import"./overlay-BxFiL-e7.js";import"./ai-chat-header-BstH2DkW.js";import"./ai-dropdown-menu-UQNqGPum.js";import"./popover-e1_COxic.js";import"./ai-dropdown-menu-item-CToDhG4w.js";import"./ai-agent-info-3JN4sr6G.js";import"./ai-agent-selector-CxEa-0gS.js";import"./ai-chat-interface-DBJNY0Jo.js";import"./ai-prompt-DuqgW7Bn.js";import"./ai-conversations-panel-B1Gxegc-.js";import"./ai-edit-thread-BL1hBRlx.js";import"./ai-error-message-kGPNB8Zi.js";import"./ai-file-picker-DNCJTIWV.js";import"./ai-message-thread-BL42rdpQ.js";import"./ai-response-message-toolbar-CeJpNO3B.js";import"./ai-thinking-indicator-BuzrD_Ke.js";import"./ai-client-message-DiqQF9LK.js";import"./ai-empty-state-CfZ3QD39.js";import"./ai-response-message-DSw6wkgU.js";import"./ai-user-message-Cy00Flb0.js";import"./ai-user-message-toolbar-CEweTg7K.js";import"./ai-suggestions-Cz7hNUdK.js";import"./ai-voice-input-NB15vE87.js";import"./mock-adapter-BpgeerXX.js";function r(t){const i={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

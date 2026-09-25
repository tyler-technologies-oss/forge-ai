import{j as e,M as o,T as s}from"./blocks-Ux-DVfLb.js";import{useMDXComponents as n}from"./index-5jWqod4W.js";import{C as a}from"./CustomArgTypes-Cijl7339.js";import{A as d}from"./AiSidebarChat.stories-CUSvyqoU.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DdEsgLXc.js";import"./utils-DwVr3uOz.js";import"./scaffold-K4dTxdEO.js";import"./class-map-BydUFS6g.js";import"./custom-element-UsVr97OX.js";import"./property-DhUOPoOO.js";import"./ref-OBHf5tXr.js";import"./query-C_1RVOyB.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-C6bIPk2-.js";import"./query-assigned-elements-CQOpZU3Q.js";import"./query-assigned-nodes-CFQu4edo.js";import"./if-defined-BWdVtfmD.js";import"./ai-sidebar-BFTMX5jn.js";import"./when-CI7b_ccM.js";import"./index-DEII71oE.js";import"./ai-modal-BJkFw6y5.js";import"./utils-DIqd7FWX.js";import"./ai-button-m-AZTLac.js";import"./ai-icon-DVJejIk9.js";import"./ai-gradient-container-BgyaJUEz.js";import"./ai-disclaimer-DC5f_4NS.js";import"./ai-chatbot-base-C54QnpWM.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-B4bbHXKC.js";import"./ai-chatbot-lrDaVris.js";import"./ai-attachment-Ckd5XxXT.js";import"./ai-spinner-HiYzziBA.js";import"./tooltip-Cy5GOTrv.js";import"./overlay-7G1w-38G.js";import"./ai-chat-header-SRK_zogb.js";import"./ai-dropdown-menu-BTB8wl5H.js";import"./popover-dnKCNcSf.js";import"./ai-dropdown-menu-item-BrYPwV3H.js";import"./ai-agent-info-B7UrEkTM.js";import"./ai-agent-selector-T76zLRaA.js";import"./ai-chat-interface-BQz_nVeH.js";import"./ai-prompt-CKMoGgeR.js";import"./ai-conversations-panel-Bp_zDnYf.js";import"./ai-edit-thread-B6c6ySSf.js";import"./ai-error-message-NW_4x_-0.js";import"./ai-file-picker-DxDUXS28.js";import"./ai-message-thread-wumohvqW.js";import"./ai-response-message-toolbar-Br5qHqGn.js";import"./ai-thinking-indicator-D5Y_O-By.js";import"./ai-client-message-BjO8Ogxz.js";import"./ai-empty-state-Bddh5YrX.js";import"./ai-response-message-CiMK1SAd.js";import"./ai-user-message-Dff4SpBv.js";import"./ai-user-message-toolbar-21MVHsK9.js";import"./ai-suggestions-QzGdzWbP.js";import"./ai-voice-input-BZbCbnZM.js";import"./mock-adapter-D0dkxTL5.js";function r(t){const i={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

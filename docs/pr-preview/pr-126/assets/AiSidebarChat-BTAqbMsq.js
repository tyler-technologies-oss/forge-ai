import{j as e,M as o,T as s}from"./blocks-tfS5CUCU.js";import{useMDXComponents as n}from"./index-DxB2hf95.js";import{C as a}from"./CustomArgTypes-CaOw3VDT.js";import{A as d}from"./AiSidebarChat.stories-BorYuCAP.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-HHnIi9vB.js";import"./utils-Bk7YUiZl.js";import"./scaffold-2xjKR7hE.js";import"./class-map-mjC9N2Dh.js";import"./custom-element-UsVr97OX.js";import"./property-Dw-ruDe5.js";import"./ref-BmIXBg3c.js";import"./query-C-fzUWOj.js";import"./style-map-fRAJVz_G.js";import"./context-consumer-CIN_xSLl.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-DOTKEpJh.js";import"./query-assigned-elements-BgiGjBhR.js";import"./query-assigned-nodes-Bx6nyZ13.js";import"./if-defined-DiTgyRFx.js";import"./ai-sidebar-Bku5CalK.js";import"./when-CI7b_ccM.js";import"./storage-utils-C8x8JGnW.js";import"./index-B1nAPdHq.js";import"./ai-modal-BA955Cfo.js";import"./utils-DIqd7FWX.js";import"./ai-button-DW1I0baH.js";import"./ai-icon-BQgA7JO0.js";import"./ai-gradient-container--oxebQ7l.js";import"./ai-disclaimer-BX_BSz50.js";import"./ai-chatbot-base-BuTb6M2t.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-B4bbHXKC.js";import"./ai-chatbot-HblsBhNv.js";import"./ai-attachment-DgmiC_hh.js";import"./ai-spinner-TnabMADE.js";import"./tooltip-DPaCWC5z.js";import"./overlay-DOZ_3WQ4.js";import"./ai-chat-header-akpiHWlX.js";import"./ai-dropdown-menu-BG2fQksV.js";import"./popover-2G_9z0vg.js";import"./ai-dropdown-menu-item-DA_-DXzr.js";import"./ai-agent-info-CYUc9cdZ.js";import"./ai-agent-selector-dkKm3Hyr.js";import"./ai-chat-interface-D4mf5XiH.js";import"./ai-prompt-BzUbw5KS.js";import"./ai-conversations-panel-D7mlHBSC.js";import"./ai-edit-thread-LS_xA-pY.js";import"./ai-error-message-BkQP-KlB.js";import"./ai-file-picker-BQeK9QaZ.js";import"./ai-message-thread-TaA4uEl7.js";import"./ai-response-message-toolbar-C70LLE4I.js";import"./ai-artifact-card-BPmUiNMl.js";import"./ai-thinking-indicator-D5KuHEQU.js";import"./ai-client-message-BGhrA_n_.js";import"./ai-empty-state-DAZ-UmiJ.js";import"./ai-response-message-IcC-jYVo.js";import"./ai-user-message-NVpkAkRH.js";import"./ai-user-message-toolbar-BMN3sD3V.js";import"./ai-suggestions-Cn1guvR7.js";import"./ai-voice-input-CDwYC21E.js";import"./mock-adapter-BpXd5o7R.js";function r(t){const i={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function ue(t={}){const{wrapper:i}={...n(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(r,{...t})}):r(t)}export{ue as default};

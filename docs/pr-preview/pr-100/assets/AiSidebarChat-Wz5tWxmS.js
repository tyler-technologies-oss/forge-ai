import{j as e,M as o,T as s,C as a}from"./blocks-CZ9vKyMd.js";import{useMDXComponents as r}from"./index-BJLdi77e.js";import{C as d}from"./CustomArgTypes-CvLRKy5_.js";import{A as c,W as h}from"./AiSidebarChat.stories-CZjNLgCJ.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-6kL-IEjw.js";import"./utils-CXrFuVn0.js";import"./scaffold-BkMw2-yW.js";import"./class-map-D282mUzC.js";import"./custom-element-UsVr97OX.js";import"./property-CTHAvR0w.js";import"./ref-Db_w97ye.js";import"./query-DMg1xcuy.js";import"./style-map-pmxdEpBw.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-CG3DleA7.js";import"./query-assigned-elements-BZJs2gnL.js";import"./query-assigned-nodes-x9aXSWKP.js";import"./provide-RUGHcQ60.js";import"./consume-BHVW6YKk.js";import"./if-defined-CqU5aBrc.js";import"./ai-sidebar-CjJzNp5V.js";import"./when-CI7b_ccM.js";import"./storage-utils-C8x8JGnW.js";import"./index-C6vmAx9N.js";import"./ai-modal-BN2mh5s_.js";import"./utils-DIqd7FWX.js";import"./ai-button-DY7QD-dZ.js";import"./ai-icon-ddETNDkH.js";import"./ai-gradient-container-B8CKpKLl.js";import"./ai-disclaimer-CwHaUwZT.js";import"./ai-canvas-B-mMmrA8.js";import"./ai-message-thread-zRnrwM6Q.js";import"./utils-BRoM8yNS.js";import"./ai-response-message-toolbar-DTJeLwUI.js";import"./tooltip-DKUGi-Mr.js";import"./overlay-Cf_UeqF6.js";import"./popover-CszWHH8v.js";import"./ai-artifact-card-CTIos6br.js";import"./ai-spinner-CUToco1W.js";import"./ai-thinking-indicator-B5lD9kqo.js";import"./ai-empty-state-CVTMpjyu.js";import"./ai-client-message-Bz7fvOoF.js";import"./ai-error-message-6d7C-oN6.js";import"./ai-response-message-DJiHwOPu.js";import"./ai-user-message-CyjjIxDB.js";import"./ai-user-message-toolbar-BJ-QJz-U.js";import"./agent-adapter-CiODA7QC.js";import"./ai-chat-header-BT5RU5Pl.js";import"./ai-dropdown-menu-DY4JbB1J.js";import"./ai-dropdown-menu-item-Cjz3DErM.js";import"./ai-agent-info-mkgu2QxB.js";import"./ai-agent-selector-r245yho5.js";import"./ai-chatbot-Bg8GPP6d.js";import"./ai-attachment-CW_US-93.js";import"./ai-chat-interface-Bp-RCm35.js";import"./ai-prompt-CO-xPkM9.js";import"./ai-conversations-panel-B5NsL02t.js";import"./ai-edit-thread-D-_6WXNa.js";import"./ai-file-picker-CC3Wf08n.js";import"./ai-suggestions-DwW-NKFO.js";import"./ai-voice-input-BQeeMS_j.js";import"./mock-adapter-BkYea8t_.js";import"./canvas-table-tool-9ZsPqVBY.js";import"./create-tool-renderer-BxivDorU.js";function n(t){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
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

import{j as e,M as o,T as s}from"./blocks-BUKKxnmg.js";import{useMDXComponents as n}from"./index-B0Zs8q7T.js";import{C as a}from"./CustomArgTypes-b6PUy93v.js";import{A as d}from"./AiSidebarChat.stories-BLGqYEf_.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Cah43CYj.js";import"./utils-R5KNxOhk.js";import"./scaffold-DVgAiNe3.js";import"./class-map-BtUrnIwz.js";import"./custom-element-UsVr97OX.js";import"./property-8ksPRbbb.js";import"./ref-CiUsqi5F.js";import"./query-HzrBBAju.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-BCl7423l.js";import"./query-assigned-elements-Ba0DEGtV.js";import"./query-assigned-nodes-COInPr2W.js";import"./if-defined-CMO5RKXX.js";import"./ai-sidebar-DAIt0fwU.js";import"./when-CI7b_ccM.js";import"./index-BbSWjAK0.js";import"./ai-modal-h9SNWtwC.js";import"./utils-DIqd7FWX.js";import"./ai-button-CFcj984V.js";import"./ai-icon-i7GuExfa.js";import"./ai-gradient-container-CKQBKaY7.js";import"./ai-disclaimer-BNxBfsVU.js";import"./ai-chatbot-base-DE236Wa0.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-DRVsEP-c.js";import"./ai-attachment-qiWHWJcl.js";import"./ai-spinner-CuQ7WZc-.js";import"./tooltip-BFnM_qB-.js";import"./overlay-1EgnvvTS.js";import"./ai-chat-header-ClBmHfkA.js";import"./ai-dropdown-menu-CZWYoMP0.js";import"./popover-C-29ojKC.js";import"./ai-dropdown-menu-item-D7XWxExX.js";import"./ai-agent-info-BxMOmg3u.js";import"./ai-agent-selector-BN7RiBUV.js";import"./ai-chat-interface-C_hV0NJy.js";import"./ai-prompt-C1ETOLxO.js";import"./ai-conversations-panel-Cm_BNwh1.js";import"./ai-edit-thread-CQYzJA4G.js";import"./ai-error-message-DkuboHsJ.js";import"./ai-file-picker-DriEBozN.js";import"./ai-message-thread-BX8yM-Bb.js";import"./ai-response-message-toolbar-DJPZA4Sd.js";import"./ai-thinking-indicator-B8NjAOaB.js";import"./ai-client-message-CyMVMcJl.js";import"./ai-empty-state-BrKjT3Mh.js";import"./ai-response-message-gvTjuVQe.js";import"./ai-user-message-CIGFsZ3-.js";import"./ai-user-message-toolbar-D4z1O8Zk.js";import"./ai-suggestions-DCSgP43h.js";import"./ai-voice-input-DsUjHdyj.js";import"./mock-adapter-BpgeerXX.js";function r(t){const i={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

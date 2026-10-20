import{j as e,M as o,T as s}from"./blocks-DhUXg9HW.js";import{useMDXComponents as n}from"./index-B0SnqID0.js";import{C as a}from"./CustomArgTypes-CaCjTyTK.js";import{A as d}from"./AiSidebarChat.stories-B-7_V-oz.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C2YwnM95.js";import"./utils-7XJsE73z.js";import"./scaffold-DIEoiKJk.js";import"./class-map-Ce4dixUc.js";import"./custom-element-UsVr97OX.js";import"./property-CUb56LFm.js";import"./ref-BlH8x4pi.js";import"./query-Bxcoi7Jv.js";import"./style-map-D53q35gi.js";import"./context-consumer-CIN_xSLl.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-BZFNyX6F.js";import"./query-assigned-elements-8Vg8EN4R.js";import"./query-assigned-nodes-_QuSYtmZ.js";import"./if-defined-BqkigIDL.js";import"./ai-sidebar-CY23t724.js";import"./when-CI7b_ccM.js";import"./storage-utils-C8x8JGnW.js";import"./index-Bn-Tk8_D.js";import"./ai-modal-D07MoOOr.js";import"./utils-DIqd7FWX.js";import"./ai-button-BCsXe7vS.js";import"./ai-icon-C_uNfRHH.js";import"./ai-gradient-container-BVXV9soj.js";import"./ai-disclaimer-BMZGsPIB.js";import"./ai-chatbot-base-D2PFxc6t.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-B4bbHXKC.js";import"./ai-chatbot-BGrKyvDz.js";import"./ai-attachment-CUgRE4Vl.js";import"./ai-spinner-ChmlvqO_.js";import"./tooltip-Dj9YZSCf.js";import"./overlay-CdzhujMn.js";import"./ai-chat-header-DKNKEYo3.js";import"./ai-dropdown-menu-BWrNIyBp.js";import"./popover-DkHhfRUm.js";import"./ai-dropdown-menu-item-Ce_meJAt.js";import"./ai-agent-info-7DgybjZd.js";import"./ai-agent-selector-C0D1RO8i.js";import"./ai-chat-interface-BdDvK1Yc.js";import"./ai-prompt-GTSm7ov6.js";import"./ai-conversations-panel-CuCB0XNw.js";import"./ai-edit-thread-Dys6qbZ8.js";import"./ai-error-message-7vEYiPq2.js";import"./ai-file-picker-bcWvfAYW.js";import"./ai-message-thread-Css-M75D.js";import"./ai-response-message-toolbar-BrhQ1nqc.js";import"./ai-artifact-card-Bf6yixvS.js";import"./ai-thinking-indicator-BbeuqKHU.js";import"./ai-client-message-VeGaKIsf.js";import"./ai-empty-state-BcOMkik8.js";import"./ai-response-message-DRMUfkBi.js";import"./ai-user-message-SJtbk_hr.js";import"./ai-user-message-toolbar-DBPsumdq.js";import"./ai-suggestions-Dm4iXad7.js";import"./ai-voice-input-C6pmZ8qw.js";import"./mock-adapter-BpXd5o7R.js";function r(t){const i={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

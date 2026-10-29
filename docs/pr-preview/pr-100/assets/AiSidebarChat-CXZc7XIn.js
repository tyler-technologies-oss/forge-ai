import{j as e,M as o,T as s}from"./blocks-_r1VZqHQ.js";import{useMDXComponents as n}from"./index-CEBJtnDg.js";import{C as a}from"./CustomArgTypes-DCDdGaxg.js";import{A as d}from"./AiSidebarChat.stories-BDngb3W3.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-YR1K9nbB.js";import"./utils-HqzA9w63.js";import"./scaffold-wgtwiG0z.js";import"./class-map-Bc7VVlJh.js";import"./custom-element-UsVr97OX.js";import"./property-TeG6cd53.js";import"./ref-C4o9BLd-.js";import"./query-kCt_tcOn.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-BWf__aEW.js";import"./query-assigned-elements-DztZbeoC.js";import"./query-assigned-nodes-DVP6uEkz.js";import"./provide-Bxw6gKTd.js";import"./consume-D3B5J4hk.js";import"./if-defined-BLm6p3L2.js";import"./ai-sidebar-TTuZRWo7.js";import"./when-CI7b_ccM.js";import"./index-C5rL3-Rx.js";import"./ai-modal-D_cSsacw.js";import"./utils-DIqd7FWX.js";import"./ai-button-CD51BRrp.js";import"./ai-icon-BQpN0Qp3.js";import"./ai-gradient-container-ClZ9prTR.js";import"./ai-disclaimer-BNIHSe0k.js";import"./ai-chatbot-base-CQLbsPyA.js";import"./ai-message-thread-C_sKhrnM.js";import"./utils-BRoM8yNS.js";import"./ai-response-message-toolbar-D3I2aNUT.js";import"./tooltip-thuJaIBl.js";import"./overlay-BkMEagT3.js";import"./popover-ui6GyO-A.js";import"./ai-spinner-CgeeyoCF.js";import"./ai-thinking-indicator-Dhq3zMSa.js";import"./ai-empty-state-QwVRI5jE.js";import"./ai-client-message-CiHnsDv_.js";import"./ai-error-message-BjcgAEPs.js";import"./ai-response-message-C4SAsAng.js";import"./ai-user-message-Cweo3p3k.js";import"./ai-user-message-toolbar-OUW0WJ6E.js";import"./agent-adapter-CiODA7QC.js";import"./ai-chatbot-RUqAmVqP.js";import"./ai-attachment-a1fNsA-t.js";import"./ai-chat-header-DlkNBTRn.js";import"./ai-dropdown-menu-Cpx0kE0u.js";import"./ai-dropdown-menu-item-DYk20N5R.js";import"./ai-agent-info-p2sWSHSZ.js";import"./ai-agent-selector-Bp7G8Sjn.js";import"./ai-chat-interface-BofAN19Q.js";import"./ai-prompt-JkwKCKYy.js";import"./ai-conversations-panel-BWrfYMZC.js";import"./ai-edit-thread-D9XaTIum.js";import"./ai-file-picker-BPk5jSbr.js";import"./ai-suggestions-4cg-lDAh.js";import"./ai-voice-input-DQ05JyCO.js";import"./mock-adapter-LuDjfxfL.js";function r(t){const i={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

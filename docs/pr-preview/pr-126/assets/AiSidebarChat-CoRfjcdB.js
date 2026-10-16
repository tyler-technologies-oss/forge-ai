import{j as e,M as o,T as s}from"./blocks-JYFz6Usq.js";import{useMDXComponents as n}from"./index-CximHG_v.js";import{C as a}from"./CustomArgTypes-452ZFrpF.js";import{A as d}from"./AiSidebarChat.stories-BqqcFowc.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-elajjK1a.js";import"./utils-Bjt3BjC4.js";import"./scaffold-BTIqxT-e.js";import"./class-map-B0GToYj3.js";import"./custom-element-UsVr97OX.js";import"./property-DgcpIlpf.js";import"./ref-Dewk2vfh.js";import"./query-DXgNA9eF.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-BKBtbAUP.js";import"./query-assigned-elements-BzXqvxdn.js";import"./query-assigned-nodes-DPnb9NuY.js";import"./context-consumer-CIN_xSLl.js";import"./if-defined-C_B4j2BZ.js";import"./context-provider-NnzmXA_k.js";import"./ai-sidebar-DClQax1r.js";import"./when-CI7b_ccM.js";import"./index-BiK7O3R3.js";import"./ai-modal-ByGECMac.js";import"./utils-DIqd7FWX.js";import"./ai-button-Cvvpsv7D.js";import"./ai-icon-C1v1POb-.js";import"./ai-gradient-container-CdUtDEqA.js";import"./ai-disclaimer-B_rAhha5.js";import"./ai-chatbot-base-CzsfQCtw.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-Bmtlj-Ry.js";import"./ai-attachment-vQYgA_cq.js";import"./ai-spinner-DQ0iIQ_h.js";import"./tooltip-BjrwdqG2.js";import"./overlay-AcCXDU_P.js";import"./ai-chat-header-DltmWPvU.js";import"./ai-dropdown-menu-BOW_-sfg.js";import"./popover-DxOZUCRT.js";import"./ai-dropdown-menu-item-sL8uVVNJ.js";import"./ai-agent-info-BeSNunu0.js";import"./ai-agent-selector-CQMuWr6R.js";import"./ai-chat-interface-CPqaQEKN.js";import"./ai-prompt-BMw7bRCQ.js";import"./ai-conversations-panel-L7fMwGnk.js";import"./ai-edit-thread-DkzbYNOH.js";import"./ai-error-message-CM9TEEC7.js";import"./ai-file-picker--xqmuIGI.js";import"./ai-message-thread-BJ6TRXHM.js";import"./ai-response-message-toolbar-B1VtOxhV.js";import"./ai-artifact-card-C9Pqa6fQ.js";import"./ai-thinking-indicator-C0vJuCMI.js";import"./ai-client-message-CS2-XB-6.js";import"./ai-empty-state-RhLFMbIc.js";import"./ai-response-message-D68baiLC.js";import"./ai-user-message-C5y7mD7z.js";import"./ai-user-message-toolbar-CoPggmfn.js";import"./ai-suggestions-f3iGfKR8.js";import"./ai-voice-input-DQ0WpCty.js";import"./mock-adapter-CgHoKrWF.js";function r(t){const i={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function ge(t={}){const{wrapper:i}={...n(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(r,{...t})}):r(t)}export{ge as default};

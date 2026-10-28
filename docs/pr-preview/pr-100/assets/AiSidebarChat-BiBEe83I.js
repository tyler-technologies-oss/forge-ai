import{j as e,M as o,T as s}from"./blocks-ZZkA_lAe.js";import{useMDXComponents as n}from"./index-5klHlCGH.js";import{C as a}from"./CustomArgTypes-BWEo-bEI.js";import{A as d}from"./AiSidebarChat.stories-C-xivpV4.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-d1QanYZZ.js";import"./utils-CeukVkDl.js";import"./scaffold-B605ehel.js";import"./class-map-BCd6fXy0.js";import"./custom-element-UsVr97OX.js";import"./property-Bv8AywkK.js";import"./ref-BNaYlydZ.js";import"./query-Dj9Gy6GR.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-Tas106WT.js";import"./query-assigned-elements-B8sE8lrR.js";import"./query-assigned-nodes-BscC51yq.js";import"./provide-Bxw6gKTd.js";import"./consume-D3B5J4hk.js";import"./if-defined-XXZ5nTor.js";import"./ai-sidebar-OTbG9nUf.js";import"./when-CI7b_ccM.js";import"./index-rTDmOv1F.js";import"./ai-modal-Bg7PD0fW.js";import"./utils-DIqd7FWX.js";import"./ai-button-Lesc2DyM.js";import"./ai-icon-D7jf8qNX.js";import"./ai-gradient-container-Be14wB0V.js";import"./ai-disclaimer-Cn3XHFRd.js";import"./ai-chatbot-base-Da8YOs9E.js";import"./ai-message-thread-xooSp2M9.js";import"./utils-BRoM8yNS.js";import"./ai-response-message-toolbar-DSDBgrss.js";import"./tooltip-Dlyf_6N4.js";import"./overlay-D9ZPfswH.js";import"./popover-CYaiPqAr.js";import"./ai-spinner-CJAAM4Ji.js";import"./ai-thinking-indicator-DnFsICHz.js";import"./ai-empty-state-B220FOjH.js";import"./ai-client-message-C5xSsmc7.js";import"./ai-error-message-i-qhNYHL.js";import"./ai-response-message-B2ibHXWL.js";import"./ai-user-message-DA2FC_8u.js";import"./ai-user-message-toolbar-kawvQKl3.js";import"./agent-adapter-CiODA7QC.js";import"./ai-chatbot-BRFt-0F2.js";import"./ai-attachment-BREBHBsi.js";import"./ai-chat-header-BJ8GqQmn.js";import"./ai-dropdown-menu-1Hqd3X6m.js";import"./ai-dropdown-menu-item-BhEqi4ZA.js";import"./ai-agent-info-CaV-nC98.js";import"./ai-agent-selector-CjOUA-d-.js";import"./ai-chat-interface-ckiL2sMs.js";import"./ai-prompt-BwvIlho5.js";import"./ai-conversations-panel-BmaS8rHH.js";import"./ai-edit-thread-DujpKKN-.js";import"./ai-file-picker-CE3uKLW3.js";import"./ai-suggestions-VHiDf_C_.js";import"./ai-voice-input-7jL0bDij.js";import"./mock-adapter-LuDjfxfL.js";function r(t){const i={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

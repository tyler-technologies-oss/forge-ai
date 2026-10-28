import{j as e,M as o,T as s}from"./blocks-lvBG2Ofd.js";import{useMDXComponents as n}from"./index-Dqouuy3Z.js";import{C as a}from"./CustomArgTypes-D4iUauBl.js";import{A as d}from"./AiSidebarChat.stories-DZdsMyC0.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C-GjP80M.js";import"./utils-DFiK_7l2.js";import"./scaffold-cpy5Yaw8.js";import"./class-map-K0ceeZBW.js";import"./custom-element-UsVr97OX.js";import"./property-DRAyekPU.js";import"./ref-BMRKwFxn.js";import"./query-SpUrvd8t.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-BfxrUUvn.js";import"./query-assigned-elements-D5wrDzSA.js";import"./query-assigned-nodes-B0Pb7y7I.js";import"./provide-Bxw6gKTd.js";import"./consume-D3B5J4hk.js";import"./if-defined-RC-UoAop.js";import"./ai-sidebar-BBmijvOL.js";import"./when-CI7b_ccM.js";import"./index-BbCNrtMM.js";import"./ai-modal-Cf_UyUtK.js";import"./utils-DIqd7FWX.js";import"./ai-button-DqZmQbpM.js";import"./ai-icon-DtP-iWHW.js";import"./ai-gradient-container-CFtDibPH.js";import"./ai-disclaimer-DvEV-FEV.js";import"./ai-chatbot-base-E8p49w0f.js";import"./ai-message-thread-F6XnV2Vk.js";import"./utils-BRoM8yNS.js";import"./ai-response-message-toolbar-uTE2KMKD.js";import"./tooltip-DV93RwhU.js";import"./overlay-C5QCbZ9V.js";import"./popover-D-1rA7kd.js";import"./ai-spinner-Bg6QSKYP.js";import"./ai-thinking-indicator-5a0rtAkY.js";import"./ai-empty-state-6xEWFXCV.js";import"./ai-client-message-Bu_pDeIW.js";import"./ai-error-message-B_XGVcGq.js";import"./ai-response-message-CH0K4WGn.js";import"./ai-user-message-DFKTvZ-G.js";import"./ai-user-message-toolbar-DxRRHAts.js";import"./agent-adapter-CiODA7QC.js";import"./ai-chatbot-CZLOcOyo.js";import"./ai-attachment-Cux-xBMK.js";import"./ai-chat-header-D6i8YEFp.js";import"./ai-dropdown-menu-Bkq9_uHP.js";import"./ai-dropdown-menu-item-BS8BkNb2.js";import"./ai-agent-info-Dax0K9bf.js";import"./ai-agent-selector-EwB_uK2w.js";import"./ai-chat-interface-CR66x_m2.js";import"./ai-prompt-XmPJF_nA.js";import"./ai-conversations-panel-B467NiqI.js";import"./ai-edit-thread-CXCkcALL.js";import"./ai-file-picker-CY4qPDpG.js";import"./ai-suggestions-CkRNjjeV.js";import"./ai-voice-input-CNbgO-i_.js";import"./mock-adapter-LuDjfxfL.js";function r(t){const i={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

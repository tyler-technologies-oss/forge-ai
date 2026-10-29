import{j as e,M as o,T as s}from"./blocks-ByQgTWIB.js";import{useMDXComponents as n}from"./index-a83ohZF9.js";import{C as a}from"./CustomArgTypes-D2M_681L.js";import{A as d}from"./AiSidebarChat.stories-C1_cLJNU.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CxeI5B0K.js";import"./utils-HqzA9w63.js";import"./scaffold-B9sg0HiD.js";import"./class-map-3BO_8Ifk.js";import"./custom-element-UsVr97OX.js";import"./property-0bgw5x1u.js";import"./ref-DmohT3mp.js";import"./query-CX9OofRs.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-Cy0XuETg.js";import"./query-assigned-elements-CUkmn4Me.js";import"./query-assigned-nodes-DsHVf5h4.js";import"./provide-Bxw6gKTd.js";import"./consume-D3B5J4hk.js";import"./if-defined-T73XHzDX.js";import"./ai-sidebar-CN3Q4nY4.js";import"./when-CI7b_ccM.js";import"./index-B9XfBdDC.js";import"./ai-modal-CIM5VnjN.js";import"./utils-DIqd7FWX.js";import"./ai-button-CT0xMi_r.js";import"./ai-icon-DxAmSoz_.js";import"./ai-gradient-container-CBKzrfFj.js";import"./ai-disclaimer-BuK9iMka.js";import"./ai-chatbot-base-PI-fu4ux.js";import"./ai-message-thread-DCUJaOCr.js";import"./utils-BRoM8yNS.js";import"./ai-response-message-toolbar-ulbffdRS.js";import"./tooltip-CMsCxNjY.js";import"./overlay-ys5C9_bt.js";import"./popover-BDLZuHxT.js";import"./ai-spinner-DvZn0rGD.js";import"./ai-thinking-indicator-k9NEcLqP.js";import"./ai-empty-state-Bki8_Hsf.js";import"./ai-client-message-C1HysC9d.js";import"./ai-error-message-aMKrXjOk.js";import"./ai-response-message-DmTWrblm.js";import"./ai-user-message-DN33Hn_f.js";import"./ai-user-message-toolbar-BkUisWIN.js";import"./agent-adapter-CiODA7QC.js";import"./ai-chatbot-B_mMaj-t.js";import"./ai-attachment-DVfHxo2C.js";import"./ai-chat-header-G1dpMMtI.js";import"./ai-dropdown-menu-Sd2bDefZ.js";import"./ai-dropdown-menu-item-CbNZIOj9.js";import"./ai-agent-info-aiDuzm48.js";import"./ai-agent-selector-BH5t4IZH.js";import"./ai-chat-interface-D88l3zFR.js";import"./ai-prompt-DP-K9p_T.js";import"./ai-conversations-panel-C1xLd1Cf.js";import"./ai-edit-thread--OK0jdlS.js";import"./ai-file-picker-BQYlBXJ6.js";import"./ai-suggestions-WTI_NWPy.js";import"./ai-voice-input-BWnMvm3X.js";import"./mock-adapter-LuDjfxfL.js";function r(t){const i={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

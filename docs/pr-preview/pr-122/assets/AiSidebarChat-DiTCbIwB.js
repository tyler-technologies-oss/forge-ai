import{j as e,M as o,T as s}from"./blocks-DunNBpV-.js";import{useMDXComponents as n}from"./index-CV2mHAtQ.js";import{C as a}from"./CustomArgTypes-BUOOnW4h.js";import{A as d}from"./AiSidebarChat.stories-DYsv6Det.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DurVPKaQ.js";import"./utils-CXXNtQr7.js";import"./scaffold-knlInfM1.js";import"./class-map-BaKPoBZY.js";import"./custom-element-UsVr97OX.js";import"./property-D8N0P2bM.js";import"./ref-D9Z2prtN.js";import"./query-BLMtQl8c.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-2Iebx1cT.js";import"./query-assigned-elements-DNdyeky9.js";import"./query-assigned-nodes-BBvfVDzi.js";import"./if-defined-CzAhrAIc.js";import"./ai-sidebar-BsicOYFY.js";import"./when-CI7b_ccM.js";import"./index-DhoJ0MrJ.js";import"./ai-modal-CjHsUQgq.js";import"./utils-DIqd7FWX.js";import"./ai-button-CylvEG0L.js";import"./ai-icon-Dt1vVeka.js";import"./ai-gradient-container-Dlj9jLyI.js";import"./ai-disclaimer-D7wb-zrK.js";import"./ai-chatbot-base-DjNmkggo.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-B4bbHXKC.js";import"./ai-chatbot-CBLMt9V_.js";import"./ai-attachment-CuVve8ag.js";import"./ai-spinner-DdtodrxA.js";import"./tooltip-D-HZwmCH.js";import"./overlay-_l-8N4tl.js";import"./ai-chat-header-CqwGX-b6.js";import"./ai-dropdown-menu-BTnvWY8x.js";import"./popover-DfXZJdTp.js";import"./ai-dropdown-menu-item-BBzh0JIV.js";import"./ai-agent-info-Bx8tk30S.js";import"./ai-agent-selector-Drfhv83a.js";import"./ai-chat-interface-CetEYgnK.js";import"./ai-prompt-C00-aZaw.js";import"./ai-conversations-panel-Wjmwvqus.js";import"./ai-edit-thread-Cn5JPXFa.js";import"./ai-error-message-BcxpFl9H.js";import"./ai-file-picker-aD9XfLF0.js";import"./ai-message-thread-DWnoThxc.js";import"./ai-response-message-toolbar-B_Pypz_k.js";import"./ai-thinking-indicator-Cgjn-qGM.js";import"./ai-client-message-B-LgLV52.js";import"./ai-empty-state-1zpO87lz.js";import"./ai-response-message-B2Q55ZLX.js";import"./ai-user-message-DP0U2YhD.js";import"./ai-user-message-toolbar-DDxxFkxm.js";import"./ai-suggestions-BMSPoga3.js";import"./ai-voice-input-y-McNoDM.js";import"./mock-adapter-D0dkxTL5.js";function r(t){const i={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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

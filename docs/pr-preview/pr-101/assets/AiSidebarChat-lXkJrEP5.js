import{j as t,M as n,T as a}from"./blocks-BywXjsFB.js";import{useMDXComponents as r}from"./index-BQ1VQcyI.js";import{C as s}from"./CustomArgTypes-sE0SzaIS.js";import{A as c}from"./AiSidebarChat.stories-B80YubeP.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Dv2diMBA.js";import"./utils-DQk2ZZ-3.js";import"./scaffold-CB2YmHoQ.js";import"./class-map-Dbx895Bk.js";import"./property-dOSA3FWT.js";import"./custom-element-UsVr97OX.js";import"./ref-D_ff68Wd.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-BJySMXcR.js";import"./query-assigned-nodes-DNXiJEIo.js";import"./if-defined-DRZsvVnC.js";import"./ai-sidebar-B0sWdOIm.js";import"./when-CI7b_ccM.js";import"./index-DpGzW0iE.js";import"./ai-modal-B-tcHPmi.js";import"./utils-DIqd7FWX.js";import"./ai-button-BioEtwFS.js";import"./ai-icon-Dizu1TlP.js";import"./ai-gradient-container-RRNpR6iu.js";import"./ai-disclaimer-BafyZei0.js";import"./ai-chatbot-base-VtbpSRIK.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-DrrWmI2e.js";import"./ai-attachment-DVWYXxZI.js";import"./ai-spinner-BIyiNqKv.js";import"./tooltip-CM9yvJLk.js";import"./overlay-Cq77g-WM.js";import"./ai-chat-header-Dxki5Vw4.js";import"./ai-dropdown-menu-DOQi-Si4.js";import"./popover-CoJTUtGs.js";import"./ai-dropdown-menu-item-AXANW9dl.js";import"./ai-agent-info-CVHWiGRb.js";import"./ai-agent-selector-B62XT-uz.js";import"./ai-chat-interface-wJsN686E.js";import"./ai-prompt-_sximv45.js";import"./ai-conversations-panel-C9ioX1Nt.js";import"./ai-edit-thread-Ij3tVmQY.js";import"./ai-file-picker-D2poUxcQ.js";import"./ai-message-thread-pjcVBF2J.js";import"./ai-response-message-toolbar-66NR5vVW.js";import"./ai-thinking-indicator-DByd9G69.js";import"./ai-client-message-Dmgu0F8L.js";import"./ai-empty-state-UvFoiv2F.js";import"./ai-error-message-ZZUx6p3G.js";import"./ai-response-message-BC75HMIp.js";import"./ai-user-message-C8ADZDY8.js";import"./ai-user-message-toolbar-D45D1erc.js";import"./ai-suggestions-5jTwxMcQ.js";import"./ai-voice-input-Dw-oa4MK.js";import"./mock-adapter-BpgeerXX.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
`,t.jsx(a,{children:"AI Sidebar Chat"}),`
`,t.jsxs(o.p,{children:["The AI Sidebar Chat component is a form factor component that positions a slotted chatbot in a sidebar or fullscreen modal. It manages positioning and expand/collapse state while delegating all chat functionality to the slotted ",t.jsx(o.code,{children:"ai-chatbot"})," component. When expanded, the chat is displayed in a fullscreen modal. When collapsed, it's displayed in a sidebar."]}),`
`,t.jsx(o.h2,{id:"features",children:"Features"}),`
`,t.jsxs(o.ul,{children:[`
`,t.jsxs(o.li,{children:[t.jsx(o.strong,{children:"Composition-based"}),": Accepts slotted chatbot component for maximum flexibility"]}),`
`,t.jsxs(o.li,{children:[t.jsx(o.strong,{children:"Built-in event handling"}),": Manages open/close events and expand/collapse interactions"]}),`
`,t.jsxs(o.li,{children:[t.jsx(o.strong,{children:"Dual display modes"}),": Sidebar for normal view, fullscreen modal when expanded"]}),`
`,t.jsxs(o.li,{children:[t.jsx(o.strong,{children:"Direct chatbot access"}),": Exposes slotted chatbot via ",t.jsx(o.code,{children:"chatbot"})," property for programmatic control"]}),`
`,t.jsxs(o.li,{children:[t.jsx(o.strong,{children:"Event bubbling"}),": All chatbot events bubble through unchanged"]}),`
`]}),`
`,t.jsx(o.h2,{id:"when-to-use",children:"When to Use"}),`
`,t.jsx(o.p,{children:"Use the AI Sidebar Chat component when you want:"}),`
`,t.jsxs(o.ul,{children:[`
`,t.jsx(o.li,{children:"A sidebar container for your chatbot that can expand to fullscreen"}),`
`,t.jsx(o.li,{children:"Standard sidebar positioning without custom logic"}),`
`,t.jsx(o.li,{children:"Built-in modal transition for expanded view"}),`
`,t.jsx(o.li,{children:"Direct control over the chatbot configuration"}),`
`]}),`
`,t.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-html",children:`<forge-ai-sidebar-chat>
  <forge-ai-chatbot .adapter="\\\${adapter}" file-upload="on"> </forge-ai-chatbot>
</forge-ai-sidebar-chat>
`})}),`
`,t.jsx(o.h3,{id:"programmatic-control",children:"Programmatic Control"}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-javascript",children:`const sidebarChat = document.querySelector('forge-ai-sidebar-chat');

// Control form factor
sidebarChat.show();
sidebarChat.close();
sidebarChat.expand(); // Switch to fullscreen modal
sidebarChat.collapse(); // Return to sidebar

// Access slotted chatbot
const chatbot = sidebarChat.chatbot;
chatbot.sendMessage('Hello!');
`})}),`
`,t.jsx(o.h2,{id:"api",children:"API"}),`
`,t.jsx(s,{})]})}function mt(e={}){const{wrapper:o}={...r(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(i,{...e})}):i(e)}export{mt as default};

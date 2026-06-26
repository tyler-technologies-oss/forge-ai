import{j as t,M as n,T as a}from"./blocks-Ug_ueqeL.js";import{useMDXComponents as r}from"./index-DVpEr7n_.js";import{C as s}from"./CustomArgTypes-CgIqyTHO.js";import{A as c}from"./AiSidebarChat.stories-DgmivKTb.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-D2VTtcxu.js";import"./utils-Bikz1eRQ.js";import"./scaffold-rlc6KrHe.js";import"./class-map-cwEOB_pd.js";import"./property-Bcw8B-50.js";import"./custom-element-UsVr97OX.js";import"./ref-CHIi2qMO.js";import"./floating-ui.dom-C0FiGihr.js";import"./split-button-WsIN54hK.js";import"./query-assigned-nodes-C5ozBc-J.js";import"./ai-sidebar-BofTd_8c.js";import"./when-CI7b_ccM.js";import"./index-7scqsdCk.js";import"./ai-modal-BN_BV4mm.js";import"./utils-BGBq21po.js";import"./ai-button-DzIa6flI.js";import"./ai-icon-B99MnkNh.js";import"./ai-gradient-container-BSbLnamL.js";import"./ai-disclaimer-ZqZ7VCcJ.js";import"./ai-chatbot-base-D57hc0Nn.js";import"./mock-adapter-B6avymXj.js";import"./utils-B8dv6FBY.js";import"./ai-chatbot-CyJlm6RW.js";import"./ai-attachment-BocyzDCj.js";import"./ai-spinner-CMw4_2lP.js";import"./tooltip-D55IwSdr.js";import"./overlay-Ci4SWHfK.js";import"./ai-chat-header-BCLCI8kk.js";import"./ai-dropdown-menu-DW8OhHH7.js";import"./if-defined-BhIfm9GC.js";import"./popover-BYQYuDbQ.js";import"./ai-dropdown-menu-item-BngpCUr2.js";import"./ai-agent-info-DGwDNdi7.js";import"./ai-agent-selector-D1ZauoWw.js";import"./ai-chat-interface-BitApxj9.js";import"./ai-prompt-BUYUFcrC.js";import"./ai-conversations-panel-Jz16eAkh.js";import"./ai-edit-thread-B0hUJpIT.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-B1s34WW0.js";import"./ai-message-thread-BNL8uZbq.js";import"./ai-response-message-toolbar-53OeJvbj.js";import"./ai-empty-state-DgvbImxf.js";import"./ai-error-message-eI_PfTZ6.js";import"./ai-response-message-BdiUnAGB.js";import"./ai-thinking-indicator-Dk-JEo2N.js";import"./ai-user-message-DiSCV8zL.js";import"./ai-user-message-toolbar-LIydjINc.js";import"./ai-suggestions-nHjgq7v1.js";import"./ai-voice-input-CU6G8fPG.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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
`,t.jsx(s,{})]})}function pt(e={}){const{wrapper:o}={...r(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(i,{...e})}):i(e)}export{pt as default};

import{j as t,M as n,T as a}from"./blocks-DO72EHk9.js";import{useMDXComponents as r}from"./index-CVIlHj1L.js";import{C as s}from"./CustomArgTypes-XPozMd-U.js";import{A as c}from"./AiSidebarChat.stories-Dd_0grBZ.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-By1ccgUH.js";import"./utils-DW7_uN9m.js";import"./scaffold-KvJHDdiK.js";import"./class-map-BYlHY0CB.js";import"./property-BkMNDj7l.js";import"./custom-element-UsVr97OX.js";import"./ref-BaZuPk-Z.js";import"./floating-ui.dom-C0FiGihr.js";import"./split-button-D89pUuUc.js";import"./query-assigned-nodes-FIM7rT_p.js";import"./ai-sidebar-DslrWqu7.js";import"./when-CI7b_ccM.js";import"./index-DxPOXOXV.js";import"./ai-modal-D2kO6rGk.js";import"./utils-BGBq21po.js";import"./ai-button-B63zGUYH.js";import"./ai-icon-Cueg6H3C.js";import"./ai-gradient-container-Bpt4xlVp.js";import"./ai-disclaimer-By0pLH0A.js";import"./ai-chatbot-base-BbL3ntj-.js";import"./mock-adapter-B6avymXj.js";import"./utils-B8dv6FBY.js";import"./ai-chatbot-CwKzM6Rq.js";import"./ai-attachment-DFfVvG-M.js";import"./ai-spinner-BTVhESfn.js";import"./tooltip-BN782Dd1.js";import"./overlay-CMz8TkDZ.js";import"./ai-chat-header-MhyfQo36.js";import"./ai-dropdown-menu-DcoIv5mY.js";import"./if-defined-C_vTzdrG.js";import"./popover-BoqmP2GN.js";import"./ai-dropdown-menu-item-BPgT9taq.js";import"./ai-agent-info-BTR4ejDR.js";import"./ai-agent-selector-wLBpqh8D.js";import"./ai-chat-interface-BOwYZCKD.js";import"./ai-prompt-da14siY6.js";import"./ai-conversations-panel-C62sJ7cz.js";import"./ai-edit-thread-DEVpsVWW.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-0U_MRVgQ.js";import"./ai-message-thread-CbtwFWmi.js";import"./ai-response-message-toolbar-DpGpYg9y.js";import"./ai-empty-state-LM09FccS.js";import"./ai-error-message-Cei2Vlft.js";import"./ai-response-message-Bw0wbpNM.js";import"./ai-thinking-indicator-BvnD0yZo.js";import"./ai-user-message-DmXGrleq.js";import"./ai-user-message-toolbar-C6TM8Ck3.js";import"./ai-suggestions-BjjXqhqZ.js";import"./ai-voice-input-Dui91PeR.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

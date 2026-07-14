import{j as t,M as n,T as a}from"./blocks-DpTsiSYm.js";import{useMDXComponents as r}from"./index-B6FbvJsz.js";import{C as s}from"./CustomArgTypes-COk3Rcwc.js";import{A as c}from"./AiSidebarChat.stories-SawJZsQo.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B-Y_IEQ6.js";import"./utils-CBdkreSp.js";import"./scaffold-DBzQUfJ8.js";import"./class-map-B6D_o-O4.js";import"./property-D3A-KRuj.js";import"./custom-element-UsVr97OX.js";import"./ref-CCT0o3RB.js";import"./floating-ui.dom-C0FiGihr.js";import"./split-button-CZfv5t7-.js";import"./query-assigned-nodes-DBpAueoY.js";import"./ai-sidebar-BQD6hHD1.js";import"./when-CI7b_ccM.js";import"./index-DAQwY-fB.js";import"./ai-modal-DIqpFzcg.js";import"./utils-BGBq21po.js";import"./ai-button-C1fxAuDp.js";import"./ai-icon-D30RMgwc.js";import"./ai-gradient-container-DM243Sj3.js";import"./ai-disclaimer-Cp3CPs50.js";import"./ai-chatbot-base-BKHUZ3H_.js";import"./mock-adapter-DymPxr2h.js";import"./markdown-C0nyZhUE.js";import"./ai-chatbot-BlLfkofs.js";import"./ai-attachment-D_z8I7lu.js";import"./ai-spinner-Dumk6YCS.js";import"./tooltip-O2bKUo5w.js";import"./overlay-CRVgxCLv.js";import"./ai-chat-header-4EPfc7x9.js";import"./ai-dropdown-menu-9LgxRZYx.js";import"./if-defined-C_XWybky.js";import"./popover-XXV3VIep.js";import"./ai-dropdown-menu-item-B8XZ2eU0.js";import"./ai-agent-info-CzqrTv2C.js";import"./ai-agent-selector-BU1usQ6Q.js";import"./ai-chat-interface-DuPfhZGi.js";import"./ai-prompt-Bo7lz1Qu.js";import"./ai-conversations-panel-Cpij2G6Y.js";import"./ai-edit-thread-CUiwuWWO.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-BiRBzqKG.js";import"./ai-message-thread-DO4DdbCB.js";import"./ai-response-message-toolbar-BhRXUiaj.js";import"./ai-empty-state-KkMQBVvn.js";import"./ai-error-message-nJ3k7Sv4.js";import"./ai-response-message-DxVNsTnc.js";import"./ai-thinking-indicator-DwDrw9C4.js";import"./ai-user-message-BuNMnkjS.js";import"./ai-user-message-toolbar-C0XHzRhr.js";import"./ai-suggestions-Bgbd40el.js";import"./ai-voice-input-BGNYoQT4.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

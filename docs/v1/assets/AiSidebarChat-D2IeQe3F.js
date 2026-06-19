import{j as t,M as n,T as a}from"./blocks-BFbBPM6V.js";import{useMDXComponents as r}from"./index-B0BsURDs.js";import{C as s}from"./CustomArgTypes-Bc9O-NUP.js";import{A as c}from"./AiSidebarChat.stories-D7bb9qtg.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BmKNl44n.js";import"./utils-DUMfLMpS.js";import"./scaffold-YnQKUnDo.js";import"./class-map-ghNvt8id.js";import"./property-C0XzZF7t.js";import"./custom-element-UsVr97OX.js";import"./ref-Bo3cXOwx.js";import"./floating-ui.dom-C0FiGihr.js";import"./split-button-CzHEW0Id.js";import"./query-assigned-nodes-6pGocr32.js";import"./ai-sidebar-hpuQ1DJs.js";import"./when-CI7b_ccM.js";import"./index-VIL5zqtj.js";import"./ai-modal-gtKYzBaY.js";import"./utils-BGBq21po.js";import"./ai-button-b03pdnQh.js";import"./ai-icon-CEMx6GGI.js";import"./ai-gradient-container-BGhRSdgR.js";import"./ai-disclaimer-Bom3kdQF.js";import"./ai-chatbot-base-DjwBzUZ-.js";import"./mock-adapter-B6avymXj.js";import"./utils-B8dv6FBY.js";import"./ai-chatbot-Bv8Fz7ZT.js";import"./ai-attachment-C9LeRBLa.js";import"./ai-spinner-C5qjduoW.js";import"./tooltip-BkCXC2GM.js";import"./overlay-C_ngKmkD.js";import"./ai-chat-header-CfAsT-JJ.js";import"./ai-dropdown-menu-TVDFdEId.js";import"./if-defined-DYaLyy0Z.js";import"./popover-DGSimB5A.js";import"./ai-dropdown-menu-item-CkRWjl4A.js";import"./ai-agent-info-C3z8kmGa.js";import"./ai-agent-selector-BDKO9SOY.js";import"./ai-chat-interface-Cr8_f0o2.js";import"./ai-prompt-Dsh2Opz6.js";import"./ai-conversations-panel-BQwBqJIi.js";import"./ai-edit-thread-CPiApPL6.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-CEj6mV-z.js";import"./ai-message-thread-DI1o0VkI.js";import"./ai-response-message-toolbar-BJGXm3E1.js";import"./ai-empty-state-OSONUgQz.js";import"./ai-error-message-D8sGOdq_.js";import"./ai-response-message-PlVG97wj.js";import"./ai-thinking-indicator-rqiDGiDe.js";import"./ai-user-message-DGDsR8GU.js";import"./ai-user-message-toolbar-qwFLAws5.js";import"./ai-suggestions-D3IH4UDz.js";import"./ai-voice-input-Bow8FUFQ.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

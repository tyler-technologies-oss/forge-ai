import{j as t,M as n,T as a}from"./blocks-DMpEMWJy.js";import{useMDXComponents as r}from"./index-XUYB7DVV.js";import{C as s}from"./CustomArgTypes-B5YRu4TD.js";import{A as c}from"./AiSidebarChat.stories-CYTithC3.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CbMe7uPE.js";import"./utils-B5D7Nk_P.js";import"./scaffold-C_xnSGHf.js";import"./class-map-BEfGLAlL.js";import"./property-DSx3GPlc.js";import"./custom-element-UsVr97OX.js";import"./ref-C98ZE7Ed.js";import"./floating-ui.dom-C0FiGihr.js";import"./split-button-B6s4NBWk.js";import"./query-assigned-nodes-DmfBU9XP.js";import"./ai-sidebar-CCyzMME1.js";import"./when-CI7b_ccM.js";import"./index-BjGDmv2F.js";import"./ai-modal-D-o6tW9X.js";import"./utils-BGBq21po.js";import"./ai-button-4bJmKTlm.js";import"./ai-icon-C5ipC1_F.js";import"./ai-gradient-container-Ba8uyGxz.js";import"./ai-disclaimer-BMyrC8cV.js";import"./ai-chatbot-base-BPYMMTXf.js";import"./mock-adapter-Dv6Maef-.js";import"./utils-YPQNW8lZ.js";import"./ai-chatbot-Dzmgajsn.js";import"./ai-attachment-DSvUKfqH.js";import"./ai-spinner-C9hNROKc.js";import"./tooltip-B2yPECK-.js";import"./overlay-B6FX9w3r.js";import"./ai-chat-header-C6rlkwze.js";import"./ai-dropdown-menu-CKoXILvG.js";import"./if-defined-CgS1-Yp-.js";import"./popover-CZ4ueL3e.js";import"./ai-dropdown-menu-item-CqpthYhh.js";import"./ai-agent-info-DsISuM3_.js";import"./ai-agent-selector-BgHAJawJ.js";import"./ai-chat-interface-BJtNmvD0.js";import"./ai-prompt-CoFX_hNr.js";import"./ai-conversations-panel-27poj2ib.js";import"./ai-edit-thread-BZ2eJlPP.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-De0AZl4R.js";import"./ai-message-thread-Df0thhWb.js";import"./ai-response-message-toolbar-DC-P-qxt.js";import"./ai-empty-state-W9AV50ZI.js";import"./ai-error-message-9YQQnkc5.js";import"./ai-response-message-CXesoI5Q.js";import"./ai-thinking-indicator-CN_8cztj.js";import"./ai-user-message-CG2BayUL.js";import"./ai-user-message-toolbar-CipPQhu6.js";import"./ai-suggestions-DJzmtFdy.js";import"./ai-voice-input-BIZ8c0Qt.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

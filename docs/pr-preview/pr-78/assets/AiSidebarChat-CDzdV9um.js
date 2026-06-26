import{j as t,M as n,T as a}from"./blocks-062n5e83.js";import{useMDXComponents as r}from"./index-BFhhKLB-.js";import{C as s}from"./CustomArgTypes-COPQFxaC.js";import{A as c}from"./AiSidebarChat.stories-Cg8vfqLM.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CPAyPH5b.js";import"./utils-BSmLuotp.js";import"./scaffold-DVZTu3jt.js";import"./class-map-B7FMgahk.js";import"./property-B_MP7V5D.js";import"./custom-element-UsVr97OX.js";import"./ref-3UsVpXn8.js";import"./floating-ui.dom-C0FiGihr.js";import"./split-button-jBuToSAM.js";import"./query-assigned-nodes-CKqmraTC.js";import"./ai-sidebar-DLa8wnwq.js";import"./when-CI7b_ccM.js";import"./index-BwXw-z9f.js";import"./ai-modal-DTyrAJnT.js";import"./utils-BGBq21po.js";import"./ai-button-BVdtgiTq.js";import"./ai-icon-BcUHc4Yx.js";import"./ai-gradient-container-NB_hryvI.js";import"./ai-disclaimer-DkYwMf9J.js";import"./ai-chatbot-base-BwLP5u3V.js";import"./mock-adapter-B6avymXj.js";import"./utils-B8dv6FBY.js";import"./ai-chatbot-B1jbxiKm.js";import"./ai-attachment-CIiXABjh.js";import"./ai-spinner-BleCMUtw.js";import"./tooltip-CzUqTmJL.js";import"./overlay-DGCorJIu.js";import"./ai-chat-header-KZAN-Jbf.js";import"./ai-dropdown-menu-B21WfbRS.js";import"./if-defined-CL_EYE-A.js";import"./popover-Cn0uy9Tx.js";import"./ai-dropdown-menu-item-ddOJ-izh.js";import"./ai-agent-info-C35A0fo8.js";import"./ai-agent-selector-B5Tzep85.js";import"./ai-chat-interface-DbLA5HXf.js";import"./ai-prompt-BjC2xyt_.js";import"./ai-conversations-panel-DqPE51sy.js";import"./ai-edit-thread-UD8fBWjg.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-BT37X5vD.js";import"./ai-message-thread-Cb20A9ft.js";import"./ai-response-message-toolbar-DdJleDsz.js";import"./ai-empty-state-B-Ssp2Yo.js";import"./ai-error-message-DIh5f6nl.js";import"./ai-response-message-Ss-UzZfj.js";import"./ai-thinking-indicator-CdW5qkA4.js";import"./ai-user-message-BFAOo0uw.js";import"./ai-user-message-toolbar-B85STB3S.js";import"./ai-suggestions-F8QF_NFS.js";import"./ai-voice-input-DT1UvX4W.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

import{j as t,M as n,T as a}from"./blocks-xH1XVAmI.js";import{useMDXComponents as r}from"./index-E3Ac1ZQs.js";import{C as s}from"./CustomArgTypes-qipuEUD_.js";import{A as c}from"./AiSidebarChat.stories-BQwhVHQu.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Ctu7MqZS.js";import"./utils-B7uKMC8s.js";import"./scaffold-BQGTp6Zt.js";import"./class-map-x_nhB4Nh.js";import"./custom-element-UsVr97OX.js";import"./property-C1S2koan.js";import"./ref-CwfoRA4T.js";import"./query-CMxN5YBf.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-BPmHgIto.js";import"./query-assigned-elements-DIJrWjmO.js";import"./query-assigned-nodes-GumPD3vw.js";import"./if-defined-BUqpzADw.js";import"./ai-sidebar-B0mCcUK1.js";import"./when-CI7b_ccM.js";import"./index-DTxDEqU3.js";import"./ai-modal-BdfyX2-K.js";import"./utils-DIqd7FWX.js";import"./ai-button-DlPGE94F.js";import"./ai-icon-CjpCxWRq.js";import"./ai-gradient-container-Bpmv-brO.js";import"./ai-disclaimer-DcsPxubi.js";import"./ai-chatbot-base-Bb14QAbz.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-B2OaFMcL.js";import"./ai-attachment-D_2Z10UW.js";import"./ai-spinner-Q9JGlnvT.js";import"./tooltip-I8vV3yCu.js";import"./overlay-DIzt5UNo.js";import"./ai-chat-header-BhSxb0Ml.js";import"./ai-dropdown-menu-BBtRQlXe.js";import"./popover-BdkOeVj4.js";import"./ai-dropdown-menu-item-BxBJjP5L.js";import"./ai-agent-info-eddhTFkH.js";import"./ai-agent-selector-BQVAMhbq.js";import"./ai-chat-interface-Ba_-oCwi.js";import"./ai-prompt-BVaeO_Fm.js";import"./ai-conversations-panel-BfDIPPqW.js";import"./ai-edit-thread-BAqV-OfI.js";import"./ai-error-message-5fIgSMmQ.js";import"./ai-file-picker-CJIwi9Pr.js";import"./ai-message-thread-Bud0Q3DD.js";import"./ai-response-message-toolbar-DNKQcgfz.js";import"./ai-thinking-indicator-G3QKad9z.js";import"./ai-client-message-ZzUV71Ja.js";import"./ai-empty-state-nZJY97p0.js";import"./ai-response-message-B9Ttu1z5.js";import"./ai-user-message-lKk3VqWS.js";import"./ai-user-message-toolbar-DggHEJbN.js";import"./ai-suggestions-CFkIvBN0.js";import"./ai-voice-input-BOu7IbMs.js";import"./mock-adapter-BpgeerXX.js";function e(i){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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
`,t.jsx(s,{})]})}function xt(i={}){const{wrapper:o}={...r(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(e,{...i})}):e(i)}export{xt as default};

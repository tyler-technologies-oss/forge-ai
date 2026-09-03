import{j as t,M as n,T as a}from"./blocks-2xU0dCkE.js";import{useMDXComponents as r}from"./index-B52_wQbQ.js";import{C as s}from"./CustomArgTypes-D35Tmwkl.js";import{A as c}from"./AiSidebarChat.stories-DsZN0PAC.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Bi-1nWkR.js";import"./utils-BX4gMDEK.js";import"./scaffold-DVpO2ry8.js";import"./class-map-DveZVzB6.js";import"./property-D-A3RxM9.js";import"./custom-element-UsVr97OX.js";import"./ref-CVnE5sLo.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-C20Isq5H.js";import"./query-assigned-nodes-DDrXrDde.js";import"./if-defined-bUPqGoPe.js";import"./ai-sidebar-BSljHkQd.js";import"./when-CI7b_ccM.js";import"./index-Ew-Eb6zR.js";import"./ai-modal-_MO_XFb_.js";import"./utils-DIqd7FWX.js";import"./ai-button-CiGII1K2.js";import"./ai-icon-DYcDW-Aq.js";import"./ai-gradient-container-DgMkJLwY.js";import"./ai-disclaimer-BpSgx8Za.js";import"./ai-chatbot-base-Bm3YU0xt.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-CscIGvqJ.js";import"./ai-attachment-CEUExzD5.js";import"./ai-spinner-B4hfIXY7.js";import"./tooltip-DIYC_qFg.js";import"./overlay-XfBHk16S.js";import"./ai-chat-header-C7m8Unnd.js";import"./ai-dropdown-menu-Cg8aOUr3.js";import"./popover-DJM4l3dC.js";import"./ai-dropdown-menu-item-D-LARChW.js";import"./ai-agent-info-BgyO98Wo.js";import"./ai-agent-selector-BnzlQgjK.js";import"./ai-chat-interface-CkOZ-V1N.js";import"./ai-prompt-DFX7pkkA.js";import"./ai-conversations-panel-DaZwpjH1.js";import"./ai-edit-thread-DyfjTsPy.js";import"./ai-file-picker-BurVGbAS.js";import"./ai-message-thread-DFLAELmc.js";import"./ai-response-message-toolbar-C_C2KBw8.js";import"./ai-thinking-indicator-Bsew6VLy.js";import"./ai-client-message-BKv0r0f7.js";import"./ai-empty-state-CJ9tRewS.js";import"./ai-error-message-2yrvom1t.js";import"./ai-response-message-C3eoJ6fN.js";import"./ai-user-message-BBaYNY-b.js";import"./ai-user-message-toolbar-NkuyuMKH.js";import"./ai-suggestions-BlfpnYBl.js";import"./ai-voice-input-2E_JNXdX.js";import"./mock-adapter-BpgeerXX.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

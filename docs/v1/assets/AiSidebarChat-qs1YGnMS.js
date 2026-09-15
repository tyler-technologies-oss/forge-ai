import{j as t,M as n,T as a}from"./blocks-B79mNY7L.js";import{useMDXComponents as r}from"./index-BkZ5KD2i.js";import{C as s}from"./CustomArgTypes-Bfg3odDp.js";import{A as c}from"./AiSidebarChat.stories-UAFcs8Aj.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Jty1B146.js";import"./utils-BgonhVMT.js";import"./scaffold-F_K1ZQBk.js";import"./class-map-BnDuJcY3.js";import"./custom-element-UsVr97OX.js";import"./property-D8S6TFWF.js";import"./ref-CmNVDUiu.js";import"./query-Bv8qncBY.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-C1wWGx_Y.js";import"./query-assigned-elements-CTggAr8Y.js";import"./query-assigned-nodes-BpQCkmmG.js";import"./if-defined-DASwrS-W.js";import"./ai-sidebar-CxGyDyAs.js";import"./when-CI7b_ccM.js";import"./index-CGa_sKMX.js";import"./ai-modal-CbLRoZje.js";import"./utils-DIqd7FWX.js";import"./ai-button-DrgAfmFX.js";import"./ai-icon-zeOV5_SL.js";import"./ai-gradient-container-BhnTzZQK.js";import"./ai-disclaimer-DdRzyExx.js";import"./ai-chatbot-base-FUDfkXgE.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-D5F7gnXn.js";import"./ai-attachment-CgEmVHKD.js";import"./ai-spinner-B_ag7T2K.js";import"./tooltip-DOUhDH58.js";import"./overlay-udXoHIA3.js";import"./ai-chat-header-DWnyMbxC.js";import"./ai-dropdown-menu-VafAhu7n.js";import"./popover-DjVMvmJi.js";import"./ai-dropdown-menu-item-B1PXE9uX.js";import"./ai-agent-info-BH5DpS1w.js";import"./ai-agent-selector-DAkhpprA.js";import"./ai-chat-interface-CEZS_D9P.js";import"./ai-prompt-BQqUQ6nD.js";import"./ai-conversations-panel-CZRH994L.js";import"./ai-edit-thread-BOeal4Ry.js";import"./ai-error-message-DWySf7sS.js";import"./ai-file-picker-DKy2kcVj.js";import"./ai-message-thread-6lfDleCo.js";import"./ai-response-message-toolbar-Co63aJYP.js";import"./ai-thinking-indicator-Cfaktn-p.js";import"./ai-client-message-DuIOW6Ap.js";import"./ai-empty-state-DS-Vj4ah.js";import"./ai-response-message-BMpVLoDN.js";import"./ai-user-message-CLB6GGSL.js";import"./ai-user-message-toolbar-D4gRbsUt.js";import"./ai-suggestions-Bdoi437i.js";import"./ai-voice-input-BRHZl4cB.js";import"./mock-adapter-BpgeerXX.js";function e(i){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

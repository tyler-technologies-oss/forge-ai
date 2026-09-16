import{j as t,M as n,T as a}from"./blocks-C-yRNw9i.js";import{useMDXComponents as r}from"./index-BwwbKgpb.js";import{C as s}from"./CustomArgTypes-CzpgvR45.js";import{A as c}from"./AiSidebarChat.stories--LWI5Ha9.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Dl7m60J3.js";import"./utils-BQbSAUyf.js";import"./scaffold-BxOc1pW9.js";import"./class-map-B593WCok.js";import"./custom-element-UsVr97OX.js";import"./property-IM2knKC7.js";import"./ref-Bw2ur2p5.js";import"./state-DNbXEwuZ.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-DtpxY-ZF.js";import"./query-assigned-elements-C-RCz-nY.js";import"./query-assigned-nodes-Jvna5mvg.js";import"./query-BJvHXhby.js";import"./if-defined-DORfQRNM.js";import"./ai-sidebar-B6dwO7lt.js";import"./when-CI7b_ccM.js";import"./index-BL-g-_0N.js";import"./ai-modal-B2l_AZJQ.js";import"./utils-DIqd7FWX.js";import"./ai-button-Um-mi7HH.js";import"./ai-icon-D6PXCPQ5.js";import"./ai-gradient-container-DSgjnFDX.js";import"./ai-disclaimer-D7rcTWUo.js";import"./ai-chatbot-base-CaXopnQ3.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-DPEqiOsW.js";import"./ai-attachment-C0W27EFP.js";import"./ai-spinner-CU9NqQEr.js";import"./tooltip-B2ua4Lgv.js";import"./overlay-Su9fdJsR.js";import"./ai-chat-header-DNcnyHQG.js";import"./ai-dropdown-menu-DwjzBMwv.js";import"./popover-Cpb3aBbm.js";import"./ai-dropdown-menu-item-BEq5KQd3.js";import"./ai-agent-info-DaYXg9Cx.js";import"./ai-agent-selector-DN9J_kZD.js";import"./ai-chat-interface-CcKST9TY.js";import"./ai-prompt-t9bCj6Ip.js";import"./ai-conversations-panel-B3Z3nIj_.js";import"./ai-edit-thread-Cs9_rgKY.js";import"./ai-error-message-DKEyqtZF.js";import"./ai-file-picker-Crnq4i3u.js";import"./ai-message-thread-vFyULu8T.js";import"./ai-response-message-toolbar-VxJRpY6J.js";import"./ai-thinking-indicator-DcCB6Ebp.js";import"./ai-client-message-CLvdrFMX.js";import"./ai-empty-state-CLWb6XdS.js";import"./ai-response-message--FPqDtT-.js";import"./ai-user-message-BppvTjci.js";import"./ai-user-message-toolbar-B71mDdy2.js";import"./ai-suggestions-BYoQOM8J.js";import"./ai-voice-input-CQelSsum.js";import"./mock-adapter-BpgeerXX.js";function e(i){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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
`,t.jsx(s,{})]})}function bt(i={}){const{wrapper:o}={...r(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(e,{...i})}):e(i)}export{bt as default};

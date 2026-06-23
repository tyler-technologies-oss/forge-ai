import{j as t,M as n,T as a}from"./blocks-CsD4NOsj.js";import{useMDXComponents as r}from"./index-C2umsrXa.js";import{C as s}from"./CustomArgTypes-D6uAopfQ.js";import{A as c}from"./AiSidebarChat.stories-BJ2ntdvO.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-9kznCVoF.js";import"./utils-DUMfLMpS.js";import"./scaffold-DYMdXgB-.js";import"./class-map-Dnx7h5Ue.js";import"./property-oAenimj3.js";import"./custom-element-UsVr97OX.js";import"./ref-BICgGda8.js";import"./floating-ui.dom-C0FiGihr.js";import"./split-button-BC2iNXfR.js";import"./query-assigned-nodes-D8ZhDGjk.js";import"./ai-sidebar-ByI02UIY.js";import"./when-CI7b_ccM.js";import"./index-Chv38U1r.js";import"./ai-modal-_-mFkJ2C.js";import"./utils-BGBq21po.js";import"./ai-button-C9OPt9zA.js";import"./ai-icon-Dj5Qzz9s.js";import"./ai-gradient-container-D3CFeL64.js";import"./ai-disclaimer-BkRS5BCA.js";import"./ai-chatbot-base-Ct90HFYc.js";import"./mock-adapter-B6avymXj.js";import"./utils-B8dv6FBY.js";import"./ai-chatbot-hS0djG3v.js";import"./ai-attachment-BQQ9e09f.js";import"./ai-spinner-CcKqCKIS.js";import"./tooltip-WPKgaaZo.js";import"./overlay-BYCxFLi_.js";import"./ai-chat-header-DQcN_KD3.js";import"./ai-dropdown-menu-YzJbcPbT.js";import"./if-defined-Dz4WhS29.js";import"./popover-BsMAt4ba.js";import"./ai-dropdown-menu-item-BaaStevq.js";import"./ai-agent-info-DmhVDTjR.js";import"./ai-agent-selector-CP7H6O-1.js";import"./ai-chat-interface-DJIPKzw1.js";import"./ai-prompt-Bj3GHRcq.js";import"./ai-conversations-panel-InrWje5W.js";import"./ai-edit-thread-BZFUDzcE.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-DwP1g0QH.js";import"./ai-message-thread-DOvxIWPr.js";import"./ai-response-message-toolbar-CTtyyDHG.js";import"./ai-empty-state-BtgI7b7g.js";import"./ai-error-message-CTvckN4r.js";import"./ai-response-message-DJcA5Iwi.js";import"./ai-thinking-indicator-DkAa-4lA.js";import"./ai-user-message-C-HvErCd.js";import"./ai-user-message-toolbar-DCCqhCXM.js";import"./ai-suggestions-DoMHS1IK.js";import"./ai-voice-input-BzJjk-Vd.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

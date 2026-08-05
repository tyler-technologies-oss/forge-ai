import{j as t,M as n,T as a}from"./blocks-BtztPFNE.js";import{useMDXComponents as r}from"./index-BBue8hiB.js";import{C as s}from"./CustomArgTypes-BZrTVAV_.js";import{A as c}from"./AiSidebarChat.stories-B71kgjSe.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CmlZJgPw.js";import"./utils-_nJVQAgP.js";import"./scaffold-D1pC1xrx.js";import"./class-map-Du48Bieu.js";import"./property-6B-lD8AL.js";import"./custom-element-UsVr97OX.js";import"./ref-BbywywwM.js";import"./floating-ui.dom-alButkyJ.js";import"./split-button-JrVrJ8u6.js";import"./query-assigned-nodes-Dc3AF-6t.js";import"./if-defined-SFzxt3a7.js";import"./ai-sidebar-BEQ6cFsj.js";import"./when-CI7b_ccM.js";import"./index-BNX5xoY3.js";import"./ai-modal-CKpiu_wx.js";import"./utils-BGBq21po.js";import"./ai-button-Cmd2ye-s.js";import"./ai-icon-fETFJy-x.js";import"./ai-gradient-container-DuNdX4SP.js";import"./ai-disclaimer-C-eK4_JS.js";import"./ai-chatbot-base-cvEGWA8w.js";import"./mock-adapter-DbkpGE97.js";import"./markdown-BZ_ChyzU.js";import"./ai-chatbot-DjlHG7f1.js";import"./ai-attachment-DwCXqN3F.js";import"./ai-spinner-Crue9Pfu.js";import"./tooltip-CLkTDClh.js";import"./overlay-2RFBj5zj.js";import"./ai-chat-header-CNm9GEc2.js";import"./ai-dropdown-menu-CcDCYm_n.js";import"./popover-5o_9cS0F.js";import"./ai-dropdown-menu-item-C5hnHmYU.js";import"./ai-agent-info-B-RMVxu9.js";import"./ai-agent-selector-CsA1Wy4u.js";import"./ai-chat-interface-vTT7B-lP.js";import"./ai-prompt-e0QGoaHJ.js";import"./ai-conversations-panel-BNN2Gwps.js";import"./ai-edit-thread-v98wHzh9.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-BVDLbrpR.js";import"./ai-message-thread-o-pWrVCd.js";import"./ai-response-message-toolbar-ClK91KXA.js";import"./ai-thinking-indicator-BDAXmB8v.js";import"./ai-empty-state-znyzxNV-.js";import"./ai-error-message-DBuc7Jrx.js";import"./ai-response-message-BxXXTmI9.js";import"./ai-user-message-BHhuKSBo.js";import"./ai-user-message-toolbar-D62cssyQ.js";import"./ai-suggestions-CQPfYeVz.js";import"./ai-voice-input-aZVRp8l4.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

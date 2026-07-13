import{j as t,M as n,T as a}from"./blocks-CblrnFGH.js";import{useMDXComponents as r}from"./index-C4FT7CeJ.js";import{C as s}from"./CustomArgTypes-D5faymhn.js";import{A as c}from"./AiSidebarChat.stories-BDG4TgWD.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CDKJp9te.js";import"./utils-Cn_Diszn.js";import"./scaffold-B-mBRRtR.js";import"./class-map-C8SUmwP9.js";import"./property-B_Uwy7_p.js";import"./custom-element-UsVr97OX.js";import"./ref-CbkwJCAn.js";import"./floating-ui.dom-C0FiGihr.js";import"./split-button-BrIiEde8.js";import"./query-assigned-nodes-D9GHL6gE.js";import"./ai-sidebar-DMkqRKLk.js";import"./when-CI7b_ccM.js";import"./index-Ckbdf2Es.js";import"./ai-modal-D7d3RcVE.js";import"./utils-BGBq21po.js";import"./ai-button-BHPAKVYv.js";import"./ai-icon-DC8uwUxc.js";import"./ai-gradient-container-DJXW-lBi.js";import"./ai-disclaimer-CPvVFABG.js";import"./ai-chatbot-base-Dsq2fbLJ.js";import"./mock-adapter-DymPxr2h.js";import"./markdown-C0nyZhUE.js";import"./ai-chatbot-aHYemthb.js";import"./ai-attachment-BNVfuIpw.js";import"./ai-spinner-Cthjg_6r.js";import"./tooltip-Cj9cA_TB.js";import"./overlay-3RR5bvgx.js";import"./ai-chat-header-BfMP2VrE.js";import"./ai-dropdown-menu-L4DEP3fn.js";import"./if-defined-SgZfkoEh.js";import"./popover-DOEyM-vj.js";import"./ai-dropdown-menu-item-i2y954eB.js";import"./ai-agent-info-DFwbYjbA.js";import"./ai-agent-selector-C0sH7TmU.js";import"./ai-chat-interface-CyCQHviZ.js";import"./ai-prompt-BiCeRFZZ.js";import"./ai-conversations-panel-Cow8C-p5.js";import"./ai-edit-thread-CA0xzBLH.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-C2_XyqBn.js";import"./ai-message-thread-Bozv0bnT.js";import"./ai-response-message-toolbar-BAPk9qf0.js";import"./ai-empty-state-WIE7xVBz.js";import"./ai-error-message-P5fYEgsH.js";import"./ai-response-message-Bmbckrs3.js";import"./ai-thinking-indicator-Dk9rZ9TJ.js";import"./ai-user-message-BMzjuZZ5.js";import"./ai-user-message-toolbar-phxS9Tto.js";import"./ai-suggestions-5DmTohCk.js";import"./ai-voice-input-9EQDlGHg.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

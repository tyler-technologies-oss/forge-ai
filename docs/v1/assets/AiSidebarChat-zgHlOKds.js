import{j as t,M as n,T as a}from"./blocks-KkMzt7TY.js";import{useMDXComponents as r}from"./index-CosoE3kp.js";import{C as s}from"./CustomArgTypes-BAeHVQQN.js";import{A as c}from"./AiSidebarChat.stories-Cqt_GSd9.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Cq14Cal9.js";import"./utils-Dlg0BKcN.js";import"./scaffold-CSTtbDVG.js";import"./class-map-BwIlHIP7.js";import"./property-4P8QtmFM.js";import"./custom-element-UsVr97OX.js";import"./ref-CcVIihXV.js";import"./floating-ui.dom-alButkyJ.js";import"./split-button-DxiSEgZj.js";import"./query-assigned-nodes-B5O7S5sq.js";import"./if-defined-V5BCcuZk.js";import"./ai-sidebar-o5_B1Fe0.js";import"./when-CI7b_ccM.js";import"./index-BEeAXI85.js";import"./ai-modal-HcAy80MU.js";import"./utils-BGBq21po.js";import"./ai-button-DfsxczPU.js";import"./ai-icon-BYneJb7G.js";import"./ai-gradient-container-BBO37w0K.js";import"./ai-disclaimer-BUYj24Yz.js";import"./ai-chatbot-base-Ds77Pxeh.js";import"./mock-adapter-ph_xQ6k2.js";import"./markdown-CtLA8yAF.js";import"./ai-chatbot-8EMhyArx.js";import"./ai-attachment-DMo7QW-p.js";import"./ai-spinner-CF6rpjZe.js";import"./tooltip-oHwsPZSJ.js";import"./overlay-UwRAzJcm.js";import"./ai-chat-header-C4H3HBgJ.js";import"./ai-dropdown-menu-lfsd-jEM.js";import"./popover-CHs-SCXt.js";import"./ai-dropdown-menu-item-CaKtf9PY.js";import"./ai-agent-info-C7JLen4S.js";import"./ai-agent-selector-CWaKjDxR.js";import"./ai-chat-interface-nJEnrrc9.js";import"./ai-prompt-D2SO-Ska.js";import"./ai-conversations-panel-DhTapwi5.js";import"./ai-edit-thread-Bm89OxkI.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-1G-oU0V1.js";import"./ai-message-thread-0b1gjnuW.js";import"./ai-response-message-toolbar-CwWT0vyj.js";import"./ai-thinking-indicator-BRs8Ju2X.js";import"./ai-empty-state-uBjUTE2z.js";import"./ai-error-message-CtXJ93DN.js";import"./ai-response-message-DoiRROCh.js";import"./ai-user-message-BMTC_YM6.js";import"./ai-user-message-toolbar-DdrJ0Tip.js";import"./ai-suggestions-CfCjFXFt.js";import"./ai-voice-input-CiboE_8I.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

import{j as t,M as n,T as a}from"./blocks-Vkr-ZUPn.js";import{useMDXComponents as r}from"./index-CSelOVFX.js";import{C as s}from"./CustomArgTypes-wzBMJawA.js";import{A as c}from"./AiSidebarChat.stories-6C7RNyOY.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B1h2trez.js";import"./utils-WNoYL-ZF.js";import"./scaffold-CQ5khyIx.js";import"./class-map-COC2HmkD.js";import"./property-5ihwkxmO.js";import"./custom-element-UsVr97OX.js";import"./ref-C-NDr_vL.js";import"./floating-ui.dom-C0FiGihr.js";import"./split-button-DmiFhRTR.js";import"./query-assigned-nodes-CBZQCLdH.js";import"./ai-sidebar-CcXxieAt.js";import"./when-CI7b_ccM.js";import"./index-DhvHB2MG.js";import"./ai-modal-BaQH8rv8.js";import"./utils-BGBq21po.js";import"./ai-button-Cz1NNdEs.js";import"./ai-icon-DYrUYdAV.js";import"./ai-gradient-container-C2N1C_kF.js";import"./ai-disclaimer-CsZxzTNe.js";import"./ai-chatbot-base-BuNe042S.js";import"./mock-adapter-B6avymXj.js";import"./utils-B8dv6FBY.js";import"./ai-chatbot-CDYkw0BD.js";import"./ai-attachment-Ca_vmhqS.js";import"./ai-spinner-O77UGAhA.js";import"./tooltip-DZ-2iqAH.js";import"./overlay-DMCoM_X2.js";import"./ai-chat-header-Dsf9sXOz.js";import"./ai-dropdown-menu-YUGVmgeG.js";import"./if-defined-w0E-7F7o.js";import"./popover-BRD6kWFo.js";import"./ai-dropdown-menu-item-C07-qdxg.js";import"./ai-agent-info-CyaiyhKs.js";import"./ai-agent-selector-DlnYICLC.js";import"./ai-chat-interface-yCveyNqk.js";import"./ai-prompt-DHgdUWHN.js";import"./ai-conversations-panel-CARLDCag.js";import"./ai-edit-thread-hjwu2pvd.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-CjkWWz5p.js";import"./ai-message-thread-DwMeaR1p.js";import"./ai-response-message-toolbar-DJcJDVQ3.js";import"./ai-empty-state-BlatgTOK.js";import"./ai-error-message-B1yF6U8Y.js";import"./ai-response-message-Cwa_bF8T.js";import"./ai-thinking-indicator-CnsPDge6.js";import"./ai-user-message-y22H62kQ.js";import"./ai-user-message-toolbar-DP2jxmcy.js";import"./ai-suggestions-C95rh2lr.js";import"./ai-voice-input-CDYP4nj8.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

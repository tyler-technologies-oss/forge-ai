import{j as t,M as n,T as a}from"./blocks-DPXGb62L.js";import{useMDXComponents as r}from"./index-BkEdmKTP.js";import{C as s}from"./CustomArgTypes-Dj13jO1G.js";import{A as c}from"./AiSidebarChat.stories-iFHHUNXt.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-lutLUdyS.js";import"./utils-Bikz1eRQ.js";import"./scaffold-DabpY2kf.js";import"./class-map-BtBuQUFD.js";import"./property-FO1USxMD.js";import"./custom-element-UsVr97OX.js";import"./ref-BvA0jJ0l.js";import"./floating-ui.dom-C0FiGihr.js";import"./split-button-CgihEuGT.js";import"./query-assigned-nodes-BdHDstVn.js";import"./ai-sidebar-BMSKSZkD.js";import"./when-CI7b_ccM.js";import"./index-DDGv1Cu7.js";import"./ai-modal-Dc28_m6b.js";import"./utils-BGBq21po.js";import"./ai-button-DNnAHGqb.js";import"./ai-icon-CQdVpETg.js";import"./ai-gradient-container-Ba_ZKElA.js";import"./ai-disclaimer-CnKodt4J.js";import"./ai-chatbot-base-C6w5DWKR.js";import"./mock-adapter-B6avymXj.js";import"./utils-B8dv6FBY.js";import"./ai-chatbot-phnwfJlB.js";import"./ai-attachment-BsmLxZLO.js";import"./ai-spinner-BItbKH6m.js";import"./tooltip-o_wY9uor.js";import"./overlay-BtSk5K20.js";import"./ai-chat-header-B2LV6jRA.js";import"./ai-dropdown-menu-6ulxIMPL.js";import"./if-defined-BmEjh9cB.js";import"./popover-DKtw3xzY.js";import"./ai-dropdown-menu-item-9Gld_LQA.js";import"./ai-agent-info-DHMVI349.js";import"./ai-agent-selector-0RjbshHz.js";import"./ai-chat-interface-C2dh_8l4.js";import"./ai-prompt-Bq4_wDMo.js";import"./ai-conversations-panel-BJxJulVn.js";import"./ai-edit-thread-BdAGmqXP.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-Cuh4XZVp.js";import"./ai-message-thread-DPvTk_-c.js";import"./ai-response-message-toolbar-DkuYEzvt.js";import"./ai-empty-state-E9CPRLvM.js";import"./ai-error-message-CVw4hgqS.js";import"./ai-response-message-6KKFkdMG.js";import"./ai-thinking-indicator--nkOQiWx.js";import"./ai-user-message-e65vYzHW.js";import"./ai-user-message-toolbar-OzY3D4RI.js";import"./ai-suggestions-ByMO7Adk.js";import"./ai-voice-input-DS7N66pX.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

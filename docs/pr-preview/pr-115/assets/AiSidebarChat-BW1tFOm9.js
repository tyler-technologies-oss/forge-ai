import{j as t,M as n,T as a}from"./blocks-D-jryxvQ.js";import{useMDXComponents as r}from"./index-bHPF_ebq.js";import{C as s}from"./CustomArgTypes-DK9gOOsK.js";import{A as c}from"./AiSidebarChat.stories-Duk4Lz4-.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-D1C_cP03.js";import"./utils-BQbSAUyf.js";import"./scaffold-BEDpyqbp.js";import"./class-map-BLwfprfL.js";import"./custom-element-UsVr97OX.js";import"./property-B5TE8D88.js";import"./ref-Dfxh5cwS.js";import"./state-BoHpUCf1.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-DOO6F2CZ.js";import"./query-assigned-elements-DsU4Psob.js";import"./query-assigned-nodes-ohtQ9uWz.js";import"./query-C-MXZcjm.js";import"./if-defined-DinREpVu.js";import"./ai-sidebar-DyLyB5Ju.js";import"./when-CI7b_ccM.js";import"./index-B6JWIPjY.js";import"./ai-modal-8QPUUvBa.js";import"./utils-DIqd7FWX.js";import"./ai-button-CxyLyWFb.js";import"./ai-icon-E7TzI64B.js";import"./ai-gradient-container-DtNDA3f0.js";import"./ai-disclaimer-DZPShg2b.js";import"./ai-chatbot-base-CJx-sWDP.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-pkblnAaG.js";import"./ai-attachment-bcGLY6Lh.js";import"./ai-spinner-BtN_mFEK.js";import"./tooltip-CjjDjoDh.js";import"./overlay-BnE7Ix3l.js";import"./ai-chat-header-C9cb3gQL.js";import"./ai-dropdown-menu-DXKp5FHY.js";import"./popover-vlx_ZVL3.js";import"./ai-dropdown-menu-item-0_htBfo1.js";import"./ai-agent-info-Bd6D8ZlE.js";import"./ai-agent-selector-tVBE9mvb.js";import"./ai-chat-interface-D0Y6dX6r.js";import"./ai-prompt-CDlWM2uc.js";import"./ai-conversations-panel-CBN0IFyG.js";import"./ai-edit-thread-CwtPyAa9.js";import"./ai-error-message-C9Ye-KfL.js";import"./ai-file-picker-DwagW-bM.js";import"./ai-message-thread-BbZyDVg9.js";import"./ai-response-message-toolbar-CAJFysN3.js";import"./ai-thinking-indicator-CFT1Izzm.js";import"./ai-client-message-C6SX09xj.js";import"./ai-empty-state-xDdSqcHn.js";import"./ai-response-message-GKn1voQr.js";import"./ai-user-message-B-xZJx_j.js";import"./ai-user-message-toolbar-BTo7Oe5f.js";import"./ai-suggestions-BFxMDdHZ.js";import"./ai-voice-input-wWRHhVKV.js";import"./mock-adapter-BpgeerXX.js";function e(i){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

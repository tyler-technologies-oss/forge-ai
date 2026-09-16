import{j as t,M as n,T as a}from"./blocks-BhT2kJo2.js";import{useMDXComponents as r}from"./index-4fdUIK57.js";import{C as s}from"./CustomArgTypes-DKFVs5gw.js";import{A as c}from"./AiSidebarChat.stories-uIxGm8fN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CaqocGUq.js";import"./utils-COCFf-wu.js";import"./scaffold-DRpnNiZR.js";import"./class-map-BaN0ao3q.js";import"./custom-element-UsVr97OX.js";import"./property-CHVNCB1X.js";import"./ref-CTRs6iTA.js";import"./state-D3En9dOR.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-Ci05_ZEI.js";import"./query-assigned-elements-B9fLbVaQ.js";import"./query-assigned-nodes-CfOK55xz.js";import"./query-DtS7uPEz.js";import"./if-defined-DXM0dcXd.js";import"./ai-sidebar-BZKE7q_b.js";import"./when-CI7b_ccM.js";import"./index-Cv63ku0L.js";import"./ai-modal-BQ8GK9bE.js";import"./utils-DIqd7FWX.js";import"./ai-button-DF26drKQ.js";import"./ai-icon-DqQOQxLi.js";import"./ai-gradient-container-BzBUSTvD.js";import"./ai-disclaimer-BTgq9joF.js";import"./ai-chatbot-base-DY7BkMjK.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-BqJR-mxs.js";import"./ai-attachment-BsN_Uokq.js";import"./ai-spinner-Cf9H_Og0.js";import"./tooltip-DX_rLdGE.js";import"./overlay-Dktk33-N.js";import"./ai-chat-header-DHuB_jRL.js";import"./ai-dropdown-menu-BKjfxlJo.js";import"./popover-BoJ3IvAL.js";import"./ai-dropdown-menu-item-YMdb9ADw.js";import"./ai-agent-info-CIMOZO79.js";import"./ai-agent-selector-B9HlxtZo.js";import"./ai-chat-interface-B9LLrZpC.js";import"./ai-prompt-CIKG92N5.js";import"./ai-conversations-panel-BBr8t0-B.js";import"./ai-edit-thread-Cq3j-1Qn.js";import"./ai-error-message-glDw4Sa8.js";import"./ai-file-picker-DUcuNjpk.js";import"./ai-message-thread-BxDUJMRR.js";import"./ai-response-message-toolbar-B69gJ3XJ.js";import"./ai-thinking-indicator-BLtCYw8k.js";import"./ai-client-message-CSeq1ULZ.js";import"./ai-empty-state-DQT5ahgg.js";import"./ai-response-message-cv9TEnT9.js";import"./ai-user-message-BBZi5z4a.js";import"./ai-user-message-toolbar-_6ZBBJk_.js";import"./ai-suggestions-B7FDnOvn.js";import"./ai-voice-input-CB27-Zh3.js";import"./mock-adapter-BpgeerXX.js";function e(i){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

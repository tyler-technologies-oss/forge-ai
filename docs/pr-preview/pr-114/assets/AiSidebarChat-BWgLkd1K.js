import{j as t,M as n,T as a}from"./blocks-B64WsvSd.js";import{useMDXComponents as r}from"./index-BNExG3Vz.js";import{C as s}from"./CustomArgTypes-BecXw4S6.js";import{A as c}from"./AiSidebarChat.stories--fvuAvIY.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CoCnQeKl.js";import"./utils-BnHvt2iS.js";import"./scaffold-OFioUjFb.js";import"./class-map-BResTQ8y.js";import"./custom-element-UsVr97OX.js";import"./property-CpZynkB1.js";import"./ref-CNEf0xZH.js";import"./query-D9Yvha-e.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-CF7h-P2i.js";import"./query-assigned-elements-DTZxeBhO.js";import"./query-assigned-nodes-C3XBAQFI.js";import"./if-defined-ijNNdxnk.js";import"./ai-sidebar-CDoUsO43.js";import"./when-CI7b_ccM.js";import"./index-6ehjK4Mi.js";import"./ai-modal-CxjbusBW.js";import"./utils-DIqd7FWX.js";import"./ai-button-CQi8y2a7.js";import"./ai-icon-CQuyPM2r.js";import"./ai-gradient-container-Ci69sNtA.js";import"./ai-disclaimer-C5U5Yr49.js";import"./ai-chatbot-base-CmTLYwE7.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-CTBMNJuh.js";import"./ai-attachment-CP-q4j_v.js";import"./ai-spinner-C9JM70TX.js";import"./tooltip-BP-0jJco.js";import"./overlay-CqQDtub0.js";import"./ai-chat-header-Gi3SPamd.js";import"./ai-dropdown-menu-BMRjtL2u.js";import"./popover-33RnhOwL.js";import"./ai-dropdown-menu-item-Cqam3LOA.js";import"./ai-agent-info-D7GgoGRz.js";import"./ai-agent-selector-SJihRqph.js";import"./ai-chat-interface-M900Ksk5.js";import"./ai-prompt-CBXC1dkk.js";import"./ai-conversations-panel-CQ4q8HW8.js";import"./ai-edit-thread-mHLyy37Q.js";import"./ai-error-message-CaApnihJ.js";import"./ai-file-picker-B-5B-PIk.js";import"./ai-message-thread-DPSsCa2F.js";import"./ai-response-message-toolbar-CH0ZXCeI.js";import"./ai-thinking-indicator-C-KeGALK.js";import"./ai-client-message-DXPmp8-c.js";import"./ai-empty-state-B3Iw8Iuf.js";import"./ai-response-message-B94F1ugJ.js";import"./ai-user-message-CZr7w9X4.js";import"./ai-user-message-toolbar-C6iQTOjl.js";import"./ai-suggestions-DK2PNTgT.js";import"./ai-voice-input-DreegBwx.js";import"./mock-adapter-BpgeerXX.js";function e(i){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

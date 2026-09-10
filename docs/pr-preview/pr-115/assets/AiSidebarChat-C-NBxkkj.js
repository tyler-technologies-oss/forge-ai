import{j as t,M as n,T as a}from"./blocks-Doz6OgrD.js";import{useMDXComponents as r}from"./index-Rz9zF6f9.js";import{C as s}from"./CustomArgTypes-Bzwslfuw.js";import{A as c}from"./AiSidebarChat.stories-B1PqaXcu.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-RRnsZQGs.js";import"./utils-Cwf4fDTu.js";import"./scaffold-CqUsJtDT.js";import"./class-map-DbpK6gRv.js";import"./custom-element-UsVr97OX.js";import"./property-TwXTZb3z.js";import"./ref-D94Gb322.js";import"./query-BSUsQcO2.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-CtxBLhCa.js";import"./query-assigned-elements-CbIKkRRA.js";import"./query-assigned-nodes-Cpd6AYdi.js";import"./if-defined-JVCyC3He.js";import"./ai-sidebar-DUAe91qM.js";import"./when-CI7b_ccM.js";import"./index-DzTKXUWN.js";import"./ai-modal-Ct2nR55q.js";import"./utils-DIqd7FWX.js";import"./ai-button-BYpRW5An.js";import"./ai-icon-CXpivbd_.js";import"./ai-gradient-container-dXHKhEkY.js";import"./ai-disclaimer-DrmUYVn7.js";import"./ai-chatbot-base-DuDVO0Y3.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-5e-vvs4p.js";import"./ai-attachment-BdSrwaZe.js";import"./ai-spinner-B24YL9KZ.js";import"./tooltip-DNefRKJS.js";import"./overlay-OE7BYOon.js";import"./ai-chat-header-9jz2_nkN.js";import"./ai-dropdown-menu-BHt4BoIB.js";import"./popover-DcHJkMR2.js";import"./ai-dropdown-menu-item--DfSoXpi.js";import"./ai-agent-info-Cr9fmLmo.js";import"./ai-agent-selector-DDAAGI6D.js";import"./ai-chat-interface-D9_jsDe7.js";import"./ai-prompt-S0USwoCX.js";import"./ai-conversations-panel-BJsU2VCP.js";import"./ai-edit-thread-DntubQvC.js";import"./ai-error-message-PO7j5vW9.js";import"./ai-file-picker-iH4eKtbm.js";import"./ai-message-thread-BLV6tWto.js";import"./ai-response-message-toolbar-DZEq7cSD.js";import"./ai-thinking-indicator-CF9HmCHP.js";import"./ai-client-message-acWAAD8c.js";import"./ai-empty-state-CzfEfi2o.js";import"./ai-response-message-nwNUaBTc.js";import"./ai-user-message-CVapkouO.js";import"./ai-user-message-toolbar-oxPP8veV.js";import"./ai-suggestions-BihwA9Rh.js";import"./ai-voice-input-CWKEPF1h.js";import"./mock-adapter-BpgeerXX.js";function e(i){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

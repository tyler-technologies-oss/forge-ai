import{j as t,M as n,T as a}from"./blocks-D1umRn_8.js";import{useMDXComponents as r}from"./index-CpqIG850.js";import{C as s}from"./CustomArgTypes-NF21T0Ou.js";import{A as c}from"./AiSidebarChat.stories-C_vtR3_H.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CdSABX88.js";import"./utils-DhVEw7Vh.js";import"./scaffold-B54ZsXy3.js";import"./class-map-0lY7t7Dm.js";import"./property-DgrTWZVQ.js";import"./custom-element-UsVr97OX.js";import"./ref-DYCEYLYO.js";import"./floating-ui.dom-alButkyJ.js";import"./split-button-BQD-qdRX.js";import"./query-assigned-nodes-DNR0kJhW.js";import"./if-defined-C68C9x5H.js";import"./ai-sidebar-CyJoxdxT.js";import"./when-CI7b_ccM.js";import"./index-Dsh4wFqr.js";import"./ai-modal-CPejV7fN.js";import"./utils-BGBq21po.js";import"./ai-button-CTXeeLDY.js";import"./ai-icon-OMo42_pd.js";import"./ai-gradient-container-BTNUBIih.js";import"./ai-disclaimer-D29IiHdq.js";import"./ai-chatbot-base-DT2p4g2F.js";import"./mock-adapter-ph_xQ6k2.js";import"./markdown-CtLA8yAF.js";import"./ai-chatbot-D2wBEPZg.js";import"./ai-attachment-D2MKtZgv.js";import"./ai-spinner-CdP1Imhw.js";import"./tooltip-DTwrhp9o.js";import"./overlay-BGk7U-gf.js";import"./ai-chat-header-M1-4hwpZ.js";import"./ai-dropdown-menu-DA0PGKTx.js";import"./popover-Dx0CAzk_.js";import"./ai-dropdown-menu-item-CmyQN4xe.js";import"./ai-agent-info-D80IPuF7.js";import"./ai-agent-selector-C4tIBrvv.js";import"./ai-chat-interface-CN9DBQ0v.js";import"./ai-prompt-CfRbJAhI.js";import"./ai-conversations-panel-CLQX0tqk.js";import"./ai-edit-thread-BewnnMwm.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-C9vwJ1WH.js";import"./ai-message-thread-BOJHokpa.js";import"./ai-response-message-toolbar-CmUHvg2s.js";import"./ai-thinking-indicator-74X5AGDr.js";import"./ai-client-message-DLUICVVF.js";import"./ai-empty-state-B8SMME5H.js";import"./ai-error-message-1I7xFZZx.js";import"./ai-response-message-CkjBZD56.js";import"./ai-user-message-CKYfvMZK.js";import"./ai-user-message-toolbar-Dt3iR2u9.js";import"./ai-suggestions-BS0BiCAj.js";import"./ai-voice-input-DzNzukca.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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
`,t.jsx(s,{})]})}function mt(e={}){const{wrapper:o}={...r(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(i,{...e})}):i(e)}export{mt as default};

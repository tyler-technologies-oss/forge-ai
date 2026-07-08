import{j as t,M as n,T as a}from"./blocks-CwgGZ16k.js";import{useMDXComponents as r}from"./index-DURDhO9n.js";import{C as s}from"./CustomArgTypes--NuhW6q9.js";import{A as c}from"./AiSidebarChat.stories-Db2GRUZd.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-VWKqSQNi.js";import"./utils-MZ-Apu34.js";import"./scaffold-Dr9a7K5x.js";import"./class-map-CPHTgefc.js";import"./property-BXN96mpH.js";import"./custom-element-UsVr97OX.js";import"./ref-CI3OhpCa.js";import"./floating-ui.dom-C0FiGihr.js";import"./split-button-Ge_qwl8V.js";import"./query-assigned-nodes-B8KknTeb.js";import"./ai-sidebar-S0lwj38o.js";import"./when-CI7b_ccM.js";import"./index-Dte_B0uo.js";import"./ai-modal-kbJElPOb.js";import"./utils-BGBq21po.js";import"./ai-button-BVlm4RNM.js";import"./ai-icon-Ukjd8utV.js";import"./ai-gradient-container-CMQTMrUg.js";import"./ai-disclaimer-B67habIe.js";import"./ai-chatbot-base-Bw_PXcx_.js";import"./mock-adapter-DymPxr2h.js";import"./markdown-C0nyZhUE.js";import"./ai-chatbot-CMj3XLM-.js";import"./ai-attachment-zjUO0Lj1.js";import"./ai-spinner-DGLG24xe.js";import"./tooltip-DA63Cdhp.js";import"./overlay-BC7C1JjY.js";import"./ai-chat-header-DQWpkF5o.js";import"./ai-dropdown-menu-DTZrcYiE.js";import"./if-defined-M3QnEtWL.js";import"./popover-B0ViNzXT.js";import"./ai-dropdown-menu-item-COJrMjq6.js";import"./ai-agent-info-DFqwNahF.js";import"./ai-agent-selector-Cq6RzFGk.js";import"./ai-chat-interface-X1nNVnP1.js";import"./ai-prompt-CQcKUcGA.js";import"./ai-conversations-panel-CnqPXGQV.js";import"./ai-edit-thread-B4hpdPhK.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-UgAv-KEQ.js";import"./ai-message-thread-Cv-reTns.js";import"./ai-response-message-toolbar-Dh-Dx5wF.js";import"./ai-empty-state-D_oIu6NR.js";import"./ai-error-message-CW7WUZPe.js";import"./ai-response-message-BkJf0zQ9.js";import"./ai-thinking-indicator-Bbsbc2mn.js";import"./ai-user-message-CMNkWm2s.js";import"./ai-user-message-toolbar-DekCc_Uu.js";import"./ai-suggestions-DsMfm8Ms.js";import"./ai-voice-input-BR6Lxgpr.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

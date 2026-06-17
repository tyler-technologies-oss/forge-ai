import{j as t,M as n,T as a}from"./blocks-Cl6WhlHL.js";import{useMDXComponents as r}from"./index-CjouSDbV.js";import{C as s}from"./CustomArgTypes-DKQH6zil.js";import{A as c}from"./AiSidebarChat.stories-BwLPqDHG.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Be7Ge7du.js";import"./utils-BNzFzf0N.js";import"./scaffold-BTndlLnz.js";import"./class-map-B3WCiGZX.js";import"./property-DN75jqc7.js";import"./custom-element-UsVr97OX.js";import"./ref-DXqnPZ9j.js";import"./floating-ui.dom-C0FiGihr.js";import"./split-button-Cfk43OUb.js";import"./query-assigned-nodes-DEQxYKg1.js";import"./ai-sidebar-DYFC6W2U.js";import"./when-CI7b_ccM.js";import"./index-CVnkONKe.js";import"./ai-modal-Dcvrdt-k.js";import"./utils-BGBq21po.js";import"./ai-button-D6FR23o2.js";import"./ai-icon-9HF-e6r4.js";import"./ai-gradient-container-De4eJS9z.js";import"./ai-disclaimer-CINI31u3.js";import"./ai-chatbot-base-BI_HAXcG.js";import"./mock-adapter-ls0PbTjH.js";import"./utils-JMyE3xw1.js";import"./ai-chatbot-BGzRiyP2.js";import"./ai-attachment-JLngcMY2.js";import"./ai-spinner-DgU8aPm3.js";import"./tooltip-BPzlqv6a.js";import"./overlay-DMOHyelL.js";import"./ai-chat-header-D1SRx1Y4.js";import"./ai-dropdown-menu-MF1ceWBf.js";import"./if-defined-6rhn3-tM.js";import"./popover-Dr4zLb2N.js";import"./ai-dropdown-menu-item-Djrn-3l0.js";import"./ai-agent-info-BdPeG-vb.js";import"./ai-agent-selector-CwlKG8B8.js";import"./ai-chat-interface-N9Cb8Aq-.js";import"./ai-conversations-panel-Dr7JPRxw.js";import"./ai-edit-thread-D5L7Hmah.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-D9Rw7WbD.js";import"./ai-message-thread-CjvPdikg.js";import"./ai-response-message-toolbar-DLT0F9xD.js";import"./ai-empty-state-Dao3ioXC.js";import"./ai-error-message-CMu7IHw7.js";import"./ai-response-message-CeqAxvma.js";import"./ai-thinking-indicator-DLXizgMG.js";import"./ai-user-message-B_U4ldJk.js";import"./ai-user-message-toolbar-JqDqjN9S.js";import"./ai-prompt-DeI4x0vo.js";import"./ai-suggestions-CFJNq7uD.js";import"./ai-voice-input-DYdaH9j8.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

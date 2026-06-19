import{j as t,M as n,T as a}from"./blocks-gxzSeSaC.js";import{useMDXComponents as r}from"./index-B-SWzyer.js";import{C as s}from"./CustomArgTypes-BGnVSbjO.js";import{A as c}from"./AiSidebarChat.stories-BxKfcZe9.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C0p6_K9W.js";import"./utils-DUMfLMpS.js";import"./scaffold-Bz86-8L0.js";import"./class-map-ts1FC3P6.js";import"./property-DlUWVDfc.js";import"./custom-element-UsVr97OX.js";import"./ref-T5CMdYeh.js";import"./floating-ui.dom-C0FiGihr.js";import"./split-button-DDCPAHEf.js";import"./query-assigned-nodes-DqwrKWDo.js";import"./ai-sidebar-GF7Pvcki.js";import"./when-CI7b_ccM.js";import"./index-DSAc9xh7.js";import"./ai-modal-spit86PP.js";import"./utils-BGBq21po.js";import"./ai-button-B0KHwJ8t.js";import"./ai-icon-D-cEoQXx.js";import"./ai-gradient-container-Cc53iS-f.js";import"./ai-disclaimer-4zWThUoG.js";import"./ai-chatbot-base-DO329EuY.js";import"./mock-adapter-B6avymXj.js";import"./utils-B8dv6FBY.js";import"./ai-chatbot-DNNq9ElJ.js";import"./ai-attachment-B1q9ha9c.js";import"./ai-spinner-Byrz1yFQ.js";import"./tooltip-BJV3KeO2.js";import"./overlay-BXSlzblU.js";import"./ai-chat-header-NI_27iZx.js";import"./ai-dropdown-menu-BmHmqcl8.js";import"./if-defined-Co36sdCq.js";import"./popover-Dy15wGIg.js";import"./ai-dropdown-menu-item-DdXt8Up0.js";import"./ai-agent-info-B-5cgs_W.js";import"./ai-agent-selector-CwlvIIks.js";import"./ai-chat-interface-BU1hEaxF.js";import"./ai-prompt-DMB-4dC2.js";import"./ai-conversations-panel-lu-TLsRH.js";import"./ai-edit-thread-ISLkKlYU.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-Diy_Pug1.js";import"./ai-message-thread-BH4p0bRr.js";import"./ai-response-message-toolbar-Di3DMqBU.js";import"./ai-empty-state-Bqaimma6.js";import"./ai-error-message-CPmveb6A.js";import"./ai-response-message-Cck5zuJF.js";import"./ai-thinking-indicator-B_Rf4mx3.js";import"./ai-user-message-B-LMuank.js";import"./ai-user-message-toolbar-WTDLlvIV.js";import"./ai-suggestions-LodbwFDE.js";import"./ai-voice-input-B6v1cwk0.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

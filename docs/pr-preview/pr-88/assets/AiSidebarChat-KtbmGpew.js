import{j as t,M as n,T as a}from"./blocks-vZ2JWdOt.js";import{useMDXComponents as r}from"./index-BKKk0251.js";import{C as s}from"./CustomArgTypes-BdHWmCJs.js";import{A as c}from"./AiSidebarChat.stories-taUz2H76.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CDKdqIww.js";import"./utils-DYhFS5Sr.js";import"./scaffold-MpwmKKdj.js";import"./class-map-DPM-D8DA.js";import"./property-DOtU9LCA.js";import"./custom-element-UsVr97OX.js";import"./ref-CQk4DodF.js";import"./floating-ui.dom-C0FiGihr.js";import"./split-button-BN_KQXer.js";import"./query-assigned-nodes-C0z0ZrEu.js";import"./ai-sidebar-nNypNZW2.js";import"./when-CI7b_ccM.js";import"./index-CU5N8V6N.js";import"./ai-modal-CjW-vv9q.js";import"./utils-BGBq21po.js";import"./ai-button-CvwpPxUG.js";import"./ai-icon-BB4nsyTU.js";import"./ai-gradient-container-BZ9hPRFy.js";import"./ai-disclaimer-Covio8Ue.js";import"./ai-chatbot-base-CJXbQUCA.js";import"./mock-adapter-DymPxr2h.js";import"./markdown-C0nyZhUE.js";import"./ai-chatbot-Ce5vZiZK.js";import"./ai-attachment-DN6KAkuR.js";import"./ai-spinner-CW5nWeEI.js";import"./tooltip-CfmIgR21.js";import"./overlay-C5cozJYC.js";import"./ai-chat-header-BUpq2iT3.js";import"./ai-dropdown-menu-Co5TUI-Z.js";import"./if-defined-5WpHf2yY.js";import"./popover-BXqDDAkR.js";import"./ai-dropdown-menu-item-DuKuouT5.js";import"./ai-agent-info-CoJ07g-S.js";import"./ai-agent-selector-DEJhRlLt.js";import"./ai-chat-interface-b5tpC-Sk.js";import"./ai-prompt-ByT6OSlb.js";import"./ai-conversations-panel-DHZpmHQP.js";import"./ai-edit-thread-BNoYqQux.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-DxlI1dUF.js";import"./ai-message-thread-H1f3RmGG.js";import"./ai-response-message-toolbar-C2lhmEmn.js";import"./ai-empty-state-CnI9efuh.js";import"./ai-error-message-D4hQNuMC.js";import"./ai-response-message-CWNnT_rw.js";import"./ai-thinking-indicator-BmGRpH94.js";import"./ai-user-message-39--hC7K.js";import"./ai-user-message-toolbar-DQ2cGSj9.js";import"./ai-suggestions-Cj6WAKbP.js";import"./ai-voice-input-DGUKSHW2.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

import{j as t,M as n,T as a}from"./blocks-Du7I-w0s.js";import{useMDXComponents as r}from"./index-BUFWY6Ux.js";import{C as s}from"./CustomArgTypes-CbPQOsaA.js";import{A as c}from"./AiSidebarChat.stories-D_wzp5wJ.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C8xRadl-.js";import"./utils-qCOiSbr7.js";import"./scaffold-BWUKpRyA.js";import"./class-map-C2ENwZxT.js";import"./property-9kUXaQBy.js";import"./custom-element-UsVr97OX.js";import"./ref-B6SKxKxe.js";import"./floating-ui.dom-alButkyJ.js";import"./split-button-c3Bdxg2J.js";import"./query-assigned-nodes-BjnpLmVE.js";import"./if-defined-DXKCPRNm.js";import"./ai-sidebar-CaIobBGa.js";import"./when-CI7b_ccM.js";import"./index-Y98haTbn.js";import"./ai-modal-3PbXkgS6.js";import"./utils-BGBq21po.js";import"./ai-button-8b3CCxfC.js";import"./ai-icon-BIWppS5y.js";import"./ai-gradient-container-tSLd9ciX.js";import"./ai-disclaimer-ZZhVCcgH.js";import"./ai-chatbot-base-DJNwdcgG.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-Br3QZox9.js";import"./ai-attachment-DtK8-3YS.js";import"./ai-spinner-DP3TMXKy.js";import"./tooltip-D7h0qTcQ.js";import"./overlay-CYeebrEp.js";import"./ai-chat-header-D8idqOl8.js";import"./ai-dropdown-menu-Bnim9465.js";import"./popover-B0ngxQy5.js";import"./ai-dropdown-menu-item-CfGZhIeK.js";import"./ai-agent-info-CdNcCMcZ.js";import"./ai-agent-selector-BpHIuGI9.js";import"./ai-chat-interface-2sPT7iqe.js";import"./ai-prompt-BBYky5xt.js";import"./ai-conversations-panel-JeveY1AM.js";import"./ai-edit-thread-3ICWvAGx.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-DtVBbTyy.js";import"./ai-message-thread-D1aZb-Wu.js";import"./ai-response-message-toolbar-BpJ47sk-.js";import"./ai-thinking-indicator-CQalMk_f.js";import"./ai-client-message-B7rqZgkz.js";import"./ai-empty-state-BYZODyem.js";import"./ai-error-message-CuAZnsy-.js";import"./ai-response-message-Ce3wOpg2.js";import"./ai-user-message-wUYf9itU.js";import"./ai-user-message-toolbar-JwXVyBUV.js";import"./ai-suggestions-nUFbTr0e.js";import"./ai-voice-input-B02DIlL4.js";import"./mock-adapter-BpgeerXX.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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
`,t.jsx(s,{})]})}function ht(e={}){const{wrapper:o}={...r(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(i,{...e})}):i(e)}export{ht as default};

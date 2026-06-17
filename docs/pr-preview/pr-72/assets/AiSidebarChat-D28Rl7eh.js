import{j as t,M as n,T as a}from"./blocks-Bf5WRc1F.js";import{useMDXComponents as r}from"./index-8Ktam_Bp.js";import{C as s}from"./CustomArgTypes-cEo9LCDj.js";import{A as c}from"./AiSidebarChat.stories-D2-Sbe8D.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-VQFRW6Rd.js";import"./utils-o6RCwx9T.js";import"./scaffold-BRq21R8z.js";import"./class-map-C7CLKb0Z.js";import"./property-BSVp4iie.js";import"./custom-element-UsVr97OX.js";import"./ref-C1y6Nghs.js";import"./floating-ui.dom-C0FiGihr.js";import"./split-button-m9FA5xyF.js";import"./query-assigned-nodes-C_9eIfB3.js";import"./ai-sidebar-CXLoxfc1.js";import"./when-CI7b_ccM.js";import"./index-D33A5Gjn.js";import"./ai-modal-D0UqukY0.js";import"./utils-BGBq21po.js";import"./ai-button-BECwyo9w.js";import"./ai-icon-B0876ALQ.js";import"./ai-gradient-container-D9F8e5Z3.js";import"./ai-disclaimer-65ufTBIt.js";import"./ai-chatbot-base-DbCDwm4N.js";import"./mock-adapter-ls0PbTjH.js";import"./utils-JMyE3xw1.js";import"./ai-chatbot-CDrDK-tv.js";import"./ai-attachment-D37701Ak.js";import"./ai-spinner-Wa7GLtdp.js";import"./tooltip-DgC1t06o.js";import"./overlay-C19QuCTe.js";import"./ai-chat-header-5wT_NuXQ.js";import"./ai-dropdown-menu-ClhUKKUr.js";import"./if-defined-DrhCCvvH.js";import"./popover-SYq-Ien0.js";import"./ai-dropdown-menu-item-v9M_n_-m.js";import"./ai-agent-info-C3KzTrxS.js";import"./ai-agent-selector-DMmdzPrj.js";import"./ai-chat-interface-OsZoANP2.js";import"./ai-conversations-panel-BecIpoI-.js";import"./ai-edit-thread-vsZT6pVF.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-Cdx-CkAy.js";import"./ai-message-thread-CbfkBYXO.js";import"./ai-response-message-toolbar-Cx2XgR-G.js";import"./ai-empty-state-gwquN_5_.js";import"./ai-error-message-a9buCJYr.js";import"./ai-response-message-CNHvzkuk.js";import"./ai-thinking-indicator-BhULKvMy.js";import"./ai-user-message-6j0dfIq3.js";import"./ai-user-message-toolbar-D6HkPNy_.js";import"./ai-prompt-CjcMypcx.js";import"./ai-suggestions-l-2eZpvN.js";import"./ai-voice-input-XuHiVzKj.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

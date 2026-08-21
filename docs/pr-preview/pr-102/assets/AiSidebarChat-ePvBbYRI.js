import{j as t,M as n,T as a}from"./blocks-B6wJxB2V.js";import{useMDXComponents as r}from"./index-BxGRdYMM.js";import{C as s}from"./CustomArgTypes-BVUEm9kd.js";import{A as c}from"./AiSidebarChat.stories-COhMFqmB.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DzGSWDFA.js";import"./utils-Bi3ZKs6w.js";import"./scaffold-CcOTnag7.js";import"./class-map-BzkN506I.js";import"./property-DONkYTrK.js";import"./custom-element-UsVr97OX.js";import"./ref-DY1KcSOE.js";import"./floating-ui.dom-alButkyJ.js";import"./split-button-D6GvD5OB.js";import"./query-assigned-nodes-BSaSv6lS.js";import"./if-defined-CaSmFvGj.js";import"./ai-sidebar-CgMesmq5.js";import"./when-CI7b_ccM.js";import"./index-gHahXCrp.js";import"./ai-modal-6RjBVvP-.js";import"./utils-BGBq21po.js";import"./ai-button-Ce-Y2hh4.js";import"./ai-icon-DVk0WHXM.js";import"./ai-gradient-container-cxNksyop.js";import"./ai-disclaimer-fvDGvvDi.js";import"./ai-chatbot-base-BTuRCiE-.js";import"./mock-adapter-ph_xQ6k2.js";import"./markdown-CtLA8yAF.js";import"./ai-chatbot-CQqzCls-.js";import"./ai-attachment-CZYjA1ai.js";import"./ai-spinner-CtAfYtyO.js";import"./tooltip-BDDThVpC.js";import"./overlay-CS7Uempr.js";import"./ai-chat-header-Dh9uozE7.js";import"./ai-dropdown-menu-BXAqdwUv.js";import"./popover-C9Bi4dft.js";import"./ai-dropdown-menu-item-Bm0pdLhz.js";import"./ai-agent-info-Bx_vF7LK.js";import"./ai-agent-selector-DzbHlRcS.js";import"./ai-chat-interface-CeMOJJbH.js";import"./ai-prompt-rNlUcsFT.js";import"./ai-conversations-panel-Dyudctah.js";import"./ai-edit-thread-BVQi8pb2.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-BGRFvQwW.js";import"./ai-message-thread-Dv33MTeH.js";import"./ai-response-message-toolbar-DCAJSRVh.js";import"./ai-thinking-indicator-D0YQGWsS.js";import"./ai-client-message-GRpg-CfY.js";import"./ai-empty-state-TkayedHK.js";import"./ai-error-message-M4H9Dy_X.js";import"./ai-response-message-ButSVfxp.js";import"./ai-user-message-DsH8ZdpU.js";import"./ai-user-message-toolbar-CfNQMDaL.js";import"./ai-suggestions-Bf-U95Bd.js";import"./ai-voice-input-Bog1-nVi.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

import{j as t,M as n,T as a}from"./blocks-BPN2XerP.js";import{useMDXComponents as r}from"./index-qWatloSf.js";import{C as s}from"./CustomArgTypes-DynDPqwA.js";import{A as c}from"./AiSidebarChat.stories-CClUzuts.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BIqTUHBn.js";import"./utils-B5QSZMBA.js";import"./scaffold-pBWZYB6o.js";import"./class-map-C5G57KZt.js";import"./property-BYTngKAE.js";import"./custom-element-UsVr97OX.js";import"./ref-B1SFX6ui.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-Dlx7lykc.js";import"./query-assigned-nodes-nyNGAqF-.js";import"./if-defined-BJN7wXLk.js";import"./ai-sidebar-Bj538Ga8.js";import"./when-CI7b_ccM.js";import"./index-DWTG6Z3G.js";import"./ai-modal-DaD2bT0V.js";import"./utils-DIqd7FWX.js";import"./ai-button-BNChBjN6.js";import"./ai-icon-CGjsNOtJ.js";import"./ai-gradient-container-COfDeWLK.js";import"./ai-disclaimer-Sbtxth0z.js";import"./ai-chatbot-base-CmUhlBrJ.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-p9YiryoC.js";import"./ai-attachment-B5mP4vD_.js";import"./ai-spinner-CxZUL9JE.js";import"./tooltip-CNtDdtVK.js";import"./overlay-Bx1cJ2ye.js";import"./ai-chat-header-DrRyIywP.js";import"./ai-dropdown-menu-BGDdAF4A.js";import"./popover-BD58R4Gw.js";import"./ai-dropdown-menu-item-BD-IVR54.js";import"./ai-agent-info-DXJK3Vlg.js";import"./ai-agent-selector-DU1qua2w.js";import"./ai-chat-interface-Daj5ZbKE.js";import"./ai-prompt-Bn0bK-xm.js";import"./ai-conversations-panel-BrAlTSg4.js";import"./ai-edit-thread-DRlcZ1qW.js";import"./ai-file-picker-Dz5AUB7R.js";import"./ai-message-thread-C1gbjyVB.js";import"./ai-response-message-toolbar-Xa1T5aXR.js";import"./ai-thinking-indicator-BTcUeG_4.js";import"./ai-client-message-BNm9O1ev.js";import"./ai-empty-state-Do8Du5sc.js";import"./ai-error-message-Dkl83vj6.js";import"./ai-response-message-CNK9Dh18.js";import"./ai-user-message-B5lSNw1s.js";import"./ai-user-message-toolbar-DptxMECV.js";import"./ai-suggestions-D8pe1ZRx.js";import"./ai-voice-input-BzwNduZC.js";import"./mock-adapter-BpgeerXX.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

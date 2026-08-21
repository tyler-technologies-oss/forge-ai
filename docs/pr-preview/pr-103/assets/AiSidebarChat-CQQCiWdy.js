import{j as t,M as n,T as a}from"./blocks-DMB6wcT0.js";import{useMDXComponents as r}from"./index-CFmtyV7a.js";import{C as s}from"./CustomArgTypes-VKQbu7eq.js";import{A as c}from"./AiSidebarChat.stories-BP4LJ4P0.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B95BR7TV.js";import"./utils-Ci4bjnpZ.js";import"./scaffold-B8huloti.js";import"./class-map-YoTTNngl.js";import"./property-DEM9Xp1X.js";import"./custom-element-UsVr97OX.js";import"./ref-CNAxCoEE.js";import"./floating-ui.dom-alButkyJ.js";import"./split-button-0X4df7ku.js";import"./query-assigned-nodes-CsmquSA2.js";import"./if-defined-BAgV44cf.js";import"./ai-sidebar-CvwAK7xt.js";import"./when-CI7b_ccM.js";import"./index-BGT1bJqM.js";import"./ai-modal-Czl_Soir.js";import"./utils-BGBq21po.js";import"./ai-button-p8kHsmWi.js";import"./ai-icon-D5RjYHu0.js";import"./ai-gradient-container-DWZPzRPP.js";import"./ai-disclaimer-BDXgKw4t.js";import"./ai-chatbot-base-DekaSY-t.js";import"./agent-adapter-B7X4CC2Q.js";import"./markdown-CtLA8yAF.js";import"./ai-chatbot-d3NelGw_.js";import"./ai-attachment-CDLl-fiI.js";import"./ai-spinner-BmgTUHB2.js";import"./tooltip-BX3vGDqJ.js";import"./overlay-Cz7ZG8C-.js";import"./ai-chat-header-DoUrn0QO.js";import"./ai-dropdown-menu-CB2d3aOD.js";import"./popover-p1nUEqxy.js";import"./ai-dropdown-menu-item-CHFzi37y.js";import"./ai-agent-info-CxbDxJrA.js";import"./ai-agent-selector-Cz-oD947.js";import"./ai-chat-interface-C0yYb7R6.js";import"./ai-prompt-Qbuf4Sia.js";import"./ai-conversations-panel-AJWEgxZ3.js";import"./ai-edit-thread-azZTh9dT.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-DRZtFjou.js";import"./ai-message-thread-eMqCbYjH.js";import"./ai-response-message-toolbar-Bho6QZRK.js";import"./ai-thinking-indicator-TW6CrVCz.js";import"./ai-client-message-D_-SwLtL.js";import"./ai-empty-state-BI0a9qNA.js";import"./ai-error-message-CYOknj2H.js";import"./ai-response-message-fRj5E75U.js";import"./ai-user-message-CyQ8QPTy.js";import"./ai-user-message-toolbar-CMw2kkLe.js";import"./ai-suggestions-pEDbYj9g.js";import"./ai-voice-input-DjW1j1o-.js";import"./mock-adapter-BgvlmV5I.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

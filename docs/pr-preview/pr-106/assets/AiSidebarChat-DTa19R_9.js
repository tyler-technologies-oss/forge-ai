import{j as t,M as n,T as a}from"./blocks-BpClKaU0.js";import{useMDXComponents as r}from"./index-CDRGIbzR.js";import{C as s}from"./CustomArgTypes-C_Trkh1G.js";import{A as c}from"./AiSidebarChat.stories-DQ7Cdlpe.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B3wVpGbw.js";import"./utils-qCOiSbr7.js";import"./scaffold-Bq9kM0xl.js";import"./class-map-Ct52J7it.js";import"./property-CiFKxx_M.js";import"./custom-element-UsVr97OX.js";import"./ref-Cxpt2iWo.js";import"./floating-ui.dom-alButkyJ.js";import"./split-button-BPIRGG5g.js";import"./query-assigned-nodes-BHJ3KLGX.js";import"./if-defined-AzmMqBG3.js";import"./ai-sidebar-aQjrT6yS.js";import"./when-CI7b_ccM.js";import"./index-CujbKnHy.js";import"./ai-modal-CpLT7w5H.js";import"./utils-BGBq21po.js";import"./ai-button-VHBfxQXV.js";import"./ai-icon-CZqQybJb.js";import"./ai-gradient-container-Bc5sG72k.js";import"./ai-disclaimer-DCXZfUi5.js";import"./ai-chatbot-base-L97n06IJ.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-yessJll3.js";import"./ai-attachment-C6CTGAN9.js";import"./ai-spinner-CM-LLkvm.js";import"./tooltip-B2N7lJ3N.js";import"./overlay-2dUuaf8E.js";import"./ai-chat-header-D1b5yB7H.js";import"./ai-dropdown-menu-8dlhhS5S.js";import"./popover-l21m8cNx.js";import"./ai-dropdown-menu-item-D0ZKZXpx.js";import"./ai-agent-info-BjKN1cQy.js";import"./ai-agent-selector-Ch_YgEp8.js";import"./ai-chat-interface-CrtYVEDZ.js";import"./ai-prompt-Dj5m4Dqa.js";import"./ai-conversations-panel-DMB4YZmD.js";import"./ai-edit-thread-DU08xpTF.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-C7lJAySu.js";import"./ai-message-thread-tnoN-1yu.js";import"./ai-response-message-toolbar-GtjY-9nh.js";import"./ai-thinking-indicator--oRtY9nz.js";import"./ai-client-message-C_YNYVpK.js";import"./ai-empty-state-C63x5xcj.js";import"./ai-error-message-CGA3URf4.js";import"./ai-response-message-DXjul9by.js";import"./ai-user-message-CBDGs2aG.js";import"./ai-user-message-toolbar-T9YpFL1O.js";import"./ai-suggestions-D5uu2bV7.js";import"./ai-voice-input-DId5l-v-.js";import"./mock-adapter-BpgeerXX.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

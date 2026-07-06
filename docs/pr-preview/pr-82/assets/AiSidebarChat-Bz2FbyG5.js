import{j as t,M as n,T as a}from"./blocks-CjxIvzdN.js";import{useMDXComponents as r}from"./index-DRgurw7P.js";import{C as s}from"./CustomArgTypes-DMauqLeK.js";import{A as c}from"./AiSidebarChat.stories-Bb1tOHa_.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CQ2qw32K.js";import"./utils-B_iZMiSg.js";import"./scaffold-DQM_OT-g.js";import"./class-map-BbKGnC91.js";import"./property-haODigQr.js";import"./custom-element-UsVr97OX.js";import"./ref-BClTVL7n.js";import"./floating-ui.dom-C0FiGihr.js";import"./split-button-Bi1G3pX5.js";import"./query-assigned-nodes-D5j0sxm-.js";import"./ai-sidebar-DEYc1__U.js";import"./when-CI7b_ccM.js";import"./index-Dnqr8rGy.js";import"./ai-modal-CsK-23z5.js";import"./utils-BGBq21po.js";import"./ai-button-C8R1d-PO.js";import"./ai-icon-BXxakMpK.js";import"./ai-gradient-container-DGIpthj4.js";import"./ai-disclaimer-BONDfdgn.js";import"./ai-chatbot-base-MVR5J7gY.js";import"./mock-adapter-B6avymXj.js";import"./utils-B8dv6FBY.js";import"./ai-chatbot-DnglbiKm.js";import"./ai-attachment-qAvH5FEM.js";import"./ai-spinner-moSLHR9D.js";import"./tooltip-CoKWyDKV.js";import"./overlay-KVXL0qko.js";import"./ai-chat-header-Cb2NQQ56.js";import"./ai-dropdown-menu-BfWRFJ52.js";import"./if-defined-DDxRUNFM.js";import"./popover-D-LfJSBr.js";import"./ai-dropdown-menu-item-CTo1kxD_.js";import"./ai-agent-info-DxY-YkE9.js";import"./ai-agent-selector-mvl2qIhN.js";import"./ai-chat-interface-DlI-C02X.js";import"./ai-prompt-DlDYyC79.js";import"./ai-conversations-panel-BEK2jRie.js";import"./ai-edit-thread-CDyz8QBZ.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-BxtStDq-.js";import"./ai-message-thread-4PusDhAN.js";import"./ai-response-message-toolbar-qklYe5sY.js";import"./ai-empty-state-Dj19a7Br.js";import"./ai-error-message-CJXVIt6u.js";import"./ai-response-message-BKbdbfAD.js";import"./ai-thinking-indicator-A88BJTxd.js";import"./ai-user-message-UbpGApWz.js";import"./ai-user-message-toolbar-Z4njvlX_.js";import"./ai-suggestions-DVfpA7k8.js";import"./ai-voice-input-BKZxNvy0.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

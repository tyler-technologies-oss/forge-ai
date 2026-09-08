import{j as t,M as n,T as a}from"./blocks-D8KTkqIP.js";import{useMDXComponents as r}from"./index-CqsYgqXQ.js";import{C as s}from"./CustomArgTypes-CLw6tS8a.js";import{A as c}from"./AiSidebarChat.stories-jsSjRTp8.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DzOO7Pi6.js";import"./utils-DGQSSHb4.js";import"./scaffold-BFeEwja5.js";import"./class-map-C1ki5p3i.js";import"./custom-element-UsVr97OX.js";import"./property-B7i_dM0y.js";import"./ref-DFO6yA40.js";import"./query-D3qYWCIp.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-DX27xctp.js";import"./query-assigned-elements-BPEOvI3I.js";import"./query-assigned-nodes-Cybk9whU.js";import"./if-defined-CBHIyS4_.js";import"./ai-sidebar-B4fvhFjG.js";import"./when-CI7b_ccM.js";import"./index-Sz5QyBDB.js";import"./ai-modal-Dt4RNE_L.js";import"./utils-DIqd7FWX.js";import"./ai-button-BOI5cHcP.js";import"./ai-icon-D3nH5-g7.js";import"./ai-gradient-container-C1aS9Msb.js";import"./ai-disclaimer-CPqOYvuY.js";import"./ai-chatbot-base-Bj76utgI.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-B_6Dciur.js";import"./ai-attachment-DhfEh9vR.js";import"./ai-spinner-OFmxl6MY.js";import"./tooltip-B5-kG09y.js";import"./overlay-Btc5Bzuk.js";import"./ai-chat-header-CkpYagvK.js";import"./ai-dropdown-menu-CMfV3dGT.js";import"./popover-TF5XTVw4.js";import"./ai-dropdown-menu-item-Ck8qx78-.js";import"./ai-agent-info-CZwI_grI.js";import"./ai-agent-selector-Cr28YpU4.js";import"./ai-chat-interface-BmtsvPqq.js";import"./ai-prompt-DfkZdNdM.js";import"./ai-conversations-panel-9ty9gGkh.js";import"./ai-edit-thread-CHoAsHav.js";import"./ai-error-message-BWzZTdoV.js";import"./ai-file-picker-B6IR9JGM.js";import"./ai-message-thread-CDkDnwSs.js";import"./ai-response-message-toolbar-CoJzoUyH.js";import"./ai-thinking-indicator-Ce_odGfP.js";import"./ai-client-message-DF-phsJx.js";import"./ai-empty-state-sB7BRu9c.js";import"./ai-response-message-B93Dybcs.js";import"./ai-user-message-CbTNK-xq.js";import"./ai-user-message-toolbar-CCFzG73_.js";import"./ai-suggestions-CKXcDizi.js";import"./ai-voice-input-DD-OnaaX.js";import"./mock-adapter-BpgeerXX.js";function e(i){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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
`,t.jsx(s,{})]})}function xt(i={}){const{wrapper:o}={...r(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(e,{...i})}):e(i)}export{xt as default};

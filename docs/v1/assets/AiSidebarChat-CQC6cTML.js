import{j as t,M as n,T as a}from"./blocks-vOiI5GA6.js";import{useMDXComponents as r}from"./index-Bm15BpDG.js";import{C as s}from"./CustomArgTypes-Brwl6deo.js";import{A as c}from"./AiSidebarChat.stories-DwOT60Z9.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-ydZZx2Al.js";import"./utils-C_gyOGXX.js";import"./scaffold-BCVYTXGQ.js";import"./class-map-v9TTytzC.js";import"./custom-element-UsVr97OX.js";import"./property-CSCZ_azm.js";import"./ref-YF_tRavm.js";import"./query-Bxqq8xGT.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-C2yVkzNB.js";import"./query-assigned-elements-iiiwlt0r.js";import"./query-assigned-nodes-xBx2YEAg.js";import"./if-defined-OmlLV3ve.js";import"./ai-sidebar-IJv4l5-0.js";import"./when-CI7b_ccM.js";import"./index-xFZOhymt.js";import"./ai-modal-ds6UJU6W.js";import"./utils-DIqd7FWX.js";import"./ai-button-C5EWE0XU.js";import"./ai-icon-DPSOXxXF.js";import"./ai-gradient-container-Dah6ZNA0.js";import"./ai-disclaimer-DK00lBXn.js";import"./ai-chatbot-base-BY6V0tFS.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-DiCBRomZ.js";import"./ai-attachment-CP4Q3fa9.js";import"./ai-spinner-Bevdml1v.js";import"./tooltip-0d9wS-QW.js";import"./overlay-ByZpy-Nk.js";import"./ai-chat-header-odoyr2J1.js";import"./ai-dropdown-menu-2a6xNYJn.js";import"./popover-D4KxKRm1.js";import"./ai-dropdown-menu-item-BPxqBaVh.js";import"./ai-agent-info-BZrQcRnK.js";import"./ai-agent-selector-CNrFGXDa.js";import"./ai-chat-interface-D3gGXRRG.js";import"./ai-prompt-B5Nr2fJ8.js";import"./ai-conversations-panel-DQV4-Ah-.js";import"./ai-edit-thread-CiH8ywgS.js";import"./ai-error-message-DYjKnNgX.js";import"./ai-file-picker-CzEcjVmD.js";import"./ai-message-thread-CQmsh8eq.js";import"./ai-response-message-toolbar-Dvi6NYlA.js";import"./ai-thinking-indicator-Dc5pQIhW.js";import"./ai-client-message-CXivP6aZ.js";import"./ai-empty-state-DRVkH9PO.js";import"./ai-response-message-BbLnjJEg.js";import"./ai-user-message-DxlxYSFf.js";import"./ai-user-message-toolbar-Cz7kBhbU.js";import"./ai-suggestions-BPJyYUul.js";import"./ai-voice-input-CcTbpLg5.js";import"./mock-adapter-BpgeerXX.js";function e(i){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

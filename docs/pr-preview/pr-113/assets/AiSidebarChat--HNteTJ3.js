import{j as t,M as n,T as a}from"./blocks-Banip6Ur.js";import{useMDXComponents as r}from"./index-DUol0OyN.js";import{C as s}from"./CustomArgTypes-CBs8KwsT.js";import{A as c}from"./AiSidebarChat.stories-B6Pdwdtf.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B1WUWRSJ.js";import"./utils-BTrLaHWD.js";import"./scaffold-vdqltp5E.js";import"./class-map-DuzfYfaF.js";import"./property-DNkJX02r.js";import"./custom-element-UsVr97OX.js";import"./ref-C43NmTUj.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-ZpVkAZ59.js";import"./query-assigned-nodes-BOE2ErRe.js";import"./if-defined-C9FRuCWh.js";import"./ai-sidebar-Jg88kdVe.js";import"./when-CI7b_ccM.js";import"./index-B_EwQ8UT.js";import"./ai-modal-D3UEuwfl.js";import"./utils-DIqd7FWX.js";import"./ai-button-Czymg-mo.js";import"./ai-icon-C6MZnaUX.js";import"./ai-gradient-container-DvsuVcyv.js";import"./ai-disclaimer-DShZq6HZ.js";import"./ai-chatbot-base-CHsxiYsU.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-B8VZYApt.js";import"./ai-attachment-FDsV0mBF.js";import"./ai-spinner-DDFyu-o6.js";import"./tooltip-CjqeOwnF.js";import"./overlay-B0U85LQs.js";import"./ai-chat-header-AlN1Hxrb.js";import"./ai-dropdown-menu-luqwE60M.js";import"./popover-BOwcGf3X.js";import"./ai-dropdown-menu-item-BRhjlG_m.js";import"./ai-agent-info-CPepvjh6.js";import"./ai-agent-selector-pZHZl5sW.js";import"./ai-chat-interface-BA8q9-9W.js";import"./ai-prompt-CK09EHsD.js";import"./ai-conversations-panel-DU5QDgRD.js";import"./ai-edit-thread-DIrGLgxt.js";import"./ai-file-picker-eYva1uXM.js";import"./ai-message-thread-C6m2O-bx.js";import"./ai-response-message-toolbar-HGQoAfIu.js";import"./ai-thinking-indicator-DLtROBbi.js";import"./ai-client-message-xIHcpew7.js";import"./ai-empty-state-BmCLpQlh.js";import"./ai-error-message-CBHymFhb.js";import"./ai-response-message-R1rqj-G7.js";import"./ai-user-message-HqYyUSH-.js";import"./ai-user-message-toolbar-CN5V6C0Z.js";import"./ai-suggestions-Btq1JVLO.js";import"./ai-voice-input-BChv1d3M.js";import"./mock-adapter-BpgeerXX.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

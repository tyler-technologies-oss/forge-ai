import{j as e,M as o,T as s}from"./blocks-Bv8tAifz.js";import{useMDXComponents as n}from"./index-BTxFUl8D.js";import{C as a}from"./CustomArgTypes-Bm3PdE7h.js";import{A as d}from"./AiSidebarChat.stories-CnXLXfPa.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CPTie-W7.js";import"./utils-bJnmGhiF.js";import"./scaffold-DbLuFBa0.js";import"./class-map-DOB-jRhc.js";import"./custom-element-UsVr97OX.js";import"./property-D-1HWsM9.js";import"./ref-DbexwzlC.js";import"./query-CaWJOPrJ.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-BGizz6mu.js";import"./query-assigned-elements-K_pcg0US.js";import"./query-assigned-nodes-tqgoKn5L.js";import"./context-consumer-CIN_xSLl.js";import"./if-defined-BTZdaAym.js";import"./context-provider-NnzmXA_k.js";import"./ai-sidebar-gZtm0Thv.js";import"./when-CI7b_ccM.js";import"./index-DNTNKvYj.js";import"./ai-modal-3mt_Thbl.js";import"./utils-DIqd7FWX.js";import"./ai-button-HIrjNzOS.js";import"./ai-icon-D2VrW57G.js";import"./ai-gradient-container-B2NzgO2b.js";import"./ai-disclaimer-WkTpTLF4.js";import"./ai-chatbot-base-BFAfOC_9.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-B4bbHXKC.js";import"./ai-chatbot-DYCwulmE.js";import"./ai-attachment-bJWFSn4t.js";import"./ai-spinner-D1u3FWIQ.js";import"./tooltip-CpxUJQih.js";import"./overlay-CkKV5FeF.js";import"./ai-chat-header-xZ8IIZCY.js";import"./ai-dropdown-menu-d3PK_zLX.js";import"./popover-D2NPUIac.js";import"./ai-dropdown-menu-item-DnZqfK33.js";import"./ai-agent-info-DK1x6GxF.js";import"./ai-agent-selector-Cd9FqDKP.js";import"./ai-chat-interface-9kcgUkRV.js";import"./ai-prompt-BtLqI1PI.js";import"./ai-conversations-panel-CsKI9GWj.js";import"./ai-edit-thread-BubYC1lh.js";import"./ai-error-message-B5u83iEi.js";import"./ai-file-picker-Qj8kcY4g.js";import"./ai-message-thread-Dlvnz7IW.js";import"./ai-response-message-toolbar-BKn5kDf3.js";import"./ai-artifact-card-Dva5br2Z.js";import"./ai-thinking-indicator-TGm8KM5x.js";import"./ai-client-message-hMoHGeXO.js";import"./ai-empty-state-DHWp9Ruj.js";import"./ai-response-message-CDpehDQI.js";import"./ai-user-message-Df6gmbQi.js";import"./ai-user-message-toolbar-HjjiW1Mc.js";import"./ai-suggestions-VaqSGb7N.js";import"./ai-voice-input-CoiRvehQ.js";import"./mock-adapter-BpXd5o7R.js";function r(t){const i={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
`,e.jsx(s,{children:"AI Sidebar Chat"}),`
`,e.jsxs(i.p,{children:["The AI Sidebar Chat component is a form factor component that positions a slotted chatbot in a sidebar or fullscreen modal. It manages positioning and expand/collapse state while delegating all chat functionality to the slotted ",e.jsx(i.code,{children:"ai-chatbot"})," component. When expanded, the chat is displayed in a fullscreen modal. When collapsed, it's displayed in a sidebar."]}),`
`,e.jsx(i.h2,{id:"features",children:"Features"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Composition-based"}),": Accepts slotted chatbot component for maximum flexibility"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Built-in event handling"}),": Manages open/close events and expand/collapse interactions"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Dual display modes"}),": Sidebar for normal view, fullscreen modal when expanded"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Direct chatbot access"}),": Exposes slotted chatbot via ",e.jsx(i.code,{children:"chatbot"})," property for programmatic control"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Event bubbling"}),": All chatbot events bubble through unchanged"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Resizable sidebar"}),": Width is retained when switching between sidebar and modal"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Width persistence"}),": Remembers the resized width across page loads"]}),`
`]}),`
`,e.jsx(i.h2,{id:"when-to-use",children:"When to Use"}),`
`,e.jsx(i.p,{children:"Use the AI Sidebar Chat component when you want:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"A sidebar container for your chatbot that can expand to fullscreen"}),`
`,e.jsx(i.li,{children:"Standard sidebar positioning without custom logic"}),`
`,e.jsx(i.li,{children:"Built-in modal transition for expanded view"}),`
`,e.jsx(i.li,{children:"Direct control over the chatbot configuration"}),`
`]}),`
`,e.jsx(i.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<forge-ai-sidebar-chat>
  <forge-ai-chatbot .adapter="\\\${adapter}" file-upload="on"> </forge-ai-chatbot>
</forge-ai-sidebar-chat>
`})}),`
`,e.jsx(i.h3,{id:"programmatic-control",children:"Programmatic Control"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-javascript",children:`const sidebarChat = document.querySelector('forge-ai-sidebar-chat');

// Control form factor
sidebarChat.show();
sidebarChat.close();
sidebarChat.expand(); // Switch to fullscreen modal
sidebarChat.collapse(); // Return to sidebar

// Access slotted chatbot
const chatbot = sidebarChat.chatbot;
chatbot.sendMessage('Hello!');
`})}),`
`,e.jsx(i.h3,{id:"resizing-and-width-persistence",children:"Resizing and Width Persistence"}),`
`,e.jsxs(i.p,{children:["The sidebar width is retained when expanding to the modal and collapsing back, and remembered across page reloads. Each tab keeps its own width via ",e.jsx(i.code,{children:"sessionStorage"}),"; new tabs start at the most recently used width on the origin via ",e.jsx(i.code,{children:"localStorage"}),". See the Sidebar primitive docs for details."]}),`
`,e.jsxs(i.p,{children:["Listen for ",e.jsx(i.code,{children:"forge-ai-sidebar-chat-resize"})," to react to width changes. ",e.jsx(i.code,{children:"event.detail.width"})," contains the new width in pixels."]}),`
`,e.jsx(i.h2,{id:"api",children:"API"}),`
`,e.jsx(a,{}),`
`,e.jsx(i.h3,{id:"events",children:"Events"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"forge-ai-sidebar-chat-open"}),": Fired when the sidebar chat is opened"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"forge-ai-sidebar-chat-close"}),": Fired when the sidebar chat is closed"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"forge-ai-sidebar-chat-expand"}),": Fired when the sidebar chat is expanded to modal"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"forge-ai-sidebar-chat-collapse"}),": Fired when the sidebar chat is collapsed from modal"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"forge-ai-sidebar-chat-resize"}),": Fired when the sidebar width is resized"]}),`
`]})]})}function ge(t={}){const{wrapper:i}={...n(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(r,{...t})}):r(t)}export{ge as default};

import{j as e,M as o,T as s}from"./blocks-ojii-_lo.js";import{useMDXComponents as n}from"./index-Bfb6d8hh.js";import{C as a}from"./CustomArgTypes-wfAu9Lyy.js";import{A as d}from"./AiSidebarChat.stories-DVNDawlh.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-ItagAsOR.js";import"./utils-ByXa_qZf.js";import"./scaffold-2M2a2KxW.js";import"./class-map-CFOYWXuZ.js";import"./custom-element-UsVr97OX.js";import"./property-DoW79XPx.js";import"./ref-ISg2WD6W.js";import"./query-C3XFLit8.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-BW7II5QS.js";import"./query-assigned-elements-Birexkvf.js";import"./query-assigned-nodes-C4vh6K1H.js";import"./if-defined-B9hzWmaj.js";import"./ai-sidebar-CPmhxVku.js";import"./when-CI7b_ccM.js";import"./index-8ohv8q8A.js";import"./ai-modal-CqsBn5nW.js";import"./utils-DIqd7FWX.js";import"./ai-button-gXqgo2BD.js";import"./ai-icon-UK4Ln1Ny.js";import"./ai-gradient-container-BzAYSwFb.js";import"./ai-disclaimer-DSXTbWvR.js";import"./ai-chatbot-base-DGSO8qu-.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-B4bbHXKC.js";import"./ai-chatbot-B5sfNF0I.js";import"./ai-attachment-B8Una7gz.js";import"./ai-spinner-CoqbZHCm.js";import"./tooltip-CEU2iGJI.js";import"./overlay-BGKISNDN.js";import"./ai-chat-header-bK-WD6lj.js";import"./ai-dropdown-menu-CbZP_0eR.js";import"./popover-EZK23l_N.js";import"./ai-dropdown-menu-item-BKcmThY8.js";import"./ai-agent-info-DtNYt8-i.js";import"./ai-agent-selector-eBRgzxFL.js";import"./ai-chat-interface-BKtM5Phe.js";import"./ai-prompt-B-zxtJMN.js";import"./ai-conversations-panel-CEOPa-jB.js";import"./ai-edit-thread-Cz15SFmT.js";import"./ai-error-message-BudgouXl.js";import"./ai-file-picker-B0wzRPbj.js";import"./ai-message-thread-CRwMDymH.js";import"./ai-response-message-toolbar-DE6Jh1JJ.js";import"./ai-thinking-indicator-CH6kgfat.js";import"./ai-client-message-D71NE4AB.js";import"./ai-empty-state-CyvsZ3vY.js";import"./ai-response-message-BVyr9u7O.js";import"./ai-user-message-kMiV_1Yq.js";import"./ai-user-message-toolbar-BE8nmnE1.js";import"./ai-suggestions-CCiQXws-.js";import"./ai-voice-input-B49jwCs8.js";import"./mock-adapter-D0dkxTL5.js";function r(t){const i={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`]})]})}function xe(t={}){const{wrapper:i}={...n(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(r,{...t})}):r(t)}export{xe as default};

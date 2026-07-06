import{j as t,M as n,T as a}from"./blocks-CGehP8Il.js";import{useMDXComponents as r}from"./index-CuI6sAYL.js";import{C as s}from"./CustomArgTypes-B9RwTl1c.js";import{A as c}from"./AiSidebarChat.stories-CxrKQAS3.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DUFfrjrK.js";import"./utils-C9ohEeal.js";import"./scaffold-LOM6ekoX.js";import"./class-map-DJgUTaPc.js";import"./property-C6C7l_y-.js";import"./custom-element-UsVr97OX.js";import"./ref-BvXFy9vZ.js";import"./floating-ui.dom-C0FiGihr.js";import"./split-button-Bz4GmGbS.js";import"./query-assigned-nodes-BVtiPIzm.js";import"./ai-sidebar-_eCCgOp7.js";import"./when-CI7b_ccM.js";import"./index-nk3hrPdg.js";import"./ai-modal-DBpvCLlB.js";import"./utils-BGBq21po.js";import"./ai-button-Bn6t3APt.js";import"./ai-icon-DcVrpovl.js";import"./ai-gradient-container-B6kbIOKS.js";import"./ai-disclaimer-BFWHAk_w.js";import"./ai-chatbot-base-B2e_W2Kk.js";import"./mock-adapter-B6avymXj.js";import"./utils-B8dv6FBY.js";import"./ai-chatbot-C7xZMLgH.js";import"./ai-attachment-nnPhHzmC.js";import"./ai-spinner-6nSnR2zo.js";import"./tooltip-8ZDL6Cpo.js";import"./overlay-5-gUrL4h.js";import"./ai-chat-header-pJhkmzQ6.js";import"./ai-dropdown-menu-ByyWVAcK.js";import"./if-defined-C9qR8_-p.js";import"./popover-BaKxfJmP.js";import"./ai-dropdown-menu-item-BzjovMV8.js";import"./ai-agent-info-BXUzUngY.js";import"./ai-agent-selector-C2fDUczY.js";import"./ai-chat-interface-CU1tuMvH.js";import"./ai-prompt-CRnWyrZY.js";import"./ai-conversations-panel-D4pGn_zR.js";import"./ai-edit-thread-Bl6tHuPu.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-D7wtQ_-O.js";import"./ai-message-thread-Tj2y7BIc.js";import"./ai-response-message-toolbar-ChrB5Zop.js";import"./ai-empty-state-CnqBBBFi.js";import"./ai-error-message-sRDtkwSw.js";import"./ai-response-message-DnwOHJ-5.js";import"./ai-thinking-indicator-vj0LcnHp.js";import"./ai-user-message-BwlfVcrU.js";import"./ai-user-message-toolbar-BkXIwbTQ.js";import"./ai-suggestions-PCsDY40N.js";import"./ai-voice-input-DagC_woI.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

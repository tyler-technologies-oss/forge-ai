import{j as t,M as n,T as a}from"./blocks-DuTX0-lK.js";import{useMDXComponents as r}from"./index-nVoe6Izh.js";import{C as s}from"./CustomArgTypes-CiER8A_a.js";import{A as c}from"./AiSidebarChat.stories-D_X7mQwp.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6rRnA89.js";import"./utils-CWyMmwcP.js";import"./scaffold-D03b_Ued.js";import"./class-map-Cq6KVYol.js";import"./property-u0HkMdtU.js";import"./custom-element-UsVr97OX.js";import"./ref-tORGw-Ss.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-D8NWOrUa.js";import"./query-assigned-nodes-L6hVyJli.js";import"./if-defined-D31ZPl1S.js";import"./ai-sidebar-BlRNBVtt.js";import"./when-CI7b_ccM.js";import"./index-CBQDF71S.js";import"./ai-modal-CAhb_t9q.js";import"./utils-DIqd7FWX.js";import"./ai-button-DDHjCWHI.js";import"./ai-icon-D59vn4pT.js";import"./ai-gradient-container-Sxj_OXi8.js";import"./ai-disclaimer-BEcy49yU.js";import"./ai-chatbot-base-CY7poXRp.js";import"./mock-adapter-ph_xQ6k2.js";import"./markdown-CtLA8yAF.js";import"./ai-chatbot-D5OdTZRy.js";import"./ai-attachment-CcQ_qDsf.js";import"./ai-spinner-DVkqI5Sl.js";import"./tooltip-DcaupkZl.js";import"./overlay-Cm2r6Ovu.js";import"./ai-chat-header-BFA7YKH3.js";import"./ai-dropdown-menu-CYJmSTUq.js";import"./popover-DJsjxF7q.js";import"./ai-dropdown-menu-item-BWX_Fgkg.js";import"./ai-agent-info-CkNC1Qk6.js";import"./ai-agent-selector--dWSlByE.js";import"./ai-chat-interface-B6Cw_qdA.js";import"./ai-prompt-6XKn3xq7.js";import"./ai-conversations-panel-C5TGe6_4.js";import"./ai-edit-thread-DV5ZPCpA.js";import"./ai-file-picker-BWM-C2tF.js";import"./ai-message-thread-DSP5wiOB.js";import"./ai-response-message-toolbar-BxQDkOCc.js";import"./ai-thinking-indicator-B22_aYtA.js";import"./ai-empty-state-BHB6aKVo.js";import"./ai-error-message-Rdu08WEf.js";import"./ai-response-message-D2BVa82y.js";import"./ai-user-message-Dw5ml1IN.js";import"./ai-user-message-toolbar-DP71GjrV.js";import"./ai-suggestions-DhxOAVbp.js";import"./ai-voice-input-CwGnZR59.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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
`,t.jsx(s,{})]})}function dt(e={}){const{wrapper:o}={...r(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(i,{...e})}):i(e)}export{dt as default};

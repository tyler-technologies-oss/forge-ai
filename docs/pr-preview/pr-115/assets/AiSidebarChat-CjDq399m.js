import{j as t,M as n,T as a}from"./blocks-D4m7i3Vt.js";import{useMDXComponents as r}from"./index-h6hUuwdM.js";import{C as s}from"./CustomArgTypes-hmDCyK-1.js";import{A as c}from"./AiSidebarChat.stories-Cm03csed.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CC38sHuQ.js";import"./utils-BcgFoDyT.js";import"./scaffold-1y7au3aX.js";import"./class-map-dFqg7ILU.js";import"./custom-element-UsVr97OX.js";import"./property-CYtFR-Tn.js";import"./ref-h8YTGUGe.js";import"./state-CnG7cYas.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-YIuDV2Ll.js";import"./query-assigned-elements-XjR-Yu19.js";import"./query-assigned-nodes-BUXdsYMb.js";import"./query-B0KKcmmn.js";import"./if-defined-k-hSPs20.js";import"./ai-sidebar-Bsg73gvs.js";import"./when-CI7b_ccM.js";import"./index-DsWjtLbN.js";import"./ai-modal-CsQy7b0m.js";import"./utils-DIqd7FWX.js";import"./ai-button-DmX-jJUc.js";import"./ai-icon-EQXWw8G1.js";import"./ai-gradient-container-BJhhfu5k.js";import"./ai-disclaimer-BmRMALzB.js";import"./ai-chatbot-base-WbuDHBO1.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-Csyzdayn.js";import"./ai-attachment-JDV23Wj3.js";import"./ai-spinner-C1ItfrNO.js";import"./tooltip-D9a3SvkP.js";import"./overlay-Dwi1ioGQ.js";import"./ai-chat-header-DBHweE0P.js";import"./ai-dropdown-menu-CAg1Bdcf.js";import"./popover-D7UWm7d1.js";import"./ai-dropdown-menu-item-DY5HPqGF.js";import"./ai-agent-info-Cx1vSmVV.js";import"./ai-agent-selector-S9i1qna-.js";import"./ai-chat-interface-BaUBgpU1.js";import"./ai-prompt-B0uzDWS5.js";import"./ai-conversations-panel-Di3FCERf.js";import"./ai-edit-thread-B41dHnkE.js";import"./ai-error-message-C1RVDkeJ.js";import"./ai-file-picker-20IMPBne.js";import"./ai-message-thread-DSpCWi-_.js";import"./ai-response-message-toolbar-Db-dDD1_.js";import"./ai-thinking-indicator-BfyjUpQi.js";import"./ai-client-message-CSj-tvvR.js";import"./ai-empty-state-CVUQdeKk.js";import"./ai-response-message-acVRt8rK.js";import"./ai-user-message-B4IdtMeb.js";import"./ai-user-message-toolbar-3LuQZHzm.js";import"./ai-suggestions-Dh8xup-S.js";import"./ai-voice-input-DsyTJ5BL.js";import"./mock-adapter-BpgeerXX.js";function e(i){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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
`,t.jsx(s,{})]})}function bt(i={}){const{wrapper:o}={...r(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(e,{...i})}):e(i)}export{bt as default};

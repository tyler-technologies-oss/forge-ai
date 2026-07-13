import{j as t,M as n,T as a}from"./blocks-DyxQ5h-6.js";import{useMDXComponents as r}from"./index-Dpp0QbRa.js";import{C as s}from"./CustomArgTypes-BFn1GFq2.js";import{A as c}from"./AiSidebarChat.stories-ByiLlczF.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Zcg0BVm6.js";import"./utils-MZ-Apu34.js";import"./scaffold-U0d4Qd0C.js";import"./class-map-DiAfL0Hh.js";import"./property-BwdZQfVj.js";import"./custom-element-UsVr97OX.js";import"./ref-C44v86zn.js";import"./floating-ui.dom-C0FiGihr.js";import"./split-button-3yg9u6t_.js";import"./query-assigned-nodes-38n7MnEB.js";import"./ai-sidebar-1zWvepSl.js";import"./when-CI7b_ccM.js";import"./index-BJ0Z8rDb.js";import"./ai-modal-De63d5qd.js";import"./utils-BGBq21po.js";import"./ai-button-B13zD61P.js";import"./ai-icon-h0OKGan7.js";import"./ai-gradient-container-wJLAmrRD.js";import"./ai-disclaimer-DCQ3CyxS.js";import"./ai-chatbot-base-CW9EDohY.js";import"./mock-adapter-DymPxr2h.js";import"./markdown-C0nyZhUE.js";import"./ai-chatbot-_1tXP1Ou.js";import"./ai-attachment-DLm2hDpi.js";import"./ai-spinner-BmIi6t8a.js";import"./tooltip-D2YWuTc5.js";import"./overlay-BozJNug4.js";import"./ai-chat-header-6yKCWjyb.js";import"./ai-dropdown-menu-CHj1KAHe.js";import"./if-defined-B6Pmx3Zn.js";import"./popover-DBDlbPqH.js";import"./ai-dropdown-menu-item-CjAFJb_S.js";import"./ai-agent-info-xzAg_x0f.js";import"./ai-agent-selector-CPUj_l8D.js";import"./ai-chat-interface-CcpsKL1t.js";import"./ai-prompt-Bm6Gs2Jp.js";import"./ai-conversations-panel-DPcOlOdM.js";import"./ai-edit-thread-uPP8YqLG.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-kialF_tK.js";import"./ai-message-thread-DGj-5SCm.js";import"./ai-response-message-toolbar-DOwuhBFk.js";import"./ai-empty-state-5CBsPnmE.js";import"./ai-error-message-C9FaSZU8.js";import"./ai-response-message-_HJIXmN3.js";import"./ai-thinking-indicator-CkyYaPr3.js";import"./ai-user-message-DIUScw3i.js";import"./ai-user-message-toolbar-BeVwLqRW.js";import"./ai-suggestions-FpB68h0c.js";import"./ai-voice-input-BXWE5HB9.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

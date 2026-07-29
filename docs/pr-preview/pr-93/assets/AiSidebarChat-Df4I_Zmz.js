import{j as t,M as n,T as a}from"./blocks-w_Pp9baK.js";import{useMDXComponents as r}from"./index-DKIApKMC.js";import{C as s}from"./CustomArgTypes-CHXY-D2X.js";import{A as c}from"./AiSidebarChat.stories-B_ZodvQv.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DD6s76Jt.js";import"./utils-BcVRbqrP.js";import"./scaffold-yR_xQJ6E.js";import"./class-map-CxP-NbxC.js";import"./property-Bc2L6Lfo.js";import"./custom-element-UsVr97OX.js";import"./ref-BXuWK9B6.js";import"./floating-ui.dom-C0FiGihr.js";import"./split-button-r7vOs2_J.js";import"./query-assigned-nodes-CfogLvjY.js";import"./ai-sidebar-CSB06O_r.js";import"./when-CI7b_ccM.js";import"./index-Bev2xrTV.js";import"./ai-modal-u7QmjeDa.js";import"./utils-BGBq21po.js";import"./ai-button-C3KwKr3_.js";import"./ai-icon-7Vj3PVzK.js";import"./ai-gradient-container-BW_4typY.js";import"./ai-disclaimer-Zw2Yip4V.js";import"./ai-chatbot-base-Cj76UBcR.js";import"./mock-adapter-DymPxr2h.js";import"./markdown-C0nyZhUE.js";import"./ai-chatbot-Dzg8Kyx2.js";import"./ai-attachment-B9FiagKu.js";import"./ai-spinner-BLYhYWDI.js";import"./tooltip-BHG3W31V.js";import"./overlay-DUi4pOzV.js";import"./ai-chat-header-CbmjabqH.js";import"./ai-dropdown-menu-Dn875ui_.js";import"./if-defined-CYyUW0IP.js";import"./popover-C7KKH-mP.js";import"./ai-dropdown-menu-item-CMXPuxC8.js";import"./ai-agent-info-BxHJWI25.js";import"./ai-agent-selector-Cx9NBTCM.js";import"./ai-chat-interface-CCDm2-0R.js";import"./ai-prompt-Dtyn4vlm.js";import"./ai-conversations-panel-DBHeXBm3.js";import"./ai-edit-thread-B6-Nsbzm.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-BHWDdGLK.js";import"./ai-message-thread-DV9Cbw82.js";import"./ai-response-message-toolbar-B-0K9udc.js";import"./ai-empty-state-E0vuGhw_.js";import"./ai-error-message-ChjrM9EQ.js";import"./ai-response-message-Dg5w2sEP.js";import"./ai-thinking-indicator-Bs0vqKYw.js";import"./ai-user-message-BKBZxmmr.js";import"./ai-user-message-toolbar-h91Zx_6_.js";import"./ai-suggestions-tRAyK9F5.js";import"./ai-voice-input-B4AroyRO.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

import{j as t,M as n,T as a}from"./blocks-BNrQEoZP.js";import{useMDXComponents as r}from"./index-BTj30Gk4.js";import{C as s}from"./CustomArgTypes-Gn97v9Yb.js";import{A as c}from"./AiSidebarChat.stories-C7YNF8-6.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B1QudN3R.js";import"./utils-C5Jz97cD.js";import"./scaffold-BW4_wbW9.js";import"./class-map-CrTTU2WW.js";import"./property-DH_R2agj.js";import"./custom-element-UsVr97OX.js";import"./ref-Dm7c1LK_.js";import"./floating-ui.dom-C0FiGihr.js";import"./split-button-BwzqzhfJ.js";import"./query-assigned-nodes-BFZ6gsTg.js";import"./ai-sidebar-D--H9HtW.js";import"./when-CI7b_ccM.js";import"./index-mmAyyl_G.js";import"./ai-modal-CPQ4EzYw.js";import"./utils-BGBq21po.js";import"./ai-button-H1oR1bnn.js";import"./ai-icon-BFcAj12I.js";import"./ai-gradient-container-CVBgw4dg.js";import"./ai-disclaimer-B73jr_-O.js";import"./ai-chatbot-base-CuEV5slK.js";import"./mock-adapter-Dv6Maef-.js";import"./utils-YPQNW8lZ.js";import"./ai-chatbot-DQ1K7_XH.js";import"./ai-attachment-CCI7Nfeh.js";import"./ai-spinner-BMwUFmye.js";import"./tooltip-LaoYQ4W5.js";import"./overlay-ByCT0M_B.js";import"./ai-chat-header-Cun3uT0M.js";import"./ai-dropdown-menu-DGR1rgMG.js";import"./if-defined-BGAXde2m.js";import"./popover-C1qcke8c.js";import"./ai-dropdown-menu-item-B_KbSC8D.js";import"./ai-agent-info-A9HoYAUg.js";import"./ai-agent-selector-BHpSEtnb.js";import"./ai-chat-interface-Cr75pV79.js";import"./ai-prompt-CsqFtSpu.js";import"./ai-conversations-panel-HO2v3jfs.js";import"./ai-edit-thread-DqRaPYuS.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-DYZk9Dto.js";import"./ai-message-thread-C6pOt7-A.js";import"./ai-response-message-toolbar-zF3fCQHD.js";import"./ai-empty-state-DHyPDUZ7.js";import"./ai-error-message-8THuyDPl.js";import"./ai-response-message-DVR70RH1.js";import"./ai-thinking-indicator-CrIl-jam.js";import"./ai-user-message-5jF-KMxY.js";import"./ai-user-message-toolbar-DJniWE8r.js";import"./ai-suggestions-BEWk9AM5.js";import"./ai-voice-input-DNmBZgX6.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

import{j as t,M as n,T as a}from"./blocks-EuWwfhe9.js";import{useMDXComponents as r}from"./index-D7UQBr1h.js";import{C as s}from"./CustomArgTypes-D-nJTZbE.js";import{A as c}from"./AiSidebarChat.stories-CiIEdauI.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-D0Quxatl.js";import"./utils-D55EIfBS.js";import"./scaffold-CnJCx8lY.js";import"./class-map-zwx_ooUS.js";import"./property-DTfo_sT5.js";import"./custom-element-UsVr97OX.js";import"./ref-DSyLRuzg.js";import"./floating-ui.dom-C0FiGihr.js";import"./split-button-BnVbUOtj.js";import"./query-assigned-nodes-STbO7ZRT.js";import"./ai-sidebar-DPmr5dtb.js";import"./when-CI7b_ccM.js";import"./index-ieDQq8cC.js";import"./ai-modal-BfsgCCk_.js";import"./utils-BGBq21po.js";import"./ai-button-DA-n_4xi.js";import"./ai-icon-Bv81jPxL.js";import"./ai-gradient-container-DEg7-ReP.js";import"./ai-disclaimer-mkiqVJKM.js";import"./ai-chatbot-base-D19MV-92.js";import"./mock-adapter-DtTa1VKp.js";import"./utils-BPGIXM68.js";import"./ai-chatbot-6CkVZGKT.js";import"./ai-attachment-BRZERHwW.js";import"./ai-spinner-BfTFtFn-.js";import"./tooltip-FJkXGueQ.js";import"./overlay-DOvf1uYB.js";import"./ai-chat-header-BuMd-48Y.js";import"./ai-dropdown-menu-5h690hTL.js";import"./if-defined-DkyLDCga.js";import"./popover-CJJHiduG.js";import"./ai-dropdown-menu-item-DDU0rKEY.js";import"./ai-agent-info-BWDdi_LR.js";import"./ai-agent-selector-y_2G-2Wi.js";import"./ai-chat-interface-B_I5K7kM.js";import"./ai-prompt-DEw7cBw2.js";import"./ai-conversations-panel-CWAlKU0Z.js";import"./ai-edit-thread-DhtOANIJ.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-BPajpDR1.js";import"./ai-message-thread-CDMN11pF.js";import"./ai-response-message-toolbar-wGBTi6JH.js";import"./ai-empty-state-CNb5EMea.js";import"./ai-error-message-bI9djrFu.js";import"./ai-response-message-BNSnrZOH.js";import"./ai-thinking-indicator-BIEVVRD6.js";import"./ai-user-message-DUvNLl44.js";import"./ai-user-message-toolbar-BnOCd1IZ.js";import"./ai-suggestions-CH_haeo3.js";import"./ai-voice-input-P5vvi4DJ.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

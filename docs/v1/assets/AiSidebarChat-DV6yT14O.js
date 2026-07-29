import{j as t,M as n,T as a}from"./blocks-Dde5_4F5.js";import{useMDXComponents as r}from"./index-Bo-86FQ2.js";import{C as s}from"./CustomArgTypes-BGqKN-1j.js";import{A as c}from"./AiSidebarChat.stories-CJah5wfO.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DmxWkD8Q.js";import"./utils-K6R1uiZY.js";import"./scaffold-D-4s9puY.js";import"./class-map-CdW5aq23.js";import"./property-B8oslQ-r.js";import"./custom-element-UsVr97OX.js";import"./ref-FIWR8MIP.js";import"./floating-ui.dom-alButkyJ.js";import"./split-button-C29LNImr.js";import"./query-assigned-nodes-DH9ECkIe.js";import"./if-defined-DPv2xsUv.js";import"./ai-sidebar-BLY0t3OE.js";import"./when-CI7b_ccM.js";import"./index-BfVBEPRf.js";import"./ai-modal-DVeuqpF9.js";import"./utils-BGBq21po.js";import"./ai-button-fSl6Zc-K.js";import"./ai-icon-Bg-lRR4R.js";import"./ai-gradient-container-C7kzr7zL.js";import"./ai-disclaimer-DTG1tQ6M.js";import"./ai-chatbot-base-lUDVJrcX.js";import"./mock-adapter-DbkpGE97.js";import"./markdown-BZ_ChyzU.js";import"./ai-chatbot-CbmpVhnu.js";import"./ai-attachment-CEZWyJVm.js";import"./ai-spinner-CJrhov8u.js";import"./tooltip-Cur1SY7d.js";import"./overlay-BjFA8Rsx.js";import"./ai-chat-header-DQ3LToqs.js";import"./ai-dropdown-menu-D0_6Xc__.js";import"./popover-BLEiddh6.js";import"./ai-dropdown-menu-item-DkmALU-6.js";import"./ai-agent-info-BDTrS4ni.js";import"./ai-agent-selector-rrRT2U2t.js";import"./ai-chat-interface-gq60SMQ5.js";import"./ai-prompt-DnuOzfK6.js";import"./ai-conversations-panel-BKOYtObx.js";import"./ai-edit-thread-BvhtQuzJ.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-CFqzVBA8.js";import"./ai-message-thread-uu3IvXub.js";import"./ai-response-message-toolbar-CVrekffk.js";import"./ai-empty-state-4ujBcvod.js";import"./ai-error-message-CPdEjvIj.js";import"./ai-response-message-BAtLnuYb.js";import"./ai-thinking-indicator-qP-C8okc.js";import"./ai-user-message-DSFUQ60y.js";import"./ai-user-message-toolbar-1n4TjTQR.js";import"./ai-suggestions-CNazeogL.js";import"./ai-voice-input-Ch69aaXL.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

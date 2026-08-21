import{j as t,M as n,T as a}from"./blocks-9S32BcJG.js";import{useMDXComponents as r}from"./index-CG9gGviY.js";import{C as s}from"./CustomArgTypes-C1euCFcY.js";import{A as c}from"./AiSidebarChat.stories-BMItuu81.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Bkoayrxb.js";import"./utils-Ci4bjnpZ.js";import"./scaffold-D8ubhCON.js";import"./class-map-Cl4y5wz2.js";import"./property-Bz1TbDJl.js";import"./custom-element-UsVr97OX.js";import"./ref-CjnkLGyE.js";import"./floating-ui.dom-alButkyJ.js";import"./split-button-Bb1aALdy.js";import"./query-assigned-nodes-Q_mmfBN-.js";import"./if-defined-DAw-a70h.js";import"./ai-sidebar-BRZ3WPqw.js";import"./when-CI7b_ccM.js";import"./index-B3NYDeE-.js";import"./ai-modal-6UBnKpxH.js";import"./utils-BGBq21po.js";import"./ai-button-D4qPxDMG.js";import"./ai-icon-CUg1Y1JP.js";import"./ai-gradient-container-JvSAJKny.js";import"./ai-disclaimer-BgOx8fCm.js";import"./ai-chatbot-base-CxWzwFTz.js";import"./agent-adapter-ByAhrqd5.js";import"./markdown-BmTprob7.js";import"./ai-chatbot-a2EqG_lU.js";import"./ai-attachment-Bc6ChUHR.js";import"./ai-spinner-DwTSPQW_.js";import"./tooltip-CQhDneT-.js";import"./overlay-Cn9Dlzg7.js";import"./ai-chat-header-D1StZBbM.js";import"./ai-dropdown-menu-CxcHVCjS.js";import"./popover-Bwo5kZgx.js";import"./ai-dropdown-menu-item-DKRRNXbw.js";import"./ai-agent-info-SE6FB0_S.js";import"./ai-agent-selector-DL48lfwz.js";import"./ai-chat-interface-DYyYPSd2.js";import"./ai-prompt-BcDdJN1h.js";import"./ai-conversations-panel-O9norDWa.js";import"./ai-edit-thread-ow-wLxye.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-C1QkM9nA.js";import"./ai-message-thread-w8_FjMYr.js";import"./ai-response-message-toolbar-BeZLGkus.js";import"./ai-thinking-indicator-D4kHseO0.js";import"./ai-client-message-HEoIisrO.js";import"./ai-empty-state-CsZCV8qd.js";import"./ai-error-message-DFVK2wCs.js";import"./ai-response-message-C6g__lLm.js";import"./ai-user-message-lya3-OiC.js";import"./ai-user-message-toolbar-B4eOb1Dw.js";import"./ai-suggestions-DrNfqwOi.js";import"./ai-voice-input-zxpV-b8Q.js";import"./mock-adapter-BCD0_cR6.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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
`,t.jsx(s,{})]})}function ht(e={}){const{wrapper:o}={...r(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(i,{...e})}):i(e)}export{ht as default};

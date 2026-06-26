import{j as t,M as n,T as a}from"./blocks-vQd2M9wa.js";import{useMDXComponents as r}from"./index-DET7gutn.js";import{C as s}from"./CustomArgTypes-Deo9rbNv.js";import{A as c}from"./AiSidebarChat.stories-BG_Edtc4.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DM5dAlEW.js";import"./utils-Bikz1eRQ.js";import"./scaffold-C7L4w-0j.js";import"./class-map-BIhkcikf.js";import"./property-Bn3rY6-b.js";import"./custom-element-UsVr97OX.js";import"./ref-DW7jPPr7.js";import"./floating-ui.dom-C0FiGihr.js";import"./split-button-CrmNwz_i.js";import"./query-assigned-nodes-yXJkGSwK.js";import"./ai-sidebar-BGjZogDk.js";import"./when-CI7b_ccM.js";import"./index-C2xCVSAE.js";import"./ai-modal-CsRkBMr3.js";import"./utils-BGBq21po.js";import"./ai-button-DEstH_GT.js";import"./ai-icon-CR1maWac.js";import"./ai-gradient-container-lSyw7bzG.js";import"./ai-disclaimer-BIBo6roy.js";import"./ai-chatbot-base-Bmx-BUcX.js";import"./mock-adapter-B6avymXj.js";import"./utils-B8dv6FBY.js";import"./ai-chatbot-DKySVtZ8.js";import"./ai-attachment-DA16iSMc.js";import"./ai-spinner-DFM3rEtt.js";import"./tooltip-CwEMITgJ.js";import"./overlay-DVrLZ4Ze.js";import"./ai-chat-header-BAJGrR4G.js";import"./ai-dropdown-menu-CsVr0uPn.js";import"./if-defined-B87OQGam.js";import"./popover-DAq40Yri.js";import"./ai-dropdown-menu-item-3tbKh-mQ.js";import"./ai-agent-info-CdV0M80m.js";import"./ai-agent-selector-BbkD2H1X.js";import"./ai-chat-interface-CURRx06w.js";import"./ai-prompt-BBkYS6m2.js";import"./ai-conversations-panel-CCK7lrXn.js";import"./ai-edit-thread-LIkVMVum.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-CoZ9WtBL.js";import"./ai-message-thread-B0dEnxYo.js";import"./ai-response-message-toolbar-DeaYNklm.js";import"./ai-empty-state-CQNNnWdX.js";import"./ai-error-message-Ct9Sz5HT.js";import"./ai-response-message-C7qDwyZs.js";import"./ai-thinking-indicator-0RfmCZlu.js";import"./ai-user-message-lSyV3kX9.js";import"./ai-user-message-toolbar-DaIDq4BY.js";import"./ai-suggestions-CLcXEef8.js";import"./ai-voice-input-Cn2NZ90s.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

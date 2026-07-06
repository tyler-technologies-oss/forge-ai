import{j as t,M as n,T as a}from"./blocks-CSja2OUG.js";import{useMDXComponents as r}from"./index-DHhDGxwg.js";import{C as s}from"./CustomArgTypes-B-gh3t1i.js";import{A as c}from"./AiSidebarChat.stories-d3FYMLon.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CcKeoUze.js";import"./utils-B_iZMiSg.js";import"./scaffold-Ca_jcvG0.js";import"./class-map-DZShT9uC.js";import"./property-C77ueFB9.js";import"./custom-element-UsVr97OX.js";import"./ref-DsiRLb7m.js";import"./floating-ui.dom-C0FiGihr.js";import"./split-button-D5MgMe4C.js";import"./query-assigned-nodes-CQadBgYX.js";import"./ai-sidebar-BnaZX6na.js";import"./when-CI7b_ccM.js";import"./index-COhy1Ym5.js";import"./ai-modal-CQwp0LKX.js";import"./utils-BGBq21po.js";import"./ai-button-Eo9TwqWa.js";import"./ai-icon-CknqX0iy.js";import"./ai-gradient-container-DQDdztgS.js";import"./ai-disclaimer-CxKFRDtm.js";import"./ai-chatbot-base-DzySuWuZ.js";import"./mock-adapter-B6avymXj.js";import"./utils-B8dv6FBY.js";import"./ai-chatbot-BvM2dnuK.js";import"./ai-attachment-FEgZqvwa.js";import"./ai-spinner-Cd-uq0hS.js";import"./tooltip-DT6fnM6D.js";import"./overlay-CsH_HWPX.js";import"./ai-chat-header-CpiH95jW.js";import"./ai-dropdown-menu-BYUxIWLI.js";import"./if-defined-W3bHS76c.js";import"./popover-n5p-D5pN.js";import"./ai-dropdown-menu-item-BTF9qgd1.js";import"./ai-agent-info-DvBdi-NS.js";import"./ai-agent-selector-BcMXN7Xz.js";import"./ai-chat-interface-ByuFBgXV.js";import"./ai-prompt-w75QHimr.js";import"./ai-conversations-panel-DxLauXlF.js";import"./ai-edit-thread-Dz8IIZ6g.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-DOcHyEBl.js";import"./ai-message-thread-PDck-6T5.js";import"./ai-response-message-toolbar-CrXQ5DNy.js";import"./ai-empty-state-DvNlK9Rn.js";import"./ai-error-message-DbruVaB5.js";import"./ai-response-message-C3BcIM3F.js";import"./ai-thinking-indicator-B-YZjG_k.js";import"./ai-user-message-BIyWp4Wg.js";import"./ai-user-message-toolbar-Bn3bIrSc.js";import"./ai-suggestions-CvhWjxV6.js";import"./ai-voice-input-_L-_L8x7.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

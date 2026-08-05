import{j as t,M as n,T as a}from"./blocks-BM80hmij.js";import{useMDXComponents as r}from"./index-CB_jfIsc.js";import{C as s}from"./CustomArgTypes-D7R-WvqE.js";import{A as c}from"./AiSidebarChat.stories-wr72uUmS.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DUNYetkA.js";import"./utils-D22WoWuC.js";import"./scaffold-kqdAiuHd.js";import"./class-map-BOEhWNTG.js";import"./property-DHETAyVB.js";import"./custom-element-UsVr97OX.js";import"./ref-Dj2HPsRF.js";import"./floating-ui.dom-alButkyJ.js";import"./split-button-4_aAKqAg.js";import"./query-assigned-nodes-Dv5K2tH_.js";import"./if-defined-7L8eOENh.js";import"./ai-sidebar-CUpss2J_.js";import"./when-CI7b_ccM.js";import"./index-jXDGvNbM.js";import"./ai-modal-Bu8lxtQn.js";import"./utils-BGBq21po.js";import"./ai-button-BhCosj87.js";import"./ai-icon-CjCqvNBT.js";import"./ai-gradient-container-DoZPDywe.js";import"./ai-disclaimer-Duo56xNJ.js";import"./ai-chatbot-base-DCyK7cgU.js";import"./mock-adapter-DbkpGE97.js";import"./markdown-BZ_ChyzU.js";import"./ai-chatbot-B3ZwbjvV.js";import"./ai-attachment-DIMNCyTg.js";import"./ai-spinner-DuHBR-2i.js";import"./tooltip-DrykBLb0.js";import"./overlay-DEeW7mIK.js";import"./ai-chat-header-CjKrwDuF.js";import"./ai-dropdown-menu-DEJJMfQi.js";import"./popover-BLupMQJY.js";import"./ai-dropdown-menu-item-BL511CWT.js";import"./ai-agent-info-DBa6Nwnx.js";import"./ai-agent-selector-qL_Vqw3J.js";import"./ai-chat-interface-DLPdVikZ.js";import"./ai-prompt-4b6cm-_m.js";import"./ai-conversations-panel-Nhb4ZTdJ.js";import"./ai-edit-thread-gK6l9JIy.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-DthkiF5D.js";import"./ai-message-thread-DQAM4nMt.js";import"./ai-response-message-toolbar-DmLaI405.js";import"./ai-thinking-indicator-DxH_2SmN.js";import"./ai-empty-state-DxP2nCgN.js";import"./ai-error-message-CgpsPnxt.js";import"./ai-response-message-DBRE3wBU.js";import"./ai-user-message-jlh3E4Qx.js";import"./ai-user-message-toolbar-D_mHNnm0.js";import"./ai-suggestions-CcY2kcAi.js";import"./ai-voice-input-acycHeNl.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

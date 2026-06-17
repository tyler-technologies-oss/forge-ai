import{j as t,M as n,T as a}from"./blocks-B1s78o6D.js";import{useMDXComponents as r}from"./index-kBlZ13Xe.js";import{C as s}from"./CustomArgTypes-BKCWbBj9.js";import{A as c}from"./AiSidebarChat.stories-D643wG5E.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BTNck0jc.js";import"./utils-N41bI4ot.js";import"./scaffold-Bo7D00de.js";import"./class-map-CRxQ4bGh.js";import"./property-DYxdKUdm.js";import"./custom-element-UsVr97OX.js";import"./ref-C7dQ3PJs.js";import"./floating-ui.dom-C0FiGihr.js";import"./split-button-CrbtY5VN.js";import"./query-assigned-nodes-WYH4PSZv.js";import"./ai-sidebar-QTNwvnFa.js";import"./index-9F7tV1_y.js";import"./when-CI7b_ccM.js";import"./ai-modal-DETjCdVK.js";import"./utils-BGBq21po.js";import"./ai-button-9HS-KKLq.js";import"./ai-icon-BxuZwTIz.js";import"./ai-gradient-container-DTqw1Osv.js";import"./ai-disclaimer-BAePqgLM.js";import"./ai-chatbot-base-DKTkvwSe.js";import"./mock-adapter-ls0PbTjH.js";import"./utils-JMyE3xw1.js";import"./ai-chatbot-Cdibl69Q.js";import"./ai-attachment-CZEnaNAM.js";import"./ai-spinner-BHpnSY6f.js";import"./tooltip-BIHWTSK0.js";import"./overlay-CzQIM4-h.js";import"./ai-chat-header-B5osJKe2.js";import"./ai-dropdown-menu-VM51zu4b.js";import"./if-defined-CWGF7I1A.js";import"./popover-CyTCDW2S.js";import"./ai-dropdown-menu-item-DZkB3W-W.js";import"./ai-agent-info-Qo9_w7en.js";import"./ai-agent-selector-DqTGLDNk.js";import"./ai-chat-interface-CguVGGts.js";import"./ai-conversations-panel-DdDvUZP2.js";import"./ai-edit-thread-BPLOEyue.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-DA84mmSI.js";import"./ai-message-thread-C0PM1fN5.js";import"./ai-response-message-toolbar-BgtnRA6O.js";import"./ai-empty-state-DQ3rkC3G.js";import"./ai-error-message-CGztXwOS.js";import"./ai-response-message-DIlAEOwS.js";import"./ai-thinking-indicator-C-R_bmBc.js";import"./ai-user-message-C_6ilBNP.js";import"./ai-user-message-toolbar-Cp2W2sqG.js";import"./ai-prompt-BsderdZr.js";import"./ai-suggestions-B6ncf1rJ.js";import"./ai-voice-input-zHqbAf3V.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

import{j as t,M as n,T as a}from"./blocks-CMJthvyq.js";import{useMDXComponents as r}from"./index-DWefhmo-.js";import{C as s}from"./CustomArgTypes-C10kcbL5.js";import{A as c}from"./AiSidebarChat.stories-CFe7Sklo.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-0Pxm6iM0.js";import"./utils-BSmLuotp.js";import"./scaffold-DQNodWi_.js";import"./class-map-Bj1ij2E3.js";import"./property-CcVosZlQ.js";import"./custom-element-UsVr97OX.js";import"./ref-rL4Q-Zjq.js";import"./floating-ui.dom-C0FiGihr.js";import"./split-button-pcrY9zfu.js";import"./query-assigned-nodes-N3WFZzeV.js";import"./ai-sidebar-CAjrS_aZ.js";import"./when-CI7b_ccM.js";import"./index-B6_Vlhus.js";import"./ai-modal-C50CDqzh.js";import"./utils-BGBq21po.js";import"./ai-button-BY8d0tZb.js";import"./ai-icon-vWNoepk9.js";import"./ai-gradient-container-BgQFMot-.js";import"./ai-disclaimer-iv4nSv-k.js";import"./ai-chatbot-base-qpnL-Q0g.js";import"./mock-adapter-B6avymXj.js";import"./utils-B8dv6FBY.js";import"./ai-chatbot-B8DE1LuX.js";import"./ai-attachment-DNEZBqqX.js";import"./ai-spinner-CZIaboN_.js";import"./tooltip-BJ6rbMdd.js";import"./overlay-DUeAUNdC.js";import"./ai-chat-header-BBJYp7_7.js";import"./ai-dropdown-menu-Bw6wdxr4.js";import"./if-defined-C8xREqbX.js";import"./popover-DefcR3Aj.js";import"./ai-dropdown-menu-item-BhX5aC3j.js";import"./ai-agent-info-xYfXtWad.js";import"./ai-agent-selector-BjNwwoyE.js";import"./ai-chat-interface-id_u95es.js";import"./ai-prompt-BMDb52V7.js";import"./ai-conversations-panel-BB4ZOYOW.js";import"./ai-edit-thread-VMbPOww5.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-TsKg8fRt.js";import"./ai-message-thread-DzxdLnNP.js";import"./ai-response-message-toolbar-W_u3330f.js";import"./ai-empty-state-SjMJycKb.js";import"./ai-error-message-By8FavrS.js";import"./ai-response-message-BiKjDW_3.js";import"./ai-thinking-indicator-C1SI426D.js";import"./ai-user-message-NS-9Fg42.js";import"./ai-user-message-toolbar-CjF1a777.js";import"./ai-suggestions-Dcu0N8re.js";import"./ai-voice-input-BfHXaE-U.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

import{j as t,M as n,T as a}from"./blocks-DZ9eZCdK.js";import{useMDXComponents as r}from"./index-CQqbSTZr.js";import{C as s}from"./CustomArgTypes-C4HCBzEJ.js";import{A as c}from"./AiSidebarChat.stories-BIYgBAPb.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C83-ekmt.js";import"./utils-BohDuGYC.js";import"./scaffold-eu0qsilL.js";import"./class-map-WRBlYBEA.js";import"./property-Cx0v-Yx5.js";import"./custom-element-UsVr97OX.js";import"./ref-rcuORRAe.js";import"./floating-ui.dom-C0FiGihr.js";import"./split-button-DlEpaxu4.js";import"./query-assigned-nodes-BUQHPhhu.js";import"./ai-sidebar-TbgDTOvF.js";import"./when-CI7b_ccM.js";import"./index-BZkfv-W4.js";import"./ai-modal-DNWB3v_k.js";import"./utils-BGBq21po.js";import"./ai-button--vvtbcYo.js";import"./ai-icon-CfuU4uu2.js";import"./ai-gradient-container-CvCqeTt4.js";import"./ai-disclaimer-BVs620KU.js";import"./ai-chatbot-base-0d6P04ir.js";import"./mock-adapter-DTkZ8L8h.js";import"./utils-DfZOzEgf.js";import"./ai-chatbot-DEIxbI5-.js";import"./ai-attachment-Asd2kfrz.js";import"./ai-spinner-eA5lFlyl.js";import"./tooltip-BnuXaAFv.js";import"./overlay-wL1UuyNr.js";import"./ai-chat-header-V2RWkOin.js";import"./ai-dropdown-menu-DyOU74eP.js";import"./if-defined-qE6i0lGk.js";import"./popover-B7Es3EFP.js";import"./ai-dropdown-menu-item-CCpDXGlO.js";import"./ai-agent-info-DknNlcax.js";import"./ai-agent-selector-DlmUhfUB.js";import"./ai-chat-interface-usd_0cHT.js";import"./ai-prompt-DwKy9JjN.js";import"./ai-conversations-panel-Daotk8fn.js";import"./ai-edit-thread-DK0lLGhK.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-_GLylKdP.js";import"./ai-message-thread-DI49p2oD.js";import"./ai-response-message-toolbar-C2F-djla.js";import"./ai-empty-state-vxuFFWtb.js";import"./ai-error-message-CqpjoMXK.js";import"./ai-response-message-CsV4OggX.js";import"./ai-thinking-indicator-fOtI4BrT.js";import"./ai-user-message-B0wlWCC2.js";import"./ai-user-message-toolbar-CG36lyU1.js";import"./ai-suggestions-BWDuJC0B.js";import"./ai-voice-input-8stJdwGy.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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

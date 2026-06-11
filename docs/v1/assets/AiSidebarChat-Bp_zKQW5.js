import{j as e,M as r,T as a}from"./blocks-C1s4Goed.js";import{useMDXComponents as i}from"./index-CWZ87rpd.js";import{C as s}from"./CustomArgTypes-B3_r6j_y.js";import{A as c}from"./AiSidebarChat.stories-DEVxJ6SI.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-4PSpynT3.js";import"./utils-DMjvdKdW.js";import"./split-button-YbY92s58.js";import"./custom-element-UsVr97OX.js";import"./property-DDgNQfxw.js";import"./class-map-DNOv9QtK.js";import"./base-DEhi61ki.js";import"./query-assigned-elements-BQQxo_v9.js";import"./ref-DzHNudZC.js";import"./query-assigned-nodes-BN3gESMJ.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-sidebar-CXeshEer.js";import"./index-CL0ZAeoO.js";import"./when-CI7b_ccM.js";import"./ai-modal-Bd_LQOAw.js";import"./utils-BGBq21po.js";import"./ai-button-BzlnD33U.js";import"./ai-icon-CwWMCvm9.js";import"./ai-gradient-container-D2oG_4Yj.js";import"./ai-disclaimer-RFijQEDt.js";import"./mock-adapter-uhjSnHDA.js";import"./utils-CX_NQepL.js";function o(n){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c}),`
`,e.jsx(a,{children:"AI Sidebar Chat"}),`
`,e.jsxs(t.p,{children:["The AI Sidebar Chat component is a form factor component that positions a slotted chatbot in a sidebar or fullscreen modal. It manages positioning and expand/collapse state while delegating all chat functionality to the slotted ",e.jsx(t.code,{children:"ai-chatbot"})," component. When expanded, the chat is displayed in a fullscreen modal. When collapsed, it's displayed in a sidebar."]}),`
`,e.jsx(t.h2,{id:"features",children:"Features"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Composition-based"}),": Accepts slotted chatbot component for maximum flexibility"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Built-in event handling"}),": Manages open/close events and expand/collapse interactions"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Dual display modes"}),": Sidebar for normal view, fullscreen modal when expanded"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Direct chatbot access"}),": Exposes slotted chatbot via ",e.jsx(t.code,{children:"chatbot"})," property for programmatic control"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Event bubbling"}),": All chatbot events bubble through unchanged"]}),`
`]}),`
`,e.jsx(t.h2,{id:"when-to-use",children:"When to Use"}),`
`,e.jsx(t.p,{children:"Use the AI Sidebar Chat component when you want:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"A sidebar container for your chatbot that can expand to fullscreen"}),`
`,e.jsx(t.li,{children:"Standard sidebar positioning without custom logic"}),`
`,e.jsx(t.li,{children:"Built-in modal transition for expanded view"}),`
`,e.jsx(t.li,{children:"Direct control over the chatbot configuration"}),`
`]}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<forge-ai-sidebar-chat>
  <forge-ai-chatbot .adapter="\\\${adapter}" file-upload="on"> </forge-ai-chatbot>
</forge-ai-sidebar-chat>
`})}),`
`,e.jsx(t.h3,{id:"programmatic-control",children:"Programmatic Control"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`const sidebarChat = document.querySelector('forge-ai-sidebar-chat');

// Control form factor
sidebarChat.show();
sidebarChat.close();
sidebarChat.expand(); // Switch to fullscreen modal
sidebarChat.collapse(); // Return to sidebar

// Access slotted chatbot
const chatbot = sidebarChat.chatbot;
chatbot.sendMessage('Hello!');
`})}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(s,{})]})}function P(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{P as default};

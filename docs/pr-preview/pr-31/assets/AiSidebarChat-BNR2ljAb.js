import{j as e,M as r,T as a}from"./blocks-Ce0jMkOJ.js";import{useMDXComponents as i}from"./index-nABg2tNq.js";import{C as s}from"./CustomArgTypes-CSoxndgG.js";import{A as c}from"./AiSidebarChat.stories-C35zbPU5.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-WXw08rX5.js";import"./icon-registry-D8cCWsde.js";import"./constants-Co83GciG.js";import"./service-adapter-CgOYZRmu.js";import"./custom-element-UsVr97OX.js";import"./property-CwNbMPWj.js";import"./ref-D5U5pwia.js";import"./class-map-Ce5VxPPS.js";import"./base-BxJkqhC4.js";import"./when-CI7b_ccM.js";import"./ai-sidebar-BeoDwe3O.js";import"./index-eCDy3nyg.js";import"./focus-indicator-CoBw9-T3.js";import"./ai-modal-D6lWumJm.js";import"./utils-BGBq21po.js";import"./ai-button-B5u8GBuk.js";import"./ai-icon-D0FUjlpI.js";import"./ai-gradient-container-BHccZZxt.js";import"./mock-adapter-CGsAFG5D.js";import"./utils-B0W8KtS_.js";function o(n){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c}),`
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
`,e.jsx(s,{})]})}function F(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{F as default};

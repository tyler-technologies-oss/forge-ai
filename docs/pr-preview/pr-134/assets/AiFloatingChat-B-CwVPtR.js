import{j as t,M as a,T as r,C as s}from"./blocks-BXdAqhM4.js";import{useMDXComponents as e}from"./index-D8Wl0gln.js";import{C as c}from"./CustomArgTypes-CGwAoTko.js";import{A as l,W as h}from"./AiFloatingChat.stories-DJOEkcgf.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B2iIPFms.js";import"./utils-Dc-_7Ywc.js";import"./custom-element-UsVr97OX.js";import"./property-De7pFSXt.js";import"./query-Dqn61YSF.js";import"./class-map-2BfWKpIT.js";import"./ref-CGaQPDJ6.js";import"./ai-dialog-CcWqTy5J.js";import"./when-CI7b_ccM.js";import"./ai-modal-BhQp6dc8.js";import"./utils-DIqd7FWX.js";import"./ai-fab-B4urnbb4.js";import"./ai-icon-BT3VehvF.js";import"./ai-gradient-container-B9D2cQiF.js";import"./ai-disclaimer-CJ7sYSoG.js";import"./mock-adapter-tBtA3Vjv.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-pfIOHICc.js";import"./canvas-table-tool-DwzndKgf.js";import"./scaffold-Cil7DQOg.js";import"./style-map-LJQtHGIb.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-XRMcNRLj.js";import"./query-assigned-elements-CC18lbKK.js";import"./query-assigned-nodes-rK0fzJJV.js";import"./context-consumer-CIN_xSLl.js";import"./if-defined-PssoKMmO.js";import"./context-provider-NnzmXA_k.js";import"./create-tool-renderer-BxivDorU.js";function i(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{of:l}),`
`,t.jsx(r,{children:"AI Floating Chat"}),`
`,t.jsxs(n.p,{children:["The AI Floating Chat component is a form factor component that positions a slotted chatbot in a floating dialog. It manages positioning and expand/minimize state while delegating all chat functionality to the slotted ",t.jsx(n.code,{children:"ai-chatbot"})," component."]}),`
`,t.jsx(n.h2,{id:"features",children:"Features"}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"Composition-based"}),": Accepts slotted chatbot component for maximum flexibility"]}),`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"Built-in event handling"}),": Manages expand/minimize/open/close events internally"]}),`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"Responsive behavior"}),": Adapts to different viewport sizes automatically"]}),`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"Direct chatbot access"}),": Exposes slotted chatbot via ",t.jsx(n.code,{children:"chatbot"})," property for programmatic control"]}),`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"Event bubbling"}),": All chatbot events bubble through unchanged"]}),`
`]}),`
`,t.jsx(n.h2,{id:"when-to-use",children:"When to Use"}),`
`,t.jsx(n.p,{children:"Use the AI Floating Chat component when you want:"}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsx(n.li,{children:"A floating dialog container for your chatbot"}),`
`,t.jsx(n.li,{children:"Standard floating chat positioning without custom logic"}),`
`,t.jsx(n.li,{children:"Built-in responsive behavior and expand/collapse functionality"}),`
`,t.jsx(n.li,{children:"Direct control over the chatbot configuration"}),`
`]}),`
`,t.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<forge-ai-floating-chat>
  <forge-ai-chatbot .adapter="\\\${adapter}" file-upload="on"> </forge-ai-chatbot>
</forge-ai-floating-chat>
`})}),`
`,t.jsx(n.h3,{id:"programmatic-control",children:"Programmatic Control"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-javascript",children:`const floatingChat = document.querySelector('forge-ai-floating-chat');

// Control form factor
floatingChat.show();
floatingChat.close();
floatingChat.expand();
floatingChat.collapse();

// Access slotted chatbot
const chatbot = floatingChat.chatbot;
chatbot.sendMessage('Hello!');
`})}),`
`,t.jsx(n.h3,{id:"artifact-canvas",children:"Artifact Canvas"}),`
`,t.jsxs(n.p,{children:["Artifacts open in a modal over the floating chat, using the slotted chatbot's canvas API (",t.jsx(n.code,{children:"openCanvas()"}),", ",t.jsx(n.code,{children:"closeCanvas()"}),", the ",t.jsx(n.code,{children:"forge-ai-chatbot-canvas-open"})," and ",t.jsx(n.code,{children:"-canvas-close"})," events). The floating chat stays open underneath. See ",t.jsx(n.a,{href:"?path=/docs/ai-components-primitives-chatbot--docs",children:"Chatbot → Artifact Canvas"})," for the details."]}),`
`,t.jsx(s,{of:h}),`
`,t.jsx(n.h2,{id:"api",children:"API"}),`
`,t.jsx(c,{})]})}function G(o={}){const{wrapper:n}={...e(),...o.components};return n?t.jsx(n,{...o,children:t.jsx(i,{...o})}):i(o)}export{G as default};

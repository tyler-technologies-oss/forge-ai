import{j as t,M as a,T as r,C as s}from"./blocks-CPCM3ofs.js";import{useMDXComponents as e}from"./index-BFtuCeYY.js";import{C as c}from"./CustomArgTypes-1avp-Hiz.js";import{A as l,W as h}from"./AiFloatingChat.stories-BaCmnUvq.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Bbknnayn.js";import"./utils-Dc-_7Ywc.js";import"./custom-element-UsVr97OX.js";import"./property-BB9mgIZw.js";import"./query-iqmcI2VG.js";import"./class-map-DeqW9URm.js";import"./ref-y0mntcf3.js";import"./ai-dialog-CYs1t0kL.js";import"./when-CI7b_ccM.js";import"./ai-modal-BGuEw6oO.js";import"./utils-DIqd7FWX.js";import"./ai-fab--7ZmhE-0.js";import"./ai-icon-B2NdCMYK.js";import"./ai-gradient-container-wUmhvaq6.js";import"./ai-disclaimer-DSQb7Qah.js";import"./mock-adapter-BpXd5o7R.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-B4bbHXKC.js";import"./canvas-table-tool-Co_6_TeY.js";import"./scaffold-Dqiuz0-2.js";import"./style-map-B9NrKQgI.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-DFRq82XZ.js";import"./query-assigned-elements-DET5aWzr.js";import"./query-assigned-nodes-Cv1DRgkF.js";import"./context-consumer-CIN_xSLl.js";import"./if-defined-CiiUfixo.js";import"./context-provider-NnzmXA_k.js";import"./create-tool-renderer-BxivDorU.js";function i(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{of:l}),`
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

import{j as t,M as a,T as r,C as s}from"./blocks-BYZcTz10.js";import{useMDXComponents as e}from"./index-RBU1lV0J.js";import{C as c}from"./CustomArgTypes-CINl-ndf.js";import{A as l,W as h}from"./AiFloatingChat.stories-DKxte_CO.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DYSaFelY.js";import"./utils-DGoFphpS.js";import"./custom-element-UsVr97OX.js";import"./property-DkFqThWM.js";import"./query-Dp9XAxQR.js";import"./class-map-kByeKa_n.js";import"./ref-bUehiFAX.js";import"./ai-dialog-Daq-Z7jQ.js";import"./when-CI7b_ccM.js";import"./ai-modal-BFFKKtB6.js";import"./utils-DIqd7FWX.js";import"./ai-fab-CTtTySwN.js";import"./ai-icon-Br_Z5HN7.js";import"./ai-gradient-container-DJNzp8E5.js";import"./ai-disclaimer-ab3WJ_Kh.js";import"./mock-adapter-BkYea8t_.js";import"./agent-adapter-CiODA7QC.js";import"./utils-BRoM8yNS.js";import"./canvas-table-tool-BkQqTCxr.js";import"./scaffold-BjaAFHFX.js";import"./style-map-f8u1Y54S.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-BtbQt3R2.js";import"./query-assigned-elements-Bmda_lBl.js";import"./query-assigned-nodes-Ce0C7lls.js";import"./provide-RUGHcQ60.js";import"./consume-BHVW6YKk.js";import"./if-defined-DH2E4TDh.js";import"./create-tool-renderer-BxivDorU.js";function i(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{of:l}),`
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

import{j as t,M as a,T as r}from"./blocks-CCqrbUeA.js";import{useMDXComponents as e}from"./index-CCZ9kPqU.js";import{C as s}from"./CustomArgTypes-DF7FlzA-.js";import{A as l}from"./AiFloatingChat.stories-DSPOgiQ5.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Bp7ipRCr.js";import"./custom-element-UsVr97OX.js";import"./property-7jE7f0Cs.js";import"./state-DdHSmUcP.js";import"./ref-D9cN2G7K.js";import"./class-map-D7uXj0Ka.js";import"./ai-dialog-BMANdtQh.js";import"./when-CI7b_ccM.js";import"./ai-modal-CZ9M1yzR.js";import"./query-BpjciUlk.js";import"./base-DVmwUFg0.js";import"./utils-BGBq21po.js";import"./ai-fab-DKS5U7Wo.js";import"./ai-icon-dj4Wl-PB.js";import"./ai-gradient-container-DJ3JRIIT.js";import"./mock-adapter-Dat2lqqN.js";import"./utils-C_XXmvvR.js";function i(o){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{of:l}),`
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
`,t.jsx(n.h2,{id:"api",children:"API"}),`
`,t.jsx(s,{})]})}function S(o={}){const{wrapper:n}={...e(),...o.components};return n?t.jsx(n,{...o,children:t.jsx(i,{...o})}):i(o)}export{S as default};

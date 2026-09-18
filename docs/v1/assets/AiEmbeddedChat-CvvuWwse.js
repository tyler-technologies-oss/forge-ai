import{j as e,M as r,T as d}from"./blocks-dtQ4_oy7.js";import{useMDXComponents as o}from"./index-wKQio2n4.js";import{C as s}from"./CustomArgTypes-Wa4_H1xK.js";import{A as a}from"./AiEmbeddedChat.stories-Bw2LA770.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DyQYgWl0.js";import"./utils-BLmcI4rU.js";import"./custom-element-UsVr97OX.js";import"./property-CmgIO3_d.js";import"./query-BBNLfp-r.js";import"./class-map-f9Bf7M9J.js";import"./if-defined-B4mzDfpo.js";import"./ref-8wIzWuNC.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-BZq1tcNn.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-CeQn4hwz.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-6OUZsvaU.js";import"./ai-spinner-DKgKBs8M.js";import"./tooltip-Cosh5o8D.js";import"./overlay-CPyHJzs7.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-chat-header-DXhhG_77.js";import"./ai-icon-CKunhnjC.js";import"./ai-gradient-container-CvWRe7Bu.js";import"./ai-dropdown-menu-LVxiAyqQ.js";import"./query-assigned-elements-CUOxr20e.js";import"./popover-JJJpkSw8.js";import"./query-assigned-nodes-iTfdJNRX.js";import"./ai-dropdown-menu-item-CziZ-7Fa.js";import"./ai-modal-CbDWTDmb.js";import"./ai-agent-info-n6yf2k-d.js";import"./ai-agent-selector-IF7SGBII.js";import"./ai-chat-interface-CofUt4_C.js";import"./ai-prompt-C70WV34v.js";import"./ai-conversations-panel-B-fgonyP.js";import"./ai-edit-thread-Cqzm81WR.js";import"./ai-error-message-DrmNAv5h.js";import"./ai-file-picker-9HgUSAiM.js";import"./ai-message-thread-DX_q-S9Y.js";import"./ai-response-message-toolbar-Cq4V_X2p.js";import"./ai-thinking-indicator-BODV8OYa.js";import"./ai-client-message-1j0kadSB.js";import"./ai-empty-state-BdaKkruJ.js";import"./ai-response-message-C2_AzxNa.js";import"./ai-user-message-B2yGVQna.js";import"./ai-user-message-toolbar-tZSp2GOg.js";import"./ai-suggestions-Dm2RAip_.js";import"./ai-voice-input-DA3kaA_Y.js";import"./mock-adapter-BpgeerXX.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
`,e.jsx(d,{children:"AI Embedded Chat"}),`
`,e.jsxs(n.p,{children:["The AI Embedded Chat component is a structured form factor component that provides an embedded chat interface for inline page usage with built-in composition of ",e.jsx(n.code,{children:"ai-gradient-container"})," and ",e.jsx(n.code,{children:"ai-chat-interface"})," components. This component handles all the wiring and event management automatically, providing an easy-to-use solution for embedded chat interfaces that can expand to modal view when needed."]}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Structured composition"}),": Combines ai-gradient-container and ai-chat-interface components automatically"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dual view modes"}),": Renders embedded inline content that can expand to modal view"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Built-in event handling"}),": Manages expand/collapse events and modal interactions internally"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Gradient theming"}),": Supports multiple gradient intensity variants (low, medium, high, disabled)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Expandable interface"}),": Built-in expand functionality to switch from embedded to modal view"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Customizable slots"}),": Supports slotting messages, suggestions, and custom prompt components"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Rich API"}),": Provides methods and events for programmatic control"]}),`
`]}),`
`,e.jsx(n.h2,{id:"when-to-use",children:"When to Use"}),`
`,e.jsx(n.p,{children:"Use the AI Embedded Chat component when you want:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A chat interface embedded directly in page content"}),`
`,e.jsx(n.li,{children:"Ability to expand the chat to a larger modal view for better focus"}),`
`,e.jsx(n.li,{children:"Built-in gradient theming and visual polish"}),`
`,e.jsx(n.li,{children:"Standard embedded chat behavior without custom container logic"}),`
`,e.jsx(n.li,{children:"A component that seamlessly transitions between embedded and modal states"}),`
`,e.jsx(n.li,{children:'A component that "just works" out of the box'}),`
`]}),`
`,e.jsxs(n.p,{children:["For more complex compositions or custom containers, consider using the atomic ",e.jsx(n.code,{children:"ai-gradient-container"}),", ",e.jsx(n.code,{children:"ai-modal"}),", and ",e.jsx(n.code,{children:"ai-chat-interface"})," components directly."]}),`
`,e.jsx(n.h2,{id:"usage-patterns",children:"Usage Patterns"}),`
`,e.jsx(n.h3,{id:"embedded-mode-default",children:"Embedded Mode (Default)"}),`
`,e.jsxs(n.p,{children:["The component renders as an embedded chat interface within the ",e.jsx(n.code,{children:"ai-gradient-container"}),", perfect for inline page content. Users can expand to modal view using the expand button in the chat header."]}),`
`,e.jsx(n.h3,{id:"modal-mode-expanded",children:"Modal Mode (Expanded)"}),`
`,e.jsxs(n.p,{children:["When expanded, the chat interface moves to a modal overlay powered by ",e.jsx(n.code,{children:"ai-modal"}),", providing a focused chat experience. The modal includes minimize functionality to return to embedded mode."]}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(s,{})]})}function ae(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{ae as default};

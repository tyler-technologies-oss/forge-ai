import{j as e,M as r,T as d}from"./blocks-CPCM3ofs.js";import{useMDXComponents as o}from"./index-BFtuCeYY.js";import{C as s}from"./CustomArgTypes-1avp-Hiz.js";import{A as a}from"./AiEmbeddedChat.stories-CxIiAmxr.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Bbknnayn.js";import"./utils-Dc-_7Ywc.js";import"./custom-element-UsVr97OX.js";import"./property-BB9mgIZw.js";import"./query-iqmcI2VG.js";import"./class-map-DeqW9URm.js";import"./if-defined-CiiUfixo.js";import"./ref-y0mntcf3.js";import"./when-CI7b_ccM.js";import"./ai-canvas-bUg0n1lL.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-B4bbHXKC.js";import"./context-provider-NnzmXA_k.js";import"./context-consumer-CIN_xSLl.js";import"./ai-message-thread-BiPRtYCz.js";import"./ai-response-message-toolbar-DuhYStBi.js";import"./tooltip-Ce28q9yV.js";import"./overlay-thHEdP3C.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./popover-B28Ttg7w.js";import"./ai-artifact-card-DrBBSTs6.js";import"./ai-spinner-D_M_gcR5.js";import"./ai-thinking-indicator-BbWDj4Ay.js";import"./ai-client-message-4VeQv7fi.js";import"./ai-empty-state-CjGOJ5lJ.js";import"./ai-error-message-hi8vV5H8.js";import"./query-assigned-nodes-Cv1DRgkF.js";import"./ai-response-message-BSgdEq58.js";import"./ai-user-message-DmHVelJk.js";import"./ai-user-message-toolbar-CDBnM7mz.js";import"./ai-chat-header-BOz_Kne0.js";import"./ai-icon-B2NdCMYK.js";import"./utils-DIqd7FWX.js";import"./ai-gradient-container-wUmhvaq6.js";import"./ai-dropdown-menu-tJCc_cRR.js";import"./query-assigned-elements-DET5aWzr.js";import"./ai-dropdown-menu-item-B2Mn7xlp.js";import"./ai-modal-BGuEw6oO.js";import"./ai-agent-info-4h6CGnHZ.js";import"./ai-agent-selector-CWt7pA_I.js";import"./ai-chatbot-C95DIBrX.js";import"./ai-attachment-LATpzxPx.js";import"./ai-chat-interface-CSjJU99D.js";import"./ai-prompt-B9mACmjs.js";import"./ai-conversations-panel-D48zhBs2.js";import"./ai-edit-thread-CwYux69R.js";import"./ai-file-picker-BoIkWJkV.js";import"./ai-suggestions-CQ7Z8uDn.js";import"./ai-voice-input-CYhuyy5F.js";import"./mock-adapter-BpXd5o7R.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
`,e.jsx(d,{children:"AI Embedded Chat"}),`
`,e.jsxs(t.p,{children:["The AI Embedded Chat component is a structured form factor component that provides an embedded chat interface for inline page usage with built-in composition of ",e.jsx(t.code,{children:"ai-gradient-container"})," and ",e.jsx(t.code,{children:"ai-chat-interface"})," components. This component handles all the wiring and event management automatically, providing an easy-to-use solution for embedded chat interfaces that can expand to modal view when needed."]}),`
`,e.jsx(t.h2,{id:"features",children:"Features"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Structured composition"}),": Combines ai-gradient-container and ai-chat-interface components automatically"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Dual view modes"}),": Renders embedded inline content that can expand to modal view"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Built-in event handling"}),": Manages expand/collapse events and modal interactions internally"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Gradient theming"}),": Supports multiple gradient intensity variants (low, medium, high, disabled)"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Expandable interface"}),": Built-in expand functionality to switch from embedded to modal view"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Customizable slots"}),": Supports slotting messages, suggestions, and custom prompt components"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Rich API"}),": Provides methods and events for programmatic control"]}),`
`]}),`
`,e.jsx(t.h2,{id:"when-to-use",children:"When to Use"}),`
`,e.jsx(t.p,{children:"Use the AI Embedded Chat component when you want:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"A chat interface embedded directly in page content"}),`
`,e.jsx(t.li,{children:"Ability to expand the chat to a larger modal view for better focus"}),`
`,e.jsx(t.li,{children:"Built-in gradient theming and visual polish"}),`
`,e.jsx(t.li,{children:"Standard embedded chat behavior without custom container logic"}),`
`,e.jsx(t.li,{children:"A component that seamlessly transitions between embedded and modal states"}),`
`,e.jsx(t.li,{children:'A component that "just works" out of the box'}),`
`]}),`
`,e.jsxs(t.p,{children:["For more complex compositions or custom containers, consider using the atomic ",e.jsx(t.code,{children:"ai-gradient-container"}),", ",e.jsx(t.code,{children:"ai-modal"}),", and ",e.jsx(t.code,{children:"ai-chat-interface"})," components directly."]}),`
`,e.jsx(t.h2,{id:"usage-patterns",children:"Usage Patterns"}),`
`,e.jsx(t.h3,{id:"embedded-mode-default",children:"Embedded Mode (Default)"}),`
`,e.jsxs(t.p,{children:["The component renders as an embedded chat interface within the ",e.jsx(t.code,{children:"ai-gradient-container"}),", perfect for inline page content. Users can expand to modal view using the expand button in the chat header."]}),`
`,e.jsx(t.h3,{id:"modal-mode-expanded",children:"Modal Mode (Expanded)"}),`
`,e.jsxs(t.p,{children:["When expanded, the chat interface moves to a modal overlay powered by ",e.jsx(t.code,{children:"ai-modal"}),", providing a focused chat experience. The modal includes minimize functionality to return to embedded mode."]}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(s,{})]})}function le(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{le as default};

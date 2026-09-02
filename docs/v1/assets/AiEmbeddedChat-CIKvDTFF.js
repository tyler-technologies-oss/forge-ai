import{j as e,M as r,T as d}from"./blocks-DVOqpP8H.js";import{useMDXComponents as o}from"./index-t9llu-Gf.js";import{C as s}from"./CustomArgTypes-CUoWFSvL.js";import{A as a}from"./AiEmbeddedChat.stories-BI57esbC.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CMrRvUvX.js";import"./utils-BiNMEL_Y.js";import"./custom-element-UsVr97OX.js";import"./property-QGRfNHL6.js";import"./class-map-BKDB7sSQ.js";import"./if-defined-DHt2KXOo.js";import"./ref-BY6Vyj7F.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-CTc-XLdp.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-DGdlZ7T5.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-BP5Browv.js";import"./ai-spinner-Bx6d6WT6.js";import"./tooltip-LXXh0UOH.js";import"./overlay-GUKprEb7.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-chat-header-DSM_K5as.js";import"./ai-icon-H39y9dMV.js";import"./ai-gradient-container-DIUMC8Ne.js";import"./ai-dropdown-menu-FFpeK-Mt.js";import"./query-assigned-nodes-CKxVThWi.js";import"./popover-ChcxWc5U.js";import"./ai-dropdown-menu-item-CLjPJgC_.js";import"./ai-modal-CgWV1Zw-.js";import"./ai-agent-info-CYSKNNcp.js";import"./ai-agent-selector-Cl1v7wAs.js";import"./ai-chat-interface-dd4noILU.js";import"./ai-prompt-DrcpaA9J.js";import"./ai-conversations-panel-PZFcFAgU.js";import"./ai-edit-thread-4XIAgKeN.js";import"./ai-file-picker-B5q_l1-g.js";import"./ai-message-thread-C83tVUlV.js";import"./ai-response-message-toolbar-DZmyH8uS.js";import"./ai-thinking-indicator-D6sKnIXS.js";import"./ai-client-message-BnPPeXYo.js";import"./ai-empty-state-CGPrbDYx.js";import"./ai-error-message-D6U-084Y.js";import"./ai-response-message-DhF-XEif.js";import"./ai-user-message-Gxslol3q.js";import"./ai-user-message-toolbar-CYWedd92.js";import"./ai-suggestions-VPbUdTpD.js";import"./ai-voice-input-d3U_0Sn9.js";import"./mock-adapter-BpgeerXX.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function de(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{de as default};

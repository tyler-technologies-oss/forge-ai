import{j as e,M as r,T as d}from"./blocks-hFGDi8a3.js";import{useMDXComponents as o}from"./index-BRaLkUd4.js";import{C as s}from"./CustomArgTypes-DbntymZ0.js";import{A as a}from"./AiEmbeddedChat.stories-bLlAtnLq.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-KGBrpkIK.js";import"./custom-element-UsVr97OX.js";import"./property-BrNOBJsK.js";import"./base-DTUdKVvG.js";import"./if-defined-BRZutZYD.js";import"./ref-C_NepP5M.js";import"./class-map-Cj4OHHXc.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-Bxv0e0Bz.js";import"./mock-adapter-CGsAFG5D.js";import"./utils-B0W8KtS_.js";import"./ai-attachment-BnLxKm8A.js";import"./ai-spinner-YFwWckx1.js";import"./tooltip-mjH3BvN9.js";import"./overlay-yC3iEjX2.js";import"./ai-chat-header-Bsswwnyw.js";import"./ai-icon-B5YfOTPm.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-PP8MvqDh.js";import"./ai-dropdown-menu-D81DZh3I.js";import"./query-assigned-elements-3D_WHrDR.js";import"./popover-CMsMHwde.js";import"./ai-dropdown-menu-item-B3sUfDyx.js";import"./ai-modal-30kZiD40.js";import"./ai-agent-info-HyPDkmNh.js";import"./ai-chat-interface-DBW3Kyqs.js";import"./ai-file-picker-BHtHs7lE.js";import"./ai-message-thread-CKGIVvdZ.js";import"./ai-response-message-toolbar-DPyzOUBT.js";import"./ai-empty-state-Dc8ZfeBx.js";import"./ai-error-message-c8Kw51xB.js";import"./ai-response-message-COFC2vwi.js";import"./ai-thinking-indicator-BVhwVWsX.js";import"./ai-user-message-e4tqV6Ol.js";import"./ai-user-message-toolbar-uTVB8tPO.js";import"./ai-prompt-DRIeivbP.js";import"./ai-suggestions-h8aD6upo.js";import"./ai-voice-input-ViYrMmfu.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function $(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{$ as default};

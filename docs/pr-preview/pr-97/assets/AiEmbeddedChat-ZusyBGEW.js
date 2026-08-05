import{j as e,M as r,T as d}from"./blocks-CDruEe6C.js";import{useMDXComponents as o}from"./index-8zN2A5qD.js";import{C as s}from"./CustomArgTypes-Cuy31iXB.js";import{A as a}from"./AiEmbeddedChat.stories-DFjlf3CO.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BU0qbW8_.js";import"./utils-CMD24z5I.js";import"./custom-element-UsVr97OX.js";import"./property-jRf143t2.js";import"./class-map-Bg05esO9.js";import"./if-defined-BM8MtdYj.js";import"./ref-obwCGz03.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-D7bO5MWP.js";import"./mock-adapter-DbkpGE97.js";import"./markdown-BZ_ChyzU.js";import"./ai-chatbot-D9pb9dyb.js";import"./ai-attachment-CgVDC_sm.js";import"./ai-spinner-BdNuRWBS.js";import"./tooltip-CCWqnKrI.js";import"./overlay-4qc19BKt.js";import"./floating-ui.dom-alButkyJ.js";import"./ai-chat-header-w4J60qOf.js";import"./ai-icon-CBqQm4Iy.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DRzp4g5a.js";import"./ai-dropdown-menu-DQLuqXJG.js";import"./query-assigned-nodes-DeRjluGE.js";import"./popover-D2XTFUOu.js";import"./ai-dropdown-menu-item-PjNIx_QH.js";import"./ai-modal-DxVZt6i-.js";import"./ai-agent-info-DXEsZvVg.js";import"./ai-agent-selector-B-OdgaKk.js";import"./ai-chat-interface-BxIn2UzM.js";import"./ai-prompt-ZoPe6jQl.js";import"./ai-conversations-panel-C6Z45JrU.js";import"./ai-edit-thread-C1DddSD4.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-Biv_7Tn0.js";import"./ai-message-thread-CKwPThYl.js";import"./ai-response-message-toolbar-C8Vxnv9A.js";import"./ai-thinking-indicator-BrTpvpYQ.js";import"./ai-empty-state-BW2EYgAq.js";import"./ai-error-message-BqXLs5kq.js";import"./ai-response-message-B-wRRFaX.js";import"./ai-user-message-B3Ee38hf.js";import"./ai-user-message-toolbar--K4a17MB.js";import"./ai-suggestions-FckrQ9m3.js";import"./ai-voice-input-CRNmCTY9.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function re(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{re as default};

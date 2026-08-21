import{j as e,M as r,T as d}from"./blocks-h4-PBAW1.js";import{useMDXComponents as o}from"./index-BjXugjM0.js";import{C as s}from"./CustomArgTypes-CzUX8J-m.js";import{A as a}from"./AiEmbeddedChat.stories-Pp5rGvei.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DiOCH7Dj.js";import"./utils-DkDZKAQP.js";import"./custom-element-UsVr97OX.js";import"./property-B0F2CeGY.js";import"./class-map-dvwAE95Y.js";import"./if-defined-gI1lzchr.js";import"./ref-DgWQRCQ7.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-VJAtgYHz.js";import"./mock-adapter-ph_xQ6k2.js";import"./markdown-CtLA8yAF.js";import"./ai-chatbot-CYeSskXT.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-CoSBFMO8.js";import"./ai-spinner-BQ73pPV9.js";import"./tooltip-C7ZPBmgU.js";import"./overlay-WkS8ATbn.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-chat-header-Dq4AC9JO.js";import"./ai-icon-CTg_hCHt.js";import"./ai-gradient-container-BxfRMC7S.js";import"./ai-dropdown-menu-C__67-my.js";import"./query-assigned-nodes-C1LoiU-7.js";import"./popover-BYFrxvpx.js";import"./ai-dropdown-menu-item-C9wGXfVG.js";import"./ai-modal-Dpj2sVQw.js";import"./ai-agent-info-eAzT3svC.js";import"./ai-agent-selector-y4kVowun.js";import"./ai-chat-interface-CCfb5yhA.js";import"./ai-prompt-B4mox89Q.js";import"./ai-conversations-panel-BQH_9ceB.js";import"./ai-edit-thread-cZSVIDl_.js";import"./ai-file-picker-B_82MM-o.js";import"./ai-message-thread-DLb8FPqC.js";import"./ai-response-message-toolbar-Bku-lA6p.js";import"./ai-thinking-indicator-BC8bkXZn.js";import"./ai-empty-state-B2idIC9j.js";import"./ai-error-message-Dth-O15t.js";import"./ai-response-message-SykWk7qj.js";import"./ai-user-message-C3QFQhX8.js";import"./ai-user-message-toolbar-B6uCF77o.js";import"./ai-suggestions-DGEDYS6q.js";import"./ai-voice-input-BJLUEodR.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function oe(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{oe as default};

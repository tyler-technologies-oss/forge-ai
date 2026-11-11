import{j as e,M as r,T as d}from"./blocks-DmhomI2R.js";import{useMDXComponents as o}from"./index-CGea2NPx.js";import{C as s}from"./CustomArgTypes-C9rVQ20c.js";import{A as a}from"./AiEmbeddedChat.stories-BOZPK3cy.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C-IA6-Hz.js";import"./utils-DI2oIrVv.js";import"./custom-element-UsVr97OX.js";import"./property-le6t98HW.js";import"./query-gKpr0UfE.js";import"./class-map-DSPhrvha.js";import"./if-defined-BKcD6SzD.js";import"./ref-DZsC5aA2.js";import"./when-CI7b_ccM.js";import"./ai-canvas-P8IZx1Tt.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-BpbyLSgL.js";import"./context-provider-NnzmXA_k.js";import"./context-consumer-CIN_xSLl.js";import"./ai-message-thread-CUGHhueu.js";import"./ai-response-message-toolbar-BcZ_N_Os.js";import"./tooltip-CT4IMBKx.js";import"./overlay-QxeQPrBV.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./popover-Cx0tRykh.js";import"./ai-artifact-card-DsRjfla_.js";import"./ai-spinner-YRthPADe.js";import"./ai-thinking-indicator-Dub-qXfD.js";import"./ai-client-message-C1tHFyOV.js";import"./ai-empty-state-Dx54Mu78.js";import"./ai-error-message-Baj6Wd4q.js";import"./query-assigned-nodes-HXzGWLGE.js";import"./ai-response-message-D6QTQ5zk.js";import"./ai-user-message-rKtiGhtv.js";import"./ai-user-message-toolbar-C3vQBXnl.js";import"./ai-chat-header-B5yMMl5j.js";import"./ai-icon-XwHdEf59.js";import"./utils-DIqd7FWX.js";import"./ai-gradient-container-HBCTbc7n.js";import"./ai-dropdown-menu-DMqXFUkc.js";import"./query-assigned-elements-C5Lta-hz.js";import"./ai-dropdown-menu-item-D_z8d1Uh.js";import"./ai-modal-DKT2n6GH.js";import"./ai-agent-info-C-pqloUR.js";import"./ai-agent-selector-DgZzHClh.js";import"./ai-chatbot-BZsj2EEe.js";import"./ai-attachment-Cg7NQI6_.js";import"./ai-chat-interface-nup8W0G9.js";import"./ai-prompt-B9t0Y82u.js";import"./ai-conversations-panel-BsfESJRg.js";import"./ai-edit-thread-D0gvS5sn.js";import"./ai-file-picker-C7EoMc_P.js";import"./ai-suggestions-Cg-HJTOd.js";import"./ai-voice-input-s9Z6rJqs.js";import"./mock-adapter-TdYMXPFt.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

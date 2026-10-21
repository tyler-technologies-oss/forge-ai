import{j as e,M as r,T as d}from"./blocks-BRTFfZTW.js";import{useMDXComponents as o}from"./index-CFIrZNWx.js";import{C as s}from"./CustomArgTypes-Di7JqghJ.js";import{A as a}from"./AiEmbeddedChat.stories-B7KYMro6.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B0FAvQxw.js";import"./utils-CIN-DptI.js";import"./custom-element-UsVr97OX.js";import"./property-BcVae0nA.js";import"./query-Dco82qd-.js";import"./class-map-D0yJruiV.js";import"./if-defined-zmP3W5JS.js";import"./ref-DFNpC9p1.js";import"./when-CI7b_ccM.js";import"./ai-canvas-CsvbbqJl.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-B4bbHXKC.js";import"./context-provider-NnzmXA_k.js";import"./context-consumer-CIN_xSLl.js";import"./ai-message-thread-D1kZ8AFx.js";import"./ai-response-message-toolbar-BWEspZgZ.js";import"./tooltip-qm9lEQhw.js";import"./overlay-DCVAKiV0.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./popover-Cz64sAjV.js";import"./ai-artifact-card-vUBlxPHx.js";import"./ai-spinner-B_sGbXxh.js";import"./ai-thinking-indicator-ClZcSSOx.js";import"./ai-client-message-BeWl6SBf.js";import"./ai-empty-state-DVH3aBPU.js";import"./ai-error-message-D9c5BfJ5.js";import"./query-assigned-nodes-XGC4ql_x.js";import"./ai-response-message-NAUW8wnz.js";import"./ai-user-message-DLhd2oZf.js";import"./ai-user-message-toolbar-CgPUB3q7.js";import"./ai-chat-header-COTs6uov.js";import"./ai-icon-OdUJk7Rx.js";import"./utils-DIqd7FWX.js";import"./ai-gradient-container-mNAtvNn7.js";import"./ai-dropdown-menu-aNWOG36H.js";import"./query-assigned-elements-CqfNGEkr.js";import"./ai-dropdown-menu-item-IySpgsAM.js";import"./ai-modal-CJbTkz6N.js";import"./ai-agent-info-n_qJFaVg.js";import"./ai-agent-selector-BbV73Fje.js";import"./ai-chatbot-CBePH4St.js";import"./ai-attachment-SMUIAPeW.js";import"./ai-chat-interface-C-g4kQtR.js";import"./ai-prompt-4sWSCp-e.js";import"./ai-conversations-panel-BtiwqAcX.js";import"./ai-edit-thread-BzS5B1s7.js";import"./ai-file-picker-DJvRBhBU.js";import"./ai-suggestions-BzPsUb_z.js";import"./ai-voice-input-rXwPZhne.js";import"./mock-adapter-BpXd5o7R.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

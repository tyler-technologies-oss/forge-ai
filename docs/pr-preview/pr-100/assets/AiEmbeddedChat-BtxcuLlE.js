import{j as e,M as r,T as d}from"./blocks-Cw4qwG11.js";import{useMDXComponents as o}from"./index-b0gRJ5Z4.js";import{C as s}from"./CustomArgTypes-C0ravzFr.js";import{A as a}from"./AiEmbeddedChat.stories-C5nFpDmH.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-KGJDsxB0.js";import"./utils-M4WhRPVa.js";import"./custom-element-UsVr97OX.js";import"./property-DNEaXqo9.js";import"./query-Dc_gICXE.js";import"./class-map-CWt6gxkh.js";import"./if-defined-X1CVUfgS.js";import"./ref-B3abCnr6.js";import"./when-CI7b_ccM.js";import"./ai-canvas-BCkIp8G7.js";import"./provide-RUGHcQ60.js";import"./consume-BHVW6YKk.js";import"./ai-message-thread-BTcXTRNc.js";import"./utils-DTEt2qv1.js";import"./ai-response-message-toolbar-BQioRWfN.js";import"./tooltip-0t-tRitu.js";import"./overlay-QVYEApzp.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./popover-CenIWkrz.js";import"./ai-artifact-card-DPDWk4wR.js";import"./ai-spinner-DcYtbmsx.js";import"./ai-thinking-indicator-Df_gD2P0.js";import"./ai-empty-state-CPSDaF9n.js";import"./ai-client-message-WAugr0Jk.js";import"./ai-error-message-BPKqAqxe.js";import"./query-assigned-nodes-AePoqt1W.js";import"./ai-response-message-Bzcq_NSP.js";import"./ai-user-message-UYbSdrMw.js";import"./ai-user-message-toolbar-DUF9zWNA.js";import"./agent-adapter-CiODA7QC.js";import"./ai-chat-header-FHOIZmEu.js";import"./ai-icon-Cynh0Ul0.js";import"./utils-DIqd7FWX.js";import"./ai-gradient-container-BZKYNfxK.js";import"./ai-dropdown-menu-BtUIY3oh.js";import"./query-assigned-elements-F0ABw4lw.js";import"./ai-dropdown-menu-item-UpBUTyyW.js";import"./ai-modal-BBHZoAhX.js";import"./ai-agent-info-ekk1GiKP.js";import"./ai-agent-selector-B6wGAGr3.js";import"./ai-chatbot-DENeobx4.js";import"./ai-attachment-DKNc0rPd.js";import"./ai-chat-interface-EUQ_naCi.js";import"./ai-prompt-DUCnkW8e.js";import"./ai-conversations-panel-L8_lC1fC.js";import"./ai-edit-thread-BBlWPyoV.js";import"./ai-file-picker-BD4mYxBi.js";import"./ai-suggestions-B7RROxuV.js";import"./ai-voice-input-DYB9wZi3.js";import"./mock-adapter-M1NsMV0N.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

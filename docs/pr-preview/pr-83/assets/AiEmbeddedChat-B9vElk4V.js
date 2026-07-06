import{j as e,M as r,T as d}from"./blocks-DlBdzCoP.js";import{useMDXComponents as o}from"./index-BqDqhnd8.js";import{C as s}from"./CustomArgTypes-A9r6HFQF.js";import{A as a}from"./AiEmbeddedChat.stories-C7qXukPl.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Dp0GADNh.js";import"./utils-B5D7Nk_P.js";import"./custom-element-UsVr97OX.js";import"./property-BzAhKD2C.js";import"./class-map-DvcBAVKi.js";import"./if-defined-DTkRxWUh.js";import"./ref-ObUI66tn.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-DFieK6aw.js";import"./mock-adapter-Dv6Maef-.js";import"./utils-YPQNW8lZ.js";import"./ai-chatbot-DH4CJuhn.js";import"./ai-attachment-CKjM0z09.js";import"./ai-spinner-BSr3yGv8.js";import"./tooltip-BsvWpolw.js";import"./overlay-C8dBgaI2.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-fCP8UsJM.js";import"./ai-icon-DzOuC4BR.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CbSc8iqt.js";import"./ai-dropdown-menu-DK1_6gir.js";import"./query-assigned-nodes-DgE2mQ6_.js";import"./popover-B40ldSwg.js";import"./ai-dropdown-menu-item-DQ2NI7V9.js";import"./ai-modal-D3VFAM_0.js";import"./ai-agent-info-jNBNCLmJ.js";import"./ai-agent-selector-s9IFu2kz.js";import"./ai-chat-interface-q0H7oJ4i.js";import"./ai-prompt-DUIFsu2t.js";import"./ai-conversations-panel-DF_oa0iv.js";import"./ai-edit-thread-DrQNkXvO.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-C12QHkHV.js";import"./ai-message-thread-CeEKBd42.js";import"./ai-response-message-toolbar-BxGjb8OO.js";import"./ai-empty-state-SCqAG4Ca.js";import"./ai-error-message-2cvxC5BT.js";import"./ai-response-message-ZBzSDSt_.js";import"./ai-thinking-indicator-DI5X_RR_.js";import"./ai-user-message-BASIjpPP.js";import"./ai-user-message-toolbar-Dn2ThBAV.js";import"./ai-suggestions-BhjfvBIk.js";import"./ai-voice-input-zSCaU4EW.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

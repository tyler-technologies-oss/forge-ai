import{j as e,M as r,T as d}from"./blocks-BYZcTz10.js";import{useMDXComponents as o}from"./index-RBU1lV0J.js";import{C as s}from"./CustomArgTypes-CINl-ndf.js";import{A as a}from"./AiEmbeddedChat.stories-pisCJYKF.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DYSaFelY.js";import"./utils-DGoFphpS.js";import"./custom-element-UsVr97OX.js";import"./property-DkFqThWM.js";import"./query-Dp9XAxQR.js";import"./class-map-kByeKa_n.js";import"./if-defined-DH2E4TDh.js";import"./ref-bUehiFAX.js";import"./when-CI7b_ccM.js";import"./ai-canvas-CDaPtOg-.js";import"./provide-RUGHcQ60.js";import"./consume-BHVW6YKk.js";import"./ai-message-thread-vIa1E2kF.js";import"./utils-BRoM8yNS.js";import"./ai-response-message-toolbar-LbzA22Bi.js";import"./tooltip-BlTgUL6G.js";import"./overlay-CVsvSJBe.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./popover-Bi1s3AUw.js";import"./ai-artifact-card-C03RMoP-.js";import"./ai-spinner-D9H1n32d.js";import"./ai-thinking-indicator-SISBpi14.js";import"./ai-empty-state-Cs0blS8-.js";import"./ai-client-message-HVbZRQg-.js";import"./ai-error-message-Bjnw0-Id.js";import"./query-assigned-nodes-Ce0C7lls.js";import"./ai-response-message-wlghvFlR.js";import"./ai-user-message-Dq8qaUZ9.js";import"./ai-user-message-toolbar-Dg9dSk6A.js";import"./agent-adapter-CiODA7QC.js";import"./ai-chat-header-D9rliu_W.js";import"./ai-icon-Br_Z5HN7.js";import"./utils-DIqd7FWX.js";import"./ai-gradient-container-DJNzp8E5.js";import"./ai-dropdown-menu-B8je-9Sd.js";import"./query-assigned-elements-Bmda_lBl.js";import"./ai-dropdown-menu-item-Dz1JOG7x.js";import"./ai-modal-BFFKKtB6.js";import"./ai-agent-info-LDKpp5xR.js";import"./ai-agent-selector-Be1Yty9X.js";import"./ai-chatbot-A9D-6QP8.js";import"./ai-attachment-C1ZHMn2W.js";import"./ai-chat-interface-bMTJaJzB.js";import"./ai-prompt-bYTsxnub.js";import"./ai-conversations-panel-1NI6IWDY.js";import"./ai-edit-thread-BGUxgRSd.js";import"./ai-file-picker-CX1nU8Gb.js";import"./ai-suggestions-DIhPjnEO.js";import"./ai-voice-input-CYHj0qLq.js";import"./mock-adapter-BkYea8t_.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

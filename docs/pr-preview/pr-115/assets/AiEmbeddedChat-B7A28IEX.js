import{j as e,M as r,T as d}from"./blocks-CyGRmqos.js";import{useMDXComponents as o}from"./index-pBqp21sU.js";import{C as s}from"./CustomArgTypes-if-oAoKh.js";import{A as a}from"./AiEmbeddedChat.stories-CKfosQEU.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-HRf4U2o3.js";import"./utils-DUh4HCba.js";import"./custom-element-UsVr97OX.js";import"./property-B2ef_bsN.js";import"./query-DhOo42JF.js";import"./class-map-C52KeIj6.js";import"./if-defined-BzECiych.js";import"./ref-COF0aLZX.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-D9sWv0YN.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-B4bbHXKC.js";import"./ai-chatbot-BPwUfYAD.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-BHI-RteN.js";import"./ai-spinner-_BNS5Nlo.js";import"./tooltip-CI4Xxz__.js";import"./overlay-CA7whSQ8.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-chat-header-DvUwPl13.js";import"./ai-icon-DfyzzV1Y.js";import"./ai-gradient-container-5LOFxwLB.js";import"./ai-dropdown-menu-BHUdB6Th.js";import"./query-assigned-elements-D0ANyHVz.js";import"./popover-D3ipgP9I.js";import"./query-assigned-nodes-yxrr_BWY.js";import"./ai-dropdown-menu-item-wwl7zcHL.js";import"./ai-modal-BPztCUwd.js";import"./ai-agent-info-DfGS0ce-.js";import"./ai-agent-selector-ChU03XHq.js";import"./ai-chat-interface-WfIdKwTU.js";import"./ai-prompt-C2j0dNBF.js";import"./ai-conversations-panel-BifYGucb.js";import"./ai-edit-thread-AUWk2m6e.js";import"./ai-error-message-BiGv1dwO.js";import"./ai-file-picker-Cn7e2y4m.js";import"./ai-message-thread-J07fUF8V.js";import"./ai-response-message-toolbar-BeayXO3s.js";import"./ai-thinking-indicator-Db-68Z_C.js";import"./ai-client-message-HTPnHuuk.js";import"./ai-empty-state-jaBQ5tVn.js";import"./ai-response-message-BXvWGe2L.js";import"./ai-user-message-ByxkxCmi.js";import"./ai-user-message-toolbar-BXRvazDv.js";import"./ai-suggestions-Bdi1PK7D.js";import"./ai-voice-input-BX1fBPgM.js";import"./mock-adapter-D0dkxTL5.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function ae(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{ae as default};

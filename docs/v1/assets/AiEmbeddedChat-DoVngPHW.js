import{j as e,M as r,T as d}from"./blocks-Ddm2RQt4.js";import{useMDXComponents as o}from"./index-CyiZQd9W.js";import{C as s}from"./CustomArgTypes-CgS1zPdm.js";import{A as a}from"./AiEmbeddedChat.stories-BBIgr-ao.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CpWj22c-.js";import"./utils-CvMRup6M.js";import"./custom-element-UsVr97OX.js";import"./property-CwXW5emX.js";import"./query-zZBZm4u8.js";import"./class-map-Bd9YGSNL.js";import"./if-defined-Cq1jXinw.js";import"./ref-BOXXD7cD.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-BNcrJ6DY.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-B4bbHXKC.js";import"./ai-chatbot-BAgS0UbZ.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-4geyuZjm.js";import"./ai-spinner-C4wUF9O7.js";import"./tooltip-CkwClnJV.js";import"./overlay-CwtBwcjp.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-chat-header-DNv10bJ-.js";import"./ai-icon-C6LMSN2V.js";import"./ai-gradient-container-DZXAlPrz.js";import"./ai-dropdown-menu-DNukx1FV.js";import"./query-assigned-elements-B9U699kH.js";import"./popover-DLCYtBV2.js";import"./query-assigned-nodes-P1At6Jaj.js";import"./ai-dropdown-menu-item-CrVsFIRO.js";import"./ai-modal-cDjBqprh.js";import"./ai-agent-info-Bl8c3fJZ.js";import"./ai-agent-selector-C1ZmXIh2.js";import"./ai-chat-interface-C8bvq2fZ.js";import"./ai-prompt-C99rNEG6.js";import"./ai-conversations-panel-DsF9Zrsz.js";import"./ai-edit-thread-EquOj7Md.js";import"./ai-error-message-BxwNDPFf.js";import"./ai-file-picker-B2cqMCo2.js";import"./ai-message-thread-DpIThFOd.js";import"./ai-response-message-toolbar-D3H53co_.js";import"./ai-thinking-indicator-DRsNkiLJ.js";import"./ai-client-message-BCO0fqNa.js";import"./ai-empty-state-CNRk4d0J.js";import"./ai-response-message-CMJUQPm8.js";import"./ai-user-message-CqLQiSk2.js";import"./ai-user-message-toolbar-RQzAxHlm.js";import"./ai-suggestions-BbIB7DPW.js";import"./ai-voice-input-CV_blu--.js";import"./mock-adapter-D0dkxTL5.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

import{j as e,M as r,T as d}from"./blocks-BXdAqhM4.js";import{useMDXComponents as o}from"./index-D8Wl0gln.js";import{C as s}from"./CustomArgTypes-CGwAoTko.js";import{A as a}from"./AiEmbeddedChat.stories-DxgC4Du7.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B2iIPFms.js";import"./utils-Dc-_7Ywc.js";import"./custom-element-UsVr97OX.js";import"./property-De7pFSXt.js";import"./query-Dqn61YSF.js";import"./class-map-2BfWKpIT.js";import"./if-defined-PssoKMmO.js";import"./ref-CGaQPDJ6.js";import"./when-CI7b_ccM.js";import"./ai-canvas-ldwguwcS.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-pfIOHICc.js";import"./context-provider-NnzmXA_k.js";import"./context-consumer-CIN_xSLl.js";import"./ai-message-thread-B-Layra-.js";import"./ai-response-message-toolbar-BKzakm2o.js";import"./tooltip-Dq656zF8.js";import"./overlay-CTn02HG_.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./popover-BSFCTzJf.js";import"./ai-artifact-card-xOsoSJ1c.js";import"./ai-spinner-L2_xbDtg.js";import"./ai-thinking-indicator-SkIhQdgs.js";import"./ai-client-message-BnAurKKy.js";import"./ai-empty-state-iR-y05I9.js";import"./ai-error-message-CLNhY57w.js";import"./query-assigned-nodes-rK0fzJJV.js";import"./ai-response-message-C9kcIxeK.js";import"./ai-user-message-DLOdKByt.js";import"./ai-user-message-toolbar-C_R7timq.js";import"./ai-chat-header-DUqE_QCd.js";import"./ai-icon-BT3VehvF.js";import"./utils-DIqd7FWX.js";import"./ai-gradient-container-B9D2cQiF.js";import"./ai-dropdown-menu-BSohdQMa.js";import"./query-assigned-elements-CC18lbKK.js";import"./ai-dropdown-menu-item-CaSd2Hn1.js";import"./ai-modal-BhQp6dc8.js";import"./ai-agent-info-CKI1FDmN.js";import"./ai-agent-selector-2LFpxz42.js";import"./ai-chatbot-B6HE7nBB.js";import"./ai-attachment-CL6WRLNe.js";import"./ai-chat-interface-Bmuc7ry6.js";import"./ai-prompt-GV7h7WkK.js";import"./ai-conversations-panel-DjWNlmdB.js";import"./ai-edit-thread-BGgCz7MH.js";import"./ai-file-picker-DnA0Sjk2.js";import"./ai-suggestions-CBbcgOeU.js";import"./ai-voice-input-q_eUNLj3.js";import"./mock-adapter-tBtA3Vjv.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

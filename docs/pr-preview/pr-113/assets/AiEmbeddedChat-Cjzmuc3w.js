import{j as e,M as r,T as d}from"./blocks-CljgmeqY.js";import{useMDXComponents as o}from"./index-LyQ7glNB.js";import{C as s}from"./CustomArgTypes-evKtraF8.js";import{A as a}from"./AiEmbeddedChat.stories-BXzL72Ge.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-2YRMZZJu.js";import"./utils-BX4gMDEK.js";import"./custom-element-UsVr97OX.js";import"./property-BoEpMLLw.js";import"./class-map-DqZV1JtM.js";import"./if-defined-s9LFKYVM.js";import"./ref--LeVE9LM.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-Djfs0N5l.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-lk6wAi_S.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-89yYnTHY.js";import"./ai-spinner-9zkLa4RO.js";import"./tooltip-DzgvmAPo.js";import"./overlay-c4eNp3CY.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-chat-header-DvpeKLlj.js";import"./ai-icon-B30nF0RM.js";import"./ai-gradient-container-UdtvPBWS.js";import"./ai-dropdown-menu-B1Rykk3B.js";import"./query-assigned-nodes-C3is7UuH.js";import"./popover-AUFHiq3c.js";import"./ai-dropdown-menu-item-BAvY36jQ.js";import"./ai-modal-t6Hychff.js";import"./ai-agent-info-BNq34y7h.js";import"./ai-agent-selector-BXqL1ZIG.js";import"./ai-chat-interface-CqkRKHVm.js";import"./ai-prompt-DP-frT8L.js";import"./ai-conversations-panel-DXTDc7sy.js";import"./ai-edit-thread-CaWOH-qf.js";import"./ai-file-picker-BuH2LAGQ.js";import"./ai-message-thread-BnAqodJ7.js";import"./ai-response-message-toolbar-D-tGACPQ.js";import"./ai-thinking-indicator-CHAhk7Cx.js";import"./ai-client-message-DIt5k76r.js";import"./ai-empty-state-CdElkJmS.js";import"./ai-error-message-xAhNo7LD.js";import"./ai-response-message-CraXlDfk.js";import"./ai-user-message-4BXZf5NG.js";import"./ai-user-message-toolbar-C6E4OUxc.js";import"./ai-suggestions-RNcZy9qB.js";import"./ai-voice-input-BPuKWlIW.js";import"./mock-adapter-BpgeerXX.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function de(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{de as default};

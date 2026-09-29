import{j as e,M as r,T as d}from"./blocks-DJ3sY-kS.js";import{useMDXComponents as o}from"./index-BebnpE3h.js";import{C as s}from"./CustomArgTypes-CmLM3LYE.js";import{A as a}from"./AiEmbeddedChat.stories-DFdClmyv.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CsRSgPVx.js";import"./utils-ByXa_qZf.js";import"./custom-element-UsVr97OX.js";import"./property-DkwU8VYm.js";import"./query-BIaN0jjP.js";import"./class-map-DgHf1H92.js";import"./if-defined-t_EhrTPt.js";import"./ref-CZMKxvsJ.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-43c_NviE.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-B4bbHXKC.js";import"./ai-chatbot-CWDdxAuf.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-J_ezucJy.js";import"./ai-spinner-8_V9gCAa.js";import"./tooltip-Czm3NlJe.js";import"./overlay-DmgGx83i.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-chat-header-Wz2R-iM1.js";import"./ai-icon-BWU-zE7E.js";import"./ai-gradient-container-Btr5blvZ.js";import"./ai-dropdown-menu-DgvIwM7i.js";import"./query-assigned-elements-DXyApNBv.js";import"./popover-CMEuDf-J.js";import"./query-assigned-nodes--6ULkBDq.js";import"./ai-dropdown-menu-item-D1y8kQ5n.js";import"./ai-modal-DOBLNO11.js";import"./ai-agent-info-BpDr5R7I.js";import"./ai-agent-selector-CyyzFk4w.js";import"./ai-chat-interface-DgkZtpJ8.js";import"./ai-prompt-CQ4U8Hx-.js";import"./ai-conversations-panel-C9ZWSpVa.js";import"./ai-edit-thread-CWbPBd1x.js";import"./ai-error-message-BHgcbyAy.js";import"./ai-file-picker-DlSxzDjI.js";import"./ai-message-thread-Byo54bh8.js";import"./ai-response-message-toolbar-Cw6s5pAk.js";import"./ai-thinking-indicator-BuZPMrsh.js";import"./ai-client-message-mEOhB7yg.js";import"./ai-empty-state-BkylkgVu.js";import"./ai-response-message-BWRNln1A.js";import"./ai-user-message-DQUW_VQe.js";import"./ai-user-message-toolbar-BMsVIgHD.js";import"./ai-suggestions-CstZ3ed-.js";import"./ai-voice-input-B1V8sZJ0.js";import"./mock-adapter-D0dkxTL5.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

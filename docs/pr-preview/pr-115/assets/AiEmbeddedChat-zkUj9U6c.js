import{j as e,M as r,T as d}from"./blocks-BHnrd8dB.js";import{useMDXComponents as o}from"./index-AexSIA4C.js";import{C as s}from"./CustomArgTypes-aBqXvnXI.js";import{A as a}from"./AiEmbeddedChat.stories-Dtf7n9Wj.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-D9OWRBHb.js";import"./utils-BtNL0iZM.js";import"./custom-element-UsVr97OX.js";import"./property-CmuU5QQg.js";import"./state-BDhzG9rV.js";import"./if-defined-BrQsoYbm.js";import"./ref-C_L6tUxX.js";import"./class-map-CMCRj_XZ.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-Ds_pintQ.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-DecXx7RE.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-Cu2kuhBN.js";import"./ai-spinner-B1kol2XU.js";import"./tooltip-BM6wspih.js";import"./query-DmKfqgUS.js";import"./overlay-BZrKvIri.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-chat-header-D1s7SvoJ.js";import"./ai-icon-BpInNiOe.js";import"./ai-gradient-container-BAYZphHg.js";import"./ai-dropdown-menu-CFc3mfut.js";import"./query-assigned-elements-qCVb6420.js";import"./popover-CaLlRn_0.js";import"./query-assigned-nodes-BdZEJq_N.js";import"./ai-dropdown-menu-item-CzhSZoSG.js";import"./ai-modal-mqX_UQhc.js";import"./ai-agent-info-Dzu1a2ct.js";import"./ai-agent-selector-BcdV2Azs.js";import"./ai-chat-interface-CtFe-6LT.js";import"./ai-prompt-BQUU8dAr.js";import"./ai-conversations-panel-D0xs7GTP.js";import"./ai-edit-thread-Cs8MkgTb.js";import"./ai-error-message-By52ni75.js";import"./ai-file-picker-C9RcEC_f.js";import"./ai-message-thread-D3HQgbui.js";import"./ai-response-message-toolbar-BrzT7sf5.js";import"./ai-thinking-indicator-kLafgn6_.js";import"./ai-client-message-DQk8vDwm.js";import"./ai-empty-state-DlA3DOo-.js";import"./ai-response-message-BLDYRRnp.js";import"./ai-user-message-CDl6a0Ex.js";import"./ai-user-message-toolbar-C9Pv9rS4.js";import"./ai-suggestions-81tWUjN6.js";import"./ai-voice-input-C1M90KED.js";import"./mock-adapter-BpgeerXX.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function me(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{me as default};

import{j as e,M as r,T as d}from"./blocks-DP6pT7oX.js";import{useMDXComponents as o}from"./index-DnLa8hOl.js";import{C as s}from"./CustomArgTypes-D4vZjf10.js";import{A as a}from"./AiEmbeddedChat.stories-FVlqD9SF.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DWqIu4Sk.js";import"./utils-R5KNxOhk.js";import"./custom-element-UsVr97OX.js";import"./property-8r5sPkjn.js";import"./query-C7e3t810.js";import"./class-map-Bn7GXKR1.js";import"./if-defined-CeA9NAxq.js";import"./ref-CKPrdJ8B.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-DxOCeJhd.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-MXgt2iQL.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-BR72NFVL.js";import"./ai-spinner-DIBYBhNv.js";import"./tooltip-tIIm-Jz0.js";import"./overlay-DYR0TT5v.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-chat-header-Dw7_s8gr.js";import"./ai-icon-BFB7yN99.js";import"./ai-gradient-container-DM9EbWu2.js";import"./ai-dropdown-menu-JfjEL4ti.js";import"./query-assigned-elements-CfAGXkfV.js";import"./popover-CiBfzVB5.js";import"./query-assigned-nodes-Jpc1afho.js";import"./ai-dropdown-menu-item-BOG8tHTy.js";import"./ai-modal-BrqCFTCC.js";import"./ai-agent-info-D9JHmV9h.js";import"./ai-agent-selector-CQea-nlu.js";import"./ai-chat-interface-BOYnY76Q.js";import"./ai-prompt-B8AEUb25.js";import"./ai-conversations-panel-CIpNoPAE.js";import"./ai-edit-thread-8LY9s0h2.js";import"./ai-error-message-BGgMahn3.js";import"./ai-file-picker-CkFZuPvf.js";import"./ai-message-thread-D-huTDcu.js";import"./ai-response-message-toolbar-DnHAJwq6.js";import"./ai-thinking-indicator-rakyynRX.js";import"./ai-client-message-B4hxnZgE.js";import"./ai-empty-state-CGyjUQUC.js";import"./ai-response-message-sCoqKEpS.js";import"./ai-user-message-TPP9mT4a.js";import"./ai-user-message-toolbar-D-Sh728Q.js";import"./ai-suggestions-CCOvgx51.js";import"./ai-voice-input-Ddgh_uJJ.js";import"./mock-adapter-BpgeerXX.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

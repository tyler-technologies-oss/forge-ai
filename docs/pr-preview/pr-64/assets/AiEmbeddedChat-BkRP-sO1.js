import{j as e,M as r,T as d}from"./blocks-DzStIhGm.js";import{useMDXComponents as o}from"./index-C4UnUAiB.js";import{C as s}from"./CustomArgTypes-IW1mPs0Y.js";import{A as a}from"./AiEmbeddedChat.stories-bgDx4Ha9.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B0NQNGVo.js";import"./utils-BtZ_6oRD.js";import"./custom-element-UsVr97OX.js";import"./property-xWtNckDH.js";import"./base-Cd_fmXEx.js";import"./if-defined-CKo-ggUg.js";import"./ref-DrTNw50r.js";import"./class-map-C_R_nGT0.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-PK2W5D5t.js";import"./mock-adapter-uhjSnHDA.js";import"./utils-CX_NQepL.js";import"./ai-chatbot-BCtR5jfh.js";import"./ai-attachment-DrlZ07Df.js";import"./ai-spinner-CWcYuAB0.js";import"./tooltip-Dm_717O5.js";import"./overlay-D0vxknou.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-R1QJng16.js";import"./ai-icon-C_QBKE8c.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-wJqWKzem.js";import"./ai-dropdown-menu-Ci0YkJHV.js";import"./query-assigned-elements-DgCaSwxo.js";import"./popover-DAiYzUZF.js";import"./query-assigned-nodes-G_sXMAHW.js";import"./ai-dropdown-menu-item-BLYa9MuJ.js";import"./ai-modal-DNJB854V.js";import"./ai-agent-info-B22Pf07n.js";import"./ai-agent-selector-CwBL5zbX.js";import"./ai-chat-interface-gtgX9qeU.js";import"./ai-file-picker-DElVmTFw.js";import"./ai-message-thread-CJa9T2sM.js";import"./ai-response-message-toolbar-4cId3khQ.js";import"./ai-empty-state-Dkl-s0lF.js";import"./ai-error-message-DgvSUx22.js";import"./ai-response-message-DOoapu-l.js";import"./ai-thinking-indicator-Dn2Nmc1B.js";import"./ai-user-message-BIwE9jbQ.js";import"./ai-user-message-toolbar-D2-y7ktd.js";import"./ai-prompt-DyBE3VaG.js";import"./ai-suggestions-Cc-YJ_kI.js";import"./ai-voice-input-ClvLZYtw.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function oe(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{oe as default};

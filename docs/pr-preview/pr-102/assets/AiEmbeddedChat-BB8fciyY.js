import{j as e,M as r,T as d}from"./blocks-D1umRn_8.js";import{useMDXComponents as o}from"./index-CpqIG850.js";import{C as s}from"./CustomArgTypes-NF21T0Ou.js";import{A as a}from"./AiEmbeddedChat.stories-BB_9-Hg5.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CdSABX88.js";import"./utils-DhVEw7Vh.js";import"./custom-element-UsVr97OX.js";import"./property-DgrTWZVQ.js";import"./class-map-0lY7t7Dm.js";import"./if-defined-C68C9x5H.js";import"./ref-DYCEYLYO.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-DT2p4g2F.js";import"./mock-adapter-ph_xQ6k2.js";import"./markdown-CtLA8yAF.js";import"./ai-chatbot-D2wBEPZg.js";import"./ai-attachment-D2MKtZgv.js";import"./ai-spinner-CdP1Imhw.js";import"./tooltip-DTwrhp9o.js";import"./overlay-BGk7U-gf.js";import"./floating-ui.dom-alButkyJ.js";import"./ai-chat-header-M1-4hwpZ.js";import"./ai-icon-OMo42_pd.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-BTNUBIih.js";import"./ai-dropdown-menu-DA0PGKTx.js";import"./query-assigned-nodes-DNR0kJhW.js";import"./popover-Dx0CAzk_.js";import"./ai-dropdown-menu-item-CmyQN4xe.js";import"./ai-modal-CPejV7fN.js";import"./ai-agent-info-D80IPuF7.js";import"./ai-agent-selector-C4tIBrvv.js";import"./ai-chat-interface-CN9DBQ0v.js";import"./ai-prompt-CfRbJAhI.js";import"./ai-conversations-panel-CLQX0tqk.js";import"./ai-edit-thread-BewnnMwm.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-C9vwJ1WH.js";import"./ai-message-thread-BOJHokpa.js";import"./ai-response-message-toolbar-CmUHvg2s.js";import"./ai-thinking-indicator-74X5AGDr.js";import"./ai-client-message-DLUICVVF.js";import"./ai-empty-state-B8SMME5H.js";import"./ai-error-message-1I7xFZZx.js";import"./ai-response-message-CkjBZD56.js";import"./ai-user-message-CKYfvMZK.js";import"./ai-user-message-toolbar-Dt3iR2u9.js";import"./ai-suggestions-BS0BiCAj.js";import"./ai-voice-input-DzNzukca.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

import{j as e,M as r,T as d}from"./blocks-BVIJtWRp.js";import{useMDXComponents as o}from"./index-Bws9W-qp.js";import{C as s}from"./CustomArgTypes-C9qCHMN9.js";import{A as a}from"./AiEmbeddedChat.stories-DJcEQpcs.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-GiqNzQun.js";import"./utils-DNWdoVz2.js";import"./custom-element-UsVr97OX.js";import"./property-gC0ztlDB.js";import"./base-BH6EXoOn.js";import"./if-defined-CRG0ZRUD.js";import"./ref-CJyPIwcc.js";import"./class-map-CLalyKrP.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-uz99cS5Z.js";import"./mock-adapter-uhjSnHDA.js";import"./utils-CX_NQepL.js";import"./ai-chatbot-CM6NjYji.js";import"./ai-attachment-CBHVW0Sc.js";import"./ai-spinner-7v2suwOo.js";import"./tooltip-CPgv0Rzm.js";import"./overlay-CIVnpdFK.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-BAjMbYbI.js";import"./ai-icon-BaPFS3-9.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CDDTiO_e.js";import"./ai-dropdown-menu-5Ogaynac.js";import"./query-assigned-elements-yetPixop.js";import"./popover-D2cErdjY.js";import"./query-assigned-nodes-ByzUbdf1.js";import"./ai-dropdown-menu-item-BdBGNFF-.js";import"./ai-modal-slMruiQY.js";import"./ai-agent-info-CEb2tFHL.js";import"./ai-agent-selector-SCf0QO9Q.js";import"./ai-chat-interface-Bd9t4DDb.js";import"./ai-file-picker-C8jcuppI.js";import"./ai-message-thread-NKuOFlGT.js";import"./ai-response-message-toolbar-CtFY9xNZ.js";import"./ai-empty-state-Cou2wOD_.js";import"./ai-error-message-CK75mH1D.js";import"./ai-response-message-JX2OxTtc.js";import"./ai-thinking-indicator-BV4en9Xb.js";import"./ai-user-message-BuxsRh3S.js";import"./ai-user-message-toolbar-1kUOaA2A.js";import"./ai-prompt-BCSVPntb.js";import"./ai-suggestions-BoW50oSa.js";import"./ai-voice-input-BJ9SATBf.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

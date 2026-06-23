import{j as e,M as r,T as d}from"./blocks-2ZFvFfi3.js";import{useMDXComponents as o}from"./index-ZWUF4VMt.js";import{C as s}from"./CustomArgTypes-BibJ30Lq.js";import{A as a}from"./AiEmbeddedChat.stories-DRXAOdZq.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C2o41EYo.js";import"./utils-Bikz1eRQ.js";import"./custom-element-UsVr97OX.js";import"./property-778xKGhN.js";import"./class-map-CUx3F5tw.js";import"./if-defined-CNXFvrLy.js";import"./ref-DNfKLuG9.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-Dqh4As3I.js";import"./mock-adapter-B6avymXj.js";import"./utils-B8dv6FBY.js";import"./ai-chatbot-B-1khugo.js";import"./ai-attachment-DQZ2469j.js";import"./ai-spinner-DHZ9KWDh.js";import"./tooltip-BPU2yJd0.js";import"./overlay-PREfkCzS.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-DJjRozp7.js";import"./ai-icon-HQ2ZYr6N.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CMPdNj2m.js";import"./ai-dropdown-menu-B2rg6M_O.js";import"./query-assigned-nodes-DoUIWdv6.js";import"./popover-D4NlkBmS.js";import"./ai-dropdown-menu-item-DDKi1Nh7.js";import"./ai-modal-CF1EB23c.js";import"./ai-agent-info-DtuHYTCE.js";import"./ai-agent-selector-CKD185hu.js";import"./ai-chat-interface-QaHqA2Kl.js";import"./ai-prompt-Bvg-8R9J.js";import"./ai-conversations-panel-DyXVi2M-.js";import"./ai-edit-thread-CtkM5XGT.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-CrY1hUtp.js";import"./ai-message-thread-CvKtGfKE.js";import"./ai-response-message-toolbar-DR2RJB5E.js";import"./ai-empty-state-CXWBlGKK.js";import"./ai-error-message-CJa6Rm7p.js";import"./ai-response-message-c8DsCjs5.js";import"./ai-thinking-indicator-JED1TLFb.js";import"./ai-user-message-Cr2vTxXc.js";import"./ai-user-message-toolbar-BOdeRbpc.js";import"./ai-suggestions-Ct4kJCWq.js";import"./ai-voice-input-C55-anIu.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function re(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{re as default};

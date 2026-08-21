import{j as e,M as r,T as d}from"./blocks-B6wJxB2V.js";import{useMDXComponents as o}from"./index-BxGRdYMM.js";import{C as s}from"./CustomArgTypes-BVUEm9kd.js";import{A as a}from"./AiEmbeddedChat.stories-BGrgWVIX.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DzGSWDFA.js";import"./utils-Bi3ZKs6w.js";import"./custom-element-UsVr97OX.js";import"./property-DONkYTrK.js";import"./class-map-BzkN506I.js";import"./if-defined-CaSmFvGj.js";import"./ref-DY1KcSOE.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-BTuRCiE-.js";import"./mock-adapter-ph_xQ6k2.js";import"./markdown-CtLA8yAF.js";import"./ai-chatbot-CQqzCls-.js";import"./ai-attachment-CZYjA1ai.js";import"./ai-spinner-CtAfYtyO.js";import"./tooltip-BDDThVpC.js";import"./overlay-CS7Uempr.js";import"./floating-ui.dom-alButkyJ.js";import"./ai-chat-header-Dh9uozE7.js";import"./ai-icon-DVk0WHXM.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-cxNksyop.js";import"./ai-dropdown-menu-BXAqdwUv.js";import"./query-assigned-nodes-BSaSv6lS.js";import"./popover-C9Bi4dft.js";import"./ai-dropdown-menu-item-Bm0pdLhz.js";import"./ai-modal-6RjBVvP-.js";import"./ai-agent-info-Bx_vF7LK.js";import"./ai-agent-selector-DzbHlRcS.js";import"./ai-chat-interface-CeMOJJbH.js";import"./ai-prompt-rNlUcsFT.js";import"./ai-conversations-panel-Dyudctah.js";import"./ai-edit-thread-BVQi8pb2.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-BGRFvQwW.js";import"./ai-message-thread-Dv33MTeH.js";import"./ai-response-message-toolbar-DCAJSRVh.js";import"./ai-thinking-indicator-D0YQGWsS.js";import"./ai-client-message-GRpg-CfY.js";import"./ai-empty-state-TkayedHK.js";import"./ai-error-message-M4H9Dy_X.js";import"./ai-response-message-ButSVfxp.js";import"./ai-user-message-DsH8ZdpU.js";import"./ai-user-message-toolbar-CfNQMDaL.js";import"./ai-suggestions-Bf-U95Bd.js";import"./ai-voice-input-Bog1-nVi.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

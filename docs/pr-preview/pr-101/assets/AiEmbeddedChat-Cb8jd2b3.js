import{j as e,M as r,T as d}from"./blocks-DuTX0-lK.js";import{useMDXComponents as o}from"./index-nVoe6Izh.js";import{C as s}from"./CustomArgTypes-CiER8A_a.js";import{A as a}from"./AiEmbeddedChat.stories-B8l0rRS_.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6rRnA89.js";import"./utils-CWyMmwcP.js";import"./custom-element-UsVr97OX.js";import"./property-u0HkMdtU.js";import"./class-map-Cq6KVYol.js";import"./if-defined-D31ZPl1S.js";import"./ref-tORGw-Ss.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-CY7poXRp.js";import"./mock-adapter-ph_xQ6k2.js";import"./markdown-CtLA8yAF.js";import"./ai-chatbot-D5OdTZRy.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-CcQ_qDsf.js";import"./ai-spinner-DVkqI5Sl.js";import"./tooltip-DcaupkZl.js";import"./overlay-Cm2r6Ovu.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-chat-header-BFA7YKH3.js";import"./ai-icon-D59vn4pT.js";import"./ai-gradient-container-Sxj_OXi8.js";import"./ai-dropdown-menu-CYJmSTUq.js";import"./query-assigned-nodes-L6hVyJli.js";import"./popover-DJsjxF7q.js";import"./ai-dropdown-menu-item-BWX_Fgkg.js";import"./ai-modal-CAhb_t9q.js";import"./ai-agent-info-CkNC1Qk6.js";import"./ai-agent-selector--dWSlByE.js";import"./ai-chat-interface-B6Cw_qdA.js";import"./ai-prompt-6XKn3xq7.js";import"./ai-conversations-panel-C5TGe6_4.js";import"./ai-edit-thread-DV5ZPCpA.js";import"./ai-file-picker-BWM-C2tF.js";import"./ai-message-thread-DSP5wiOB.js";import"./ai-response-message-toolbar-BxQDkOCc.js";import"./ai-thinking-indicator-B22_aYtA.js";import"./ai-empty-state-BHB6aKVo.js";import"./ai-error-message-Rdu08WEf.js";import"./ai-response-message-D2BVa82y.js";import"./ai-user-message-Dw5ml1IN.js";import"./ai-user-message-toolbar-DP71GjrV.js";import"./ai-suggestions-DhxOAVbp.js";import"./ai-voice-input-CwGnZR59.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

import{j as e,M as r,T as d}from"./blocks-BPN2XerP.js";import{useMDXComponents as o}from"./index-qWatloSf.js";import{C as s}from"./CustomArgTypes-DynDPqwA.js";import{A as a}from"./AiEmbeddedChat.stories-BvAI2iwc.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BIqTUHBn.js";import"./utils-B5QSZMBA.js";import"./custom-element-UsVr97OX.js";import"./property-BYTngKAE.js";import"./class-map-C5G57KZt.js";import"./if-defined-BJN7wXLk.js";import"./ref-B1SFX6ui.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-CmUhlBrJ.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-p9YiryoC.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-B5mP4vD_.js";import"./ai-spinner-CxZUL9JE.js";import"./tooltip-CNtDdtVK.js";import"./overlay-Bx1cJ2ye.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-chat-header-DrRyIywP.js";import"./ai-icon-CGjsNOtJ.js";import"./ai-gradient-container-COfDeWLK.js";import"./ai-dropdown-menu-BGDdAF4A.js";import"./query-assigned-nodes-nyNGAqF-.js";import"./popover-BD58R4Gw.js";import"./ai-dropdown-menu-item-BD-IVR54.js";import"./ai-modal-DaD2bT0V.js";import"./ai-agent-info-DXJK3Vlg.js";import"./ai-agent-selector-DU1qua2w.js";import"./ai-chat-interface-Daj5ZbKE.js";import"./ai-prompt-Bn0bK-xm.js";import"./ai-conversations-panel-BrAlTSg4.js";import"./ai-edit-thread-DRlcZ1qW.js";import"./ai-file-picker-Dz5AUB7R.js";import"./ai-message-thread-C1gbjyVB.js";import"./ai-response-message-toolbar-Xa1T5aXR.js";import"./ai-thinking-indicator-BTcUeG_4.js";import"./ai-client-message-BNm9O1ev.js";import"./ai-empty-state-Do8Du5sc.js";import"./ai-error-message-Dkl83vj6.js";import"./ai-response-message-CNK9Dh18.js";import"./ai-user-message-B5lSNw1s.js";import"./ai-user-message-toolbar-DptxMECV.js";import"./ai-suggestions-D8pe1ZRx.js";import"./ai-voice-input-BzwNduZC.js";import"./mock-adapter-BpgeerXX.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

import{j as e,M as r,T as d}from"./blocks-B64WsvSd.js";import{useMDXComponents as o}from"./index-BNExG3Vz.js";import{C as s}from"./CustomArgTypes-BecXw4S6.js";import{A as a}from"./AiEmbeddedChat.stories-B6oeaB_a.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CoCnQeKl.js";import"./utils-BnHvt2iS.js";import"./custom-element-UsVr97OX.js";import"./property-CpZynkB1.js";import"./query-D9Yvha-e.js";import"./class-map-BResTQ8y.js";import"./if-defined-ijNNdxnk.js";import"./ref-CNEf0xZH.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-CmTLYwE7.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-CTBMNJuh.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-CP-q4j_v.js";import"./ai-spinner-C9JM70TX.js";import"./tooltip-BP-0jJco.js";import"./overlay-CqQDtub0.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-chat-header-Gi3SPamd.js";import"./ai-icon-CQuyPM2r.js";import"./ai-gradient-container-Ci69sNtA.js";import"./ai-dropdown-menu-BMRjtL2u.js";import"./query-assigned-elements-DTZxeBhO.js";import"./popover-33RnhOwL.js";import"./query-assigned-nodes-C3XBAQFI.js";import"./ai-dropdown-menu-item-Cqam3LOA.js";import"./ai-modal-CxjbusBW.js";import"./ai-agent-info-D7GgoGRz.js";import"./ai-agent-selector-SJihRqph.js";import"./ai-chat-interface-M900Ksk5.js";import"./ai-prompt-CBXC1dkk.js";import"./ai-conversations-panel-CQ4q8HW8.js";import"./ai-edit-thread-mHLyy37Q.js";import"./ai-error-message-CaApnihJ.js";import"./ai-file-picker-B-5B-PIk.js";import"./ai-message-thread-DPSsCa2F.js";import"./ai-response-message-toolbar-CH0ZXCeI.js";import"./ai-thinking-indicator-C-KeGALK.js";import"./ai-client-message-DXPmp8-c.js";import"./ai-empty-state-B3Iw8Iuf.js";import"./ai-response-message-B94F1ugJ.js";import"./ai-user-message-CZr7w9X4.js";import"./ai-user-message-toolbar-C6iQTOjl.js";import"./ai-suggestions-DK2PNTgT.js";import"./ai-voice-input-DreegBwx.js";import"./mock-adapter-BpgeerXX.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

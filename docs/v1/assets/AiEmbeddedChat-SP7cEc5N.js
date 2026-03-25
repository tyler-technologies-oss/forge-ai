import{j as e,M as r,T as d}from"./blocks-CZ06Zfql.js";import{useMDXComponents as o}from"./index-qZXY984C.js";import{C as s}from"./CustomArgTypes-C2hqM5HP.js";import{A as a}from"./AiEmbeddedChat.stories-D4c93fIx.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-25JXVMg8.js";import"./utils-Cwmrpmst.js";import"./custom-element-UsVr97OX.js";import"./property-BFBLbj5Y.js";import"./base-CJ2JMN1G.js";import"./if-defined-BzxE7JR_.js";import"./ref-DIvevwX6.js";import"./class-map-Bw4r2oPm.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-D7kYPtRI.js";import"./mock-adapter-BYw0QxWR.js";import"./utils-BojVjD0a.js";import"./ai-chatbot-CP_1y9r6.js";import"./ai-attachment-BIyvxpEf.js";import"./ai-spinner-DxFZHhzm.js";import"./tooltip-By131VTo.js";import"./overlay-BUCftl3D.js";import"./ai-chat-header-B2LWQX5J.js";import"./ai-icon-BFmasaSk.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-Cot99-sN.js";import"./ai-dropdown-menu-BsgLSSzf.js";import"./query-assigned-elements-65KzeySa.js";import"./popover-DwB7-cex.js";import"./ai-dropdown-menu-item-BPdcgwvD.js";import"./ai-modal-0jrZmkDw.js";import"./ai-agent-info-BdOijDs7.js";import"./ai-agent-selector-B12w_VFk.js";import"./ai-chat-interface-D7d3vpi_.js";import"./ai-file-picker-_Bj5B8iQ.js";import"./ai-message-thread-BOVQn3a4.js";import"./ai-response-message-toolbar-BERS8PYi.js";import"./ai-empty-state-CwraqQ_I.js";import"./ai-error-message-BXTdmAdw.js";import"./ai-response-message-D4Kuekr6.js";import"./ai-thinking-indicator-BnCCss2U.js";import"./ai-user-message-CjQ_WIAu.js";import"./ai-user-message-toolbar-e7F93Oy0.js";import"./ai-prompt-Bh5Y3GYi.js";import"./ai-suggestions-BZb52axw.js";import"./ai-voice-input-NFG1KUJm.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function te(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{te as default};

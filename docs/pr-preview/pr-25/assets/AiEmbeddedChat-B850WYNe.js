import{j as e,M as r,T as d}from"./blocks-DpyBOZNQ.js";import{useMDXComponents as o}from"./index-DhrSmjBb.js";import{C as s}from"./CustomArgTypes-CuhdRODz.js";import{A as a}from"./AiEmbeddedChat.stories-Dyh7vS49.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-D_CQ533w.js";import"./custom-element-UsVr97OX.js";import"./property-DoNaKfKL.js";import"./state-B2Sbo-dO.js";import"./if-defined-DP6wAIsK.js";import"./ref-B5FtZVqr.js";import"./class-map-CRuDjv9w.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-CyoluQHR.js";import"./mock-adapter-DPRgB_9-.js";import"./utils-Dod8vlOP.js";import"./ai-attachment-dt5aqhKd.js";import"./ai-spinner-BITnczLS.js";import"./tooltip-BOXgG4b2.js";import"./query-BpjciUlk.js";import"./base-DVmwUFg0.js";import"./overlay-Dz-9Ekgd.js";import"./ai-chat-header-4IbvkFJv.js";import"./ai-icon-B2q3LnG-.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-BsH_cIY-.js";import"./ai-dropdown-menu-BiqPrhI7.js";import"./query-assigned-elements-lTLKWxFL.js";import"./popover-BnQrRjpQ.js";import"./ai-dropdown-menu-item-BG4Dlmyf.js";import"./ai-modal-BXmAtTm8.js";import"./ai-agent-info-BXq_YI9P.js";import"./ai-chat-interface-Dv6kMrUq.js";import"./ai-file-picker-PRuds7m0.js";import"./ai-message-thread-BxFHijwj.js";import"./ai-actions-toolbar-DYJjp-uX.js";import"./ai-empty-state-Ca9t310G.js";import"./ai-error-message-Bbw9uy6U.js";import"./ai-response-message-DMurpqQy.js";import"./ai-thinking-indicator-B_2tGrnw.js";import"./ai-user-message-BTaEcVvZ.js";import"./ai-prompt-0VIKEpg9.js";import"./ai-suggestions-GSTpajyA.js";import"./ai-voice-input-C9Im4vmM.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function ee(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{ee as default};

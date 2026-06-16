import{j as e,M as r,T as d}from"./blocks-CpkF0NKh.js";import{useMDXComponents as o}from"./index-Y6v268_Q.js";import{C as s}from"./CustomArgTypes-C9hWcGK1.js";import{A as a}from"./AiEmbeddedChat.stories-CU_iRsNJ.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-fDKyZ43O.js";import"./utils-JKQRVxwV.js";import"./custom-element-UsVr97OX.js";import"./property-DFES4IpD.js";import"./class-map-gILILMaD.js";import"./if-defined-D2kiUjur.js";import"./ref-DJWdq3cd.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-Bo_yaMOh.js";import"./mock-adapter-uhjSnHDA.js";import"./utils-CX_NQepL.js";import"./ai-chatbot-Bv_aRrtd.js";import"./ai-attachment--ap456Ty.js";import"./ai-spinner-Bhozb3nJ.js";import"./tooltip-BCYT8GPH.js";import"./overlay-DeLxvDfM.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-cZGEpbpd.js";import"./ai-icon-D5pg9Es9.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CXKxBz0g.js";import"./ai-dropdown-menu-DzJvYT-r.js";import"./query-assigned-nodes-C1SdndCa.js";import"./popover-DiYv-HkY.js";import"./ai-dropdown-menu-item-Bq-i_cI_.js";import"./ai-modal-MG0tOqS0.js";import"./ai-agent-info-CrDUzDPr.js";import"./ai-agent-selector-C4r8-aUZ.js";import"./ai-chat-interface-Brx85jNm.js";import"./ai-conversations-panel-z6xz7zeV.js";import"./ai-edit-thread-zNpQmuQD.js";import"./ai-file-picker-imWSEZHt.js";import"./ai-message-thread-C2zsNR9_.js";import"./ai-response-message-toolbar-CjSjn5IG.js";import"./ai-empty-state-xrBvzr8A.js";import"./ai-error-message-etB2Vtsd.js";import"./ai-response-message-C-l2fNrL.js";import"./ai-thinking-indicator-DDi5Cdgz.js";import"./ai-user-message-D8UhFa6t.js";import"./ai-user-message-toolbar-C51l3t0L.js";import"./ai-prompt-BjUttDOW.js";import"./ai-suggestions-CdcFYcmq.js";import"./ai-voice-input-a-rTNSxd.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

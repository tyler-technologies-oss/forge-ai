import{j as e,M as r,T as d}from"./blocks-C1s4Goed.js";import{useMDXComponents as o}from"./index-CWZ87rpd.js";import{C as s}from"./CustomArgTypes-B3_r6j_y.js";import{A as a}from"./AiEmbeddedChat.stories-CjjFERq_.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-4PSpynT3.js";import"./utils-DMjvdKdW.js";import"./custom-element-UsVr97OX.js";import"./property-DDgNQfxw.js";import"./base-DEhi61ki.js";import"./if-defined--LWskl4_.js";import"./ref-DzHNudZC.js";import"./class-map-DNOv9QtK.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-DoL15kDo.js";import"./mock-adapter-uhjSnHDA.js";import"./utils-CX_NQepL.js";import"./ai-chatbot-BRZ9vpeM.js";import"./ai-attachment-BDwvY6Hr.js";import"./ai-spinner-BY0xbpzF.js";import"./tooltip-BQOqhZxr.js";import"./overlay-Bk48A2Mo.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-XVAmzwNw.js";import"./ai-icon-CwWMCvm9.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-D2oG_4Yj.js";import"./ai-dropdown-menu-DBnDtsw-.js";import"./query-assigned-elements-BQQxo_v9.js";import"./popover-qPAgfF95.js";import"./query-assigned-nodes-BN3gESMJ.js";import"./ai-dropdown-menu-item-DAaYG3AM.js";import"./ai-modal-Bd_LQOAw.js";import"./ai-agent-info-NETovMlz.js";import"./ai-agent-selector-CdW9PAzk.js";import"./ai-chat-interface-BtjQdAwo.js";import"./ai-conversations-panel-aRX1u15a.js";import"./ai-file-picker-CSR0QbJh.js";import"./ai-message-thread-LQSY_-Bc.js";import"./ai-response-message-toolbar-CiRRigH_.js";import"./ai-empty-state-HQUDL9Jf.js";import"./ai-error-message-BSLQzoIX.js";import"./ai-response-message-DwVGRnbJ.js";import"./ai-thinking-indicator-BUcx9z_j.js";import"./ai-user-message-CIffA0aZ.js";import"./ai-user-message-toolbar-DxQDffiV.js";import"./ai-prompt-AaVAqr0d.js";import"./ai-suggestions-CQFnaGm0.js";import"./ai-voice-input-BkMgMtN_.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

import{j as e,M as r,T as d}from"./blocks-BJ6P6wbA.js";import{useMDXComponents as o}from"./index-C5QvBoYv.js";import{C as s}from"./CustomArgTypes-CZsa3bm4.js";import{A as a}from"./AiEmbeddedChat.stories-B523Kevu.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-FPwTVxxm.js";import"./utils-BgonhVMT.js";import"./custom-element-UsVr97OX.js";import"./property-De04r_Wq.js";import"./query-T2N9g4xa.js";import"./class-map-Dv4mo833.js";import"./if-defined-C6HR2Nhv.js";import"./ref-jwX_Oi9I.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-5kNqFmAh.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-B893lbEo.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-CKP_kyJn.js";import"./ai-spinner-DBoxoIiD.js";import"./tooltip-j-YYWvut.js";import"./overlay-CsQex2FO.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-chat-header-DKepkVUc.js";import"./ai-icon-CUjXlJ16.js";import"./ai-gradient-container-BjRjft2T.js";import"./ai-dropdown-menu-BxySTc4z.js";import"./query-assigned-elements-6CJlglU1.js";import"./popover-PQ_VpYqu.js";import"./query-assigned-nodes-DK0m2C9Q.js";import"./ai-dropdown-menu-item-CR39z10M.js";import"./ai-modal-CfzojY4Z.js";import"./ai-agent-info-B_wONI3i.js";import"./ai-agent-selector-dhRMSRfe.js";import"./ai-chat-interface-9kH5ZeOX.js";import"./ai-prompt-CoHb3RTN.js";import"./ai-conversations-panel-Ce2nKzf7.js";import"./ai-edit-thread-BzhFSGTi.js";import"./ai-error-message-CCHMws0O.js";import"./ai-file-picker-B0vkjTLO.js";import"./ai-message-thread-B2vnSncO.js";import"./ai-response-message-toolbar-Dhsi6AEn.js";import"./ai-thinking-indicator-CVlsMSkm.js";import"./ai-client-message-B3kiISU_.js";import"./ai-empty-state-D0iZ7mrq.js";import"./ai-response-message-aPu8zXeU.js";import"./ai-user-message-3Cemhm5u.js";import"./ai-user-message-toolbar-Dvlj17K8.js";import"./ai-suggestions-CjyjU3o2.js";import"./ai-voice-input-CjfcXjPr.js";import"./mock-adapter-BpgeerXX.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

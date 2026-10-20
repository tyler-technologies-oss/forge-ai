import{j as e,M as r,T as d}from"./blocks-DhUXg9HW.js";import{useMDXComponents as o}from"./index-B0SnqID0.js";import{C as s}from"./CustomArgTypes-CaCjTyTK.js";import{A as a}from"./AiEmbeddedChat.stories-Durm_imm.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C2YwnM95.js";import"./utils-7XJsE73z.js";import"./custom-element-UsVr97OX.js";import"./property-CUb56LFm.js";import"./query-Bxcoi7Jv.js";import"./class-map-Ce4dixUc.js";import"./if-defined-BqkigIDL.js";import"./ref-BlH8x4pi.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-D2PFxc6t.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-B4bbHXKC.js";import"./ai-chatbot-BGrKyvDz.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-CUgRE4Vl.js";import"./ai-spinner-ChmlvqO_.js";import"./tooltip-Dj9YZSCf.js";import"./overlay-CdzhujMn.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-chat-header-DKNKEYo3.js";import"./ai-icon-C_uNfRHH.js";import"./ai-gradient-container-BVXV9soj.js";import"./ai-dropdown-menu-BWrNIyBp.js";import"./query-assigned-elements-8Vg8EN4R.js";import"./popover-DkHhfRUm.js";import"./query-assigned-nodes-_QuSYtmZ.js";import"./ai-dropdown-menu-item-Ce_meJAt.js";import"./ai-modal-D07MoOOr.js";import"./ai-agent-info-7DgybjZd.js";import"./ai-agent-selector-C0D1RO8i.js";import"./ai-chat-interface-BdDvK1Yc.js";import"./ai-prompt-GTSm7ov6.js";import"./ai-conversations-panel-CuCB0XNw.js";import"./ai-edit-thread-Dys6qbZ8.js";import"./ai-error-message-7vEYiPq2.js";import"./ai-file-picker-bcWvfAYW.js";import"./ai-message-thread-Css-M75D.js";import"./ai-response-message-toolbar-BrhQ1nqc.js";import"./context-consumer-CIN_xSLl.js";import"./ai-artifact-card-Bf6yixvS.js";import"./ai-thinking-indicator-BbeuqKHU.js";import"./ai-client-message-VeGaKIsf.js";import"./ai-empty-state-BcOMkik8.js";import"./ai-response-message-DRMUfkBi.js";import"./ai-user-message-SJtbk_hr.js";import"./ai-user-message-toolbar-DBPsumdq.js";import"./ai-suggestions-Dm4iXad7.js";import"./ai-voice-input-C6pmZ8qw.js";import"./mock-adapter-BpXd5o7R.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
`,e.jsx(d,{children:"AI Embedded Chat"}),`
`,e.jsxs(t.p,{children:["The AI Embedded Chat component is a structured form factor component that provides an embedded chat interface for inline page usage with built-in composition of ",e.jsx(t.code,{children:"ai-gradient-container"})," and ",e.jsx(t.code,{children:"ai-chat-interface"})," components. This component handles all the wiring and event management automatically, providing an easy-to-use solution for embedded chat interfaces that can expand to modal view when needed."]}),`
`,e.jsx(t.h2,{id:"features",children:"Features"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Structured composition"}),": Combines ai-gradient-container and ai-chat-interface components automatically"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Dual view modes"}),": Renders embedded inline content that can expand to modal view"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Built-in event handling"}),": Manages expand/collapse events and modal interactions internally"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Gradient theming"}),": Supports multiple gradient intensity variants (low, medium, high, disabled)"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Expandable interface"}),": Built-in expand functionality to switch from embedded to modal view"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Customizable slots"}),": Supports slotting messages, suggestions, and custom prompt components"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Rich API"}),": Provides methods and events for programmatic control"]}),`
`]}),`
`,e.jsx(t.h2,{id:"when-to-use",children:"When to Use"}),`
`,e.jsx(t.p,{children:"Use the AI Embedded Chat component when you want:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"A chat interface embedded directly in page content"}),`
`,e.jsx(t.li,{children:"Ability to expand the chat to a larger modal view for better focus"}),`
`,e.jsx(t.li,{children:"Built-in gradient theming and visual polish"}),`
`,e.jsx(t.li,{children:"Standard embedded chat behavior without custom container logic"}),`
`,e.jsx(t.li,{children:"A component that seamlessly transitions between embedded and modal states"}),`
`,e.jsx(t.li,{children:'A component that "just works" out of the box'}),`
`]}),`
`,e.jsxs(t.p,{children:["For more complex compositions or custom containers, consider using the atomic ",e.jsx(t.code,{children:"ai-gradient-container"}),", ",e.jsx(t.code,{children:"ai-modal"}),", and ",e.jsx(t.code,{children:"ai-chat-interface"})," components directly."]}),`
`,e.jsx(t.h2,{id:"usage-patterns",children:"Usage Patterns"}),`
`,e.jsx(t.h3,{id:"embedded-mode-default",children:"Embedded Mode (Default)"}),`
`,e.jsxs(t.p,{children:["The component renders as an embedded chat interface within the ",e.jsx(t.code,{children:"ai-gradient-container"}),", perfect for inline page content. Users can expand to modal view using the expand button in the chat header."]}),`
`,e.jsx(t.h3,{id:"modal-mode-expanded",children:"Modal Mode (Expanded)"}),`
`,e.jsxs(t.p,{children:["When expanded, the chat interface moves to a modal overlay powered by ",e.jsx(t.code,{children:"ai-modal"}),", providing a focused chat experience. The modal includes minimize functionality to return to embedded mode."]}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(s,{})]})}function ce(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{ce as default};

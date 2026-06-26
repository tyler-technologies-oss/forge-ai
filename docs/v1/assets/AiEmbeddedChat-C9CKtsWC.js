import{j as e,M as r,T as d}from"./blocks-Ug_ueqeL.js";import{useMDXComponents as o}from"./index-DVpEr7n_.js";import{C as s}from"./CustomArgTypes-CgIqyTHO.js";import{A as a}from"./AiEmbeddedChat.stories-BnGvgHfm.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-D2VTtcxu.js";import"./utils-Bikz1eRQ.js";import"./custom-element-UsVr97OX.js";import"./property-Bcw8B-50.js";import"./class-map-cwEOB_pd.js";import"./if-defined-BhIfm9GC.js";import"./ref-CHIi2qMO.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-D57hc0Nn.js";import"./mock-adapter-B6avymXj.js";import"./utils-B8dv6FBY.js";import"./ai-chatbot-CyJlm6RW.js";import"./ai-attachment-BocyzDCj.js";import"./ai-spinner-CMw4_2lP.js";import"./tooltip-D55IwSdr.js";import"./overlay-Ci4SWHfK.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-BCLCI8kk.js";import"./ai-icon-B99MnkNh.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-BSbLnamL.js";import"./ai-dropdown-menu-DW8OhHH7.js";import"./query-assigned-nodes-C5ozBc-J.js";import"./popover-BYQYuDbQ.js";import"./ai-dropdown-menu-item-BngpCUr2.js";import"./ai-modal-BN_BV4mm.js";import"./ai-agent-info-DGwDNdi7.js";import"./ai-agent-selector-D1ZauoWw.js";import"./ai-chat-interface-BitApxj9.js";import"./ai-prompt-BUYUFcrC.js";import"./ai-conversations-panel-Jz16eAkh.js";import"./ai-edit-thread-B0hUJpIT.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-B1s34WW0.js";import"./ai-message-thread-BNL8uZbq.js";import"./ai-response-message-toolbar-53OeJvbj.js";import"./ai-empty-state-DgvbImxf.js";import"./ai-error-message-eI_PfTZ6.js";import"./ai-response-message-BdiUnAGB.js";import"./ai-thinking-indicator-Dk-JEo2N.js";import"./ai-user-message-DiSCV8zL.js";import"./ai-user-message-toolbar-LIydjINc.js";import"./ai-suggestions-nHjgq7v1.js";import"./ai-voice-input-CU6G8fPG.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

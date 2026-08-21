import{j as e,M as r,T as d}from"./blocks-C-dCWL8a.js";import{useMDXComponents as o}from"./index-BHYAh8Fq.js";import{C as s}from"./CustomArgTypes-DPqhwroz.js";import{A as a}from"./AiEmbeddedChat.stories-DoNHBOwH.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BXMJy_H5.js";import"./utils-Ci4bjnpZ.js";import"./custom-element-UsVr97OX.js";import"./property-DxtuxblG.js";import"./class-map-DDQn7RKi.js";import"./if-defined-AmG7YlOc.js";import"./ref-DGvLtm0i.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-DoXFw_Z8.js";import"./agent-adapter-ByAhrqd5.js";import"./markdown-BmTprob7.js";import"./ai-chatbot-5xETNBCK.js";import"./ai-attachment-4RMJ2V-o.js";import"./ai-spinner-DDde5dN4.js";import"./tooltip-DaMf3_Os.js";import"./overlay-DqmmALS5.js";import"./floating-ui.dom-alButkyJ.js";import"./ai-chat-header-DP6emkAT.js";import"./ai-icon-BqaJ6p6K.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-Bddj_taG.js";import"./ai-dropdown-menu-5hVLRy57.js";import"./query-assigned-nodes-BLsdObf6.js";import"./popover-BkOanYw8.js";import"./ai-dropdown-menu-item-D4408ybD.js";import"./ai-modal-Bhw5QMKg.js";import"./ai-agent-info-0NuxMdng.js";import"./ai-agent-selector-CjytUF17.js";import"./ai-chat-interface-lhrmh0I9.js";import"./ai-prompt-BVJglB13.js";import"./ai-conversations-panel-AIixJ9FE.js";import"./ai-edit-thread-CbvYgpHy.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-B8VCL8_m.js";import"./ai-message-thread-o2em9lh_.js";import"./ai-response-message-toolbar-ZdkwTZbS.js";import"./ai-thinking-indicator-B-MA8HNu.js";import"./ai-client-message-DfMrjWxl.js";import"./ai-empty-state-aKcGFe-l.js";import"./ai-error-message-BgcQanyS.js";import"./ai-response-message-DL_kciQr.js";import"./ai-user-message-CS0DCKtd.js";import"./ai-user-message-toolbar-lwtDwFNa.js";import"./ai-suggestions-CwtkP-P6.js";import"./ai-voice-input-Bj-1vico.js";import"./mock-adapter-BCD0_cR6.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function se(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{se as default};

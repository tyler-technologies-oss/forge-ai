import{j as e,M as r,T as d}from"./blocks-tfS5CUCU.js";import{useMDXComponents as o}from"./index-DxB2hf95.js";import{C as s}from"./CustomArgTypes-CaOw3VDT.js";import{A as a}from"./AiEmbeddedChat.stories-C7C7-SSe.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-HHnIi9vB.js";import"./utils-Bk7YUiZl.js";import"./custom-element-UsVr97OX.js";import"./property-Dw-ruDe5.js";import"./query-C-fzUWOj.js";import"./class-map-mjC9N2Dh.js";import"./if-defined-DiTgyRFx.js";import"./ref-BmIXBg3c.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-BuTb6M2t.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-B4bbHXKC.js";import"./ai-chatbot-HblsBhNv.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-DgmiC_hh.js";import"./ai-spinner-TnabMADE.js";import"./tooltip-DPaCWC5z.js";import"./overlay-DOZ_3WQ4.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-chat-header-akpiHWlX.js";import"./ai-icon-BQgA7JO0.js";import"./ai-gradient-container--oxebQ7l.js";import"./ai-dropdown-menu-BG2fQksV.js";import"./query-assigned-elements-BgiGjBhR.js";import"./popover-2G_9z0vg.js";import"./query-assigned-nodes-Bx6nyZ13.js";import"./ai-dropdown-menu-item-DA_-DXzr.js";import"./ai-modal-BA955Cfo.js";import"./ai-agent-info-CYUc9cdZ.js";import"./ai-agent-selector-dkKm3Hyr.js";import"./ai-chat-interface-D4mf5XiH.js";import"./ai-prompt-BzUbw5KS.js";import"./ai-conversations-panel-D7mlHBSC.js";import"./ai-edit-thread-LS_xA-pY.js";import"./ai-error-message-BkQP-KlB.js";import"./ai-file-picker-BQeK9QaZ.js";import"./ai-message-thread-TaA4uEl7.js";import"./ai-response-message-toolbar-C70LLE4I.js";import"./context-consumer-CIN_xSLl.js";import"./ai-artifact-card-BPmUiNMl.js";import"./ai-thinking-indicator-D5KuHEQU.js";import"./ai-client-message-BGhrA_n_.js";import"./ai-empty-state-DAZ-UmiJ.js";import"./ai-response-message-IcC-jYVo.js";import"./ai-user-message-NVpkAkRH.js";import"./ai-user-message-toolbar-BMN3sD3V.js";import"./ai-suggestions-Cn1guvR7.js";import"./ai-voice-input-CDwYC21E.js";import"./mock-adapter-BpXd5o7R.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

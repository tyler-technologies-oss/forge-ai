import{j as e,M as r,T as d}from"./blocks-IxAfAUqv.js";import{useMDXComponents as o}from"./index-DpamjPI5.js";import{C as s}from"./CustomArgTypes-UvyJiGzn.js";import{A as a}from"./AiEmbeddedChat.stories-C93DPuDl.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BbMGqXF-.js";import"./utils-wxzMc8Lz.js";import"./custom-element-UsVr97OX.js";import"./property-BeSBlfHJ.js";import"./query-CMCy8NNY.js";import"./class-map-B09pr6n_.js";import"./if-defined-DTN-FRxt.js";import"./ref-_0g1XPVM.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-JCLZMZon.js";import"./provide-Bxw6gKTd.js";import"./consume-D3B5J4hk.js";import"./ai-message-thread-Cgey95qd.js";import"./utils-CwmN9dOd.js";import"./ai-response-message-toolbar-CYjLZaWW.js";import"./tooltip-BRIRHCVz.js";import"./overlay-BHZmvB8W.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./popover-DAsYSN8B.js";import"./ai-spinner-DPBPOPj8.js";import"./ai-thinking-indicator-402n54k4.js";import"./ai-empty-state-BJ7dV3St.js";import"./ai-client-message-ByrGellB.js";import"./ai-error-message-GoREP76Y.js";import"./query-assigned-nodes-Cl5NwPHY.js";import"./ai-response-message-FOA6WGb2.js";import"./ai-user-message-CVmEXTCg.js";import"./ai-user-message-toolbar-CKp7vlRs.js";import"./agent-adapter-CiODA7QC.js";import"./ai-chatbot-Dn0fngtF.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-CD0ghk8C.js";import"./ai-chat-header-CE5ezCmo.js";import"./ai-icon-BYise_xm.js";import"./ai-gradient-container-CJ6ZOGLS.js";import"./ai-dropdown-menu-DShEoju9.js";import"./query-assigned-elements-BZ1g8U-l.js";import"./ai-dropdown-menu-item-B4M2zrkd.js";import"./ai-modal-D-WzSVys.js";import"./ai-agent-info-MZ5AV6qL.js";import"./ai-agent-selector-CNRQd-Az.js";import"./ai-chat-interface-CC7zjyxl.js";import"./ai-prompt-Ca-_43sO.js";import"./ai-conversations-panel-C5tLdCoP.js";import"./ai-edit-thread-Cf1C0JnO.js";import"./ai-file-picker-CCfJwzI8.js";import"./ai-suggestions-CeIXsEaA.js";import"./ai-voice-input-Cgjap6d-.js";import"./mock-adapter-BIlxH578.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

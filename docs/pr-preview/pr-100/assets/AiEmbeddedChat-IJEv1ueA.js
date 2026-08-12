import{j as e,M as r,T as d}from"./blocks-K-b86g8p.js";import{useMDXComponents as o}from"./index-D2uPRfRn.js";import{C as s}from"./CustomArgTypes-QT5zF8p2.js";import{A as a}from"./AiEmbeddedChat.stories-VGzDNoNn.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-ByaASZAq.js";import"./utils-CuPOqGty.js";import"./custom-element-UsVr97OX.js";import"./property-DR4X3CdD.js";import"./class-map-ntPvOCSg.js";import"./if-defined-x4iZ2Mw3.js";import"./ref-B25wxmZ_.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-C1SC2pGM.js";import"./provide-Bxw6gKTd.js";import"./consume-D3B5J4hk.js";import"./ai-message-thread-DqIe38mM.js";import"./markdown-CtLA8yAF.js";import"./ai-response-message-toolbar-BhfO3bjd.js";import"./tooltip-DJ_M162U.js";import"./overlay-DlSuCDEe.js";import"./floating-ui.dom-alButkyJ.js";import"./popover-CkBxFejF.js";import"./ai-spinner-CPCAC9IA.js";import"./ai-thinking-indicator-DmwwLsAS.js";import"./ai-empty-state-me-XG0w2.js";import"./ai-error-message-DUQuOp8f.js";import"./ai-response-message-zxHIY9AQ.js";import"./ai-user-message-cH4PUP_l.js";import"./ai-user-message-toolbar-CwXpzVp2.js";import"./mock-adapter-6zZ6n2sP.js";import"./ai-chatbot-B96XI2Cs.js";import"./ai-attachment-o623x0VO.js";import"./ai-chat-header-1caPUllS.js";import"./ai-icon-DHGABlSg.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CnNTGVoV.js";import"./ai-dropdown-menu-CW4X6aNf.js";import"./query-assigned-nodes-DL4sh39u.js";import"./ai-dropdown-menu-item-DZaucG6L.js";import"./ai-modal-srScDJ9e.js";import"./ai-agent-info-CkRp85ok.js";import"./ai-agent-selector-CenwOcxj.js";import"./ai-chat-interface-DD4_IQCF.js";import"./ai-prompt-Bpa8qUkV.js";import"./ai-conversations-panel-ztzF4HzN.js";import"./ai-edit-thread-C6VUlZjf.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-BRD6RHBI.js";import"./ai-suggestions-BwffHetq.js";import"./ai-voice-input-Ds1NxwCe.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

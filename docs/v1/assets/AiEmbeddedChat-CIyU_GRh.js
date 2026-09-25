import{j as e,M as r,T as d}from"./blocks-BUKKxnmg.js";import{useMDXComponents as o}from"./index-B0Zs8q7T.js";import{C as s}from"./CustomArgTypes-b6PUy93v.js";import{A as a}from"./AiEmbeddedChat.stories-DEGYoJLB.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Cah43CYj.js";import"./utils-R5KNxOhk.js";import"./custom-element-UsVr97OX.js";import"./property-8ksPRbbb.js";import"./query-HzrBBAju.js";import"./class-map-BtUrnIwz.js";import"./if-defined-CMO5RKXX.js";import"./ref-CiUsqi5F.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-DE236Wa0.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-DRVsEP-c.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-qiWHWJcl.js";import"./ai-spinner-CuQ7WZc-.js";import"./tooltip-BFnM_qB-.js";import"./overlay-1EgnvvTS.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-chat-header-ClBmHfkA.js";import"./ai-icon-i7GuExfa.js";import"./ai-gradient-container-CKQBKaY7.js";import"./ai-dropdown-menu-CZWYoMP0.js";import"./query-assigned-elements-Ba0DEGtV.js";import"./popover-C-29ojKC.js";import"./query-assigned-nodes-COInPr2W.js";import"./ai-dropdown-menu-item-D7XWxExX.js";import"./ai-modal-h9SNWtwC.js";import"./ai-agent-info-BxMOmg3u.js";import"./ai-agent-selector-BN7RiBUV.js";import"./ai-chat-interface-C_hV0NJy.js";import"./ai-prompt-C1ETOLxO.js";import"./ai-conversations-panel-Cm_BNwh1.js";import"./ai-edit-thread-CQYzJA4G.js";import"./ai-error-message-DkuboHsJ.js";import"./ai-file-picker-DriEBozN.js";import"./ai-message-thread-BX8yM-Bb.js";import"./ai-response-message-toolbar-DJPZA4Sd.js";import"./ai-thinking-indicator-B8NjAOaB.js";import"./ai-client-message-CyMVMcJl.js";import"./ai-empty-state-BrKjT3Mh.js";import"./ai-response-message-gvTjuVQe.js";import"./ai-user-message-CIGFsZ3-.js";import"./ai-user-message-toolbar-D4z1O8Zk.js";import"./ai-suggestions-DCSgP43h.js";import"./ai-voice-input-DsUjHdyj.js";import"./mock-adapter-BpgeerXX.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

import{j as e,M as r,T as d}from"./blocks-CyENF0KF.js";import{useMDXComponents as o}from"./index-GE78l41E.js";import{C as s}from"./CustomArgTypes-DaOuYidr.js";import{A as a}from"./AiEmbeddedChat.stories-CvDuwaXC.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B0MoPG8h.js";import"./custom-element-UsVr97OX.js";import"./property-DjXMEGxG.js";import"./base-24nMPJpH.js";import"./if-defined-CapsZhD3.js";import"./ref-xJdD2TbP.js";import"./class-map-CHkWOg_P.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-i12LJby3.js";import"./mock-adapter-CGsAFG5D.js";import"./utils-B0W8KtS_.js";import"./ai-attachment-BgcEm_g_.js";import"./ai-spinner-DCu28kOF.js";import"./tooltip-zQmDTxVe.js";import"./overlay-CV6BPj3A.js";import"./ai-chat-header-DNyQO4PY.js";import"./ai-icon-BbWPm1ca.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-QhXLycSL.js";import"./ai-dropdown-menu-6GlD_AAn.js";import"./query-assigned-elements-CLsBl_vR.js";import"./popover-9-cs5a5D.js";import"./ai-dropdown-menu-item-CZT-wS16.js";import"./ai-modal-Bxsj_k1Z.js";import"./ai-agent-info-BEG8mHrH.js";import"./ai-agent-selector-BCP8NoQp.js";import"./ai-chat-interface-Da5a3BAn.js";import"./ai-file-picker-Be6rTxA9.js";import"./ai-message-thread-C_Y8yhF5.js";import"./ai-response-message-toolbar-DZqigJHo.js";import"./ai-empty-state-_XB0aX1q.js";import"./ai-error-message-Bt-nBPx4.js";import"./ai-response-message-BtaPXdXw.js";import"./ai-thinking-indicator-CgdFkbFt.js";import"./ai-user-message-BZPcX_Yo.js";import"./ai-user-message-toolbar-xR3Y7lzG.js";import"./ai-prompt-Bl-D3r_N.js";import"./ai-suggestions-BqAmHGX9.js";import"./ai-voice-input-C_9DHn9K.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function ee(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{ee as default};

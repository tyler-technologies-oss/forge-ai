import{j as e,M as r,T as d}from"./blocks-9S32BcJG.js";import{useMDXComponents as o}from"./index-CG9gGviY.js";import{C as s}from"./CustomArgTypes-C1euCFcY.js";import{A as a}from"./AiEmbeddedChat.stories-BC78xMqy.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Bkoayrxb.js";import"./utils-Ci4bjnpZ.js";import"./custom-element-UsVr97OX.js";import"./property-Bz1TbDJl.js";import"./class-map-Cl4y5wz2.js";import"./if-defined-DAw-a70h.js";import"./ref-CjnkLGyE.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-CxWzwFTz.js";import"./agent-adapter-ByAhrqd5.js";import"./markdown-BmTprob7.js";import"./ai-chatbot-a2EqG_lU.js";import"./ai-attachment-Bc6ChUHR.js";import"./ai-spinner-DwTSPQW_.js";import"./tooltip-CQhDneT-.js";import"./overlay-Cn9Dlzg7.js";import"./floating-ui.dom-alButkyJ.js";import"./ai-chat-header-D1StZBbM.js";import"./ai-icon-CUg1Y1JP.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-JvSAJKny.js";import"./ai-dropdown-menu-CxcHVCjS.js";import"./query-assigned-nodes-Q_mmfBN-.js";import"./popover-Bwo5kZgx.js";import"./ai-dropdown-menu-item-DKRRNXbw.js";import"./ai-modal-6UBnKpxH.js";import"./ai-agent-info-SE6FB0_S.js";import"./ai-agent-selector-DL48lfwz.js";import"./ai-chat-interface-DYyYPSd2.js";import"./ai-prompt-BcDdJN1h.js";import"./ai-conversations-panel-O9norDWa.js";import"./ai-edit-thread-ow-wLxye.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-C1QkM9nA.js";import"./ai-message-thread-w8_FjMYr.js";import"./ai-response-message-toolbar-BeZLGkus.js";import"./ai-thinking-indicator-D4kHseO0.js";import"./ai-client-message-HEoIisrO.js";import"./ai-empty-state-CsZCV8qd.js";import"./ai-error-message-DFVK2wCs.js";import"./ai-response-message-C6g__lLm.js";import"./ai-user-message-lya3-OiC.js";import"./ai-user-message-toolbar-B4eOb1Dw.js";import"./ai-suggestions-DrNfqwOi.js";import"./ai-voice-input-zxpV-b8Q.js";import"./mock-adapter-BCD0_cR6.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

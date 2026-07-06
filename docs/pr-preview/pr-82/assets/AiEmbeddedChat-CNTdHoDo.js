import{j as e,M as r,T as d}from"./blocks-CSja2OUG.js";import{useMDXComponents as o}from"./index-DHhDGxwg.js";import{C as s}from"./CustomArgTypes-B-gh3t1i.js";import{A as a}from"./AiEmbeddedChat.stories-BKI5A8jY.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CcKeoUze.js";import"./utils-B_iZMiSg.js";import"./custom-element-UsVr97OX.js";import"./property-C77ueFB9.js";import"./class-map-DZShT9uC.js";import"./if-defined-W3bHS76c.js";import"./ref-DsiRLb7m.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-DzySuWuZ.js";import"./mock-adapter-B6avymXj.js";import"./utils-B8dv6FBY.js";import"./ai-chatbot-BvM2dnuK.js";import"./ai-attachment-FEgZqvwa.js";import"./ai-spinner-Cd-uq0hS.js";import"./tooltip-DT6fnM6D.js";import"./overlay-CsH_HWPX.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-CpiH95jW.js";import"./ai-icon-CknqX0iy.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DQDdztgS.js";import"./ai-dropdown-menu-BYUxIWLI.js";import"./query-assigned-nodes-CQadBgYX.js";import"./popover-n5p-D5pN.js";import"./ai-dropdown-menu-item-BTF9qgd1.js";import"./ai-modal-CQwp0LKX.js";import"./ai-agent-info-DvBdi-NS.js";import"./ai-agent-selector-BcMXN7Xz.js";import"./ai-chat-interface-ByuFBgXV.js";import"./ai-prompt-w75QHimr.js";import"./ai-conversations-panel-DxLauXlF.js";import"./ai-edit-thread-Dz8IIZ6g.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-DOcHyEBl.js";import"./ai-message-thread-PDck-6T5.js";import"./ai-response-message-toolbar-CrXQ5DNy.js";import"./ai-empty-state-DvNlK9Rn.js";import"./ai-error-message-DbruVaB5.js";import"./ai-response-message-C3BcIM3F.js";import"./ai-thinking-indicator-B-YZjG_k.js";import"./ai-user-message-BIyWp4Wg.js";import"./ai-user-message-toolbar-Bn3bIrSc.js";import"./ai-suggestions-CvhWjxV6.js";import"./ai-voice-input-_L-_L8x7.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

import{j as e,M as r,T as d}from"./blocks-vZ2JWdOt.js";import{useMDXComponents as o}from"./index-BKKk0251.js";import{C as s}from"./CustomArgTypes-BdHWmCJs.js";import{A as a}from"./AiEmbeddedChat.stories-CWAuCXkv.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CDKdqIww.js";import"./utils-DYhFS5Sr.js";import"./custom-element-UsVr97OX.js";import"./property-DOtU9LCA.js";import"./class-map-DPM-D8DA.js";import"./if-defined-5WpHf2yY.js";import"./ref-CQk4DodF.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-CJXbQUCA.js";import"./mock-adapter-DymPxr2h.js";import"./markdown-C0nyZhUE.js";import"./ai-chatbot-Ce5vZiZK.js";import"./ai-attachment-DN6KAkuR.js";import"./ai-spinner-CW5nWeEI.js";import"./tooltip-CfmIgR21.js";import"./overlay-C5cozJYC.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-BUpq2iT3.js";import"./ai-icon-BB4nsyTU.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-BZ9hPRFy.js";import"./ai-dropdown-menu-Co5TUI-Z.js";import"./query-assigned-nodes-C0z0ZrEu.js";import"./popover-BXqDDAkR.js";import"./ai-dropdown-menu-item-DuKuouT5.js";import"./ai-modal-CjW-vv9q.js";import"./ai-agent-info-CoJ07g-S.js";import"./ai-agent-selector-DEJhRlLt.js";import"./ai-chat-interface-b5tpC-Sk.js";import"./ai-prompt-ByT6OSlb.js";import"./ai-conversations-panel-DHZpmHQP.js";import"./ai-edit-thread-BNoYqQux.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-DxlI1dUF.js";import"./ai-message-thread-H1f3RmGG.js";import"./ai-response-message-toolbar-C2lhmEmn.js";import"./ai-empty-state-CnI9efuh.js";import"./ai-error-message-D4hQNuMC.js";import"./ai-response-message-CWNnT_rw.js";import"./ai-thinking-indicator-BmGRpH94.js";import"./ai-user-message-39--hC7K.js";import"./ai-user-message-toolbar-DQ2cGSj9.js";import"./ai-suggestions-Cj6WAKbP.js";import"./ai-voice-input-DGUKSHW2.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

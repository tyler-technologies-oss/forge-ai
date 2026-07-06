import{j as e,M as r,T as d}from"./blocks-B5Z80lh6.js";import{useMDXComponents as o}from"./index-BW-3ujwX.js";import{C as s}from"./CustomArgTypes-e0ruzkXP.js";import{A as a}from"./AiEmbeddedChat.stories-CMKv0W7a.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-JS6wZa5t.js";import"./utils-B_iZMiSg.js";import"./custom-element-UsVr97OX.js";import"./property-CzP0hvoa.js";import"./class-map-B6Wsz2a7.js";import"./if-defined-4iJwT7ay.js";import"./ref-CMZ1GDcC.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-B_5cBMa8.js";import"./mock-adapter-B6avymXj.js";import"./utils-B8dv6FBY.js";import"./ai-chatbot-D5UoBiGJ.js";import"./ai-attachment-CebnFFFa.js";import"./ai-spinner-DNI8bbKS.js";import"./tooltip-BR4orBkw.js";import"./overlay-DAlCbg2u.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-C-PtU_yv.js";import"./ai-icon-CRLSxXHp.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-tW-pQav-.js";import"./ai-dropdown-menu-BrVMDBOp.js";import"./query-assigned-nodes-CBvrqxop.js";import"./popover-DLBAIfMN.js";import"./ai-dropdown-menu-item-DJcoZIHk.js";import"./ai-modal-7_as5TQd.js";import"./ai-agent-info-rXVe5M7M.js";import"./ai-agent-selector-jjubuNH5.js";import"./ai-chat-interface-HjP3Zz7l.js";import"./ai-prompt-DwmBl8GY.js";import"./ai-conversations-panel-D-jgEtgM.js";import"./ai-edit-thread-BCUZfuhn.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-BNOSpjo_.js";import"./ai-message-thread-CC3lSCnh.js";import"./ai-response-message-toolbar-CkQOy9kS.js";import"./ai-empty-state-zZ2AvKx1.js";import"./ai-error-message-YyOiiIbM.js";import"./ai-response-message-C_SkkDWU.js";import"./ai-thinking-indicator-CcnZ3vV8.js";import"./ai-user-message-C78Blyvb.js";import"./ai-user-message-toolbar-BEym6G2C.js";import"./ai-suggestions-Bs7LAqce.js";import"./ai-voice-input-b3b4PI5O.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

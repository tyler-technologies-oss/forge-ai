import{j as e,M as r,T as d}from"./blocks-B_JHdttX.js";import{useMDXComponents as o}from"./index-BUlXZrGn.js";import{C as s}from"./CustomArgTypes-BMhAed0J.js";import{A as a}from"./AiEmbeddedChat.stories-D3IRu6QS.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BAxVbwLB.js";import"./utils-D3jxQn3U.js";import"./custom-element-UsVr97OX.js";import"./property-DkpCXdf_.js";import"./base-C1e8NJ0Y.js";import"./if-defined-Ayq_1nsD.js";import"./ref-CcZRiytj.js";import"./class-map-B51DPJ2K.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-B2onOXFp.js";import"./mock-adapter-BYw0QxWR.js";import"./utils-BojVjD0a.js";import"./ai-chatbot-BsLsE35M.js";import"./ai-attachment-CIi5xMDN.js";import"./ai-spinner-b6_tr5nf.js";import"./tooltip-BStxRYAC.js";import"./overlay-8Vp-JEDj.js";import"./ai-chat-header-HrqPBIMw.js";import"./ai-icon-B_uoGP6H.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DFDk0utS.js";import"./ai-dropdown-menu-We-LH0e3.js";import"./query-assigned-elements-m2KpB10p.js";import"./popover-CPC1s2K4.js";import"./ai-dropdown-menu-item-DGLyOBT8.js";import"./ai-modal-aZVqWGor.js";import"./ai-agent-info-BtJPDXZz.js";import"./ai-agent-selector-B7I-n7_p.js";import"./ai-chat-interface-CQhMfsbQ.js";import"./ai-file-picker-BpVVljcs.js";import"./ai-message-thread-Bufh9m-M.js";import"./ai-response-message-toolbar-Chgp0T9e.js";import"./ai-empty-state-ChRpGkBB.js";import"./ai-error-message-CPj0s-t7.js";import"./ai-response-message-Conr04yl.js";import"./ai-thinking-indicator-BKmbXLkB.js";import"./ai-user-message-H8vMRGyB.js";import"./ai-user-message-toolbar-fBVaU1xF.js";import"./ai-prompt-DifHbBAf.js";import"./ai-suggestions-BQvxYIxG.js";import"./ai-voice-input-B8mN2FAM.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function te(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{te as default};

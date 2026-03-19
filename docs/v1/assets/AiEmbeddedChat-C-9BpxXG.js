import{j as e,M as r,T as d}from"./blocks-5RBFBJ8B.js";import{useMDXComponents as o}from"./index-CXqfoUQZ.js";import{C as s}from"./CustomArgTypes-DmFFsI_K.js";import{A as a}from"./AiEmbeddedChat.stories-DzLboMT5.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BPJous7M.js";import"./utils-DaSRtO6J.js";import"./custom-element-UsVr97OX.js";import"./property-TlzTqd7d.js";import"./base-BwKwAoSK.js";import"./if-defined-ChX85WYI.js";import"./ref-DHdyc2Fc.js";import"./class-map-uYtyWEZq.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-BSJ8F4B-.js";import"./mock-adapter-BYw0QxWR.js";import"./utils-BojVjD0a.js";import"./ai-chatbot-CuKiRQfb.js";import"./ai-attachment-jsrM2J7S.js";import"./ai-spinner-rnz26dWd.js";import"./tooltip-D80hkwWW.js";import"./overlay-BGkZwIil.js";import"./ai-chat-header-Dy90ixhd.js";import"./ai-icon-87qm-36p.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DV1zkfBg.js";import"./ai-dropdown-menu-Bl9gIBV9.js";import"./query-assigned-elements-B5PF_l9O.js";import"./popover-9Q1xQChe.js";import"./ai-dropdown-menu-item-0Vn6RA39.js";import"./ai-modal-Bes4JoXc.js";import"./ai-agent-info-1QrjlwF8.js";import"./ai-agent-selector-CVTuNHmd.js";import"./ai-chat-interface-CmlTwz-Z.js";import"./ai-file-picker-C_b-8iDm.js";import"./ai-message-thread-DBK5r_Eq.js";import"./ai-response-message-toolbar-CPkD8mAB.js";import"./ai-empty-state-B9YLWxyc.js";import"./ai-error-message-C0dN8mk8.js";import"./ai-response-message-_Yglw0eQ.js";import"./ai-thinking-indicator-9aDYllkM.js";import"./ai-user-message-B8L4xAyU.js";import"./ai-user-message-toolbar-BLdCFbde.js";import"./ai-prompt-y2wc9wOf.js";import"./ai-suggestions-DKpsYfZF.js";import"./ai-voice-input-WhwKcoSZ.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

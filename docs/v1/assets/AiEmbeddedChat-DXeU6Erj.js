import{j as e,M as r,T as d}from"./blocks-DmIthl9T.js";import{useMDXComponents as o}from"./index-txD4CyN0.js";import{C as s}from"./CustomArgTypes-BboMx8rl.js";import{A as a}from"./AiEmbeddedChat.stories-DCZDNBVc.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-D4qW0ZVD.js";import"./custom-element-UsVr97OX.js";import"./property-70LwJpNn.js";import"./state-Bp27iwzH.js";import"./if-defined-Be4BIViB.js";import"./ref-DeALGK8z.js";import"./class-map-tthV7hpZ.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-BGhK0oND.js";import"./mock-adapter-DPRgB_9-.js";import"./utils-Dod8vlOP.js";import"./ai-attachment-xfxticcR.js";import"./ai-spinner-BSaLB5BL.js";import"./tooltip-BfER8WIb.js";import"./query-BpjciUlk.js";import"./base-DVmwUFg0.js";import"./overlay-BQFLzEpE.js";import"./ai-chat-header-BTiF_sc3.js";import"./ai-icon-CgQco358.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-B_SV9Kqa.js";import"./ai-dropdown-menu-kHOOBHpA.js";import"./query-assigned-elements-lTLKWxFL.js";import"./popover-BKC2NC1y.js";import"./ai-dropdown-menu-item-BLdqzuXu.js";import"./ai-modal-OcBu_87L.js";import"./ai-agent-info-BljudpOf.js";import"./ai-chat-interface-7EdenIt0.js";import"./ai-file-picker-3zaDoU_c.js";import"./ai-message-thread-DvGMgfMV.js";import"./ai-actions-toolbar-B7AV67b7.js";import"./ai-empty-state-BN7cqVZB.js";import"./ai-error-message-DkKb9SiD.js";import"./ai-response-message-ZZ9LUmlo.js";import"./ai-thinking-indicator-DXPJpEQz.js";import"./ai-user-message-D4XG4Pbk.js";import"./ai-prompt-Cb7Yf3wt.js";import"./ai-suggestions-D5P8gbDC.js";import"./ai-voice-input-DTumPsXW.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

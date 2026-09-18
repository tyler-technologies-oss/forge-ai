import{j as e,M as r,T as d}from"./blocks-BUG_W7Dh.js";import{useMDXComponents as o}from"./index-D8jSmuse.js";import{C as s}from"./CustomArgTypes-D78T2Ba5.js";import{A as a}from"./AiEmbeddedChat.stories-qPbTU6lX.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BwxWS2yA.js";import"./utils-BpMSyJuT.js";import"./custom-element-UsVr97OX.js";import"./property-C2LYNZSK.js";import"./query-2GDyeYzT.js";import"./class-map-x20kdKQl.js";import"./if-defined-k4e50rGf.js";import"./ref-BIRRcXFZ.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-ZUUanhxb.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-B4bbHXKC.js";import"./ai-chatbot-C4ve72AL.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-BZpXzkxO.js";import"./ai-spinner-CQulfK7_.js";import"./tooltip-CbcwVZdz.js";import"./overlay-CZUutn7j.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-chat-header-BIiztWY-.js";import"./ai-icon-C93_wKSt.js";import"./ai-gradient-container-Ct0aOdVy.js";import"./ai-dropdown-menu-NpZww7wf.js";import"./query-assigned-elements-B-vwIfqS.js";import"./popover-CfMhGDl1.js";import"./query-assigned-nodes-DCwr61jO.js";import"./ai-dropdown-menu-item-97dC8tzh.js";import"./ai-modal-BLMKXeu5.js";import"./ai-agent-info-BirGUP7C.js";import"./ai-agent-selector-CXRikawv.js";import"./ai-chat-interface-CeOHq0Av.js";import"./ai-prompt-D1R6dhSK.js";import"./ai-conversations-panel-CAez1Jt6.js";import"./ai-edit-thread-DG6YALGm.js";import"./ai-error-message-BnhwpZpL.js";import"./ai-file-picker-Ryl7GTAs.js";import"./ai-message-thread-jLBsAgZT.js";import"./ai-response-message-toolbar-Copg1L7x.js";import"./ai-thinking-indicator-DFBjOXN2.js";import"./ai-client-message-Bc77Z9hO.js";import"./ai-empty-state-BrRoRUw2.js";import"./ai-response-message-Bk3Kt5SE.js";import"./ai-user-message-DDn20P1M.js";import"./ai-user-message-toolbar-CzieDxcC.js";import"./ai-suggestions-KPEm57dZ.js";import"./ai-voice-input-BMgLZDKt.js";import"./mock-adapter-D0dkxTL5.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

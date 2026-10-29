import{j as e,M as r,T as d}from"./blocks-Q4ZzO5rO.js";import{useMDXComponents as o}from"./index-3zsMKvlp.js";import{C as s}from"./CustomArgTypes-DQz4TS2F.js";import{A as a}from"./AiEmbeddedChat.stories-DRJNgybv.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B-4WNlme.js";import"./utils-BKRQpDGl.js";import"./custom-element-UsVr97OX.js";import"./property-D_pGc9VD.js";import"./query-B8RXkDXg.js";import"./class-map-BLfFbYud.js";import"./if-defined-B6G-hQmN.js";import"./ref-CNt6LH5j.js";import"./when-CI7b_ccM.js";import"./ai-canvas--_nKOyaC.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-B4bbHXKC.js";import"./context-provider-NnzmXA_k.js";import"./context-consumer-CIN_xSLl.js";import"./ai-message-thread-CnRplzs3.js";import"./ai-response-message-toolbar-CPC3K6sd.js";import"./tooltip-DWgUX2-7.js";import"./overlay-D-F8moK_.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./popover-DhpKIMVF.js";import"./ai-artifact-card-CcdIXUhG.js";import"./ai-spinner-Dhxn4ay-.js";import"./ai-thinking-indicator-3PeP_JAx.js";import"./ai-client-message-DJeVkWFd.js";import"./ai-empty-state-DFszVBMg.js";import"./ai-error-message-DftA6ode.js";import"./query-assigned-nodes-CCyPOGnv.js";import"./ai-response-message-YsNGKITz.js";import"./ai-user-message-viNfMZx5.js";import"./ai-user-message-toolbar-CyKM73na.js";import"./ai-chat-header-DPQg6yNW.js";import"./ai-icon-DhzNX6Di.js";import"./utils-DIqd7FWX.js";import"./ai-gradient-container-PNXS-Dn8.js";import"./ai-dropdown-menu-Bl7AYk6q.js";import"./query-assigned-elements-jx61II49.js";import"./ai-dropdown-menu-item-Cm7aM4zd.js";import"./ai-modal-C8uGZSGW.js";import"./ai-agent-info-DptRB4Yk.js";import"./ai-agent-selector-D_hJ_BiL.js";import"./ai-chatbot-Bhif2jQh.js";import"./ai-attachment-B-aditwk.js";import"./ai-chat-interface-C2BFGiaL.js";import"./ai-prompt-CTxIR_Ar.js";import"./ai-conversations-panel-BEUpBRPv.js";import"./ai-edit-thread-C71kymEL.js";import"./ai-file-picker-Ctdna4R2.js";import"./ai-suggestions-BaMur3W_.js";import"./ai-voice-input-Bac0_gYj.js";import"./mock-adapter-BpXd5o7R.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
`,e.jsx(d,{children:"AI Embedded Chat"}),`
`,e.jsxs(t.p,{children:["The AI Embedded Chat component is a structured form factor component that provides an embedded chat interface for inline page usage with built-in composition of ",e.jsx(t.code,{children:"ai-gradient-container"})," and ",e.jsx(t.code,{children:"ai-chat-interface"})," components. This component handles all the wiring and event management automatically, providing an easy-to-use solution for embedded chat interfaces that can expand to modal view when needed."]}),`
`,e.jsx(t.h2,{id:"features",children:"Features"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Structured composition"}),": Combines ai-gradient-container and ai-chat-interface components automatically"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Dual view modes"}),": Renders embedded inline content that can expand to modal view"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Built-in event handling"}),": Manages expand/collapse events and modal interactions internally"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Gradient theming"}),": Supports multiple gradient intensity variants (low, medium, high, disabled)"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Expandable interface"}),": Built-in expand functionality to switch from embedded to modal view"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Customizable slots"}),": Supports slotting messages, suggestions, and custom prompt components"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Rich API"}),": Provides methods and events for programmatic control"]}),`
`]}),`
`,e.jsx(t.h2,{id:"when-to-use",children:"When to Use"}),`
`,e.jsx(t.p,{children:"Use the AI Embedded Chat component when you want:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"A chat interface embedded directly in page content"}),`
`,e.jsx(t.li,{children:"Ability to expand the chat to a larger modal view for better focus"}),`
`,e.jsx(t.li,{children:"Built-in gradient theming and visual polish"}),`
`,e.jsx(t.li,{children:"Standard embedded chat behavior without custom container logic"}),`
`,e.jsx(t.li,{children:"A component that seamlessly transitions between embedded and modal states"}),`
`,e.jsx(t.li,{children:'A component that "just works" out of the box'}),`
`]}),`
`,e.jsxs(t.p,{children:["For more complex compositions or custom containers, consider using the atomic ",e.jsx(t.code,{children:"ai-gradient-container"}),", ",e.jsx(t.code,{children:"ai-modal"}),", and ",e.jsx(t.code,{children:"ai-chat-interface"})," components directly."]}),`
`,e.jsx(t.h2,{id:"usage-patterns",children:"Usage Patterns"}),`
`,e.jsx(t.h3,{id:"embedded-mode-default",children:"Embedded Mode (Default)"}),`
`,e.jsxs(t.p,{children:["The component renders as an embedded chat interface within the ",e.jsx(t.code,{children:"ai-gradient-container"}),", perfect for inline page content. Users can expand to modal view using the expand button in the chat header."]}),`
`,e.jsx(t.h3,{id:"modal-mode-expanded",children:"Modal Mode (Expanded)"}),`
`,e.jsxs(t.p,{children:["When expanded, the chat interface moves to a modal overlay powered by ",e.jsx(t.code,{children:"ai-modal"}),", providing a focused chat experience. The modal includes minimize functionality to return to embedded mode."]}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(s,{})]})}function le(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{le as default};

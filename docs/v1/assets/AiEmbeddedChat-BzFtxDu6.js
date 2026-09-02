import{j as e,M as r,T as d}from"./blocks-B1EsKxXs.js";import{useMDXComponents as o}from"./index-P89lMxvl.js";import{C as s}from"./CustomArgTypes-CuZitMlP.js";import{A as a}from"./AiEmbeddedChat.stories-s_zXMrEZ.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CADuIDkh.js";import"./utils-DFuhqIoU.js";import"./custom-element-UsVr97OX.js";import"./property-D1A7vE6P.js";import"./class-map-lxKQWI2x.js";import"./if-defined-DqyJVthq.js";import"./ref-WNweeo31.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-COlPhqop.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-Dh4dl-y1.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-a2O7_tMU.js";import"./ai-spinner-DPF0Ecuu.js";import"./tooltip-BaYlHZuv.js";import"./overlay-BK9yFc7r.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-chat-header-1wXRb5Sv.js";import"./ai-icon-YaVCEgEj.js";import"./ai-gradient-container-SjTC3hZA.js";import"./ai-dropdown-menu-w3IhAWpG.js";import"./query-assigned-nodes-DuXvx4mS.js";import"./popover-Ct5fZSUJ.js";import"./ai-dropdown-menu-item-DlZC2t7i.js";import"./ai-modal-BhsABjza.js";import"./ai-agent-info-DlkgZ-HL.js";import"./ai-agent-selector-DhnJCaeY.js";import"./ai-chat-interface-DXI32o8A.js";import"./ai-prompt-CeVCu0Of.js";import"./ai-conversations-panel-ksP_yHrJ.js";import"./ai-edit-thread-BHAaE5vs.js";import"./ai-file-picker-C7E-0pRb.js";import"./ai-message-thread-BlF4XE16.js";import"./ai-response-message-toolbar-KzBcozAV.js";import"./ai-thinking-indicator-BEp1fhiI.js";import"./ai-client-message-rQsx8zFI.js";import"./ai-empty-state-BnS6U1d1.js";import"./ai-error-message-DhZi8Lt1.js";import"./ai-response-message-BTlvxeX1.js";import"./ai-user-message-DSgABtbI.js";import"./ai-user-message-toolbar-mqgRxP6I.js";import"./ai-suggestions-CbE1dL_G.js";import"./ai-voice-input-C-BllxmB.js";import"./mock-adapter-BpgeerXX.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function de(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{de as default};

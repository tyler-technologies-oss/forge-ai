import{j as e,M as r,T as d}from"./blocks-Banip6Ur.js";import{useMDXComponents as o}from"./index-DUol0OyN.js";import{C as s}from"./CustomArgTypes-CBs8KwsT.js";import{A as a}from"./AiEmbeddedChat.stories-CWS-e3Yo.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B1WUWRSJ.js";import"./utils-BTrLaHWD.js";import"./custom-element-UsVr97OX.js";import"./property-DNkJX02r.js";import"./class-map-DuzfYfaF.js";import"./if-defined-C9FRuCWh.js";import"./ref-C43NmTUj.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-CHsxiYsU.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-B8VZYApt.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-FDsV0mBF.js";import"./ai-spinner-DDFyu-o6.js";import"./tooltip-CjqeOwnF.js";import"./overlay-B0U85LQs.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-chat-header-AlN1Hxrb.js";import"./ai-icon-C6MZnaUX.js";import"./ai-gradient-container-DvsuVcyv.js";import"./ai-dropdown-menu-luqwE60M.js";import"./query-assigned-nodes-BOE2ErRe.js";import"./popover-BOwcGf3X.js";import"./ai-dropdown-menu-item-BRhjlG_m.js";import"./ai-modal-D3UEuwfl.js";import"./ai-agent-info-CPepvjh6.js";import"./ai-agent-selector-pZHZl5sW.js";import"./ai-chat-interface-BA8q9-9W.js";import"./ai-prompt-CK09EHsD.js";import"./ai-conversations-panel-DU5QDgRD.js";import"./ai-edit-thread-DIrGLgxt.js";import"./ai-file-picker-eYva1uXM.js";import"./ai-message-thread-C6m2O-bx.js";import"./ai-response-message-toolbar-HGQoAfIu.js";import"./ai-thinking-indicator-DLtROBbi.js";import"./ai-client-message-xIHcpew7.js";import"./ai-empty-state-BmCLpQlh.js";import"./ai-error-message-CBHymFhb.js";import"./ai-response-message-R1rqj-G7.js";import"./ai-user-message-HqYyUSH-.js";import"./ai-user-message-toolbar-CN5V6C0Z.js";import"./ai-suggestions-Btq1JVLO.js";import"./ai-voice-input-BChv1d3M.js";import"./mock-adapter-BpgeerXX.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

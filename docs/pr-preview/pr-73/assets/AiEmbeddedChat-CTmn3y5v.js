import{j as e,M as r,T as d}from"./blocks-Bnp-cXth.js";import{useMDXComponents as o}from"./index-BJlZkGW2.js";import{C as s}from"./CustomArgTypes-DZB4uOMb.js";import{A as a}from"./AiEmbeddedChat.stories-COpKbJtt.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Ci2EQNjX.js";import"./utils-DUMfLMpS.js";import"./custom-element-UsVr97OX.js";import"./property-DCLvBLH6.js";import"./class-map-DFUZIkHp.js";import"./if-defined-BCytmrNz.js";import"./ref-DVqoa94d.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-CZUtyx0p.js";import"./mock-adapter-DtTa1VKp.js";import"./utils-BPGIXM68.js";import"./ai-chatbot-Caz6IGhX.js";import"./ai-attachment-CwBnlWvU.js";import"./ai-spinner-C9HwdYW0.js";import"./tooltip-f3wnCPJr.js";import"./overlay-CHOZm8MI.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-D3wmU5Ud.js";import"./ai-icon-C0SmS9ZM.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-Cpf0qufw.js";import"./ai-dropdown-menu-BeUVnIuA.js";import"./query-assigned-nodes-HF-bGjz1.js";import"./popover-DRt8UQ8L.js";import"./ai-dropdown-menu-item-BEPz4Z0O.js";import"./ai-modal-JNLADSlS.js";import"./ai-agent-info-DK5lUx6m.js";import"./ai-agent-selector-fA7hraEy.js";import"./ai-chat-interface-Drc0GBVr.js";import"./ai-prompt-D9QErE2u.js";import"./ai-conversations-panel-CyM2nZYD.js";import"./ai-edit-thread-DQfnN53O.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-BwapaYD6.js";import"./ai-message-thread-fHPQoLln.js";import"./ai-response-message-toolbar-DihzPqxY.js";import"./ai-empty-state-Bcl4PAH6.js";import"./ai-error-message-BkR-zdyB.js";import"./ai-response-message-CXvi5lnK.js";import"./ai-thinking-indicator-7ydwhXcm.js";import"./ai-user-message-C7Ai-3On.js";import"./ai-user-message-toolbar-BOrnGvve.js";import"./ai-suggestions-BLvW4QSW.js";import"./ai-voice-input-CyORsGgw.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

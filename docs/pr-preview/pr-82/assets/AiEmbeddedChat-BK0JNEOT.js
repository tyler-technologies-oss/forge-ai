import{j as e,M as r,T as d}from"./blocks-CjxIvzdN.js";import{useMDXComponents as o}from"./index-DRgurw7P.js";import{C as s}from"./CustomArgTypes-DMauqLeK.js";import{A as a}from"./AiEmbeddedChat.stories-Bd-rtahn.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CQ2qw32K.js";import"./utils-B_iZMiSg.js";import"./custom-element-UsVr97OX.js";import"./property-haODigQr.js";import"./class-map-BbKGnC91.js";import"./if-defined-DDxRUNFM.js";import"./ref-BClTVL7n.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-MVR5J7gY.js";import"./mock-adapter-B6avymXj.js";import"./utils-B8dv6FBY.js";import"./ai-chatbot-DnglbiKm.js";import"./ai-attachment-qAvH5FEM.js";import"./ai-spinner-moSLHR9D.js";import"./tooltip-CoKWyDKV.js";import"./overlay-KVXL0qko.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-Cb2NQQ56.js";import"./ai-icon-BXxakMpK.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DGIpthj4.js";import"./ai-dropdown-menu-BfWRFJ52.js";import"./query-assigned-nodes-D5j0sxm-.js";import"./popover-D-LfJSBr.js";import"./ai-dropdown-menu-item-CTo1kxD_.js";import"./ai-modal-CsK-23z5.js";import"./ai-agent-info-DxY-YkE9.js";import"./ai-agent-selector-mvl2qIhN.js";import"./ai-chat-interface-DlI-C02X.js";import"./ai-prompt-DlDYyC79.js";import"./ai-conversations-panel-BEK2jRie.js";import"./ai-edit-thread-CDyz8QBZ.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-BxtStDq-.js";import"./ai-message-thread-4PusDhAN.js";import"./ai-response-message-toolbar-qklYe5sY.js";import"./ai-empty-state-Dj19a7Br.js";import"./ai-error-message-CJXVIt6u.js";import"./ai-response-message-BKbdbfAD.js";import"./ai-thinking-indicator-A88BJTxd.js";import"./ai-user-message-UbpGApWz.js";import"./ai-user-message-toolbar-Z4njvlX_.js";import"./ai-suggestions-DVfpA7k8.js";import"./ai-voice-input-BKZxNvy0.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

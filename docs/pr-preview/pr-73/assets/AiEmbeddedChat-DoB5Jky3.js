import{j as e,M as r,T as d}from"./blocks-EuWwfhe9.js";import{useMDXComponents as o}from"./index-D7UQBr1h.js";import{C as s}from"./CustomArgTypes-D-nJTZbE.js";import{A as a}from"./AiEmbeddedChat.stories-evvt4YC3.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-D0Quxatl.js";import"./utils-D55EIfBS.js";import"./custom-element-UsVr97OX.js";import"./property-DTfo_sT5.js";import"./class-map-zwx_ooUS.js";import"./if-defined-DkyLDCga.js";import"./ref-DSyLRuzg.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-D19MV-92.js";import"./mock-adapter-DtTa1VKp.js";import"./utils-BPGIXM68.js";import"./ai-chatbot-6CkVZGKT.js";import"./ai-attachment-BRZERHwW.js";import"./ai-spinner-BfTFtFn-.js";import"./tooltip-FJkXGueQ.js";import"./overlay-DOvf1uYB.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-BuMd-48Y.js";import"./ai-icon-Bv81jPxL.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DEg7-ReP.js";import"./ai-dropdown-menu-5h690hTL.js";import"./query-assigned-nodes-STbO7ZRT.js";import"./popover-CJJHiduG.js";import"./ai-dropdown-menu-item-DDU0rKEY.js";import"./ai-modal-BfsgCCk_.js";import"./ai-agent-info-BWDdi_LR.js";import"./ai-agent-selector-y_2G-2Wi.js";import"./ai-chat-interface-B_I5K7kM.js";import"./ai-prompt-DEw7cBw2.js";import"./ai-conversations-panel-CWAlKU0Z.js";import"./ai-edit-thread-DhtOANIJ.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-BPajpDR1.js";import"./ai-message-thread-CDMN11pF.js";import"./ai-response-message-toolbar-wGBTi6JH.js";import"./ai-empty-state-CNb5EMea.js";import"./ai-error-message-bI9djrFu.js";import"./ai-response-message-BNSnrZOH.js";import"./ai-thinking-indicator-BIEVVRD6.js";import"./ai-user-message-DUvNLl44.js";import"./ai-user-message-toolbar-BnOCd1IZ.js";import"./ai-suggestions-CH_haeo3.js";import"./ai-voice-input-P5vvi4DJ.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

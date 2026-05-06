import{j as e,M as r,T as d}from"./blocks-BLy_mcST.js";import{useMDXComponents as o}from"./index-DfXidIFW.js";import{C as s}from"./CustomArgTypes-B9H7LfG2.js";import{A as a}from"./AiEmbeddedChat.stories-BNtl66hX.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C9phzLEP.js";import"./utils-BAnNUKvG.js";import"./custom-element-UsVr97OX.js";import"./property-m-J6qff4.js";import"./base-Vz5TpuLf.js";import"./if-defined-B5NripEj.js";import"./ref-gqbHHNDL.js";import"./class-map-3MfCNIMv.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-CvHf5hKP.js";import"./mock-adapter-BYw0QxWR.js";import"./utils-BojVjD0a.js";import"./ai-chatbot-DdMawAbA.js";import"./ai-attachment-BUXTIceu.js";import"./ai-spinner-C3qn9KL4.js";import"./tooltip-BN6ykjCH.js";import"./overlay-CXUi99Tk.js";import"./ai-chat-header-CGOGG-5L.js";import"./ai-icon-CP9i2Cpb.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-Dm2BpTUo.js";import"./ai-dropdown-menu-DLKybbGT.js";import"./query-assigned-elements-D58BN_iA.js";import"./popover-BOdtoD-p.js";import"./ai-dropdown-menu-item-B_Azgb1x.js";import"./ai-modal-DksJlSAZ.js";import"./ai-agent-info-BeSXdOK1.js";import"./ai-agent-selector-z71-_fRl.js";import"./ai-chat-interface-DU-8prit.js";import"./ai-file-picker-DR6272NG.js";import"./ai-message-thread-BTQOrl01.js";import"./ai-response-message-toolbar-CoMn0R4X.js";import"./ai-empty-state-CC0I3JbI.js";import"./ai-error-message-CIRMabRz.js";import"./ai-response-message-DUDeek9e.js";import"./ai-thinking-indicator-Mkc_eRPF.js";import"./ai-user-message-CNX0X0qG.js";import"./ai-user-message-toolbar-v11QQggR.js";import"./ai-prompt-CVWOOp1o.js";import"./ai-suggestions-Do0WGkA3.js";import"./ai-voice-input-BdjMmbMP.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

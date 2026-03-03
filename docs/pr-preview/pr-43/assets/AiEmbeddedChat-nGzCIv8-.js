import{j as e,M as r,T as d}from"./blocks-DZXVw8oo.js";import{useMDXComponents as o}from"./index-C20WndiG.js";import{C as s}from"./CustomArgTypes-DwqGkueh.js";import{A as a}from"./AiEmbeddedChat.stories-CL6FjnEf.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-XWml_phI.js";import"./custom-element-UsVr97OX.js";import"./property-CPtZoXga.js";import"./base-CmsSc0gD.js";import"./if-defined-DuMJGNmA.js";import"./ref-BwCKS_3O.js";import"./class-map-BJBQucdb.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-ChVtj1q7.js";import"./mock-adapter-CGsAFG5D.js";import"./utils-B0W8KtS_.js";import"./ai-attachment-CL0_VZIX.js";import"./ai-spinner-C7LFH41y.js";import"./tooltip-DQrjgPvv.js";import"./overlay-DyqMHNrF.js";import"./ai-chat-header-CieSP2DZ.js";import"./ai-icon-Cl-qB0pr.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-r0hUVQd7.js";import"./ai-dropdown-menu-Chtl3s0O.js";import"./query-assigned-elements-BcstsRPa.js";import"./popover-DJd5pnlp.js";import"./ai-dropdown-menu-item-BB8dEuMB.js";import"./ai-modal-AiuxPT19.js";import"./ai-agent-info-CdYGW8QY.js";import"./ai-agent-selector-OIaXZejk.js";import"./ai-chat-interface-D9AEPFn2.js";import"./ai-file-picker-iPqA7Ndh.js";import"./ai-message-thread-Cl1JNuwP.js";import"./ai-response-message-toolbar-Ccr5qVxu.js";import"./ai-empty-state-C6zfm-9L.js";import"./ai-error-message-BdLG1onY.js";import"./ai-response-message-C_UemnMv.js";import"./ai-thinking-indicator-riLaJ2nT.js";import"./ai-user-message-DnlaS6u3.js";import"./ai-user-message-toolbar-BqoiZnKL.js";import"./ai-prompt-6Uy0femZ.js";import"./ai-suggestions-Bcp6Nzeb.js";import"./ai-voice-input-Br3fWsJk.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

import{j as e,M as r,T as d}from"./blocks-BpkuYkCe.js";import{useMDXComponents as o}from"./index-BaWykyJ8.js";import{C as s}from"./CustomArgTypes-K7gA1ZGE.js";import{A as a}from"./AiEmbeddedChat.stories-Nstq09tr.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-eEjxNfM7.js";import"./custom-element-UsVr97OX.js";import"./property-C_wI3bCM.js";import"./base-DMMOcqYX.js";import"./if-defined-BKI_yjvn.js";import"./ref-DePJ6gl8.js";import"./class-map-C5hM4zgJ.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-BBECV20Q.js";import"./mock-adapter-CGsAFG5D.js";import"./utils-B0W8KtS_.js";import"./ai-attachment-BrGCLdaJ.js";import"./ai-spinner-BumTfL_Z.js";import"./tooltip-DwTP9F_V.js";import"./overlay-6-XUNQLV.js";import"./ai-chat-header-DufAVTiQ.js";import"./ai-icon-D2vjMxgQ.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-ChUVtcWJ.js";import"./ai-dropdown-menu-D0RuKong.js";import"./query-assigned-elements-nnd1nKAl.js";import"./popover-CHqW9ann.js";import"./ai-dropdown-menu-item-Dw8f3pVU.js";import"./ai-modal-Dd6gzce9.js";import"./ai-agent-info-BKPXp4Op.js";import"./ai-agent-selector-DS8bZtAM.js";import"./ai-chat-interface-j89TAb3r.js";import"./ai-file-picker-CeC2VbU3.js";import"./ai-message-thread-uv4fJhBs.js";import"./ai-response-message-toolbar-ByKkSO6-.js";import"./ai-empty-state-BbIVr4Ro.js";import"./ai-error-message-B-lwNOj3.js";import"./ai-response-message-DtVsaQxa.js";import"./ai-thinking-indicator-Hb4Cg89p.js";import"./ai-user-message-DeGAJgtR.js";import"./ai-user-message-toolbar-DXHafurx.js";import"./ai-prompt-DO44f1Vx.js";import"./ai-suggestions-D6kpEUQJ.js";import"./ai-voice-input-CK9eseRp.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

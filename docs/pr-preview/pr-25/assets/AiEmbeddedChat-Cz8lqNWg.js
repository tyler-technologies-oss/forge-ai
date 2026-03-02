import{j as e,M as r,T as d}from"./blocks-CvD-2XKv.js";import{useMDXComponents as o}from"./index-BZIIcnsw.js";import{C as s}from"./CustomArgTypes-DDaRpdzP.js";import{A as a}from"./AiEmbeddedChat.stories-C2gQ5pk3.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BNZmS7a2.js";import"./custom-element-UsVr97OX.js";import"./property-CemaUf82.js";import"./base-ByPPNGkD.js";import"./if-defined-GSGM5fiE.js";import"./ref-CIwV2gfC.js";import"./class-map-CrqGH--Q.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-BAjtXZlK.js";import"./mock-adapter-CGsAFG5D.js";import"./utils-B0W8KtS_.js";import"./ai-attachment-VBaVnCYt.js";import"./ai-spinner-DkrmBM4v.js";import"./tooltip-CD8R2_QB.js";import"./overlay-DsvNMFeA.js";import"./ai-chat-header-BXD1QT3e.js";import"./ai-icon-D5jFbeiA.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-Dzzz1TqC.js";import"./ai-dropdown-menu-pFPXdEUe.js";import"./query-assigned-elements-CLLLsuRC.js";import"./popover-CMlay6oc.js";import"./ai-dropdown-menu-item-D6ki98BQ.js";import"./ai-modal-BPEwfklS.js";import"./ai-agent-info-Dixpn5tb.js";import"./ai-agent-selector-BSDVRAjl.js";import"./ai-chat-interface-BFJVsIfn.js";import"./ai-file-picker-BqeNMI0J.js";import"./ai-message-thread-Dwe_2y-M.js";import"./ai-response-message-toolbar-BrRJFWRE.js";import"./ai-empty-state-C29soh7z.js";import"./ai-error-message-CMHJY_8l.js";import"./ai-response-message-B0VnS0Bz.js";import"./ai-thinking-indicator-Dp1WBmhC.js";import"./ai-user-message-CS9szT8h.js";import"./ai-user-message-toolbar-b_DHmxtZ.js";import"./ai-prompt-B_5ApUo5.js";import"./ai-suggestions-7F7Pn8Mb.js";import"./ai-voice-input-DLiVSYmf.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

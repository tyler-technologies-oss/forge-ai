import{j as e,M as r,T as d}from"./blocks-UvVDv9dV.js";import{useMDXComponents as o}from"./index-IPD_fXeI.js";import{C as s}from"./CustomArgTypes-Bp54Pt1R.js";import{A as a}from"./AiEmbeddedChat.stories-k9YEoY8X.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Cdy4RhMs.js";import"./utils-D3jxQn3U.js";import"./custom-element-UsVr97OX.js";import"./property-B6CB5CKs.js";import"./base-OhZCqXTS.js";import"./if-defined-CXPIZVks.js";import"./ref-Du2rKaNb.js";import"./class-map-6nIIfOde.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-BzIKVA32.js";import"./mock-adapter-BYw0QxWR.js";import"./utils-BojVjD0a.js";import"./ai-chatbot-DYkkYbTs.js";import"./ai-attachment-B5NPjDM4.js";import"./ai-spinner-Cf8V5lEr.js";import"./tooltip-oHQzqeEM.js";import"./overlay-BIQKsxB7.js";import"./ai-chat-header-B24eJ8_T.js";import"./ai-icon-BJ5p5fkw.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DOLSIN7b.js";import"./ai-dropdown-menu-ByqHvjqP.js";import"./query-assigned-elements-F3MQT6_l.js";import"./popover-CiQlKlvT.js";import"./ai-dropdown-menu-item-V2dfCsj8.js";import"./ai-modal-sI9UMKSw.js";import"./ai-agent-info-iloM0d1z.js";import"./ai-agent-selector-C_VN3bdJ.js";import"./ai-chat-interface-BJW1Gpz1.js";import"./ai-file-picker-DfW3HPDg.js";import"./ai-message-thread-nkdueEj5.js";import"./ai-response-message-toolbar-CQ9c8ltn.js";import"./ai-empty-state-4j3Rzu8f.js";import"./ai-error-message-CrzSemOl.js";import"./ai-response-message-CzcZ9_lh.js";import"./ai-thinking-indicator-yqFZervP.js";import"./ai-user-message-BJAMnyYO.js";import"./ai-user-message-toolbar-C9pkJRsK.js";import"./ai-prompt-DlRXqhGa.js";import"./ai-suggestions-d4r-ATNy.js";import"./ai-voice-input-bX57VDpk.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

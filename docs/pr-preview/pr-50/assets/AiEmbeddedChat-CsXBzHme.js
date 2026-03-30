import{j as e,M as r,T as d}from"./blocks-DbVd1hRO.js";import{useMDXComponents as o}from"./index-JNFgHEkv.js";import{C as s}from"./CustomArgTypes-XDaCeOlA.js";import{A as a}from"./AiEmbeddedChat.stories-B5re4Jyf.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Tq2oLOLI.js";import"./utils-BuxnRiQ6.js";import"./custom-element-UsVr97OX.js";import"./property-Befmiq9U.js";import"./base-BJRUVhYU.js";import"./if-defined-DAFyaJA5.js";import"./ref-BvdYZHYZ.js";import"./class-map-60Wn57OH.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-B3bCkdji.js";import"./mock-adapter-BYw0QxWR.js";import"./utils-BojVjD0a.js";import"./ai-chatbot-CI-lsXas.js";import"./ai-attachment-Dp05aqeF.js";import"./ai-spinner-Cm7OcWEB.js";import"./tooltip-Ct3kPPMi.js";import"./overlay-DET8XgbF.js";import"./ai-chat-header-Blkm2777.js";import"./ai-icon-BKSz5uco.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CkohTgxt.js";import"./ai-dropdown-menu-Dt2hr8_A.js";import"./query-assigned-elements-CNlIIDNo.js";import"./popover-CqWUXQ78.js";import"./ai-dropdown-menu-item-tLKdxwey.js";import"./ai-modal-D7LzHnRg.js";import"./ai-agent-info-BgQlVDks.js";import"./ai-agent-selector-D6ffM5IV.js";import"./ai-chat-interface-DKkfQ784.js";import"./ai-file-picker-c1qxCVX8.js";import"./ai-message-thread-BvN0nLzI.js";import"./ai-response-message-toolbar-DlUq-OyH.js";import"./ai-empty-state-nvSD8dsV.js";import"./ai-error-message-BMHXC40h.js";import"./ai-response-message-DhbCrGRD.js";import"./ai-thinking-indicator-CXYdU-lo.js";import"./ai-user-message-C9YHG4y4.js";import"./ai-user-message-toolbar-DQ94lJt5.js";import"./ai-prompt-esaA3UH5.js";import"./ai-suggestions-Bezdgdlw.js";import"./ai-voice-input-B2VktDHO.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

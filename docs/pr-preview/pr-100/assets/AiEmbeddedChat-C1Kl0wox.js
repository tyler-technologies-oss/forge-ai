import{j as e,M as r,T as d}from"./blocks-Cq_s8mW4.js";import{useMDXComponents as o}from"./index-BWjv3K9s.js";import{C as s}from"./CustomArgTypes-CCbojtDc.js";import{A as a}from"./AiEmbeddedChat.stories-ObITCzgl.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CMqpidyD.js";import"./utils-BgDgMwuK.js";import"./custom-element-UsVr97OX.js";import"./property-UTg6fKn8.js";import"./query-LLfzfoTQ.js";import"./class-map-Cee3Ru6l.js";import"./if-defined-BFRCVrxJ.js";import"./ref-BdCVDbx1.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-BrDMhVeQ.js";import"./provide-Bxw6gKTd.js";import"./consume-D3B5J4hk.js";import"./ai-message-thread-DtDkmlMJ.js";import"./utils-CwmN9dOd.js";import"./ai-response-message-toolbar-C_crbQKk.js";import"./tooltip-DFWELXDf.js";import"./overlay-BMdxoq9W.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./popover-C3kSoxY5.js";import"./ai-spinner-Dm874uye.js";import"./ai-thinking-indicator-C00m-hLm.js";import"./ai-empty-state-B_cao-nv.js";import"./ai-client-message-DlOgtkXx.js";import"./ai-error-message-BPEQWjjZ.js";import"./query-assigned-nodes-CfOzAFon.js";import"./ai-response-message-C8iE1417.js";import"./ai-user-message-DdD9-QWH.js";import"./ai-user-message-toolbar-DnRMaBm9.js";import"./agent-adapter-CiODA7QC.js";import"./ai-chatbot-czwvr4sN.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-DY5kbVEd.js";import"./ai-chat-header-DklFpnTd.js";import"./ai-icon-idzaSzy8.js";import"./ai-gradient-container-DYIxxphU.js";import"./ai-dropdown-menu-DtTuPzYM.js";import"./query-assigned-elements-DsZdSlp5.js";import"./ai-dropdown-menu-item-D7_dEO6j.js";import"./ai-modal-CiIFraxs.js";import"./ai-agent-info-C9WH-Bfd.js";import"./ai-agent-selector-Pyd8ON0z.js";import"./ai-chat-interface-KUqEGZ5F.js";import"./ai-prompt-DB5Ws98_.js";import"./ai-conversations-panel-CUCz8DtA.js";import"./ai-edit-thread-CS1XnJH-.js";import"./ai-file-picker-5eOjqAq6.js";import"./ai-suggestions-C1Xh4d2x.js";import"./ai-voice-input-26zFn7Xu.js";import"./mock-adapter-BIlxH578.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
`,e.jsx(d,{children:"AI Embedded Chat"}),`
`,e.jsxs(t.p,{children:["The AI Embedded Chat component is a structured form factor component that provides an embedded chat interface for inline page usage with built-in composition of ",e.jsx(t.code,{children:"ai-gradient-container"})," and ",e.jsx(t.code,{children:"ai-chat-interface"})," components. This component handles all the wiring and event management automatically, providing an easy-to-use solution for embedded chat interfaces that can expand to modal view when needed."]}),`
`,e.jsx(t.h2,{id:"features",children:"Features"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Structured composition"}),": Combines ai-gradient-container and ai-chat-interface components automatically"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Dual view modes"}),": Renders embedded inline content that can expand to modal view"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Built-in event handling"}),": Manages expand/collapse events and modal interactions internally"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Gradient theming"}),": Supports multiple gradient intensity variants (low, medium, high, disabled)"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Expandable interface"}),": Built-in expand functionality to switch from embedded to modal view"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Customizable slots"}),": Supports slotting messages, suggestions, and custom prompt components"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Rich API"}),": Provides methods and events for programmatic control"]}),`
`]}),`
`,e.jsx(t.h2,{id:"when-to-use",children:"When to Use"}),`
`,e.jsx(t.p,{children:"Use the AI Embedded Chat component when you want:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"A chat interface embedded directly in page content"}),`
`,e.jsx(t.li,{children:"Ability to expand the chat to a larger modal view for better focus"}),`
`,e.jsx(t.li,{children:"Built-in gradient theming and visual polish"}),`
`,e.jsx(t.li,{children:"Standard embedded chat behavior without custom container logic"}),`
`,e.jsx(t.li,{children:"A component that seamlessly transitions between embedded and modal states"}),`
`,e.jsx(t.li,{children:'A component that "just works" out of the box'}),`
`]}),`
`,e.jsxs(t.p,{children:["For more complex compositions or custom containers, consider using the atomic ",e.jsx(t.code,{children:"ai-gradient-container"}),", ",e.jsx(t.code,{children:"ai-modal"}),", and ",e.jsx(t.code,{children:"ai-chat-interface"})," components directly."]}),`
`,e.jsx(t.h2,{id:"usage-patterns",children:"Usage Patterns"}),`
`,e.jsx(t.h3,{id:"embedded-mode-default",children:"Embedded Mode (Default)"}),`
`,e.jsxs(t.p,{children:["The component renders as an embedded chat interface within the ",e.jsx(t.code,{children:"ai-gradient-container"}),", perfect for inline page content. Users can expand to modal view using the expand button in the chat header."]}),`
`,e.jsx(t.h3,{id:"modal-mode-expanded",children:"Modal Mode (Expanded)"}),`
`,e.jsxs(t.p,{children:["When expanded, the chat interface moves to a modal overlay powered by ",e.jsx(t.code,{children:"ai-modal"}),", providing a focused chat experience. The modal includes minimize functionality to return to embedded mode."]}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(s,{})]})}function ce(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{ce as default};

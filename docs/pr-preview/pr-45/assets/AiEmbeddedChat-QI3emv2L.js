import{j as e,M as r,T as d}from"./blocks-BmXmt99m.js";import{useMDXComponents as o}from"./index-CQl01PQW.js";import{C as s}from"./CustomArgTypes-BXgzfy5n.js";import{A as a}from"./AiEmbeddedChat.stories-BmzwcZs8.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CoMPIM91.js";import"./utils-BNrvqXu1.js";import"./custom-element-UsVr97OX.js";import"./property-C0lsaYZZ.js";import"./base-CCAwxvzI.js";import"./if-defined-Dho57mOc.js";import"./ref-B-Kt-SMS.js";import"./class-map-CTWgf-Zu.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-DdA7RpEI.js";import"./mock-adapter-CGsAFG5D.js";import"./utils-B0W8KtS_.js";import"./ai-chatbot-22PR-bz2.js";import"./ai-attachment-D6JoiZgK.js";import"./ai-spinner-DgK5o1vX.js";import"./tooltip-BFdfihOC.js";import"./overlay-DudO7o-1.js";import"./ai-chat-header-BvsR12b5.js";import"./ai-icon-Dy2PngP-.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CWQ22KG7.js";import"./ai-dropdown-menu-D2HbBPDv.js";import"./query-assigned-elements-aplBxFom.js";import"./popover-CM47TLlL.js";import"./ai-dropdown-menu-item-CaVjZ5GL.js";import"./ai-modal-BkSwHBAz.js";import"./ai-agent-info-C2qlhKUA.js";import"./ai-agent-selector-2BLtgZw1.js";import"./ai-chat-interface-CsoBdqYa.js";import"./ai-file-picker-UB5wOOJv.js";import"./ai-message-thread-m8c5PQ11.js";import"./ai-response-message-toolbar-BavCFFay.js";import"./ai-empty-state-BcYzebvG.js";import"./ai-error-message-BBbblm8K.js";import"./ai-response-message-Co8Jp9wU.js";import"./ai-thinking-indicator-Daa5GHNB.js";import"./ai-user-message-CgqU-cTi.js";import"./ai-user-message-toolbar-BMUp2NPX.js";import"./ai-prompt-xvcy4u3p.js";import"./ai-suggestions-B8YFs54m.js";import"./ai-voice-input-Bz6-HKLR.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

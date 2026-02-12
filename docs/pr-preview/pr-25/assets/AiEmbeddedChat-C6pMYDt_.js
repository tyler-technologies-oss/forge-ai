import{j as e,M as r,T as d}from"./blocks-JrCMxPUe.js";import{useMDXComponents as o}from"./index-BxQM5f6F.js";import{C as s}from"./CustomArgTypes-DQTTJ1im.js";import{A as a}from"./AiEmbeddedChat.stories-Kg6EgQoN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CCWsMM7d.js";import"./custom-element-UsVr97OX.js";import"./property-BBKQEB1X.js";import"./base-8b12zp7J.js";import"./if-defined-DErItRzL.js";import"./ref-Bdh8BJ3W.js";import"./class-map-CmGZPI76.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-CsBoXxJb.js";import"./mock-adapter-CGsAFG5D.js";import"./utils-B0W8KtS_.js";import"./ai-attachment-CqfcxrRQ.js";import"./ai-spinner-DYKUrOUQ.js";import"./tooltip-D4j8dW04.js";import"./overlay-DeX3q-AB.js";import"./ai-chat-header-Dm9seQfX.js";import"./ai-icon-BBRd7_fJ.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DTeYDIA3.js";import"./ai-dropdown-menu-D6owgupQ.js";import"./query-assigned-elements-wG5JqJX0.js";import"./popover-D34ZNWT6.js";import"./ai-dropdown-menu-item-6b9KrcIv.js";import"./ai-modal-B59zR3V8.js";import"./ai-agent-info-RGWL2qpm.js";import"./ai-agent-selector-BHwlvbkc.js";import"./ai-chat-interface-DnZT2ajC.js";import"./ai-file-picker-27kosksN.js";import"./ai-message-thread-B4QtgsHi.js";import"./ai-response-message-toolbar-D7EeVY30.js";import"./ai-empty-state-DcOxngfx.js";import"./ai-error-message-Tei9IAOk.js";import"./ai-response-message-B4btXO6j.js";import"./ai-thinking-indicator-62vovZsN.js";import"./ai-user-message-Bpc9fM_G.js";import"./ai-user-message-toolbar-BxcJ6FoG.js";import"./ai-prompt-CCEcOO_b.js";import"./ai-suggestions-DPm5Gj5M.js";import"./ai-voice-input-Br6U9Lud.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

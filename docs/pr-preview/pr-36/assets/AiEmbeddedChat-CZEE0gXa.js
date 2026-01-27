import{j as e,M as r,T as d}from"./blocks-khrG5HiV.js";import{useMDXComponents as o}from"./index-Dt5AVAWD.js";import{C as s}from"./CustomArgTypes-Bgg2eY3W.js";import{A as a}from"./AiEmbeddedChat.stories-CzfSKi77.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-dgZ-nBwM.js";import"./custom-element-UsVr97OX.js";import"./property-BZZUByg2.js";import"./base-D7HsqePj.js";import"./if-defined-Cp6CVYbP.js";import"./ref-CUB877wA.js";import"./class-map-DsLoCMMq.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-B5OoHGGA.js";import"./mock-adapter-CGsAFG5D.js";import"./utils-B0W8KtS_.js";import"./ai-attachment-BbgCXHn5.js";import"./ai-spinner-CajZeYv_.js";import"./tooltip-D4fesZ0c.js";import"./overlay-3r8LozlA.js";import"./ai-chat-header-W-DhCcJj.js";import"./ai-icon-GzldnmEj.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-BaY7bbCl.js";import"./ai-dropdown-menu-H6Cxfifr.js";import"./query-assigned-elements-JBlzPtbd.js";import"./popover-mxIhRs1L.js";import"./ai-dropdown-menu-item-__I01P1N.js";import"./ai-modal-D2ymMAUU.js";import"./ai-agent-info-prtEovBs.js";import"./ai-chat-interface-C-RR454p.js";import"./ai-file-picker-gYakvVQu.js";import"./ai-message-thread-VK3h-0Ss.js";import"./ai-response-message-toolbar-z0Ln1W_D.js";import"./ai-empty-state-ZCveNvd0.js";import"./ai-error-message-DyIKK-88.js";import"./ai-response-message-c6bc2xLf.js";import"./ai-thinking-indicator-xlHDbU-Y.js";import"./ai-user-message-Du-rYPQb.js";import"./ai-user-message-toolbar-DZ2zBiIc.js";import"./ai-prompt-C80vR0Wb.js";import"./ai-suggestions-CR4vhbfY.js";import"./ai-voice-input-ClEps3ET.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function $(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{$ as default};

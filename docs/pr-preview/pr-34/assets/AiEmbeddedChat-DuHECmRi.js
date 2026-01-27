import{j as e,M as r,T as d}from"./blocks-CS5cJiEF.js";import{useMDXComponents as o}from"./index-DOh_Lsop.js";import{C as s}from"./CustomArgTypes-DqV3dlX4.js";import{A as a}from"./AiEmbeddedChat.stories-CxB-cYYK.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-D_DovT5y.js";import"./custom-element-UsVr97OX.js";import"./property-D403KRej.js";import"./base-ft7MLERX.js";import"./if-defined-vUAuC5zN.js";import"./ref-BgnmHvmO.js";import"./class-map-CsOxxmBD.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-CwbD-OPL.js";import"./mock-adapter-CGsAFG5D.js";import"./utils-B0W8KtS_.js";import"./ai-attachment-BOhwNwzI.js";import"./ai-spinner-D8vq3p42.js";import"./tooltip-Djn416Ho.js";import"./overlay-q3ZC-rTW.js";import"./ai-chat-header-BNUKNKWy.js";import"./ai-icon-DkvgCKpO.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DUAvJWOJ.js";import"./ai-dropdown-menu-CaQ6KWWv.js";import"./query-assigned-elements-DLlctzc_.js";import"./popover-B1ZruTNh.js";import"./ai-dropdown-menu-item-D4KPfba7.js";import"./ai-modal-DDR8hi7I.js";import"./ai-agent-info-DI-nX8_o.js";import"./ai-agent-selector-2KId3UkQ.js";import"./ai-chat-interface-Dd-zVAxE.js";import"./ai-file-picker-DiAV_e8X.js";import"./ai-message-thread-D-ZSNqKw.js";import"./ai-response-message-toolbar-DWOVJ0RP.js";import"./ai-empty-state-D9Nzv8bH.js";import"./ai-error-message-CfC3g_M1.js";import"./ai-response-message-CHQR9iIf.js";import"./ai-thinking-indicator-CDM8ao8h.js";import"./ai-user-message--47UuNc-.js";import"./ai-user-message-toolbar-BcoGX5xN.js";import"./ai-prompt-D56PhfRX.js";import"./ai-suggestions-nhqUlBX2.js";import"./ai-voice-input-DKKMMfF8.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

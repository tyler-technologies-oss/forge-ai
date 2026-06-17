import{j as e,M as r,T as d}from"./blocks-Bf5WRc1F.js";import{useMDXComponents as o}from"./index-8Ktam_Bp.js";import{C as s}from"./CustomArgTypes-cEo9LCDj.js";import{A as a}from"./AiEmbeddedChat.stories-DTH4HGSy.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-VQFRW6Rd.js";import"./utils-o6RCwx9T.js";import"./custom-element-UsVr97OX.js";import"./property-BSVp4iie.js";import"./class-map-C7CLKb0Z.js";import"./if-defined-DrhCCvvH.js";import"./ref-C1y6Nghs.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-DbCDwm4N.js";import"./mock-adapter-ls0PbTjH.js";import"./utils-JMyE3xw1.js";import"./ai-chatbot-CDrDK-tv.js";import"./ai-attachment-D37701Ak.js";import"./ai-spinner-Wa7GLtdp.js";import"./tooltip-DgC1t06o.js";import"./overlay-C19QuCTe.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-5wT_NuXQ.js";import"./ai-icon-B0876ALQ.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-D9F8e5Z3.js";import"./ai-dropdown-menu-ClhUKKUr.js";import"./query-assigned-nodes-C_9eIfB3.js";import"./popover-SYq-Ien0.js";import"./ai-dropdown-menu-item-v9M_n_-m.js";import"./ai-modal-D0UqukY0.js";import"./ai-agent-info-C3KzTrxS.js";import"./ai-agent-selector-DMmdzPrj.js";import"./ai-chat-interface-OsZoANP2.js";import"./ai-conversations-panel-BecIpoI-.js";import"./ai-edit-thread-vsZT6pVF.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-Cdx-CkAy.js";import"./ai-message-thread-CbfkBYXO.js";import"./ai-response-message-toolbar-Cx2XgR-G.js";import"./ai-empty-state-gwquN_5_.js";import"./ai-error-message-a9buCJYr.js";import"./ai-response-message-CNHvzkuk.js";import"./ai-thinking-indicator-BhULKvMy.js";import"./ai-user-message-6j0dfIq3.js";import"./ai-user-message-toolbar-D6HkPNy_.js";import"./ai-prompt-CjcMypcx.js";import"./ai-suggestions-l-2eZpvN.js";import"./ai-voice-input-XuHiVzKj.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function re(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{re as default};

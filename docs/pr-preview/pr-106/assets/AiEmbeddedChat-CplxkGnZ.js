import{j as e,M as r,T as d}from"./blocks-Du7I-w0s.js";import{useMDXComponents as o}from"./index-BUFWY6Ux.js";import{C as s}from"./CustomArgTypes-CbPQOsaA.js";import{A as a}from"./AiEmbeddedChat.stories-CNyqdLtW.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C8xRadl-.js";import"./utils-qCOiSbr7.js";import"./custom-element-UsVr97OX.js";import"./property-9kUXaQBy.js";import"./class-map-C2ENwZxT.js";import"./if-defined-DXKCPRNm.js";import"./ref-B6SKxKxe.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-DJNwdcgG.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-Br3QZox9.js";import"./ai-attachment-DtK8-3YS.js";import"./ai-spinner-DP3TMXKy.js";import"./tooltip-D7h0qTcQ.js";import"./overlay-CYeebrEp.js";import"./floating-ui.dom-alButkyJ.js";import"./ai-chat-header-D8idqOl8.js";import"./ai-icon-BIWppS5y.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-tSLd9ciX.js";import"./ai-dropdown-menu-Bnim9465.js";import"./query-assigned-nodes-BjnpLmVE.js";import"./popover-B0ngxQy5.js";import"./ai-dropdown-menu-item-CfGZhIeK.js";import"./ai-modal-3PbXkgS6.js";import"./ai-agent-info-CdNcCMcZ.js";import"./ai-agent-selector-BpHIuGI9.js";import"./ai-chat-interface-2sPT7iqe.js";import"./ai-prompt-BBYky5xt.js";import"./ai-conversations-panel-JeveY1AM.js";import"./ai-edit-thread-3ICWvAGx.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-DtVBbTyy.js";import"./ai-message-thread-D1aZb-Wu.js";import"./ai-response-message-toolbar-BpJ47sk-.js";import"./ai-thinking-indicator-CQalMk_f.js";import"./ai-client-message-B7rqZgkz.js";import"./ai-empty-state-BYZODyem.js";import"./ai-error-message-CuAZnsy-.js";import"./ai-response-message-Ce3wOpg2.js";import"./ai-user-message-wUYf9itU.js";import"./ai-user-message-toolbar-JwXVyBUV.js";import"./ai-suggestions-nUFbTr0e.js";import"./ai-voice-input-B02DIlL4.js";import"./mock-adapter-BpgeerXX.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function se(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{se as default};

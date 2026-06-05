import{j as e,M as r,T as d}from"./blocks-BgnlpiwA.js";import{useMDXComponents as o}from"./index-DDgIKc--.js";import{C as s}from"./CustomArgTypes-BFo_n46R.js";import{A as a}from"./AiEmbeddedChat.stories-DL2DkfDg.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-uGLD-tBn.js";import"./utils-BIdDcZcy.js";import"./custom-element-UsVr97OX.js";import"./property-CAiA-T5o.js";import"./base-Z5d63sI5.js";import"./if-defined-CPoyYKTr.js";import"./ref-DKxFVojP.js";import"./class-map-lbcmFTqR.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-gyns9Ko2.js";import"./mock-adapter-uhjSnHDA.js";import"./utils-CX_NQepL.js";import"./ai-chatbot-D7Uouzx8.js";import"./ai-attachment-D4i4zixn.js";import"./ai-spinner-DpRsv9jS.js";import"./tooltip-VTiRL8da.js";import"./overlay-GBEMx1gD.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-B5atUPaO.js";import"./ai-icon-tfdFLywo.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CaTMwm4Y.js";import"./ai-dropdown-menu-BxNSWOn4.js";import"./query-assigned-elements-Qawe_BUo.js";import"./popover-Bumc-Pne.js";import"./query-assigned-nodes-DRut4E5e.js";import"./ai-dropdown-menu-item-BLtNmY7E.js";import"./ai-modal-ydmrnMgO.js";import"./ai-agent-info-CgAs8-Nm.js";import"./ai-agent-selector-D4l9kpt0.js";import"./ai-chat-interface-De7iCfj_.js";import"./ai-file-picker-cFuPBqoq.js";import"./ai-message-thread-DACOB24B.js";import"./ai-response-message-toolbar-D92fhyNq.js";import"./ai-empty-state-vB7pGjJ6.js";import"./ai-error-message-jCf8eTvg.js";import"./ai-response-message-C900u20n.js";import"./ai-thinking-indicator-BxYM94tB.js";import"./ai-user-message-D_KQR5nf.js";import"./ai-user-message-toolbar-DVWKub2_.js";import"./ai-prompt-BaP6Cv9V.js";import"./ai-suggestions-3Q-JTrlm.js";import"./ai-voice-input-CHhIFrZ0.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function oe(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{oe as default};

import{j as e,M as r,T as d}from"./blocks-DSF9g9on.js";import{useMDXComponents as o}from"./index-Df3GwepA.js";import{C as s}from"./CustomArgTypes-w-6WrHrC.js";import{A as a}from"./AiEmbeddedChat.stories-CdBzolwO.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-8UPTGfWp.js";import"./utils-BtZ_6oRD.js";import"./custom-element-UsVr97OX.js";import"./property-B2GkyXrM.js";import"./base-LoiOX2zq.js";import"./if-defined-CPPpTuln.js";import"./ref-lHttI-ZF.js";import"./class-map-BEP5G1KZ.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-C_pyZPQ4.js";import"./mock-adapter-uhjSnHDA.js";import"./utils-CX_NQepL.js";import"./ai-chatbot-DQmgGQyb.js";import"./ai-attachment-Dewq3KNG.js";import"./ai-spinner-0vRu4QNY.js";import"./tooltip-BJcs8whp.js";import"./overlay-BjlH-H0e.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-CJwtGDbD.js";import"./ai-icon-DogaPA1E.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-GUGjtyZX.js";import"./ai-dropdown-menu-CWUcDiJy.js";import"./query-assigned-elements-CDKYbwvR.js";import"./popover-BuWSMNFZ.js";import"./query-assigned-nodes-CRRkHBNC.js";import"./ai-dropdown-menu-item-Dwa2IXIB.js";import"./ai-modal-Dc3pKMcd.js";import"./ai-agent-info-BEkPzi2K.js";import"./ai-agent-selector-C9gfaWX3.js";import"./ai-chat-interface-CTPn9lAK.js";import"./ai-file-picker-X2KjCa9t.js";import"./ai-message-thread-C1xAPReg.js";import"./ai-response-message-toolbar-4Earc_Lg.js";import"./ai-empty-state-BheQIbqc.js";import"./ai-error-message-BqAn-bI3.js";import"./ai-response-message-4Qgorz1J.js";import"./ai-thinking-indicator-YZUtZNTl.js";import"./ai-user-message-DpgUQCXn.js";import"./ai-user-message-toolbar-BIMsyBIm.js";import"./ai-prompt-1VZNsTyH.js";import"./ai-suggestions-BoT21NDX.js";import"./ai-voice-input-rcNaCwBr.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

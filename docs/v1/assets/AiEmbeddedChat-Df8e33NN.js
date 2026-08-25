import{j as e,M as r,T as d}from"./blocks-Dcf7-di_.js";import{useMDXComponents as o}from"./index-DfFA3Jd6.js";import{C as s}from"./CustomArgTypes-CpA82i9A.js";import{A as a}from"./AiEmbeddedChat.stories-BO4cVboF.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-ByKvojHV.js";import"./utils-qCOiSbr7.js";import"./custom-element-UsVr97OX.js";import"./property-0e-aft1k.js";import"./class-map-Ch4sPrn0.js";import"./if-defined-4astQP6M.js";import"./ref-R-CyawPw.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-DaJYipl-.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-BQMOao96.js";import"./ai-attachment-C0YG5VoP.js";import"./ai-spinner-DGmqIGta.js";import"./tooltip-BCZhifmR.js";import"./overlay-QGkHfjyR.js";import"./floating-ui.dom-alButkyJ.js";import"./ai-chat-header-oUG740w7.js";import"./ai-icon-C2yeqLrn.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-De7b3on_.js";import"./ai-dropdown-menu-DR-tskYZ.js";import"./query-assigned-nodes-BOebrTYg.js";import"./popover-pj9ihTP8.js";import"./ai-dropdown-menu-item-SbQkEL42.js";import"./ai-modal-DAhYDkBT.js";import"./ai-agent-info-D1JelOvi.js";import"./ai-agent-selector-DXj65DUH.js";import"./ai-chat-interface-CWfZt0tF.js";import"./ai-prompt-Dyj1qeW_.js";import"./ai-conversations-panel-BinTueD_.js";import"./ai-edit-thread-C6GEaHMd.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-Xq3gzx-2.js";import"./ai-message-thread-yJT8o_yZ.js";import"./ai-response-message-toolbar-C6TQramB.js";import"./ai-thinking-indicator-BIFMpGEK.js";import"./ai-client-message-D3dTVx0a.js";import"./ai-empty-state-BftJTFZy.js";import"./ai-error-message-lgDRqe_O.js";import"./ai-response-message-O3T_YdU3.js";import"./ai-user-message-ByAxbkI0.js";import"./ai-user-message-toolbar-MWH-Fsis.js";import"./ai-suggestions-CFUu-o2k.js";import"./ai-voice-input-pIMcg5h9.js";import"./mock-adapter-BpgeerXX.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

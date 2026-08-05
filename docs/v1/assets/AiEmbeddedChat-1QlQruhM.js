import{j as e,M as r,T as d}from"./blocks-BM80hmij.js";import{useMDXComponents as o}from"./index-CB_jfIsc.js";import{C as s}from"./CustomArgTypes-D7R-WvqE.js";import{A as a}from"./AiEmbeddedChat.stories-DJDwLto_.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DUNYetkA.js";import"./utils-D22WoWuC.js";import"./custom-element-UsVr97OX.js";import"./property-DHETAyVB.js";import"./class-map-BOEhWNTG.js";import"./if-defined-7L8eOENh.js";import"./ref-Dj2HPsRF.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-DCyK7cgU.js";import"./mock-adapter-DbkpGE97.js";import"./markdown-BZ_ChyzU.js";import"./ai-chatbot-B3ZwbjvV.js";import"./ai-attachment-DIMNCyTg.js";import"./ai-spinner-DuHBR-2i.js";import"./tooltip-DrykBLb0.js";import"./overlay-DEeW7mIK.js";import"./floating-ui.dom-alButkyJ.js";import"./ai-chat-header-CjKrwDuF.js";import"./ai-icon-CjCqvNBT.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DoZPDywe.js";import"./ai-dropdown-menu-DEJJMfQi.js";import"./query-assigned-nodes-Dv5K2tH_.js";import"./popover-BLupMQJY.js";import"./ai-dropdown-menu-item-BL511CWT.js";import"./ai-modal-Bu8lxtQn.js";import"./ai-agent-info-DBa6Nwnx.js";import"./ai-agent-selector-qL_Vqw3J.js";import"./ai-chat-interface-DLPdVikZ.js";import"./ai-prompt-4b6cm-_m.js";import"./ai-conversations-panel-Nhb4ZTdJ.js";import"./ai-edit-thread-gK6l9JIy.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-DthkiF5D.js";import"./ai-message-thread-DQAM4nMt.js";import"./ai-response-message-toolbar-DmLaI405.js";import"./ai-thinking-indicator-DxH_2SmN.js";import"./ai-empty-state-DxP2nCgN.js";import"./ai-error-message-CgpsPnxt.js";import"./ai-response-message-DBRE3wBU.js";import"./ai-user-message-jlh3E4Qx.js";import"./ai-user-message-toolbar-D_mHNnm0.js";import"./ai-suggestions-CcY2kcAi.js";import"./ai-voice-input-acycHeNl.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

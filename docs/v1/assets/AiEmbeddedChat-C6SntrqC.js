import{j as e,M as r,T as d}from"./blocks-CUBBxk8T.js";import{useMDXComponents as o}from"./index-Djnv-rDn.js";import{C as s}from"./CustomArgTypes-B4Iykdo1.js";import{A as a}from"./AiEmbeddedChat.stories-gF9KRYZt.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DBu_aRNF.js";import"./utils-Cz69Y9xv.js";import"./custom-element-UsVr97OX.js";import"./property-BQArVD-s.js";import"./query-C8gtr_bk.js";import"./class-map-BBV8ttGz.js";import"./if-defined-CRhkeTgW.js";import"./ref-DjOzj-cY.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-DAbWkyD6.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-9S5yRTdQ.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-BE-uiccc.js";import"./ai-spinner-Br5AqTkD.js";import"./tooltip-DrDfgwx1.js";import"./overlay-Dvc5Eyv4.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-chat-header-DBOsJFNh.js";import"./ai-icon-BuJRiIq2.js";import"./ai-gradient-container-Dr30WmXl.js";import"./ai-dropdown-menu-CxNqr_uD.js";import"./query-assigned-elements-ZaFpSoD-.js";import"./popover-CJjF60ss.js";import"./query-assigned-nodes-D0nbv8bG.js";import"./ai-dropdown-menu-item-BK5hXoYD.js";import"./ai-modal-Dkk1ivr0.js";import"./ai-agent-info-Bz5rwvS-.js";import"./ai-agent-selector-9tmcSk9H.js";import"./ai-chat-interface-D4nrRxND.js";import"./ai-prompt-DXaUhYV_.js";import"./ai-conversations-panel-COwUtVSt.js";import"./ai-edit-thread-DZYOT-La.js";import"./ai-error-message-IhNgrsu3.js";import"./ai-file-picker-BQowF0gK.js";import"./ai-message-thread-D2wzu7dd.js";import"./ai-response-message-toolbar-B4opUUMS.js";import"./ai-thinking-indicator-Bz8gyAvX.js";import"./ai-client-message-D08iBtui.js";import"./ai-empty-state-cujxxYcY.js";import"./ai-response-message-U6RZqLa0.js";import"./ai-user-message-ChuUloPc.js";import"./ai-user-message-toolbar-BGUC7_Yr.js";import"./ai-suggestions-DroVpFCF.js";import"./ai-voice-input-VVQ5qY_U.js";import"./mock-adapter-BpgeerXX.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function ae(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{ae as default};

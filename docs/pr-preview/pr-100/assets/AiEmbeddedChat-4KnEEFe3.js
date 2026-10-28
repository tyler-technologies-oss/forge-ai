import{j as e,M as r,T as d}from"./blocks-BMq_-Ydb.js";import{useMDXComponents as o}from"./index-Db33oXfe.js";import{C as s}from"./CustomArgTypes-CSxF1WY7.js";import{A as a}from"./AiEmbeddedChat.stories-C280VM41.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B3xO85yu.js";import"./utils-DFiK_7l2.js";import"./custom-element-UsVr97OX.js";import"./property-D2dUUzhA.js";import"./query-DCR03eDw.js";import"./class-map-jjxocif1.js";import"./if-defined-BBSjWmC5.js";import"./ref-CENuII8n.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-CReW923m.js";import"./provide-Bxw6gKTd.js";import"./consume-D3B5J4hk.js";import"./ai-message-thread-DNhqfRuH.js";import"./utils-BRoM8yNS.js";import"./ai-response-message-toolbar-Dn6fp7-k.js";import"./tooltip-BN7xokHm.js";import"./overlay-DGgKM79R.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./popover-DxMFPUmL.js";import"./ai-spinner-CwmkST4L.js";import"./ai-thinking-indicator-BYQv71wk.js";import"./ai-empty-state-BgxUEWo8.js";import"./ai-client-message-Dh3E9FS3.js";import"./ai-error-message-B1GBxPJ6.js";import"./query-assigned-nodes-D6imQ5Dm.js";import"./ai-response-message-DqlZnJMh.js";import"./ai-user-message-CnUBMi1Z.js";import"./ai-user-message-toolbar-DQ8-UGFB.js";import"./agent-adapter-CiODA7QC.js";import"./ai-chatbot-BIaRJXR0.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-D7uVJ13P.js";import"./ai-chat-header-DLif8hU0.js";import"./ai-icon-dzZni7F9.js";import"./ai-gradient-container-CpOSyVge.js";import"./ai-dropdown-menu-CmCMkh46.js";import"./query-assigned-elements-B6zK_KiS.js";import"./ai-dropdown-menu-item-Df4XBUJM.js";import"./ai-modal-NnBjKH5s.js";import"./ai-agent-info-DVjbCllq.js";import"./ai-agent-selector-DUr1_o1G.js";import"./ai-chat-interface-7b4w3LHw.js";import"./ai-prompt-DRa1YP29.js";import"./ai-conversations-panel-QNmNBGdK.js";import"./ai-edit-thread-FiNy_BDt.js";import"./ai-file-picker-y20tF4p-.js";import"./ai-suggestions-Cwx4Pk76.js";import"./ai-voice-input-Cj-SLDrh.js";import"./mock-adapter-LuDjfxfL.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
`,e.jsx(d,{children:"AI Embedded Chat"}),`
`,e.jsxs(t.p,{children:["The AI Embedded Chat component is a structured form factor component that provides an embedded chat interface for inline page usage with built-in composition of ",e.jsx(t.code,{children:"ai-gradient-container"})," and ",e.jsx(t.code,{children:"ai-chat-interface"})," components. This component handles all the wiring and event management automatically, providing an easy-to-use solution for embedded chat interfaces that can expand to modal view when needed."]}),`
`,e.jsx(t.h2,{id:"features",children:"Features"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Structured composition"}),": Combines ai-gradient-container and ai-chat-interface components automatically"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Dual view modes"}),": Renders embedded inline content that can expand to modal view"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Built-in event handling"}),": Manages expand/collapse events and modal interactions internally"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Gradient theming"}),": Supports multiple gradient intensity variants (low, medium, high, disabled)"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Expandable interface"}),": Built-in expand functionality to switch from embedded to modal view"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Customizable slots"}),": Supports slotting messages, suggestions, and custom prompt components"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Rich API"}),": Provides methods and events for programmatic control"]}),`
`]}),`
`,e.jsx(t.h2,{id:"when-to-use",children:"When to Use"}),`
`,e.jsx(t.p,{children:"Use the AI Embedded Chat component when you want:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"A chat interface embedded directly in page content"}),`
`,e.jsx(t.li,{children:"Ability to expand the chat to a larger modal view for better focus"}),`
`,e.jsx(t.li,{children:"Built-in gradient theming and visual polish"}),`
`,e.jsx(t.li,{children:"Standard embedded chat behavior without custom container logic"}),`
`,e.jsx(t.li,{children:"A component that seamlessly transitions between embedded and modal states"}),`
`,e.jsx(t.li,{children:'A component that "just works" out of the box'}),`
`]}),`
`,e.jsxs(t.p,{children:["For more complex compositions or custom containers, consider using the atomic ",e.jsx(t.code,{children:"ai-gradient-container"}),", ",e.jsx(t.code,{children:"ai-modal"}),", and ",e.jsx(t.code,{children:"ai-chat-interface"})," components directly."]}),`
`,e.jsx(t.h2,{id:"usage-patterns",children:"Usage Patterns"}),`
`,e.jsx(t.h3,{id:"embedded-mode-default",children:"Embedded Mode (Default)"}),`
`,e.jsxs(t.p,{children:["The component renders as an embedded chat interface within the ",e.jsx(t.code,{children:"ai-gradient-container"}),", perfect for inline page content. Users can expand to modal view using the expand button in the chat header."]}),`
`,e.jsx(t.h3,{id:"modal-mode-expanded",children:"Modal Mode (Expanded)"}),`
`,e.jsxs(t.p,{children:["When expanded, the chat interface moves to a modal overlay powered by ",e.jsx(t.code,{children:"ai-modal"}),", providing a focused chat experience. The modal includes minimize functionality to return to embedded mode."]}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(s,{})]})}function ce(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{ce as default};

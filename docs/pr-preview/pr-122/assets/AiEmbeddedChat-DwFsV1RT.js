import{j as e,M as r,T as d}from"./blocks-C-nyj0nO.js";import{useMDXComponents as o}from"./index-DArUcUZ3.js";import{C as s}from"./CustomArgTypes-DKPc1hnp.js";import{A as a}from"./AiEmbeddedChat.stories-SqIgGh0G.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-QhIu5TiA.js";import"./utils-CIlUGhRV.js";import"./custom-element-UsVr97OX.js";import"./property-C85Jkzxt.js";import"./query-DrJfEJSC.js";import"./class-map-yF7Cpugo.js";import"./if-defined-CCXpVXKP.js";import"./ref-Z-WjPzVT.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-C3e1W7Qc.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-B4bbHXKC.js";import"./ai-chatbot-D96y9qZx.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-CsaojOAH.js";import"./ai-spinner-BuTbnw2y.js";import"./tooltip-dpIAq2Tl.js";import"./overlay-BHSA_pee.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-chat-header-BBHodklC.js";import"./ai-icon-D2AFCOwq.js";import"./ai-gradient-container-DoS9ZGQz.js";import"./ai-dropdown-menu-DW44vsb9.js";import"./query-assigned-elements-B2HgVg8W.js";import"./popover-CtCRQwou.js";import"./query-assigned-nodes-CUyxxjTV.js";import"./ai-dropdown-menu-item-BycwLbr6.js";import"./ai-modal-l5k4NhOG.js";import"./ai-agent-info-LxHZfx-R.js";import"./ai-agent-selector-DjpEbCs7.js";import"./ai-chat-interface-Db_82C4C.js";import"./ai-prompt-9Q6YLXVL.js";import"./ai-conversations-panel-BMK9_sDU.js";import"./ai-edit-thread-C1yksJIq.js";import"./ai-error-message-C3CfWpo5.js";import"./ai-file-picker-ChFzoTmQ.js";import"./ai-message-thread-7xtg68Kn.js";import"./ai-response-message-toolbar-S0Cm7Ca3.js";import"./ai-thinking-indicator-D4_UYlxp.js";import"./ai-client-message-BaUIrDx2.js";import"./ai-empty-state-Dxl1RzpO.js";import"./ai-response-message-MQUGBxhw.js";import"./ai-user-message-BuLyIyqZ.js";import"./ai-user-message-toolbar-DqHI4bFR.js";import"./ai-suggestions-B66AoGpv.js";import"./ai-voice-input-DuFu2Gez.js";import"./mock-adapter-D0dkxTL5.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

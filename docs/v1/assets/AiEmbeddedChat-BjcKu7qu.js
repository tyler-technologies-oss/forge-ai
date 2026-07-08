import{j as e,M as r,T as d}from"./blocks-BaGBbzHk.js";import{useMDXComponents as o}from"./index-Cm2H8N8e.js";import{C as s}from"./CustomArgTypes-DXgPgTNu.js";import{A as a}from"./AiEmbeddedChat.stories-B4h3WORP.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CF9r1dbF.js";import"./utils-MZ-Apu34.js";import"./custom-element-UsVr97OX.js";import"./property-B2e6J01Q.js";import"./class-map-C1LG_UmT.js";import"./if-defined-CwBVknGD.js";import"./ref-BGspCUwM.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-D-4B77pY.js";import"./mock-adapter-DymPxr2h.js";import"./markdown-C0nyZhUE.js";import"./ai-chatbot-CYkJiCew.js";import"./ai-attachment-D9PZMLSQ.js";import"./ai-spinner-gIrXpSIj.js";import"./tooltip-4yAWEj8K.js";import"./overlay-C4R2Atfg.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-D05HNpY9.js";import"./ai-icon-Bosn_pQe.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-i8zvC4wC.js";import"./ai-dropdown-menu-CSN5rE17.js";import"./query-assigned-nodes-BCZijQiN.js";import"./popover-B9jS5rTM.js";import"./ai-dropdown-menu-item-qSQDJME8.js";import"./ai-modal-BrKBNzNg.js";import"./ai-agent-info-BsK3U8ZB.js";import"./ai-agent-selector-CbcaAfj_.js";import"./ai-chat-interface-CBwRzUFE.js";import"./ai-prompt-Bxd2nryu.js";import"./ai-conversations-panel-CbfnduTY.js";import"./ai-edit-thread-Cyk8sVO8.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-Dn1r6g8m.js";import"./ai-message-thread-CShBz8uu.js";import"./ai-response-message-toolbar-CHTQSY6N.js";import"./ai-empty-state-BOMlt_-r.js";import"./ai-error-message-BhoeyZEQ.js";import"./ai-response-message-RvPb5AQ_.js";import"./ai-thinking-indicator-d9EmIVpo.js";import"./ai-user-message-Dnr2ecqU.js";import"./ai-user-message-toolbar-BHlYEwR2.js";import"./ai-suggestions-Cn0H8rxp.js";import"./ai-voice-input-CusnSWCW.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

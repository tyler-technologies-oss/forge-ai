import{j as e,M as r,T as d}from"./blocks-CcxUb8Td.js";import{useMDXComponents as o}from"./index-cd_Rsv4m.js";import{C as s}from"./CustomArgTypes-xO0HNyac.js";import{A as a}from"./AiEmbeddedChat.stories-D8IlruVf.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CoBfPbd3.js";import"./utils-CrrWgVk1.js";import"./custom-element-UsVr97OX.js";import"./property-lAMkMHoo.js";import"./query-MQ7BNTpj.js";import"./class-map-CkAI6cI1.js";import"./if-defined-Dm2JAjLe.js";import"./ref-CAcp34Hu.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-k0wcZTHP.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-CgtyihLO.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-CoN8a1zT.js";import"./ai-spinner-U03qnrAs.js";import"./tooltip-D-NPuATJ.js";import"./overlay-TN63hsPd.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-chat-header-D62aArnx.js";import"./ai-icon-CnrKd4UV.js";import"./ai-gradient-container-BCZdc7VL.js";import"./ai-dropdown-menu-DAdzF-nA.js";import"./query-assigned-elements-C1zrVGr5.js";import"./popover-lRCtY-gQ.js";import"./query-assigned-nodes-CojvWIzB.js";import"./ai-dropdown-menu-item-BztS6IG2.js";import"./ai-modal-DynTLWJm.js";import"./ai-agent-info-YgUa0ynP.js";import"./ai-agent-selector-bIJiE5Lw.js";import"./ai-chat-interface-EmgyWoxe.js";import"./ai-prompt-UIIzSDSm.js";import"./ai-conversations-panel-Bsq8KDoc.js";import"./ai-edit-thread-2nnUlgVw.js";import"./ai-error-message-BZmNRV34.js";import"./ai-file-picker-C-zOE4d_.js";import"./ai-message-thread-CY4W_uEp.js";import"./ai-response-message-toolbar-DvydAOQA.js";import"./ai-thinking-indicator-CzwpFkYa.js";import"./ai-client-message-D76xHX7W.js";import"./ai-empty-state-PIQzzuRJ.js";import"./ai-response-message-Bylt3dgE.js";import"./ai-user-message-C2ugsdQw.js";import"./ai-user-message-toolbar-CwSgDqSO.js";import"./ai-suggestions-Btt3SE3e.js";import"./ai-voice-input-troo3ip_.js";import"./mock-adapter-BpgeerXX.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

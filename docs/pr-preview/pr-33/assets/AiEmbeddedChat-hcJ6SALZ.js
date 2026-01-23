import{j as e,M as r,T as d}from"./blocks-BOle59SW.js";import{useMDXComponents as o}from"./index-oPeopUbi.js";import{C as s}from"./CustomArgTypes-9joh3H43.js";import{A as a}from"./AiEmbeddedChat.stories-C4pSLDG3.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6yLHJaW.js";import"./custom-element-UsVr97OX.js";import"./property-DJUhGJO9.js";import"./base-Cj5Szx13.js";import"./if-defined-7znUiy2v.js";import"./ref-LLAOaWEy.js";import"./class-map-CmWrXl8H.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-CPylIR2d.js";import"./mock-adapter-CGsAFG5D.js";import"./utils-B0W8KtS_.js";import"./ai-attachment-qA20rlHT.js";import"./ai-spinner-BCesSXe7.js";import"./tooltip-CfrmWiUA.js";import"./overlay-DVSR1Ofg.js";import"./ai-chat-header-DoelVMTt.js";import"./ai-icon-Dl9O9wKG.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DKqWsxNC.js";import"./ai-dropdown-menu-B0YW1qD1.js";import"./query-assigned-elements-C3kDGJ1i.js";import"./popover-C1nsSmlm.js";import"./ai-dropdown-menu-item-CQVscBVK.js";import"./ai-modal-BAug-PIV.js";import"./ai-agent-info-DxAsrPg5.js";import"./ai-chat-interface-BMHRubVK.js";import"./ai-file-picker-BHr51wvT.js";import"./ai-message-thread-CNyGohbP.js";import"./ai-response-message-toolbar-QW1IrdLY.js";import"./ai-empty-state-Boj7zuTF.js";import"./ai-error-message-B4vgmvnV.js";import"./ai-response-message-Ck1N5TPU.js";import"./ai-thinking-indicator-DJKHRvN-.js";import"./ai-user-message-DFuBSXvA.js";import"./ai-user-message-toolbar-CFYdc8C8.js";import"./ai-prompt-DuKKRCTx.js";import"./ai-suggestions-DyxL6Ek8.js";import"./ai-voice-input-Cg327jN9.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function $(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{$ as default};

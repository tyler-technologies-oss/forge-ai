import{j as e,M as r,T as d}from"./blocks-B79mNY7L.js";import{useMDXComponents as o}from"./index-BkZ5KD2i.js";import{C as s}from"./CustomArgTypes-Bfg3odDp.js";import{A as a}from"./AiEmbeddedChat.stories-Dqz_xv6V.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Jty1B146.js";import"./utils-BgonhVMT.js";import"./custom-element-UsVr97OX.js";import"./property-D8S6TFWF.js";import"./query-Bv8qncBY.js";import"./class-map-BnDuJcY3.js";import"./if-defined-DASwrS-W.js";import"./ref-CmNVDUiu.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-FUDfkXgE.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-D5F7gnXn.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-CgEmVHKD.js";import"./ai-spinner-B_ag7T2K.js";import"./tooltip-DOUhDH58.js";import"./overlay-udXoHIA3.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-chat-header-DWnyMbxC.js";import"./ai-icon-zeOV5_SL.js";import"./ai-gradient-container-BhnTzZQK.js";import"./ai-dropdown-menu-VafAhu7n.js";import"./query-assigned-elements-CTggAr8Y.js";import"./popover-DjVMvmJi.js";import"./query-assigned-nodes-BpQCkmmG.js";import"./ai-dropdown-menu-item-B1PXE9uX.js";import"./ai-modal-CbLRoZje.js";import"./ai-agent-info-BH5DpS1w.js";import"./ai-agent-selector-DAkhpprA.js";import"./ai-chat-interface-CEZS_D9P.js";import"./ai-prompt-BQqUQ6nD.js";import"./ai-conversations-panel-CZRH994L.js";import"./ai-edit-thread-BOeal4Ry.js";import"./ai-error-message-DWySf7sS.js";import"./ai-file-picker-DKy2kcVj.js";import"./ai-message-thread-6lfDleCo.js";import"./ai-response-message-toolbar-Co63aJYP.js";import"./ai-thinking-indicator-Cfaktn-p.js";import"./ai-client-message-DuIOW6Ap.js";import"./ai-empty-state-DS-Vj4ah.js";import"./ai-response-message-BMpVLoDN.js";import"./ai-user-message-CLB6GGSL.js";import"./ai-user-message-toolbar-D4gRbsUt.js";import"./ai-suggestions-Bdoi437i.js";import"./ai-voice-input-BRHZl4cB.js";import"./mock-adapter-BpgeerXX.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

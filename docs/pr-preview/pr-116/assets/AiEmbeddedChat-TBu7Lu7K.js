import{j as e,M as r,T as d}from"./blocks-BcbKRsSd.js";import{useMDXComponents as o}from"./index-Bvspi5X_.js";import{C as s}from"./CustomArgTypes-S9YR2g0r.js";import{A as a}from"./AiEmbeddedChat.stories-IL1HpIhh.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BpFBzDrY.js";import"./utils-xFDN5OoI.js";import"./custom-element-UsVr97OX.js";import"./property-gR_NzGdO.js";import"./query-CZCG-zk4.js";import"./class-map-GwhremVD.js";import"./if-defined-Dkcaqdnb.js";import"./ref-BfDzH1Dq.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-Cs3ASxe2.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-CGtDWSh_.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-OAmcy0kg.js";import"./ai-spinner-CoR9Ao4i.js";import"./tooltip-BiEXPFoc.js";import"./overlay-C0QCfe2r.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-chat-header-CEmRavcR.js";import"./ai-icon-BRHZ6MBG.js";import"./ai-gradient-container-DSZ1ONR6.js";import"./ai-dropdown-menu-B6Kp4QAp.js";import"./query-assigned-elements-pTSbYizz.js";import"./popover-mhsNlbav.js";import"./query-assigned-nodes-BqOKN2yG.js";import"./ai-dropdown-menu-item-fGxuVZvS.js";import"./ai-modal-CPMj5sHf.js";import"./ai-agent-info-23ST8Mud.js";import"./ai-agent-selector-C1n7Whhn.js";import"./ai-chat-interface-BtXrWrmS.js";import"./ai-prompt-BX6kyJQA.js";import"./ai-conversations-panel-CS-A-Alc.js";import"./ai-edit-thread-jwIM78W5.js";import"./ai-error-message-mFotfp2X.js";import"./ai-file-picker-D0TSFxfl.js";import"./ai-message-thread-BSdhbDo-.js";import"./ai-response-message-toolbar-CFAzxHl7.js";import"./ai-thinking-indicator-BqEW4WcC.js";import"./ai-client-message-DGJFFit5.js";import"./ai-empty-state-Ba-qPfDz.js";import"./ai-response-message-CJHTE7E0.js";import"./ai-user-message-CbEDogWc.js";import"./ai-user-message-toolbar-DgBTt1kE.js";import"./ai-suggestions-CFdRUVOR.js";import"./ai-voice-input-BAdJEWh4.js";import"./mock-adapter-BpgeerXX.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

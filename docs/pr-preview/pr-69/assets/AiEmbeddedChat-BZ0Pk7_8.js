import{j as e,M as r,T as d}from"./blocks-Cn5kBID7.js";import{useMDXComponents as o}from"./index-C3Nh2RHI.js";import{C as s}from"./CustomArgTypes-DQQk8lj0.js";import{A as a}from"./AiEmbeddedChat.stories-Cd8N5Ie0.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Dr-J6bwV.js";import"./utils-Jm8kOquT.js";import"./custom-element-UsVr97OX.js";import"./property-dgX3iYk5.js";import"./class-map-DyRR3fyj.js";import"./if-defined-o73TcvK0.js";import"./ref-CfJWJ6vK.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-D9qo4PqY.js";import"./mock-adapter-uhjSnHDA.js";import"./utils-CX_NQepL.js";import"./ai-chatbot-x7UGXaMP.js";import"./ai-attachment-f56FSVKS.js";import"./ai-spinner-Sr3i10Cr.js";import"./tooltip-C9DFVL6T.js";import"./overlay-ss2Q-wUK.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-DlQySTdq.js";import"./ai-icon-f5hzzAot.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DoYcO_Xp.js";import"./ai-dropdown-menu-B6NV9_lx.js";import"./query-assigned-nodes-C3xfVzRf.js";import"./popover-Tv85o8T9.js";import"./ai-dropdown-menu-item-BBaI329K.js";import"./ai-modal-CMj2oQWi.js";import"./ai-agent-info-DDNVZPhG.js";import"./ai-agent-selector-D751YZxn.js";import"./ai-chat-interface-BOQoJdqv.js";import"./ai-conversations-panel-DX3opgMp.js";import"./ai-edit-thread-Cq2UsNtc.js";import"./ai-file-picker-WSWEi89_.js";import"./ai-message-thread-Btq4ZDZa.js";import"./ai-response-message-toolbar-DSsb-nUW.js";import"./ai-empty-state-C8P23Xaw.js";import"./ai-error-message-D97Xs8DQ.js";import"./ai-response-message-DY4omMM5.js";import"./ai-thinking-indicator-H9wc87XJ.js";import"./ai-user-message-Bi5TWRTJ.js";import"./ai-user-message-toolbar-BhdqjEAj.js";import"./ai-prompt-C8lEW6LK.js";import"./ai-suggestions-DKTYNVgq.js";import"./ai-voice-input-BOANl2AE.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function oe(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{oe as default};

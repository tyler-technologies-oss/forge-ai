import{j as e,M as r,T as d}from"./blocks-E4-pjSju.js";import{useMDXComponents as o}from"./index-Cc-fxKYB.js";import{C as s}from"./CustomArgTypes-D1DQGMUd.js";import{A as a}from"./AiEmbeddedChat.stories-e3Q9T7xb.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CzPtoTTq.js";import"./utils-R5KNxOhk.js";import"./custom-element-UsVr97OX.js";import"./property-DPXn_ynT.js";import"./query-D95vg08y.js";import"./class-map-DxWtJcVW.js";import"./if-defined-T1rTDN5e.js";import"./ref-BR2RbN_M.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-P-xbLe9w.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-2AMQdmmC.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-jAsB3zXU.js";import"./ai-spinner-B0W159Hj.js";import"./tooltip-olkHsWti.js";import"./overlay-BxFiL-e7.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-chat-header-BstH2DkW.js";import"./ai-icon-Cv6sBGat.js";import"./ai-gradient-container-CQ8bWpoF.js";import"./ai-dropdown-menu-UQNqGPum.js";import"./query-assigned-elements-BBTbZsG0.js";import"./popover-e1_COxic.js";import"./query-assigned-nodes-tAffZHpD.js";import"./ai-dropdown-menu-item-CToDhG4w.js";import"./ai-modal-7EWNBzsb.js";import"./ai-agent-info-3JN4sr6G.js";import"./ai-agent-selector-CxEa-0gS.js";import"./ai-chat-interface-DBJNY0Jo.js";import"./ai-prompt-DuqgW7Bn.js";import"./ai-conversations-panel-B1Gxegc-.js";import"./ai-edit-thread-BL1hBRlx.js";import"./ai-error-message-kGPNB8Zi.js";import"./ai-file-picker-DNCJTIWV.js";import"./ai-message-thread-BL42rdpQ.js";import"./ai-response-message-toolbar-CeJpNO3B.js";import"./ai-thinking-indicator-BuzrD_Ke.js";import"./ai-client-message-DiqQF9LK.js";import"./ai-empty-state-CfZ3QD39.js";import"./ai-response-message-DSw6wkgU.js";import"./ai-user-message-Cy00Flb0.js";import"./ai-user-message-toolbar-CEweTg7K.js";import"./ai-suggestions-Cz7hNUdK.js";import"./ai-voice-input-NB15vE87.js";import"./mock-adapter-BpgeerXX.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

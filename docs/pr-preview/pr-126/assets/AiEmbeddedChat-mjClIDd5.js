import{j as e,M as r,T as d}from"./blocks-Bv8tAifz.js";import{useMDXComponents as o}from"./index-BTxFUl8D.js";import{C as s}from"./CustomArgTypes-Bm3PdE7h.js";import{A as a}from"./AiEmbeddedChat.stories-CN0rlNkM.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CPTie-W7.js";import"./utils-bJnmGhiF.js";import"./custom-element-UsVr97OX.js";import"./property-D-1HWsM9.js";import"./query-CaWJOPrJ.js";import"./class-map-DOB-jRhc.js";import"./if-defined-BTZdaAym.js";import"./ref-DbexwzlC.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-BFAfOC_9.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-B4bbHXKC.js";import"./ai-chatbot-DYCwulmE.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-bJWFSn4t.js";import"./ai-spinner-D1u3FWIQ.js";import"./tooltip-CpxUJQih.js";import"./overlay-CkKV5FeF.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-chat-header-xZ8IIZCY.js";import"./ai-icon-D2VrW57G.js";import"./ai-gradient-container-B2NzgO2b.js";import"./ai-dropdown-menu-d3PK_zLX.js";import"./query-assigned-elements-K_pcg0US.js";import"./popover-D2NPUIac.js";import"./query-assigned-nodes-tqgoKn5L.js";import"./ai-dropdown-menu-item-DnZqfK33.js";import"./ai-modal-3mt_Thbl.js";import"./ai-agent-info-DK1x6GxF.js";import"./ai-agent-selector-Cd9FqDKP.js";import"./ai-chat-interface-9kcgUkRV.js";import"./ai-prompt-BtLqI1PI.js";import"./ai-conversations-panel-CsKI9GWj.js";import"./ai-edit-thread-BubYC1lh.js";import"./ai-error-message-B5u83iEi.js";import"./ai-file-picker-Qj8kcY4g.js";import"./ai-message-thread-Dlvnz7IW.js";import"./ai-response-message-toolbar-BKn5kDf3.js";import"./context-consumer-CIN_xSLl.js";import"./ai-artifact-card-Dva5br2Z.js";import"./ai-thinking-indicator-TGm8KM5x.js";import"./ai-client-message-hMoHGeXO.js";import"./ai-empty-state-DHWp9Ruj.js";import"./ai-response-message-CDpehDQI.js";import"./ai-user-message-Df6gmbQi.js";import"./ai-user-message-toolbar-HjjiW1Mc.js";import"./ai-suggestions-VaqSGb7N.js";import"./ai-voice-input-CoiRvehQ.js";import"./mock-adapter-BpXd5o7R.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

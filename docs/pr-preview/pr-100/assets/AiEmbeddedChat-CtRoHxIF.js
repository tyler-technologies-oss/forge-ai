import{j as e,M as r,T as d}from"./blocks-ZZkA_lAe.js";import{useMDXComponents as o}from"./index-5klHlCGH.js";import{C as s}from"./CustomArgTypes-BWEo-bEI.js";import{A as a}from"./AiEmbeddedChat.stories-C8L1yIqG.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-d1QanYZZ.js";import"./utils-CeukVkDl.js";import"./custom-element-UsVr97OX.js";import"./property-Bv8AywkK.js";import"./query-Dj9Gy6GR.js";import"./class-map-BCd6fXy0.js";import"./if-defined-XXZ5nTor.js";import"./ref-BNaYlydZ.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-Da8YOs9E.js";import"./provide-Bxw6gKTd.js";import"./consume-D3B5J4hk.js";import"./ai-message-thread-xooSp2M9.js";import"./utils-BRoM8yNS.js";import"./ai-response-message-toolbar-DSDBgrss.js";import"./tooltip-Dlyf_6N4.js";import"./overlay-D9ZPfswH.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./popover-CYaiPqAr.js";import"./ai-spinner-CJAAM4Ji.js";import"./ai-thinking-indicator-DnFsICHz.js";import"./ai-empty-state-B220FOjH.js";import"./ai-client-message-C5xSsmc7.js";import"./ai-error-message-i-qhNYHL.js";import"./query-assigned-nodes-BscC51yq.js";import"./ai-response-message-B2ibHXWL.js";import"./ai-user-message-DA2FC_8u.js";import"./ai-user-message-toolbar-kawvQKl3.js";import"./agent-adapter-CiODA7QC.js";import"./ai-chatbot-BRFt-0F2.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-BREBHBsi.js";import"./ai-chat-header-BJ8GqQmn.js";import"./ai-icon-D7jf8qNX.js";import"./ai-gradient-container-Be14wB0V.js";import"./ai-dropdown-menu-1Hqd3X6m.js";import"./query-assigned-elements-B8sE8lrR.js";import"./ai-dropdown-menu-item-BhEqi4ZA.js";import"./ai-modal-Bg7PD0fW.js";import"./ai-agent-info-CaV-nC98.js";import"./ai-agent-selector-CjOUA-d-.js";import"./ai-chat-interface-ckiL2sMs.js";import"./ai-prompt-BwvIlho5.js";import"./ai-conversations-panel-BmaS8rHH.js";import"./ai-edit-thread-DujpKKN-.js";import"./ai-file-picker-CE3uKLW3.js";import"./ai-suggestions-VHiDf_C_.js";import"./ai-voice-input-7jL0bDij.js";import"./mock-adapter-LuDjfxfL.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

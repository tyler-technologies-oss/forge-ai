import{j as e,M as r,T as d}from"./blocks-KkMzt7TY.js";import{useMDXComponents as o}from"./index-CosoE3kp.js";import{C as s}from"./CustomArgTypes-BAeHVQQN.js";import{A as a}from"./AiEmbeddedChat.stories-CREYblWM.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Cq14Cal9.js";import"./utils-Dlg0BKcN.js";import"./custom-element-UsVr97OX.js";import"./property-4P8QtmFM.js";import"./class-map-BwIlHIP7.js";import"./if-defined-V5BCcuZk.js";import"./ref-CcVIihXV.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-Ds77Pxeh.js";import"./mock-adapter-ph_xQ6k2.js";import"./markdown-CtLA8yAF.js";import"./ai-chatbot-8EMhyArx.js";import"./ai-attachment-DMo7QW-p.js";import"./ai-spinner-CF6rpjZe.js";import"./tooltip-oHwsPZSJ.js";import"./overlay-UwRAzJcm.js";import"./floating-ui.dom-alButkyJ.js";import"./ai-chat-header-C4H3HBgJ.js";import"./ai-icon-BYneJb7G.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-BBO37w0K.js";import"./ai-dropdown-menu-lfsd-jEM.js";import"./query-assigned-nodes-B5O7S5sq.js";import"./popover-CHs-SCXt.js";import"./ai-dropdown-menu-item-CaKtf9PY.js";import"./ai-modal-HcAy80MU.js";import"./ai-agent-info-C7JLen4S.js";import"./ai-agent-selector-CWaKjDxR.js";import"./ai-chat-interface-nJEnrrc9.js";import"./ai-prompt-D2SO-Ska.js";import"./ai-conversations-panel-DhTapwi5.js";import"./ai-edit-thread-Bm89OxkI.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-1G-oU0V1.js";import"./ai-message-thread-0b1gjnuW.js";import"./ai-response-message-toolbar-CwWT0vyj.js";import"./ai-thinking-indicator-BRs8Ju2X.js";import"./ai-empty-state-uBjUTE2z.js";import"./ai-error-message-CtXJ93DN.js";import"./ai-response-message-DoiRROCh.js";import"./ai-user-message-BMTC_YM6.js";import"./ai-user-message-toolbar-DdrJ0Tip.js";import"./ai-suggestions-CfCjFXFt.js";import"./ai-voice-input-CiboE_8I.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

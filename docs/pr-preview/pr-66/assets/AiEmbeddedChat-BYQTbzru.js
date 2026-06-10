import{j as e,M as r,T as d}from"./blocks-D2cBcbrw.js";import{useMDXComponents as o}from"./index-DZyY4IGi.js";import{C as s}from"./CustomArgTypes-BHxgZb9f.js";import{A as a}from"./AiEmbeddedChat.stories-C81_mOLW.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-GE7whtSK.js";import"./utils-D6aZDhht.js";import"./custom-element-UsVr97OX.js";import"./property-03qbO25n.js";import"./base-Df1FQLg5.js";import"./if-defined-BFvdBFgM.js";import"./ref-DIcpijIK.js";import"./class-map-CqUkso6z.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-zFmTIPL4.js";import"./mock-adapter-uhjSnHDA.js";import"./utils-CX_NQepL.js";import"./ai-chatbot-CaSrEvMy.js";import"./ai-attachment-D_ogjbAu.js";import"./ai-spinner-Bnen5CG9.js";import"./tooltip-BCmLBQs1.js";import"./overlay-C9g9EA1V.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-BVdftkeh.js";import"./ai-icon-EqONRjTN.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-Dd31vSHI.js";import"./ai-dropdown-menu-Cixyeyq0.js";import"./query-assigned-elements-DijmKiKe.js";import"./popover-5RcyX4Ha.js";import"./query-assigned-nodes-C5L24fzr.js";import"./ai-dropdown-menu-item-JYmVxfGs.js";import"./ai-modal-CumIQGEM.js";import"./ai-agent-info-B0lG-jNq.js";import"./ai-agent-selector-DySmbV9P.js";import"./ai-chat-interface-Bjr0wOFt.js";import"./ai-conversations-panel-sIxf7zuD.js";import"./ai-file-picker-vmdKMOWF.js";import"./ai-message-thread-z4zwd3MG.js";import"./ai-response-message-toolbar-ob1DSGvu.js";import"./ai-empty-state-DRFhbD7x.js";import"./ai-error-message-BT4FDETz.js";import"./ai-response-message-BDHYeNDZ.js";import"./ai-thinking-indicator-YUEMfsdA.js";import"./ai-user-message-PltEH_wL.js";import"./ai-user-message-toolbar-GQa8b_lQ.js";import"./ai-prompt-BinTYY3w.js";import"./ai-suggestions-hCrvLU7d.js";import"./ai-voice-input-CzohorJV.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

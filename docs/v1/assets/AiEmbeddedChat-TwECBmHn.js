import{j as e,M as r,T as d}from"./blocks-DyxQ5h-6.js";import{useMDXComponents as o}from"./index-Dpp0QbRa.js";import{C as s}from"./CustomArgTypes-BFn1GFq2.js";import{A as a}from"./AiEmbeddedChat.stories-yNyDB-i1.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Zcg0BVm6.js";import"./utils-MZ-Apu34.js";import"./custom-element-UsVr97OX.js";import"./property-BwdZQfVj.js";import"./class-map-DiAfL0Hh.js";import"./if-defined-B6Pmx3Zn.js";import"./ref-C44v86zn.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-CW9EDohY.js";import"./mock-adapter-DymPxr2h.js";import"./markdown-C0nyZhUE.js";import"./ai-chatbot-_1tXP1Ou.js";import"./ai-attachment-DLm2hDpi.js";import"./ai-spinner-BmIi6t8a.js";import"./tooltip-D2YWuTc5.js";import"./overlay-BozJNug4.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-6yKCWjyb.js";import"./ai-icon-h0OKGan7.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-wJLAmrRD.js";import"./ai-dropdown-menu-CHj1KAHe.js";import"./query-assigned-nodes-38n7MnEB.js";import"./popover-DBDlbPqH.js";import"./ai-dropdown-menu-item-CjAFJb_S.js";import"./ai-modal-De63d5qd.js";import"./ai-agent-info-xzAg_x0f.js";import"./ai-agent-selector-CPUj_l8D.js";import"./ai-chat-interface-CcpsKL1t.js";import"./ai-prompt-Bm6Gs2Jp.js";import"./ai-conversations-panel-DPcOlOdM.js";import"./ai-edit-thread-uPP8YqLG.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-kialF_tK.js";import"./ai-message-thread-DGj-5SCm.js";import"./ai-response-message-toolbar-DOwuhBFk.js";import"./ai-empty-state-5CBsPnmE.js";import"./ai-error-message-C9FaSZU8.js";import"./ai-response-message-_HJIXmN3.js";import"./ai-thinking-indicator-CkyYaPr3.js";import"./ai-user-message-DIUScw3i.js";import"./ai-user-message-toolbar-BeVwLqRW.js";import"./ai-suggestions-FpB68h0c.js";import"./ai-voice-input-BXWE5HB9.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

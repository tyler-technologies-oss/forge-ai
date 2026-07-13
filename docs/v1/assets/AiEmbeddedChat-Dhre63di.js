import{j as e,M as r,T as d}from"./blocks-CblrnFGH.js";import{useMDXComponents as o}from"./index-C4FT7CeJ.js";import{C as s}from"./CustomArgTypes-D5faymhn.js";import{A as a}from"./AiEmbeddedChat.stories-DlRtRp7V.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CDKJp9te.js";import"./utils-Cn_Diszn.js";import"./custom-element-UsVr97OX.js";import"./property-B_Uwy7_p.js";import"./class-map-C8SUmwP9.js";import"./if-defined-SgZfkoEh.js";import"./ref-CbkwJCAn.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-Dsq2fbLJ.js";import"./mock-adapter-DymPxr2h.js";import"./markdown-C0nyZhUE.js";import"./ai-chatbot-aHYemthb.js";import"./ai-attachment-BNVfuIpw.js";import"./ai-spinner-Cthjg_6r.js";import"./tooltip-Cj9cA_TB.js";import"./overlay-3RR5bvgx.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-BfMP2VrE.js";import"./ai-icon-DC8uwUxc.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DJXW-lBi.js";import"./ai-dropdown-menu-L4DEP3fn.js";import"./query-assigned-nodes-D9GHL6gE.js";import"./popover-DOEyM-vj.js";import"./ai-dropdown-menu-item-i2y954eB.js";import"./ai-modal-D7d3RcVE.js";import"./ai-agent-info-DFwbYjbA.js";import"./ai-agent-selector-C0sH7TmU.js";import"./ai-chat-interface-CyCQHviZ.js";import"./ai-prompt-BiCeRFZZ.js";import"./ai-conversations-panel-Cow8C-p5.js";import"./ai-edit-thread-CA0xzBLH.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-C2_XyqBn.js";import"./ai-message-thread-Bozv0bnT.js";import"./ai-response-message-toolbar-BAPk9qf0.js";import"./ai-empty-state-WIE7xVBz.js";import"./ai-error-message-P5fYEgsH.js";import"./ai-response-message-Bmbckrs3.js";import"./ai-thinking-indicator-Dk9rZ9TJ.js";import"./ai-user-message-BMzjuZZ5.js";import"./ai-user-message-toolbar-phxS9Tto.js";import"./ai-suggestions-5DmTohCk.js";import"./ai-voice-input-9EQDlGHg.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

import{j as e,M as r,T as d}from"./blocks-BNrQEoZP.js";import{useMDXComponents as o}from"./index-BTj30Gk4.js";import{C as s}from"./CustomArgTypes-Gn97v9Yb.js";import{A as a}from"./AiEmbeddedChat.stories-DJmVLxnF.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B1QudN3R.js";import"./utils-C5Jz97cD.js";import"./custom-element-UsVr97OX.js";import"./property-DH_R2agj.js";import"./class-map-CrTTU2WW.js";import"./if-defined-BGAXde2m.js";import"./ref-Dm7c1LK_.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-CuEV5slK.js";import"./mock-adapter-Dv6Maef-.js";import"./utils-YPQNW8lZ.js";import"./ai-chatbot-DQ1K7_XH.js";import"./ai-attachment-CCI7Nfeh.js";import"./ai-spinner-BMwUFmye.js";import"./tooltip-LaoYQ4W5.js";import"./overlay-ByCT0M_B.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-Cun3uT0M.js";import"./ai-icon-BFcAj12I.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CVBgw4dg.js";import"./ai-dropdown-menu-DGR1rgMG.js";import"./query-assigned-nodes-BFZ6gsTg.js";import"./popover-C1qcke8c.js";import"./ai-dropdown-menu-item-B_KbSC8D.js";import"./ai-modal-CPQ4EzYw.js";import"./ai-agent-info-A9HoYAUg.js";import"./ai-agent-selector-BHpSEtnb.js";import"./ai-chat-interface-Cr75pV79.js";import"./ai-prompt-CsqFtSpu.js";import"./ai-conversations-panel-HO2v3jfs.js";import"./ai-edit-thread-DqRaPYuS.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-DYZk9Dto.js";import"./ai-message-thread-C6pOt7-A.js";import"./ai-response-message-toolbar-zF3fCQHD.js";import"./ai-empty-state-DHyPDUZ7.js";import"./ai-error-message-8THuyDPl.js";import"./ai-response-message-DVR70RH1.js";import"./ai-thinking-indicator-CrIl-jam.js";import"./ai-user-message-5jF-KMxY.js";import"./ai-user-message-toolbar-DJniWE8r.js";import"./ai-suggestions-BEWk9AM5.js";import"./ai-voice-input-DNmBZgX6.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

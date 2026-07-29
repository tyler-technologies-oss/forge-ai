import{j as e,M as r,T as d}from"./blocks-Dde5_4F5.js";import{useMDXComponents as o}from"./index-Bo-86FQ2.js";import{C as s}from"./CustomArgTypes-BGqKN-1j.js";import{A as a}from"./AiEmbeddedChat.stories-BsrfqKq3.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DmxWkD8Q.js";import"./utils-K6R1uiZY.js";import"./custom-element-UsVr97OX.js";import"./property-B8oslQ-r.js";import"./class-map-CdW5aq23.js";import"./if-defined-DPv2xsUv.js";import"./ref-FIWR8MIP.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-lUDVJrcX.js";import"./mock-adapter-DbkpGE97.js";import"./markdown-BZ_ChyzU.js";import"./ai-chatbot-CbmpVhnu.js";import"./ai-attachment-CEZWyJVm.js";import"./ai-spinner-CJrhov8u.js";import"./tooltip-Cur1SY7d.js";import"./overlay-BjFA8Rsx.js";import"./floating-ui.dom-alButkyJ.js";import"./ai-chat-header-DQ3LToqs.js";import"./ai-icon-Bg-lRR4R.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-C7kzr7zL.js";import"./ai-dropdown-menu-D0_6Xc__.js";import"./query-assigned-nodes-DH9ECkIe.js";import"./popover-BLEiddh6.js";import"./ai-dropdown-menu-item-DkmALU-6.js";import"./ai-modal-DVeuqpF9.js";import"./ai-agent-info-BDTrS4ni.js";import"./ai-agent-selector-rrRT2U2t.js";import"./ai-chat-interface-gq60SMQ5.js";import"./ai-prompt-DnuOzfK6.js";import"./ai-conversations-panel-BKOYtObx.js";import"./ai-edit-thread-BvhtQuzJ.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-CFqzVBA8.js";import"./ai-message-thread-uu3IvXub.js";import"./ai-response-message-toolbar-CVrekffk.js";import"./ai-empty-state-4ujBcvod.js";import"./ai-error-message-CPdEjvIj.js";import"./ai-response-message-BAtLnuYb.js";import"./ai-thinking-indicator-qP-C8okc.js";import"./ai-user-message-DSFUQ60y.js";import"./ai-user-message-toolbar-1n4TjTQR.js";import"./ai-suggestions-CNazeogL.js";import"./ai-voice-input-Ch69aaXL.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

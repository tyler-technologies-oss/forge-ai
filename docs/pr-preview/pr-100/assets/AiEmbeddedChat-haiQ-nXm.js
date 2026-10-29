import{j as e,M as r,T as d}from"./blocks-_r1VZqHQ.js";import{useMDXComponents as o}from"./index-CEBJtnDg.js";import{C as s}from"./CustomArgTypes-DCDdGaxg.js";import{A as a}from"./AiEmbeddedChat.stories-fX7sNTxl.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-YR1K9nbB.js";import"./utils-HqzA9w63.js";import"./custom-element-UsVr97OX.js";import"./property-TeG6cd53.js";import"./query-kCt_tcOn.js";import"./class-map-Bc7VVlJh.js";import"./if-defined-BLm6p3L2.js";import"./ref-C4o9BLd-.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-CQLbsPyA.js";import"./provide-Bxw6gKTd.js";import"./consume-D3B5J4hk.js";import"./ai-message-thread-C_sKhrnM.js";import"./utils-BRoM8yNS.js";import"./ai-response-message-toolbar-D3I2aNUT.js";import"./tooltip-thuJaIBl.js";import"./overlay-BkMEagT3.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./popover-ui6GyO-A.js";import"./ai-spinner-CgeeyoCF.js";import"./ai-thinking-indicator-Dhq3zMSa.js";import"./ai-empty-state-QwVRI5jE.js";import"./ai-client-message-CiHnsDv_.js";import"./ai-error-message-BjcgAEPs.js";import"./query-assigned-nodes-DVP6uEkz.js";import"./ai-response-message-C4SAsAng.js";import"./ai-user-message-Cweo3p3k.js";import"./ai-user-message-toolbar-OUW0WJ6E.js";import"./agent-adapter-CiODA7QC.js";import"./ai-chatbot-RUqAmVqP.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-a1fNsA-t.js";import"./ai-chat-header-DlkNBTRn.js";import"./ai-icon-BQpN0Qp3.js";import"./ai-gradient-container-ClZ9prTR.js";import"./ai-dropdown-menu-Cpx0kE0u.js";import"./query-assigned-elements-DztZbeoC.js";import"./ai-dropdown-menu-item-DYk20N5R.js";import"./ai-modal-D_cSsacw.js";import"./ai-agent-info-p2sWSHSZ.js";import"./ai-agent-selector-Bp7G8Sjn.js";import"./ai-chat-interface-BofAN19Q.js";import"./ai-prompt-JkwKCKYy.js";import"./ai-conversations-panel-BWrfYMZC.js";import"./ai-edit-thread-D9XaTIum.js";import"./ai-file-picker-BPk5jSbr.js";import"./ai-suggestions-4cg-lDAh.js";import"./ai-voice-input-DQ05JyCO.js";import"./mock-adapter-LuDjfxfL.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

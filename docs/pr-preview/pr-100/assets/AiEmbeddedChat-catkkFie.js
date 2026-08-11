import{j as e,M as r,T as d}from"./blocks-XSgIOzBr.js";import{useMDXComponents as o}from"./index-BBhWSdBn.js";import{C as s}from"./CustomArgTypes-BsBPTET5.js";import{A as a}from"./AiEmbeddedChat.stories-CV_fr_8_.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CT8aTrUD.js";import"./utils-Cp678McA.js";import"./custom-element-UsVr97OX.js";import"./property-BYN9SZug.js";import"./class-map-DqaYJRwU.js";import"./if-defined-Ctqvb-ON.js";import"./ref-kKaXfD1S.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-CWYaAuSG.js";import"./provide-Bxw6gKTd.js";import"./consume-D3B5J4hk.js";import"./ai-message-thread-CwqhL2dx.js";import"./markdown-CtLA8yAF.js";import"./ai-response-message-toolbar-BwlSm175.js";import"./tooltip-CW0bSAwg.js";import"./overlay-CkC9bm_E.js";import"./floating-ui.dom-alButkyJ.js";import"./popover-C31U5eWB.js";import"./ai-spinner-CbunOA-Q.js";import"./ai-thinking-indicator-1U5Ry1f2.js";import"./ai-empty-state-B8rhv3e3.js";import"./ai-error-message-D1Ga38or.js";import"./ai-response-message-CnZ_638a.js";import"./ai-user-message-CMqBaTZX.js";import"./ai-user-message-toolbar-bdzNKp7D.js";import"./mock-adapter-6zZ6n2sP.js";import"./ai-chatbot-DKovxT-G.js";import"./ai-attachment-ZtYpr-6d.js";import"./ai-chat-header-B5KievFi.js";import"./ai-icon-B_MpfO3w.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CKrFco1R.js";import"./ai-dropdown-menu-CF8QeNYI.js";import"./query-assigned-nodes-Bae88zyY.js";import"./ai-dropdown-menu-item-CISMvfun.js";import"./ai-modal-TqbNCh2K.js";import"./ai-agent-info-BrzqVyJE.js";import"./ai-agent-selector-BDdhk9WV.js";import"./ai-chat-interface-CjGxkuME.js";import"./ai-prompt-Dkiq_vL3.js";import"./ai-conversations-panel-MZL5s_XE.js";import"./ai-edit-thread-04tCXzP7.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-8c3pAnbZ.js";import"./ai-suggestions-D00Es9-w.js";import"./ai-voice-input-D704c7Ra.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function se(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{se as default};

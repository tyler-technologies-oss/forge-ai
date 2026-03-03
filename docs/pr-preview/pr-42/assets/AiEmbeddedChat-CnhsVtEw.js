import{j as e,M as r,T as d}from"./blocks-CSOb9vbM.js";import{useMDXComponents as o}from"./index-DYThK5wZ.js";import{C as s}from"./CustomArgTypes-utP7uSfI.js";import{A as a}from"./AiEmbeddedChat.stories-DDw1chs_.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BebqAyXr.js";import"./custom-element-UsVr97OX.js";import"./property-Uv7HOIGR.js";import"./base-CYYBI5kr.js";import"./if-defined-BYTAvEhh.js";import"./ref-Ck_2AgT9.js";import"./class-map-Dr1--Sas.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-CNAUG10Q.js";import"./mock-adapter-CGsAFG5D.js";import"./utils-B0W8KtS_.js";import"./ai-attachment-DMaPSaeJ.js";import"./ai-spinner-ChT3la29.js";import"./tooltip-K5g5KnQf.js";import"./overlay-CzTjgle8.js";import"./ai-chat-header-C4u4aw0O.js";import"./ai-icon-CiVkzgZe.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-B2-AcCTs.js";import"./ai-dropdown-menu-D_cX_paQ.js";import"./query-assigned-elements-BlK_osnq.js";import"./popover-ksk7tC7Z.js";import"./ai-dropdown-menu-item-UB4Xe-SU.js";import"./ai-modal-94Hs0kyY.js";import"./ai-agent-info-DTlL_ty5.js";import"./ai-agent-selector-DSoXFno6.js";import"./ai-chat-interface-BFD33dh0.js";import"./ai-file-picker-DCey7HRO.js";import"./ai-message-thread-CmbF8nQD.js";import"./ai-response-message-toolbar-B1UxLoOC.js";import"./ai-empty-state-RpjXyrSt.js";import"./ai-error-message-DeXJTyuc.js";import"./ai-response-message-CQH_N0tw.js";import"./ai-thinking-indicator-BZnsFi6R.js";import"./ai-user-message-BXnsoadv.js";import"./ai-user-message-toolbar-BTh23wzP.js";import"./ai-prompt-DpFFbeHK.js";import"./ai-suggestions-BSz4k1-w.js";import"./ai-voice-input-C4r-2da2.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function ee(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{ee as default};

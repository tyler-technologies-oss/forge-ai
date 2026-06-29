import{j as e,M as r,T as d}from"./blocks-84l8xxke.js";import{useMDXComponents as o}from"./index-CY5KufPK.js";import{C as s}from"./CustomArgTypes-BxGTyOaL.js";import{A as a}from"./AiEmbeddedChat.stories-BzCh6oBV.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-D5fv_1AB.js";import"./utils-Bikz1eRQ.js";import"./custom-element-UsVr97OX.js";import"./property-BD5bClhK.js";import"./class-map-lONZxvbY.js";import"./if-defined-N2OJLAuP.js";import"./ref-DJOzsRji.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-kxzWJ7e-.js";import"./mock-adapter-B6avymXj.js";import"./utils-B8dv6FBY.js";import"./ai-chatbot-BpqSGkfB.js";import"./ai-attachment-B-DtQAkc.js";import"./ai-spinner-tBARMKOn.js";import"./tooltip-V0Zpw5rC.js";import"./overlay-D2_2zL4q.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-DXWrJAEO.js";import"./ai-icon-AOs2vmLy.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-B19-TFvA.js";import"./ai-dropdown-menu-BQAriCgc.js";import"./query-assigned-nodes-4n7Z-nG0.js";import"./popover-UXI7KUCP.js";import"./ai-dropdown-menu-item-C_xTtCqq.js";import"./ai-modal-CIQTKjRA.js";import"./ai-agent-info-C155ExFK.js";import"./ai-agent-selector-DXj6251W.js";import"./ai-chat-interface-BZZV5n26.js";import"./ai-prompt-B5MO-jPs.js";import"./ai-conversations-panel-7cXm-K9p.js";import"./ai-edit-thread-C1nTSG9d.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-BXIrur6a.js";import"./ai-message-thread-Dg9YxWo1.js";import"./ai-response-message-toolbar-Bx07Xbn9.js";import"./ai-empty-state-Bucn1NkC.js";import"./ai-error-message-D4gXur8r.js";import"./ai-response-message-BBuZ17HJ.js";import"./ai-thinking-indicator-Dpam8M9S.js";import"./ai-user-message-CtMEFATp.js";import"./ai-user-message-toolbar-MU07PgV_.js";import"./ai-suggestions-xZHEW9_h.js";import"./ai-voice-input-uPt90lIF.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

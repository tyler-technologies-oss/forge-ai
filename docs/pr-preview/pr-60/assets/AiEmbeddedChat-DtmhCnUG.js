import{j as e,M as r,T as d}from"./blocks-DSwOJ3nm.js";import{useMDXComponents as o}from"./index-BHGGZfUi.js";import{C as s}from"./CustomArgTypes-M8xsv5NU.js";import{A as a}from"./AiEmbeddedChat.stories-GXab0-lx.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BIzRH6t4.js";import"./utils-BuxnRiQ6.js";import"./custom-element-UsVr97OX.js";import"./property-Di18529Q.js";import"./base-BMdqYILz.js";import"./if-defined-C7dB1jXR.js";import"./ref-BmPYxnWv.js";import"./class-map-CFFvMCmh.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-BZ9oJPrI.js";import"./mock-adapter-uhjSnHDA.js";import"./utils-CX_NQepL.js";import"./ai-chatbot-uyVl8Gqp.js";import"./ai-attachment-Dr4W2mPn.js";import"./ai-spinner-U9YbH1x8.js";import"./tooltip-ChRjzBsg.js";import"./overlay-C0lmVdl7.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-CwCHWg-u.js";import"./ai-icon-CzgRsVQt.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-BSNIQLT0.js";import"./ai-dropdown-menu-Dak-pN-L.js";import"./query-assigned-elements-wUyeqP-8.js";import"./popover-AP2Bc3yZ.js";import"./query-assigned-nodes-CFZWE20k.js";import"./ai-dropdown-menu-item-DhNKXqT-.js";import"./ai-modal-BRtDm9Cm.js";import"./ai-agent-info-BP3DjZnN.js";import"./ai-agent-selector-DklQc62T.js";import"./ai-chat-interface-CBNGncWi.js";import"./ai-file-picker-vSSYY0RW.js";import"./ai-message-thread-CGDDLfv4.js";import"./ai-response-message-toolbar-B-TRDbaF.js";import"./ai-empty-state-Cr-A7JcZ.js";import"./ai-error-message-COCcW7vp.js";import"./ai-response-message-BB79E7zm.js";import"./ai-thinking-indicator-DrkBar7n.js";import"./ai-user-message-CuTafb8G.js";import"./ai-user-message-toolbar-BF1pKJUo.js";import"./ai-prompt-BDwakLV3.js";import"./ai-suggestions-woSSAlXW.js";import"./ai-voice-input-CPQ79osP.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function oe(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{oe as default};

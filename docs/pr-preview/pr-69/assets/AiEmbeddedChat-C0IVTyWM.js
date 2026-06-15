import{j as e,M as r,T as d}from"./blocks-Bz0yV-gh.js";import{useMDXComponents as o}from"./index-DPET0euu.js";import{C as s}from"./CustomArgTypes-CSIBDf9M.js";import{A as a}from"./AiEmbeddedChat.stories-BXJl2Boi.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DmoIR2iB.js";import"./utils-u3NWlTSB.js";import"./custom-element-UsVr97OX.js";import"./property-D6A382qA.js";import"./class-map-BU13AwkM.js";import"./if-defined-CFWMlw21.js";import"./ref-B-kmAuE0.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-DGPLV8S_.js";import"./mock-adapter-uhjSnHDA.js";import"./utils-CX_NQepL.js";import"./ai-chatbot-mYaVihKi.js";import"./ai-attachment-COrDw-gj.js";import"./ai-spinner-DAZ1JxI9.js";import"./tooltip-C64AywiS.js";import"./overlay-ClAHEkU0.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-kf7mosVz.js";import"./ai-icon-3I7GOKyv.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-C3K8sgUk.js";import"./ai-dropdown-menu-DBsz8DKj.js";import"./query-assigned-nodes-C7uSgWhl.js";import"./popover-BOZz6asb.js";import"./ai-dropdown-menu-item-B8BoH0oJ.js";import"./ai-modal-D6OyedAn.js";import"./ai-agent-info-DVNpXHFu.js";import"./ai-agent-selector-Dg0lNMui.js";import"./ai-chat-interface-BEkUqqEr.js";import"./ai-conversations-panel-BqBCBEwj.js";import"./ai-edit-thread-CAmQIgA4.js";import"./ai-file-picker-BPryrTRl.js";import"./ai-message-thread-DglUOtXK.js";import"./ai-response-message-toolbar-BElaqM7C.js";import"./ai-empty-state-CpcL_dZH.js";import"./ai-error-message-DPho6nrL.js";import"./ai-response-message-2KcouTYJ.js";import"./ai-thinking-indicator-Beq0DU9e.js";import"./ai-user-message-CcsOO5w0.js";import"./ai-user-message-toolbar-D_KGZKjB.js";import"./ai-prompt-BnamSowA.js";import"./ai-suggestions-Ba70OfKR.js";import"./ai-voice-input-7zvWXtmN.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

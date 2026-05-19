import{j as e,M as r,T as d}from"./blocks-lW5ZTslj.js";import{useMDXComponents as o}from"./index-DSOsqyUn.js";import{C as s}from"./CustomArgTypes-DM-IK2yf.js";import{A as a}from"./AiEmbeddedChat.stories-DXN9HoQ3.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DFsyteUX.js";import"./utils-DY6QmFKz.js";import"./custom-element-UsVr97OX.js";import"./property-B0SX08Wa.js";import"./base-D1C34w3f.js";import"./if-defined-D7IsuE0F.js";import"./ref-O1rwsKA-.js";import"./class-map-B3cGpxoh.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-C9nYLMRY.js";import"./mock-adapter-uhjSnHDA.js";import"./utils-CX_NQepL.js";import"./ai-chatbot-CJU7Uhzo.js";import"./ai-attachment-CyP0lZdn.js";import"./ai-spinner-BU_QUVae.js";import"./tooltip-Cfmf1TI2.js";import"./overlay-D2adnYUH.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-C5TLUmbq.js";import"./ai-icon-DSQuFJOg.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CwmZPL5H.js";import"./ai-dropdown-menu-Dbl5F0AW.js";import"./query-assigned-elements-BufxX3pH.js";import"./popover-DCWfMAto.js";import"./query-assigned-nodes-DVn74Qjz.js";import"./ai-dropdown-menu-item-BNScmGjH.js";import"./ai-modal-ww-SeDfs.js";import"./ai-agent-info-qUHBh8M7.js";import"./ai-agent-selector-VWzOLV2a.js";import"./ai-chat-interface-CjEDFaf2.js";import"./ai-file-picker-CzqEvOSJ.js";import"./ai-message-thread-C6EZpsfz.js";import"./ai-response-message-toolbar-D6KZ-jY8.js";import"./ai-empty-state-C113gpyU.js";import"./ai-error-message-Bs_lux2G.js";import"./ai-response-message-CeUpwxCg.js";import"./ai-thinking-indicator-ARE39Y7K.js";import"./ai-user-message-392l8dTp.js";import"./ai-user-message-toolbar-_8Vphmne.js";import"./ai-prompt-Do4anHZo.js";import"./ai-suggestions-CqWPVvvo.js";import"./ai-voice-input-DcJfLCI8.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

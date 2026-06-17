import{j as e,M as r,T as d}from"./blocks-Cl6WhlHL.js";import{useMDXComponents as o}from"./index-CjouSDbV.js";import{C as s}from"./CustomArgTypes-DKQH6zil.js";import{A as a}from"./AiEmbeddedChat.stories-yZWwR9mv.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Be7Ge7du.js";import"./utils-BNzFzf0N.js";import"./custom-element-UsVr97OX.js";import"./property-DN75jqc7.js";import"./class-map-B3WCiGZX.js";import"./if-defined-6rhn3-tM.js";import"./ref-DXqnPZ9j.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-BI_HAXcG.js";import"./mock-adapter-ls0PbTjH.js";import"./utils-JMyE3xw1.js";import"./ai-chatbot-BGzRiyP2.js";import"./ai-attachment-JLngcMY2.js";import"./ai-spinner-DgU8aPm3.js";import"./tooltip-BPzlqv6a.js";import"./overlay-DMOHyelL.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-D1SRx1Y4.js";import"./ai-icon-9HF-e6r4.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-De4eJS9z.js";import"./ai-dropdown-menu-MF1ceWBf.js";import"./query-assigned-nodes-DEQxYKg1.js";import"./popover-Dr4zLb2N.js";import"./ai-dropdown-menu-item-Djrn-3l0.js";import"./ai-modal-Dcvrdt-k.js";import"./ai-agent-info-BdPeG-vb.js";import"./ai-agent-selector-CwlKG8B8.js";import"./ai-chat-interface-N9Cb8Aq-.js";import"./ai-conversations-panel-Dr7JPRxw.js";import"./ai-edit-thread-D5L7Hmah.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-D9Rw7WbD.js";import"./ai-message-thread-CjvPdikg.js";import"./ai-response-message-toolbar-DLT0F9xD.js";import"./ai-empty-state-Dao3ioXC.js";import"./ai-error-message-CMu7IHw7.js";import"./ai-response-message-CeqAxvma.js";import"./ai-thinking-indicator-DLXizgMG.js";import"./ai-user-message-B_U4ldJk.js";import"./ai-user-message-toolbar-JqDqjN9S.js";import"./ai-prompt-DeI4x0vo.js";import"./ai-suggestions-CFJNq7uD.js";import"./ai-voice-input-DYdaH9j8.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

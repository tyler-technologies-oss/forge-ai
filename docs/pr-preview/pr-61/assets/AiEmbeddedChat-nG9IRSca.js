import{j as e,M as r,T as d}from"./blocks-H4sH5-Nl.js";import{useMDXComponents as o}from"./index-CRgh4Amh.js";import{C as s}from"./CustomArgTypes-BGId49ld.js";import{A as a}from"./AiEmbeddedChat.stories-DTtw0I-z.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-b0QhNVr8.js";import"./utils-BrZaTKIn.js";import"./custom-element-UsVr97OX.js";import"./property-DXDoedCY.js";import"./base-D1yMNR7I.js";import"./if-defined-IDNBKJ-m.js";import"./ref-BVN12uZp.js";import"./class-map-ddQoDWxa.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-C_3dNBbW.js";import"./mock-adapter-uhjSnHDA.js";import"./utils-CX_NQepL.js";import"./ai-chatbot-C9cQGzwJ.js";import"./ai-attachment-DU4rRbwv.js";import"./ai-spinner-CXBIleG6.js";import"./tooltip-BDC_8lyX.js";import"./overlay-SoS0i7xb.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-Bh2-wRS1.js";import"./ai-icon-plrVPH71.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CTlqhO-W.js";import"./ai-dropdown-menu-ODJ4F6os.js";import"./query-assigned-elements-DY3oLtpy.js";import"./popover-BBxHy1hJ.js";import"./query-assigned-nodes-BR_VOxb3.js";import"./ai-dropdown-menu-item-B-EGDOJx.js";import"./ai-modal-703_CxOu.js";import"./ai-agent-info-DWiLU547.js";import"./ai-agent-selector-uICRsk41.js";import"./ai-chat-interface-BjMb4zQ7.js";import"./ai-file-picker-CGL0XnDd.js";import"./ai-message-thread-zMPEeMt9.js";import"./ai-response-message-toolbar-D25ppjjb.js";import"./ai-empty-state-DLrO7ofV.js";import"./ai-error-message-XuiTxRMv.js";import"./ai-response-message-CIZOx1hO.js";import"./ai-thinking-indicator-RpXQO1JK.js";import"./ai-user-message-CHBK4MxE.js";import"./ai-user-message-toolbar-xphMFfC7.js";import"./ai-prompt-DL5fCa-X.js";import"./ai-suggestions-B50lZaXe.js";import"./ai-voice-input-DDThFnP0.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

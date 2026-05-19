import{j as e,M as r,T as d}from"./blocks-DHG_7eiB.js";import{useMDXComponents as o}from"./index-BUyFzc3k.js";import{C as s}from"./CustomArgTypes-CzW7HUQc.js";import{A as a}from"./AiEmbeddedChat.stories-C717QqvI.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-D5E-uNG9.js";import"./utils-CQnYv88L.js";import"./custom-element-UsVr97OX.js";import"./property-CdeMDwTb.js";import"./base-DgZOs6XM.js";import"./if-defined-9eYkaeTI.js";import"./ref-B_pzrLtq.js";import"./class-map-DFghohS0.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-DJ55e1vI.js";import"./mock-adapter-uhjSnHDA.js";import"./utils-CX_NQepL.js";import"./ai-chatbot-q5qW790a.js";import"./ai-attachment-B6ruuAD0.js";import"./ai-spinner-YYQ0fXwh.js";import"./tooltip-C9yTqkLz.js";import"./overlay-BtQU2IAY.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-CZQ1O2Gv.js";import"./ai-icon-DEmR6vZB.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CGZsVwhn.js";import"./ai-dropdown-menu-DS_0TFg4.js";import"./query-assigned-elements-CzRDbfUk.js";import"./popover-3QuQ29Wx.js";import"./query-assigned-nodes-DIJQwy-a.js";import"./ai-dropdown-menu-item-qoPGhiyL.js";import"./ai-modal-CTKMOMgH.js";import"./ai-agent-info-SAOd6GG7.js";import"./ai-agent-selector-Cq3ICqob.js";import"./ai-chat-interface-CQWyXbH6.js";import"./ai-file-picker-BTIE7gMM.js";import"./ai-message-thread-waWmkrxg.js";import"./ai-response-message-toolbar-_BDmPtI7.js";import"./ai-empty-state-CzZkv9uf.js";import"./ai-error-message-7IGTl_0z.js";import"./ai-response-message-B-tDpcgG.js";import"./ai-thinking-indicator-BzJ7cQNq.js";import"./ai-user-message-BQFOLxqT.js";import"./ai-user-message-toolbar-CiSpx4W8.js";import"./ai-prompt-B9cdLsQW.js";import"./ai-suggestions-CvpwVngX.js";import"./ai-voice-input-B4lgc-Sy.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

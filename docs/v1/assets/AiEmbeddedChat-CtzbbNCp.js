import{j as e,M as r,T as d}from"./blocks-BzFvJ_wx.js";import{useMDXComponents as o}from"./index-DnoEj0Ua.js";import{C as s}from"./CustomArgTypes-D0R7Mn2c.js";import{A as a}from"./AiEmbeddedChat.stories-CffF2LsT.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CYwKsxxd.js";import"./custom-element-UsVr97OX.js";import"./property-Du0s4Y53.js";import"./base-Bh44Xa5m.js";import"./if-defined-D269OB2b.js";import"./ref-fW9Llhj0.js";import"./class-map-CkH3AWG4.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-BPDtwvMC.js";import"./mock-adapter-CGsAFG5D.js";import"./utils-B0W8KtS_.js";import"./ai-attachment-BCUUca5P.js";import"./ai-spinner-CzbEC-B6.js";import"./tooltip-D5JzSrII.js";import"./overlay-D2YE7aYB.js";import"./ai-chat-header-9P1Serxl.js";import"./ai-icon-C5Y858Ua.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DC-Wdfpr.js";import"./ai-dropdown-menu-Djh-EkaJ.js";import"./query-assigned-elements-DuZ_5qhD.js";import"./popover-DMQuCV2z.js";import"./ai-dropdown-menu-item-xXecJQ2v.js";import"./ai-modal-B-6OM5m2.js";import"./ai-agent-info-B_dT4FbG.js";import"./ai-agent-selector-BWg9cH7t.js";import"./ai-chat-interface-XwhVK3k4.js";import"./ai-file-picker-1iuOul7T.js";import"./ai-message-thread-BRR8Yol8.js";import"./ai-response-message-toolbar-_pjHDEn5.js";import"./ai-empty-state-B5CbDVrS.js";import"./ai-error-message-C4jYpSmT.js";import"./ai-response-message-B9I_CXxv.js";import"./ai-thinking-indicator-kLKpF89V.js";import"./ai-user-message-B1B8PK9d.js";import"./ai-user-message-toolbar-Bz-9THy5.js";import"./ai-prompt-CKdR_SXM.js";import"./ai-suggestions-BvHXmMEV.js";import"./ai-voice-input-Bn2-el8J.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

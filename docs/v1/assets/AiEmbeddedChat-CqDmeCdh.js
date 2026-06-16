import{j as e,M as r,T as d}from"./blocks-u1-XePAT.js";import{useMDXComponents as o}from"./index-D_mpbV81.js";import{C as s}from"./CustomArgTypes-DrlJqDYl.js";import{A as a}from"./AiEmbeddedChat.stories-BsYoARlP.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CZhXdc7b.js";import"./utils-CYpMX-rN.js";import"./custom-element-UsVr97OX.js";import"./property-D8FY7Crc.js";import"./class-map-CriUkTwW.js";import"./if-defined-rkbLJj0J.js";import"./ref-CWKWuAhL.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-DpCfOO5z.js";import"./mock-adapter-ls0PbTjH.js";import"./utils-JMyE3xw1.js";import"./ai-chatbot-O5kJnpNp.js";import"./ai-attachment-BkPqF5tM.js";import"./ai-spinner-DTfaqf9V.js";import"./tooltip-B7ZIL5Ug.js";import"./overlay-DxEOWfdP.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-fGx-evZX.js";import"./ai-icon-BeymFjq1.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-cEMpE7yc.js";import"./ai-dropdown-menu-BT2H5CME.js";import"./query-assigned-nodes-oZs0VSGf.js";import"./popover-D5zRtV65.js";import"./ai-dropdown-menu-item-BxQiEMy_.js";import"./ai-modal-DcTNuhyt.js";import"./ai-agent-info-BWaoT0RA.js";import"./ai-agent-selector-XIF73y5E.js";import"./ai-chat-interface-BwNWSO_k.js";import"./ai-conversations-panel-CIk34z2D.js";import"./ai-edit-thread-BYzaWv8d.js";import"./ai-file-picker-BVB22XOK.js";import"./ai-message-thread-facgmGL2.js";import"./ai-response-message-toolbar-C2a3mL-Y.js";import"./ai-empty-state-fGs7OJ5n.js";import"./ai-error-message-8t6XP1G4.js";import"./ai-response-message-CP2UmRoB.js";import"./ai-thinking-indicator-CZ-LawPy.js";import"./ai-user-message-B2W004WW.js";import"./ai-user-message-toolbar-BOTGuop4.js";import"./ai-prompt-Vlg9Ypw9.js";import"./ai-suggestions-DeG5ImP2.js";import"./ai-voice-input-g-4lsn2v.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

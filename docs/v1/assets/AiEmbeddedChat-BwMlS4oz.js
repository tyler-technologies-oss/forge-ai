import{j as e,M as r,T as d}from"./blocks-vOiI5GA6.js";import{useMDXComponents as o}from"./index-Bm15BpDG.js";import{C as s}from"./CustomArgTypes-Brwl6deo.js";import{A as a}from"./AiEmbeddedChat.stories-C3sI_z5Q.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-ydZZx2Al.js";import"./utils-C_gyOGXX.js";import"./custom-element-UsVr97OX.js";import"./property-CSCZ_azm.js";import"./query-Bxqq8xGT.js";import"./class-map-v9TTytzC.js";import"./if-defined-OmlLV3ve.js";import"./ref-YF_tRavm.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-BY6V0tFS.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-DiCBRomZ.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-CP4Q3fa9.js";import"./ai-spinner-Bevdml1v.js";import"./tooltip-0d9wS-QW.js";import"./overlay-ByZpy-Nk.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-chat-header-odoyr2J1.js";import"./ai-icon-DPSOXxXF.js";import"./ai-gradient-container-Dah6ZNA0.js";import"./ai-dropdown-menu-2a6xNYJn.js";import"./query-assigned-elements-iiiwlt0r.js";import"./popover-D4KxKRm1.js";import"./query-assigned-nodes-xBx2YEAg.js";import"./ai-dropdown-menu-item-BPxqBaVh.js";import"./ai-modal-ds6UJU6W.js";import"./ai-agent-info-BZrQcRnK.js";import"./ai-agent-selector-CNrFGXDa.js";import"./ai-chat-interface-D3gGXRRG.js";import"./ai-prompt-B5Nr2fJ8.js";import"./ai-conversations-panel-DQV4-Ah-.js";import"./ai-edit-thread-CiH8ywgS.js";import"./ai-error-message-DYjKnNgX.js";import"./ai-file-picker-CzEcjVmD.js";import"./ai-message-thread-CQmsh8eq.js";import"./ai-response-message-toolbar-Dvi6NYlA.js";import"./ai-thinking-indicator-Dc5pQIhW.js";import"./ai-client-message-CXivP6aZ.js";import"./ai-empty-state-DRVkH9PO.js";import"./ai-response-message-BbLnjJEg.js";import"./ai-user-message-DxlxYSFf.js";import"./ai-user-message-toolbar-Cz7kBhbU.js";import"./ai-suggestions-BPJyYUul.js";import"./ai-voice-input-CcTbpLg5.js";import"./mock-adapter-BpgeerXX.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function ae(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{ae as default};

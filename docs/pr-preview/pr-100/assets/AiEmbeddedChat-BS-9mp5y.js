import{j as e,M as r,T as d}from"./blocks-CZ9vKyMd.js";import{useMDXComponents as o}from"./index-BJLdi77e.js";import{C as s}from"./CustomArgTypes-CvLRKy5_.js";import{A as a}from"./AiEmbeddedChat.stories-C1UXjYvC.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-6kL-IEjw.js";import"./utils-CXrFuVn0.js";import"./custom-element-UsVr97OX.js";import"./property-CTHAvR0w.js";import"./query-DMg1xcuy.js";import"./class-map-D282mUzC.js";import"./if-defined-CqU5aBrc.js";import"./ref-Db_w97ye.js";import"./when-CI7b_ccM.js";import"./ai-canvas-B-mMmrA8.js";import"./provide-RUGHcQ60.js";import"./consume-BHVW6YKk.js";import"./ai-message-thread-zRnrwM6Q.js";import"./utils-BRoM8yNS.js";import"./ai-response-message-toolbar-DTJeLwUI.js";import"./tooltip-DKUGi-Mr.js";import"./overlay-Cf_UeqF6.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./popover-CszWHH8v.js";import"./ai-artifact-card-CTIos6br.js";import"./ai-spinner-CUToco1W.js";import"./ai-thinking-indicator-B5lD9kqo.js";import"./ai-empty-state-CVTMpjyu.js";import"./ai-client-message-Bz7fvOoF.js";import"./ai-error-message-6d7C-oN6.js";import"./query-assigned-nodes-x9aXSWKP.js";import"./ai-response-message-DJiHwOPu.js";import"./ai-user-message-CyjjIxDB.js";import"./ai-user-message-toolbar-BJ-QJz-U.js";import"./agent-adapter-CiODA7QC.js";import"./ai-chat-header-BT5RU5Pl.js";import"./ai-icon-ddETNDkH.js";import"./utils-DIqd7FWX.js";import"./ai-gradient-container-B8CKpKLl.js";import"./ai-dropdown-menu-DY4JbB1J.js";import"./query-assigned-elements-BZJs2gnL.js";import"./ai-dropdown-menu-item-Cjz3DErM.js";import"./ai-modal-BN2mh5s_.js";import"./ai-agent-info-mkgu2QxB.js";import"./ai-agent-selector-r245yho5.js";import"./ai-chatbot-Bg8GPP6d.js";import"./ai-attachment-CW_US-93.js";import"./ai-chat-interface-Bp-RCm35.js";import"./ai-prompt-CO-xPkM9.js";import"./ai-conversations-panel-B5NsL02t.js";import"./ai-edit-thread-D-_6WXNa.js";import"./ai-file-picker-CC3Wf08n.js";import"./ai-suggestions-DwW-NKFO.js";import"./ai-voice-input-BQeeMS_j.js";import"./mock-adapter-BkYea8t_.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
`,e.jsx(d,{children:"AI Embedded Chat"}),`
`,e.jsxs(t.p,{children:["The AI Embedded Chat component is a structured form factor component that provides an embedded chat interface for inline page usage with built-in composition of ",e.jsx(t.code,{children:"ai-gradient-container"})," and ",e.jsx(t.code,{children:"ai-chat-interface"})," components. This component handles all the wiring and event management automatically, providing an easy-to-use solution for embedded chat interfaces that can expand to modal view when needed."]}),`
`,e.jsx(t.h2,{id:"features",children:"Features"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Structured composition"}),": Combines ai-gradient-container and ai-chat-interface components automatically"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Dual view modes"}),": Renders embedded inline content that can expand to modal view"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Built-in event handling"}),": Manages expand/collapse events and modal interactions internally"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Gradient theming"}),": Supports multiple gradient intensity variants (low, medium, high, disabled)"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Expandable interface"}),": Built-in expand functionality to switch from embedded to modal view"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Customizable slots"}),": Supports slotting messages, suggestions, and custom prompt components"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Rich API"}),": Provides methods and events for programmatic control"]}),`
`]}),`
`,e.jsx(t.h2,{id:"when-to-use",children:"When to Use"}),`
`,e.jsx(t.p,{children:"Use the AI Embedded Chat component when you want:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"A chat interface embedded directly in page content"}),`
`,e.jsx(t.li,{children:"Ability to expand the chat to a larger modal view for better focus"}),`
`,e.jsx(t.li,{children:"Built-in gradient theming and visual polish"}),`
`,e.jsx(t.li,{children:"Standard embedded chat behavior without custom container logic"}),`
`,e.jsx(t.li,{children:"A component that seamlessly transitions between embedded and modal states"}),`
`,e.jsx(t.li,{children:'A component that "just works" out of the box'}),`
`]}),`
`,e.jsxs(t.p,{children:["For more complex compositions or custom containers, consider using the atomic ",e.jsx(t.code,{children:"ai-gradient-container"}),", ",e.jsx(t.code,{children:"ai-modal"}),", and ",e.jsx(t.code,{children:"ai-chat-interface"})," components directly."]}),`
`,e.jsx(t.h2,{id:"usage-patterns",children:"Usage Patterns"}),`
`,e.jsx(t.h3,{id:"embedded-mode-default",children:"Embedded Mode (Default)"}),`
`,e.jsxs(t.p,{children:["The component renders as an embedded chat interface within the ",e.jsx(t.code,{children:"ai-gradient-container"}),", perfect for inline page content. Users can expand to modal view using the expand button in the chat header."]}),`
`,e.jsx(t.h3,{id:"modal-mode-expanded",children:"Modal Mode (Expanded)"}),`
`,e.jsxs(t.p,{children:["When expanded, the chat interface moves to a modal overlay powered by ",e.jsx(t.code,{children:"ai-modal"}),", providing a focused chat experience. The modal includes minimize functionality to return to embedded mode."]}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(s,{})]})}function le(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{le as default};

import{j as e,M as r,T as d}from"./blocks-D-jryxvQ.js";import{useMDXComponents as o}from"./index-bHPF_ebq.js";import{C as s}from"./CustomArgTypes-DK9gOOsK.js";import{A as a}from"./AiEmbeddedChat.stories-D-3UOezE.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-D1C_cP03.js";import"./utils-BQbSAUyf.js";import"./custom-element-UsVr97OX.js";import"./property-B5TE8D88.js";import"./state-BoHpUCf1.js";import"./if-defined-DinREpVu.js";import"./ref-Dfxh5cwS.js";import"./class-map-BLwfprfL.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-CJx-sWDP.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-pkblnAaG.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-bcGLY6Lh.js";import"./ai-spinner-BtN_mFEK.js";import"./tooltip-CjjDjoDh.js";import"./query-C-MXZcjm.js";import"./overlay-BnE7Ix3l.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-chat-header-C9cb3gQL.js";import"./ai-icon-E7TzI64B.js";import"./ai-gradient-container-DtNDA3f0.js";import"./ai-dropdown-menu-DXKp5FHY.js";import"./query-assigned-elements-DsU4Psob.js";import"./popover-vlx_ZVL3.js";import"./query-assigned-nodes-ohtQ9uWz.js";import"./ai-dropdown-menu-item-0_htBfo1.js";import"./ai-modal-8QPUUvBa.js";import"./ai-agent-info-Bd6D8ZlE.js";import"./ai-agent-selector-tVBE9mvb.js";import"./ai-chat-interface-D0Y6dX6r.js";import"./ai-prompt-CDlWM2uc.js";import"./ai-conversations-panel-CBN0IFyG.js";import"./ai-edit-thread-CwtPyAa9.js";import"./ai-error-message-C9Ye-KfL.js";import"./ai-file-picker-DwagW-bM.js";import"./ai-message-thread-BbZyDVg9.js";import"./ai-response-message-toolbar-CAJFysN3.js";import"./ai-thinking-indicator-CFT1Izzm.js";import"./ai-client-message-C6SX09xj.js";import"./ai-empty-state-xDdSqcHn.js";import"./ai-response-message-GKn1voQr.js";import"./ai-user-message-B-xZJx_j.js";import"./ai-user-message-toolbar-BTo7Oe5f.js";import"./ai-suggestions-BFxMDdHZ.js";import"./ai-voice-input-wWRHhVKV.js";import"./mock-adapter-BpgeerXX.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function me(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{me as default};

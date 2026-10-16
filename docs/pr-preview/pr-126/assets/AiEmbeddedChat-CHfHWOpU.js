import{j as e,M as r,T as d}from"./blocks-JYFz6Usq.js";import{useMDXComponents as o}from"./index-CximHG_v.js";import{C as s}from"./CustomArgTypes-452ZFrpF.js";import{A as a}from"./AiEmbeddedChat.stories-Ctdrb8in.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-elajjK1a.js";import"./utils-Bjt3BjC4.js";import"./custom-element-UsVr97OX.js";import"./property-DgcpIlpf.js";import"./query-DXgNA9eF.js";import"./class-map-B0GToYj3.js";import"./if-defined-C_B4j2BZ.js";import"./ref-Dewk2vfh.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-CzsfQCtw.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-Bmtlj-Ry.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-vQYgA_cq.js";import"./ai-spinner-DQ0iIQ_h.js";import"./tooltip-BjrwdqG2.js";import"./overlay-AcCXDU_P.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-chat-header-DltmWPvU.js";import"./ai-icon-C1v1POb-.js";import"./ai-gradient-container-CdUtDEqA.js";import"./ai-dropdown-menu-BOW_-sfg.js";import"./query-assigned-elements-BzXqvxdn.js";import"./popover-DxOZUCRT.js";import"./query-assigned-nodes-DPnb9NuY.js";import"./ai-dropdown-menu-item-sL8uVVNJ.js";import"./ai-modal-ByGECMac.js";import"./ai-agent-info-BeSNunu0.js";import"./ai-agent-selector-CQMuWr6R.js";import"./ai-chat-interface-CPqaQEKN.js";import"./ai-prompt-BMw7bRCQ.js";import"./ai-conversations-panel-L7fMwGnk.js";import"./ai-edit-thread-DkzbYNOH.js";import"./ai-error-message-CM9TEEC7.js";import"./ai-file-picker--xqmuIGI.js";import"./ai-message-thread-BJ6TRXHM.js";import"./ai-response-message-toolbar-B1VtOxhV.js";import"./context-consumer-CIN_xSLl.js";import"./ai-artifact-card-C9Pqa6fQ.js";import"./ai-thinking-indicator-C0vJuCMI.js";import"./ai-client-message-CS2-XB-6.js";import"./ai-empty-state-RhLFMbIc.js";import"./ai-response-message-D68baiLC.js";import"./ai-user-message-C5y7mD7z.js";import"./ai-user-message-toolbar-CoPggmfn.js";import"./ai-suggestions-f3iGfKR8.js";import"./ai-voice-input-DQ0WpCty.js";import"./mock-adapter-CgHoKrWF.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function ce(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{ce as default};

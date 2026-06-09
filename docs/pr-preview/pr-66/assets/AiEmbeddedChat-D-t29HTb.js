import{j as e,M as r,T as d}from"./blocks-CY1PUM6P.js";import{useMDXComponents as o}from"./index-CsaVJ4Z-.js";import{C as s}from"./CustomArgTypes-CAcjCc10.js";import{A as a}from"./AiEmbeddedChat.stories-eSkp9yj_.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-64sADwjS.js";import"./utils-DuP4-u8F.js";import"./custom-element-UsVr97OX.js";import"./property-B0O4WdJb.js";import"./base-kVk2_Lmd.js";import"./if-defined-D3UIaa_H.js";import"./ref-DVBAuqwq.js";import"./class-map-CzoAaMNW.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-BFaEt4k-.js";import"./mock-adapter-uhjSnHDA.js";import"./utils-CX_NQepL.js";import"./ai-chatbot-CUBdTLQz.js";import"./ai-attachment-SrljVrb2.js";import"./ai-spinner-DylQZZEo.js";import"./tooltip-HuIZ4ERa.js";import"./query-CWdzDXj9.js";import"./overlay-Dm0Nth00.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-jwFn0pij.js";import"./ai-icon-KLo0SUAk.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-Ds4ifFf0.js";import"./ai-dropdown-menu-B4H-Gg8O.js";import"./query-assigned-elements-Cyu3Uoag.js";import"./popover-BB8IwKnR.js";import"./query-assigned-nodes-CzDxKWgN.js";import"./ai-dropdown-menu-item-B5f9GU5f.js";import"./ai-modal-BUugj2UK.js";import"./ai-agent-info-BjiuthYj.js";import"./ai-agent-selector-DW2ePzzv.js";import"./ai-chat-interface-CBy06wry.js";import"./ai-conversations-panel-C9AmHZgE.js";import"./ai-file-picker-CDbpuFp5.js";import"./ai-message-thread-CRT4kLli.js";import"./ai-response-message-toolbar-BzZTKOJD.js";import"./ai-empty-state-DGnk_swN.js";import"./ai-error-message-dO5Y-HDn.js";import"./ai-response-message-D6mW230H.js";import"./ai-thinking-indicator-COgSAwll.js";import"./ai-user-message-BcXdJ9JV.js";import"./ai-user-message-toolbar-ZMjzvY0h.js";import"./ai-prompt-BF_SJI6t.js";import"./ai-suggestions-C8bEqY8k.js";import"./ai-voice-input-B2M2mh1v.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function de(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{de as default};

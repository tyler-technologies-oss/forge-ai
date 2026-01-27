import{j as e,M as r,T as d}from"./blocks-CzAJ6Sd2.js";import{useMDXComponents as o}from"./index-CcXqklaR.js";import{C as s}from"./CustomArgTypes-DA9jcxte.js";import{A as a}from"./AiEmbeddedChat.stories-oDcAgI9Z.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-cAcVdJOC.js";import"./custom-element-UsVr97OX.js";import"./property-DAlSbE--.js";import"./base-o2zR27RY.js";import"./if-defined-BMWLyYBF.js";import"./ref-CRgcZThK.js";import"./class-map-DmegHRu1.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-Ci2VJtpX.js";import"./mock-adapter-CGsAFG5D.js";import"./utils-B0W8KtS_.js";import"./ai-attachment-BI8Pdw7a.js";import"./ai-spinner-o6NGYFBh.js";import"./tooltip-CClV-1g0.js";import"./overlay-Cnwze5-L.js";import"./ai-chat-header-DBhOt9XU.js";import"./ai-icon-BQTq73xc.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-Bs1aYbvH.js";import"./ai-dropdown-menu-BebnJ1Xd.js";import"./query-assigned-elements-BydP-9d7.js";import"./popover-CNEIUetX.js";import"./ai-dropdown-menu-item-BGi4P3qt.js";import"./ai-modal-aZz8z5K6.js";import"./ai-agent-info-Bp5MpnGy.js";import"./ai-chat-interface-Bwa89KmT.js";import"./ai-file-picker-LwZd6Nib.js";import"./ai-message-thread-26lttJek.js";import"./ai-response-message-toolbar-CTbSHl3E.js";import"./ai-empty-state-YGG-y-1_.js";import"./ai-error-message-DWlCdSEb.js";import"./ai-response-message-CPvrm0Sc.js";import"./ai-thinking-indicator-Cqax72YV.js";import"./ai-user-message-Bb5nZMPi.js";import"./ai-user-message-toolbar-CFIvQD6C.js";import"./ai-prompt-5gnrrAYv.js";import"./ai-suggestions-CkAAllXS.js";import"./ai-voice-input-ChLDcx-9.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function $(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{$ as default};

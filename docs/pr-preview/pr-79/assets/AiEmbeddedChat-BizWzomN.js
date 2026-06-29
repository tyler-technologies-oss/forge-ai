import{j as e,M as r,T as d}from"./blocks-CMJthvyq.js";import{useMDXComponents as o}from"./index-DWefhmo-.js";import{C as s}from"./CustomArgTypes-C10kcbL5.js";import{A as a}from"./AiEmbeddedChat.stories-xKfs5c1b.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-0Pxm6iM0.js";import"./utils-BSmLuotp.js";import"./custom-element-UsVr97OX.js";import"./property-CcVosZlQ.js";import"./class-map-Bj1ij2E3.js";import"./if-defined-C8xREqbX.js";import"./ref-rL4Q-Zjq.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-qpnL-Q0g.js";import"./mock-adapter-B6avymXj.js";import"./utils-B8dv6FBY.js";import"./ai-chatbot-B8DE1LuX.js";import"./ai-attachment-DNEZBqqX.js";import"./ai-spinner-CZIaboN_.js";import"./tooltip-BJ6rbMdd.js";import"./overlay-DUeAUNdC.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-BBJYp7_7.js";import"./ai-icon-vWNoepk9.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-BgQFMot-.js";import"./ai-dropdown-menu-Bw6wdxr4.js";import"./query-assigned-nodes-N3WFZzeV.js";import"./popover-DefcR3Aj.js";import"./ai-dropdown-menu-item-BhX5aC3j.js";import"./ai-modal-C50CDqzh.js";import"./ai-agent-info-xYfXtWad.js";import"./ai-agent-selector-BjNwwoyE.js";import"./ai-chat-interface-id_u95es.js";import"./ai-prompt-BMDb52V7.js";import"./ai-conversations-panel-BB4ZOYOW.js";import"./ai-edit-thread-VMbPOww5.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-TsKg8fRt.js";import"./ai-message-thread-DzxdLnNP.js";import"./ai-response-message-toolbar-W_u3330f.js";import"./ai-empty-state-SjMJycKb.js";import"./ai-error-message-By8FavrS.js";import"./ai-response-message-BiKjDW_3.js";import"./ai-thinking-indicator-C1SI426D.js";import"./ai-user-message-NS-9Fg42.js";import"./ai-user-message-toolbar-CjF1a777.js";import"./ai-suggestions-Dcu0N8re.js";import"./ai-voice-input-BfHXaE-U.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function re(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{re as default};

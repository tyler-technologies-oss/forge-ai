import{j as e,M as r,T as d}from"./blocks-CsD4NOsj.js";import{useMDXComponents as o}from"./index-C2umsrXa.js";import{C as s}from"./CustomArgTypes-D6uAopfQ.js";import{A as a}from"./AiEmbeddedChat.stories-BTalCdCs.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-9kznCVoF.js";import"./utils-DUMfLMpS.js";import"./custom-element-UsVr97OX.js";import"./property-oAenimj3.js";import"./class-map-Dnx7h5Ue.js";import"./if-defined-Dz4WhS29.js";import"./ref-BICgGda8.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-Ct90HFYc.js";import"./mock-adapter-B6avymXj.js";import"./utils-B8dv6FBY.js";import"./ai-chatbot-hS0djG3v.js";import"./ai-attachment-BQQ9e09f.js";import"./ai-spinner-CcKqCKIS.js";import"./tooltip-WPKgaaZo.js";import"./overlay-BYCxFLi_.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-DQcN_KD3.js";import"./ai-icon-Dj5Qzz9s.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-D3CFeL64.js";import"./ai-dropdown-menu-YzJbcPbT.js";import"./query-assigned-nodes-D8ZhDGjk.js";import"./popover-BsMAt4ba.js";import"./ai-dropdown-menu-item-BaaStevq.js";import"./ai-modal-_-mFkJ2C.js";import"./ai-agent-info-DmhVDTjR.js";import"./ai-agent-selector-CP7H6O-1.js";import"./ai-chat-interface-DJIPKzw1.js";import"./ai-prompt-Bj3GHRcq.js";import"./ai-conversations-panel-InrWje5W.js";import"./ai-edit-thread-BZFUDzcE.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-DwP1g0QH.js";import"./ai-message-thread-DOvxIWPr.js";import"./ai-response-message-toolbar-CTtyyDHG.js";import"./ai-empty-state-BtgI7b7g.js";import"./ai-error-message-CTvckN4r.js";import"./ai-response-message-DJcA5Iwi.js";import"./ai-thinking-indicator-DkAa-4lA.js";import"./ai-user-message-C-HvErCd.js";import"./ai-user-message-toolbar-DCCqhCXM.js";import"./ai-suggestions-DoMHS1IK.js";import"./ai-voice-input-BzJjk-Vd.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

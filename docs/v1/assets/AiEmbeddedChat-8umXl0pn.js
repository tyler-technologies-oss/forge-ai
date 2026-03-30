import{j as e,M as r,T as d}from"./blocks-Bdz3785B.js";import{useMDXComponents as o}from"./index-BXg3MKLI.js";import{C as s}from"./CustomArgTypes-Dp3rC4GF.js";import{A as a}from"./AiEmbeddedChat.stories-BnC-Tsux.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-2rBvKK5_.js";import"./utils-Cwmrpmst.js";import"./custom-element-UsVr97OX.js";import"./property-Dn--K5et.js";import"./base-C9NkJQ01.js";import"./if-defined-CWGlnA6N.js";import"./ref-cC_IUWYZ.js";import"./class-map-CBrDPJxO.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-CPoxqN6-.js";import"./mock-adapter-BYw0QxWR.js";import"./utils-BojVjD0a.js";import"./ai-chatbot-CEcfe52L.js";import"./ai-attachment-9py_lq-H.js";import"./ai-spinner-C2YG4Fho.js";import"./tooltip-8EFzQ-Ky.js";import"./overlay-BrJxg0Ga.js";import"./ai-chat-header-D_MoGj6q.js";import"./ai-icon-CuU87CNK.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CaaJN_Wj.js";import"./ai-dropdown-menu-BPkCDwsw.js";import"./query-assigned-elements-DLxx7AcP.js";import"./popover-C13IpVkK.js";import"./ai-dropdown-menu-item-BOmHiGzX.js";import"./ai-modal-DFOZ3ZC4.js";import"./ai-agent-info-DMGfdEPc.js";import"./ai-agent-selector-Dp0lPMB1.js";import"./ai-chat-interface-FISxD7KH.js";import"./ai-file-picker-B2rmhOK0.js";import"./ai-message-thread-De1gd5nt.js";import"./ai-response-message-toolbar-CO2wM3AY.js";import"./ai-empty-state-B8QZ8La-.js";import"./ai-error-message-CqOSmeYJ.js";import"./ai-response-message-Pm-nKzDM.js";import"./ai-thinking-indicator-BL8V-8t7.js";import"./ai-user-message-BpeOsKmF.js";import"./ai-user-message-toolbar-KoyGJOYo.js";import"./ai-prompt-BkJCchwL.js";import"./ai-suggestions-szTwFVta.js";import"./ai-voice-input-DQO9vVXi.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function te(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{te as default};

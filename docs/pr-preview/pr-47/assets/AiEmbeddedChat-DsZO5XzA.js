import{j as e,M as r,T as d}from"./blocks-7nCQewja.js";import{useMDXComponents as o}from"./index-CjONssGu.js";import{C as s}from"./CustomArgTypes-BfSwUqqh.js";import{A as a}from"./AiEmbeddedChat.stories-D7BdG80i.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-SInbbIrY.js";import"./utils-D3jxQn3U.js";import"./custom-element-UsVr97OX.js";import"./property-BiV8fbcb.js";import"./base-kPG9LX_y.js";import"./if-defined-8Hejse_B.js";import"./ref-DlxiPx2M.js";import"./class-map-DAkH78er.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-BxkBYJfM.js";import"./mock-adapter-BYw0QxWR.js";import"./utils-BojVjD0a.js";import"./ai-chatbot-CSSbNISC.js";import"./ai-attachment-C1ZddwQt.js";import"./ai-spinner-rCmZQA50.js";import"./tooltip-BqW2vRDN.js";import"./overlay-C_sLuovZ.js";import"./ai-chat-header-DtwdtcGI.js";import"./ai-icon-C6yL7x1s.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-B997RF0x.js";import"./ai-dropdown-menu-BfSsyzca.js";import"./query-assigned-elements-DJy4YmOv.js";import"./popover-BgRRrD0G.js";import"./ai-dropdown-menu-item-eACyIPeF.js";import"./ai-modal-DQeO0G4M.js";import"./ai-agent-info-BTeSanGm.js";import"./ai-agent-selector-BLEmsIi_.js";import"./ai-chat-interface-nNV-6W5s.js";import"./ai-file-picker-Bq-8p3_4.js";import"./ai-message-thread-DGLDmvif.js";import"./ai-response-message-toolbar-NV7H10sD.js";import"./ai-empty-state-CbBV_Aob.js";import"./ai-error-message-DQLLPxFE.js";import"./ai-response-message-sobSFpPV.js";import"./ai-thinking-indicator-x4yZETYG.js";import"./ai-user-message-DZxVVmV-.js";import"./ai-user-message-toolbar-GVXcp4Wk.js";import"./ai-prompt-pOVsFPXf.js";import"./ai-suggestions-BOKSOIXF.js";import"./ai-voice-input-ax6389SA.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

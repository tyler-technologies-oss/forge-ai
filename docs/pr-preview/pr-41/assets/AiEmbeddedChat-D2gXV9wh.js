import{j as e,M as r,T as d}from"./blocks-Blel2aD3.js";import{useMDXComponents as o}from"./index-BY1_4ot4.js";import{C as s}from"./CustomArgTypes-BqhvX42Q.js";import{A as a}from"./AiEmbeddedChat.stories-CvMe-Xzn.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BE0vYhhu.js";import"./custom-element-UsVr97OX.js";import"./property-BKOuPZs4.js";import"./base-Bbyp53ba.js";import"./if-defined-B8g6U1y_.js";import"./ref-OntQz8h1.js";import"./class-map-CksRTQk-.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-Ba5xPMZv.js";import"./mock-adapter-CGsAFG5D.js";import"./utils-B0W8KtS_.js";import"./ai-attachment-BrzUH0A6.js";import"./ai-spinner-DzDLaiFr.js";import"./tooltip-D2IL7bGB.js";import"./overlay-CCS0-No4.js";import"./ai-chat-header-agTb7fuF.js";import"./ai-icon-CJ1BXyb-.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CjjGylep.js";import"./ai-dropdown-menu-kPp79m9N.js";import"./query-assigned-elements-CWOByZt9.js";import"./popover-LtWfr9rD.js";import"./ai-dropdown-menu-item-Bk73Beez.js";import"./ai-modal-vRNrhunc.js";import"./ai-agent-info-Jynx2Jxd.js";import"./ai-agent-selector-B9EDuWle.js";import"./ai-chat-interface-DJopIrR_.js";import"./ai-file-picker-BpI_tK24.js";import"./ai-message-thread-G7IWXvIc.js";import"./ai-response-message-toolbar-Bs1WAqLR.js";import"./ai-empty-state-DNPp5zeb.js";import"./ai-error-message-sBx0ju0m.js";import"./ai-response-message-UHBUi-Br.js";import"./ai-thinking-indicator-CHVuyyBC.js";import"./ai-user-message-CVIRWmjq.js";import"./ai-user-message-toolbar-DAxEUnwV.js";import"./ai-prompt-2dQi7aqP.js";import"./ai-suggestions-D913ntDt.js";import"./ai-voice-input-BXoGT79c.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function ee(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{ee as default};

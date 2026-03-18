import{j as e,M as r,T as d}from"./blocks-D5vxjawx.js";import{useMDXComponents as o}from"./index-BFoSWfPu.js";import{C as s}from"./CustomArgTypes-CaMwN78u.js";import{A as a}from"./AiEmbeddedChat.stories-CiveJbTv.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CMnSMcE7.js";import"./utils-BjNMdrkX.js";import"./custom-element-UsVr97OX.js";import"./property-D_h1lty0.js";import"./base-DEXl8F5U.js";import"./if-defined-pfkln-iz.js";import"./ref-DQAijAUo.js";import"./class-map-CtwDN7N0.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-DZ0NpiJy.js";import"./mock-adapter-CGsAFG5D.js";import"./utils-B0W8KtS_.js";import"./ai-chatbot-BkUB7lY1.js";import"./ai-attachment-C7I035TS.js";import"./ai-spinner-J1X-BP2H.js";import"./tooltip-SZgBq3RM.js";import"./overlay-CVApnUGp.js";import"./ai-chat-header-CAeLMhjm.js";import"./ai-icon-DgVSEEXj.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CkqwJDW7.js";import"./ai-dropdown-menu-JbJm5Qnz.js";import"./query-assigned-elements-BvI0U-8l.js";import"./popover-BlfkfKC6.js";import"./ai-dropdown-menu-item-Du_3enZ8.js";import"./ai-modal-Bm_fJufi.js";import"./ai-agent-info-DiBpVXG4.js";import"./ai-agent-selector-BHQ0vwHG.js";import"./ai-chat-interface-DIaGLlEO.js";import"./ai-file-picker-BbZyt6j6.js";import"./ai-message-thread-BomSae7d.js";import"./ai-response-message-toolbar-mJvJp6qQ.js";import"./ai-empty-state-CJicMMgd.js";import"./ai-error-message-W8gqvzIp.js";import"./ai-response-message-wH9-BJT-.js";import"./ai-thinking-indicator-xnbfps6E.js";import"./ai-user-message-CX3t2a8P.js";import"./ai-user-message-toolbar-C9iB9x7r.js";import"./ai-prompt-mBc4Ey-8.js";import"./ai-suggestions-CJtotVuz.js";import"./ai-voice-input-CWGUheUQ.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

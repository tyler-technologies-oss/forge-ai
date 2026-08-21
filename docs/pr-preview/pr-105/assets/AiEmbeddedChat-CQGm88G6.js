import{j as e,M as r,T as d}from"./blocks-CgsA1aCY.js";import{useMDXComponents as o}from"./index-ClV3urAy.js";import{C as s}from"./CustomArgTypes-BP9KHRll.js";import{A as a}from"./AiEmbeddedChat.stories-B1HdI2PD.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CYpzolsh.js";import"./utils-C8GDOk2o.js";import"./custom-element-UsVr97OX.js";import"./property-CqK3u29Y.js";import"./class-map-17_4dlLb.js";import"./if-defined-BsEdOuko.js";import"./ref-BB4v-dJB.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-Cl1SUEaa.js";import"./agent-adapter-B7X4CC2Q.js";import"./markdown-CtLA8yAF.js";import"./ai-chatbot-xwv1JoT9.js";import"./ai-attachment-BmE2lFvl.js";import"./ai-spinner-vZDut5ln.js";import"./tooltip-DZwt6XP5.js";import"./overlay-d0qUY_fV.js";import"./floating-ui.dom-alButkyJ.js";import"./ai-chat-header-UBqHTLji.js";import"./ai-icon-DGi160cB.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-y7IUFLz9.js";import"./ai-dropdown-menu-BDGraPvu.js";import"./query-assigned-nodes-BHml-LBf.js";import"./popover-CdwzAdza.js";import"./ai-dropdown-menu-item-Bk1xJQp_.js";import"./ai-modal-91XQRbtZ.js";import"./ai-agent-info-EwBsdKcD.js";import"./ai-agent-selector-BJhE5l_z.js";import"./ai-chat-interface-BZjSC7ON.js";import"./ai-prompt-CFDJKTXR.js";import"./ai-conversations-panel-BxrlN5k-.js";import"./ai-edit-thread-Cs1WgKHI.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-ewujCi5B.js";import"./ai-message-thread-yNYlCEn-.js";import"./ai-response-message-toolbar-BedfAKo6.js";import"./ai-thinking-indicator-DOFZSGFX.js";import"./ai-client-message-DYwNUNkG.js";import"./ai-empty-state-C0X1WTox.js";import"./ai-error-message-CDGUXHQX.js";import"./ai-response-message-wmYk5IJ_.js";import"./ai-user-message-ClponVCq.js";import"./ai-user-message-toolbar-CNSw_C05.js";import"./ai-suggestions-lvHOTQ_o.js";import"./ai-voice-input-DwKWv-41.js";import"./mock-adapter-BgvlmV5I.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function se(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{se as default};

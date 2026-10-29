import{j as e,M as r,T as d}from"./blocks-ogXkaG0a.js";import{useMDXComponents as o}from"./index-Du2BhArc.js";import{C as s}from"./CustomArgTypes-aQZBZ52J.js";import{A as a}from"./AiEmbeddedChat.stories-CPoa1TcY.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-dSzDzv1f.js";import"./utils-D2XdpfxZ.js";import"./custom-element-UsVr97OX.js";import"./property-Cb7Mf2SR.js";import"./query-CpQw5w02.js";import"./class-map-C04AZvwf.js";import"./if-defined-BiFLBQfJ.js";import"./ref-BnXjfLum.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-C1sFAXz8.js";import"./provide-Bxw6gKTd.js";import"./consume-D3B5J4hk.js";import"./ai-message-thread-yzs-6brs.js";import"./utils-BRoM8yNS.js";import"./ai-response-message-toolbar-CUOKrOGl.js";import"./tooltip-C79eh2Vm.js";import"./overlay-B6Xv14mA.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./popover-Co149qMB.js";import"./ai-spinner-DkIR_DVK.js";import"./ai-thinking-indicator-B7HypWgF.js";import"./ai-empty-state-B15sW6kI.js";import"./ai-client-message-Kobt8grf.js";import"./ai-error-message-BSCgsjKy.js";import"./query-assigned-nodes-B1Fbozr4.js";import"./ai-response-message-JelFrCEQ.js";import"./ai-user-message-sFHpTTD_.js";import"./ai-user-message-toolbar-e4h9S7mZ.js";import"./agent-adapter-CiODA7QC.js";import"./ai-chatbot-67vCGyrJ.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-7_KfzLWX.js";import"./ai-chat-header-D6CjgJ1l.js";import"./ai-icon-C6SW1A7H.js";import"./ai-gradient-container-CpzGqLx6.js";import"./ai-dropdown-menu-Bj9ERoiv.js";import"./query-assigned-elements-C3JPlx7a.js";import"./ai-dropdown-menu-item-CZt7-aMI.js";import"./ai-modal-CCjt1Z1V.js";import"./ai-agent-info-DHJCY4Z8.js";import"./ai-agent-selector-Cx7Dcumz.js";import"./ai-chat-interface-D1lcXldx.js";import"./ai-prompt-BBzh7L3f.js";import"./ai-conversations-panel-DDabZFHN.js";import"./ai-edit-thread-BYegyk_U.js";import"./ai-file-picker-D3eHoPC1.js";import"./ai-suggestions-C8UgRJJp.js";import"./ai-voice-input-nbtoslB7.js";import"./mock-adapter-LuDjfxfL.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

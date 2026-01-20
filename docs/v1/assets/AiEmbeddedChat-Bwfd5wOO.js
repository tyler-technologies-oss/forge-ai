import{j as e,M as r,T as d}from"./blocks-DAIEwZge.js";import{useMDXComponents as o}from"./index-CEoQ6k8r.js";import{C as s}from"./CustomArgTypes-BJKd_dcV.js";import{A as a}from"./AiEmbeddedChat.stories-DA_YjvEU.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-ZAkSFMu8.js";import"./custom-element-UsVr97OX.js";import"./property-DFQ_Uq77.js";import"./state-DvvEmXJu.js";import"./if-defined-ePQB79-Q.js";import"./ref-CEtDpJqE.js";import"./class-map-CO-sQ4Y7.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-tI29uu0L.js";import"./mock-adapter-DPRgB_9-.js";import"./utils-Dod8vlOP.js";import"./ai-attachment-Ctok9U7d.js";import"./ai-spinner-D9bA8YYJ.js";import"./tooltip-B4sDshq1.js";import"./query-BpjciUlk.js";import"./base-DVmwUFg0.js";import"./overlay-CzM8LGA5.js";import"./ai-chat-header-t0jSpV_p.js";import"./ai-icon-DLPrbcd_.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CTNXN7Ts.js";import"./ai-dropdown-menu-CuRIFWfE.js";import"./query-assigned-elements-lTLKWxFL.js";import"./popover-gMOrDlOv.js";import"./ai-dropdown-menu-item-KcIJ8HeK.js";import"./ai-modal-zGPJAEsx.js";import"./ai-agent-info-BA-reuiL.js";import"./ai-chat-interface-DlJ2aP38.js";import"./ai-file-picker-CTeCJryu.js";import"./ai-message-thread-grHbA8WF.js";import"./ai-actions-toolbar-ib-4EZo4.js";import"./ai-empty-state-DIbYtzbN.js";import"./ai-error-message-DhbWFxym.js";import"./ai-response-message-B_R75sjt.js";import"./ai-thinking-indicator-lI7FgnYm.js";import"./ai-user-message-CWKUKvoy.js";import"./ai-prompt-Du-lvrA6.js";import"./ai-suggestions-B5gtu7Gn.js";import"./ai-voice-input-D50AMp6r.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

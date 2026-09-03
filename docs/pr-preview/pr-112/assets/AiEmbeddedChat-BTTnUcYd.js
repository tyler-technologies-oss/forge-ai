import{j as e,M as r,T as d}from"./blocks-2xU0dCkE.js";import{useMDXComponents as o}from"./index-B52_wQbQ.js";import{C as s}from"./CustomArgTypes-D35Tmwkl.js";import{A as a}from"./AiEmbeddedChat.stories-TxQ1-24R.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Bi-1nWkR.js";import"./utils-BX4gMDEK.js";import"./custom-element-UsVr97OX.js";import"./property-D-A3RxM9.js";import"./class-map-DveZVzB6.js";import"./if-defined-bUPqGoPe.js";import"./ref-CVnE5sLo.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-Bm3YU0xt.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-CscIGvqJ.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-CEUExzD5.js";import"./ai-spinner-B4hfIXY7.js";import"./tooltip-DIYC_qFg.js";import"./overlay-XfBHk16S.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-chat-header-C7m8Unnd.js";import"./ai-icon-DYcDW-Aq.js";import"./ai-gradient-container-DgMkJLwY.js";import"./ai-dropdown-menu-Cg8aOUr3.js";import"./query-assigned-nodes-DDrXrDde.js";import"./popover-DJM4l3dC.js";import"./ai-dropdown-menu-item-D-LARChW.js";import"./ai-modal-_MO_XFb_.js";import"./ai-agent-info-BgyO98Wo.js";import"./ai-agent-selector-BnzlQgjK.js";import"./ai-chat-interface-CkOZ-V1N.js";import"./ai-prompt-DFX7pkkA.js";import"./ai-conversations-panel-DaZwpjH1.js";import"./ai-edit-thread-DyfjTsPy.js";import"./ai-file-picker-BurVGbAS.js";import"./ai-message-thread-DFLAELmc.js";import"./ai-response-message-toolbar-C_C2KBw8.js";import"./ai-thinking-indicator-Bsew6VLy.js";import"./ai-client-message-BKv0r0f7.js";import"./ai-empty-state-CJ9tRewS.js";import"./ai-error-message-2yrvom1t.js";import"./ai-response-message-C3eoJ6fN.js";import"./ai-user-message-BBaYNY-b.js";import"./ai-user-message-toolbar-NkuyuMKH.js";import"./ai-suggestions-BlfpnYBl.js";import"./ai-voice-input-2E_JNXdX.js";import"./mock-adapter-BpgeerXX.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function de(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{de as default};

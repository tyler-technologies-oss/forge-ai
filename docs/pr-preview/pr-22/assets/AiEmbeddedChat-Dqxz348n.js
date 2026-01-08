import{j as e,M as r,T as d}from"./blocks-QSEPtj5o.js";import{useMDXComponents as o}from"./index-CrJBrB4S.js";import{C as s}from"./CustomArgTypes-R31LBR00.js";import{A as a}from"./AiEmbeddedChat.stories-DH5dL9UE.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CxWCRyiw.js";import"./custom-element-UsVr97OX.js";import"./property-wvKxgXea.js";import"./state-DczHS6Ew.js";import"./ai-dropdown-menu-item-B9L18oYR.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./class-map-DAisp0u-.js";import"./when-CI7b_ccM.js";import"./ref-C5MHfp4j.js";import"./ai-chatbot-B1D3ejkO.js";import"./mock-adapter-BdCNJp5x.js";import"./utils-Dod8vlOP.js";import"./ai-attachment-8vA_6uaT.js";import"./ai-spinner-CLPN1YF9.js";import"./tooltip-D9t6sFVt.js";import"./query-BpjciUlk.js";import"./overlay-DL-t7FJX.js";import"./ai-chat-header-CvRIxYEJ.js";import"./ai-icon-CJfSaGaM.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CbDXQLae.js";import"./ai-dropdown-menu-OuSeK9nv.js";import"./popover-BiZ0AO2f.js";import"./ai-modal-f_uBIKt1.js";import"./ai-agent-info-C_nyG-VQ.js";import"./ai-chat-interface-B2X0blbx.js";import"./ai-file-picker-BPRJuZwL.js";import"./ai-message-thread-Cyh8B-u4.js";import"./ai-empty-state-D4SkZ3Y8.js";import"./ai-error-message-CVvziQzQ.js";import"./ai-response-message-0To-5TLM.js";import"./ai-actions-toolbar-8ti2C7d0.js";import"./ai-thinking-indicator-COktXiMh.js";import"./ai-user-message-BVZTGAqt.js";import"./ai-prompt-B3metBv4.js";import"./ai-suggestions-BfKcHKBy.js";import"./ai-voice-input-CniYQ7ny.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function $(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{$ as default};

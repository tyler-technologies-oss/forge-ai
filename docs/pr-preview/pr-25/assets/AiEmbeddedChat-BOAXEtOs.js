import{j as e,M as r,T as d}from"./blocks-CZ3tK7Tj.js";import{useMDXComponents as o}from"./index-2puztYFi.js";import{C as s}from"./CustomArgTypes-BV_UIse9.js";import{A as a}from"./AiEmbeddedChat.stories-BCGXcxQf.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-D5kciGQW.js";import"./custom-element-UsVr97OX.js";import"./property-DE-Wz1R-.js";import"./state-CjHMRjfJ.js";import"./if-defined-DNqCbI_c.js";import"./ref-BGBwsW_C.js";import"./class-map-B9Lu3lqA.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-4FZbMiW0.js";import"./mock-adapter-DPRgB_9-.js";import"./utils-Dod8vlOP.js";import"./ai-attachment-CLGQz8jy.js";import"./ai-spinner-rxmesOiO.js";import"./tooltip-D-sdF6Mc.js";import"./query-BpjciUlk.js";import"./base-DVmwUFg0.js";import"./overlay-CSj3RQUY.js";import"./ai-chat-header-CcbqFXGG.js";import"./ai-icon-DSrI8rM5.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DabbXs_e.js";import"./ai-dropdown-menu-vRY_4_CF.js";import"./query-assigned-elements-lTLKWxFL.js";import"./popover-CSkEBD3R.js";import"./ai-dropdown-menu-item-C5GR-C7_.js";import"./ai-modal-k0vuvRjB.js";import"./ai-agent-info-I_LWOtfS.js";import"./ai-chat-interface-D8Vo2eAU.js";import"./ai-file-picker-Du4CkNij.js";import"./ai-message-thread-DUZvlY2V.js";import"./ai-actions-toolbar-15IUL_Q3.js";import"./ai-empty-state-BQcOhSwD.js";import"./ai-error-message-Bl-S2RrU.js";import"./ai-response-message-CRmi7lZ1.js";import"./ai-thinking-indicator-K53KYZ6_.js";import"./ai-user-message-16epU-dh.js";import"./ai-prompt-BvK1hZZF.js";import"./ai-suggestions-DTPuXUdO.js";import"./ai-voice-input-BoDJU91f.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

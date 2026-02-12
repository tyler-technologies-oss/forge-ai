import{j as e,M as r,T as d}from"./blocks-rtXGIGX_.js";import{useMDXComponents as o}from"./index-z8gOdIeX.js";import{C as s}from"./CustomArgTypes-BDf4swBS.js";import{A as a}from"./AiEmbeddedChat.stories-hFXGdyH1.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CjyLkcAf.js";import"./custom-element-UsVr97OX.js";import"./property-CCXGwIaz.js";import"./base-CwBp4TWH.js";import"./if-defined-CkrV1gqJ.js";import"./ref-CHywetYt.js";import"./class-map-DwLEfOJ3.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-CSNCV8xk.js";import"./mock-adapter-CGsAFG5D.js";import"./utils-B0W8KtS_.js";import"./ai-attachment-7TRhOU1U.js";import"./ai-spinner-yZ6iFdj_.js";import"./tooltip-0qQm8HIB.js";import"./overlay-Cd7mO8-r.js";import"./ai-chat-header-DmRbOxHV.js";import"./ai-icon-BIBFBXw1.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-B0VYt1uL.js";import"./ai-dropdown-menu-CSeCBmsK.js";import"./query-assigned-elements-BrhC7RoA.js";import"./popover-678H1k0O.js";import"./ai-dropdown-menu-item-xAnJVzKk.js";import"./ai-modal-j8wtGyA_.js";import"./ai-agent-info-Brf7jdv5.js";import"./ai-agent-selector-CsM-DslM.js";import"./ai-chat-interface-JYXCClbf.js";import"./ai-file-picker-v6YRCUzR.js";import"./ai-message-thread-bJfD-44Y.js";import"./ai-response-message-toolbar-D13tisLD.js";import"./ai-empty-state-DRyH8wsu.js";import"./ai-error-message-o4CBBCfz.js";import"./ai-response-message-C-TI2c1u.js";import"./ai-thinking-indicator-DMgtzGp5.js";import"./ai-user-message-CoLYsfH6.js";import"./ai-user-message-toolbar-DaD-MXi-.js";import"./ai-prompt-DFBz3J8m.js";import"./ai-suggestions-DI7DC5K9.js";import"./ai-voice-input-BoGAExV_.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

import{j as e,M as r,T as d}from"./blocks-CnBG3ykT.js";import{useMDXComponents as o}from"./index-CH3pil6n.js";import{C as s}from"./CustomArgTypes-2uWq8VkJ.js";import{A as a}from"./AiEmbeddedChat.stories-CZwcoi6a.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DPbeJets.js";import"./utils-BuxnRiQ6.js";import"./custom-element-UsVr97OX.js";import"./property-DMuxl-Af.js";import"./base-DIQuphXz.js";import"./if-defined-4Sn3281o.js";import"./ref-D0YwaI0t.js";import"./class-map-CezjGASE.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-ChG5MEba.js";import"./mock-adapter-BYw0QxWR.js";import"./utils-BojVjD0a.js";import"./ai-chatbot-DnF2H7E4.js";import"./ai-attachment-B_qzIIWf.js";import"./ai-spinner-B0OpRgNJ.js";import"./tooltip-DJsFJqMy.js";import"./overlay-V7JICMml.js";import"./ai-chat-header-CzG-QuSS.js";import"./ai-icon-CSJUmHGr.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-96XE407T.js";import"./ai-dropdown-menu-CGSTpVd8.js";import"./query-assigned-elements-DIOCMv97.js";import"./popover-BXEV4k8o.js";import"./ai-dropdown-menu-item-Dnubq3c-.js";import"./ai-modal-CWwZCVLG.js";import"./ai-agent-info-BxTilQSx.js";import"./ai-agent-selector-DZ8WHHVT.js";import"./ai-chat-interface-VZaIkC34.js";import"./ai-file-picker-CFNCVIVz.js";import"./ai-message-thread-BAzZh1wg.js";import"./ai-response-message-toolbar-CmMlwdQb.js";import"./ai-empty-state-DKBMUCxK.js";import"./ai-error-message-CZRXojoJ.js";import"./ai-response-message-BZzH7MZw.js";import"./ai-thinking-indicator-Ds2VmX0D.js";import"./ai-user-message-PhMcHSyY.js";import"./ai-user-message-toolbar-DyJjpLku.js";import"./ai-prompt-CPinMXqn.js";import"./ai-suggestions-Bap8tHAc.js";import"./ai-voice-input-DkSlmjHh.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

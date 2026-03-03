import{j as e,M as r,T as d}from"./blocks-CA3k-o04.js";import{useMDXComponents as o}from"./index-DAVNYLhz.js";import{C as s}from"./CustomArgTypes-D7VCbszr.js";import{A as a}from"./AiEmbeddedChat.stories-Bx_9ccog.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Cz54dVI9.js";import"./custom-element-UsVr97OX.js";import"./property-BXosXQ1w.js";import"./base-iCPxbyfK.js";import"./if-defined-Zaa8b5Q5.js";import"./ref-CEMcbrhp.js";import"./class-map-Cgdc7DYR.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-COsozWas.js";import"./mock-adapter-CGsAFG5D.js";import"./utils-B0W8KtS_.js";import"./ai-attachment-ClTAKqYG.js";import"./ai-spinner-Bl0NZhyW.js";import"./tooltip-BEmEgzlk.js";import"./overlay-yc7cOOfI.js";import"./ai-chat-header-BCnAOnhV.js";import"./ai-icon-Dtz8cKcs.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-BI2iAPNc.js";import"./ai-dropdown-menu-BVg7JBwX.js";import"./query-assigned-elements-CHsExyN_.js";import"./popover-CL6M6-2p.js";import"./ai-dropdown-menu-item-DVx7lcsR.js";import"./ai-modal-Vu7yt5w5.js";import"./ai-agent-info-D6y8M-r1.js";import"./ai-agent-selector-BgWpGC4X.js";import"./ai-chat-interface-C3v-lujM.js";import"./ai-file-picker-C5_iyEaC.js";import"./ai-message-thread-C1TNmnlF.js";import"./ai-response-message-toolbar-BegzGUGd.js";import"./ai-empty-state-AW4czdPA.js";import"./ai-error-message-D23j_jfz.js";import"./ai-response-message-Cz1okNyk.js";import"./ai-thinking-indicator-4fF8WVmy.js";import"./ai-user-message-DD3WAGOI.js";import"./ai-user-message-toolbar-CSvSooVB.js";import"./ai-prompt-CMxog9Jf.js";import"./ai-suggestions-FQK3Ww1H.js";import"./ai-voice-input-D2r_6upE.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

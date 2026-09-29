import{j as e,M as r,T as d}from"./blocks-ojii-_lo.js";import{useMDXComponents as o}from"./index-Bfb6d8hh.js";import{C as s}from"./CustomArgTypes-wfAu9Lyy.js";import{A as a}from"./AiEmbeddedChat.stories-CLi-vZy6.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-ItagAsOR.js";import"./utils-ByXa_qZf.js";import"./custom-element-UsVr97OX.js";import"./property-DoW79XPx.js";import"./query-C3XFLit8.js";import"./class-map-CFOYWXuZ.js";import"./if-defined-B9hzWmaj.js";import"./ref-ISg2WD6W.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-DGSO8qu-.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-B4bbHXKC.js";import"./ai-chatbot-B5sfNF0I.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-B8Una7gz.js";import"./ai-spinner-CoqbZHCm.js";import"./tooltip-CEU2iGJI.js";import"./overlay-BGKISNDN.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-chat-header-bK-WD6lj.js";import"./ai-icon-UK4Ln1Ny.js";import"./ai-gradient-container-BzAYSwFb.js";import"./ai-dropdown-menu-CbZP_0eR.js";import"./query-assigned-elements-Birexkvf.js";import"./popover-EZK23l_N.js";import"./query-assigned-nodes-C4vh6K1H.js";import"./ai-dropdown-menu-item-BKcmThY8.js";import"./ai-modal-CqsBn5nW.js";import"./ai-agent-info-DtNYt8-i.js";import"./ai-agent-selector-eBRgzxFL.js";import"./ai-chat-interface-BKtM5Phe.js";import"./ai-prompt-B-zxtJMN.js";import"./ai-conversations-panel-CEOPa-jB.js";import"./ai-edit-thread-Cz15SFmT.js";import"./ai-error-message-BudgouXl.js";import"./ai-file-picker-B0wzRPbj.js";import"./ai-message-thread-CRwMDymH.js";import"./ai-response-message-toolbar-DE6Jh1JJ.js";import"./ai-thinking-indicator-CH6kgfat.js";import"./ai-client-message-D71NE4AB.js";import"./ai-empty-state-CyvsZ3vY.js";import"./ai-response-message-BVyr9u7O.js";import"./ai-user-message-kMiV_1Yq.js";import"./ai-user-message-toolbar-BE8nmnE1.js";import"./ai-suggestions-CCiQXws-.js";import"./ai-voice-input-B49jwCs8.js";import"./mock-adapter-D0dkxTL5.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function ae(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{ae as default};

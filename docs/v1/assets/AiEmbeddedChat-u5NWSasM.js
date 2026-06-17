import{j as e,M as r,T as d}from"./blocks-B1s78o6D.js";import{useMDXComponents as o}from"./index-kBlZ13Xe.js";import{C as s}from"./CustomArgTypes-BKCWbBj9.js";import{A as a}from"./AiEmbeddedChat.stories-_7aASTjt.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BTNck0jc.js";import"./utils-N41bI4ot.js";import"./custom-element-UsVr97OX.js";import"./property-DYxdKUdm.js";import"./class-map-CRxQ4bGh.js";import"./if-defined-CWGF7I1A.js";import"./ref-C7dQ3PJs.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-DKTkvwSe.js";import"./mock-adapter-ls0PbTjH.js";import"./utils-JMyE3xw1.js";import"./ai-chatbot-Cdibl69Q.js";import"./ai-attachment-CZEnaNAM.js";import"./ai-spinner-BHpnSY6f.js";import"./tooltip-BIHWTSK0.js";import"./overlay-CzQIM4-h.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-B5osJKe2.js";import"./ai-icon-BxuZwTIz.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DTqw1Osv.js";import"./ai-dropdown-menu-VM51zu4b.js";import"./query-assigned-nodes-WYH4PSZv.js";import"./popover-CyTCDW2S.js";import"./ai-dropdown-menu-item-DZkB3W-W.js";import"./ai-modal-DETjCdVK.js";import"./ai-agent-info-Qo9_w7en.js";import"./ai-agent-selector-DqTGLDNk.js";import"./ai-chat-interface-CguVGGts.js";import"./ai-conversations-panel-DdDvUZP2.js";import"./ai-edit-thread-BPLOEyue.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-DA84mmSI.js";import"./ai-message-thread-C0PM1fN5.js";import"./ai-response-message-toolbar-BgtnRA6O.js";import"./ai-empty-state-DQ3rkC3G.js";import"./ai-error-message-CGztXwOS.js";import"./ai-response-message-DIlAEOwS.js";import"./ai-thinking-indicator-C-R_bmBc.js";import"./ai-user-message-C_6ilBNP.js";import"./ai-user-message-toolbar-Cp2W2sqG.js";import"./ai-prompt-BsderdZr.js";import"./ai-suggestions-B6ncf1rJ.js";import"./ai-voice-input-zHqbAf3V.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(s,{})]})}function re(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{re as default};

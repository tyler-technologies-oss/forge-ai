import{j as e,M as r,T as d}from"./blocks-ByQgTWIB.js";import{useMDXComponents as o}from"./index-a83ohZF9.js";import{C as s}from"./CustomArgTypes-D2M_681L.js";import{A as a}from"./AiEmbeddedChat.stories-DDATia3d.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CxeI5B0K.js";import"./utils-HqzA9w63.js";import"./custom-element-UsVr97OX.js";import"./property-0bgw5x1u.js";import"./query-CX9OofRs.js";import"./class-map-3BO_8Ifk.js";import"./if-defined-T73XHzDX.js";import"./ref-DmohT3mp.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-PI-fu4ux.js";import"./provide-Bxw6gKTd.js";import"./consume-D3B5J4hk.js";import"./ai-message-thread-DCUJaOCr.js";import"./utils-BRoM8yNS.js";import"./ai-response-message-toolbar-ulbffdRS.js";import"./tooltip-CMsCxNjY.js";import"./overlay-ys5C9_bt.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./popover-BDLZuHxT.js";import"./ai-spinner-DvZn0rGD.js";import"./ai-thinking-indicator-k9NEcLqP.js";import"./ai-empty-state-Bki8_Hsf.js";import"./ai-client-message-C1HysC9d.js";import"./ai-error-message-aMKrXjOk.js";import"./query-assigned-nodes-DsHVf5h4.js";import"./ai-response-message-DmTWrblm.js";import"./ai-user-message-DN33Hn_f.js";import"./ai-user-message-toolbar-BkUisWIN.js";import"./agent-adapter-CiODA7QC.js";import"./ai-chatbot-B_mMaj-t.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-DVfHxo2C.js";import"./ai-chat-header-G1dpMMtI.js";import"./ai-icon-DxAmSoz_.js";import"./ai-gradient-container-CBKzrfFj.js";import"./ai-dropdown-menu-Sd2bDefZ.js";import"./query-assigned-elements-CUkmn4Me.js";import"./ai-dropdown-menu-item-CbNZIOj9.js";import"./ai-modal-CIM5VnjN.js";import"./ai-agent-info-aiDuzm48.js";import"./ai-agent-selector-BH5t4IZH.js";import"./ai-chat-interface-D88l3zFR.js";import"./ai-prompt-DP-K9p_T.js";import"./ai-conversations-panel-C1xLd1Cf.js";import"./ai-edit-thread--OK0jdlS.js";import"./ai-file-picker-BQYlBXJ6.js";import"./ai-suggestions-WTI_NWPy.js";import"./ai-voice-input-BWnMvm3X.js";import"./mock-adapter-LuDjfxfL.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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

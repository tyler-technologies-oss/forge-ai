import{j as e,M as t,T as o,C as d}from"./blocks-K-b86g8p.js";import{useMDXComponents as r}from"./index-D2uPRfRn.js";import{C as l}from"./CustomArgTypes-QT5zF8p2.js";import{A as c}from"./AiSidebar.stories-D2LZ-Jmw.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-ByaASZAq.js";import"./utils-CuPOqGty.js";import"./scaffold-B-E1JR_D.js";import"./class-map-ntPvOCSg.js";import"./property-DR4X3CdD.js";import"./custom-element-UsVr97OX.js";import"./ref-B25wxmZ_.js";import"./floating-ui.dom-alButkyJ.js";import"./split-button-BkpTChmM.js";import"./query-assigned-nodes-DL4sh39u.js";import"./provide-Bxw6gKTd.js";import"./consume-D3B5J4hk.js";import"./if-defined-x4iZ2Mw3.js";import"./ai-sidebar-C1yCKvcd.js";import"./when-CI7b_ccM.js";import"./index-DRpoem5W.js";import"./ai-chat-interface-DD4_IQCF.js";import"./ai-gradient-container-CnNTGVoV.js";import"./utils-BGBq21po.js";import"./ai-prompt-Bpa8qUkV.js";import"./ai-dropdown-menu-item-DZaucG6L.js";import"./popover-CkBxFejF.js";import"./overlay-DlSuCDEe.js";import"./tooltip-DJ_M162U.js";import"./ai-spinner-CPCAC9IA.js";import"./ai-chat-header-1caPUllS.js";import"./ai-icon-DHGABlSg.js";import"./ai-dropdown-menu-CW4X6aNf.js";import"./ai-modal-srScDJ9e.js";import"./ai-agent-info-CkRp85ok.js";import"./ai-agent-selector-CenwOcxj.js";import"./ai-user-message-cH4PUP_l.js";import"./ai-user-message-toolbar-CwXpzVp2.js";import"./ai-response-message-zxHIY9AQ.js";import"./ai-button-N3-tXd2q.js";function s(n){const i={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c}),`
`,e.jsx(o,{children:"AI Sidebar"}),`
`,e.jsx(i.p,{children:"The AI Sidebar component is a container component that provides a drawer-style sidebar interface using Forge CSS-only drawer classes. This component serves as the foundational container for sidebar-based AI interfaces, offering positioning control and backdrop interaction."}),`
`,e.jsx(i.h2,{id:"features",children:"Features"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Flexible positioning"}),": Supports both left and right sidebar positions"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Backdrop interaction"}),": Clicking the backdrop closes the sidebar"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"CSS-based animations"}),": Smooth slide-in/slide-out transitions"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Responsive design"}),": Adapts to mobile viewports with full-width display"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Accessibility support"}),": Proper ARIA attributes for screen readers"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Event-driven API"}),": Emits events for open/close state changes"]}),`
`]}),`
`,e.jsx(i.h2,{id:"when-to-use",children:"When to Use"}),`
`,e.jsx(i.p,{children:"Use the AI Sidebar component when you want:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"A container for sidebar-based content (typically AI chat interfaces)"}),`
`,e.jsx(i.li,{children:"Control over sidebar positioning (left or right)"}),`
`,e.jsx(i.li,{children:"A foundational component for building custom sidebar compositions"}),`
`,e.jsx(i.li,{children:"Direct control over the sidebar behavior without built-in chat interface logic"}),`
`]}),`
`,e.jsxs(i.p,{children:["For a complete sidebar chat solution, consider using the ",e.jsx(i.code,{children:"ai-sidebar-chat"})," form factor component which combines this container with the chat interface automatically."]}),`
`,e.jsx(i.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(d,{children:e.jsx("div",{style:{position:"relative",height:"400px",overflow:"hidden"},children:e.jsx("forge-ai-sidebar",{children:e.jsxs("forge-ai-chat-interface",{children:[e.jsx("forge-ai-chat-header",{slot:"header","show-minimize-button":!0}),e.jsx("forge-ai-user-message",{children:"Hello! Can you help me understand how to use TypeScript generics?"}),e.jsx("forge-ai-response-message",{children:e.jsx(i.p,{children:`I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components that
can work with different types while maintain type safety.`})})]})})})}),`
`,e.jsx(i.h2,{id:"api",children:"API"}),`
`,e.jsx(i.h3,{id:"properties",children:"Properties"}),`
`,e.jsx(l,{}),`
`,e.jsx(i.h3,{id:"methods",children:"Methods"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"show()"}),": Opens the sidebar"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"close()"}),": Closes the sidebar"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"toggle()"}),": Toggles the sidebar open/closed state"]}),`
`]}),`
`,e.jsx(i.h3,{id:"events",children:"Events"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"forge-ai-sidebar-open"}),": Fired when the sidebar is opened"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"forge-ai-sidebar-close"}),": Fired when the sidebar is closed"]}),`
`]}),`
`,e.jsx(i.h2,{id:"positioning",children:"Positioning"}),`
`,e.jsx(i.p,{children:"The sidebar supports two positions:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"right"})})," (default): Sidebar slides in from the right edge"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"left"})}),": Sidebar slides in from the left edge"]}),`
`]}),`
`,e.jsx(i.h2,{id:"responsive-behavior",children:"Responsive Behavior"}),`
`,e.jsx(i.p,{children:"On mobile viewports (≤768px), the sidebar automatically becomes full-width regardless of positioning, providing an optimal mobile experience."}),`
`,e.jsx(i.h2,{id:"comparison-with-form-factor-component",children:"Comparison with Form Factor Component"}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Approach"}),e.jsx(i.th,{children:"Best For"}),e.jsx(i.th,{children:"Pros"}),e.jsx(i.th,{children:"Cons"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"ai-sidebar"})}),e.jsx(i.td,{children:"Custom compositions"}),e.jsx(i.td,{children:"Maximum flexibility, reusable container"}),e.jsx(i.td,{children:"Manual content setup required"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"ai-sidebar-chat"})}),e.jsx(i.td,{children:"Complete sidebar chat"}),e.jsx(i.td,{children:"Easy to use, built-in chat interface"}),e.jsx(i.td,{children:"Less flexible, opinionated setup"})]})]})]}),`
`,e.jsxs(i.p,{children:["Choose the atomic ",e.jsx(i.code,{children:"ai-sidebar"})," component when you need a flexible container, or use ",e.jsx(i.code,{children:"ai-sidebar-chat"})," for a complete solution."]})]})}function Y(n={}){const{wrapper:i}={...r(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{Y as default};

import{j as e,M as t,T as o,C as d}from"./blocks-DmhomI2R.js";import{useMDXComponents as r}from"./index-CGea2NPx.js";import{C as l}from"./CustomArgTypes-C9rVQ20c.js";import{A as h}from"./AiSidebar.stories-DCgpfUh3.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C-IA6-Hz.js";import"./utils-DI2oIrVv.js";import"./if-defined-BKcD6SzD.js";import"./scaffold-DL68bSKo.js";import"./class-map-DSPhrvha.js";import"./custom-element-UsVr97OX.js";import"./property-le6t98HW.js";import"./ref-DZsC5aA2.js";import"./query-gKpr0UfE.js";import"./style-map-B330I-jf.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-B8UMnmll.js";import"./query-assigned-elements-C5Lta-hz.js";import"./query-assigned-nodes-HXzGWLGE.js";import"./context-consumer-CIN_xSLl.js";import"./context-provider-NnzmXA_k.js";import"./ai-sidebar-BAbbIhjG.js";import"./when-CI7b_ccM.js";import"./storage-utils-C8x8JGnW.js";import"./index-BvLK-CQe.js";import"./ai-chat-interface-nup8W0G9.js";import"./ai-gradient-container-HBCTbc7n.js";import"./utils-DIqd7FWX.js";import"./ai-prompt-B9t0Y82u.js";import"./ai-dropdown-menu-item-D_z8d1Uh.js";import"./popover-Cx0tRykh.js";import"./overlay-QxeQPrBV.js";import"./tooltip-CT4IMBKx.js";import"./ai-spinner-YRthPADe.js";import"./ai-chat-header-B5yMMl5j.js";import"./ai-icon-XwHdEf59.js";import"./ai-dropdown-menu-DMqXFUkc.js";import"./ai-modal-DKT2n6GH.js";import"./ai-agent-info-C-pqloUR.js";import"./ai-agent-selector-DgZzHClh.js";import"./ai-user-message-rKtiGhtv.js";import"./ai-user-message-toolbar-C3vQBXnl.js";import"./ai-response-message-D6QTQ5zk.js";import"./ai-button-UwJ8I_nQ.js";function n(s){const i={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:h}),`
`,e.jsx(o,{children:"AI Sidebar"}),`
`,e.jsx(i.p,{children:"The AI Sidebar component is a container component that provides a drawer-style sidebar interface using Forge CSS-only drawer classes. This component serves as the foundational container for sidebar-based AI interfaces, offering positioning control and backdrop interaction."}),`
`,e.jsx(i.h2,{id:"features",children:"Features"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Flexible positioning"}),": Supports both left and right sidebar positions"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Backdrop interaction"}),": Clicking the backdrop closes the sidebar"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"CSS-based animations"}),": Smooth slide-in/slide-out transitions"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Responsive design"}),": Adapts to mobile viewports with full-width display"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Accessibility support"}),": Proper ARIA attributes for screen readers"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Event-driven API"}),": Emits events for open/close state changes and resizes"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Resizable"}),": Drag handle and keyboard resizing within min/max bounds"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Width persistence"}),": Remembers the resized width across page loads"]}),`
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
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"forge-ai-sidebar-resize"}),": Fired when a resize is committed (pointer release or keyboard step). ",e.jsx(i.code,{children:"event.detail.width"})," contains the new width in pixels."]}),`
`]}),`
`,e.jsx(i.h2,{id:"resizing",children:"Resizing"}),`
`,e.jsxs(i.p,{children:["When ",e.jsx(i.code,{children:"resizable"})," is ",e.jsx(i.code,{children:'"on"'})," (the default), the sidebar can be resized by dragging the handle on its edge or by focusing the handle and pressing the left/right arrow keys. The width is clamped between 360px and 800px and never exceeds the viewport. Set ",e.jsx(i.code,{children:'resizable="off"'})," to disable resizing."]}),`
`,e.jsxs(i.p,{children:["Set ",e.jsx(i.code,{children:"width"})," to control the initial or current width programmatically:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<forge-ai-sidebar width="520"></forge-ai-sidebar>
`})}),`
`,e.jsx(i.h3,{id:"width-persistence",children:"Width Persistence"}),`
`,e.jsxs(i.p,{children:["The user's chosen width is remembered automatically. Each committed resize is written to both ",e.jsx(i.code,{children:"sessionStorage"})," and ",e.jsx(i.code,{children:"localStorage"})," under the key ",e.jsx(i.code,{children:"forge-ai-sidebar-width"}),". On load the sidebar uses, in order:"]}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:["The ",e.jsx(i.code,{children:"sessionStorage"})," value, so each tab keeps its own width across reloads"]}),`
`,e.jsxs(i.li,{children:["The ",e.jsx(i.code,{children:"localStorage"})," value, so a new tab starts at the most recently used width on the origin"]}),`
`,e.jsx(i.li,{children:"The built-in default"}),`
`]}),`
`,e.jsxs(i.p,{children:["Tabs opened from the page (links with ",e.jsx(i.code,{children:'target="_blank"'}),", ",e.jsx(i.code,{children:"window.open"}),") inherit the opener's session width and then track independently."]}),`
`,e.jsxs(i.p,{children:["The stored value is clamped to the current bounds when applied. Setting ",e.jsx(i.code,{children:"width"})," explicitly overrides the stored value for that instance. Setting ",e.jsx(i.code,{children:"resizable"})," to ",e.jsx(i.code,{children:'"off"'})," resets the sidebar to its default width and clears both stored values. If storage is unavailable, the sidebar falls back to the default width silently."]}),`
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
`,e.jsxs(i.p,{children:["Choose the atomic ",e.jsx(i.code,{children:"ai-sidebar"})," component when you need a flexible container, or use ",e.jsx(i.code,{children:"ai-sidebar-chat"})," for a complete solution."]})]})}function ie(s={}){const{wrapper:i}={...r(),...s.components};return i?e.jsx(i,{...s,children:e.jsx(n,{...s})}):n(s)}export{ie as default};

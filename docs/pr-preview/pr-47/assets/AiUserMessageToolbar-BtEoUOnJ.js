import{j as e,M as o,T as a,C as s}from"./blocks-B_JHdttX.js";import{useMDXComponents as r}from"./index-BUlXZrGn.js";import{C as d}from"./CustomArgTypes-BMhAed0J.js";import{A as l,D as c,S as h}from"./AiUserMessageToolbar.stories-ntmI6zmt.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BAxVbwLB.js";import"./utils-D3jxQn3U.js";import"./ai-user-message-toolbar-fBVaU1xF.js";import"./custom-element-UsVr97OX.js";import"./property-DkpCXdf_.js";import"./tooltip-BStxRYAC.js";import"./base-C1e8NJ0Y.js";import"./class-map-B51DPJ2K.js";import"./overlay-8Vp-JEDj.js";import"./when-CI7b_ccM.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:l}),`
`,e.jsx(a,{}),`
`,e.jsx(n.p,{children:"The User Message Toolbar provides action buttons for user-submitted messages. It displays a timestamp and includes resend, edit, and copy actions that emit structured events for easy integration."}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(n.h3,{id:"streaming-state",children:"Streaming State"}),`
`,e.jsx(n.p,{children:"When the AI is streaming a response, the resend and edit buttons are hidden to prevent actions that could interrupt the stream."}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h3,{id:"action-types",children:"Action Types"}),`
`,e.jsx(n.p,{children:"The toolbar provides the following actions:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Timestamp"})," - Displays the message timestamp with a tooltip showing the full date"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Resend"})," - Resend the user message to get a new AI response"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Edit"})," - Edit the user message"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Copy"})," - Copy the message content"]}),`
`]}),`
`,e.jsx(n.h3,{id:"event-handling",children:"Event Handling"}),`
`,e.jsx(n.p,{children:"The component emits three event types:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`toolbar.addEventListener('forge-ai-user-message-toolbar-copy', () => {
  // Handle copy action
});

toolbar.addEventListener('forge-ai-user-message-toolbar-resend', () => {
  // Handle resend action
});

toolbar.addEventListener('forge-ai-user-message-toolbar-edit', () => {
  // Handle edit action (open edit mode)
});
`})}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["All buttons have proper ",e.jsx(n.code,{children:"aria-label"})," attributes for screen reader compatibility"]}),`
`,e.jsx(n.li,{children:"Keyboard navigation supported through standard button focus behavior"}),`
`,e.jsx(n.li,{children:"Timestamp has a tooltip showing the full date and time"}),`
`]})]})}function D(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{D as default};

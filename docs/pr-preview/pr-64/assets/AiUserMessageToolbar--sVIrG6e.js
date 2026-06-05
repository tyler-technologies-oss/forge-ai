import{j as e,M as o,T as a,C as s}from"./blocks-BgnlpiwA.js";import{useMDXComponents as r}from"./index-DDgIKc--.js";import{C as d}from"./CustomArgTypes-BFo_n46R.js";import{A as l,D as c,S as h}from"./AiUserMessageToolbar.stories-sx-xaiot.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-uGLD-tBn.js";import"./utils-BIdDcZcy.js";import"./ai-user-message-toolbar-DVWKub2_.js";import"./custom-element-UsVr97OX.js";import"./property-CAiA-T5o.js";import"./tooltip-VTiRL8da.js";import"./base-Z5d63sI5.js";import"./class-map-lbcmFTqR.js";import"./overlay-GBEMx1gD.js";import"./floating-ui.dom-C0FiGihr.js";import"./when-CI7b_ccM.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:l}),`
`,e.jsx(a,{}),`
`,e.jsx(t.p,{children:"The User Message Toolbar provides action buttons for user-submitted messages. It displays a timestamp and includes resend, edit, and copy actions that emit structured events for easy integration."}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(t.h3,{id:"streaming-state",children:"Streaming State"}),`
`,e.jsx(t.p,{children:"When the AI is streaming a response, the resend and edit buttons are hidden to prevent actions that could interrupt the stream."}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(t.h3,{id:"action-types",children:"Action Types"}),`
`,e.jsx(t.p,{children:"The toolbar provides the following actions:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Timestamp"})," - Displays the message timestamp with a tooltip showing the full date"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Resend"})," - Resend the user message to get a new AI response"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Edit"})," - Edit the user message"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Copy"})," - Copy the message content"]}),`
`]}),`
`,e.jsx(t.h3,{id:"event-handling",children:"Event Handling"}),`
`,e.jsx(t.p,{children:"The component emits three event types:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`toolbar.addEventListener('forge-ai-user-message-toolbar-copy', () => {
  // Handle copy action
});

toolbar.addEventListener('forge-ai-user-message-toolbar-resend', () => {
  // Handle resend action
});

toolbar.addEventListener('forge-ai-user-message-toolbar-edit', () => {
  // Handle edit action (open edit mode)
});
`})}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(d,{}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["All buttons have proper ",e.jsx(t.code,{children:"aria-label"})," attributes for screen reader compatibility"]}),`
`,e.jsx(t.li,{children:"Keyboard navigation supported through standard button focus behavior"}),`
`,e.jsx(t.li,{children:"Timestamp has a tooltip showing the full date and time"}),`
`]})]})}function S(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{S as default};

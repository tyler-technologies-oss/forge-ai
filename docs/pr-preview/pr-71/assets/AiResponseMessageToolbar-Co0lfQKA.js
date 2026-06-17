import{j as e,M as r,T as a,C as s}from"./blocks-CYcV6LCN.js";import{useMDXComponents as i}from"./index-DZkoC1pG.js";import{C as c}from"./CustomArgTypes-D89Oce0L.js";import{A as d,D as l,W as p}from"./AiResponseMessageToolbar.stories-BdJZs6UH.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DohymFR3.js";import"./utils-N41bI4ot.js";import"./ai-response-message-toolbar-DhoMXNer.js";import"./custom-element-UsVr97OX.js";import"./property-CxkMLdss.js";import"./class-map-DmicZuDw.js";import"./when-CI7b_ccM.js";import"./tooltip-D9jpz_fN.js";import"./overlay-CSgYsw1K.js";import"./floating-ui.dom-C0FiGihr.js";import"./popover-MzdIgDvk.js";function o(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:d}),`
`,e.jsx(a,{}),`
`,e.jsx(n.p,{children:"The Response Message Toolbar provides action buttons for AI-generated response messages. It includes resend, copy, and optional feedback (thumbs up/down) actions that emit structured events for easy integration."}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(n.h3,{id:"with-reactions",children:"With Reactions"}),`
`,e.jsx(n.p,{children:"Enable the reactions feature to show thumbs up/down buttons for user feedback."}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h3,{id:"action-types",children:"Action Types"}),`
`,e.jsx(n.p,{children:"The toolbar provides the following actions:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Resend"})," - Regenerate or resend the AI response"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Copy"})," - Copy the response content"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Thumbs Up/Down"})," - Provide feedback on the AI response (when ",e.jsx(n.code,{children:"enable-reactions"})," is set)"]}),`
`]}),`
`,e.jsx(n.h3,{id:"event-handling",children:"Event Handling"}),`
`,e.jsx(n.p,{children:"The component emits two event types:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// Action events (resend, copy)
toolbar.addEventListener('forge-ai-response-message-toolbar-action', event => {
  const { action } = event.detail; // 'resend' | 'copy' | 'thumbs-up' | 'thumbs-down'
  // Handle action
});

// Feedback events (thumbs up/down with optional feedback text)
toolbar.addEventListener('forge-ai-response-message-toolbar-feedback', event => {
  const { action, feedback } = event.detail;
  // action: 'positive' | 'negative'
  // feedback: optional string with user feedback
});
`})}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["All buttons have proper ",e.jsx(n.code,{children:"aria-label"})," attributes for screen reader compatibility"]}),`
`,e.jsx(n.li,{children:"Keyboard navigation supported through standard button focus behavior"}),`
`,e.jsx(n.li,{children:"High contrast icons for better visibility"}),`
`]})]})}function D(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{D as default};

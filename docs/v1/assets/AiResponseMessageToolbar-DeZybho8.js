import{j as e,M as r,T as a,C as s}from"./blocks-BO3o6Ju0.js";import{useMDXComponents as i}from"./index-DV_K5VG9.js";import{C as c}from"./CustomArgTypes-BTJU-tk7.js";import{A as d,D as l,W as p}from"./AiResponseMessageToolbar.stories-B2S2UH_J.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DlJEpWNk.js";import"./ai-response-message-toolbar-BP0uo5qX.js";import"./custom-element-UsVr97OX.js";import"./property-DAoWjuXC.js";import"./base-BU384QaK.js";import"./class-map-DIYZ0kX4.js";import"./when-CI7b_ccM.js";import"./tooltip-zCFPGIz_.js";import"./overlay-D2vQqLFf.js";import"./popover-Bo4XjLbu.js";function o(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:d}),`
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
`]})]})}function R(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{R as default};

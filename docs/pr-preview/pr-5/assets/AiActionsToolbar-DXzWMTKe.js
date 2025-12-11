import{j as n,M as r,T as s,C as a}from"./blocks-Jv7wmX4b.js";import{useMDXComponents as i}from"./index-Bh16KFfY.js";import{C as c}from"./CustomArgTypes-DPZh7NZ5.js";import{A as l,D as d}from"./AiActionsToolbar.stories-Bs4VZ7Ym.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DNPZiRV8.js";import"./ai-actions-toolbar-B4UBpQvr.js";import"./custom-element-UsVr97OX.js";import"./property-_rIcp3E4.js";import"./state-CgJGsGUT.js";import"./query-BpjciUlk.js";import"./base-DVmwUFg0.js";import"./when-CI7b_ccM.js";import"./tooltip-Do7jSokR.js";import"./class-map-BAXGTaLk.js";import"./overlay-Cza_ksMz.js";import"./popover-hTPuxKBs.js";function o(t){const e={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:l}),`
`,n.jsx(s,{}),`
`,n.jsx(e.p,{children:"The AI Actions Toolbar provides a set of action buttons commonly used in AI chat interfaces for interacting with AI-generated content. It includes refresh, copy, and feedback actions that emit structured events for easy integration."}),`
`,n.jsx(e.p,{children:"The component provides consistent styling using Forge design tokens and icon button patterns, with all functionality handled through event emission."}),`
`,n.jsx(a,{of:d}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Note:"})," All actions emit events for the parent application to handle. The component does not perform any functionality directly, allowing for flexible integration."]}),`
`]}),`
`,n.jsx(e.h3,{id:"action-types",children:"Action Types"}),`
`,n.jsx(e.p,{children:"The toolbar provides four main actions:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Refresh"})," - Regenerate or refresh AI content"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Copy"})," - Emit copy action event for parent to handle clipboard operations"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Thumbs Up/Down"})," - Provide feedback on your AI responses"]}),`
`]}),`
`,n.jsx(e.h3,{id:"event-handling",children:"Event Handling"}),`
`,n.jsx(e.p,{children:"The component emits a single event type for all actions:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`toolbar.addEventListener('forge-ai-actions-toolbar-action', event => {
  const { action } = event.detail; // 'refresh' | 'copy' | 'thumbs-up' | 'thumbs-down'

  switch (action) {
    case 'refresh':
      // Handle refresh request
      break;
    case 'copy':
      // Handle copy action (implement clipboard logic here)
      break;
    case 'thumbs-up':
    case 'thumbs-down':
      // Handle feedback
      break;
  }
});
`})}),`
`,n.jsx(e.h2,{id:"api",children:"API"}),`
`,n.jsx(c,{}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["All buttons have proper ",n.jsx(e.code,{children:"aria-label"})," attributes for screen reader compatibility"]}),`
`,n.jsx(e.li,{children:"Keyboard navigation supported through standard button focus behavior"}),`
`,n.jsx(e.li,{children:"High contrast icons for better visibility"}),`
`,n.jsx(e.li,{children:"Semantic button elements provide proper role information"}),`
`]})]})}function M(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{M as default};

import{j as n,M as s,T as r,C as a}from"./blocks-0I7jDeVO.js";import{useMDXComponents as i}from"./index-hBCtf0u8.js";import{C as c}from"./CustomArgTypes-CEt1XMmz.js";import{A as l,D as d}from"./AiActionsToolbar.stories-Bo0VwScP.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-lCzSBZJV.js";import"./ai-actions-toolbar-Dkrf67ZC.js";import"./custom-element-C028faeO.js";function o(t){const e={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:l}),`
`,n.jsx(r,{}),`
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
`]})]})}function y(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{y as default};

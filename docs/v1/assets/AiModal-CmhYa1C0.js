import{j as e,M as t,T as r,C as l}from"./blocks-BM80hmij.js";import{useMDXComponents as s}from"./index-CB_jfIsc.js";import{C as d}from"./CustomArgTypes-D7R-WvqE.js";import{A as c,D as a}from"./AiModal.stories-DjnDqLn-.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DUNYetkA.js";import"./utils-D22WoWuC.js";import"./ref-Dj2HPsRF.js";import"./class-map-BOEhWNTG.js";import"./property-DHETAyVB.js";import"./ai-modal-Bu8lxtQn.js";import"./custom-element-UsVr97OX.js";import"./utils-BGBq21po.js";function i(o){const n={code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c}),`
`,e.jsx(r,{}),`
`,e.jsxs(n.p,{children:["The AI Modal component provides a basic modal dialog implementation using the native HTML ",e.jsx(n.code,{children:"<dialog>"})," element. This component is designed to be a simple, foundational modal that can be extended for more specific use cases."]}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsxs(n.p,{children:["The AI Modal renders content within a standard HTML dialog element and provides programmatic control through the ",e.jsx(n.code,{children:"open"})," property and ",e.jsx(n.code,{children:"show()"}),"/",e.jsx(n.code,{children:"close()"})," methods."]}),`
`,e.jsx(l,{of:a}),`
`,e.jsx(n.h2,{id:"opening-and-closing",children:"Opening and Closing"}),`
`,e.jsx(n.p,{children:"The modal can be controlled in several ways:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Property"}),": Set the ",e.jsx(n.code,{children:"open"})," property to ",e.jsx(n.code,{children:"true"})," or ",e.jsx(n.code,{children:"false"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Attribute"}),": Add or remove the ",e.jsx(n.code,{children:"open"})," attribute"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Methods"}),": Call ",e.jsx(n.code,{children:"show()"})," to open or ",e.jsx(n.code,{children:"close()"})," to close the modal"]}),`
`]}),`
`,e.jsx(n.h2,{id:"content",children:"Content"}),`
`,e.jsx(n.p,{children:"All content is provided through slots, giving you complete control over the modal's internal structure and styling. The component provides no default content - everything must be provided by the consumer."}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["This component uses the native HTML ",e.jsx(n.code,{children:"<dialog>"})," element, which provides built-in accessibility features including:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Proper focus management"}),`
`,e.jsx(n.li,{children:"Keyboard navigation (Escape key to close)"}),`
`,e.jsx(n.li,{children:"Screen reader compatibility"}),`
`,e.jsx(n.li,{children:"Backdrop interaction handling"}),`
`]}),`
`,e.jsxs(n.p,{children:["The dialog is labelled via the ",e.jsx(n.code,{children:"label"})," property (default: ",e.jsx(n.code,{children:'"AI Assistant"'}),"), which is applied as the dialog's ",e.jsx(n.code,{children:"aria-label"})," so screen readers announce a meaningful name when the modal opens. Set ",e.jsx(n.code,{children:"label"})," to match the content shown in your modal."]})]})}function C(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{C as default};

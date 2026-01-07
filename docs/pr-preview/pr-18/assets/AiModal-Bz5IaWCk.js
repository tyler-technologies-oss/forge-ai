import{j as e,M as t,T as r,C as c}from"./blocks-B_QzsGrI.js";import{useMDXComponents as s}from"./index-DTR24VF2.js";import{C as d}from"./CustomArgTypes-C4IDfSRo.js";import{A as l,D as a}from"./AiModal.stories-Cv4kLqoI.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DjbbAuUw.js";import"./ref-frdxzFZp.js";import"./class-map-CVl0mB9Z.js";import"./ai-modal-CCfVVGX6.js";import"./custom-element-UsVr97OX.js";import"./property-mQJOEROL.js";import"./state-Dcyyn2ed.js";import"./query-BpjciUlk.js";import"./base-DVmwUFg0.js";import"./utils-BGBq21po.js";function i(o){const n={code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:l}),`
`,e.jsx(r,{}),`
`,e.jsxs(n.p,{children:["The AI Modal component provides a basic modal dialog implementation using the native HTML ",e.jsx(n.code,{children:"<dialog>"})," element. This component is designed to be a simple, foundational modal that can be extended for more specific use cases."]}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsxs(n.p,{children:["The AI Modal renders content within a standard HTML dialog element and provides programmatic control through the ",e.jsx(n.code,{children:"open"})," property and ",e.jsx(n.code,{children:"show()"}),"/",e.jsx(n.code,{children:"close()"})," methods."]}),`
`,e.jsx(c,{of:a}),`
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
`,e.jsx(n.p,{children:"Make sure to provide appropriate ARIA labels and descriptions for your modal content to ensure full accessibility compliance."})]})}function D(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{D as default};

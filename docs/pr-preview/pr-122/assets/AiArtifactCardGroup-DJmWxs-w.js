import{j as e,M as o,T as a,C as t}from"./blocks-CcxUb8Td.js";import{useMDXComponents as i}from"./index-cd_Rsv4m.js";import{C as c}from"./CustomArgTypes-xO0HNyac.js";import{A as d,D as l,F as h,a as x}from"./AiArtifactCardGroup.stories-BXP4XkB0.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CoBfPbd3.js";import"./utils-CrrWgVk1.js";import"./scaffold-BNDmhoTT.js";import"./class-map-CkAI6cI1.js";import"./custom-element-UsVr97OX.js";import"./property-lAMkMHoo.js";import"./ref-CAcp34Hu.js";import"./query-MQ7BNTpj.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-BeTuroci.js";import"./query-assigned-elements-C1zrVGr5.js";import"./query-assigned-nodes-CojvWIzB.js";import"./if-defined-Dm2JAjLe.js";import"./index-C35plZJr.js";import"./ai-artifact-card-group-C_hdq0Nt.js";function n(s){const r={code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
`,e.jsx(a,{}),`
`,e.jsxs(r.p,{children:["The AI Artifact Card Group presents several ",e.jsx(r.code,{children:"forge-ai-artifact-card"}),` elements as one list — for example, when an
agent returns more than one result for a single request. Past a set count, the extra cards collapse behind a toggle.`]}),`
`,e.jsx(t,{of:l}),`
`,e.jsx(r.h2,{id:"features",children:"Features"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"One container"}),`: the group draws the border, corners, and dividers; cards inside it switch to a row style on
their own, with no extra attributes`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Collapsing"}),": cards past ",e.jsx(r.code,{children:"visible-count"})," (3 by default) are hidden until the user expands the list"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Cards keep their API"}),": each row still emits ",e.jsx(r.code,{children:"forge-ai-artifact-card-open"}),`, so open handling is the same as for
a single card`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Translatable toggle"}),": both toggle labels are properties; ",e.jsx(r.code,{children:"{count}"})," in ",e.jsx(r.code,{children:"show-more-text"}),` becomes the number of
hidden cards`]}),`
`]}),`
`,e.jsx(r.h2,{id:"when-every-card-fits",children:"When every card fits"}),`
`,e.jsxs(r.p,{children:["With ",e.jsx(r.code,{children:"visible-count"})," cards or fewer, no toggle renders."]}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(r.h2,{id:"active-row",children:"Active row"}),`
`,e.jsxs(r.p,{children:["Set ",e.jsx(r.code,{children:"active"})," on the card for the result currently being viewed. In a group it shows as a light accent fill on the row."]}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(r.h2,{id:"api",children:"API"}),`
`,e.jsx(c,{}),`
`,e.jsx(r.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"The group is exposed as a list and each card as a list item, so screen readers announce the number of results"}),`
`,e.jsxs(r.li,{children:["The toggle is a native button with ",e.jsx(r.code,{children:"aria-expanded"})]}),`
`,e.jsxs(r.li,{children:["Collapsed cards are hidden with the ",e.jsx(r.code,{children:"hidden"})," attribute, so they leave the tab order and the accessibility tree"]}),`
`,e.jsx(r.li,{children:"Focus stays on the toggle after expanding or collapsing"}),`
`]})]})}function R(s={}){const{wrapper:r}={...i(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(n,{...s})}):n(s)}export{R as default};

import{j as e,M as o,T as a,C as n}from"./blocks-ojii-_lo.js";import{useMDXComponents as i}from"./index-Bfb6d8hh.js";import{C as l}from"./CustomArgTypes-wfAu9Lyy.js";import{A as c,D as d,F as h,a as p}from"./AiArtifactCardGroup.stories-E1gwfF7-.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-ItagAsOR.js";import"./utils-ByXa_qZf.js";import"./scaffold-2M2a2KxW.js";import"./class-map-CFOYWXuZ.js";import"./custom-element-UsVr97OX.js";import"./property-DoW79XPx.js";import"./ref-ISg2WD6W.js";import"./query-C3XFLit8.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-BW7II5QS.js";import"./query-assigned-elements-Birexkvf.js";import"./query-assigned-nodes-C4vh6K1H.js";import"./if-defined-B9hzWmaj.js";import"./index-0rjW6WY8.js";import"./ai-artifact-card-group-BVYeSdtP.js";function t(r){const s={code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
`,e.jsx(a,{}),`
`,e.jsxs(s.p,{children:["The AI Artifact Card Group presents several ",e.jsx(s.code,{children:"forge-ai-artifact-card"}),` elements as one list — for example, when an
agent returns more than one result for a single request. Past a set count, the extra cards collapse behind a toggle.`]}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(s.h2,{id:"features",children:"Features"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"One container"}),`: the group draws the border, corners, and dividers; cards inside it switch to a row style on
their own, with no extra attributes`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Collapsing"}),": cards past ",e.jsx(s.code,{children:"visible-count"})," (3 by default) are hidden until the user expands the list"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Cards keep their API"}),": each row still emits ",e.jsx(s.code,{children:"forge-ai-artifact-card-open"}),`, so open handling is the same as for
a single card`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Translatable toggle"}),": both toggle labels are properties; ",e.jsx(s.code,{children:"{count}"})," in ",e.jsx(s.code,{children:"show-more-text"}),` becomes the number of
collapsed cards`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Respects ",e.jsx(s.code,{children:"hidden"})]}),": a card you hide yourself stays hidden and is not counted; collapsing uses its own marker"]}),`
`]}),`
`,e.jsx(s.h2,{id:"when-every-card-fits",children:"When every card fits"}),`
`,e.jsxs(s.p,{children:["With ",e.jsx(s.code,{children:"visible-count"})," cards or fewer, no toggle renders."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(s.h2,{id:"active-row",children:"Active row"}),`
`,e.jsxs(s.p,{children:["Set ",e.jsx(s.code,{children:"active"})," on the card for the result currently being viewed. In a group it shows as a light accent fill on the row."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(s.h2,{id:"api",children:"API"}),`
`,e.jsx(l,{}),`
`,e.jsx(s.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:`The group is exposed as a list and each card as a list item, so screen readers announce the number of visible
results; the toggle's label carries the count of collapsed ones`}),`
`,e.jsxs(s.li,{children:["The toggle is a native button with ",e.jsx(s.code,{children:"aria-expanded"})]}),`
`,e.jsx(s.li,{children:"Collapsed cards are removed from layout, so they leave the tab order and the accessibility tree"}),`
`,e.jsx(s.li,{children:"Focus stays on the toggle after expanding or collapsing"}),`
`]})]})}function k(r={}){const{wrapper:s}={...i(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(t,{...r})}):t(r)}export{k as default};

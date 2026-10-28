import{j as e,M as o,T as a,C as n}from"./blocks-ZZkA_lAe.js";import{useMDXComponents as i}from"./index-5klHlCGH.js";import{C as l}from"./CustomArgTypes-BWEo-bEI.js";import{A as c,D as d,F as h,a as p}from"./AiArtifactCardGroup.stories-CSs6BRNo.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-d1QanYZZ.js";import"./utils-CeukVkDl.js";import"./scaffold-B605ehel.js";import"./class-map-BCd6fXy0.js";import"./custom-element-UsVr97OX.js";import"./property-Bv8AywkK.js";import"./ref-BNaYlydZ.js";import"./query-Dj9Gy6GR.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-Tas106WT.js";import"./query-assigned-elements-B8sE8lrR.js";import"./query-assigned-nodes-BscC51yq.js";import"./provide-Bxw6gKTd.js";import"./consume-D3B5J4hk.js";import"./if-defined-XXZ5nTor.js";import"./index-ffDOXgz3.js";import"./ai-artifact-card-DKvaxlC2.js";function t(r){const s={code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
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
`]})]})}function S(r={}){const{wrapper:s}={...i(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(t,{...r})}):t(r)}export{S as default};

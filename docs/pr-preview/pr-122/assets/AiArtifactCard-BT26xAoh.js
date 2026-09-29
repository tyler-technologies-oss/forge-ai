import{j as e,M as a,T as r,C as i}from"./blocks-ojii-_lo.js";import{useMDXComponents as o}from"./index-Bfb6d8hh.js";import{C as c}from"./CustomArgTypes-wfAu9Lyy.js";import{A as l,D as h,a as d,C as p,I as m}from"./AiArtifactCard.stories-DxdyzOTU.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-ItagAsOR.js";import"./utils-ByXa_qZf.js";import"./if-defined-B9hzWmaj.js";import"./scaffold-2M2a2KxW.js";import"./class-map-CFOYWXuZ.js";import"./custom-element-UsVr97OX.js";import"./property-DoW79XPx.js";import"./ref-ISg2WD6W.js";import"./query-C3XFLit8.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-BW7II5QS.js";import"./query-assigned-elements-Birexkvf.js";import"./query-assigned-nodes-C4vh6K1H.js";import"./index-0rjW6WY8.js";import"./ai-artifact-card-group-BVYeSdtP.js";function s(n){const t={code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:l}),`
`,e.jsx(r,{}),`
`,e.jsx(t.p,{children:`The AI Artifact Card component displays a compact, clickable card representing an artifact an agent produced — a
query result, a report, a generated document. Activating it emits an event; the consumer decides what opens.`}),`
`,e.jsx(t.p,{children:`The component is presentational. It holds no knowledge of what the artifact is, where it lives, or what happens
when it is opened.`}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(t.h2,{id:"features",children:"Features"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Whole-card click target"}),": the entire card is a single native button, so clicking the icon, the text, or empty space all activate it"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Truncating text"}),": both lines truncate to a single line rather than wrapping or growing the card"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Trailing action glyph"}),": a built-in, decorative arrow signals that the card opens something; it hides on the active card, which is already open. Slot an ",e.jsx(t.code,{children:"action-icon"})," to replace it with a glyph that stays visible while active"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Groups"}),": for several results at once, place cards in a ",e.jsx(t.code,{children:"forge-ai-artifact-card-group"}),", which lists them as rows and collapses the extras"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Active state"}),": renders a ring when the artifact is the one currently being viewed"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Default icons"}),": a generic artifact glyph renders until you slot your own, so a card is never blank"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Themeable accent"}),": one custom property colors the active border and ring"]}),`
`]}),`
`,e.jsx(t.h2,{id:"active-state",children:"Active state"}),`
`,e.jsxs(t.p,{children:["The card does not decide when it is active — the consumer sets the ",e.jsx(t.code,{children:"active"}),` attribute. This keeps the component
usable whether selection state lives in a store, a router, or nowhere at all. An active card takes the accent
color on its border and outer ring, and its arrow hides, since there is nothing left to open.`]}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(t.h2,{id:"collapsing-on-a-second-activation",children:"Collapsing on a second activation"}),`
`,e.jsxs(t.p,{children:["The card keeps emitting ",e.jsx(t.code,{children:"forge-ai-artifact-card-open"}),` while active, so a consumer can treat a second activation as
"collapse" (for example, closing a canvas the card opened). When you do, set `,e.jsx(t.code,{children:"action-label"}),` so assistive technology
hears what activation now does, and slot an `,e.jsx(t.code,{children:"action-icon"})," that stays visible while active in place of the arrow."]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(t.h2,{id:"distinguishing-card-types",children:"Distinguishing card types"}),`
`,e.jsx(t.p,{children:`Consumers commonly render more than one kind of artifact. Distinguish them with the icon and by leading the
subtitle with the type ("Report · 4 charts", "Table · 1,284 rows") — the icon is decorative, so the subtitle is the
only place the type reaches screen reader users:`}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(c,{}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["The whole card is a single ",e.jsx(t.code,{children:"<button>"}),", so its accessible name is composed from its text content; ",e.jsx(t.code,{children:"action-label"}),`
appends to that name when activation does something other than open`]}),`
`,e.jsxs(t.li,{children:["The icon and action glyph are decorative and marked ",e.jsx(t.code,{children:'aria-hidden="true"'})]}),`
`,e.jsxs(t.li,{children:["The active card sets ",e.jsx(t.code,{children:'aria-current="true"'}),` on its button, so the state is announced; visually it is carried by the
added outer ring as well as the border color`]}),`
`,e.jsx(t.li,{children:`Keyboard activation via Enter and Space comes from the native button; focus shows the Forge focus indicator on
keyboard focus only, not on mouse click`}),`
`,e.jsx(t.li,{children:`The card does not animate on mount, so consumers rendering a list of them do not replay motion on unrelated
state changes`}),`
`]})]})}function W(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{W as default};

import{j as e,M as r,C as a,A as l}from"./blocks-_r1VZqHQ.js";import{useMDXComponents as o}from"./index-CEBJtnDg.js";import{A as t,D as h}from"./AiChainOfThought.stories-Bff9O2Q6.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-YR1K9nbB.js";import"./custom-element-UsVr97OX.js";import"./property-TeG6cd53.js";import"./if-defined-BLm6p3L2.js";import"./ai-reasoning-header-BjYj89hm.js";import"./ai-chat-interface-BofAN19Q.js";import"./query-assigned-nodes-DVP6uEkz.js";import"./class-map-Bc7VVlJh.js";import"./when-CI7b_ccM.js";import"./ai-gradient-container-ClZ9prTR.js";import"./utils-DIqd7FWX.js";import"./ai-chat-header-DlkNBTRn.js";import"./query-kCt_tcOn.js";import"./ref-C4o9BLd-.js";import"./ai-icon-BQpN0Qp3.js";import"./tooltip-thuJaIBl.js";import"./overlay-BkMEagT3.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-dropdown-menu-Cpx0kE0u.js";import"./query-assigned-elements-DztZbeoC.js";import"./popover-ui6GyO-A.js";import"./ai-dropdown-menu-item-DYk20N5R.js";import"./ai-modal-D_cSsacw.js";import"./ai-agent-info-p2sWSHSZ.js";import"./ai-agent-selector-Bp7G8Sjn.js";import"./ai-prompt-JkwKCKYy.js";import"./ai-spinner-CgeeyoCF.js";import"./ai-voice-input-DQ05JyCO.js";import"./ai-user-message-Cweo3p3k.js";import"./ai-user-message-toolbar-OUW0WJ6E.js";import"./ai-response-message-C4SAsAng.js";import"./scaffold-wgtwiG0z.js";import"./split-button-BWf__aEW.js";import"./provide-Bxw6gKTd.js";import"./consume-D3B5J4hk.js";import"./index-H_JxQx0l.js";import"./index-B9P6L7V6.js";import"./index-C5rL3-Rx.js";function s(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:t}),`
`,e.jsx(i.h1,{id:"ai-chain-of-thought",children:"AI Chain of Thought"}),`
`,e.jsxs(i.p,{children:["A structured container for displaying AI reasoning processes with expandable content. Uses ",e.jsx(i.code,{children:"forge-ai-reasoning-header"})," and contains specialized utility components for different types of thought processes."]}),`
`,e.jsx(i.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<forge-ai-chain-of-thought>
  <forge-ai-reasoning-header slot="heading">
    <span slot="title">This is the default title</span>
    <span slot="reasoning-title">Thinking...</span>
  </forge-ai-reasoning-header>

  <forge-ai-thought-search-result .sources="\${sources}">
    <span slot="title">Searching for information</span>
    Found 3 relevant articles about the topic.
  </forge-ai-thought-search-result>

  <forge-ai-thought-image>
    <span slot="title">Analyzing image</span>
    <img src="image.jpg" slot="image" />
  </forge-ai-thought-image>

  <forge-ai-thought-detail>
    <span slot="title">Final assessment</span>
    Based on the analysis, here's my conclusion...
  </forge-ai-thought-detail>
</forge-ai-chain-of-thought>
`})}),`
`,e.jsx(i.h2,{id:"utility-components",children:"Utility Components"}),`
`,e.jsxs(i.h3,{id:"search-results-forge-ai-thought-search-result",children:["Search Results (",e.jsx(i.code,{children:"forge-ai-thought-search-result"}),")"]}),`
`,e.jsx(i.p,{children:"Displays search results with clickable source links."}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"sources"})," property: Array of ",e.jsx(i.code,{children:"{title, href}"})," objects"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"title"})," slot: Description of the search"]}),`
`]}),`
`,e.jsxs(i.h3,{id:"image-analysis-forge-ai-thought-image",children:["Image Analysis (",e.jsx(i.code,{children:"forge-ai-thought-image"}),")"]}),`
`,e.jsx(i.p,{children:"Shows image analysis with the analyzed image."}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"image"})," slot: The image being analyzed"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"title"})," slot: Description of the analysis"]}),`
`]}),`
`,e.jsxs(i.h3,{id:"detail-assessment-forge-ai-thought-detail",children:["Detail Assessment (",e.jsx(i.code,{children:"forge-ai-thought-detail"}),")"]}),`
`,e.jsx(i.p,{children:"General-purpose component for text-based reasoning steps."}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"title"})," slot: Step description"]}),`
`,e.jsx(i.li,{children:"Default slot: Reasoning content"}),`
`]}),`
`,e.jsx(i.h2,{id:"key-points",children:"Key Points"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Expandable container"}),": Uses reasoning header for toggle functionality"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Specialized components"}),": Different utility components for different reasoning types"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Structured thinking"}),": Organizes AI reasoning into clear, visual steps"]}),`
`]}),`
`,e.jsx(i.h2,{id:"demo",children:"Demo"}),`
`,e.jsx(a,{of:h}),`
`,e.jsx(i.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(l,{of:t})]})}function Z(n={}){const{wrapper:i}={...o(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{Z as default};

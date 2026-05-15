import{j as e,M as r,C as a,A as l}from"./blocks-D4Qh0Zcf.js";import{useMDXComponents as o}from"./index-UBbnVz-Q.js";import{A as s,D as h}from"./AiChainOfThought.stories-B_5TQpSn.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C4mdDn9Y.js";import"./custom-element-UsVr97OX.js";import"./property-NzPqMbXC.js";import"./if-defined-DJ5LmFOo.js";import"./ai-reasoning-header-LSK4s8Ko.js";import"./ai-chat-interface-A3waB8hB.js";import"./query-assigned-nodes-Dh8cSk_H.js";import"./base-DHNLVSaA.js";import"./when-CI7b_ccM.js";import"./ai-gradient-container-CZ3a0no8.js";import"./utils-BGBq21po.js";import"./ai-chat-header-DqNLOugn.js";import"./ref-CyiPM2l-.js";import"./class-map-CcQbpdgR.js";import"./ai-icon-CEwlG43J.js";import"./tooltip-bdkyhvIv.js";import"./overlay-gu5xjfW6.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-dropdown-menu-GtgczIyb.js";import"./query-assigned-elements-BiD3bhpw.js";import"./popover-Itcoq9px.js";import"./ai-dropdown-menu-item-FQEu0p5x.js";import"./ai-modal-BVvEXfJ5.js";import"./ai-agent-info-DjTggdWM.js";import"./ai-agent-selector-B2QF39wk.js";import"./ai-prompt-1UcuVey0.js";import"./ai-voice-input-D1uR9vMi.js";import"./ai-user-message-CwHEQlF7.js";import"./ai-user-message-toolbar-C7dxAteZ.js";import"./ai-response-message-P27eyLSE.js";import"./split-button-CbMXHDu8.js";import"./index-C3Fsn9H4.js";import"./index-CrS07Rnv.js";import"./index-B3CQufRl.js";function t(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:s}),`
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
`,e.jsx(l,{of:s})]})}function Q(n={}){const{wrapper:i}={...o(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(t,{...n})}):t(n)}export{Q as default};

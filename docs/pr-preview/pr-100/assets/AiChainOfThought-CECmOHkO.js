import{j as e,M as r,C as a,A as l}from"./blocks-ZZkA_lAe.js";import{useMDXComponents as o}from"./index-5klHlCGH.js";import{A as t,D as h}from"./AiChainOfThought.stories-D9FcSyDS.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-d1QanYZZ.js";import"./custom-element-UsVr97OX.js";import"./property-Bv8AywkK.js";import"./if-defined-XXZ5nTor.js";import"./ai-reasoning-header-CC78XSdb.js";import"./ai-chat-interface-ckiL2sMs.js";import"./query-assigned-nodes-BscC51yq.js";import"./class-map-BCd6fXy0.js";import"./when-CI7b_ccM.js";import"./ai-gradient-container-Be14wB0V.js";import"./utils-DIqd7FWX.js";import"./ai-chat-header-BJ8GqQmn.js";import"./query-Dj9Gy6GR.js";import"./ref-BNaYlydZ.js";import"./ai-icon-D7jf8qNX.js";import"./tooltip-Dlyf_6N4.js";import"./overlay-D9ZPfswH.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-dropdown-menu-1Hqd3X6m.js";import"./query-assigned-elements-B8sE8lrR.js";import"./popover-CYaiPqAr.js";import"./ai-dropdown-menu-item-BhEqi4ZA.js";import"./ai-modal-Bg7PD0fW.js";import"./ai-agent-info-CaV-nC98.js";import"./ai-agent-selector-CjOUA-d-.js";import"./ai-prompt-BwvIlho5.js";import"./ai-spinner-CJAAM4Ji.js";import"./ai-voice-input-7jL0bDij.js";import"./ai-user-message-DA2FC_8u.js";import"./ai-user-message-toolbar-kawvQKl3.js";import"./ai-response-message-B2ibHXWL.js";import"./scaffold-B605ehel.js";import"./split-button-Tas106WT.js";import"./provide-Bxw6gKTd.js";import"./consume-D3B5J4hk.js";import"./index-ffDOXgz3.js";import"./index-BGnFH1ZS.js";import"./index-rTDmOv1F.js";function s(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:t}),`
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

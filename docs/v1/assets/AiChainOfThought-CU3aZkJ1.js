import{j as e,M as r,C as a,A as l}from"./blocks-C15-5IGX.js";import{useMDXComponents as o}from"./index-hhk2QyF-.js";import{A as s,D as h}from"./AiChainOfThought.stories-oOTfq6rr.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-R5aeJAG_.js";import"./custom-element-C028faeO.js";import"./property-BE9ALp2j.js";import"./ai-dropdown-menu-DBYc-sqt.js";import"./state-DPxf7iiG.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";import"./class-map-B1XeAIIk.js";import"./utils-BGBq21po.js";import"./popover-DDyYqJ2A.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./when-3fO0zp9C.js";import"./ai-reasoning-header-BqUe-Oi4.js";import"./ai-chat-interface-cou_-AAO.js";import"./ai-chat-header-BvAtqDd2.js";import"./ai-icon-DHwM4SYS.js";import"./ai-gradient-container-DFDrFbVe.js";import"./ai-empty-state-CBIvmDpB.js";import"./ai-prompt-4Or2vG6u.js";import"./ai-voice-input-eSl_ajip.js";import"./ai-user-message-CkN920Mm.js";import"./ai-response-message-qaQsOOvW.js";import"./ai-actions-toolbar-DcGz7pb0.js";import"./icon-registry-CEncZHzj.js";import"./constants-gdUIRxM-.js";import"./tslib.es6-B3DjoPPp.js";import"./index-B7qZtIAl.js";import"./icon-C-C4Y5sw.js";import"./index-CLk6LiLh.js";import"./index-Cz5DcK3e.js";import"./focus-indicator-DZLeAcnt.js";function t(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:s}),`
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
`,e.jsx(l,{of:s})]})}function q(n={}){const{wrapper:i}={...o(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(t,{...n})}):t(n)}export{q as default};

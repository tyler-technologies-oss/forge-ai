import{j as e,M as r,C as a,A as l}from"./blocks-50h-8P5Y.js";import{useMDXComponents as o}from"./index-BLMdZ0GP.js";import{A as t,D as h}from"./AiChainOfThought.stories-Cumm8qDd.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BhT7icML.js";import"./custom-element-UsVr97OX.js";import"./property-CzNtAJFg.js";import"./if-defined-D7X9AwsH.js";import"./base-DVmwUFg0.js";import"./ai-reasoning-header-BFSDuC-k.js";import"./ai-chat-interface-DL1Prrnn.js";import"./when-CI7b_ccM.js";import"./ai-gradient-container-BAInoI47.js";import"./utils-BGBq21po.js";import"./ai-chat-header-CRkx08o0.js";import"./ref-BqUbGh4-.js";import"./class-map-BrZa2zwg.js";import"./ai-icon-Bmgs9TfV.js";import"./tooltip-BZn-wL07.js";import"./state-Cxue3I3l.js";import"./query-BpjciUlk.js";import"./overlay-BAZ1GyeC.js";import"./ai-dropdown-menu-BrY543k1.js";import"./query-assigned-elements-lTLKWxFL.js";import"./popover-BoLCd-1N.js";import"./ai-modal-Be_tuVNq.js";import"./ai-agent-info-BDjGy-LM.js";import"./ai-prompt-CehxtmSE.js";import"./ai-voice-input-wiUbu2sI.js";import"./ai-user-message-1DcjgWIr.js";import"./ai-response-message-8XpzMy9w.js";import"./ai-actions-toolbar-DOf5aR5j.js";import"./icon-registry-D8cCWsde.js";import"./constants-Co83GciG.js";import"./service-adapter-CgOYZRmu.js";import"./index-DhI3e-uN.js";import"./icon-C7wAojRd.js";import"./index-_VB0vlGF.js";import"./index-CW8yr7p-.js";import"./focus-indicator-CnNzQs5Y.js";function s(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:t}),`
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
`,e.jsx(l,{of:t})]})}function W(n={}){const{wrapper:i}={...o(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{W as default};

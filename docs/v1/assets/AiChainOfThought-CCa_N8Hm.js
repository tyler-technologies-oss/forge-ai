import{j as e,M as r,C as a,A as l}from"./blocks-xH1XVAmI.js";import{useMDXComponents as o}from"./index-E3Ac1ZQs.js";import{A as t,D as h}from"./AiChainOfThought.stories-DL7Y6W0u.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Ctu7MqZS.js";import"./custom-element-UsVr97OX.js";import"./property-C1S2koan.js";import"./if-defined-BUqpzADw.js";import"./ai-reasoning-header-BE-es0qO.js";import"./ai-chat-interface-Ba_-oCwi.js";import"./query-assigned-nodes-GumPD3vw.js";import"./class-map-x_nhB4Nh.js";import"./when-CI7b_ccM.js";import"./ai-gradient-container-Bpmv-brO.js";import"./utils-DIqd7FWX.js";import"./ai-chat-header-BhSxb0Ml.js";import"./query-CMxN5YBf.js";import"./ref-CwfoRA4T.js";import"./ai-icon-CjpCxWRq.js";import"./tooltip-I8vV3yCu.js";import"./overlay-DIzt5UNo.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-dropdown-menu-BBtRQlXe.js";import"./query-assigned-elements-DIJrWjmO.js";import"./popover-BdkOeVj4.js";import"./ai-dropdown-menu-item-BxBJjP5L.js";import"./ai-modal-BdfyX2-K.js";import"./ai-agent-info-eddhTFkH.js";import"./ai-agent-selector-BQVAMhbq.js";import"./ai-prompt-BVaeO_Fm.js";import"./ai-spinner-Q9JGlnvT.js";import"./ai-voice-input-BOu7IbMs.js";import"./ai-user-message-lKk3VqWS.js";import"./ai-user-message-toolbar-DggHEJbN.js";import"./ai-response-message-B9Ttu1z5.js";import"./scaffold-BQGTp6Zt.js";import"./split-button-BPmHgIto.js";import"./index-OiKixzFG.js";import"./index-C_JqGh_p.js";import"./index-DTxDEqU3.js";function s(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:t}),`
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

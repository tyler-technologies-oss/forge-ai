import{j as e,M as r,C as a,A as l}from"./blocks-DP6pT7oX.js";import{useMDXComponents as o}from"./index-DnLa8hOl.js";import{A as t,D as h}from"./AiChainOfThought.stories-B_7ijt49.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DWqIu4Sk.js";import"./custom-element-UsVr97OX.js";import"./property-8r5sPkjn.js";import"./if-defined-CeA9NAxq.js";import"./ai-reasoning-header-DLK9Pjrt.js";import"./ai-chat-interface-BOYnY76Q.js";import"./query-assigned-nodes-Jpc1afho.js";import"./class-map-Bn7GXKR1.js";import"./when-CI7b_ccM.js";import"./ai-gradient-container-DM9EbWu2.js";import"./utils-DIqd7FWX.js";import"./ai-chat-header-Dw7_s8gr.js";import"./query-C7e3t810.js";import"./ref-CKPrdJ8B.js";import"./ai-icon-BFB7yN99.js";import"./tooltip-tIIm-Jz0.js";import"./overlay-DYR0TT5v.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-dropdown-menu-JfjEL4ti.js";import"./query-assigned-elements-CfAGXkfV.js";import"./popover-CiBfzVB5.js";import"./ai-dropdown-menu-item-BOG8tHTy.js";import"./ai-modal-BrqCFTCC.js";import"./ai-agent-info-D9JHmV9h.js";import"./ai-agent-selector-CQea-nlu.js";import"./ai-prompt-B8AEUb25.js";import"./ai-spinner-DIBYBhNv.js";import"./ai-voice-input-Ddgh_uJJ.js";import"./ai-user-message-TPP9mT4a.js";import"./ai-user-message-toolbar-D-Sh728Q.js";import"./ai-response-message-sCoqKEpS.js";import"./scaffold-LfuSH1dB.js";import"./split-button-B9yKWlWu.js";import"./index-BA7HUog9.js";import"./index-Dd7wtRGO.js";import"./index-BFbjRguE.js";function s(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:t}),`
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

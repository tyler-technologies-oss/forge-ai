import{j as e,M as r,C as a,A as l}from"./blocks-D-jryxvQ.js";import{useMDXComponents as o}from"./index-bHPF_ebq.js";import{A as t,D as h}from"./AiChainOfThought.stories-DFAOwb1Y.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-D1C_cP03.js";import"./custom-element-UsVr97OX.js";import"./property-B5TE8D88.js";import"./if-defined-DinREpVu.js";import"./ai-reasoning-header-Cb_KHNZ1.js";import"./ai-chat-interface-D0Y6dX6r.js";import"./query-assigned-nodes-ohtQ9uWz.js";import"./class-map-BLwfprfL.js";import"./when-CI7b_ccM.js";import"./ai-gradient-container-DtNDA3f0.js";import"./utils-DIqd7FWX.js";import"./ai-chat-header-C9cb3gQL.js";import"./state-BoHpUCf1.js";import"./ref-Dfxh5cwS.js";import"./ai-icon-E7TzI64B.js";import"./tooltip-CjjDjoDh.js";import"./query-C-MXZcjm.js";import"./overlay-BnE7Ix3l.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-dropdown-menu-DXKp5FHY.js";import"./query-assigned-elements-DsU4Psob.js";import"./popover-vlx_ZVL3.js";import"./ai-dropdown-menu-item-0_htBfo1.js";import"./ai-modal-8QPUUvBa.js";import"./ai-agent-info-Bd6D8ZlE.js";import"./ai-agent-selector-tVBE9mvb.js";import"./ai-prompt-CDlWM2uc.js";import"./ai-spinner-BtN_mFEK.js";import"./ai-voice-input-wWRHhVKV.js";import"./ai-user-message-B-xZJx_j.js";import"./ai-user-message-toolbar-BTo7Oe5f.js";import"./ai-response-message-GKn1voQr.js";import"./scaffold-BEDpyqbp.js";import"./split-button-DOO6F2CZ.js";import"./index-D6TWnY4E.js";import"./index-RmvVGaVn.js";import"./index-B6JWIPjY.js";function s(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:t}),`
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
`,e.jsx(l,{of:t})]})}function Y(n={}){const{wrapper:i}={...o(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{Y as default};

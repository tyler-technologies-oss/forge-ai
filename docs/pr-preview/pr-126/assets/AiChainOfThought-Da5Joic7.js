import{j as e,M as r,C as a,A as l}from"./blocks-DhUXg9HW.js";import{useMDXComponents as o}from"./index-B0SnqID0.js";import{A as t,D as h}from"./AiChainOfThought.stories-BSgAzq9A.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C2YwnM95.js";import"./custom-element-UsVr97OX.js";import"./property-CUb56LFm.js";import"./if-defined-BqkigIDL.js";import"./ai-reasoning-header-D_pjRdKS.js";import"./ai-chat-interface-BdDvK1Yc.js";import"./query-assigned-nodes-_QuSYtmZ.js";import"./class-map-Ce4dixUc.js";import"./when-CI7b_ccM.js";import"./ai-gradient-container-BVXV9soj.js";import"./utils-DIqd7FWX.js";import"./ai-chat-header-DKNKEYo3.js";import"./query-Bxcoi7Jv.js";import"./ref-BlH8x4pi.js";import"./ai-icon-C_uNfRHH.js";import"./tooltip-Dj9YZSCf.js";import"./overlay-CdzhujMn.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-dropdown-menu-BWrNIyBp.js";import"./query-assigned-elements-8Vg8EN4R.js";import"./popover-DkHhfRUm.js";import"./ai-dropdown-menu-item-Ce_meJAt.js";import"./ai-modal-D07MoOOr.js";import"./ai-agent-info-7DgybjZd.js";import"./ai-agent-selector-C0D1RO8i.js";import"./ai-prompt-GTSm7ov6.js";import"./ai-spinner-ChmlvqO_.js";import"./ai-voice-input-C6pmZ8qw.js";import"./ai-user-message-SJtbk_hr.js";import"./ai-user-message-toolbar-DBPsumdq.js";import"./ai-response-message-DRMUfkBi.js";import"./scaffold-DIEoiKJk.js";import"./style-map-D53q35gi.js";import"./context-consumer-CIN_xSLl.js";import"./split-button-BZFNyX6F.js";import"./index-DkNSMgIS.js";import"./index-C-JvrZMS.js";import"./index-Bn-Tk8_D.js";function s(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:t}),`
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

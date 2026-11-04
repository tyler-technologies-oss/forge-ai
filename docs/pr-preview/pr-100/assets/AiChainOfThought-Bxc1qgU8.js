import{j as e,M as r,C as a,A as l}from"./blocks-Cw4qwG11.js";import{useMDXComponents as o}from"./index-b0gRJ5Z4.js";import{A as t,D as h}from"./AiChainOfThought.stories-DJCzhVdB.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-KGJDsxB0.js";import"./custom-element-UsVr97OX.js";import"./property-DNEaXqo9.js";import"./if-defined-X1CVUfgS.js";import"./ai-reasoning-header-3uqbs-PU.js";import"./ai-chat-interface-EUQ_naCi.js";import"./query-assigned-nodes-AePoqt1W.js";import"./class-map-CWt6gxkh.js";import"./when-CI7b_ccM.js";import"./ai-gradient-container-BZKYNfxK.js";import"./utils-DIqd7FWX.js";import"./ai-chat-header-FHOIZmEu.js";import"./query-Dc_gICXE.js";import"./ref-B3abCnr6.js";import"./ai-icon-Cynh0Ul0.js";import"./tooltip-0t-tRitu.js";import"./overlay-QVYEApzp.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-dropdown-menu-BtUIY3oh.js";import"./query-assigned-elements-F0ABw4lw.js";import"./popover-CenIWkrz.js";import"./ai-dropdown-menu-item-UpBUTyyW.js";import"./ai-modal-BBHZoAhX.js";import"./ai-agent-info-ekk1GiKP.js";import"./ai-agent-selector-B6wGAGr3.js";import"./ai-prompt-DUCnkW8e.js";import"./ai-spinner-DcYtbmsx.js";import"./ai-voice-input-DYB9wZi3.js";import"./ai-user-message-UYbSdrMw.js";import"./ai-user-message-toolbar-DUF9zWNA.js";import"./ai-response-message-Bzcq_NSP.js";import"./scaffold-CxCS8yu8.js";import"./style-map-CTiE4Bkx.js";import"./split-button-IWm_dJjC.js";import"./provide-RUGHcQ60.js";import"./consume-BHVW6YKk.js";import"./index-BupHeEnL.js";import"./index-CnMgbpZr.js";import"./index-DuATFjAv.js";function s(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:t}),`
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
`,e.jsx(l,{of:t})]})}function ee(n={}){const{wrapper:i}={...o(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{ee as default};

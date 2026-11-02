import{j as e,M as r,C as a,A as l}from"./blocks-CZ9vKyMd.js";import{useMDXComponents as o}from"./index-BJLdi77e.js";import{A as t,D as h}from"./AiChainOfThought.stories-u3_RxCo2.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-6kL-IEjw.js";import"./custom-element-UsVr97OX.js";import"./property-CTHAvR0w.js";import"./if-defined-CqU5aBrc.js";import"./ai-reasoning-header-DAYF6oJk.js";import"./ai-chat-interface-Bp-RCm35.js";import"./query-assigned-nodes-x9aXSWKP.js";import"./class-map-D282mUzC.js";import"./when-CI7b_ccM.js";import"./ai-gradient-container-B8CKpKLl.js";import"./utils-DIqd7FWX.js";import"./ai-chat-header-BT5RU5Pl.js";import"./query-DMg1xcuy.js";import"./ref-Db_w97ye.js";import"./ai-icon-ddETNDkH.js";import"./tooltip-DKUGi-Mr.js";import"./overlay-Cf_UeqF6.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-dropdown-menu-DY4JbB1J.js";import"./query-assigned-elements-BZJs2gnL.js";import"./popover-CszWHH8v.js";import"./ai-dropdown-menu-item-Cjz3DErM.js";import"./ai-modal-BN2mh5s_.js";import"./ai-agent-info-mkgu2QxB.js";import"./ai-agent-selector-r245yho5.js";import"./ai-prompt-CO-xPkM9.js";import"./ai-spinner-CUToco1W.js";import"./ai-voice-input-BQeeMS_j.js";import"./ai-user-message-CyjjIxDB.js";import"./ai-user-message-toolbar-BJ-QJz-U.js";import"./ai-response-message-DJiHwOPu.js";import"./scaffold-BkMw2-yW.js";import"./style-map-pmxdEpBw.js";import"./split-button-CG3DleA7.js";import"./provide-RUGHcQ60.js";import"./consume-BHVW6YKk.js";import"./index-yjj3n-sk.js";import"./index-DikvBPYb.js";import"./index-C6vmAx9N.js";function s(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:t}),`
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

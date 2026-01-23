import{j as n,M as r,T as s,C as a}from"./blocks-BqEpNEuH.js";import{useMDXComponents as i}from"./index-B83m4e5R.js";import{C as p}from"./CustomArgTypes-Bp8En4Yr.js";import{A as c,D as d}from"./AiReasoning.stories-DIfvzXzM.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BFO7QacJ.js";import"./custom-element-UsVr97OX.js";import"./property-CGSgnwNH.js";import"./base-CFUbOJr1.js";import"./ai-reasoning-header-DB0aPt6d.js";import"./ai-gradient-container-DqtqC40a.js";import"./utils-BGBq21po.js";import"./ai-chat-interface-CAkdmob1.js";import"./ai-dropdown-menu-item-DAGK3F7N.js";import"./query-assigned-elements-DWqh8e4r.js";import"./class-map-Z5cfhCgN.js";import"./when-CI7b_ccM.js";import"./ai-chat-header-DAFfaGZi.js";import"./ref-CI5zG1GD.js";import"./ai-icon-BVOjiUW1.js";import"./tooltip-D6veFXsF.js";import"./overlay-C6V0q44g.js";import"./ai-dropdown-menu-Bkw8dmIb.js";import"./if-defined-o6mMk28u.js";import"./popover-KHTuWxKK.js";import"./ai-modal-BTVfmkmw.js";import"./ai-agent-info-C5BZwRIL.js";import"./ai-agent-selector-6b7aZBKM.js";function t(o){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:c}),`
`,n.jsx(s,{}),`
`,n.jsxs(e.p,{children:["A container for displaying AI reasoning processes with streaming content. Designed to be composed with ",n.jsx(e.code,{children:"forge-ai-reasoning-header"})," and multiple ",n.jsx(e.code,{children:"forge-ai-reasoning-content"})," components that are added dynamically as reasoning steps stream in."]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<forge-ai-reasoning expanded="false">
  <forge-ai-reasoning-header slot="header" expanded="false" reasoning="true">
    <span slot="reasoning-title">Thinking...</span>
    <span slot="title">AI Reasoning Process</span>
  </forge-ai-reasoning-header>

  <!-- Add multiple content components as steps stream in -->
  <forge-ai-reasoning-content>Step 1: Analyzing the problem...</forge-ai-reasoning-content>
  <forge-ai-reasoning-content>Step 2: Considering approaches...</forge-ai-reasoning-content>
  <forge-ai-reasoning-content>Step 3: Recommending solution...</forge-ai-reasoning-content>
</forge-ai-reasoning>
`})}),`
`,n.jsx(e.h2,{id:"streaming-pattern",children:"Streaming Pattern"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const container = document.querySelector('forge-ai-reasoning');

function addStep(text) {
  const step = document.createElement('forge-ai-reasoning-content');
  step.textContent = text;
  container.appendChild(step);
}
`})}),`
`,n.jsx(e.h2,{id:"key-points",children:"Key Points"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Streaming design"}),": Add ",n.jsx(e.code,{children:"forge-ai-reasoning-content"})," components dynamically as AI reasoning steps arrive"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Required header"}),": Must use ",n.jsx(e.code,{children:"forge-ai-reasoning-header"})," in the header slot"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"One step per component"}),": Each reasoning step gets its own content component with typing animation"]}),`
`]}),`
`,n.jsx(e.h2,{id:"demo",children:"Demo"}),`
`,n.jsx(a,{of:d}),`
`,n.jsx(e.h2,{id:"api",children:"API"}),`
`,n.jsx(p,{})]})}function K(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{K as default};

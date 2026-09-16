import{j as n,M as r,T as s,C as a}from"./blocks-vOiI5GA6.js";import{useMDXComponents as i}from"./index-Bm15BpDG.js";import{C as p}from"./CustomArgTypes-Brwl6deo.js";import{A as c,D as d}from"./AiReasoning.stories-7fOQiGYk.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-ydZZx2Al.js";import"./utils-C_gyOGXX.js";import"./custom-element-UsVr97OX.js";import"./property-CSCZ_azm.js";import"./query-Bxqq8xGT.js";import"./class-map-v9TTytzC.js";import"./ai-reasoning-header-CPLQdnu8.js";import"./ai-gradient-container-Dah6ZNA0.js";import"./utils-DIqd7FWX.js";import"./ai-chat-interface-D3gGXRRG.js";import"./query-assigned-nodes-xBx2YEAg.js";import"./when-CI7b_ccM.js";import"./ai-chat-header-odoyr2J1.js";import"./ref-YF_tRavm.js";import"./ai-icon-DPSOXxXF.js";import"./tooltip-0d9wS-QW.js";import"./overlay-ByZpy-Nk.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-dropdown-menu-2a6xNYJn.js";import"./query-assigned-elements-iiiwlt0r.js";import"./if-defined-OmlLV3ve.js";import"./popover-D4KxKRm1.js";import"./ai-dropdown-menu-item-BPxqBaVh.js";import"./ai-modal-ds6UJU6W.js";import"./ai-agent-info-BZrQcRnK.js";import"./ai-agent-selector-CNrFGXDa.js";function t(o){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:c}),`
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
`,n.jsx(p,{})]})}function U(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{U as default};

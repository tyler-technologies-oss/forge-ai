import{j as n,M as r,T as s,C as a}from"./blocks-khrG5HiV.js";import{useMDXComponents as i}from"./index-Dt5AVAWD.js";import{C as c}from"./CustomArgTypes-Bgg2eY3W.js";import{A as p,D as d}from"./AiReasoning.stories-Ct_muuDS.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-dgZ-nBwM.js";import"./custom-element-UsVr97OX.js";import"./property-BZZUByg2.js";import"./base-D7HsqePj.js";import"./ai-reasoning-header-DmzlzbIh.js";import"./ai-gradient-container-BaY7bbCl.js";import"./utils-BGBq21po.js";import"./ai-chat-interface-C-RR454p.js";import"./ai-dropdown-menu-item-__I01P1N.js";import"./query-assigned-elements-JBlzPtbd.js";import"./class-map-DsLoCMMq.js";import"./when-CI7b_ccM.js";import"./ai-chat-header-W-DhCcJj.js";import"./ref-CUB877wA.js";import"./ai-icon-GzldnmEj.js";import"./tooltip-D4fesZ0c.js";import"./overlay-3r8LozlA.js";import"./ai-dropdown-menu-H6Cxfifr.js";import"./if-defined-Cp6CVYbP.js";import"./popover-mxIhRs1L.js";import"./ai-modal-D2ymMAUU.js";import"./ai-agent-info-prtEovBs.js";function t(o){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:p}),`
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
`,n.jsx(c,{})]})}function F(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{F as default};

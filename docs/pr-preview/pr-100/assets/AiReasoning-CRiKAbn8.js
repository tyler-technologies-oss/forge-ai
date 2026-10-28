import{j as n,M as r,T as s,C as a}from"./blocks-lvBG2Ofd.js";import{useMDXComponents as i}from"./index-Dqouuy3Z.js";import{C as p}from"./CustomArgTypes-D4iUauBl.js";import{A as c,D as d}from"./AiReasoning.stories-BIbNGR6L.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C-GjP80M.js";import"./utils-DFiK_7l2.js";import"./custom-element-UsVr97OX.js";import"./property-DRAyekPU.js";import"./query-SpUrvd8t.js";import"./class-map-K0ceeZBW.js";import"./ai-reasoning-header-PhQKZir7.js";import"./ai-gradient-container-CFtDibPH.js";import"./utils-DIqd7FWX.js";import"./ai-chat-interface-CR66x_m2.js";import"./query-assigned-nodes-B0Pb7y7I.js";import"./when-CI7b_ccM.js";import"./ai-chat-header-D6i8YEFp.js";import"./ref-BMRKwFxn.js";import"./ai-icon-DtP-iWHW.js";import"./tooltip-DV93RwhU.js";import"./overlay-C5QCbZ9V.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-dropdown-menu-Bkq9_uHP.js";import"./query-assigned-elements-D5wrDzSA.js";import"./if-defined-RC-UoAop.js";import"./popover-D-1rA7kd.js";import"./ai-dropdown-menu-item-BS8BkNb2.js";import"./ai-modal-Cf_UyUtK.js";import"./ai-agent-info-Dax0K9bf.js";import"./ai-agent-selector-EwB_uK2w.js";function t(o){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:c}),`
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

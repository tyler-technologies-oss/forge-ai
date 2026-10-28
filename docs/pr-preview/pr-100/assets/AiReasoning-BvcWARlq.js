import{j as n,M as r,T as s,C as a}from"./blocks-BMq_-Ydb.js";import{useMDXComponents as i}from"./index-Db33oXfe.js";import{C as p}from"./CustomArgTypes-CSxF1WY7.js";import{A as c,D as d}from"./AiReasoning.stories-BrneTEid.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B3xO85yu.js";import"./utils-DFiK_7l2.js";import"./custom-element-UsVr97OX.js";import"./property-D2dUUzhA.js";import"./query-DCR03eDw.js";import"./class-map-jjxocif1.js";import"./ai-reasoning-header-CGhmILrL.js";import"./ai-gradient-container-CpOSyVge.js";import"./utils-DIqd7FWX.js";import"./ai-chat-interface-7b4w3LHw.js";import"./query-assigned-nodes-D6imQ5Dm.js";import"./when-CI7b_ccM.js";import"./ai-chat-header-DLif8hU0.js";import"./ref-CENuII8n.js";import"./ai-icon-dzZni7F9.js";import"./tooltip-BN7xokHm.js";import"./overlay-DGgKM79R.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-dropdown-menu-CmCMkh46.js";import"./query-assigned-elements-B6zK_KiS.js";import"./if-defined-BBSjWmC5.js";import"./popover-DxMFPUmL.js";import"./ai-dropdown-menu-item-Df4XBUJM.js";import"./ai-modal-NnBjKH5s.js";import"./ai-agent-info-DVjbCllq.js";import"./ai-agent-selector-DUr1_o1G.js";function t(o){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:c}),`
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

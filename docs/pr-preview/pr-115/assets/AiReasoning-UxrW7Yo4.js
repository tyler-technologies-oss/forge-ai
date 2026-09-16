import{j as n,M as r,T as s,C as a}from"./blocks-D-jryxvQ.js";import{useMDXComponents as i}from"./index-bHPF_ebq.js";import{C as p}from"./CustomArgTypes-DK9gOOsK.js";import{A as c,D as d}from"./AiReasoning.stories-DdpxkIbB.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-D1C_cP03.js";import"./utils-BQbSAUyf.js";import"./custom-element-UsVr97OX.js";import"./property-B5TE8D88.js";import"./state-BoHpUCf1.js";import"./ai-reasoning-header-Cb_KHNZ1.js";import"./ai-gradient-container-DtNDA3f0.js";import"./utils-DIqd7FWX.js";import"./ai-chat-interface-D0Y6dX6r.js";import"./query-assigned-nodes-ohtQ9uWz.js";import"./class-map-BLwfprfL.js";import"./when-CI7b_ccM.js";import"./ai-chat-header-C9cb3gQL.js";import"./ref-Dfxh5cwS.js";import"./ai-icon-E7TzI64B.js";import"./tooltip-CjjDjoDh.js";import"./query-C-MXZcjm.js";import"./overlay-BnE7Ix3l.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-dropdown-menu-DXKp5FHY.js";import"./query-assigned-elements-DsU4Psob.js";import"./if-defined-DinREpVu.js";import"./popover-vlx_ZVL3.js";import"./ai-dropdown-menu-item-0_htBfo1.js";import"./ai-modal-8QPUUvBa.js";import"./ai-agent-info-Bd6D8ZlE.js";import"./ai-agent-selector-tVBE9mvb.js";function t(o){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:c}),`
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
`,n.jsx(p,{})]})}function B(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{B as default};

import{j as n,M as r,T as s,C as a}from"./blocks-CPCM3ofs.js";import{useMDXComponents as i}from"./index-BFtuCeYY.js";import{C as p}from"./CustomArgTypes-1avp-Hiz.js";import{A as c,D as d}from"./AiReasoning.stories-BOVMGfY1.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Bbknnayn.js";import"./utils-Dc-_7Ywc.js";import"./custom-element-UsVr97OX.js";import"./property-BB9mgIZw.js";import"./query-iqmcI2VG.js";import"./class-map-DeqW9URm.js";import"./ai-reasoning-header-Banbtcg9.js";import"./ai-gradient-container-wUmhvaq6.js";import"./utils-DIqd7FWX.js";import"./ai-chat-interface-CSjJU99D.js";import"./query-assigned-nodes-Cv1DRgkF.js";import"./when-CI7b_ccM.js";import"./ai-chat-header-BOz_Kne0.js";import"./ref-y0mntcf3.js";import"./ai-icon-B2NdCMYK.js";import"./tooltip-Ce28q9yV.js";import"./overlay-thHEdP3C.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-dropdown-menu-tJCc_cRR.js";import"./query-assigned-elements-DET5aWzr.js";import"./if-defined-CiiUfixo.js";import"./popover-B28Ttg7w.js";import"./ai-dropdown-menu-item-B2Mn7xlp.js";import"./ai-modal-BGuEw6oO.js";import"./ai-agent-info-4h6CGnHZ.js";import"./ai-agent-selector-CWt7pA_I.js";function t(o){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:c}),`
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

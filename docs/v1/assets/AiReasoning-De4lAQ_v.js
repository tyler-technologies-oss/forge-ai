import{j as n,M as r,T as s,C as a}from"./blocks-Cr---B8V.js";import{useMDXComponents as i}from"./index-A_psghu6.js";import{C as c}from"./CustomArgTypes-Dk18x996.js";import{A as p,D as d}from"./AiReasoning.stories-DRz9L4O7.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BL5phHeD.js";import"./custom-element-UsVr97OX.js";import"./property-BdjiIkW6.js";import"./base-B8d6FZuD.js";import"./ai-reasoning-header-x4zm3GKz.js";import"./ai-gradient-container-r2h4OD4a.js";import"./utils-BGBq21po.js";import"./ai-chat-interface-CVbcmz7j.js";import"./ai-dropdown-menu-item-COZ8Ydsn.js";import"./query-assigned-elements-Cl_O1bRA.js";import"./class-map-COe3R8E1.js";import"./when-CI7b_ccM.js";import"./ai-chat-header-D9B4g44C.js";import"./ref-BEtLNhAL.js";import"./ai-icon-Z7Hv6b9A.js";import"./tooltip-CPC3zrks.js";import"./overlay-DlfV8xm7.js";import"./ai-dropdown-menu-Bs8SrijO.js";import"./if-defined-DZyUOKVm.js";import"./popover-ViNDPdHe.js";import"./ai-modal-COHIfd3V.js";import"./ai-agent-info-ChlNgt1B.js";function t(o){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:p}),`
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

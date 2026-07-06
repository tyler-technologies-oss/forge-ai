import{j as n,M as r,T as s,C as a}from"./blocks-B5Z80lh6.js";import{useMDXComponents as i}from"./index-BW-3ujwX.js";import{C as p}from"./CustomArgTypes-e0ruzkXP.js";import{A as c,D as d}from"./AiReasoning.stories-z5scnUOD.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-JS6wZa5t.js";import"./utils-B_iZMiSg.js";import"./custom-element-UsVr97OX.js";import"./property-CzP0hvoa.js";import"./class-map-B6Wsz2a7.js";import"./ai-reasoning-header-D3E2Dqfr.js";import"./ai-gradient-container-tW-pQav-.js";import"./utils-BGBq21po.js";import"./ai-chat-interface-HjP3Zz7l.js";import"./query-assigned-nodes-CBvrqxop.js";import"./when-CI7b_ccM.js";import"./ai-chat-header-C-PtU_yv.js";import"./ref-CMZ1GDcC.js";import"./ai-icon-CRLSxXHp.js";import"./tooltip-BR4orBkw.js";import"./overlay-DAlCbg2u.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-dropdown-menu-BrVMDBOp.js";import"./if-defined-4iJwT7ay.js";import"./popover-DLBAIfMN.js";import"./ai-dropdown-menu-item-DJcoZIHk.js";import"./ai-modal-7_as5TQd.js";import"./ai-agent-info-rXVe5M7M.js";import"./ai-agent-selector-jjubuNH5.js";function t(o){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:c}),`
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
`,n.jsx(p,{})]})}function L(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{L as default};

import{j as n,M as r,T as s,C as a}from"./blocks-DfMjir71.js";import{useMDXComponents as i}from"./index-BD4JOUuy.js";import{C as p}from"./CustomArgTypes-CeGHS1cl.js";import{A as c,D as d}from"./AiReasoning.stories-DKUeGAs0.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B25rCiek.js";import"./utils-BDManemB.js";import"./custom-element-UsVr97OX.js";import"./property-D1344F-h.js";import"./base-AYZI3H7f.js";import"./ai-reasoning-header-Dj7rTd0o.js";import"./ai-gradient-container-gLEsfhY7.js";import"./utils-BGBq21po.js";import"./ai-chat-interface-4ajp9aRd.js";import"./ai-dropdown-menu-item-BTeApNAl.js";import"./query-assigned-elements-CnfXVDp2.js";import"./class-map-DpTpkP-w.js";import"./when-CI7b_ccM.js";import"./ai-chat-header-CtZgCEta.js";import"./ref-DY3IsjLR.js";import"./ai-icon-Bkw4FpVY.js";import"./tooltip-BItLBmqE.js";import"./overlay-B8kAuYKV.js";import"./ai-dropdown-menu-D6REszE2.js";import"./if-defined-BafAh2Oo.js";import"./popover-C7QHbcGt.js";import"./ai-modal-6GnNPTVc.js";import"./ai-agent-info-BizkQuJg.js";import"./ai-agent-selector-VpYO_FYU.js";function t(o){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:c}),`
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

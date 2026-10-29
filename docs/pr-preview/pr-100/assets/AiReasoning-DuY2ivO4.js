import{j as n,M as r,T as s,C as a}from"./blocks-BYZcTz10.js";import{useMDXComponents as i}from"./index-RBU1lV0J.js";import{C as p}from"./CustomArgTypes-CINl-ndf.js";import{A as c,D as d}from"./AiReasoning.stories-kJgMRcXm.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DYSaFelY.js";import"./utils-DGoFphpS.js";import"./custom-element-UsVr97OX.js";import"./property-DkFqThWM.js";import"./query-Dp9XAxQR.js";import"./class-map-kByeKa_n.js";import"./ai-reasoning-header-DpHNGpAc.js";import"./ai-gradient-container-DJNzp8E5.js";import"./utils-DIqd7FWX.js";import"./ai-chat-interface-bMTJaJzB.js";import"./query-assigned-nodes-Ce0C7lls.js";import"./when-CI7b_ccM.js";import"./ai-chat-header-D9rliu_W.js";import"./ref-bUehiFAX.js";import"./ai-icon-Br_Z5HN7.js";import"./tooltip-BlTgUL6G.js";import"./overlay-CVsvSJBe.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-dropdown-menu-B8je-9Sd.js";import"./query-assigned-elements-Bmda_lBl.js";import"./if-defined-DH2E4TDh.js";import"./popover-Bi1s3AUw.js";import"./ai-dropdown-menu-item-Dz1JOG7x.js";import"./ai-modal-BFFKKtB6.js";import"./ai-agent-info-LDKpp5xR.js";import"./ai-agent-selector-Be1Yty9X.js";function t(o){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:c}),`
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

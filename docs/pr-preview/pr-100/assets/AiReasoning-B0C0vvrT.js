import{j as n,M as r,T as s,C as a}from"./blocks-Cw4qwG11.js";import{useMDXComponents as i}from"./index-b0gRJ5Z4.js";import{C as p}from"./CustomArgTypes-C0ravzFr.js";import{A as c,D as d}from"./AiReasoning.stories-DRwXrVYH.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-KGJDsxB0.js";import"./utils-M4WhRPVa.js";import"./custom-element-UsVr97OX.js";import"./property-DNEaXqo9.js";import"./query-Dc_gICXE.js";import"./class-map-CWt6gxkh.js";import"./ai-reasoning-header-3uqbs-PU.js";import"./ai-gradient-container-BZKYNfxK.js";import"./utils-DIqd7FWX.js";import"./ai-chat-interface-EUQ_naCi.js";import"./query-assigned-nodes-AePoqt1W.js";import"./when-CI7b_ccM.js";import"./ai-chat-header-FHOIZmEu.js";import"./ref-B3abCnr6.js";import"./ai-icon-Cynh0Ul0.js";import"./tooltip-0t-tRitu.js";import"./overlay-QVYEApzp.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-dropdown-menu-BtUIY3oh.js";import"./query-assigned-elements-F0ABw4lw.js";import"./if-defined-X1CVUfgS.js";import"./popover-CenIWkrz.js";import"./ai-dropdown-menu-item-UpBUTyyW.js";import"./ai-modal-BBHZoAhX.js";import"./ai-agent-info-ekk1GiKP.js";import"./ai-agent-selector-B6wGAGr3.js";function t(o){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:c}),`
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

import{j as n,M as r,T as s,C as a}from"./blocks-xH1XVAmI.js";import{useMDXComponents as i}from"./index-E3Ac1ZQs.js";import{C as p}from"./CustomArgTypes-qipuEUD_.js";import{A as c,D as d}from"./AiReasoning.stories-tKXxr32L.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Ctu7MqZS.js";import"./utils-B7uKMC8s.js";import"./custom-element-UsVr97OX.js";import"./property-C1S2koan.js";import"./query-CMxN5YBf.js";import"./class-map-x_nhB4Nh.js";import"./ai-reasoning-header-BE-es0qO.js";import"./ai-gradient-container-Bpmv-brO.js";import"./utils-DIqd7FWX.js";import"./ai-chat-interface-Ba_-oCwi.js";import"./query-assigned-nodes-GumPD3vw.js";import"./when-CI7b_ccM.js";import"./ai-chat-header-BhSxb0Ml.js";import"./ref-CwfoRA4T.js";import"./ai-icon-CjpCxWRq.js";import"./tooltip-I8vV3yCu.js";import"./overlay-DIzt5UNo.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-dropdown-menu-BBtRQlXe.js";import"./query-assigned-elements-DIJrWjmO.js";import"./if-defined-BUqpzADw.js";import"./popover-BdkOeVj4.js";import"./ai-dropdown-menu-item-BxBJjP5L.js";import"./ai-modal-BdfyX2-K.js";import"./ai-agent-info-eddhTFkH.js";import"./ai-agent-selector-BQVAMhbq.js";function t(o){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:c}),`
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

import{j as n,M as r,T as s,C as a}from"./blocks-BpClKaU0.js";import{useMDXComponents as i}from"./index-CDRGIbzR.js";import{C as p}from"./CustomArgTypes-C_Trkh1G.js";import{A as c,D as d}from"./AiReasoning.stories-q1lXnELJ.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B3wVpGbw.js";import"./utils-qCOiSbr7.js";import"./custom-element-UsVr97OX.js";import"./property-CiFKxx_M.js";import"./class-map-Ct52J7it.js";import"./ai-reasoning-header-CBY0_at7.js";import"./ai-gradient-container-Bc5sG72k.js";import"./utils-BGBq21po.js";import"./ai-chat-interface-CrtYVEDZ.js";import"./query-assigned-nodes-BHJ3KLGX.js";import"./when-CI7b_ccM.js";import"./ai-chat-header-D1b5yB7H.js";import"./ref-Cxpt2iWo.js";import"./ai-icon-CZqQybJb.js";import"./tooltip-B2N7lJ3N.js";import"./overlay-2dUuaf8E.js";import"./floating-ui.dom-alButkyJ.js";import"./ai-dropdown-menu-8dlhhS5S.js";import"./if-defined-AzmMqBG3.js";import"./popover-l21m8cNx.js";import"./ai-dropdown-menu-item-D0ZKZXpx.js";import"./ai-modal-CpLT7w5H.js";import"./ai-agent-info-BjKN1cQy.js";import"./ai-agent-selector-Ch_YgEp8.js";function t(o){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:c}),`
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

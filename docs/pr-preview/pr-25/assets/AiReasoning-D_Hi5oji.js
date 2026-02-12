import{j as n,M as r,T as s,C as a}from"./blocks-JrCMxPUe.js";import{useMDXComponents as i}from"./index-BxQM5f6F.js";import{C as p}from"./CustomArgTypes-DQTTJ1im.js";import{A as c,D as d}from"./AiReasoning.stories-0W8LEKxj.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CCWsMM7d.js";import"./custom-element-UsVr97OX.js";import"./property-BBKQEB1X.js";import"./base-8b12zp7J.js";import"./ai-reasoning-header-BSA_2DxZ.js";import"./ai-gradient-container-DTeYDIA3.js";import"./utils-BGBq21po.js";import"./ai-chat-interface-DnZT2ajC.js";import"./ai-dropdown-menu-item-6b9KrcIv.js";import"./query-assigned-elements-wG5JqJX0.js";import"./class-map-CmGZPI76.js";import"./when-CI7b_ccM.js";import"./ai-chat-header-Dm9seQfX.js";import"./ref-Bdh8BJ3W.js";import"./ai-icon-BBRd7_fJ.js";import"./tooltip-D4j8dW04.js";import"./overlay-DeX3q-AB.js";import"./ai-dropdown-menu-D6owgupQ.js";import"./if-defined-DErItRzL.js";import"./popover-D34ZNWT6.js";import"./ai-modal-B59zR3V8.js";import"./ai-agent-info-RGWL2qpm.js";import"./ai-agent-selector-BHwlvbkc.js";function t(o){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:c}),`
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
`,n.jsx(p,{})]})}function K(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{K as default};

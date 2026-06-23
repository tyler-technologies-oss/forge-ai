import{j as n,M as r,T as s,C as a}from"./blocks-CsD4NOsj.js";import{useMDXComponents as i}from"./index-C2umsrXa.js";import{C as p}from"./CustomArgTypes-D6uAopfQ.js";import{A as c,D as d}from"./AiReasoning.stories-rqJ3Sd3X.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-9kznCVoF.js";import"./utils-DUMfLMpS.js";import"./custom-element-UsVr97OX.js";import"./property-oAenimj3.js";import"./class-map-Dnx7h5Ue.js";import"./ai-reasoning-header--S2LXaJ7.js";import"./ai-gradient-container-D3CFeL64.js";import"./utils-BGBq21po.js";import"./ai-chat-interface-DJIPKzw1.js";import"./query-assigned-nodes-D8ZhDGjk.js";import"./when-CI7b_ccM.js";import"./ai-chat-header-DQcN_KD3.js";import"./ref-BICgGda8.js";import"./ai-icon-Dj5Qzz9s.js";import"./tooltip-WPKgaaZo.js";import"./overlay-BYCxFLi_.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-dropdown-menu-YzJbcPbT.js";import"./if-defined-Dz4WhS29.js";import"./popover-BsMAt4ba.js";import"./ai-dropdown-menu-item-BaaStevq.js";import"./ai-modal-_-mFkJ2C.js";import"./ai-agent-info-DmhVDTjR.js";import"./ai-agent-selector-CP7H6O-1.js";function t(o){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:c}),`
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

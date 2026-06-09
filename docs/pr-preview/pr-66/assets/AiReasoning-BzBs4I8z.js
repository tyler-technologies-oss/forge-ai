import{j as n,M as r,T as s,C as a}from"./blocks-CY1PUM6P.js";import{useMDXComponents as i}from"./index-CsaVJ4Z-.js";import{C as p}from"./CustomArgTypes-CAcjCc10.js";import{A as c,D as d}from"./AiReasoning.stories-CN6wJpQU.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-64sADwjS.js";import"./utils-DuP4-u8F.js";import"./custom-element-UsVr97OX.js";import"./property-B0O4WdJb.js";import"./base-kVk2_Lmd.js";import"./ai-reasoning-header-Df-g7GZl.js";import"./ai-gradient-container-Ds4ifFf0.js";import"./utils-BGBq21po.js";import"./ai-chat-interface-CBy06wry.js";import"./query-assigned-nodes-CzDxKWgN.js";import"./when-CI7b_ccM.js";import"./ai-chat-header-jwFn0pij.js";import"./ref-DVBAuqwq.js";import"./class-map-CzoAaMNW.js";import"./ai-icon-KLo0SUAk.js";import"./tooltip-HuIZ4ERa.js";import"./query-CWdzDXj9.js";import"./overlay-Dm0Nth00.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-dropdown-menu-B4H-Gg8O.js";import"./query-assigned-elements-Cyu3Uoag.js";import"./if-defined-D3UIaa_H.js";import"./popover-BB8IwKnR.js";import"./ai-dropdown-menu-item-B5f9GU5f.js";import"./ai-modal-BUugj2UK.js";import"./ai-agent-info-BjiuthYj.js";import"./ai-agent-selector-DW2ePzzv.js";function t(o){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:c}),`
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
`,n.jsx(p,{})]})}function B(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{B as default};

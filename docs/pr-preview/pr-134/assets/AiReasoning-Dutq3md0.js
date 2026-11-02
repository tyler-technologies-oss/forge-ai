import{j as n,M as r,T as s,C as a}from"./blocks-BXdAqhM4.js";import{useMDXComponents as i}from"./index-D8Wl0gln.js";import{C as p}from"./CustomArgTypes-CGwAoTko.js";import{A as c,D as d}from"./AiReasoning.stories-CQfr1JKk.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B2iIPFms.js";import"./utils-Dc-_7Ywc.js";import"./custom-element-UsVr97OX.js";import"./property-De7pFSXt.js";import"./query-Dqn61YSF.js";import"./class-map-2BfWKpIT.js";import"./ai-reasoning-header-C87VwJ_t.js";import"./ai-gradient-container-B9D2cQiF.js";import"./utils-DIqd7FWX.js";import"./ai-chat-interface-Bmuc7ry6.js";import"./query-assigned-nodes-rK0fzJJV.js";import"./when-CI7b_ccM.js";import"./ai-chat-header-DUqE_QCd.js";import"./ref-CGaQPDJ6.js";import"./ai-icon-BT3VehvF.js";import"./tooltip-Dq656zF8.js";import"./overlay-CTn02HG_.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-dropdown-menu-BSohdQMa.js";import"./query-assigned-elements-CC18lbKK.js";import"./if-defined-PssoKMmO.js";import"./popover-BSFCTzJf.js";import"./ai-dropdown-menu-item-CaSd2Hn1.js";import"./ai-modal-BhQp6dc8.js";import"./ai-agent-info-CKI1FDmN.js";import"./ai-agent-selector-2LFpxz42.js";function t(o){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:c}),`
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

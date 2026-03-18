import{j as n,M as r,T as s,C as a}from"./blocks-BZbaQuU9.js";import{useMDXComponents as i}from"./index-BsX8knU6.js";import{C as p}from"./CustomArgTypes-CyKuSE3P.js";import{A as c,D as d}from"./AiReasoning.stories-BOzXGS2E.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-D3pErfQx.js";import"./utils-BjNMdrkX.js";import"./custom-element-UsVr97OX.js";import"./property-BeBNLgIk.js";import"./base-DkBR9i0N.js";import"./ai-reasoning-header-y9TN97-_.js";import"./ai-gradient-container-DUE5MT-M.js";import"./utils-BGBq21po.js";import"./ai-chat-interface-D1VEZpRH.js";import"./ai-dropdown-menu-item-B4psLtuz.js";import"./query-assigned-elements-C-3kek_S.js";import"./class-map-ChkbNi-Y.js";import"./when-CI7b_ccM.js";import"./ai-chat-header-CBnDNx-V.js";import"./ref-B64WPUXy.js";import"./ai-icon-B1C0mYM5.js";import"./tooltip-C7NUuCl9.js";import"./overlay-C1PEBxZv.js";import"./ai-dropdown-menu-C1Cj4lYc.js";import"./if-defined-B3RdSpai.js";import"./popover-DHr3MqJw.js";import"./ai-modal-BAo4MsNn.js";import"./ai-agent-info-BowPR8XO.js";import"./ai-agent-selector-BZLxCMy6.js";function t(o){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:c}),`
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

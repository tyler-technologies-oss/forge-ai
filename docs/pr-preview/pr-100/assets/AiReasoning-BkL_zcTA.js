import{j as n,M as r,T as s,C as a}from"./blocks-ByQgTWIB.js";import{useMDXComponents as i}from"./index-a83ohZF9.js";import{C as p}from"./CustomArgTypes-D2M_681L.js";import{A as c,D as d}from"./AiReasoning.stories-Dn52TiVU.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CxeI5B0K.js";import"./utils-HqzA9w63.js";import"./custom-element-UsVr97OX.js";import"./property-0bgw5x1u.js";import"./query-CX9OofRs.js";import"./class-map-3BO_8Ifk.js";import"./ai-reasoning-header-CF09X-JG.js";import"./ai-gradient-container-CBKzrfFj.js";import"./utils-DIqd7FWX.js";import"./ai-chat-interface-D88l3zFR.js";import"./query-assigned-nodes-DsHVf5h4.js";import"./when-CI7b_ccM.js";import"./ai-chat-header-G1dpMMtI.js";import"./ref-DmohT3mp.js";import"./ai-icon-DxAmSoz_.js";import"./tooltip-CMsCxNjY.js";import"./overlay-ys5C9_bt.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-dropdown-menu-Sd2bDefZ.js";import"./query-assigned-elements-CUkmn4Me.js";import"./if-defined-T73XHzDX.js";import"./popover-BDLZuHxT.js";import"./ai-dropdown-menu-item-CbNZIOj9.js";import"./ai-modal-CIM5VnjN.js";import"./ai-agent-info-aiDuzm48.js";import"./ai-agent-selector-BH5t4IZH.js";function t(o){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:c}),`
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

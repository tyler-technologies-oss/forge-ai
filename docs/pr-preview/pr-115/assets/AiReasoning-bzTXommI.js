import{j as n,M as r,T as s,C as a}from"./blocks-Ux-DVfLb.js";import{useMDXComponents as i}from"./index-5jWqod4W.js";import{C as p}from"./CustomArgTypes-Cijl7339.js";import{A as c,D as d}from"./AiReasoning.stories-BCe97qiS.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DdEsgLXc.js";import"./utils-DwVr3uOz.js";import"./custom-element-UsVr97OX.js";import"./property-DhUOPoOO.js";import"./query-C_1RVOyB.js";import"./class-map-BydUFS6g.js";import"./ai-reasoning-header-CMe4t-3r.js";import"./ai-gradient-container-BgyaJUEz.js";import"./utils-DIqd7FWX.js";import"./ai-chat-interface-BQz_nVeH.js";import"./query-assigned-nodes-CFQu4edo.js";import"./when-CI7b_ccM.js";import"./ai-chat-header-SRK_zogb.js";import"./ref-OBHf5tXr.js";import"./ai-icon-DVJejIk9.js";import"./tooltip-Cy5GOTrv.js";import"./overlay-7G1w-38G.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-dropdown-menu-BTB8wl5H.js";import"./query-assigned-elements-CQOpZU3Q.js";import"./if-defined-BWdVtfmD.js";import"./popover-dnKCNcSf.js";import"./ai-dropdown-menu-item-BrYPwV3H.js";import"./ai-modal-BJkFw6y5.js";import"./ai-agent-info-B7UrEkTM.js";import"./ai-agent-selector-T76zLRaA.js";function t(o){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:c}),`
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

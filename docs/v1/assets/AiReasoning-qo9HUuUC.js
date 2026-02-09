import{j as n,M as r,T as s,C as a}from"./blocks-BO3o6Ju0.js";import{useMDXComponents as i}from"./index-DV_K5VG9.js";import{C as p}from"./CustomArgTypes-BTJU-tk7.js";import{A as c,D as d}from"./AiReasoning.stories-Ci2vi6gm.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DlJEpWNk.js";import"./custom-element-UsVr97OX.js";import"./property-DAoWjuXC.js";import"./base-BU384QaK.js";import"./ai-reasoning-header-BE8SeSli.js";import"./ai-gradient-container-BEWILPcf.js";import"./utils-BGBq21po.js";import"./ai-chat-interface-DA0j8UPt.js";import"./ai-dropdown-menu-item-Bl8Q2w-d.js";import"./query-assigned-elements-Cv0PNhL8.js";import"./class-map-DIYZ0kX4.js";import"./when-CI7b_ccM.js";import"./ai-chat-header-B8Mg0c6i.js";import"./ref-Z7SisNL-.js";import"./ai-icon-DhoXFNmD.js";import"./tooltip-zCFPGIz_.js";import"./overlay-D2vQqLFf.js";import"./ai-dropdown-menu-CoV_vhUt.js";import"./if-defined-CZl0aa8O.js";import"./popover-Bo4XjLbu.js";import"./ai-modal-DqaVtGGK.js";import"./ai-agent-info-vQ0bPKid.js";import"./ai-agent-selector-BYDYAsgl.js";function t(o){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:c}),`
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

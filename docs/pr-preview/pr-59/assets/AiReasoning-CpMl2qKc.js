import{j as n,M as r,T as s,C as a}from"./blocks-Ch1xx4wB.js";import{useMDXComponents as i}from"./index-D16N0c4D.js";import{C as p}from"./CustomArgTypes-BAxD9XkG.js";import{A as c,D as d}from"./AiReasoning.stories-CBJj44u-.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BXJHJCEF.js";import"./utils-BAnNUKvG.js";import"./custom-element-UsVr97OX.js";import"./property-BNW4iySQ.js";import"./base-BxmjvQjl.js";import"./ai-reasoning-header-BOPxgh3Z.js";import"./ai-gradient-container-D8mj7R78.js";import"./utils-BGBq21po.js";import"./ai-chat-interface-Cp9l-NnL.js";import"./ai-dropdown-menu-item-Bv7n3J1l.js";import"./query-assigned-elements-BjNpp3kN.js";import"./class-map-BDjwf473.js";import"./when-CI7b_ccM.js";import"./ai-chat-header-DCZoD3SC.js";import"./ref-C1r4YUJU.js";import"./ai-icon-jYToZypd.js";import"./tooltip-DhLdkeEu.js";import"./overlay-CDn1f-rv.js";import"./ai-dropdown-menu-DW_4I9b4.js";import"./if-defined-BXP6mi-7.js";import"./popover-G8-N31Qa.js";import"./ai-modal-CC1aNPYw.js";import"./ai-agent-info-BKwqxlCS.js";import"./ai-agent-selector-DQkyIVbG.js";function t(o){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:c}),`
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

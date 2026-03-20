import{j as n,M as r,T as s,C as a}from"./blocks-7nCQewja.js";import{useMDXComponents as i}from"./index-CjONssGu.js";import{C as p}from"./CustomArgTypes-BfSwUqqh.js";import{A as c,D as d}from"./AiReasoning.stories-D7-xeGZm.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-SInbbIrY.js";import"./utils-D3jxQn3U.js";import"./custom-element-UsVr97OX.js";import"./property-BiV8fbcb.js";import"./base-kPG9LX_y.js";import"./ai-reasoning-header-D9Ep7lOi.js";import"./ai-gradient-container-B997RF0x.js";import"./utils-BGBq21po.js";import"./ai-chat-interface-nNV-6W5s.js";import"./ai-dropdown-menu-item-eACyIPeF.js";import"./query-assigned-elements-DJy4YmOv.js";import"./class-map-DAkH78er.js";import"./when-CI7b_ccM.js";import"./ai-chat-header-DtwdtcGI.js";import"./ref-DlxiPx2M.js";import"./ai-icon-C6yL7x1s.js";import"./tooltip-BqW2vRDN.js";import"./overlay-C_sLuovZ.js";import"./ai-dropdown-menu-BfSsyzca.js";import"./if-defined-8Hejse_B.js";import"./popover-BgRRrD0G.js";import"./ai-modal-DQeO0G4M.js";import"./ai-agent-info-BTeSanGm.js";import"./ai-agent-selector-BLEmsIi_.js";function t(o){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:c}),`
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

import{j as e,M as i,T as a,C as r}from"./blocks-DpTsiSYm.js";import{useMDXComponents as s}from"./index-B6FbvJsz.js";import{C as c}from"./CustomArgTypes-COk3Rcwc.js";import{A as l,D as m}from"./AiDisclaimer.stories-BkwZ9Hi5.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B-Y_IEQ6.js";import"./utils-CBdkreSp.js";import"./ai-disclaimer-Cp3CPs50.js";import"./custom-element-UsVr97OX.js";function o(t){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l}),`
`,e.jsx(a,{}),`
`,e.jsx(n.p,{children:"Displays terms of service, privacy policies, or other disclosures requiring user acknowledgment. Features optional icon, scrollable content, and pinned footer with action buttons."}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"Use within form factor components to gate access to the AI assistant. Place content in the default slot, optionally provide an icon, and handle the agree/disagree events."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-ai-floating-chat open>
  <forge-ai-disclaimer @forge-ai-disclaimer-agree="\${handleAgree}" @forge-ai-disclaimer-disagree="\${handleDisagree}">
    <svg slot="icon" viewBox="0 0 24 24"><!-- icon path --></svg>
    <h2>Terms of Service</h2>
    <p>By using this AI assistant, you agree to our terms...</p>
  </forge-ai-disclaimer>
</forge-ai-floating-chat>
`})}),`
`,e.jsx(n.h3,{id:"custom-button-text",children:"Custom Button Text"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<forge-ai-disclaimer>
  <span slot="disagree-button-text">Decline</span>
  <span slot="agree-button-text">Accept</span>
  <p>Content here...</p>
</forge-ai-disclaimer>
`})}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(c,{})]})}function D(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{D as default};

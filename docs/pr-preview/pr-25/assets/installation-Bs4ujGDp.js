import{j as e,M as i}from"./blocks-DFCoRaVR.js";import{useMDXComponents as o}from"./index-Derlihd7.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C3YYcVRv.js";function r(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Getting Started/Installation"}),`
`,e.jsx(n.h1,{id:"installation",children:"Installation"}),`
`,e.jsx(n.p,{children:"To get started, install the AI library."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @tylertech/forge-ai
`})}),`
`,e.jsx(n.h2,{id:"framework-adapters",children:"Framework Adapters"}),`
`,e.jsx(n.p,{children:"If you're using a framework, you should jump to the framework-specific guide:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/frameworks-react--docs",children:"React"})}),`
`]}),`
`,e.jsx(n.h2,{id:"importing-components",children:"Importing Components"}),`
`,e.jsx(n.p,{children:"You will then need to import each of the components you are using within your application."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import '@tylertech/forge-ai/ai-chat-interface';
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:'The above imports are known as "side effect" imports and will automatically register the components with the browser.'}),`
`]})]})}function d(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{d as default};

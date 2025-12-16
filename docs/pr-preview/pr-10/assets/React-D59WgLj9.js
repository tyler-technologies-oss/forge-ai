import{j as e,M as a}from"./blocks-DRyPGhQe.js";import{useMDXComponents as o}from"./index-D8FnM4YU.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-mbq2TPuS.js";function r(n){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Frameworks/React"}),`
`,e.jsx(t.h1,{id:"react",children:"React"}),`
`,e.jsx(t.p,{children:"To make using Forge AI with React more seamless, we have created an adapter library to make communicating with the underlying custom elements easier."}),`
`,e.jsx(t.p,{children:"This adapter library provides a thin wrapper React component around all Forge AI custom elements that allows you to pass data and listen to events in a more React-friendly way."}),`
`,e.jsxs(t.p,{children:["While the adapter is not ",e.jsx(t.em,{children:"required"})," to use Forge AI with React, it is ",e.jsx(t.strong,{children:"highly"})," recommended to make the integration easier."]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["You can view source code for the Forge AI React adapter on ",e.jsx(t.a,{href:"https://github.com/tyler-technologies-oss/forge-ai/tree/main/packages/ai-react",rel:"nofollow",children:"GitHub"}),"."]}),`
`]}),`
`,e.jsx(t.h2,{id:"react-19",children:"React 19"}),`
`,e.jsx(t.p,{children:"If you're using React 19 or later, you can also use the custom elements directly in your application without the adapter library."}),`
`,e.jsx(t.p,{children:"React 19 comes with built-in support for custom elements, but feel free to use the adapter regardless if you prefer!"}),`
`,e.jsx(t.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(t.p,{children:"To use Forge AI in your React application, install the following packages from npm:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-bash",children:`npm install @tylertech/forge-ai @tylertech/forge-ai-react
`})}),`
`,e.jsx(t.h2,{id:"importing-components",children:"Importing Components"}),`
`,e.jsxs(t.p,{children:["To use Forge AI components in your React application, import the components you need from the ",e.jsx(t.code,{children:"@tylertech/forge-ai-react"})," package, as well as the custom elements from ",e.jsx(t.code,{children:"@tylertech/forge-ai"}),"."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { ForgeAiChatInterface } from '@tylertech/forge-ai-react';

function App() {
  return <ForgeAiChatInterface></ForgeAiChatInterface>;
}
`})})]})}function m(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{m as default};

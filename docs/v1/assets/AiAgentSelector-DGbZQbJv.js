import{j as e,M as r,T as i,C as a}from"./blocks-BO3o6Ju0.js";import{useMDXComponents as s}from"./index-DV_K5VG9.js";import{C as c}from"./CustomArgTypes-BTJU-tk7.js";import{A as l,D as h}from"./AiAgentSelector.stories-Cc_MNdCj.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DlJEpWNk.js";import"./ai-agent-selector-BYDYAsgl.js";import"./custom-element-UsVr97OX.js";import"./property-DAoWjuXC.js";import"./base-BU384QaK.js";import"./class-map-DIYZ0kX4.js";import"./when-CI7b_ccM.js";import"./utils-BGBq21po.js";import"./popover-Bo4XjLbu.js";import"./overlay-D2vQqLFf.js";import"./tooltip-zCFPGIz_.js";import"./ai-icon-DhoXFNmD.js";import"./ai-gradient-container-BEWILPcf.js";import"./mock-agents-Cm47oyNv.js";function o(n){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(i,{}),`
`,e.jsx(t.p,{children:"Agent selector dropdown for switching between AI agents. Displays the current agent name with a dropdown menu to select from available options. When no agents are provided, shows static title text. A search filter appears automatically when more than 5 agents are available."}),`
`,e.jsx(a,{of:h}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(t.p,{children:["The agent selector is a ",e.jsx(t.strong,{children:"controlled component"})," - it emits a change event but does not update its own selection. The parent component must update ",e.jsx(t.code,{children:"selectedAgentId"})," in response to the event."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`function handleChange(e: CustomEvent<ForgeAiAgentSelectorChangeEventData>) {
  const { agent, previousAgentId } = e.detail;
  // Update your state with the new agent
  this.selectedAgentId = agent?.id;
}
`})}),`
`,e.jsx(t.h3,{id:"with-chatbot",children:"With Chatbot"}),`
`,e.jsxs(t.p,{children:["When using ",e.jsx(t.code,{children:"<forge-ai-chatbot>"}),", pass ",e.jsx(t.code,{children:"agents"})," directly to the chatbot component. The agent selector is integrated into the chat header automatically:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<forge-ai-chatbot
  .adapter="\${adapter}"
  .agents="\${agents}"
  .selectedAgentId="\${selectedAgentId}"
  @forge-ai-chatbot-agent-change="\${handleAgentChange}">
</forge-ai-chatbot>
`})}),`
`,e.jsx(t.p,{children:"The chatbot handles selection state internally and clears the conversation when switching agents."}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(c,{}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(t.p,{children:"The agent selector supports full keyboard navigation:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Enter / Space"})," - Open dropdown or select focused item"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Escape"})," - Close dropdown and return focus to trigger"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Arrow Down / Up"})," - Navigate through agent options"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Home"})," - Jump to default option"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"End"})," - Jump to last agent"]}),`
`]})]})}function $(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{$ as default};

import{x as i}from"./iframe-ysd04RiF.js";import"./ai-agent-selector-Ds7a7MIg.js";import"./ai-icon-DxsyDm8K.js";import{l,s as c}from"./mock-agents-Cm47oyNv.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,d="forge-ai-agent-selector",m={title:"AI Components/Primitives/Agent Selector",component:d,argTypes:{agentListSize:{control:"select",options:["small","large"],description:"Toggle between small (4) and large (50) agent lists"},titleText:{control:"text",description:"Fallback text when no agent is selected"},disabled:{control:"boolean",description:"Disables the selector (e.g., during streaming)"}},args:{agentListSize:"small",titleText:"AI Assistant",disabled:!1},render:t=>{const s=t.agentListSize==="large"?l:c,a=g("forge-ai-agent-selector-change"),n=o=>{const r=o.target;r.selectedAgentId=o.detail.agent?.id,a(o.detail)};return i`
      <forge-ai-agent-selector
        .agents=${s}
        .titleText=${t.titleText}
        ?disabled=${t.disabled}
        @forge-ai-agent-selector-change=${n}>
        <forge-ai-icon slot="icon"></forge-ai-icon>
      </forge-ai-agent-selector>
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const p=["Demo"],S=Object.freeze(Object.defineProperty({__proto__:null,Demo:e,__namedExportsOrder:p,default:m},Symbol.toStringTag,{value:"Module"}));export{S as A,e as D};

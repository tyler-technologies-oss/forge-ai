import{x as t}from"./iframe-D2L_qK33.js";import"./ai-empty-state-BJJGcxWg.js";import"./ai-suggestions-CZhJs6z8.js";const r="forge-ai-empty-state",a={title:"AI Components/Primitives/Empty State",component:r,argTypes:{showSuggestions:{control:"boolean",description:"Show or hide the suggestions"}},args:{showSuggestions:!0},render:o=>{const s=[{text:"Help me write an email",value:"email"},{text:"Create a presentation",value:"presentation"},{text:"Write some code",value:"code"},{text:"Plan a meeting",value:"meeting"}];return t`
      <forge-ai-empty-state>
        ${o.showSuggestions?t`
              <forge-ai-suggestions slot="actions" variant="block" .suggestions=${s}> </forge-ai-suggestions>
            `:""}
      </forge-ai-empty-state>
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const i=["Demo"],p=Object.freeze(Object.defineProperty({__proto__:null,Demo:e,__namedExportsOrder:i,default:a},Symbol.toStringTag,{value:"Module"}));export{p as A,e as D};

import{x as o}from"./iframe-DPbeJets.js";import"./ai-empty-state-DKBMUCxK.js";import"./ai-suggestions-Bap8tHAc.js";const a="forge-ai-empty-state",n={title:"AI Components/Primitives/Empty State",component:a,argTypes:{showSuggestions:{control:"boolean",description:"Show or hide the suggestions"},headingText:{control:"text",description:"Custom heading text for the heading slot (leave empty for default)"},customMessage:{control:"text",description:"Custom message text (leave empty for default)"}},args:{showSuggestions:!0,headingText:"Forge AI",customMessage:"Welcome to Forge AI! How can I assist you today?"},render:e=>{const s=[{text:"Help me write an email",value:"email"},{text:"Create a presentation",value:"presentation"},{text:"Write some code",value:"code"},{text:"Plan a meeting",value:"meeting"}];return o`
      <forge-ai-empty-state>
        ${e.headingText?o`<span slot="heading">${e.headingText}</span>`:""}
        ${e.customMessage?o`<span slot="body">${e.customMessage}</span>`:""}
        ${e.showSuggestions?o`
              <forge-ai-suggestions slot="actions" variant="block" .suggestions=${s}> </forge-ai-suggestions>
            `:""}
      </forge-ai-empty-state>
    `}},t={args:{customMessage:"Welcome to Forge AI!  "}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    customMessage: 'Welcome to Forge AI!  '
  }
}`,...t.parameters?.docs?.source}}};const r=["Demo"],c=Object.freeze(Object.defineProperty({__proto__:null,Demo:t,__namedExportsOrder:r,default:n},Symbol.toStringTag,{value:"Module"}));export{c as A,t as D};

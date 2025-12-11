import{x as r}from"./iframe-C-oCfh6o.js";import"./ai-voice-input-Dt1N-Q9y.js";import{d as n}from"./index-BVqXfHSh.js";n();const i="forge-ai-voice-input",s={title:"AI Components/Primitives/Voice Input",component:i,render:()=>r`
      <forge-stack gap="24">
        <forge-ai-voice-input @forge-ai-voice-input-result=${t=>{const o=document.getElementById("result");o&&(o.textContent=`"${t.detail.transcript}" (confidence: ${Math.round(t.detail.confidence*100)}%)`)}}></forge-ai-voice-input>
        <div>Result: <span id="result">Click the microphone and speak...</span></div>
      </forge-stack>
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const a=["Demo"],l=Object.freeze(Object.defineProperty({__proto__:null,Demo:e,__namedExportsOrder:a,default:s},Symbol.toStringTag,{value:"Module"}));export{l as A,e as D};

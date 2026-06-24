import{x as r}from"./iframe-B1h2trez.js";import"./scaffold-CQ5khyIx.js";import"./split-button-DmiFhRTR.js";import{d as i}from"./index-W1786QNE.js";import"./ai-voice-input-CDYP4nj8.js";i();const n="forge-ai-voice-input",s={title:"AI Components/Primitives/Voice Input",component:n,render:()=>r`
      <forge-stack gap="24">
        <forge-ai-voice-input @forge-ai-voice-input-result=${t=>{const o=document.getElementById("result");o&&(o.textContent=`"${t.detail.transcript}" (confidence: ${Math.round(t.detail.confidence*100)}%)`)}}></forge-ai-voice-input>
        <div>Result: <span id="result">Click the microphone and speak...</span></div>
      </forge-stack>
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const a=["Demo"],f=Object.freeze(Object.defineProperty({__proto__:null,Demo:e,__namedExportsOrder:a,default:s},Symbol.toStringTag,{value:"Module"}));export{f as A,e as D};

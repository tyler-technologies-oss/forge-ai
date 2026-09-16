import{x as r}from"./iframe-D1C_cP03.js";import"./scaffold-BEDpyqbp.js";import"./split-button-DOO6F2CZ.js";import{d as i}from"./index-CA5MssaO.js";import"./ai-voice-input-wWRHhVKV.js";i();const n="forge-ai-voice-input",s={title:"AI Components/Primitives/Voice Input",component:n,render:()=>r`
      <forge-stack gap="24">
        <forge-ai-voice-input @forge-ai-voice-input-result=${t=>{const o=document.getElementById("result");o&&(o.textContent=`"${t.detail.transcript}" (confidence: ${Math.round(t.detail.confidence*100)}%)`)}}></forge-ai-voice-input>
        <div>Result: <span id="result">Click the microphone and speak...</span></div>
      </forge-stack>
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const a=["Demo"],f=Object.freeze(Object.defineProperty({__proto__:null,Demo:e,__namedExportsOrder:a,default:s},Symbol.toStringTag,{value:"Module"}));export{f as A,e as D};

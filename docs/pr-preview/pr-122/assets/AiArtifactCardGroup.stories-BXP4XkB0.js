import{x as s}from"./iframe-CoBfPbd3.js";import{I as u,b as m,c as g}from"./scaffold-BNDmhoTT.js";import"./split-button-BeTuroci.js";import{d as f}from"./index-C35plZJr.js";import"./ai-artifact-card-group-C_hdq0Nt.js";const{action:n}=__STORYBOOK_MODULE_ACTIONS__;u.define([m,g]);f();const h="forge-ai-artifact-card-group",l=[{title:"Traffic collisions by intersection",subtitle:"Table · 2024 Collision Records · 1,284 rows",icon:"table"},{title:"Collisions by month",subtitle:"Chart · 2024 Collision Records",icon:"bar_chart"},{title:"Injury collisions near schools",subtitle:"Table · 2024 Collision Records · 212 rows",icon:"table"},{title:"Q4 collision summary",subtitle:"Report · 4 charts",icon:"bar_chart"},{title:"Pedestrian collisions by district",subtitle:"Table · 2024 Collision Records · 96 rows",icon:"table"},{title:"Collisions by weather condition",subtitle:"Chart · 2024 Collision Records",icon:"bar_chart"}];function d(e,p=-1){return l.slice(0,e).map((i,c)=>s`
      <forge-ai-artifact-card
        title-text=${i.title}
        subtitle-text=${i.subtitle}
        asset-id="result-${c+1}"
        ?active=${c===p}
        @forge-ai-artifact-card-open=${n("forge-ai-artifact-card-open")}>
        <forge-icon slot="icon" name=${i.icon}></forge-icon>
      </forge-ai-artifact-card>
    `)}const b={title:"AI Components/Primitives/Artifact Card Group",render:e=>s`
    <forge-ai-artifact-card-group
      style="max-width: 480px;"
      visible-count=${e.visibleCount}
      ?expanded=${e.expanded}
      show-more-text=${e.showMoreText}
      show-less-text=${e.showLessText}
      @forge-ai-artifact-card-group-toggle=${n("forge-ai-artifact-card-group-toggle")}>
      ${d(e.cardCount)}
    </forge-ai-artifact-card-group>
  `,component:h,argTypes:{cardCount:{control:{type:"range",min:1,max:l.length},description:"Story only: how many cards to render"},visibleCount:{control:{type:"number",min:1},description:"How many cards show while the list is collapsed"},expanded:{control:"boolean",description:"Whether every card is showing"},showMoreText:{control:"text",description:"Label of the toggle while collapsed. `{count}` is replaced with the number of hidden cards"},showLessText:{control:"text",description:"Label of the toggle while expanded"}},args:{cardCount:6,visibleCount:3,expanded:!1,showMoreText:"{count} more",showLessText:"Show less"}},t={},o={args:{cardCount:3}},r={args:{expanded:!0}},a={render:()=>s`
    <forge-ai-artifact-card-group style="max-width: 480px;">${d(3,1)}</forge-ai-artifact-card-group>
  `};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    cardCount: 3
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    expanded: true
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <forge-ai-artifact-card-group style="max-width: 480px;">\${renderCards(3, 1)}</forge-ai-artifact-card-group>
  \`
}`,...a.parameters?.docs?.source}}};const x=["Demo","FitsWithoutToggle","Expanded","ActiveRow"],$=Object.freeze(Object.defineProperty({__proto__:null,ActiveRow:a,Demo:t,Expanded:r,FitsWithoutToggle:o,__namedExportsOrder:x,default:b},Symbol.toStringTag,{value:"Module"}));export{$ as A,t as D,o as F,a};

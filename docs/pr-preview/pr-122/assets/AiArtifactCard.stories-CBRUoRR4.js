import{x as s}from"./iframe-CoBfPbd3.js";import{I as f,b as p,c as m}from"./scaffold-BNDmhoTT.js";import"./split-button-BeTuroci.js";import{d as g}from"./index-C35plZJr.js";import"./ai-artifact-card-group-C_hdq0Nt.js";const{action:n}=__STORYBOOK_MODULE_ACTIONS__;f.define([p,m]);g();const u="forge-ai-artifact-card",l=s`<forge-icon slot="icon" name="table"></forge-icon>`,d=s`<forge-icon slot="icon" name="bar_chart"></forge-icon>`,b={title:"AI Components/Primitives/Artifact Card",render:t=>s`
      <forge-ai-artifact-card
        title-text=${t.titleText}
        subtitle-text=${t.subtitleText}
        asset-id=${t.assetId}
        ?active=${t.active}
        ?disabled=${t.disabled}
        @forge-ai-artifact-card-open=${n("forge-ai-artifact-card-open")}>
        ${l}
      </forge-ai-artifact-card>
    `,component:u,argTypes:{titleText:{control:"text",description:"The primary line of text"},subtitleText:{control:"text",description:"The secondary line of text"},assetId:{control:"text",description:"An opaque identifier echoed back in the open event detail"},active:{control:"boolean",description:"Whether the artifact this card points at is the one currently being viewed"},disabled:{control:"boolean",description:"Whether the card can be activated"}},args:{titleText:"Traffic collisions by intersection",subtitleText:"Table · 2024 Collision Records · 1,284 rows",assetId:"collisions-2024",active:!1,disabled:!1}},e={},r={args:{active:!0}},a={args:{disabled:!0}},i={args:{titleText:"Traffic collisions by intersection, severity, weather condition, and time of day",subtitleText:"Table · 2024 Collision Records · filtered to arterial roads within city limits · 1,284 rows"}},o={render:()=>s`
    <forge-ai-artifact-card
      title-text="Q4 collision summary"
      subtitle-text="Report · 4 charts"
      asset-id="q4-report"
      style="--forge-ai-artifact-card-accent-color: var(--forge-theme-primary);"
      @forge-ai-artifact-card-open=${n("forge-ai-artifact-card-open")}>
      ${d}
    </forge-ai-artifact-card>
  `},c={render:()=>s`
    <div style="display: flex; flex-direction: column; gap: 8px; max-width: 480px;">
      <forge-ai-artifact-card
        title-text="Traffic collisions by intersection"
        subtitle-text="Table · 2024 Collision Records · 1,284 rows"
        asset-id="collisions-2024"
        active
        @forge-ai-artifact-card-open=${n("forge-ai-artifact-card-open")}>
        ${l}
      </forge-ai-artifact-card>
      <forge-ai-artifact-card
        title-text="Q4 collision summary"
        subtitle-text="Report · 4 charts"
        asset-id="q4-report"
        @forge-ai-artifact-card-open=${n("forge-ai-artifact-card-open")}>
        ${d}
      </forge-ai-artifact-card>
    </div>
  `};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    active: true
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    titleText: 'Traffic collisions by intersection, severity, weather condition, and time of day',
    subtitleText: 'Table · 2024 Collision Records · filtered to arterial roads within city limits · 1,284 rows'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <forge-ai-artifact-card
      title-text="Q4 collision summary"
      subtitle-text="Report · 4 charts"
      asset-id="q4-report"
      style="--forge-ai-artifact-card-accent-color: var(--forge-theme-primary);"
      @forge-ai-artifact-card-open=\${action('forge-ai-artifact-card-open')}>
      \${chartIcon}
    </forge-ai-artifact-card>
  \`
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 8px; max-width: 480px;">
      <forge-ai-artifact-card
        title-text="Traffic collisions by intersection"
        subtitle-text="Table · 2024 Collision Records · 1,284 rows"
        asset-id="collisions-2024"
        active
        @forge-ai-artifact-card-open=\${action('forge-ai-artifact-card-open')}>
        \${tableIcon}
      </forge-ai-artifact-card>
      <forge-ai-artifact-card
        title-text="Q4 collision summary"
        subtitle-text="Report · 4 charts"
        asset-id="q4-report"
        @forge-ai-artifact-card-open=\${action('forge-ai-artifact-card-open')}>
        \${chartIcon}
      </forge-ai-artifact-card>
    </div>
  \`
}`,...c.parameters?.docs?.source}}};const x=["Demo","Active","Disabled","Truncation","CustomAccent","InTranscript"],I=Object.freeze(Object.defineProperty({__proto__:null,Active:r,CustomAccent:o,Demo:e,Disabled:a,InTranscript:c,Truncation:i,__namedExportsOrder:x,default:b},Symbol.toStringTag,{value:"Module"}));export{I as A,e as D,c as I,r as a};

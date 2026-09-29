import{x as t}from"./iframe-CsRSgPVx.js";import{o as m}from"./if-defined-t_EhrTPt.js";import{I as g,b as u,c as b}from"./scaffold-DT2e9oC9.js";import"./split-button-CpBA3N-a.js";import{d as x}from"./index-KS6hup3N.js";import"./ai-artifact-card-group-D-e1JY50.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__;g.define([u,b]);x();const h="forge-ai-artifact-card",f=t`<forge-icon slot="icon" name="table"></forge-icon>`,p=t`<forge-icon slot="icon" name="bar_chart"></forge-icon>`,v={title:"AI Components/Primitives/Artifact Card",render:e=>t`
      <forge-ai-artifact-card
        title-text=${e.titleText}
        subtitle-text=${e.subtitleText}
        action-label=${m(e.actionLabel||void 0)}
        asset-id=${e.assetId}
        ?active=${e.active}
        ?disabled=${e.disabled}
        @forge-ai-artifact-card-open=${a("forge-ai-artifact-card-open")}>
        ${f}
      </forge-ai-artifact-card>
    `,component:h,argTypes:{titleText:{control:"text",description:"The primary line of text"},subtitleText:{control:"text",description:"The secondary line of text"},actionLabel:{control:"text",description:"Appended to the accessible name to describe what activation does; omit when it just opens"},assetId:{control:"text",description:"An opaque identifier echoed back in the open event detail"},active:{control:"boolean",description:"Whether the artifact this card points at is the one currently being viewed"},disabled:{control:"boolean",description:"Whether the card can be activated"}},args:{titleText:"Traffic collisions by intersection",subtitleText:"Table · 2024 Collision Records · 1,284 rows",actionLabel:"",assetId:"collisions-2024",active:!1,disabled:!1}},r={},i={args:{active:!0}},o={render:()=>t`
    <forge-ai-artifact-card
      title-text="Q4 collision summary"
      subtitle-text="Report · 4 charts"
      asset-id="q4-report"
      @forge-ai-artifact-card-open=${a("forge-ai-artifact-card-open")}></forge-ai-artifact-card>
  `},c={render:()=>t`
    <forge-ai-artifact-card
      title-text="Traffic collisions by intersection"
      subtitle-text="Table · 2024 Collision Records · 1,284 rows"
      asset-id="collisions-2024"
      action-label="Collapse table"
      active
      @forge-ai-artifact-card-open=${a("forge-ai-artifact-card-open")}>
      ${f}
      <svg slot="action-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M22 3.41 16.71 8.7 20 12h-8V4l3.29 3.29L20.59 2zM3.41 22l5.29-5.29L12 20v-8H4l3.29 3.29L2 20.59z" />
      </svg>
    </forge-ai-artifact-card>
  `},s={args:{disabled:!0}},n={args:{titleText:"Traffic collisions by intersection, severity, weather condition, and time of day",subtitleText:"Table · 2024 Collision Records · filtered to arterial roads within city limits · 1,284 rows"}},l={render:()=>t`
    <forge-ai-artifact-card
      title-text="Q4 collision summary"
      subtitle-text="Report · 4 charts"
      asset-id="q4-report"
      style="--forge-ai-artifact-card-accent-color: var(--forge-theme-tertiary);"
      @forge-ai-artifact-card-open=${a("forge-ai-artifact-card-open")}>
      ${p}
    </forge-ai-artifact-card>
  `},d={render:()=>t`
    <div style="display: flex; flex-direction: column; gap: 8px; max-width: 480px;">
      <forge-ai-artifact-card
        title-text="Traffic collisions by intersection"
        subtitle-text="Table · 2024 Collision Records · 1,284 rows"
        asset-id="collisions-2024"
        active
        @forge-ai-artifact-card-open=${a("forge-ai-artifact-card-open")}>
        ${f}
      </forge-ai-artifact-card>
      <forge-ai-artifact-card
        title-text="Q4 collision summary"
        subtitle-text="Report · 4 charts"
        asset-id="q4-report"
        @forge-ai-artifact-card-open=${a("forge-ai-artifact-card-open")}>
        ${p}
      </forge-ai-artifact-card>
    </div>
  `};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    active: true
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <forge-ai-artifact-card
      title-text="Q4 collision summary"
      subtitle-text="Report · 4 charts"
      asset-id="q4-report"
      @forge-ai-artifact-card-open=\${action('forge-ai-artifact-card-open')}></forge-ai-artifact-card>
  \`
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <forge-ai-artifact-card
      title-text="Traffic collisions by intersection"
      subtitle-text="Table · 2024 Collision Records · 1,284 rows"
      asset-id="collisions-2024"
      action-label="Collapse table"
      active
      @forge-ai-artifact-card-open=\${action('forge-ai-artifact-card-open')}>
      \${tableIcon}
      <svg slot="action-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M22 3.41 16.71 8.7 20 12h-8V4l3.29 3.29L20.59 2zM3.41 22l5.29-5.29L12 20v-8H4l3.29 3.29L2 20.59z" />
      </svg>
    </forge-ai-artifact-card>
  \`
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    titleText: 'Traffic collisions by intersection, severity, weather condition, and time of day',
    subtitleText: 'Table · 2024 Collision Records · filtered to arterial roads within city limits · 1,284 rows'
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <forge-ai-artifact-card
      title-text="Q4 collision summary"
      subtitle-text="Report · 4 charts"
      asset-id="q4-report"
      style="--forge-ai-artifact-card-accent-color: var(--forge-theme-tertiary);"
      @forge-ai-artifact-card-open=\${action('forge-ai-artifact-card-open')}>
      \${chartIcon}
    </forge-ai-artifact-card>
  \`
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const y=["Demo","Active","DefaultIcon","CollapsibleAction","Disabled","Truncation","CustomAccent","InTranscript"],A=Object.freeze(Object.defineProperty({__proto__:null,Active:i,CollapsibleAction:c,CustomAccent:l,DefaultIcon:o,Demo:r,Disabled:s,InTranscript:d,Truncation:n,__namedExportsOrder:y,default:v},Symbol.toStringTag,{value:"Module"}));export{A,c as C,r as D,d as I,i as a};

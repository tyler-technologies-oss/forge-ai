import{x as i}from"./iframe-BN_B54Ct.js";import"./ai-chat-header-Cje_7rWr.js";import{d as n}from"./index-CjRo2257.js";import{d as a}from"./index-BF8Q_O8k.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,r="forge-ai-chat-header",s=o("forge-ai-chat-header-expand"),c=o("forge-ai-chat-header-minimize"),d=o("forge-ai-chat-header-clear"),h=o("forge-ai-chat-header-info");n();a();const p={title:"AI Components/Primitives/Chat Header",component:r,argTypes:{title:{control:"text",description:"The title text to display in the header slot"},showExpandButton:{control:"boolean",description:"Controls whether the expand button is visible"},showMinimizeButton:{control:"boolean",description:"Controls whether the minimize button is visible"},expanded:{control:"boolean",description:"Indicates the current expanded state for displaying the appropriate expand/collapse icon"},minimizeIcon:{control:{type:"select"},options:["default","panel"],description:"Controls which minimize icon to display"}},args:{title:"AI Assistant",showExpandButton:!1,showMinimizeButton:!1,expanded:!1,minimizeIcon:"default"},render:e=>i`
      <forge-ai-chat-header
        .showExpandButton=${e.showExpandButton}
        .showMinimizeButton=${e.showMinimizeButton}
        .expanded=${e.expanded}
        .minimizeIcon=${e.minimizeIcon}
        @forge-ai-chat-header-expand=${s}
        @forge-ai-chat-header-minimize=${c}
        @forge-ai-chat-header-clear=${d}
        @forge-ai-chat-header-info=${h}>
        <h1 slot="title">${e.title}</h1>
      </forge-ai-chat-header>
    `},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const l=["Demo"],z=Object.freeze(Object.defineProperty({__proto__:null,Demo:t,__namedExportsOrder:l,default:p},Symbol.toStringTag,{value:"Module"}));export{z as A,t as D};

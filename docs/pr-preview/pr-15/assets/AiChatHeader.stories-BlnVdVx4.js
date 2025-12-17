import{x as i}from"./iframe-CJ1HM2fh.js";import"./ai-chat-header-GBL-2gG9.js";import{d as a}from"./index-RDZCraGN.js";import{d as r}from"./index-IrXtjyyr.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-chat-header",c=o("forge-ai-chat-header-expand"),d=o("forge-ai-chat-header-minimize"),l=o("forge-ai-chat-header-clear"),h=o("forge-ai-chat-header-info");a();r();const p={title:"AI Components/Primitives/Chat Header",component:s,argTypes:{title:{control:"text",description:"The title text to display in the header slot"},showExpandButton:{control:"boolean",description:"Controls whether the expand button is visible"},showMinimizeButton:{control:"boolean",description:"Controls whether the minimize button is visible"},expanded:{control:"boolean",description:"Indicates the current expanded state for displaying the appropriate expand/collapse icon"},minimizeIcon:{control:{type:"select"},options:["default","panel"],description:"Controls which minimize icon to display"},customIcon:{control:{type:"select"},options:["default","emoji","custom-svg"],description:"Choose icon type to display"}},args:{title:"AI Assistant",showExpandButton:!1,showMinimizeButton:!1,expanded:!1,minimizeIcon:"default",customIcon:"default"},render:e=>{const n=()=>{switch(e.customIcon){case"emoji":return i`<div slot="icon" style="font-size: 24px;">🤖</div>`;case"custom-svg":return i`
            <svg slot="icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          `;default:return""}};return i`
      <forge-ai-chat-header
        .showExpandButton=${e.showExpandButton}
        .showMinimizeButton=${e.showMinimizeButton}
        .expanded=${e.expanded}
        .minimizeIcon=${e.minimizeIcon}
        @forge-ai-chat-header-expand=${c}
        @forge-ai-chat-header-minimize=${d}
        @forge-ai-chat-header-clear=${l}
        @forge-ai-chat-header-info=${h}>
        ${n()}
        <h1 slot="title">${e.title}</h1>
      </forge-ai-chat-header>
    `}},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const m=["Demo"],z=Object.freeze(Object.defineProperty({__proto__:null,Demo:t,__namedExportsOrder:m,default:p},Symbol.toStringTag,{value:"Module"}));export{z as A,t as D};

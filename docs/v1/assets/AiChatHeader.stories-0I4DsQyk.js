import{x as n}from"./iframe-lCzSBZJV.js";import"./ai-chat-header-CWPz654e.js";import{d as r}from"./index-B3twr5GA.js";import{d as a}from"./index-BsyWAW-0.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-chat-header",c=t("forge-ai-chat-header-expand"),h=t("forge-ai-chat-header-minimize"),d=t("forge-ai-chat-header-clear"),l=t("forge-ai-chat-header-info");r();a();const p={title:"AI Components/Primitives/Chat Header",component:s,argTypes:{title:{control:"text",description:"The title text to display in the header slot"},showExpandButton:{control:"boolean",description:"Controls whether the expand button is visible"},showMinimizeButton:{control:"boolean",description:"Controls whether the minimize button is visible"},expanded:{control:"boolean",description:"Indicates the current expanded state for displaying the appropriate expand/collapse icon"},minimizeIcon:{control:{type:"select"},options:["default","panel"],description:"Controls which minimize icon to display"},showDropdownMenu:{control:"boolean",description:"Controls whether the dropdown menu is visible"},showClearChat:{control:"boolean",description:"Controls whether the clear chat menu item is visible"},showInfo:{control:"boolean",description:"Controls whether the info menu item is visible"},customIcon:{control:{type:"select"},options:["default","emoji","custom-svg"],description:"Choose icon type to display"}},args:{title:"AI Assistant",showExpandButton:!1,showMinimizeButton:!1,expanded:!1,minimizeIcon:"default",showDropdownMenu:!0,showClearChat:!0,showInfo:!0,customIcon:"default"},render:e=>{const i=()=>{switch(e.customIcon){case"emoji":return n`<div slot="icon" style="font-size: 24px;">🤖</div>`;case"custom-svg":return n`
            <svg slot="icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          `;default:return""}};return n`
      <forge-ai-chat-header
        .showExpandButton=${e.showExpandButton}
        .showMinimizeButton=${e.showMinimizeButton}
        .expanded=${e.expanded}
        .minimizeIcon=${e.minimizeIcon}
        .showDropdownMenu=${e.showDropdownMenu}
        .showClearChat=${e.showClearChat}
        .showInfo=${e.showInfo}
        @forge-ai-chat-header-expand=${c}
        @forge-ai-chat-header-minimize=${h}
        @forge-ai-chat-header-clear=${d}
        @forge-ai-chat-header-info=${l}>
        ${i()}
        <h1 slot="title">${e.title}</h1>
      </forge-ai-chat-header>
    `}},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const m=["Demo"],x=Object.freeze(Object.defineProperty({__proto__:null,Demo:o,__namedExportsOrder:m,default:p},Symbol.toStringTag,{value:"Module"}));export{x as A,o as D};

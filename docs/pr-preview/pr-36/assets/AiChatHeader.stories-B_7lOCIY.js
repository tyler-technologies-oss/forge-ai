import{x as n}from"./iframe-dgZ-nBwM.js";import"./ai-chat-header-W-DhCcJj.js";import{d as s}from"./index-BXnuJBbK.js";import{d as r}from"./index-lKD-U923.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,c="forge-ai-chat-header",d=o("forge-ai-chat-header-expand"),l=o("forge-ai-chat-header-minimize"),m=o("forge-ai-chat-header-clear"),p=o("forge-ai-chat-header-info");s();r();const h={title:"AI Components/Primitives/Chat Header",component:c,argTypes:{titleText:{control:"text",description:"The title text to display in the header slot"},showExpandButton:{control:"boolean",description:"Controls whether the expand button is visible"},showMinimizeButton:{control:"boolean",description:"Controls whether the minimize button is visible"},expanded:{control:"boolean",description:"Indicates the current expanded state for displaying the appropriate expand/collapse icon"},minimizeIcon:{control:{type:"select"},options:["default","panel"],description:"Controls which minimize icon to display"},customIcon:{control:{type:"select"},options:["default","emoji","custom-svg"],description:"Choose icon type to display"},useLongTitle:{control:"boolean",description:"Toggle to test with a long Lorem Ipsum title for styling"}},args:{titleText:"AI Assistant",showExpandButton:!1,showMinimizeButton:!1,expanded:!1,minimizeIcon:"default",customIcon:"default",useLongTitle:!1},render:e=>{const i=()=>{switch(e.customIcon){case"emoji":return n`<div slot="icon" style="font-size: 24px;">🤖</div>`;case"custom-svg":return n`
            <svg slot="icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          `;default:return""}},a=e.useLongTitle?"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.":e.titleText;return n`
      <forge-ai-chat-header
        .titleText=${a}
        .showExpandButton=${e.showExpandButton}
        .showMinimizeButton=${e.showMinimizeButton}
        .expanded=${e.expanded}
        .minimizeIcon=${e.minimizeIcon}
        heading-level="2"
        @forge-ai-chat-header-expand=${d}
        @forge-ai-chat-header-minimize=${l}
        @forge-ai-chat-header-clear=${m}
        @forge-ai-chat-header-info=${p}>
        ${i()}
      </forge-ai-chat-header>
    `}},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const u=["Demo"],w=Object.freeze(Object.defineProperty({__proto__:null,Demo:t,__namedExportsOrder:u,default:h},Symbol.toStringTag,{value:"Module"}));export{w as A,t as D};

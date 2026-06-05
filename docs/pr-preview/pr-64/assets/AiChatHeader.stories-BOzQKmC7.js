import{x as n}from"./iframe-DAVA31Ry.js";import"./ai-chat-header-A0RwQRfB.js";import"./split-button-eUPQq-0Y.js";import{d as h}from"./index-OLDEFci6.js";import{d as m}from"./index-Dff8hBMQ.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,p="forge-ai-chat-header",r=i("forge-ai-chat-header-expand"),s=i("forge-ai-chat-header-minimize"),c=i("forge-ai-chat-header-clear"),l=i("forge-ai-chat-header-info");m();h();const u={title:"AI Components/Primitives/Chat Header",component:p,argTypes:{titleText:{control:"text",description:"The title text to display in the header slot"},showExpandButton:{control:"boolean",description:"Controls whether the expand button is visible"},showMinimizeButton:{control:"boolean",description:"Controls whether the minimize button is visible"},expanded:{control:"boolean",description:"Indicates the current expanded state for displaying the appropriate expand/collapse icon"},minimizeIcon:{control:{type:"select"},options:["default","panel"],description:"Controls which minimize icon to display"},customIcon:{control:{type:"select"},options:["default","emoji","custom-svg"],description:"Choose icon type to display"},useLongTitle:{control:"boolean",description:"Toggle to test with a long Lorem Ipsum title for styling"}},args:{titleText:"AI Assistant",showExpandButton:!1,showMinimizeButton:!1,expanded:!1,minimizeIcon:"default",customIcon:"default",useLongTitle:!1},render:e=>{const a=()=>{switch(e.customIcon){case"emoji":return n`<div slot="icon" style="font-size: 24px;">🤖</div>`;case"custom-svg":return n`
            <svg slot="icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          `;default:return""}},d=e.useLongTitle?"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.":e.titleText;return n`
      <forge-ai-chat-header
        .titleText=${d}
        .showExpandButton=${e.showExpandButton}
        .showMinimizeButton=${e.showMinimizeButton}
        .expanded=${e.expanded}
        .minimizeIcon=${e.minimizeIcon}
        heading-level="2"
        @forge-ai-chat-header-expand=${r}
        @forge-ai-chat-header-minimize=${s}
        @forge-ai-chat-header-clear=${c}
        @forge-ai-chat-header-info=${l}>
        ${a()}
      </forge-ai-chat-header>
    `}},t={},o={args:{showMinimizeButton:!0,showExpandButton:!0},render:e=>{const a=e.useLongTitle?"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.":e.titleText;return n`
      <forge-ai-chat-header
        .titleText=${a}
        .showExpandButton=${e.showExpandButton}
        .showMinimizeButton=${e.showMinimizeButton}
        .expanded=${e.expanded}
        .minimizeIcon=${e.minimizeIcon}
        heading-level="2"
        @forge-ai-chat-header-expand=${r}
        @forge-ai-chat-header-minimize=${s}
        @forge-ai-chat-header-clear=${c}
        @forge-ai-chat-header-info=${l}>
        <forge-icon-button slot="header-actions" aria-label="History">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" />
          </svg>
        </forge-icon-button>
        <forge-icon-button slot="header-actions" aria-label="Settings">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94L14.4 2.81a.488.488 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
          </svg>
        </forge-icon-button>
      </forge-ai-chat-header>
    `}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    showMinimizeButton: true,
    showExpandButton: true
  },
  render: (args: any) => {
    const titleText = args.useLongTitle ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." : args.titleText;
    return html\`
      <forge-ai-chat-header
        .titleText=\${titleText}
        .showExpandButton=\${args.showExpandButton}
        .showMinimizeButton=\${args.showMinimizeButton}
        .expanded=\${args.expanded}
        .minimizeIcon=\${args.minimizeIcon}
        heading-level="2"
        @forge-ai-chat-header-expand=\${expandAction}
        @forge-ai-chat-header-minimize=\${minimizeAction}
        @forge-ai-chat-header-clear=\${clearChatAction}
        @forge-ai-chat-header-info=\${infoAction}>
        <forge-icon-button slot="header-actions" aria-label="History">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" />
          </svg>
        </forge-icon-button>
        <forge-icon-button slot="header-actions" aria-label="Settings">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94L14.4 2.81a.488.488 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
          </svg>
        </forge-icon-button>
      </forge-ai-chat-header>
    \`;
  }
}`,...o.parameters?.docs?.source}}};const g=["Demo","WithHeaderActions"],b=Object.freeze(Object.defineProperty({__proto__:null,Demo:t,WithHeaderActions:o,__namedExportsOrder:g,default:u},Symbol.toStringTag,{value:"Module"}));export{b as A,t as D};

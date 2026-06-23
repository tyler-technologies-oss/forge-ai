import{x as n}from"./iframe-9kznCVoF.js";import"./ai-chat-header-DQcN_KD3.js";import{I as h,t as l,a as p}from"./scaffold-DYMdXgB-.js";import"./split-button-BC2iNXfR.js";import{d as u}from"./index-v1Y9x0q4.js";import{d as g}from"./index-BZY9VN52.js";import{d as f}from"./index-Chv38U1r.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,x="forge-ai-chat-header",r=i("forge-ai-chat-header-expand"),s=i("forge-ai-chat-header-minimize"),c=i("forge-ai-chat-header-clear"),d=i("forge-ai-chat-header-info");f();g();u();h.define([l,p]);const y={title:"AI Components/Primitives/Chat Header",component:x,argTypes:{titleText:{control:"text",description:"The title text to display in the header slot"},showExpandButton:{control:"boolean",description:"Controls whether the expand button is visible"},showMinimizeButton:{control:"boolean",description:"Controls whether the minimize button is visible"},expanded:{control:"boolean",description:"Indicates the current expanded state for displaying the appropriate expand/collapse icon"},minimizeIcon:{control:{type:"select"},options:["default","panel"],description:"Controls which minimize icon to display"},customIcon:{control:{type:"select"},options:["default","emoji","custom-svg"],description:"Choose icon type to display"},useLongTitle:{control:"boolean",description:"Toggle to test with a long Lorem Ipsum title for styling"}},args:{titleText:"AI Assistant",showExpandButton:!1,showMinimizeButton:!1,expanded:!1,minimizeIcon:"default",customIcon:"default",useLongTitle:!1},render:e=>{const a=()=>{switch(e.customIcon){case"emoji":return n`<div slot="icon" style="font-size: 24px;">🤖</div>`;case"custom-svg":return n`
            <svg slot="icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          `;default:return""}},m=e.useLongTitle?"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.":e.titleText;return n`
      <forge-ai-chat-header
        .titleText=${m}
        .showExpandButton=${e.showExpandButton}
        .showMinimizeButton=${e.showMinimizeButton}
        .expanded=${e.expanded}
        .minimizeIcon=${e.minimizeIcon}
        heading-level="2"
        @forge-ai-chat-header-expand=${r}
        @forge-ai-chat-header-minimize=${s}
        @forge-ai-chat-header-clear=${c}
        @forge-ai-chat-header-info=${d}>
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
        @forge-ai-chat-header-info=${d}>
        <forge-icon-button slot="header-actions" aria-label="History">
          <forge-icon name="history"></forge-icon>
        </forge-icon-button>
        <forge-icon-button slot="header-actions" aria-label="Settings">
          <forge-icon name="settings"></forge-icon>
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
          <forge-icon name="history"></forge-icon>
        </forge-icon-button>
        <forge-icon-button slot="header-actions" aria-label="Settings">
          <forge-icon name="settings"></forge-icon>
        </forge-icon-button>
      </forge-ai-chat-header>
    \`;
  }
}`,...o.parameters?.docs?.source}}};const w=["Demo","WithHeaderActions"],C=Object.freeze(Object.defineProperty({__proto__:null,Demo:t,WithHeaderActions:o,__namedExportsOrder:w,default:y},Symbol.toStringTag,{value:"Module"}));export{C as A,t as D};

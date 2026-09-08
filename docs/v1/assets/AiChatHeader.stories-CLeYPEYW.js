import{x as i}from"./iframe-CoCnQeKl.js";import"./ai-chat-header-Gi3SPamd.js";import{I as l,t as p,a as u}from"./scaffold-OFioUjFb.js";import"./split-button-CF7h-P2i.js";import{d as g}from"./index-Dd25s0v8.js";import{d as f}from"./index-BGEq3UeV.js";import{d as y}from"./index-6ehjK4Mi.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,x="forge-ai-chat-header",s=r("forge-ai-chat-header-expand"),c=r("forge-ai-chat-header-minimize"),d=r("forge-ai-chat-header-clear"),h=r("forge-ai-chat-header-info");y();f();g();l.define([p,u]);const b={title:"AI Components/Primitives/Chat Header",component:x,argTypes:{titleText:{control:"text",description:"The title text to display in the header slot"},showExpandButton:{control:"boolean",description:"Controls whether the expand button is visible"},showMinimizeButton:{control:"boolean",description:"Controls whether the minimize button is visible"},expanded:{control:"boolean",description:"Indicates the current expanded state for displaying the appropriate expand/collapse icon"},minimizeIcon:{control:{type:"select"},options:["default","panel"],description:"Controls which minimize icon to display"},customIcon:{control:{type:"select"},options:["default","emoji","custom-svg"],description:"Choose icon type to display"},showConversationsButton:{control:"boolean",description:"Controls whether the conversations button (hamburger menu) is visible"},hasConversationsError:{control:"boolean",description:"Shows an error badge on the conversations button, indicating a failure inside the conversations panel"},useLongTitle:{control:"boolean",description:"Toggle to test with a long Lorem Ipsum title for styling"}},args:{titleText:"AI Assistant",showExpandButton:!1,showMinimizeButton:!1,expanded:!1,minimizeIcon:"default",customIcon:"default",showConversationsButton:!1,hasConversationsError:!1,useLongTitle:!1},render:e=>{const a=()=>{switch(e.customIcon){case"emoji":return i`<div slot="icon" style="font-size: 24px;">🤖</div>`;case"custom-svg":return i`
            <svg slot="icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          `;default:return""}},m=e.useLongTitle?"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.":e.titleText;return i`
      <forge-ai-chat-header
        .titleText=${m}
        .showExpandButton=${e.showExpandButton}
        .showMinimizeButton=${e.showMinimizeButton}
        .expanded=${e.expanded}
        .minimizeIcon=${e.minimizeIcon}
        ?show-conversations-button=${e.showConversationsButton}
        ?has-conversations-error=${e.hasConversationsError}
        heading-level="2"
        @forge-ai-chat-header-expand=${s}
        @forge-ai-chat-header-minimize=${c}
        @forge-ai-chat-header-clear=${d}
        @forge-ai-chat-header-info=${h}>
        ${a()}
      </forge-ai-chat-header>
    `}},o={},t={args:{showConversationsButton:!0,hasConversationsError:!0}},n={args:{showMinimizeButton:!0,showExpandButton:!0},render:e=>{const a=e.useLongTitle?"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.":e.titleText;return i`
      <forge-ai-chat-header
        .titleText=${a}
        .showExpandButton=${e.showExpandButton}
        .showMinimizeButton=${e.showMinimizeButton}
        .expanded=${e.expanded}
        .minimizeIcon=${e.minimizeIcon}
        heading-level="2"
        @forge-ai-chat-header-expand=${s}
        @forge-ai-chat-header-minimize=${c}
        @forge-ai-chat-header-clear=${d}
        @forge-ai-chat-header-info=${h}>
        <forge-icon-button slot="header-actions" density="medium" aria-label="History">
          <forge-icon name="history"></forge-icon>
        </forge-icon-button>
        <forge-icon-button slot="header-actions" density="medium" aria-label="Settings">
          <forge-icon name="settings"></forge-icon>
        </forge-icon-button>
      </forge-ai-chat-header>
    `}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    showConversationsButton: true,
    hasConversationsError: true
  }
}`,...t.parameters?.docs?.source},description:{story:"`hasConversationsError` badges the conversations button so a failed thread load stays visible while\nthe conversations panel is closed.",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
        <forge-icon-button slot="header-actions" density="medium" aria-label="History">
          <forge-icon name="history"></forge-icon>
        </forge-icon-button>
        <forge-icon-button slot="header-actions" density="medium" aria-label="Settings">
          <forge-icon name="settings"></forge-icon>
        </forge-icon-button>
      </forge-ai-chat-header>
    \`;
  }
}`,...n.parameters?.docs?.source}}};const w=["Demo","ConversationsError","WithHeaderActions"],E=Object.freeze(Object.defineProperty({__proto__:null,ConversationsError:t,Demo:o,WithHeaderActions:n,__namedExportsOrder:w,default:b},Symbol.toStringTag,{value:"Module"}));export{E as A,t as C,o as D};

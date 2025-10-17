import{x as n}from"./iframe-R5aeJAG_.js";import"./ai-chat-header-BvAtqDd2.js";import{d as f}from"./index-Cz5DcK3e.js";import{d as m}from"./index-CLk6LiLh.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,l="forge-ai-chat-header",d=c("forge-ai-chat-header-expand"),h=c("forge-ai-chat-header-minimize"),s=c("forge-ai-chat-header-clear"),g=c("forge-ai-chat-header-info");f();m();const p={title:"AI Components/Primitives/Chat Header",component:l,argTypes:{title:{control:"text",description:"The title text to display in the header"}},args:{title:"AI Assistant"},render:e=>n`
      <forge-ai-chat-header
        .title=${e.title}
        @forge-ai-chat-header-expand=${d}
        @forge-ai-chat-header-minimize=${h}
        @forge-ai-chat-header-clear=${s}
        @forge-ai-chat-header-info=${g}>
      </forge-ai-chat-header>
    `},a={},r={args:{title:"My Custom AI Bot"}},t={render:e=>n`
      <forge-ai-chat-header
        .title=${e.title}
        @forge-ai-chat-header-expand=${d}
        @forge-ai-chat-header-minimize=${h}
        @forge-ai-chat-header-clear=${s}
        @forge-ai-chat-header-info=${g}>
        <forge-icon-button slot="header-actions" aria-label="Minimize chat window">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M6 19h12v2H6z" />
          </svg>
        </forge-icon-button>
      </forge-ai-chat-header>
    `},o={render:e=>n`
      <forge-card no-padding raised>
        <forge-ai-chat-header
          .title=${e.title}
          @forge-ai-chat-header-expand=${d}
          @forge-ai-chat-header-minimize=${h}
          @forge-ai-chat-header-clear=${s}
          @forge-ai-chat-header-info=${g}>
        </forge-ai-chat-header>
      </forge-card>
    `},i={args:{title:"Support Assistant"},render:e=>n`
      <forge-card no-padding raised>
        <forge-ai-chat-header
          .title=${e.title}
          @forge-ai-chat-header-expand=${d}
          @forge-ai-chat-header-minimize=${h}
          @forge-ai-chat-header-clear=${s}
          @forge-ai-chat-header-info=${g}>
        </forge-ai-chat-header>
      </forge-card>
    `};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'My Custom AI Bot'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    return html\`
      <forge-ai-chat-header
        .title=\${args.title}
        @forge-ai-chat-header-expand=\${expandAction}
        @forge-ai-chat-header-minimize=\${minimizeAction}
        @forge-ai-chat-header-clear=\${clearChatAction}
        @forge-ai-chat-header-info=\${infoAction}>
        <forge-icon-button slot="header-actions" aria-label="Minimize chat window">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M6 19h12v2H6z" />
          </svg>
        </forge-icon-button>
      </forge-ai-chat-header>
    \`;
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    return html\`
      <forge-card no-padding raised>
        <forge-ai-chat-header
          .title=\${args.title}
          @forge-ai-chat-header-expand=\${expandAction}
          @forge-ai-chat-header-minimize=\${minimizeAction}
          @forge-ai-chat-header-clear=\${clearChatAction}
          @forge-ai-chat-header-info=\${infoAction}>
        </forge-ai-chat-header>
      </forge-card>
    \`;
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Support Assistant'
  },
  render: (args: any) => {
    return html\`
      <forge-card no-padding raised>
        <forge-ai-chat-header
          .title=\${args.title}
          @forge-ai-chat-header-expand=\${expandAction}
          @forge-ai-chat-header-minimize=\${minimizeAction}
          @forge-ai-chat-header-clear=\${clearChatAction}
          @forge-ai-chat-header-info=\${infoAction}>
        </forge-ai-chat-header>
      </forge-card>
    \`;
  }
}`,...i.parameters?.docs?.source}}};const u=["Demo","WithCustomTitle","WithHeaderActions","InCard","InCardWithActions"],C=Object.freeze(Object.defineProperty({__proto__:null,Demo:a,InCard:o,InCardWithActions:i,WithCustomTitle:r,WithHeaderActions:t,__namedExportsOrder:u,default:p},Symbol.toStringTag,{value:"Module"}));export{C as A,a as D};

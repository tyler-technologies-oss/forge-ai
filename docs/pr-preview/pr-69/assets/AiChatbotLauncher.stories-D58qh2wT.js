import{x as l}from"./iframe-B2xilAYM.js";import"./ai-chatbot-launcher-CljHR-I8.js";import{M as c}from"./mock-adapter-uhjSnHDA.js";import{s as y}from"./utils-GKrOiX5w.js";import{I as w,t as T,a as I}from"./scaffold-CbSV0uG5.js";import"./split-button-BC4dKhKV.js";import{d as S}from"./index-CQuofelH.js";import{d as D}from"./index-B_nyuuVG.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,A="forge-ai-chatbot-launcher",k={title:"AI Components/Form Factors/Launcher",component:A,argTypes:{placeholder:{control:"text",description:"Placeholder text for the input field"},titleText:{control:"text",description:"Title text displayed in the welcome view"},descriptionText:{control:"text",description:"Description text displayed below the title"},fileUpload:{control:"select",options:["on","off"],description:"Enable file upload functionality"},voiceInput:{control:"select",options:["on","off"],description:"Enable voice input functionality"},enableReactions:{control:"boolean",description:"Enable thumbs up/down reaction buttons"},disclaimerText:{control:"text",description:"Disclaimer text displayed below the prompt"}},args:{placeholder:"How can I help you today?",titleText:"AI Assistant",descriptionText:"",fileUpload:"on",voiceInput:"on",enableReactions:!1,disclaimerText:"AI can make mistakes. Always verify responses."},render:e=>{const a=new c({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),h=t("forge-ai-chatbot-launcher-connected"),p=t("forge-ai-chatbot-launcher-message-sent"),u=t("forge-ai-chatbot-launcher-message-received"),g=t("forge-ai-chatbot-launcher-tool-call"),m=t("forge-ai-chatbot-launcher-error"),f=t("forge-ai-chatbot-launcher-conversation-start"),b=t("forge-ai-chatbot-launcher-clear"),x=t("forge-ai-chatbot-launcher-response-feedback"),v=t("forge-ai-chatbot-launcher-info"),$=t("forge-ai-chatbot-launcher-agent-change");return l`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=${a}
          placeholder=${e.placeholder}
          title-text=${e.titleText}
          description-text=${e.descriptionText}
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          .disclaimerText=${e.disclaimerText}
          @forge-ai-chatbot-launcher-connected=${h}
          @forge-ai-chatbot-launcher-message-sent=${p}
          @forge-ai-chatbot-launcher-message-received=${u}
          @forge-ai-chatbot-launcher-tool-call=${g}
          @forge-ai-chatbot-launcher-error=${m}
          @forge-ai-chatbot-launcher-conversation-start=${f}
          @forge-ai-chatbot-launcher-clear=${b}
          @forge-ai-chatbot-launcher-response-feedback=${d=>x(d.detail)}
          @forge-ai-chatbot-launcher-info=${v}
          @forge-ai-chatbot-launcher-agent-change=${d=>$(d.detail)}>
        </forge-ai-chatbot-launcher>
      </div>
    `}},o={},r={render:e=>{const a=new c({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return l`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=${a}
          .suggestions=${[{text:"Create report with AI",value:"create-report"},{text:"Create a report from scratch",value:"scratch-report"},{text:"Start with a template",value:"template"}]}
          placeholder=${e.placeholder}
          title-text=${e.titleText}
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          .disclaimerText=${e.disclaimerText}
          @forge-ai-chatbot-launcher-conversation-start=${t("forge-ai-chatbot-launcher-conversation-start")}>
        </forge-ai-chatbot-launcher>
      </div>
    `}},n={parameters:{layout:"fullscreen"},render:e=>{const a=new c({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return l`
      <div style="width: 100%; height: 100vh;">
        <forge-ai-chatbot-launcher
          .adapter=${a}
          placeholder=${e.placeholder}
          title-text=${e.titleText}
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          .disclaimerText=${e.disclaimerText}
          @forge-ai-chatbot-launcher-conversation-start=${t("forge-ai-chatbot-launcher-conversation-start")}>
        </forge-ai-chatbot-launcher>
      </div>
    `}},i={...y,render:e=>{const a=new c({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return l`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=${a}
          placeholder=${e.placeholder}
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          .disclaimerText=${e.disclaimerText}
          @forge-ai-chatbot-launcher-conversation-start=${t("forge-ai-chatbot-launcher-conversation-start")}>
          <svg slot="icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="var(--forge-theme-tertiary)" />
            <path d="M16 8v16M8 16h16" stroke="white" stroke-width="2" stroke-linecap="round" />
          </svg>
          <span slot="heading">Reporting Assistant</span>
          <span slot="description">I'm your Forge AI assistant. What would you like to do?</span>
        </forge-ai-chatbot-launcher>
      </div>
    `}},s={render:e=>{D(),S(),w.define([T,I]);const a=new c({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return l`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=${a}
          placeholder=${e.placeholder}
          title-text=${e.titleText}
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          .disclaimerText=${e.disclaimerText}
          @forge-ai-chatbot-launcher-conversation-start=${t("forge-ai-chatbot-launcher-conversation-start")}>
          <forge-icon-button slot="header-actions" aria-label="History">
            <forge-icon name="history"></forge-icon>
          </forge-icon-button>
          <forge-icon-button slot="header-actions" aria-label="Settings">
            <forge-icon name="settings"></forge-icon>
          </forge-icon-button>
        </forge-ai-chatbot-launcher>
      </div>
    `}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    const suggestions = [{
      text: 'Create report with AI',
      value: 'create-report'
    }, {
      text: 'Create a report from scratch',
      value: 'scratch-report'
    }, {
      text: 'Start with a template',
      value: 'template'
    }] as Suggestion[];
    return html\`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=\${adapter}
          .suggestions=\${suggestions}
          placeholder=\${args.placeholder}
          title-text=\${args.titleText}
          file-upload=\${args.fileUpload}
          voice-input=\${args.voiceInput}
          ?enable-reactions=\${args.enableReactions}
          .disclaimerText=\${args.disclaimerText}
          @forge-ai-chatbot-launcher-conversation-start=\${action('forge-ai-chatbot-launcher-conversation-start')}>
        </forge-ai-chatbot-launcher>
      </div>
    \`;
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    return html\`
      <div style="width: 100%; height: 100vh;">
        <forge-ai-chatbot-launcher
          .adapter=\${adapter}
          placeholder=\${args.placeholder}
          title-text=\${args.titleText}
          file-upload=\${args.fileUpload}
          voice-input=\${args.voiceInput}
          ?enable-reactions=\${args.enableReactions}
          .disclaimerText=\${args.disclaimerText}
          @forge-ai-chatbot-launcher-conversation-start=\${action('forge-ai-chatbot-launcher-conversation-start')}>
        </forge-ai-chatbot-launcher>
      </div>
    \`;
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...standaloneStoryParams,
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    return html\`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=\${adapter}
          placeholder=\${args.placeholder}
          file-upload=\${args.fileUpload}
          voice-input=\${args.voiceInput}
          ?enable-reactions=\${args.enableReactions}
          .disclaimerText=\${args.disclaimerText}
          @forge-ai-chatbot-launcher-conversation-start=\${action('forge-ai-chatbot-launcher-conversation-start')}>
          <svg slot="icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="var(--forge-theme-tertiary)" />
            <path d="M16 8v16M8 16h16" stroke="white" stroke-width="2" stroke-linecap="round" />
          </svg>
          <span slot="heading">Reporting Assistant</span>
          <span slot="description">I'm your Forge AI assistant. What would you like to do?</span>
        </forge-ai-chatbot-launcher>
      </div>
    \`;
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    defineIconButtonComponent();
    defineIconComponent();
    IconRegistry.define([tylIconHistory, tylIconSettings]);
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    return html\`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=\${adapter}
          placeholder=\${args.placeholder}
          title-text=\${args.titleText}
          file-upload=\${args.fileUpload}
          voice-input=\${args.voiceInput}
          ?enable-reactions=\${args.enableReactions}
          .disclaimerText=\${args.disclaimerText}
          @forge-ai-chatbot-launcher-conversation-start=\${action('forge-ai-chatbot-launcher-conversation-start')}>
          <forge-icon-button slot="header-actions" aria-label="History">
            <forge-icon name="history"></forge-icon>
          </forge-icon-button>
          <forge-icon-button slot="header-actions" aria-label="Settings">
            <forge-icon name="settings"></forge-icon>
          </forge-icon-button>
        </forge-ai-chatbot-launcher>
      </div>
    \`;
  }
}`,...s.parameters?.docs?.source}}};const C=["Demo","WithSuggestions","FullPage","WithCustomHeader","WithHeaderActions"],E=Object.freeze(Object.defineProperty({__proto__:null,Demo:o,FullPage:n,WithCustomHeader:i,WithHeaderActions:s,WithSuggestions:r,__namedExportsOrder:C,default:k},Symbol.toStringTag,{value:"Module"}));export{E as A};

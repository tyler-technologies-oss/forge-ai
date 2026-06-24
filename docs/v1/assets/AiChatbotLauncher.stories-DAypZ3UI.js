import{x as n}from"./iframe-B1h2trez.js";import"./ai-chatbot-launcher-Bu85P2z9.js";import{M as r}from"./mock-adapter-B6avymXj.js";import{s as T}from"./utils-WNoYL-ZF.js";import{I as y,t as S,a as I}from"./scaffold-CQ5khyIx.js";import"./split-button-DmiFhRTR.js";import{d as D}from"./index-C4Rc2gH3.js";import{d as R}from"./index-DUp4uouh.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,A="forge-ai-chatbot-launcher",C={title:"AI Components/Form Factors/Launcher",component:A,argTypes:{placeholder:{control:"text",description:"Placeholder text for the input field"},titleText:{control:"text",description:"Title text displayed in the welcome view"},descriptionText:{control:"text",description:"Description text displayed below the title"},fileUpload:{control:"select",options:["on","off"],description:"Enable file upload functionality"},voiceInput:{control:"select",options:["on","off"],description:"Enable voice input functionality"},enableReactions:{control:"boolean",description:"Enable thumbs up/down reaction buttons"},disclaimerText:{control:"text",description:"Disclaimer text displayed below the prompt"},threadName:{control:"text",description:"Thread name displayed in conversation view breadcrumb"},showThreadRename:{control:"boolean",description:"Show rename option in thread actions menu"},showThreadDelete:{control:"boolean",description:"Show delete option in thread actions menu"}},args:{placeholder:"How can I help you today?",titleText:"AI Assistant",descriptionText:"",fileUpload:"on",voiceInput:"on",enableReactions:!1,disclaimerText:"AI can make mistakes. Always verify responses."},render:e=>{const a=new r({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),p=t("forge-ai-chatbot-launcher-connected"),m=t("forge-ai-chatbot-launcher-message-sent"),f=t("forge-ai-chatbot-launcher-message-received"),o=t("forge-ai-chatbot-launcher-tool-call"),i=t("forge-ai-chatbot-launcher-error"),b=t("forge-ai-chatbot-launcher-conversation-start"),x=t("forge-ai-chatbot-launcher-clear"),v=t("forge-ai-chatbot-launcher-response-feedback"),$=t("forge-ai-chatbot-launcher-info"),w=t("forge-ai-chatbot-launcher-agent-change");return n`
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
          @forge-ai-chatbot-launcher-connected=${p}
          @forge-ai-chatbot-launcher-message-sent=${m}
          @forge-ai-chatbot-launcher-message-received=${f}
          @forge-ai-chatbot-launcher-tool-call=${o}
          @forge-ai-chatbot-launcher-error=${i}
          @forge-ai-chatbot-launcher-conversation-start=${b}
          @forge-ai-chatbot-launcher-clear=${x}
          @forge-ai-chatbot-launcher-response-feedback=${g=>v(g.detail)}
          @forge-ai-chatbot-launcher-info=${$}
          @forge-ai-chatbot-launcher-agent-change=${g=>w(g.detail)}>
        </forge-ai-chatbot-launcher>
      </div>
    `}},s={},c={args:{threadName:"Discussion about project requirements and timeline",showThreadRename:!0,showThreadDelete:!0},render:e=>{const a=new r({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),p=t("forge-ai-chatbot-launcher-thread-rename"),m=t("forge-ai-chatbot-launcher-thread-delete");return n`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=${a}
          .agentInfo=${{threadId:"thread-12345"}}
          placeholder=${e.placeholder}
          title-text=${e.titleText}
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          .disclaimerText=${e.disclaimerText}
          thread-name=${e.threadName}
          ?show-thread-rename=${e.showThreadRename}
          ?show-thread-delete=${e.showThreadDelete}
          @forge-ai-chatbot-launcher-thread-rename=${o=>{p(o.detail);const i=o.target;i.threadName=o.detail.newTitle,setTimeout(()=>{t("onSuccess")("Rename succeeded"),o.detail.onSuccess()},500)}}
          @forge-ai-chatbot-launcher-thread-delete=${o=>{m(o.detail);const i=o.target;i.threadName="",setTimeout(()=>{t("onSuccess")("Delete succeeded"),o.detail.onSuccess()},500)}}
          @forge-ai-chatbot-launcher-conversation-start=${t("forge-ai-chatbot-launcher-conversation-start")}>
        </forge-ai-chatbot-launcher>
      </div>
    `}},l={render:e=>{const a=new r({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return n`
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
    `}},d={parameters:{layout:"fullscreen"},render:e=>{const a=new r({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return n`
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
    `}},h={...T,render:e=>{const a=new r({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return n`
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
    `}},u={render:e=>{R(),D(),y.define([S,I]);const a=new r({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return n`
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
    `}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    threadName: 'Discussion about project requirements and timeline',
    showThreadRename: true,
    showThreadDelete: true
  },
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    const onThreadRename = action('forge-ai-chatbot-launcher-thread-rename');
    const onThreadDelete = action('forge-ai-chatbot-launcher-thread-delete');
    const agentInfo = {
      threadId: 'thread-12345'
    };
    return html\`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=\${adapter}
          .agentInfo=\${agentInfo}
          placeholder=\${args.placeholder}
          title-text=\${args.titleText}
          file-upload=\${args.fileUpload}
          voice-input=\${args.voiceInput}
          ?enable-reactions=\${args.enableReactions}
          .disclaimerText=\${args.disclaimerText}
          thread-name=\${args.threadName}
          ?show-thread-rename=\${args.showThreadRename}
          ?show-thread-delete=\${args.showThreadDelete}
          @forge-ai-chatbot-launcher-thread-rename=\${(evt: CustomEvent) => {
      onThreadRename(evt.detail);
      const launcher = evt.target as any;
      launcher.threadName = evt.detail.newTitle;
      setTimeout(() => {
        action('onSuccess')('Rename succeeded');
        evt.detail.onSuccess();
      }, 500);
    }}
          @forge-ai-chatbot-launcher-thread-delete=\${(evt: CustomEvent) => {
      onThreadDelete(evt.detail);
      const launcher = evt.target as any;
      launcher.threadName = '';
      setTimeout(() => {
        action('onSuccess')('Delete succeeded');
        evt.detail.onSuccess();
      }, 500);
    }}
          @forge-ai-chatbot-launcher-conversation-start=\${action('forge-ai-chatbot-launcher-conversation-start')}>
        </forge-ai-chatbot-launcher>
      </div>
    \`;
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const k=["Demo","WithThreadName","WithSuggestions","FullPage","WithCustomHeader","WithHeaderActions"],F=Object.freeze(Object.defineProperty({__proto__:null,Demo:s,FullPage:d,WithCustomHeader:h,WithHeaderActions:u,WithSuggestions:l,WithThreadName:c,__namedExportsOrder:k,default:C},Symbol.toStringTag,{value:"Module"}));export{F as A};

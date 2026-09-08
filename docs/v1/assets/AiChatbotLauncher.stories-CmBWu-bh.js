import{x as h}from"./iframe-DBu_aRNF.js";import{n as I}from"./ref-DjOzj-cY.js";import"./ai-chatbot-launcher-D2XCVhCo.js";import{M as d}from"./mock-adapter-BpgeerXX.js";import{s as k}from"./utils-Cz69Y9xv.js";import{I as E,t as H,a as L}from"./scaffold-BDL36_yV.js";import"./split-button-DhZRVN58.js";import{d as U}from"./index-Bd8Vbgws.js";import{d as B}from"./index-DwFyaHhf.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,N="forge-ai-chatbot-launcher",O={title:"AI Components/Form Factors/Launcher",component:N,argTypes:{placeholder:{control:"text",description:"Placeholder text for the input field"},titleText:{control:"text",description:"Title text displayed in the welcome view"},descriptionText:{control:"text",description:"Description text displayed below the title"},fileUpload:{control:"select",options:["on","off"],description:"Enable file upload functionality"},voiceInput:{control:"select",options:["on","off"],description:"Enable voice input functionality"},exportOption:{control:"select",options:["on","off"],description:"Control export option visibility"},enableReactions:{control:"boolean",description:"Enable thumbs up/down reaction buttons"},disclaimerText:{control:"text",description:"Disclaimer text displayed below the prompt"},threadName:{control:"text",description:"Thread name displayed in conversation view breadcrumb"},showHistoryButton:{control:"boolean",description:"Show the prompt bar's chat history button and its popover"},showThreadRename:{control:"boolean",description:"Show rename option in thread actions menu"},showThreadDelete:{control:"boolean",description:"Show delete option in thread actions menu"},totalThreads:{control:"number",description:"Total number of chats available for the history popover/view. Greater than loaded threads enables infinite scroll"},threadsLoading:{control:"boolean",description:"Whether chats are loading, used to show a spinner on the history button and disable it"},threadsError:{control:"text",description:"Message describing a failed chat history load. Badges the history button and shows the message with a retry in the popover/view"}},args:{placeholder:"How can I help you today?",titleText:"AI Assistant",descriptionText:"",fileUpload:"on",voiceInput:"on",exportOption:"on",enableReactions:!1,disclaimerText:"AI can make mistakes. Always verify responses."},render:e=>{const r=new d({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),o=a("forge-ai-chatbot-launcher-connected"),s=a("forge-ai-chatbot-launcher-message-sent"),i=a("forge-ai-chatbot-launcher-message-received"),t=a("forge-ai-chatbot-launcher-tool-call"),l=a("forge-ai-chatbot-launcher-error"),n=a("forge-ai-chatbot-launcher-conversation-start"),c=a("forge-ai-chatbot-launcher-clear"),u=a("forge-ai-chatbot-launcher-response-feedback"),y=a("forge-ai-chatbot-launcher-info"),A=a("forge-ai-chatbot-launcher-agent-change");return h`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=${r}
          placeholder=${e.placeholder}
          title-text=${e.titleText}
          description-text=${e.descriptionText}
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          export-option=${e.exportOption}
          ?enable-reactions=${e.enableReactions}
          .disclaimerText=${e.disclaimerText}
          @forge-ai-chatbot-launcher-connected=${o}
          @forge-ai-chatbot-launcher-message-sent=${s}
          @forge-ai-chatbot-launcher-message-received=${i}
          @forge-ai-chatbot-launcher-tool-call=${t}
          @forge-ai-chatbot-launcher-error=${l}
          @forge-ai-chatbot-launcher-conversation-start=${n}
          @forge-ai-chatbot-launcher-clear=${c}
          @forge-ai-chatbot-launcher-response-feedback=${S=>u(S.detail)}
          @forge-ai-chatbot-launcher-info=${y}
          @forge-ai-chatbot-launcher-agent-change=${S=>A(S.detail)}>
        </forge-ai-chatbot-launcher>
      </div>
    `}},f={},b={args:{threadName:"Discussion about project requirements and timeline",showThreadRename:!0,showThreadDelete:!0},render:e=>{const r=new d({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),o=a("forge-ai-chatbot-launcher-thread-rename"),s=a("forge-ai-chatbot-launcher-thread-delete");return h`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=${r}
          .agentInfo=${{threadId:"thread-12345"}}
          placeholder=${e.placeholder}
          title-text=${e.titleText}
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          export-option=${e.exportOption}
          ?enable-reactions=${e.enableReactions}
          .disclaimerText=${e.disclaimerText}
          thread-name=${e.threadName}
          ?show-thread-rename=${e.showThreadRename}
          ?show-thread-delete=${e.showThreadDelete}
          @forge-ai-chatbot-launcher-thread-rename=${t=>{o(t.detail);const l=t.target;l.threadName=t.detail.newTitle,setTimeout(()=>{a("onSuccess")("Rename succeeded"),t.detail.onSuccess()},500)}}
          @forge-ai-chatbot-launcher-thread-delete=${t=>{s(t.detail);const l=t.target;l.threadName="",setTimeout(()=>{a("onSuccess")("Delete succeeded"),t.detail.onSuccess()},500)}}
          @forge-ai-chatbot-launcher-conversation-start=${a("forge-ai-chatbot-launcher-conversation-start")}>
        </forge-ai-chatbot-launcher>
      </div>
    `}},$={render:e=>{const r=new d({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return h`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=${r}
          .suggestions=${[{text:"Create report with AI",value:"create-report"},{text:"Create a report from scratch",value:"scratch-report"},{text:"Start with a template",value:"template"}]}
          placeholder=${e.placeholder}
          title-text=${e.titleText}
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          .disclaimerText=${e.disclaimerText}
          @forge-ai-chatbot-launcher-conversation-start=${a("forge-ai-chatbot-launcher-conversation-start")}>
        </forge-ai-chatbot-launcher>
      </div>
    `}},w={parameters:{layout:"fullscreen"},render:e=>{const r=new d({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return h`
      <div style="width: 100%; height: 100vh;">
        <forge-ai-chatbot-launcher
          .adapter=${r}
          placeholder=${e.placeholder}
          title-text=${e.titleText}
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          .disclaimerText=${e.disclaimerText}
          @forge-ai-chatbot-launcher-conversation-start=${a("forge-ai-chatbot-launcher-conversation-start")}>
        </forge-ai-chatbot-launcher>
      </div>
    `}},v={...k,render:e=>{const r=new d({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return h`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=${r}
          placeholder=${e.placeholder}
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          .disclaimerText=${e.disclaimerText}
          @forge-ai-chatbot-launcher-conversation-start=${a("forge-ai-chatbot-launcher-conversation-start")}>
          <svg slot="icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="var(--forge-theme-tertiary)" />
            <path d="M16 8v16M8 16h16" stroke="white" stroke-width="2" stroke-linecap="round" />
          </svg>
          <span slot="heading">Reporting Assistant</span>
          <span slot="description">I'm your Forge AI assistant. What would you like to do?</span>
        </forge-ai-chatbot-launcher>
      </div>
    `}},C=["API integration help","Debugging production issue","Performance optimization","Database schema design","Testing strategies","Code review feedback","Deployment questions","Security best practices","UI/UX improvements","Refactoring advice"],R=[0,.5,2,6,12,20,30,36,72,120,240,504,1080,2160,4800,24*400],D=(e,r=0)=>Array.from({length:e},(o,s)=>{const i=r+s,t=R[i%R.length];return{id:`thread-${i+1}`,title:C[i%C.length],createdAt:new Date(Date.now()-t*36e5).toISOString()}}),M=e=>{const r=Date.now()-864e5;return[{id:`${e.id}-msg-1`,role:"user",content:`Can you help me with ${e.title.toLowerCase()}?`,timestamp:r,status:"complete"},{id:`${e.id}-msg-2`,role:"assistant",content:`Of course! Here's what I'd suggest for ${e.title.toLowerCase()}. Let me know if you'd like more detail.`,timestamp:r+5e3,status:"complete"}]},T={args:{showHistoryButton:!0,showThreadRename:!0,showThreadDelete:!0,totalThreads:24,threadsLoading:!1},render:e=>{const r=new d({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),o=D(24),s=new Map(o.map(t=>[t.id,M(t)]));let i=null;return h`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          ${I(t=>{i=t})}
          .adapter=${r}
          placeholder=${e.placeholder}
          title-text=${e.titleText}
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          .disclaimerText=${e.disclaimerText}
          .threads=${o.slice(0,10)}
          total-threads=${e.totalThreads}
          ?threads-loading=${e.threadsLoading}
          ?show-history-button=${e.showHistoryButton}
          selected-thread-id="thread-3"
          ?show-thread-rename=${e.showThreadRename}
          ?show-thread-delete=${e.showThreadDelete}
          @forge-ai-chatbot-launcher-conversation-start=${a("forge-ai-chatbot-launcher-conversation-start")}
          @forge-ai-chatbot-launcher-thread-select=${async t=>{a("forge-ai-chatbot-launcher-thread-select")(t.detail);const{id:l}=t.detail,n=s.get(l)??[];await i?.setThreadState({threadId:l,messages:n},{skipAnimation:!0})}}
          @forge-ai-chatbot-launcher-new-chat=${a("forge-ai-chatbot-launcher-new-chat")}
          @forge-ai-chatbot-launcher-thread-search=${t=>{const{query:l,setResults:n}=t.detail;setTimeout(()=>{n(o.filter(c=>c.title.toLowerCase().includes(l.toLowerCase())).slice(0,10))},300)}}
          @forge-ai-chatbot-launcher-thread-load-more=${t=>{const{query:l,appendResults:n}=t.detail;setTimeout(()=>{const c=l?o.filter(y=>y.title.toLowerCase().includes(l.toLowerCase())):o,u=i?.threads.length??0;n(c.slice(u,u+10))},500)}}
          @forge-ai-chatbot-launcher-thread-rename=${t=>{a("forge-ai-chatbot-launcher-thread-rename")(t.detail),setTimeout(()=>t.detail.onSuccess(),500)}}
          @forge-ai-chatbot-launcher-thread-delete=${t=>{a("forge-ai-chatbot-launcher-thread-delete")(t.detail),setTimeout(()=>t.detail.onSuccess(),500)}}>
        </forge-ai-chatbot-launcher>
      </div>
    `}},p={args:{showHistoryButton:!0,totalThreads:0},render:e=>{const r=new d({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return h`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=${r}
          placeholder=${e.placeholder}
          title-text=${e.titleText}
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          .disclaimerText=${e.disclaimerText}
          .threads=${[]}
          total-threads=${e.totalThreads}
          ?show-history-button=${e.showHistoryButton}
          @forge-ai-chatbot-launcher-thread-search=${o=>{a("forge-ai-chatbot-launcher-thread-search")(o.detail),o.detail.setResults([])}}
          @forge-ai-chatbot-launcher-conversation-start=${a("forge-ai-chatbot-launcher-conversation-start")}
          @forge-ai-chatbot-launcher-new-chat=${a("forge-ai-chatbot-launcher-new-chat")}>
        </forge-ai-chatbot-launcher>
      </div>
    `}},g={args:{showHistoryButton:!0,totalThreads:10},render:e=>{const r=new d({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),o=D(10),s=new Map(o.map(n=>[n.id,M(n)])),i=new Set;let t=null;const l=async n=>{if(await new Promise(c=>setTimeout(c,600)),!i.has(n))throw i.add(n),new Error("403 Forbidden - access to this chat was revoked");return s.get(n)??[]};return h`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          ${I(n=>{t=n})}
          .adapter=${r}
          placeholder=${e.placeholder}
          title-text=${e.titleText}
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          .disclaimerText=${e.disclaimerText}
          .threads=${o}
          total-threads=${e.totalThreads}
          ?show-history-button=${e.showHistoryButton}
          @forge-ai-chatbot-launcher-thread-select=${async n=>{a("forge-ai-chatbot-launcher-thread-select")(n.detail),n.preventDefault();const{id:c}=n.detail;t.threadsError=void 0,t.threadsLoading=!0;try{const u=await l(c);t.selectedThreadId=c,await t?.setThreadState({threadId:c,messages:u},{skipAnimation:!0}),a("host commit")({id:c,viewState:t?.viewState})}catch(u){t.threadsError=u.message,a("host load failed")({id:c,error:u.message,selectedThreadId:t?.selectedThreadId,viewState:t?.viewState})}finally{t.threadsLoading=!1}}}
          @forge-ai-chatbot-launcher-thread-retry=${()=>{a("forge-ai-chatbot-launcher-thread-retry")(),t.threadsError=void 0}}
          @forge-ai-chatbot-launcher-conversation-start=${a("forge-ai-chatbot-launcher-conversation-start")}
          @forge-ai-chatbot-launcher-new-chat=${a("forge-ai-chatbot-launcher-new-chat")}>
        </forge-ai-chatbot-launcher>
      </div>
    `}},m={args:{showHistoryButton:!0,threadsError:"Could not load your chat history.",totalThreads:0},render:e=>{const r=new d({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),o=D(10);let s=null;return h`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          ${I(i=>{s=i})}
          .adapter=${r}
          placeholder=${e.placeholder}
          title-text=${e.titleText}
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          .disclaimerText=${e.disclaimerText}
          .threads=${[]}
          total-threads=${e.totalThreads}
          ?show-history-button=${e.showHistoryButton}
          .threadsError=${e.threadsError}
          @forge-ai-chatbot-launcher-thread-retry=${()=>{a("forge-ai-chatbot-launcher-thread-retry")(),s&&(s.threadsError=void 0,s.threadsLoading=!0,setTimeout(()=>{s.threads=o,s.totalThreads=o.length,s.threadsLoading=!1,a("retry succeeded")({threads:o.length})},800))}}
          @forge-ai-chatbot-launcher-thread-select=${a("forge-ai-chatbot-launcher-thread-select")}
          @forge-ai-chatbot-launcher-conversation-start=${a("forge-ai-chatbot-launcher-conversation-start")}>
        </forge-ai-chatbot-launcher>
      </div>
    `}},x={render:e=>{B(),U(),E.define([H,L]);const r=new d({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return h`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=${r}
          placeholder=${e.placeholder}
          title-text=${e.titleText}
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          .disclaimerText=${e.disclaimerText}
          @forge-ai-chatbot-launcher-conversation-start=${a("forge-ai-chatbot-launcher-conversation-start")}>
          <forge-icon-button slot="header-actions" density="medium" aria-label="History">
            <forge-icon name="history"></forge-icon>
          </forge-icon-button>
          <forge-icon-button slot="header-actions" density="medium" aria-label="Settings">
            <forge-icon name="settings"></forge-icon>
          </forge-icon-button>
        </forge-ai-chatbot-launcher>
      </div>
    `}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"{}",...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
          export-option=\${args.exportOption}
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
}`,...b.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    showHistoryButton: true,
    showThreadRename: true,
    showThreadDelete: true,
    totalThreads: 24,
    threadsLoading: false
  },
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    const allThreads = generateThreads(24);
    const threadMessagesMap = new Map<string, ChatMessage[]>(allThreads.map(thread => [thread.id, createMockMessagesForThread(thread)]));
    let launcher: AiChatbotLauncherComponent | null = null;
    return html\`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          \${ref(el => {
      launcher = el as AiChatbotLauncherComponent;
    })}
          .adapter=\${adapter}
          placeholder=\${args.placeholder}
          title-text=\${args.titleText}
          file-upload=\${args.fileUpload}
          voice-input=\${args.voiceInput}
          ?enable-reactions=\${args.enableReactions}
          .disclaimerText=\${args.disclaimerText}
          .threads=\${allThreads.slice(0, 10)}
          total-threads=\${args.totalThreads}
          ?threads-loading=\${args.threadsLoading}
          ?show-history-button=\${args.showHistoryButton}
          selected-thread-id="thread-3"
          ?show-thread-rename=\${args.showThreadRename}
          ?show-thread-delete=\${args.showThreadDelete}
          @forge-ai-chatbot-launcher-conversation-start=\${action('forge-ai-chatbot-launcher-conversation-start')}
          @forge-ai-chatbot-launcher-thread-select=\${async (evt: CustomEvent) => {
      action('forge-ai-chatbot-launcher-thread-select')(evt.detail);
      const {
        id
      } = evt.detail;
      const messages = threadMessagesMap.get(id) ?? [];
      await launcher?.setThreadState({
        threadId: id,
        messages
      }, {
        skipAnimation: true
      });
    }}
          @forge-ai-chatbot-launcher-new-chat=\${action('forge-ai-chatbot-launcher-new-chat')}
          @forge-ai-chatbot-launcher-thread-search=\${(evt: CustomEvent) => {
      const {
        query,
        setResults
      } = evt.detail;
      setTimeout(() => {
        setResults(allThreads.filter(t => t.title.toLowerCase().includes(query.toLowerCase())).slice(0, 10));
      }, 300);
    }}
          @forge-ai-chatbot-launcher-thread-load-more=\${(evt: CustomEvent) => {
      const {
        query,
        appendResults
      } = evt.detail;
      setTimeout(() => {
        const source = query ? allThreads.filter(t => t.title.toLowerCase().includes(query.toLowerCase())) : allThreads;
        const loadedCount = launcher?.threads.length ?? 0;
        appendResults(source.slice(loadedCount, loadedCount + 10));
      }, 500);
    }}
          @forge-ai-chatbot-launcher-thread-rename=\${(evt: CustomEvent) => {
      action('forge-ai-chatbot-launcher-thread-rename')(evt.detail);
      setTimeout(() => evt.detail.onSuccess(), 500);
    }}
          @forge-ai-chatbot-launcher-thread-delete=\${(evt: CustomEvent) => {
      action('forge-ai-chatbot-launcher-thread-delete')(evt.detail);
      setTimeout(() => evt.detail.onSuccess(), 500);
    }}>
        </forge-ai-chatbot-launcher>
      </div>
    \`;
  }
}`,...T.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    showHistoryButton: true,
    totalThreads: 0
  },
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
          title-text=\${args.titleText}
          file-upload=\${args.fileUpload}
          voice-input=\${args.voiceInput}
          ?enable-reactions=\${args.enableReactions}
          .disclaimerText=\${args.disclaimerText}
          .threads=\${[]}
          total-threads=\${args.totalThreads}
          ?show-history-button=\${args.showHistoryButton}
          @forge-ai-chatbot-launcher-thread-search=\${(evt: CustomEvent) => {
      action('forge-ai-chatbot-launcher-thread-search')(evt.detail);
      evt.detail.setResults([]);
    }}
          @forge-ai-chatbot-launcher-conversation-start=\${action('forge-ai-chatbot-launcher-conversation-start')}
          @forge-ai-chatbot-launcher-new-chat=\${action('forge-ai-chatbot-launcher-new-chat')}>
        </forge-ai-chatbot-launcher>
      </div>
    \`;
  }
}`,...p.parameters?.docs?.source},description:{story:`A first-time user with no chats. \`showHistoryButton\` keeps the entry point in the prompt bar, so the
popover opens on "No chats yet" instead of the button removing itself. "View all" reaches the same
empty state in the full history view, where searching shows "No chats found" — the other empty
message, which the launcher could not reach at all before the button became host-controlled.`,...p.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    showHistoryButton: true,
    totalThreads: 10
  },
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    const allThreads = generateThreads(10);
    const threadMessagesMap = new Map<string, ChatMessage[]>(allThreads.map(thread => [thread.id, createMockMessagesForThread(thread)]));
    const attemptedThreadIds = new Set<string>();
    let launcher: AiChatbotLauncherComponent | null = null;
    const loadThread = async (id: string): Promise<ChatMessage[]> => {
      await new Promise(resolve => setTimeout(resolve, 600));
      if (!attemptedThreadIds.has(id)) {
        attemptedThreadIds.add(id);
        throw new Error('403 Forbidden - access to this chat was revoked');
      }
      return threadMessagesMap.get(id) ?? [];
    };
    return html\`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          \${ref(el => {
      launcher = el as AiChatbotLauncherComponent;
    })}
          .adapter=\${adapter}
          placeholder=\${args.placeholder}
          title-text=\${args.titleText}
          file-upload=\${args.fileUpload}
          voice-input=\${args.voiceInput}
          ?enable-reactions=\${args.enableReactions}
          .disclaimerText=\${args.disclaimerText}
          .threads=\${allThreads}
          total-threads=\${args.totalThreads}
          ?show-history-button=\${args.showHistoryButton}
          @forge-ai-chatbot-launcher-thread-select=\${async (evt: CustomEvent) => {
      action('forge-ai-chatbot-launcher-thread-select')(evt.detail);
      evt.preventDefault();
      const {
        id
      } = evt.detail;
      launcher!.threadsError = undefined;
      launcher!.threadsLoading = true;
      try {
        const messages = await loadThread(id);
        launcher!.selectedThreadId = id;
        // setThreadState transitions to the conversation view on its own once it has messages.
        await launcher?.setThreadState({
          threadId: id,
          messages
        }, {
          skipAnimation: true
        });
        action('host commit')({
          id,
          viewState: launcher?.viewState
        });
      } catch (error) {
        // Nothing to undo - the view state and selectedThreadId were never touched.
        launcher!.threadsError = (error as Error).message;
        action('host load failed')({
          id,
          error: (error as Error).message,
          selectedThreadId: launcher?.selectedThreadId,
          viewState: launcher?.viewState
        });
      } finally {
        launcher!.threadsLoading = false;
      }
    }}
          @forge-ai-chatbot-launcher-thread-retry=\${() => {
      action('forge-ai-chatbot-launcher-thread-retry')();
      launcher!.threadsError = undefined;
    }}
          @forge-ai-chatbot-launcher-conversation-start=\${action('forge-ai-chatbot-launcher-conversation-start')}
          @forge-ai-chatbot-launcher-new-chat=\${action('forge-ai-chatbot-launcher-new-chat')}>
        </forge-ai-chatbot-launcher>
      </div>
    \`;
  }
}`,...g.parameters?.docs?.source},description:{story:"The host rejects the select by calling preventDefault(), then owns the commit. The first thread\nclicked always fails to load, so `selectedThreadId` and the welcome view must stay untouched;\nclicking the same thread again succeeds and the host commits both.",...g.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    showHistoryButton: true,
    threadsError: 'Could not load your chat history.',
    totalThreads: 0
  },
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    const allThreads = generateThreads(10);
    let launcher: AiChatbotLauncherComponent | null = null;
    return html\`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          \${ref(el => {
      launcher = el as AiChatbotLauncherComponent;
    })}
          .adapter=\${adapter}
          placeholder=\${args.placeholder}
          title-text=\${args.titleText}
          file-upload=\${args.fileUpload}
          voice-input=\${args.voiceInput}
          ?enable-reactions=\${args.enableReactions}
          .disclaimerText=\${args.disclaimerText}
          .threads=\${[]}
          total-threads=\${args.totalThreads}
          ?show-history-button=\${args.showHistoryButton}
          .threadsError=\${args.threadsError}
          @forge-ai-chatbot-launcher-thread-retry=\${() => {
      action('forge-ai-chatbot-launcher-thread-retry')();
      if (!launcher) {
        return;
      }
      launcher.threadsError = undefined;
      launcher.threadsLoading = true;
      setTimeout(() => {
        launcher!.threads = allThreads;
        launcher!.totalThreads = allThreads.length;
        launcher!.threadsLoading = false;
        action('retry succeeded')({
          threads: allThreads.length
        });
      }, 800);
    }}
          @forge-ai-chatbot-launcher-thread-select=\${action('forge-ai-chatbot-launcher-thread-select')}
          @forge-ai-chatbot-launcher-conversation-start=\${action('forge-ai-chatbot-launcher-conversation-start')}>
        </forge-ai-chatbot-launcher>
      </div>
    \`;
  }
}`,...m.parameters?.docs?.source},description:{story:`A failed history load with no chats loaded. The history button picks up an error badge, and the
popover shows the error with a retry instead of the "no chats yet" empty state. Retry succeeds.`,...m.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
          <forge-icon-button slot="header-actions" density="medium" aria-label="History">
            <forge-icon name="history"></forge-icon>
          </forge-icon-button>
          <forge-icon-button slot="header-actions" density="medium" aria-label="Settings">
            <forge-icon name="settings"></forge-icon>
          </forge-icon-button>
        </forge-ai-chatbot-launcher>
      </div>
    \`;
  }
}`,...x.parameters?.docs?.source}}};const _=["Demo","WithThreadName","WithSuggestions","FullPage","WithCustomHeader","WithHistory","NoChats","ThreadSelectRejection","ThreadHistoryError","WithHeaderActions"],X=Object.freeze(Object.defineProperty({__proto__:null,Demo:f,FullPage:w,NoChats:p,ThreadHistoryError:m,ThreadSelectRejection:g,WithCustomHeader:v,WithHeaderActions:x,WithHistory:T,WithSuggestions:$,WithThreadName:b,__namedExportsOrder:_,default:O},Symbol.toStringTag,{value:"Module"}));export{X as A,p as N,g as T,T as W,m as a};

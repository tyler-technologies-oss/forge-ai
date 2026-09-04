import{x as c}from"./iframe-2YRMZZJu.js";import{n as D}from"./ref--LeVE9LM.js";import"./ai-chatbot-launcher-DoMuU9Y1.js";import{M as d}from"./mock-adapter-BpgeerXX.js";import{s as I}from"./utils-BX4gMDEK.js";import{I as C,t as R,a as A}from"./scaffold-IK8GJKlF.js";import"./split-button-E0rCKJjL.js";import{d as M}from"./index-BBOm6aoe.js";import{d as k}from"./index-DfxJVYTz.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,L="forge-ai-chatbot-launcher",U={title:"AI Components/Form Factors/Launcher",component:L,argTypes:{placeholder:{control:"text",description:"Placeholder text for the input field"},titleText:{control:"text",description:"Title text displayed in the welcome view"},descriptionText:{control:"text",description:"Description text displayed below the title"},fileUpload:{control:"select",options:["on","off"],description:"Enable file upload functionality"},voiceInput:{control:"select",options:["on","off"],description:"Enable voice input functionality"},exportOption:{control:"select",options:["on","off"],description:"Control export option visibility"},enableReactions:{control:"boolean",description:"Enable thumbs up/down reaction buttons"},disclaimerText:{control:"text",description:"Disclaimer text displayed below the prompt"},threadName:{control:"text",description:"Thread name displayed in conversation view breadcrumb"},showThreadRename:{control:"boolean",description:"Show rename option in thread actions menu"},showThreadDelete:{control:"boolean",description:"Show delete option in thread actions menu"},totalThreads:{control:"number",description:"Total number of chats available for the history popover/view. Greater than loaded threads enables infinite scroll"},threadsLoading:{control:"boolean",description:"Whether chats are loading, used to gate the history button and its disabled state"}},args:{placeholder:"How can I help you today?",titleText:"AI Assistant",descriptionText:"",fileUpload:"on",voiceInput:"on",exportOption:"on",enableReactions:!1,disclaimerText:"AI can make mistakes. Always verify responses."},render:e=>{const o=new d({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),r=a("forge-ai-chatbot-launcher-connected"),s=a("forge-ai-chatbot-launcher-message-sent"),i=a("forge-ai-chatbot-launcher-message-received"),t=a("forge-ai-chatbot-launcher-tool-call"),n=a("forge-ai-chatbot-launcher-error"),l=a("forge-ai-chatbot-launcher-conversation-start"),h=a("forge-ai-chatbot-launcher-clear"),v=a("forge-ai-chatbot-launcher-response-feedback"),x=a("forge-ai-chatbot-launcher-info"),S=a("forge-ai-chatbot-launcher-agent-change");return c`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=${o}
          placeholder=${e.placeholder}
          title-text=${e.titleText}
          description-text=${e.descriptionText}
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          export-option=${e.exportOption}
          ?enable-reactions=${e.enableReactions}
          .disclaimerText=${e.disclaimerText}
          @forge-ai-chatbot-launcher-connected=${r}
          @forge-ai-chatbot-launcher-message-sent=${s}
          @forge-ai-chatbot-launcher-message-received=${i}
          @forge-ai-chatbot-launcher-tool-call=${t}
          @forge-ai-chatbot-launcher-error=${n}
          @forge-ai-chatbot-launcher-conversation-start=${l}
          @forge-ai-chatbot-launcher-clear=${h}
          @forge-ai-chatbot-launcher-response-feedback=${w=>v(w.detail)}
          @forge-ai-chatbot-launcher-info=${x}
          @forge-ai-chatbot-launcher-agent-change=${w=>S(w.detail)}>
        </forge-ai-chatbot-launcher>
      </div>
    `}},u={},p={args:{threadName:"Discussion about project requirements and timeline",showThreadRename:!0,showThreadDelete:!0},render:e=>{const o=new d({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),r=a("forge-ai-chatbot-launcher-thread-rename"),s=a("forge-ai-chatbot-launcher-thread-delete");return c`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=${o}
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
          @forge-ai-chatbot-launcher-thread-rename=${t=>{r(t.detail);const n=t.target;n.threadName=t.detail.newTitle,setTimeout(()=>{a("onSuccess")("Rename succeeded"),t.detail.onSuccess()},500)}}
          @forge-ai-chatbot-launcher-thread-delete=${t=>{s(t.detail);const n=t.target;n.threadName="",setTimeout(()=>{a("onSuccess")("Delete succeeded"),t.detail.onSuccess()},500)}}
          @forge-ai-chatbot-launcher-conversation-start=${a("forge-ai-chatbot-launcher-conversation-start")}>
        </forge-ai-chatbot-launcher>
      </div>
    `}},m={render:e=>{const o=new d({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return c`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=${o}
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
    `}},g={parameters:{layout:"fullscreen"},render:e=>{const o=new d({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return c`
      <div style="width: 100%; height: 100vh;">
        <forge-ai-chatbot-launcher
          .adapter=${o}
          placeholder=${e.placeholder}
          title-text=${e.titleText}
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          .disclaimerText=${e.disclaimerText}
          @forge-ai-chatbot-launcher-conversation-start=${a("forge-ai-chatbot-launcher-conversation-start")}>
        </forge-ai-chatbot-launcher>
      </div>
    `}},f={...I,render:e=>{const o=new d({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return c`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=${o}
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
    `}},T=["API integration help","Debugging production issue","Performance optimization","Database schema design","Testing strategies","Code review feedback","Deployment questions","Security best practices","UI/UX improvements","Refactoring advice"],y=[0,.5,2,6,12,20,30,36,72,120,240,504,1080,2160,4800,24*400],O=(e,o=0)=>Array.from({length:e},(r,s)=>{const i=o+s,t=y[i%y.length];return{id:`thread-${i+1}`,title:T[i%T.length],createdAt:new Date(Date.now()-t*36e5).toISOString()}}),E=e=>{const o=Date.now()-864e5;return[{id:`${e.id}-msg-1`,role:"user",content:`Can you help me with ${e.title.toLowerCase()}?`,timestamp:o,status:"complete"},{id:`${e.id}-msg-2`,role:"assistant",content:`Of course! Here's what I'd suggest for ${e.title.toLowerCase()}. Let me know if you'd like more detail.`,timestamp:o+5e3,status:"complete"}]},b={args:{showThreadRename:!0,showThreadDelete:!0,totalThreads:24,threadsLoading:!1},render:e=>{const o=new d({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),r=O(24),s=new Map(r.map(t=>[t.id,E(t)]));let i=null;return c`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          ${D(t=>{i=t})}
          .adapter=${o}
          placeholder=${e.placeholder}
          title-text=${e.titleText}
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          .disclaimerText=${e.disclaimerText}
          .threads=${r.slice(0,10)}
          total-threads=${e.totalThreads}
          ?threads-loading=${e.threadsLoading}
          selected-thread-id="thread-3"
          ?show-thread-rename=${e.showThreadRename}
          ?show-thread-delete=${e.showThreadDelete}
          @forge-ai-chatbot-launcher-conversation-start=${a("forge-ai-chatbot-launcher-conversation-start")}
          @forge-ai-chatbot-launcher-thread-select=${async t=>{a("forge-ai-chatbot-launcher-thread-select")(t.detail);const{id:n}=t.detail,l=s.get(n)??[];await i?.setThreadState({threadId:n,messages:l},{skipAnimation:!0})}}
          @forge-ai-chatbot-launcher-new-chat=${a("forge-ai-chatbot-launcher-new-chat")}
          @forge-ai-chatbot-launcher-thread-search=${t=>{const{query:n,setResults:l}=t.detail;setTimeout(()=>{l(r.filter(h=>h.title.toLowerCase().includes(n.toLowerCase())).slice(0,10))},300)}}
          @forge-ai-chatbot-launcher-thread-load-more=${t=>{const{query:n,appendResults:l}=t.detail;setTimeout(()=>{const h=n?r.filter(x=>x.title.toLowerCase().includes(n.toLowerCase())):r,v=i?.threads.length??0;l(h.slice(v,v+10))},500)}}
          @forge-ai-chatbot-launcher-thread-rename=${t=>{a("forge-ai-chatbot-launcher-thread-rename")(t.detail),setTimeout(()=>t.detail.onSuccess(),500)}}
          @forge-ai-chatbot-launcher-thread-delete=${t=>{a("forge-ai-chatbot-launcher-thread-delete")(t.detail),setTimeout(()=>t.detail.onSuccess(),500)}}>
        </forge-ai-chatbot-launcher>
      </div>
    `}},$={render:e=>{k(),M(),C.define([R,A]);const o=new d({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return c`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=${o}
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
    `}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"{}",...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
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
}`,...b.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};const _=["Demo","WithThreadName","WithSuggestions","FullPage","WithCustomHeader","WithHistory","WithHeaderActions"],G=Object.freeze(Object.defineProperty({__proto__:null,Demo:u,FullPage:g,WithCustomHeader:f,WithHeaderActions:$,WithHistory:b,WithSuggestions:m,WithThreadName:p,__namedExportsOrder:_,default:U},Symbol.toStringTag,{value:"Module"}));export{G as A,b as W};

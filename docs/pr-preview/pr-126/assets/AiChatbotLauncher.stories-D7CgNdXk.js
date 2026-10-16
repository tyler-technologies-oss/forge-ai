import{x as d}from"./iframe-elajjK1a.js";import{n as A}from"./ref-Dewk2vfh.js";import"./ai-chatbot-launcher-BXy7paO7.js";import{d as p}from"./ai-data-table-CPsd3nok.js";import{M as h}from"./mock-adapter-CgHoKrWF.js";import{s as y}from"./utils-Bjt3BjC4.js";import{h as W,B as F,I as _,f as q,g as K}from"./scaffold-BTIqxT-e.js";import"./split-button-BKBtbAUP.js";import{d as V}from"./index-DhOq4tea.js";import{d as j}from"./index-CgsjnZxX.js";function z(){W(F)}const{action:a}=__STORYBOOK_MODULE_ACTIONS__,G="forge-ai-chatbot-launcher",Q={title:"AI Components/Form Factors/Launcher",component:G,argTypes:{placeholder:{control:"text",description:"Placeholder text for the input field"},titleText:{control:"text",description:"Title text displayed in the welcome view"},descriptionText:{control:"text",description:"Description text displayed below the title"},fileUpload:{control:"select",options:["on","off"],description:"Enable file upload functionality"},voiceInput:{control:"select",options:["on","off"],description:"Enable voice input functionality"},exportOption:{control:"select",options:["on","off"],description:"Control export option visibility"},enableReactions:{control:"boolean",description:"Enable thumbs up/down reaction buttons"},disclaimerText:{control:"text",description:"Disclaimer text displayed below the prompt"},threadName:{control:"text",description:"Thread name displayed in conversation view breadcrumb"},showHistoryButton:{control:"boolean",description:"Show the prompt bar's chat history button and its popover"},showThreadRename:{control:"boolean",description:"Show rename option in thread actions menu"},showThreadDelete:{control:"boolean",description:"Show delete option in thread actions menu"},totalThreads:{control:"number",description:"Total number of chats available for the history popover/view. Greater than loaded threads enables infinite scroll"},threadsLoading:{control:"boolean",description:"Whether chats are loading, used to show a spinner on the history button and disable it"},threadsError:{control:"text",description:"Message describing a failed chat history load. Badges the history button and shows the message with a retry in the popover/view"},canvasTitle:{control:"text",description:"Default title for the canvas header when an open request does not supply one"}},args:{placeholder:"How can I help you today?",titleText:"AI Assistant",descriptionText:"",fileUpload:"on",voiceInput:"on",exportOption:"on",enableReactions:!1,disclaimerText:"AI can make mistakes. Always verify responses."},render:e=>{const n=new h({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),r=a("forge-ai-chatbot-launcher-connected"),s=a("forge-ai-chatbot-launcher-message-sent"),i=a("forge-ai-chatbot-launcher-message-received"),t=a("forge-ai-chatbot-launcher-tool-call"),l=a("forge-ai-chatbot-launcher-error"),o=a("forge-ai-chatbot-launcher-conversation-start"),c=a("forge-ai-chatbot-launcher-clear"),u=a("forge-ai-chatbot-launcher-response-feedback"),E=a("forge-ai-chatbot-launcher-info"),P=a("forge-ai-chatbot-launcher-agent-change");return d`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=${n}
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
          @forge-ai-chatbot-launcher-error=${l}
          @forge-ai-chatbot-launcher-conversation-start=${o}
          @forge-ai-chatbot-launcher-clear=${c}
          @forge-ai-chatbot-launcher-response-feedback=${L=>u(L.detail)}
          @forge-ai-chatbot-launcher-info=${E}
          @forge-ai-chatbot-launcher-agent-change=${L=>P(L.detail)}>
        </forge-ai-chatbot-launcher>
      </div>
    `}},T={},x={args:{threadName:"Discussion about project requirements and timeline",showThreadRename:!0,showThreadDelete:!0},render:e=>{const n=new h({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),r=a("forge-ai-chatbot-launcher-thread-rename"),s=a("forge-ai-chatbot-launcher-thread-delete");return d`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=${n}
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
          @forge-ai-chatbot-launcher-thread-rename=${t=>{r(t.detail);const l=t.target;l.threadName=t.detail.newTitle,setTimeout(()=>{a("onSuccess")("Rename succeeded"),t.detail.onSuccess()},500)}}
          @forge-ai-chatbot-launcher-thread-delete=${t=>{s(t.detail);const l=t.target;l.threadName="",setTimeout(()=>{a("onSuccess")("Delete succeeded"),t.detail.onSuccess()},500)}}
          @forge-ai-chatbot-launcher-conversation-start=${a("forge-ai-chatbot-launcher-conversation-start")}>
        </forge-ai-chatbot-launcher>
      </div>
    `}},C={render:e=>{const n=new h({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return d`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=${n}
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
    `}},S={parameters:{layout:"fullscreen"},render:e=>{const n=new h({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return d`
      <div style="width: 100%; height: 100vh;">
        <forge-ai-chatbot-launcher
          .adapter=${n}
          placeholder=${e.placeholder}
          title-text=${e.titleText}
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          .disclaimerText=${e.disclaimerText}
          @forge-ai-chatbot-launcher-conversation-start=${a("forge-ai-chatbot-launcher-conversation-start")}>
        </forge-ai-chatbot-launcher>
      </div>
    `}},D={...y,render:e=>{const n=new h({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return d`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=${n}
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
    `}},O=["API integration help","Debugging production issue","Performance optimization","Database schema design","Testing strategies","Code review feedback","Deployment questions","Security best practices","UI/UX improvements","Refactoring advice"],B=[0,.5,2,6,12,20,30,36,72,120,240,504,1080,2160,4800,24*400],H=(e,n=0)=>Array.from({length:e},(r,s)=>{const i=n+s,t=B[i%B.length];return{id:`thread-${i+1}`,title:O[i%O.length],createdAt:new Date(Date.now()-t*36e5).toISOString()}}),U=e=>{const n=Date.now()-864e5;return[{id:`${e.id}-msg-1`,role:"user",content:`Can you help me with ${e.title.toLowerCase()}?`,timestamp:n,status:"complete"},{id:`${e.id}-msg-2`,role:"assistant",content:`Of course! Here's what I'd suggest for ${e.title.toLowerCase()}. Let me know if you'd like more detail.`,timestamp:n+5e3,status:"complete"}]},I={args:{showHistoryButton:!0,showThreadRename:!0,showThreadDelete:!0,totalThreads:24,threadsLoading:!1},render:e=>{const n=new h({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),r=H(24),s=new Map(r.map(t=>[t.id,U(t)]));let i=null;return d`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          ${A(t=>{i=t})}
          .adapter=${n}
          placeholder=${e.placeholder}
          title-text=${e.titleText}
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          .disclaimerText=${e.disclaimerText}
          .threads=${r.slice(0,10)}
          total-threads=${e.totalThreads}
          ?threads-loading=${e.threadsLoading}
          ?show-history-button=${e.showHistoryButton}
          selected-thread-id="thread-3"
          ?show-thread-rename=${e.showThreadRename}
          ?show-thread-delete=${e.showThreadDelete}
          @forge-ai-chatbot-launcher-conversation-start=${a("forge-ai-chatbot-launcher-conversation-start")}
          @forge-ai-chatbot-launcher-thread-select=${async t=>{a("forge-ai-chatbot-launcher-thread-select")(t.detail);const{id:l}=t.detail,o=s.get(l)??[];await i?.setThreadState({threadId:l,messages:o},{skipAnimation:!0})}}
          @forge-ai-chatbot-launcher-new-chat=${a("forge-ai-chatbot-launcher-new-chat")}
          @forge-ai-chatbot-launcher-thread-search=${t=>{const{query:l,setResults:o}=t.detail;setTimeout(()=>{o(r.filter(c=>c.title.toLowerCase().includes(l.toLowerCase())).slice(0,10))},300)}}
          @forge-ai-chatbot-launcher-thread-load-more=${t=>{const{query:l,appendResults:o}=t.detail;setTimeout(()=>{const c=l?r.filter(E=>E.title.toLowerCase().includes(l.toLowerCase())):r,u=i?.threads.length??0;o(c.slice(u,u+10))},500)}}
          @forge-ai-chatbot-launcher-thread-rename=${t=>{a("forge-ai-chatbot-launcher-thread-rename")(t.detail),setTimeout(()=>t.detail.onSuccess(),500)}}
          @forge-ai-chatbot-launcher-thread-delete=${t=>{a("forge-ai-chatbot-launcher-thread-delete")(t.detail),setTimeout(()=>t.detail.onSuccess(),500)}}>
        </forge-ai-chatbot-launcher>
      </div>
    `}},g={args:{showHistoryButton:!0,totalThreads:0},render:e=>{const n=new h({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return d`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=${n}
          placeholder=${e.placeholder}
          title-text=${e.titleText}
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          .disclaimerText=${e.disclaimerText}
          .threads=${[]}
          total-threads=${e.totalThreads}
          ?show-history-button=${e.showHistoryButton}
          @forge-ai-chatbot-launcher-thread-search=${r=>{a("forge-ai-chatbot-launcher-thread-search")(r.detail),r.detail.setResults([])}}
          @forge-ai-chatbot-launcher-conversation-start=${a("forge-ai-chatbot-launcher-conversation-start")}
          @forge-ai-chatbot-launcher-new-chat=${a("forge-ai-chatbot-launcher-new-chat")}>
        </forge-ai-chatbot-launcher>
      </div>
    `}},m={args:{showHistoryButton:!0,totalThreads:10},render:e=>{const n=new h({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),r=H(10),s=new Map(r.map(o=>[o.id,U(o)])),i=new Set;let t=null;const l=async o=>{if(await new Promise(c=>setTimeout(c,600)),!i.has(o))throw i.add(o),new Error("403 Forbidden - access to this chat was revoked");return s.get(o)??[]};return d`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          ${A(o=>{t=o})}
          .adapter=${n}
          placeholder=${e.placeholder}
          title-text=${e.titleText}
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          .disclaimerText=${e.disclaimerText}
          .threads=${r}
          total-threads=${e.totalThreads}
          ?show-history-button=${e.showHistoryButton}
          @forge-ai-chatbot-launcher-thread-select=${async o=>{a("forge-ai-chatbot-launcher-thread-select")(o.detail),o.preventDefault();const{id:c}=o.detail;t.threadsError=void 0,t.threadsLoading=!0;try{const u=await l(c);t.selectedThreadId=c,await t?.setThreadState({threadId:c,messages:u},{skipAnimation:!0}),a("host commit")({id:c,viewState:t?.viewState})}catch(u){t.threadsError=u.message,a("host load failed")({id:c,error:u.message,selectedThreadId:t?.selectedThreadId,viewState:t?.viewState})}finally{t.threadsLoading=!1}}}
          @forge-ai-chatbot-launcher-thread-retry=${()=>{a("forge-ai-chatbot-launcher-thread-retry")(),t.threadsError=void 0}}
          @forge-ai-chatbot-launcher-conversation-start=${a("forge-ai-chatbot-launcher-conversation-start")}
          @forge-ai-chatbot-launcher-new-chat=${a("forge-ai-chatbot-launcher-new-chat")}>
        </forge-ai-chatbot-launcher>
      </div>
    `}},f={args:{showHistoryButton:!0,threadsError:"Could not load your chat history.",totalThreads:0},render:e=>{const n=new h({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),r=H(10);let s=null;return d`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          ${A(i=>{s=i})}
          .adapter=${n}
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
          @forge-ai-chatbot-launcher-thread-retry=${()=>{a("forge-ai-chatbot-launcher-thread-retry")(),s&&(s.threadsError=void 0,s.threadsLoading=!0,setTimeout(()=>{s.threads=r,s.totalThreads=r.length,s.threadsLoading=!1,a("retry succeeded")({threads:r.length})},800))}}
          @forge-ai-chatbot-launcher-thread-select=${a("forge-ai-chatbot-launcher-thread-select")}
          @forge-ai-chatbot-launcher-conversation-start=${a("forge-ai-chatbot-launcher-conversation-start")}>
        </forge-ai-chatbot-launcher>
      </div>
    `}},R={render:e=>{j(),V(),_.define([q,K]);const n=new h({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return d`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=${n}
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
    `}},N="width: 100%; height: 640px; max-width: 1200px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;",X=[{id:"canvas-user-1",role:"user",content:"Can you pull up the release notes for the latest version?",timestamp:Date.now()-6e4,status:"complete"},{id:"canvas-assistant-1",role:"assistant",content:"Sure. Use the **Open canvas** button in the header to view them alongside our conversation.",timestamp:Date.now()-3e4,status:"complete"}],Y={title:"Regional sales, Q3",headers:["Region","Revenue","Growth","Top product","Accounts"],rows:[["Northeast","$1.24M","+8.2%","Permitting",312],["Mid-Atlantic","$980K","+4.1%","Licensing",241],["Southeast","$1.61M","+12.7%","Utility billing",402],["Great Lakes","$870K","-1.3%","Court case management",198],["Plains","$540K","+2.9%","Tax & assessment",133],["Gulf Coast","$1.05M","+9.8%","Permitting",276],["Mountain","$690K","+6.4%","Public safety",164],["Southwest","$1.12M","+10.5%","Utility billing",289],["Pacific Northwest","$830K","+3.6%","Licensing",205],["California","$2.03M","+7.9%","Tax & assessment",511],["Alaska","$120K","+0.8%","Public safety",27],["Hawaii","$210K","+5.2%","Permitting",44]]};function J(e){const n=e;n?.updateComplete.then(()=>{n.getMessages().length||n.setMessages(X)})}const M={...y,render:()=>{z();const e=new h({simulateStreaming:!0,streamingDelay:50,responseDelay:500}),n=a("forge-ai-chatbot-launcher-canvas-open"),r=a("forge-ai-chatbot-launcher-canvas-close"),s=i=>{i.target.closest("forge-ai-chatbot-launcher")?.openCanvas({title:"Release notes"})};return d`
      <div style=${N}>
        <forge-ai-chatbot-launcher
          ${A(J)}
          .adapter=${e}
          canvas-title="Canvas"
          @forge-ai-chatbot-launcher-canvas-open=${i=>n(i.detail)}
          @forge-ai-chatbot-launcher-canvas-close=${r}>
          <forge-button slot="header-actions" variant="outlined" @click=${s}>Open canvas</forge-button>
          <div slot="canvas">
            <h3>Version 2.4.0</h3>
            <ul>
              <li>Chat history popover now supports search and infinite scroll.</li>
              <li>Sidebar width is remembered between sessions.</li>
              <li>Artifacts can open in a canvas beside the conversation.</li>
            </ul>
            <h3>Version 2.3.1</h3>
            <ul>
              <li>Fixed focus restoration when dismissing the history popover with Escape.</li>
              <li>Corrected nested popover toggle handling.</li>
            </ul>
          </div>
        </forge-ai-chatbot-launcher>
      </div>
    `}};function k(e){const n=new h({simulateStreaming:!0,simulateTools:!0,streamingDelay:30,responseDelay:400,tools:[e],simulatedToolCall:{name:e.name,args:Y}});return d`
    <div style=${N}>
      <forge-ai-chatbot-launcher
        .adapter=${n}
        .suggestions=${[{text:"Show me Q3 sales by region",value:"Show me Q3 sales by region"}]}
        @forge-ai-chatbot-launcher-canvas-open=${r=>a("forge-ai-chatbot-launcher-canvas-open")(r.detail)}
        @forge-ai-chatbot-launcher-canvas-close=${a("forge-ai-chatbot-launcher-canvas-close")}>
      </forge-ai-chatbot-launcher>
    </div>
  `}const b={...y,render:()=>k(p)},v={...y,render:()=>k({...p,canvas:{...p.canvas,open:"auto"}})},Z='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 10.02h5V21h-5zM17 21h3c1.1 0 2-.9 2-2v-9h-5v11zm3-18H5c-1.1 0-2 .9-2 2v3h19V5c0-1.1-.9-2-2-2zM3 19c0 1.1.9 2 2 2h3V10H3v9z"/></svg>',$={...y,render:()=>{const e={...p,canvas:{...p.canvas,inline:"card",icon:Z,actionLabel:n=>({open:`Open ${n.args.title??"table"}`,collapse:`Collapse ${n.args.title??"table"}`})}};return k(e)}},w={...y,render:()=>k({...p,canvas:{...p.canvas,inline:"card-while-open"}})};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:"{}",...T.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`A first-time user with no chats. \`showHistoryButton\` keeps the entry point in the prompt bar, so the
popover opens on "No chats yet" instead of the button removing itself. "View all" reaches the same
empty state in the full history view, where searching shows "No chats found" — the other empty
message, which the launcher could not reach at all before the button became host-controlled.`,...g.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:"The host rejects the select by calling preventDefault(), then owns the commit. The first thread\nclicked always fails to load, so `selectedThreadId` and the welcome view must stay untouched;\nclicking the same thread again succeeds and the host commits both.",...m.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:`A failed history load with no chats loaded. The history button picks up an error badge, and the
popover shows the error with a retry instead of the "no chats yet" empty state. Retry succeeds.`,...f.parameters?.docs?.description}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  ...standaloneStoryParams,
  render: () => {
    defineButtonComponent();
    const adapter = new MockAdapter({
      simulateStreaming: true,
      streamingDelay: 50,
      responseDelay: 500
    });
    const onCanvasOpen = action('forge-ai-chatbot-launcher-canvas-open');
    const onCanvasClose = action('forge-ai-chatbot-launcher-canvas-close');
    const openReleaseNotes = (evt: Event): void => {
      const launcher = (evt.target as HTMLElement).closest('forge-ai-chatbot-launcher');
      launcher?.openCanvas({
        title: 'Release notes'
      });
    };
    return html\`
      <div style=\${canvasContainerStyle}>
        <forge-ai-chatbot-launcher
          \${ref(seedConversation)}
          .adapter=\${adapter}
          canvas-title="Canvas"
          @forge-ai-chatbot-launcher-canvas-open=\${(evt: CustomEvent) => onCanvasOpen(evt.detail)}
          @forge-ai-chatbot-launcher-canvas-close=\${onCanvasClose}>
          <forge-button slot="header-actions" variant="outlined" @click=\${openReleaseNotes}>Open canvas</forge-button>
          <div slot="canvas">
            <h3>Version 2.4.0</h3>
            <ul>
              <li>Chat history popover now supports search and infinite scroll.</li>
              <li>Sidebar width is remembered between sessions.</li>
              <li>Artifacts can open in a canvas beside the conversation.</li>
            </ul>
            <h3>Version 2.3.1</h3>
            <ul>
              <li>Fixed focus restoration when dismissing the history popover with Escape.</li>
              <li>Corrected nested popover toggle handling.</li>
            </ul>
          </div>
        </forge-ai-chatbot-launcher>
      </div>
    \`;
  }
}`,...M.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  ...standaloneStoryParams,
  render: () => renderCanvasToolStory(displayDataTableTool)
}`,...b.parameters?.docs?.source},description:{story:"Data table renders inline; its expand button opens the same table in the canvas.",...b.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  ...standaloneStoryParams,
  render: () => renderCanvasToolStory({
    ...displayDataTableTool,
    canvas: {
      ...displayDataTableTool.canvas,
      open: 'auto'
    }
  })
}`,...v.parameters?.docs?.source},description:{story:"Data table opens straight into the canvas, leaving an artifact card in the thread.",...v.parameters?.docs?.description}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  ...standaloneStoryParams,
  render: () => {
    const tool: ToolDefinition<DataTableArgs> = {
      ...displayDataTableTool,
      canvas: {
        ...displayDataTableTool.canvas,
        inline: 'card',
        icon: tableIconSvg,
        actionLabel: toolCall => ({
          open: \`Open \${toolCall.args.title ?? 'table'}\`,
          collapse: \`Collapse \${toolCall.args.title ?? 'table'}\`
        })
      }
    };
    return renderCanvasToolStory(tool);
  }
}`,...$.parameters?.docs?.source},description:{story:"Data table is represented by an artifact card in the thread; clicking the card opens it in the canvas.\nThe card's icon and labels are mapped from the typed tool call via the `canvas` block.",...$.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  ...standaloneStoryParams,
  render: () => renderCanvasToolStory({
    ...displayDataTableTool,
    canvas: {
      ...displayDataTableTool.canvas,
      inline: 'card-while-open'
    }
  })
}`,...w.parameters?.docs?.source},description:{story:"Data table renders inline until it is opened in the canvas, then swaps to an artifact card until the canvas closes.",...w.parameters?.docs?.description}}};const ee=["Demo","WithThreadName","WithSuggestions","FullPage","WithCustomHeader","WithHistory","NoChats","ThreadSelectRejection","ThreadHistoryError","WithHeaderActions","WithCanvas","CanvasOnRequest","CanvasAutoOpen","CanvasCard","CanvasCardWhileOpen"],he=Object.freeze(Object.defineProperty({__proto__:null,CanvasAutoOpen:v,CanvasCard:$,CanvasCardWhileOpen:w,CanvasOnRequest:b,Demo:T,FullPage:S,NoChats:g,ThreadHistoryError:f,ThreadSelectRejection:m,WithCanvas:M,WithCustomHeader:D,WithHeaderActions:R,WithHistory:I,WithSuggestions:C,WithThreadName:x,__namedExportsOrder:ee,default:Q},Symbol.toStringTag,{value:"Module"}));export{he as A,b as C,g as N,m as T,I as W,f as a,M as b,v as c,$ as d,w as e};

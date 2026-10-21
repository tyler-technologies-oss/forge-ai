import{b as j,i as K,E as U,x as i}from"./iframe-HHnIi9vB.js";import{n as H}from"./ref-BmIXBg3c.js";import"./ai-chatbot-launcher-D8kq9d6P.js";import{t as G}from"./custom-element-UsVr97OX.js";import{n as N}from"./property-Dw-ruDe5.js";import{h as oe,B as se,I as ie,f as le,g as ce}from"./scaffold-2xjKR7hE.js";import"./split-button-DOTKEpJh.js";import{c as F}from"./create-tool-renderer-BxivDorU.js";import{M as h}from"./mock-adapter-BpXd5o7R.js";import{s as T}from"./utils-Bk7YUiZl.js";import{d as de}from"./index-C55brvFi.js";import{d as he}from"./index-CIS0u7eX.js";function Q(){oe(se)}var ue=Object.defineProperty,pe=Object.getOwnPropertyDescriptor,X=e=>{throw TypeError(e)},O=(e,t,r,s)=>{for(var o=s>1?void 0:s?pe(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(o=(s?c(t,r,o):c(o))||o);return s&&o&&ue(t,r,o),o},Y=(e,t,r)=>t.has(e)||X("Cannot "+r),A=(e,t,r)=>(Y(e,t,"read from private field"),r?r.call(e):t.get(e)),ge=(e,t,r)=>t.has(e)?X("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),me=(e,t,r)=>(Y(e,t,"access private method"),r),p,W,J,Z,ee,te;Q();const fe=3,ve='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 10.02h5V21h-5zM17 21h3c1.1 0 2-.9 2-2v-9h-5v11zm3-18H5c-1.1 0-2 .9-2 2v3h19V5c0-1.1-.9-2-2-2zM3 19c0 1.1.9 2 2 2h3V10H3v9z"/></svg>';let E=class extends K{constructor(){super(...arguments),ge(this,p)}render(){const{title:e,summary:t}=this.toolCall.args;return i`
      <div class="card">
        <div class="header">
          <div class="icon" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M10 10.02h5V21h-5zM17 21h3c1.1 0 2-.9 2-2v-9h-5v11zm3-18H5c-1.1 0-2 .9-2 2v3h19V5c0-1.1-.9-2-2-2zM3 19c0 1.1.9 2 2 2h3V10H3v9z" />
            </svg>
          </div>
          <div>
            <h3 class="title">${e}</h3>
            <p class="meta">${A(this,p,J)}</p>
          </div>
        </div>
        ${t?i`<p class="summary">${t}</p>`:U} ${A(this,p,Z)} ${A(this,p,ee)}
      </div>
    `}};p=new WeakSet;W=function(){return this.toolCall.args.rows?.length??0};J=function(){const e=this.toolCall.args.headers?.length??0;return`${A(this,p,W)} rows · ${e} columns`};Z=function(){const e=(this.toolCall.args.rows??[]).slice(0,fe);return e.length?i`
      <ul class="preview">
        ${e.map(([t,r])=>i`<li><span>${t}</span><span class="value">${r}</span></li>`)}
      </ul>
    `:U};ee=function(){if(!this.canvas?.available)return U;const e=this.canvas.isOpen?"Close table":`View all ${A(this,p,W)} rows`;return i`
      <div class="actions">
        <forge-button variant="outlined" @click=${me(this,p,te)}>${e}</forge-button>
      </div>
    `};te=function(){this.canvas?.toggle()};E.styles=j`
    :host {
      display: block;
    }

    .card {
      display: flex;
      flex-direction: column;
      gap: var(--forge-spacing-medium, 12px);
      padding: var(--forge-spacing-large, 16px);
      border: 1px solid var(--forge-theme-outline, #ccc);
      border-radius: var(--forge-shape-large, 12px);
      background: var(--forge-theme-surface-container-minimum, #f6f6f6);
      color: var(--forge-theme-text-high, inherit);
    }

    .header {
      display: flex;
      align-items: center;
      gap: var(--forge-spacing-medium, 12px);
    }

    .icon {
      flex: none;
      display: grid;
      place-items: center;
      inline-size: 40px;
      block-size: 40px;
      border-radius: var(--forge-shape-medium, 8px);
      background: var(--forge-theme-primary-container, #e0e7ff);
      color: var(--forge-theme-on-primary-container, #1a237e);
    }

    .icon svg {
      inline-size: 24px;
      block-size: 24px;
      fill: currentcolor;
    }

    .title {
      margin: 0;
      font: var(--forge-typography-heading4, 600 1rem sans-serif);
    }

    .meta {
      margin: 0;
      color: var(--forge-theme-text-medium, inherit);
      font: var(--forge-typography-caption, 0.75rem sans-serif);
    }

    .summary {
      margin: 0;
      font: var(--forge-typography-body2, 0.875rem sans-serif);
    }

    .preview {
      display: grid;
      margin: 0;
      padding: 0;
      list-style: none;
      border-radius: var(--forge-shape-medium, 8px);
      background: var(--forge-theme-surface, #fff);
    }

    .preview li {
      display: flex;
      justify-content: space-between;
      gap: var(--forge-spacing-medium, 12px);
      padding: var(--forge-spacing-small, 8px) var(--forge-spacing-medium, 12px);
    }

    .preview li + li {
      border-block-start: 1px solid var(--forge-theme-outline, #ccc);
    }

    .preview .value {
      color: var(--forge-theme-text-medium, inherit);
    }

    .actions {
      display: flex;
      justify-content: flex-end;
    }
  `;O([N({attribute:!1})],E.prototype,"toolCall",2);O([N({attribute:!1})],E.prototype,"canvas",2);E=O([G("demo-table-overview-card")],E);let _=class extends K{render(){const{headers:e=[],rows:t=[]}=this.toolCall.args;return i`
      <table>
        <thead>
          <tr>
            ${e.map(r=>i`<th scope="col">${r}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${t.map(r=>i`<tr>
                ${r.map(s=>i`<td>${s}</td>`)}
              </tr>`)}
        </tbody>
      </table>
    `}};_.styles=j`
    :host {
      display: block;
    }

    table {
      inline-size: 100%;
      border-collapse: collapse;
      color: var(--forge-theme-text-high, inherit);
    }

    th,
    td {
      padding: var(--forge-spacing-small, 8px) var(--forge-spacing-medium, 12px);
      border-block-end: 1px solid var(--forge-theme-outline, #ccc);
      text-align: start;
    }

    th {
      position: sticky;
      inset-block-start: 0;
      background: var(--forge-theme-surface, #fff);
    }
  `;O([N({attribute:!1})],_.prototype,"toolCall",2);_=O([G("demo-canvas-table")],_);const g={name:"displayCanvasTable",displayName:"Display Table",description:"Presents tabular data as an overview with a full table. Provide a short summary of what the data shows and order each row as [label, value, ...].",parameters:{type:"object",properties:{title:{type:"string",description:"Table title"},summary:{type:"string",description:"One or two sentences describing the key takeaway"},headers:{type:"array",items:{type:"string"},description:"Column headers"},rows:{type:"array",items:{type:"array",items:{oneOf:[{type:"string"},{type:"number"}]}},description:"Row values, in header order"}},required:["title","headers","rows"]},renderer:F({elementTag:"demo-table-overview-card"}),canvas:{renderer:F({elementTag:"demo-canvas-table"}),title:e=>e.args.title,subtitle:e=>e.args.summary??`${e.args.rows?.length??0} rows`,icon:ve,actionLabel:e=>({open:`Open ${e.args.title}`,collapse:`Collapse ${e.args.title}`})}},{action:n}=__STORYBOOK_MODULE_ACTIONS__,be="forge-ai-chatbot-launcher",we={title:"AI Components/Form Factors/Launcher",component:be,argTypes:{placeholder:{control:"text",description:"Placeholder text for the input field"},titleText:{control:"text",description:"Title text displayed in the welcome view"},descriptionText:{control:"text",description:"Description text displayed below the title"},fileUpload:{control:"select",options:["on","off"],description:"Enable file upload functionality"},voiceInput:{control:"select",options:["on","off"],description:"Enable voice input functionality"},exportOption:{control:"select",options:["on","off"],description:"Control export option visibility"},enableReactions:{control:"boolean",description:"Enable thumbs up/down reaction buttons"},disclaimerText:{control:"text",description:"Disclaimer text displayed below the prompt"},threadName:{control:"text",description:"Thread name displayed in conversation view breadcrumb"},showHistoryButton:{control:"boolean",description:"Show the prompt bar's chat history button and its popover"},showThreadRename:{control:"boolean",description:"Show rename option in thread actions menu"},showThreadDelete:{control:"boolean",description:"Show delete option in thread actions menu"},totalThreads:{control:"number",description:"Total number of chats available for the history popover/view. Greater than loaded threads enables infinite scroll"},threadsLoading:{control:"boolean",description:"Whether chats are loading, used to show a spinner on the history button and disable it"},threadsError:{control:"text",description:"Message describing a failed chat history load. Badges the history button and shows the message with a retry in the popover/view"},canvasTitle:{control:"text",description:"Default title for the canvas header when an open request does not supply one"},canvasResizable:{control:"select",options:["on","off"],description:"Show the drag handle between the conversation and the canvas"},chatWidth:{control:{type:"number",min:360,step:20},description:"Width in pixels of the conversation column while the canvas is open"}},args:{placeholder:"How can I help you today?",titleText:"AI Assistant",descriptionText:"",fileUpload:"on",voiceInput:"on",exportOption:"on",enableReactions:!1,disclaimerText:"AI can make mistakes. Always verify responses."},render:e=>{const t=new h({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),r=n("forge-ai-chatbot-launcher-connected"),s=n("forge-ai-chatbot-launcher-message-sent"),o=n("forge-ai-chatbot-launcher-message-received"),a=n("forge-ai-chatbot-launcher-tool-call"),c=n("forge-ai-chatbot-launcher-error"),l=n("forge-ai-chatbot-launcher-conversation-start"),d=n("forge-ai-chatbot-launcher-clear"),u=n("forge-ai-chatbot-launcher-response-feedback"),B=n("forge-ai-chatbot-launcher-info"),ne=n("forge-ai-chatbot-launcher-agent-change");return i`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=${t}
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
          @forge-ai-chatbot-launcher-message-received=${o}
          @forge-ai-chatbot-launcher-tool-call=${a}
          @forge-ai-chatbot-launcher-error=${c}
          @forge-ai-chatbot-launcher-conversation-start=${l}
          @forge-ai-chatbot-launcher-clear=${d}
          @forge-ai-chatbot-launcher-response-feedback=${P=>u(P.detail)}
          @forge-ai-chatbot-launcher-info=${B}
          @forge-ai-chatbot-launcher-agent-change=${P=>ne(P.detail)}>
        </forge-ai-chatbot-launcher>
      </div>
    `}},x={},C={args:{threadName:"Discussion about project requirements and timeline",showThreadRename:!0,showThreadDelete:!0},render:e=>{const t=new h({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),r=n("forge-ai-chatbot-launcher-thread-rename"),s=n("forge-ai-chatbot-launcher-thread-delete");return i`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=${t}
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
          @forge-ai-chatbot-launcher-thread-rename=${a=>{r(a.detail);const c=a.target;c.threadName=a.detail.newTitle,setTimeout(()=>{n("onSuccess")("Rename succeeded"),a.detail.onSuccess()},500)}}
          @forge-ai-chatbot-launcher-thread-delete=${a=>{s(a.detail);const c=a.target;c.threadName="",setTimeout(()=>{n("onSuccess")("Delete succeeded"),a.detail.onSuccess()},500)}}
          @forge-ai-chatbot-launcher-conversation-start=${n("forge-ai-chatbot-launcher-conversation-start")}>
        </forge-ai-chatbot-launcher>
      </div>
    `}},S={render:e=>{const t=new h({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return i`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=${t}
          .suggestions=${[{text:"Create report with AI",value:"create-report"},{text:"Create a report from scratch",value:"scratch-report"},{text:"Start with a template",value:"template"}]}
          placeholder=${e.placeholder}
          title-text=${e.titleText}
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          .disclaimerText=${e.disclaimerText}
          @forge-ai-chatbot-launcher-conversation-start=${n("forge-ai-chatbot-launcher-conversation-start")}>
        </forge-ai-chatbot-launcher>
      </div>
    `}},D={parameters:{layout:"fullscreen"},render:e=>{const t=new h({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return i`
      <div style="width: 100%; height: 100vh;">
        <forge-ai-chatbot-launcher
          .adapter=${t}
          placeholder=${e.placeholder}
          title-text=${e.titleText}
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          .disclaimerText=${e.disclaimerText}
          @forge-ai-chatbot-launcher-conversation-start=${n("forge-ai-chatbot-launcher-conversation-start")}>
        </forge-ai-chatbot-launcher>
      </div>
    `}},I={...T,render:e=>{const t=new h({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return i`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=${t}
          placeholder=${e.placeholder}
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          .disclaimerText=${e.disclaimerText}
          @forge-ai-chatbot-launcher-conversation-start=${n("forge-ai-chatbot-launcher-conversation-start")}>
          <svg slot="icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="var(--forge-theme-tertiary)" />
            <path d="M16 8v16M8 16h16" stroke="white" stroke-width="2" stroke-linecap="round" />
          </svg>
          <span slot="heading">Reporting Assistant</span>
          <span slot="description">I'm your Forge AI assistant. What would you like to do?</span>
        </forge-ai-chatbot-launcher>
      </div>
    `}},V=["API integration help","Debugging production issue","Performance optimization","Database schema design","Testing strategies","Code review feedback","Deployment questions","Security best practices","UI/UX improvements","Refactoring advice"],q=[0,.5,2,6,12,20,30,36,72,120,240,504,1080,2160,4800,24*400],z=(e,t=0)=>Array.from({length:e},(r,s)=>{const o=t+s,a=q[o%q.length];return{id:`thread-${o+1}`,title:V[o%V.length],createdAt:new Date(Date.now()-a*36e5).toISOString()}}),ae=e=>{const t=Date.now()-864e5;return[{id:`${e.id}-msg-1`,role:"user",content:`Can you help me with ${e.title.toLowerCase()}?`,timestamp:t,status:"complete"},{id:`${e.id}-msg-2`,role:"assistant",content:`Of course! Here's what I'd suggest for ${e.title.toLowerCase()}. Let me know if you'd like more detail.`,timestamp:t+5e3,status:"complete"}]},R={args:{showHistoryButton:!0,showThreadRename:!0,showThreadDelete:!0,totalThreads:24,threadsLoading:!1},render:e=>{const t=new h({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),r=z(24),s=new Map(r.map(a=>[a.id,ae(a)]));let o=null;return i`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          ${H(a=>{o=a})}
          .adapter=${t}
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
          @forge-ai-chatbot-launcher-conversation-start=${n("forge-ai-chatbot-launcher-conversation-start")}
          @forge-ai-chatbot-launcher-thread-select=${async a=>{n("forge-ai-chatbot-launcher-thread-select")(a.detail);const{id:c}=a.detail,l=s.get(c)??[];await o?.setThreadState({threadId:c,messages:l},{skipAnimation:!0})}}
          @forge-ai-chatbot-launcher-new-chat=${n("forge-ai-chatbot-launcher-new-chat")}
          @forge-ai-chatbot-launcher-thread-search=${a=>{const{query:c,setResults:l}=a.detail;setTimeout(()=>{l(r.filter(d=>d.title.toLowerCase().includes(c.toLowerCase())).slice(0,10))},300)}}
          @forge-ai-chatbot-launcher-thread-load-more=${a=>{const{query:c,appendResults:l}=a.detail;setTimeout(()=>{const d=c?r.filter(B=>B.title.toLowerCase().includes(c.toLowerCase())):r,u=o?.threads.length??0;l(d.slice(u,u+10))},500)}}
          @forge-ai-chatbot-launcher-thread-rename=${a=>{n("forge-ai-chatbot-launcher-thread-rename")(a.detail),setTimeout(()=>a.detail.onSuccess(),500)}}
          @forge-ai-chatbot-launcher-thread-delete=${a=>{n("forge-ai-chatbot-launcher-thread-delete")(a.detail),setTimeout(()=>a.detail.onSuccess(),500)}}>
        </forge-ai-chatbot-launcher>
      </div>
    `}},m={args:{showHistoryButton:!0,totalThreads:0},render:e=>{const t=new h({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return i`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=${t}
          placeholder=${e.placeholder}
          title-text=${e.titleText}
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          .disclaimerText=${e.disclaimerText}
          .threads=${[]}
          total-threads=${e.totalThreads}
          ?show-history-button=${e.showHistoryButton}
          @forge-ai-chatbot-launcher-thread-search=${r=>{n("forge-ai-chatbot-launcher-thread-search")(r.detail),r.detail.setResults([])}}
          @forge-ai-chatbot-launcher-conversation-start=${n("forge-ai-chatbot-launcher-conversation-start")}
          @forge-ai-chatbot-launcher-new-chat=${n("forge-ai-chatbot-launcher-new-chat")}>
        </forge-ai-chatbot-launcher>
      </div>
    `}},f={args:{showHistoryButton:!0,totalThreads:10},render:e=>{const t=new h({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),r=z(10),s=new Map(r.map(l=>[l.id,ae(l)])),o=new Set;let a=null;const c=async l=>{if(await new Promise(d=>setTimeout(d,600)),!o.has(l))throw o.add(l),new Error("403 Forbidden - access to this chat was revoked");return s.get(l)??[]};return i`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          ${H(l=>{a=l})}
          .adapter=${t}
          placeholder=${e.placeholder}
          title-text=${e.titleText}
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          .disclaimerText=${e.disclaimerText}
          .threads=${r}
          total-threads=${e.totalThreads}
          ?show-history-button=${e.showHistoryButton}
          @forge-ai-chatbot-launcher-thread-select=${async l=>{n("forge-ai-chatbot-launcher-thread-select")(l.detail),l.preventDefault();const{id:d}=l.detail;a.threadsError=void 0,a.threadsLoading=!0;try{const u=await c(d);a.selectedThreadId=d,await a?.setThreadState({threadId:d,messages:u},{skipAnimation:!0}),n("host commit")({id:d,viewState:a?.viewState})}catch(u){a.threadsError=u.message,n("host load failed")({id:d,error:u.message,selectedThreadId:a?.selectedThreadId,viewState:a?.viewState})}finally{a.threadsLoading=!1}}}
          @forge-ai-chatbot-launcher-thread-retry=${()=>{n("forge-ai-chatbot-launcher-thread-retry")(),a.threadsError=void 0}}
          @forge-ai-chatbot-launcher-conversation-start=${n("forge-ai-chatbot-launcher-conversation-start")}
          @forge-ai-chatbot-launcher-new-chat=${n("forge-ai-chatbot-launcher-new-chat")}>
        </forge-ai-chatbot-launcher>
      </div>
    `}},v={args:{showHistoryButton:!0,threadsError:"Could not load your chat history.",totalThreads:0},render:e=>{const t=new h({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),r=z(10);let s=null;return i`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          ${H(o=>{s=o})}
          .adapter=${t}
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
          @forge-ai-chatbot-launcher-thread-retry=${()=>{n("forge-ai-chatbot-launcher-thread-retry")(),s&&(s.threadsError=void 0,s.threadsLoading=!0,setTimeout(()=>{s.threads=r,s.totalThreads=r.length,s.threadsLoading=!1,n("retry succeeded")({threads:r.length})},800))}}
          @forge-ai-chatbot-launcher-thread-select=${n("forge-ai-chatbot-launcher-thread-select")}
          @forge-ai-chatbot-launcher-conversation-start=${n("forge-ai-chatbot-launcher-conversation-start")}>
        </forge-ai-chatbot-launcher>
      </div>
    `}},M={render:e=>{he(),de(),ie.define([le,ce]);const t=new h({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return i`
      <div
        style="width: 100%; height: 600px; max-width: 900px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <forge-ai-chatbot-launcher
          .adapter=${t}
          placeholder=${e.placeholder}
          title-text=${e.titleText}
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          .disclaimerText=${e.disclaimerText}
          @forge-ai-chatbot-launcher-conversation-start=${n("forge-ai-chatbot-launcher-conversation-start")}>
          <forge-icon-button slot="header-actions" density="medium" aria-label="History">
            <forge-icon name="history"></forge-icon>
          </forge-icon-button>
          <forge-icon-button slot="header-actions" density="medium" aria-label="Settings">
            <forge-icon name="settings"></forge-icon>
          </forge-icon-button>
        </forge-ai-chatbot-launcher>
      </div>
    `}},re="width: 100%; height: 640px; max-width: 1200px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;",$e=[{id:"canvas-user-1",role:"user",content:"Can you pull up the release notes for the latest version?",timestamp:Date.now()-6e4,status:"complete"},{id:"canvas-assistant-1",role:"assistant",content:"Sure. Use the **Open canvas** button in the header to view them alongside our conversation.",timestamp:Date.now()-3e4,status:"complete"}],ye={title:"Regional sales, Q3",summary:"Revenue grew in 11 of 12 regions. Southeast led at $1.61M (+12.7%); Great Lakes was the only decline.",headers:["Region","Revenue","Growth","Top product","Accounts"],rows:[["Northeast","$1.24M","+8.2%","Permitting",312],["Mid-Atlantic","$980K","+4.1%","Licensing",241],["Southeast","$1.61M","+12.7%","Utility billing",402],["Great Lakes","$870K","-1.3%","Court case management",198],["Plains","$540K","+2.9%","Tax & assessment",133],["Gulf Coast","$1.05M","+9.8%","Permitting",276],["Mountain","$690K","+6.4%","Public safety",164],["Southwest","$1.12M","+10.5%","Utility billing",289],["Pacific Northwest","$830K","+3.6%","Licensing",205],["California","$2.03M","+7.9%","Tax & assessment",511],["Alaska","$120K","+0.8%","Public safety",27],["Hawaii","$210K","+5.2%","Permitting",44]]};function Te(e){const t=e;t?.updateComplete.then(()=>{t.getMessages().length||t.setMessages($e)})}const k={...T,render:()=>{Q();const e=new h({simulateStreaming:!0,streamingDelay:50,responseDelay:500}),t=n("forge-ai-chatbot-launcher-canvas-open"),r=n("forge-ai-chatbot-launcher-canvas-close"),s=o=>{o.target.closest("forge-ai-chatbot-launcher")?.openCanvas({title:"Release notes"})};return i`
      <div style=${re}>
        <forge-ai-chatbot-launcher
          ${H(Te)}
          .adapter=${e}
          canvas-title="Canvas"
          @forge-ai-chatbot-launcher-canvas-open=${o=>t(o.detail)}
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
    `}};function L(e){const t=new h({simulateStreaming:!0,simulateTools:!0,streamingDelay:30,responseDelay:400,tools:[e],simulatedToolCall:{name:e.name,args:ye}});return i`
    <div style=${re}>
      <forge-ai-chatbot-launcher
        .adapter=${t}
        .suggestions=${[{text:"Show me Q3 sales by region",value:"Show me Q3 sales by region"}]}
        @forge-ai-chatbot-launcher-canvas-open=${r=>n("forge-ai-chatbot-launcher-canvas-open")(r.detail)}
        @forge-ai-chatbot-launcher-canvas-close=${n("forge-ai-chatbot-launcher-canvas-close")}>
      </forge-ai-chatbot-launcher>
    </div>
  `}const b={...T,render:()=>L(g)},w={...T,render:()=>L({...g,canvas:{...g.canvas,open:"auto"}})},$={...T,render:()=>L({...g,canvas:{...g.canvas,inline:"card"}})},y={...T,render:()=>L({...g,canvas:{...g.canvas,inline:"card-while-open"}})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"{}",...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:`A first-time user with no chats. \`showHistoryButton\` keeps the entry point in the prompt bar, so the
popover opens on "No chats yet" instead of the button removing itself. "View all" reaches the same
empty state in the full history view, where searching shows "No chats found" — the other empty
message, which the launcher could not reach at all before the button became host-controlled.`,...m.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:"The host rejects the select by calling preventDefault(), then owns the commit. The first thread\nclicked always fails to load, so `selectedThreadId` and the welcome view must stay untouched;\nclicking the same thread again succeeds and the host commits both.",...f.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:`A failed history load with no chats loaded. The history button picks up an error badge, and the
popover shows the error with a retry instead of the "no chats yet" empty state. Retry succeeds.`,...v.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  ...standaloneStoryParams,
  render: () => renderCanvasToolStory(canvasTableTool)
}`,...b.parameters?.docs?.source},description:{story:'The tool\'s own renderer draws an overview card in the thread. Its "View all rows" button opens the full table,\na separate `canvas.renderer`, beside the conversation.',...b.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  ...standaloneStoryParams,
  render: () => renderCanvasToolStory({
    ...canvasTableTool,
    canvas: {
      ...canvasTableTool.canvas,
      open: 'auto'
    }
  })
}`,...w.parameters?.docs?.source},description:{story:"The canvas opens as soon as the tool call renders, leaving the built-in artifact card in the thread to reopen or collapse it.",...w.parameters?.docs?.description}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  ...standaloneStoryParams,
  render: () => renderCanvasToolStory({
    ...canvasTableTool,
    canvas: {
      ...canvasTableTool.canvas,
      inline: 'card'
    }
  })
}`,...$.parameters?.docs?.source},description:{story:"The built-in artifact card replaces the tool's own UI in the thread; clicking it opens the table in the canvas.",...$.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...standaloneStoryParams,
  render: () => renderCanvasToolStory({
    ...canvasTableTool,
    canvas: {
      ...canvasTableTool.canvas,
      inline: 'card-while-open'
    }
  })
}`,...y.parameters?.docs?.source},description:{story:"The overview card renders inline until it is opened in the canvas, then swaps to an artifact card until the canvas closes.",...y.parameters?.docs?.description}}};const xe=["Demo","WithThreadName","WithSuggestions","FullPage","WithCustomHeader","WithHistory","NoChats","ThreadSelectRejection","ThreadHistoryError","WithHeaderActions","WithCanvas","CanvasOnRequest","CanvasAutoOpen","CanvasCard","CanvasCardWhileOpen"],Le=Object.freeze(Object.defineProperty({__proto__:null,CanvasAutoOpen:w,CanvasCard:$,CanvasCardWhileOpen:y,CanvasOnRequest:b,Demo:x,FullPage:D,NoChats:m,ThreadHistoryError:v,ThreadSelectRejection:f,WithCanvas:k,WithCustomHeader:I,WithHeaderActions:M,WithHistory:R,WithSuggestions:S,WithThreadName:C,__namedExportsOrder:xe,default:we},Symbol.toStringTag,{value:"Module"}));export{Le as A,b as C,m as N,f as T,R as W,v as a,k as b,$ as c,w as d,y as e};

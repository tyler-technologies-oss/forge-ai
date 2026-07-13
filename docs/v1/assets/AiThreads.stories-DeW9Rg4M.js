import{x as d}from"./iframe-CDKdqIww.js";import"./ai-threads-BuyXN402.js";import"./ai-chatbot-launcher-DreOZD-V.js";import{M as h}from"./mock-adapter-DymPxr2h.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,g=[{id:"1",title:"Getting Started with AI",createdAt:"2024-01-15T14:30:00Z",messageCount:5},{id:"2",title:"Code Review Discussion",createdAt:"2024-01-14T10:45:00Z",messageCount:12},{id:"3",title:"Project Planning",createdAt:"2024-01-13T16:15:00Z",messageCount:8},{id:"4",title:"Bug Investigation",createdAt:"2024-01-12T09:20:00Z",messageCount:3},{id:"5",title:"Feature Development",createdAt:"2024-01-11T13:00:00Z",messageCount:15}],m="forge-ai-threads",f={title:"AI Components/Primitives/Threads",component:m,argTypes:{threads:{control:"object",description:"Array of threads to display in the navigation list"},totalChats:{control:{type:"number"},description:"Total number of chats available for pagination. Set to 0 to disable infinite scroll."}},args:{threads:g,totalChats:0},render:t=>{const s=new h({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return d`
      <div style="height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-threads
          .threads=${t.threads}
          total-chats=${t.totalChats}
          @forge-ai-threads-select=${e("forge-ai-threads-select")}
          @forge-ai-threads-new-chat=${e("forge-ai-threads-new-chat")}
          @forge-ai-threads-clear-history=${e("forge-ai-threads-clear-history")}
          @forge-ai-threads-load-more=${a=>{e("forge-ai-threads-load-more")(a),setTimeout(()=>{a.detail.appendResults([])},1e3)}}>
          <forge-ai-chatbot-launcher
            .adapter=${s}
            @forge-ai-chatbot-connected=${e("forge-ai-chatbot-connected")}
            @forge-ai-chatbot-message-sent=${e("forge-ai-chatbot-message-sent")}
            @forge-ai-chatbot-message-received=${e("forge-ai-chatbot-message-received")}
            @forge-ai-chatbot-launcher-conversation-start=${e("forge-ai-chatbot-launcher-conversation-start")}>
          </forge-ai-chatbot-launcher>
        </forge-ai-threads>
      </div>
    `}},o={},n={render:()=>{const t=(r,i)=>Array.from({length:i},(p,c)=>({id:`${r+c}`,title:`Thread ${r+c}`,createdAt:new Date(Date.now()-c*864e5).toISOString(),messageCount:Math.floor(Math.random()*20)+1})),s=new h({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});let a=21;const l=t(1,20);return d`
      <div style="height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-threads
          .threads=${l}
          total-chats=${100}
          @forge-ai-threads-select=${e("forge-ai-threads-select")}
          @forge-ai-threads-new-chat=${e("forge-ai-threads-new-chat")}
          @forge-ai-threads-load-more=${r=>{e("forge-ai-threads-load-more")(r),setTimeout(()=>{const i=t(a,10);a+=10,r.detail.appendResults(i)},1e3)}}>
          <forge-ai-chatbot-launcher
            .adapter=${s}
            @forge-ai-chatbot-connected=${e("forge-ai-chatbot-connected")}
            @forge-ai-chatbot-message-sent=${e("forge-ai-chatbot-message-sent")}
            @forge-ai-chatbot-message-received=${e("forge-ai-chatbot-message-received")}
            @forge-ai-chatbot-launcher-conversation-start=${e("forge-ai-chatbot-launcher-conversation-start")}>
          </forge-ai-chatbot-launcher>
        </forge-ai-threads>
      </div>
    `}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const generateThreads = (startId: number, count: number): Thread[] => {
      return Array.from({
        length: count
      }, (_, i) => ({
        id: \`\${startId + i}\`,
        title: \`Thread \${startId + i}\`,
        createdAt: new Date(Date.now() - i * 86400000).toISOString(),
        messageCount: Math.floor(Math.random() * 20) + 1
      }));
    };
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    let nextThreadId = 21;
    const initialThreads = generateThreads(1, 20);
    return html\`
      <div style="height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-threads
          .threads=\${initialThreads}
          total-chats=\${100}
          @forge-ai-threads-select=\${action('forge-ai-threads-select')}
          @forge-ai-threads-new-chat=\${action('forge-ai-threads-new-chat')}
          @forge-ai-threads-load-more=\${(e: CustomEvent) => {
      action('forge-ai-threads-load-more')(e);
      setTimeout(() => {
        const moreThreads = generateThreads(nextThreadId, 10);
        nextThreadId += 10;
        e.detail.appendResults(moreThreads);
      }, 1000);
    }}>
          <forge-ai-chatbot-launcher
            .adapter=\${adapter}
            @forge-ai-chatbot-connected=\${action('forge-ai-chatbot-connected')}
            @forge-ai-chatbot-message-sent=\${action('forge-ai-chatbot-message-sent')}
            @forge-ai-chatbot-message-received=\${action('forge-ai-chatbot-message-received')}
            @forge-ai-chatbot-launcher-conversation-start=\${action('forge-ai-chatbot-launcher-conversation-start')}>
          </forge-ai-chatbot-launcher>
        </forge-ai-threads>
      </div>
    \`;
  }
}`,...n.parameters?.docs?.source}}};const u=["Demo","InfiniteScroll"],y=Object.freeze(Object.defineProperty({__proto__:null,Demo:o,InfiniteScroll:n,__namedExportsOrder:u,default:f},Symbol.toStringTag,{value:"Module"}));export{y as A,o as D};

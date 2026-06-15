import{x as d}from"./iframe-DmoIR2iB.js";import"./ai-threads-DpGwwmol.js";import"./scaffold-DOBZgpq7.js";import"./ai-chatbot-launcher-4ge9M48M.js";import{M as h}from"./mock-adapter-uhjSnHDA.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,l=[{id:"1",title:"Getting Started with AI",createdAt:"2024-01-15T14:30:00Z",messageCount:5},{id:"2",title:"Code Review Discussion",createdAt:"2024-01-14T10:45:00Z",messageCount:12},{id:"3",title:"Project Planning",createdAt:"2024-01-13T16:15:00Z",messageCount:8},{id:"4",title:"Bug Investigation",createdAt:"2024-01-12T09:20:00Z",messageCount:3},{id:"5",title:"Feature Development",createdAt:"2024-01-11T13:00:00Z",messageCount:15}],f="forge-ai-threads",m={title:"AI Components/Primitives/Threads",component:f,argTypes:{threads:{control:"object",description:"Array of threads to display in the navigation list"}},args:{threads:l},render:o=>{const s=new h({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return d`
      <forge-scaffold>
        <forge-app-bar slot="header" title-text="Threads"></forge-app-bar>>
        <forge-ai-threads
          slot="body"
          style="height: 600px;"
          .threads=${o.threads}
          @forge-ai-threads-select=${e("forge-ai-threads-select")}
          @forge-ai-threads-new-chat=${e("forge-ai-threads-new-chat")}
          @forge-ai-threads-clear-history=${e("forge-ai-threads-clear-history")}>
          <forge-ai-chatbot-launcher
            .adapter=${s}
            @forge-ai-chatbot-connected=${e("forge-ai-chatbot-connected")}
            @forge-ai-chatbot-message-sent=${e("forge-ai-chatbot-message-sent")}
            @forge-ai-chatbot-message-received=${e("forge-ai-chatbot-message-received")}
            @forge-ai-chatbot-launcher-conversation-start=${e("forge-ai-chatbot-launcher-conversation-start")}>
          </forge-ai-chatbot-launcher>
        </forge-ai-threads>
      </forge-scaffold>
    `}},a={},r={render:()=>{const o=(t,n)=>Array.from({length:n},(u,i)=>({id:`${t+i}`,title:`Thread ${t+i}`,createdAt:new Date(Date.now()-i*864e5).toISOString(),messageCount:Math.floor(Math.random()*20)+1})),s=new h({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});let c=21;const g=o(1,20);return d`
      <forge-scaffold>
        <forge-app-bar slot="header" title-text="Threads with Infinite Scroll"></forge-app-bar>
        <forge-ai-threads
          slot="body"
          style="height: 600px; border: 1px solid var(--forge-theme-outline);"
          .threads=${g}
          @forge-ai-threads-select=${e("forge-ai-threads-select")}
          @forge-ai-threads-new-chat=${e("forge-ai-threads-new-chat")}
          @forge-ai-threads-load-more=${t=>{e("forge-ai-threads-load-more")(t),setTimeout(()=>{const n=o(c,10);c+=10,t.detail.appendResults(n)},1e3)}}>
          <forge-ai-chatbot-launcher
            .adapter=${s}
            @forge-ai-chatbot-connected=${e("forge-ai-chatbot-connected")}
            @forge-ai-chatbot-message-sent=${e("forge-ai-chatbot-message-sent")}
            @forge-ai-chatbot-message-received=${e("forge-ai-chatbot-message-received")}
            @forge-ai-chatbot-launcher-conversation-start=${e("forge-ai-chatbot-launcher-conversation-start")}>
          </forge-ai-chatbot-launcher>
        </forge-ai-threads>
      </forge-scaffold>
    `}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
      <forge-scaffold>
        <forge-app-bar slot="header" title-text="Threads with Infinite Scroll"></forge-app-bar>
        <forge-ai-threads
          slot="body"
          style="height: 600px; border: 1px solid var(--forge-theme-outline);"
          .threads=\${initialThreads}
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
      </forge-scaffold>
    \`;
  }
}`,...r.parameters?.docs?.source}}};const p=["Demo","InfiniteScroll"],S=Object.freeze(Object.defineProperty({__proto__:null,Demo:a,InfiniteScroll:r,__namedExportsOrder:p,default:m},Symbol.toStringTag,{value:"Module"}));export{S as A,a as D};

import{x as l,i as M}from"./iframe-Bw2u-vpc.js";import{r as u}from"./class-map-D3KeiMuF.js";import{n as m}from"./ref-YwmFed37.js";import{n as S}from"./when-CI7b_ccM.js";import{M as T}from"./mock-adapter-DymPxr2h.js";import"./ai-threads-C6RB0psD.js";import"./ai-chatbot-launcher-J8O4BRf-.js";import"./ai-threads-search-BCjDfhjD.js";import"./scaffold-BtIQK-Ry.js";import"./preload-helper-PPVm8Dsz.js";import"./property-D8uSlpb8.js";import"./markdown-C0nyZhUE.js";import"./custom-element-UsVr97OX.js";import"./ai-edit-thread-BT1csIIl.js";import"./ai-dropdown-menu-Drx1Ljob.js";import"./query-assigned-nodes-bVY-CfgN.js";import"./if-defined-CmrZs3Oc.js";import"./popover-DFIKMxzg.js";import"./overlay-BbFnEif-.js";import"./floating-ui.dom-C0FiGihr.js";import"./utils-BGBq21po.js";import"./ai-dropdown-menu-item-DBOqy3mQ.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-icon-CiggPghx.js";import"./ai-gradient-container-Bgnj6_tW.js";import"./ai-spinner-DTx7K_IC.js";import"./ai-modal-BqtXbgmD.js";import"./ai-chatbot-base-D5LPqfL7.js";import"./ai-attachment-Biir6dFT.js";import"./tooltip-D_ToKNwE.js";import"./ai-chat-header-NLrB4GQt.js";import"./ai-agent-info-CRcWqVQN.js";import"./ai-agent-selector-CNXcq8Li.js";import"./ai-file-picker-CPOyvClG.js";import"./ai-message-thread-CKKXGr3e.js";import"./ai-response-message-toolbar-epbW3GPT.js";import"./ai-empty-state-e2g83Wx-.js";import"./ai-error-message-CZWUz-ZA.js";import"./ai-response-message-32REYoGS.js";import"./ai-thinking-indicator-CC2RwDDm.js";import"./ai-user-message-D4Ftg9pm.js";import"./ai-user-message-toolbar-DqyDgos8.js";import"./ai-prompt-C1SXWAjE.js";import"./ai-suggestions-Un4Gj_GR.js";import"./ai-voice-input-CA2i1i3u.js";var b=Object.defineProperty,g=(i,e,t,s)=>{for(var r=void 0,a=i.length-1,o;a>=0;a--)(o=i[a])&&(r=o(e,t,r)||r);return r&&b(e,t,r),r};const{action:n}=__STORYBOOK_MODULE_ACTIONS__,w="forge-ai-threads",y=(i,e,t)=>{const s=Date.now()-864e5;return t.map((r,a)=>({id:`${i}-msg-${a+1}`,role:r.role,content:r.content,timestamp:s+a*5e3,status:"complete"}))},d=[{title:"Getting started with AI",topic:"AI basics",conversation:[{role:"user",content:"How do I get started with AI integration?"},{role:"assistant",content:`Great question! Here are 3 key steps to get started:

1. **Choose your AI provider** - Select a service like OpenAI, Anthropic, or Azure OpenAI
2. **Set up authentication** - Configure API keys and authentication
3. **Implement the adapter** - Create an adapter class that implements the required interface

Would you like me to go into more detail on any of these steps?`},{role:"user",content:"Tell me more about implementing the adapter"},{role:"assistant",content:`The adapter is the bridge between your application and the AI service. Here's a basic example:

\`\`\`typescript
class MyAdapter implements AgentAdapter {
  async sendMessage(message: string) {
    // Call your AI service API
    const response = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ message })
    });
    return response.json();
  }
}
\`\`\`

The adapter handles authentication, message formatting, and streaming responses.`},{role:"user",content:"Perfect, thanks!"}]},{title:"Data analysis question",topic:"Data analysis",conversation:[{role:"user",content:"I need to analyze sales data from the past quarter. Where should I start?"},{role:"assistant",content:`I'd be happy to help with your sales data analysis! Let's break this down:

**Step 1: Data Collection**
- Gather all sales records from Q1
- Ensure data includes dates, amounts, products, and regions

**Step 2: Data Cleaning**
- Remove duplicates
- Handle missing values
- Standardize formats

**Step 3: Analysis**
- Calculate key metrics (revenue, growth rate, average order value)
- Identify trends and patterns
- Compare against previous quarters

What format is your data currently in?`},{role:"user",content:"It's in CSV format with columns for date, product_id, quantity, and revenue"},{role:"assistant",content:`Perfect! CSV is easy to work with. Here's a Python script to get you started:

\`\`\`python
import pandas as pd

# Load the data
df = pd.read_csv('sales_data.csv')

# Basic analysis
total_revenue = df['revenue'].sum()
avg_order = df['revenue'].mean()
top_products = df.groupby('product_id')['quantity'].sum().sort_values(ascending=False)

print(f'Total Revenue: \${total_revenue:,.2f}')
print(f'Average Order: \${avg_order:.2f}')
print('\\nTop Products:')
print(top_products.head(10))
\`\`\`

This will give you a solid foundation for your analysis.`}]},{title:"How do I implement authentication?",topic:"Authentication",conversation:[{role:"user",content:"How do I implement authentication in my app?"},{role:"assistant",content:`There are several authentication approaches you can take:

**1. JWT (JSON Web Tokens)**
- Stateless authentication
- Good for APIs and SPAs
- Tokens stored client-side

**2. Session-based**
- Server stores session data
- More secure for traditional web apps
- Requires session storage (Redis, database)

**3. OAuth 2.0 / OpenID Connect**
- Social login (Google, GitHub, etc.)
- Industry standard
- More complex setup

What type of application are you building?`},{role:"user",content:"A React SPA with a Node.js backend"}]}],I=i=>{const e=[],t=new Map;if(i==="empty")return{threads:e,messagesMap:t};const s=["API integration help","Debugging production issue","Performance optimization","Database schema design","Testing strategies","Code review feedback","Deployment questions","Security best practices","UI/UX improvements","Refactoring advice","Error handling patterns","State management","GraphQL vs REST","Microservices architecture","CI/CD pipeline setup","Docker configuration","AWS deployment","TypeScript migration","React best practices","Node.js optimization","Database indexing","Caching strategies","WebSocket implementation","Authentication flow","File upload handling","Real-time features","Mobile responsiveness","Accessibility improvements","SEO optimization","Analytics integration"],r=i==="small"?3:i==="medium"?12:30;for(let a=0;a<r;a++){const o=`thread-${a+1}`,f=a<d.length,h={id:o,title:f?d[a].title:s[a%s.length],createdAt:new Date(Date.now()-a*36e5).toISOString(),messageCount:Math.floor(Math.random()*15)+1};e.push(h),f?t.set(o,y(o,d[a].topic,d[a].conversation)):t.set(o,y(o,h.title,[{role:"user",content:`Can you help me with ${h.title.toLowerCase()}?`},{role:"assistant",content:`Of course! I'd be happy to help you with ${h.title.toLowerCase()}. Let me guide you through the key concepts and best practices.`}]))}return{threads:e,messagesMap:t}};class p extends M{constructor(){super(...arguments),this.currentView="launcher",this.selectedThreadId=null,this.threads=[],this.launcherElement=null,this.searchElement=null,this.threadsElement=null,this.threadMessagesMap=new Map,this.allThreads=[],this.allMessagesMap=new Map,this.dataSize="medium",this.handleNewChat=()=>{n("forge-ai-threads-new-chat")(),this.currentView="launcher",this.selectedThreadId=null,this.launcherElement?.startNewChat(),this.threadsElement&&(this.threadsElement._selectedThreadId=null)},this.handleSearchChats=()=>{n("forge-ai-threads-search-chats")(),this.currentView="search",setTimeout(()=>{this.searchElement?.querySelector("input")?.focus()},0)},this.handleThreadSelect=async e=>{n("forge-ai-threads-select")(e);const{id:t}=e.detail;this.selectedThreadId=t;const s=this.threadMessagesMap.get(t)||[];await this.launcherElement?.setThreadState({threadId:t,messages:s},{skipAnimation:!0})},this.handleSearchSelect=async e=>{n("forge-ai-threads-search-select")(e);const{id:t}=e.detail;this.currentView="launcher",this.selectedThreadId=t,this.threadsElement&&(this.threadsElement._selectedThreadId=t),await this.updateComplete;const s=this.threadMessagesMap.get(t)||[];await this.launcherElement?.setThreadState({threadId:t,messages:s},{skipAnimation:!0})},this.handleSearchNewChat=()=>{n("forge-ai-threads-search-new-chat")(),this.currentView="launcher",this.selectedThreadId=null,this.launcherElement?.startNewChat(),this.threadsElement&&(this.threadsElement._selectedThreadId=null)},this.handleMessageSent=e=>{n("forge-ai-chatbot-message-sent")(e),this.selectedThreadId&&setTimeout(()=>{const t=this.launcherElement?.getMessages()||[];this.threadMessagesMap.set(this.selectedThreadId,t)},1e3)},this.handleMessageReceived=e=>{n("forge-ai-chatbot-message-received")(e),this.selectedThreadId&&setTimeout(()=>{const t=this.launcherElement?.getMessages()||[];this.threadMessagesMap.set(this.selectedThreadId,t)},100)},this.handleLoadMore=e=>{n("forge-ai-threads-load-more")(e),setTimeout(()=>{const t=this.threads.length,s=this.allThreads.slice(t,t+10);s.length>0&&(this.threads=[...this.threads,...s],s.forEach(r=>{const a=this.allMessagesMap.get(r.id);a&&this.threadMessagesMap.set(r.id,a)})),e.detail.appendResults(s)},1e3)},this.handleSearchLoadMore=e=>{n("forge-ai-threads-search-load-more")(e),setTimeout(()=>{const t=this.threads.length,s=this.allThreads.slice(t,t+10);s.length>0&&(this.threads=[...this.threads,...s],s.forEach(r=>{const a=this.allMessagesMap.get(r.id);a&&this.threadMessagesMap.set(r.id,a)})),e.detail.appendResults(s)},1e3)}}connectedCallback(){super.connectedCallback(),this.adapter=new T({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});const e=I(this.dataSize);this.allThreads=e.threads,this.allMessagesMap=e.messagesMap;const t=this.dataSize==="large"?20:this.allThreads.length;this.threads=this.allThreads.slice(0,t),this.threadMessagesMap=new Map(Array.from(this.allMessagesMap.entries()).slice(0,t))}get totalChats(){return this.dataSize==="large"?this.allThreads.length:0}createRenderRoot(){return this}render(){return l`
      <forge-scaffold style="height: 600px;">
        <forge-app-bar slot="header" title-text="AI Assistant"></forge-app-bar>
        <forge-ai-threads
          slot="body"
          ${m(e=>{this.threadsElement=e})}
          .threads=${this.threads}
          total-chats=${this.totalChats}
          @forge-ai-threads-select=${this.handleThreadSelect}
          @forge-ai-threads-new-chat=${this.handleNewChat}
          @forge-ai-threads-search-chats=${this.handleSearchChats}
          @forge-ai-threads-load-more=${this.handleLoadMore}>
          ${S(this.currentView==="launcher",()=>l`
              <forge-ai-chatbot-launcher
                ${m(e=>{this.launcherElement=e})}
                .adapter=${this.adapter}
                @forge-ai-chatbot-connected=${n("forge-ai-chatbot-connected")}
                @forge-ai-chatbot-message-sent=${this.handleMessageSent}
                @forge-ai-chatbot-message-received=${this.handleMessageReceived}
                @forge-ai-chatbot-tool-call=${n("forge-ai-chatbot-tool-call")}
                @forge-ai-chatbot-error=${n("forge-ai-chatbot-error")}
                @forge-ai-chatbot-info=${n("forge-ai-chatbot-info")}
                @forge-ai-chatbot-launcher-conversation-start=${n("forge-ai-chatbot-launcher-conversation-start")}>
              </forge-ai-chatbot-launcher>
            `,()=>l`
              <forge-ai-threads-search
                ${m(e=>{this.searchElement=e})}
                .threads=${this.threads}
                total-chats=${this.totalChats}
                @forge-ai-threads-search-select=${this.handleSearchSelect}
                @forge-ai-threads-search-new-chat=${this.handleSearchNewChat}
                @forge-ai-threads-search-load-more=${this.handleSearchLoadMore}>
              </forge-ai-threads-search>
            `)}
        </forge-ai-threads>
      </forge-scaffold>
    `}}g([u()],p.prototype,"currentView");g([u()],p.prototype,"selectedThreadId");g([u()],p.prototype,"threads");const ge={title:"AI Components/Form Factors/Threads",component:w,argTypes:{dataSize:{control:{type:"select"},options:["empty","small","medium","large"],description:"Amount of mock thread data to display"}},args:{dataSize:"medium"},render:i=>{const e="threads-demo-container";customElements.get(e)||customElements.define(e,p);const t=document.createElement(e);return t.dataSize=i.dataSize,l`${t}`}},c={};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};const fe=["Demo"];export{c as Demo,fe as __namedExportsOrder,ge as default};

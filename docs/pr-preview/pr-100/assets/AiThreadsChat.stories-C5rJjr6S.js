import{x as d,i as M}from"./iframe-DEcNNnXJ.js";import{r as u}from"./query-9TxMBkJB.js";import{n as p}from"./ref-C279TtBj.js";import{n as S}from"./when-CI7b_ccM.js";import{M as T}from"./mock-adapter-LuDjfxfL.js";import"./ai-threads-DqUvi1RH.js";import"./ai-chatbot-launcher-C5HUZPSG.js";import"./ai-threads-search-CGDdZ76P.js";import"./scaffold-B3tvoTjz.js";import"./preload-helper-PPVm8Dsz.js";import"./property-kyPe6sCU.js";import"./class-map-BeSwq50g.js";import"./agent-adapter-CiODA7QC.js";import"./utils-BRoM8yNS.js";import"./custom-element-UsVr97OX.js";import"./ai-edit-thread-bdO5OXTJ.js";import"./ai-dropdown-menu-DZ-UPflM.js";import"./query-assigned-elements-BEBxHFen.js";import"./if-defined-DzeJCBd6.js";import"./popover-CzpxPole.js";import"./overlay-CR0j_AGH.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./query-assigned-nodes-B5tHLvsz.js";import"./utils-DIqd7FWX.js";import"./ai-dropdown-menu-item-C2nO9by0.js";import"./ai-icon-BspMNLtd.js";import"./ai-gradient-container-CAmK_cVH.js";import"./ai-spinner-BKmKk2t_.js";import"./ai-modal-Df7Vrhbb.js";import"./ai-chatbot-base-ClCOmQuL.js";import"./provide-Bxw6gKTd.js";import"./consume-D3B5J4hk.js";import"./ai-message-thread-CVB0JWwg.js";import"./ai-response-message-toolbar-Cqsj9loB.js";import"./tooltip-BLyoi8k-.js";import"./ai-thinking-indicator-C4R-43xw.js";import"./ai-empty-state-DEIO1xCB.js";import"./ai-client-message-Ct5nn5EI.js";import"./ai-error-message-DUskqYlc.js";import"./ai-response-message-8jfA_nvf.js";import"./ai-user-message-BztNxitL.js";import"./ai-user-message-toolbar-BcLesbuC.js";import"./ai-attachment-BBk0kxXU.js";import"./ai-chat-header-BLvMq46H.js";import"./ai-agent-info-Bj9slowf.js";import"./ai-agent-selector-BcXerDCA.js";import"./ai-file-picker-gx2jRvHe.js";import"./ai-prompt-9-A6ys6h.js";import"./ai-suggestions-2enq6qc8.js";import"./ai-voice-input-CUxIgJ-Z.js";var b=Object.defineProperty,g=(o,e,t,a)=>{for(var r=void 0,s=o.length-1,i;s>=0;s--)(i=o[s])&&(r=i(e,t,r)||r);return r&&b(e,t,r),r};const{action:n}=__STORYBOOK_MODULE_ACTIONS__,w="forge-ai-threads",y=(o,e)=>{const t=Date.now()-864e5;return e.map((a,r)=>({id:`${o}-msg-${r+1}`,role:a.role,content:a.content,timestamp:t+r*5e3,status:"complete"}))},m=[{title:"Getting started with AI",topic:"AI basics",conversation:[{role:"user",content:"How do I get started with AI integration?"},{role:"assistant",content:`Great question! Here are 3 key steps to get started:

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

What type of application are you building?`},{role:"user",content:"A React SPA with a Node.js backend"}]}],I=o=>{const e=[],t=new Map;if(o==="empty")return{threads:e,messagesMap:t};const a=["API integration help","Debugging production issue","Performance optimization","Database schema design","Testing strategies","Code review feedback","Deployment questions","Security best practices","UI/UX improvements","Refactoring advice","Error handling patterns","State management","GraphQL vs REST","Microservices architecture","CI/CD pipeline setup","Docker configuration","AWS deployment","TypeScript migration","React best practices","Node.js optimization","Database indexing","Caching strategies","WebSocket implementation","Authentication flow","File upload handling","Real-time features","Mobile responsiveness","Accessibility improvements","SEO optimization","Analytics integration"],r=o==="small"?3:o==="medium"?12:30;for(let s=0;s<r;s++){const i=`thread-${s+1}`,f=s<m.length,l={id:i,title:f?m[s].title:a[s%a.length],createdAt:new Date(Date.now()-s*36e5).toISOString(),messageCount:Math.floor(Math.random()*15)+1};e.push(l),f?t.set(i,y(i,m[s].conversation)):t.set(i,y(i,[{role:"user",content:`Can you help me with ${l.title.toLowerCase()}?`},{role:"assistant",content:`Of course! I'd be happy to help you with ${l.title.toLowerCase()}. Let me guide you through the key concepts and best practices.`}]))}return{threads:e,messagesMap:t}};class c extends M{constructor(){super(...arguments),this.currentView="launcher",this.selectedThreadId=null,this.threads=[],this.launcherElement=null,this.searchElement=null,this.threadsElement=null,this.threadMessagesMap=new Map,this.allThreads=[],this.allMessagesMap=new Map,this.dataSize="medium",this.handleNewChat=()=>{n("forge-ai-threads-new-chat")(),this.currentView="launcher",this.selectedThreadId=null,this.launcherElement?.startNewChat(),this.threadsElement&&(this.threadsElement._selectedThreadId=null)},this.handleSearchChats=()=>{n("forge-ai-threads-search-chats")(),this.currentView="search",setTimeout(()=>{this.searchElement?.querySelector("input")?.focus()},0)},this.handleThreadSelect=async e=>{n("forge-ai-threads-select")(e);const{id:t}=e.detail;this.selectedThreadId=t;const a=this.threadMessagesMap.get(t)||[];await this.launcherElement?.setThreadState({threadId:t,messages:a},{skipAnimation:!0})},this.handleSearchSelect=async e=>{n("forge-ai-threads-search-select")(e);const{id:t}=e.detail;this.currentView="launcher",this.selectedThreadId=t,this.threadsElement&&(this.threadsElement._selectedThreadId=t),await this.updateComplete;const a=this.threadMessagesMap.get(t)||[];await this.launcherElement?.setThreadState({threadId:t,messages:a},{skipAnimation:!0})},this.handleSearchNewChat=()=>{n("forge-ai-threads-search-new-chat")(),this.currentView="launcher",this.selectedThreadId=null,this.launcherElement?.startNewChat(),this.threadsElement&&(this.threadsElement._selectedThreadId=null)},this.handleMessageSent=e=>{n("forge-ai-chatbot-message-sent")(e),this.selectedThreadId&&setTimeout(()=>{const t=this.launcherElement?.getMessages()||[];this.threadMessagesMap.set(this.selectedThreadId,t)},1e3)},this.handleMessageReceived=e=>{n("forge-ai-chatbot-message-received")(e),this.selectedThreadId&&setTimeout(()=>{const t=this.launcherElement?.getMessages()||[];this.threadMessagesMap.set(this.selectedThreadId,t)},100)},this.handleLoadMore=e=>{n("forge-ai-threads-load-more")(e),setTimeout(()=>{const t=this.threads.length,a=this.allThreads.slice(t,t+10);a.length>0&&(this.threads=[...this.threads,...a],a.forEach(r=>{const s=this.allMessagesMap.get(r.id);s&&this.threadMessagesMap.set(r.id,s)})),e.detail.appendResults(a)},1e3)},this.handleSearchLoadMore=e=>{n("forge-ai-threads-search-load-more")(e),setTimeout(()=>{const t=this.threads.length,a=this.allThreads.slice(t,t+10);a.length>0&&(this.threads=[...this.threads,...a],a.forEach(r=>{const s=this.allMessagesMap.get(r.id);s&&this.threadMessagesMap.set(r.id,s)})),e.detail.appendResults(a)},1e3)}}connectedCallback(){super.connectedCallback(),this.adapter=new T({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});const e=I(this.dataSize);this.allThreads=e.threads,this.allMessagesMap=e.messagesMap;const t=this.dataSize==="large"?20:this.allThreads.length;this.threads=this.allThreads.slice(0,t),this.threadMessagesMap=new Map(Array.from(this.allMessagesMap.entries()).slice(0,t))}get totalChats(){return this.dataSize==="large"?this.allThreads.length:0}createRenderRoot(){return this}render(){return d`
      <forge-scaffold style="height: 600px;">
        <forge-app-bar slot="header" title-text="AI Assistant"></forge-app-bar>
        <forge-ai-threads
          slot="body"
          ${p(e=>{this.threadsElement=e})}
          .threads=${this.threads}
          total-chats=${this.totalChats}
          @forge-ai-threads-select=${this.handleThreadSelect}
          @forge-ai-threads-new-chat=${this.handleNewChat}
          @forge-ai-threads-search-chats=${this.handleSearchChats}
          @forge-ai-threads-load-more=${this.handleLoadMore}>
          ${S(this.currentView==="launcher",()=>d`
              <forge-ai-chatbot-launcher
                ${p(e=>{this.launcherElement=e})}
                .adapter=${this.adapter}
                @forge-ai-chatbot-connected=${n("forge-ai-chatbot-connected")}
                @forge-ai-chatbot-message-sent=${this.handleMessageSent}
                @forge-ai-chatbot-message-received=${this.handleMessageReceived}
                @forge-ai-chatbot-tool-call=${n("forge-ai-chatbot-tool-call")}
                @forge-ai-chatbot-error=${n("forge-ai-chatbot-error")}
                @forge-ai-chatbot-info=${n("forge-ai-chatbot-info")}
                @forge-ai-chatbot-launcher-conversation-start=${n("forge-ai-chatbot-launcher-conversation-start")}>
              </forge-ai-chatbot-launcher>
            `,()=>d`
              <forge-ai-threads-search
                ${p(e=>{this.searchElement=e})}
                .threads=${this.threads}
                total-chats=${this.totalChats}
                @forge-ai-threads-search-select=${this.handleSearchSelect}
                @forge-ai-threads-search-new-chat=${this.handleSearchNewChat}
                @forge-ai-threads-search-load-more=${this.handleSearchLoadMore}>
              </forge-ai-threads-search>
            `)}
        </forge-ai-threads>
      </forge-scaffold>
    `}}g([u()],c.prototype,"currentView");g([u()],c.prototype,"selectedThreadId");g([u()],c.prototype,"threads");const Te={title:"AI Components/Form Factors/Threads",component:w,argTypes:{dataSize:{control:{type:"select"},options:["empty","small","medium","large"],description:"Amount of mock thread data to display"}},args:{dataSize:"medium"},render:o=>{const e="threads-demo-container";customElements.get(e)||customElements.define(e,c);const t=document.createElement(e);return t.dataSize=o.dataSize,d`${t}`}},h={};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"{}",...h.parameters?.docs?.source}}};const be=["Demo"];export{h as Demo,be as __namedExportsOrder,Te as default};

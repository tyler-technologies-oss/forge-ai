import{x as v}from"./iframe-JS6wZa5t.js";import"./ai-conversations-panel-D-jgEtgM.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-CzP0hvoa.js";import"./class-map-B6Wsz2a7.js";import"./when-CI7b_ccM.js";import"./ai-edit-thread-BCUZfuhn.js";import"./ref-CMZ1GDcC.js";import"./ai-dropdown-menu-BrVMDBOp.js";import"./query-assigned-nodes-CBvrqxop.js";import"./if-defined-4iJwT7ay.js";import"./popover-DLBAIfMN.js";import"./overlay-DAlCbg2u.js";import"./floating-ui.dom-C0FiGihr.js";import"./utils-BGBq21po.js";import"./ai-dropdown-menu-item-DJcoZIHk.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-modal-7_as5TQd.js";import"./ai-icon-CRLSxXHp.js";import"./ai-gradient-container-tW-pQav-.js";import"./ai-spinner-DNI8bbKS.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,I="forge-ai-conversations-panel",y=(n,a=0)=>{const r=["TypeScript","Web Components","React","Angular","Vue","CSS Grid","Flexbox","JavaScript","Performance","Testing"],t=["best practices","tutorial","comparison","explained","patterns","optimization","debugging"];return Array.from({length:n},(s,i)=>{const o=a+i,l=r[o%r.length],c=t[Math.floor(o/r.length)%t.length],d=Math.floor(o/5)+1,h=Math.floor(Math.random()*20)+1;return{id:`thread-${o+1}`,title:`${l} ${c}`,createdAt:new Date(Date.now()-d*24*60*60*1e3).toISOString(),messageCount:h}})},$=[{id:"thread-1",title:"TypeScript best practices",createdAt:new Date(Date.now()-7200*1e3).toISOString(),messageCount:8},{id:"thread-2",title:"Web component architecture",createdAt:new Date(Date.now()-300*60*1e3).toISOString(),messageCount:15},{id:"thread-3",title:"How to use localStorage?",createdAt:new Date(Date.now()-1440*60*1e3).toISOString(),messageCount:3},{id:"thread-4",title:"Lit reactive controllers explained",createdAt:new Date(Date.now()-2160*60*1e3).toISOString(),messageCount:12},{id:"thread-5",title:"CSS Grid vs Flexbox comparison",createdAt:new Date(Date.now()-2880*60*1e3).toISOString(),messageCount:6},{id:"thread-6",title:"JavaScript async/await patterns",createdAt:new Date(Date.now()-4320*60*1e3).toISOString(),messageCount:9},{id:"thread-7",title:"React hooks vs Lit reactive properties",createdAt:new Date(Date.now()-5760*60*1e3).toISOString(),messageCount:7},{id:"thread-8",title:"Testing web components",createdAt:new Date(Date.now()-7200*60*1e3).toISOString(),messageCount:11}],V={title:"AI Components/Primitives/Conversations Panel",component:I,argTypes:{recentThreads:{control:"object",description:"Array of recent conversation threads to display"},totalChats:{control:{type:"number"},description:"Total number of chats available for pagination. Set to 0 to disable infinite scroll."},selectedThreadId:{control:"text",description:"ID of the currently selected thread"},showConversationRename:{control:"boolean",description:"Show rename option in conversations panel"},showConversationDelete:{control:"boolean",description:"Show delete option in conversations panel"}},args:{recentThreads:$,totalChats:0,selectedThreadId:null,showConversationRename:!0,showConversationDelete:!0},render:n=>v`
      <div style="width: 400px; height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-conversations-panel
          .recentThreads=${n.recentThreads}
          total-chats=${n.totalChats}
          .selectedThreadId=${n.selectedThreadId}
          ?show-conversation-rename=${n.showConversationRename}
          ?show-conversation-delete=${n.showConversationDelete}
          @forge-ai-conversations-panel-select=${e("forge-ai-conversations-panel-select")}
          @forge-ai-conversations-panel-new-chat=${e("forge-ai-conversations-panel-new-chat")}
          @forge-ai-conversations-panel-close=${e("forge-ai-conversations-panel-close")}
          @forge-ai-conversations-panel-search=${e("forge-ai-conversations-panel-search")}
          @forge-ai-conversations-panel-load-more=${a=>{e("forge-ai-conversations-panel-load-more")(a),setTimeout(()=>{a.detail.appendResults([])},1e3)}}
          @forge-ai-conversations-panel-rename=${e("forge-ai-conversations-panel-rename")}
          @forge-ai-conversations-panel-delete=${e("forge-ai-conversations-panel-delete")}>
        </forge-ai-conversations-panel>
      </div>
    `},m={},f={args:{selectedThreadId:"thread-2"}},u={args:{recentThreads:[]}},w={args:{recentThreads:$},render:n=>v`
      <div style="width: 400px; height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-conversations-panel
          .recentThreads=${n.recentThreads}
          .selectedThreadId=${n.selectedThreadId}
          ?show-conversation-rename=${n.showConversationRename}
          ?show-conversation-delete=${n.showConversationDelete}
          @forge-ai-conversations-panel-select=${e("forge-ai-conversations-panel-select")}
          @forge-ai-conversations-panel-new-chat=${e("forge-ai-conversations-panel-new-chat")}
          @forge-ai-conversations-panel-close=${e("forge-ai-conversations-panel-close")}
          @forge-ai-conversations-panel-search=${a=>{e("forge-ai-conversations-panel-search")(a)}}
          @forge-ai-conversations-panel-rename=${e("forge-ai-conversations-panel-rename")}
          @forge-ai-conversations-panel-delete=${e("forge-ai-conversations-panel-delete")}>
        </forge-ai-conversations-panel>
      </div>
      <div style="margin-top: 16px;">
        <p><strong>Local Search (Default)</strong></p>
        <p>
          Click "Search chats" to enter search chats. Type in the search field - results are filtered locally from
          recent threads with 300ms debounce.
        </p>
      </div>
    `},S={args:{recentThreads:$},render:n=>{const a=[...$,{id:"thread-9",title:"Advanced TypeScript generics tutorial",createdAt:new Date(Date.now()-6048e5).toISOString(),messageCount:18},{id:"thread-10",title:"Building custom Lit directives",createdAt:new Date(Date.now()-6912e5).toISOString(),messageCount:5},{id:"thread-11",title:"TypeScript utility types explained",createdAt:new Date(Date.now()-12096e5).toISOString(),messageCount:14},{id:"thread-12",title:"Performance optimization techniques",createdAt:new Date(Date.now()-1296e6).toISOString(),messageCount:22}],r=t=>{e("forge-ai-conversations-panel-search")(t),t.preventDefault();const{query:s,setResults:i}=t.detail;setTimeout(()=>{const o=a.filter(l=>l.title.toLowerCase().includes(s.toLowerCase()));i(o)},1e3)};return v`
      <div style="width: 400px; height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-conversations-panel
          .recentThreads=${n.recentThreads}
          .selectedThreadId=${n.selectedThreadId}
          ?show-conversation-rename=${n.showConversationRename}
          ?show-conversation-delete=${n.showConversationDelete}
          @forge-ai-conversations-panel-select=${e("forge-ai-conversations-panel-select")}
          @forge-ai-conversations-panel-new-chat=${e("forge-ai-conversations-panel-new-chat")}
          @forge-ai-conversations-panel-close=${e("forge-ai-conversations-panel-close")}
          @forge-ai-conversations-panel-search=${r}
          @forge-ai-conversations-panel-rename=${e("forge-ai-conversations-panel-rename")}
          @forge-ai-conversations-panel-delete=${e("forge-ai-conversations-panel-delete")}>
        </forge-ai-conversations-panel>
      </div>
      <div style="margin-top: 16px; max-width: 400px;">
        <p><strong>Async Search (preventDefault)</strong></p>
        <p>
          Click "Search chats" and type in the search field. This story simulates an async search by calling
          <code>preventDefault()</code> on the search event and returning results via the <code>setResults</code>
          callback after 1 second.
        </p>
        <p>
          The component shows a loading spinner while waiting. Results include threads beyond the recent 8 shown in
          recent chats (12 total searchable threads).
        </p>
      </div>
    `}},T={args:{recentThreads:[]},render:n=>{const a=[{id:"thread-1",title:"Old conversation about TypeScript",createdAt:new Date(Date.now()-18144e5).toISOString(),messageCount:25},{id:"thread-2",title:"Archived discussion on web components",createdAt:new Date(Date.now()-2592e6).toISOString(),messageCount:19}],r=t=>{e("forge-ai-conversations-panel-search")(t),t.preventDefault();const{query:s,setResults:i}=t.detail;setTimeout(()=>{const o=a.filter(l=>l.title.toLowerCase().includes(s.toLowerCase()));i(o)},800)};return v`
      <div style="width: 400px; height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-conversations-panel
          .recentThreads=${n.recentThreads}
          .selectedThreadId=${n.selectedThreadId}
          ?show-conversation-rename=${n.showConversationRename}
          ?show-conversation-delete=${n.showConversationDelete}
          @forge-ai-conversations-panel-select=${e("forge-ai-conversations-panel-select")}
          @forge-ai-conversations-panel-new-chat=${e("forge-ai-conversations-panel-new-chat")}
          @forge-ai-conversations-panel-close=${e("forge-ai-conversations-panel-close")}
          @forge-ai-conversations-panel-search=${r}
          @forge-ai-conversations-panel-rename=${e("forge-ai-conversations-panel-rename")}
          @forge-ai-conversations-panel-delete=${e("forge-ai-conversations-panel-delete")}>
        </forge-ai-conversations-panel>
      </div>
      <div style="margin-top: 16px; max-width: 400px;">
        <p><strong>No Recent Threads + Async Search</strong></p>
        <p>
          No recent threads are shown in recent chats. Click "Search chats" to search through older archived
          conversations.
        </p>
      </div>
    `}},C={args:{recentThreads:y(20)},render:n=>{const t=y(120);let s=0,i=1;const o=c=>{e("forge-ai-conversations-panel-search")(c.detail),c.preventDefault();const{query:d,setResults:h}=c.detail;setTimeout(()=>{const p=t.filter(g=>g.title.toLowerCase().includes(d.toLowerCase()));h(p.slice(0,20)),s=0},500)},l=c=>{e("forge-ai-conversations-panel-load-more")(c.detail);const{query:d,appendResults:h}=c.detail;setTimeout(()=>{if(d===""){i++;const p=i*20,g=p+20,D=t.slice(p,g);h(D)}else{s++;const p=t.filter(x=>x.title.toLowerCase().includes(d.toLowerCase())),g=s*20,D=g+20,A=p.slice(g,D);h(A)}},500)};return v`
      <div style="width: 400px; height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-conversations-panel
          .recentThreads=${n.recentThreads}
          total-chats=${120}
          .selectedThreadId=${n.selectedThreadId}
          ?show-conversation-rename=${n.showConversationRename}
          ?show-conversation-delete=${n.showConversationDelete}
          @forge-ai-conversations-panel-select=${e("forge-ai-conversations-panel-select")}
          @forge-ai-conversations-panel-new-chat=${e("forge-ai-conversations-panel-new-chat")}
          @forge-ai-conversations-panel-close=${e("forge-ai-conversations-panel-close")}
          @forge-ai-conversations-panel-search=${o}
          @forge-ai-conversations-panel-load-more=${l}
          @forge-ai-conversations-panel-rename=${e("forge-ai-conversations-panel-rename")}
          @forge-ai-conversations-panel-delete=${e("forge-ai-conversations-panel-delete")}>
        </forge-ai-conversations-panel>
      </div>
      <div style="margin-top: 16px; max-width: 400px;">
        <p><strong>Infinite Scroll Demo</strong></p>
        <p>
          Demonstrates infinite scroll for both recent chats and search chats. Scroll to the bottom of the list to load
          more results. Results load 20 at a time with a 500ms delay to simulate async loading.
        </p>
        <p><strong>Features:</strong></p>
        <ul>
          <li>Recent chats: Scroll recent chats list to load more</li>
          <li>Search chats: Click "Search chats", enter a term (try "TypeScript"), and scroll to load more results</li>
          <li>Single load-more event handles both contexts (distinguished by query field)</li>
          <li>Loading spinner shows during fetch</li>
          <li>Pagination stops when all results loaded</li>
          <li>Total dataset: ${120} threads</li>
        </ul>
      </div>
    `}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    selectedThreadId: 'thread-2'
  }
}`,...f.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    recentThreads: []
  }
}`,...u.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    recentThreads: sampleThreads
  },
  render: args => {
    return html\`
      <div style="width: 400px; height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-conversations-panel
          .recentThreads=\${args.recentThreads}
          .selectedThreadId=\${args.selectedThreadId}
          ?show-conversation-rename=\${args.showConversationRename}
          ?show-conversation-delete=\${args.showConversationDelete}
          @forge-ai-conversations-panel-select=\${action('forge-ai-conversations-panel-select')}
          @forge-ai-conversations-panel-new-chat=\${action('forge-ai-conversations-panel-new-chat')}
          @forge-ai-conversations-panel-close=\${action('forge-ai-conversations-panel-close')}
          @forge-ai-conversations-panel-search=\${(e: CustomEvent<ForgeAiConversationsPanelSearchEventData>) => {
      action('forge-ai-conversations-panel-search')(e);
    }}
          @forge-ai-conversations-panel-rename=\${action('forge-ai-conversations-panel-rename')}
          @forge-ai-conversations-panel-delete=\${action('forge-ai-conversations-panel-delete')}>
        </forge-ai-conversations-panel>
      </div>
      <div style="margin-top: 16px;">
        <p><strong>Local Search (Default)</strong></p>
        <p>
          Click "Search chats" to enter search chats. Type in the search field - results are filtered locally from
          recent threads with 300ms debounce.
        </p>
      </div>
    \`;
  }
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    recentThreads: sampleThreads
  },
  render: args => {
    const allThreads: Thread[] = [...sampleThreads, {
      id: 'thread-9',
      title: 'Advanced TypeScript generics tutorial',
      createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      messageCount: 18
    }, {
      id: 'thread-10',
      title: 'Building custom Lit directives',
      createdAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
      messageCount: 5
    }, {
      id: 'thread-11',
      title: 'TypeScript utility types explained',
      createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
      messageCount: 14
    }, {
      id: 'thread-12',
      title: 'Performance optimization techniques',
      createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
      messageCount: 22
    }];
    const handleSearch = (e: CustomEvent<ForgeAiConversationsPanelSearchEventData>) => {
      action('forge-ai-conversations-panel-search')(e);
      e.preventDefault();
      const {
        query,
        setResults
      } = e.detail;
      setTimeout(() => {
        const results = allThreads.filter(thread => thread.title.toLowerCase().includes(query.toLowerCase()));
        setResults(results);
      }, 1000);
    };
    return html\`
      <div style="width: 400px; height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-conversations-panel
          .recentThreads=\${args.recentThreads}
          .selectedThreadId=\${args.selectedThreadId}
          ?show-conversation-rename=\${args.showConversationRename}
          ?show-conversation-delete=\${args.showConversationDelete}
          @forge-ai-conversations-panel-select=\${action('forge-ai-conversations-panel-select')}
          @forge-ai-conversations-panel-new-chat=\${action('forge-ai-conversations-panel-new-chat')}
          @forge-ai-conversations-panel-close=\${action('forge-ai-conversations-panel-close')}
          @forge-ai-conversations-panel-search=\${handleSearch}
          @forge-ai-conversations-panel-rename=\${action('forge-ai-conversations-panel-rename')}
          @forge-ai-conversations-panel-delete=\${action('forge-ai-conversations-panel-delete')}>
        </forge-ai-conversations-panel>
      </div>
      <div style="margin-top: 16px; max-width: 400px;">
        <p><strong>Async Search (preventDefault)</strong></p>
        <p>
          Click "Search chats" and type in the search field. This story simulates an async search by calling
          <code>preventDefault()</code> on the search event and returning results via the <code>setResults</code>
          callback after 1 second.
        </p>
        <p>
          The component shows a loading spinner while waiting. Results include threads beyond the recent 8 shown in
          recent chats (12 total searchable threads).
        </p>
      </div>
    \`;
  }
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    recentThreads: []
  },
  render: args => {
    const searchableThreads: Thread[] = [{
      id: 'thread-1',
      title: 'Old conversation about TypeScript',
      createdAt: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
      messageCount: 25
    }, {
      id: 'thread-2',
      title: 'Archived discussion on web components',
      createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
      messageCount: 19
    }];
    const handleSearch = (e: CustomEvent<ForgeAiConversationsPanelSearchEventData>) => {
      action('forge-ai-conversations-panel-search')(e);
      e.preventDefault();
      const {
        query,
        setResults
      } = e.detail;
      setTimeout(() => {
        const results = searchableThreads.filter(thread => thread.title.toLowerCase().includes(query.toLowerCase()));
        setResults(results);
      }, 800);
    };
    return html\`
      <div style="width: 400px; height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-conversations-panel
          .recentThreads=\${args.recentThreads}
          .selectedThreadId=\${args.selectedThreadId}
          ?show-conversation-rename=\${args.showConversationRename}
          ?show-conversation-delete=\${args.showConversationDelete}
          @forge-ai-conversations-panel-select=\${action('forge-ai-conversations-panel-select')}
          @forge-ai-conversations-panel-new-chat=\${action('forge-ai-conversations-panel-new-chat')}
          @forge-ai-conversations-panel-close=\${action('forge-ai-conversations-panel-close')}
          @forge-ai-conversations-panel-search=\${handleSearch}
          @forge-ai-conversations-panel-rename=\${action('forge-ai-conversations-panel-rename')}
          @forge-ai-conversations-panel-delete=\${action('forge-ai-conversations-panel-delete')}>
        </forge-ai-conversations-panel>
      </div>
      <div style="margin-top: 16px; max-width: 400px;">
        <p><strong>No Recent Threads + Async Search</strong></p>
        <p>
          No recent threads are shown in recent chats. Click "Search chats" to search through older archived
          conversations.
        </p>
      </div>
    \`;
  }
}`,...T.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    recentThreads: generateThreads(20)
  },
  render: args => {
    const TOTAL_THREADS = 120;
    const PAGE_SIZE = 20;
    const allThreads = generateThreads(TOTAL_THREADS);
    let searchChatsCurrentPage = 0;
    let recentChatsCurrentPage = 1;
    const handleSearch = (e: CustomEvent<ForgeAiConversationsPanelSearchEventData>) => {
      action('forge-ai-conversations-panel-search')(e.detail);
      e.preventDefault();
      const {
        query,
        setResults
      } = e.detail;
      setTimeout(() => {
        const filtered = allThreads.filter(t => t.title.toLowerCase().includes(query.toLowerCase()));
        setResults(filtered.slice(0, PAGE_SIZE));
        searchChatsCurrentPage = 0;
      }, 500);
    };
    const handleLoadMore = (e: CustomEvent<ForgeAiConversationsPanelLoadMoreEventData>) => {
      action('forge-ai-conversations-panel-load-more')(e.detail);
      const {
        query,
        appendResults
      } = e.detail;
      setTimeout(() => {
        if (query === '') {
          recentChatsCurrentPage++;
          const start = recentChatsCurrentPage * PAGE_SIZE;
          const end = start + PAGE_SIZE;
          const nextPage = allThreads.slice(start, end);
          appendResults(nextPage);
        } else {
          searchChatsCurrentPage++;
          const filtered = allThreads.filter(t => t.title.toLowerCase().includes(query.toLowerCase()));
          const start = searchChatsCurrentPage * PAGE_SIZE;
          const end = start + PAGE_SIZE;
          const nextPage = filtered.slice(start, end);
          appendResults(nextPage);
        }
      }, 500);
    };
    return html\`
      <div style="width: 400px; height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-conversations-panel
          .recentThreads=\${args.recentThreads}
          total-chats=\${TOTAL_THREADS}
          .selectedThreadId=\${args.selectedThreadId}
          ?show-conversation-rename=\${args.showConversationRename}
          ?show-conversation-delete=\${args.showConversationDelete}
          @forge-ai-conversations-panel-select=\${action('forge-ai-conversations-panel-select')}
          @forge-ai-conversations-panel-new-chat=\${action('forge-ai-conversations-panel-new-chat')}
          @forge-ai-conversations-panel-close=\${action('forge-ai-conversations-panel-close')}
          @forge-ai-conversations-panel-search=\${handleSearch}
          @forge-ai-conversations-panel-load-more=\${handleLoadMore}
          @forge-ai-conversations-panel-rename=\${action('forge-ai-conversations-panel-rename')}
          @forge-ai-conversations-panel-delete=\${action('forge-ai-conversations-panel-delete')}>
        </forge-ai-conversations-panel>
      </div>
      <div style="margin-top: 16px; max-width: 400px;">
        <p><strong>Infinite Scroll Demo</strong></p>
        <p>
          Demonstrates infinite scroll for both recent chats and search chats. Scroll to the bottom of the list to load
          more results. Results load 20 at a time with a 500ms delay to simulate async loading.
        </p>
        <p><strong>Features:</strong></p>
        <ul>
          <li>Recent chats: Scroll recent chats list to load more</li>
          <li>Search chats: Click "Search chats", enter a term (try "TypeScript"), and scroll to load more results</li>
          <li>Single load-more event handles both contexts (distinguished by query field)</li>
          <li>Loading spinner shows during fetch</li>
          <li>Pagination stops when all results loaded</li>
          <li>Total dataset: \${TOTAL_THREADS} threads</li>
        </ul>
      </div>
    \`;
  }
}`,...C.parameters?.docs?.source}}};const Y=["Demo","WithSelectedThread","EmptyState","WithLocalSearch","WithAsyncSearch","WithNoRecentThreads","WithInfiniteScroll"];export{m as Demo,u as EmptyState,S as WithAsyncSearch,C as WithInfiniteScroll,w as WithLocalSearch,T as WithNoRecentThreads,f as WithSelectedThread,Y as __namedExportsOrder,V as default};

import{x as p}from"./iframe-Dgt9eTI-.js";import"./ai-conversations-panel-CwDn2yBz.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-Bw7vS1iB.js";import"./base-WW3bLuII.js";import"./class-map-DcPyR-i2.js";import"./when-CI7b_ccM.js";import"./ref-WGjiGXeE.js";import"./ai-icon-CPAIx5Wa.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-hPBpYg_A.js";import"./ai-spinner-B18XZywO.js";import"./ai-dropdown-menu-D0Hpv60-.js";import"./query-assigned-elements-BJKjVPl1.js";import"./if-defined-BxpsnrKp.js";import"./popover-D6eQA2MJ.js";import"./overlay-BEw4eyG3.js";import"./floating-ui.dom-C0FiGihr.js";import"./query-assigned-nodes-bGd5Z61O.js";import"./ai-dropdown-menu-item-Vs-OjV29.js";import"./ai-modal-Cx_1wuxl.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,S="forge-ai-conversations-panel",D=(n,r=0)=>{const s=["TypeScript","Web Components","React","Angular","Vue","CSS Grid","Flexbox","JavaScript","Performance","Testing"],a=["best practices","tutorial","comparison","explained","patterns","optimization","debugging"];return Array.from({length:n},(i,l)=>{const o=r+l,t=s[o%s.length],d=a[Math.floor(o/s.length)%a.length],c=Math.floor(o/5)+1;return{id:`thread-${o+1}`,title:`${t} ${d}`,time:c===1?"Yesterday":`${c} days ago`,date:new Date(Date.now()-c*24*60*60*1e3)}})},h=[{id:"thread-1",title:"TypeScript best practices",time:"2:30 PM",date:new Date(Date.now()-7200*1e3)},{id:"thread-2",title:"Web component architecture",time:"11:45 AM",date:new Date(Date.now()-300*60*1e3)},{id:"thread-3",title:"How to use localStorage?",time:"Yesterday",date:new Date(Date.now()-1440*60*1e3)},{id:"thread-4",title:"Lit reactive controllers explained",time:"Yesterday",date:new Date(Date.now()-2160*60*1e3)},{id:"thread-5",title:"CSS Grid vs Flexbox comparison",time:"2 days ago",date:new Date(Date.now()-2880*60*1e3)},{id:"thread-6",title:"JavaScript async/await patterns",time:"3 days ago",date:new Date(Date.now()-4320*60*1e3)},{id:"thread-7",title:"React hooks vs Lit reactive properties",time:"4 days ago",date:new Date(Date.now()-5760*60*1e3)},{id:"thread-8",title:"Testing web components",time:"5 days ago",date:new Date(Date.now()-7200*60*1e3)}],B={title:"AI Components/Primitives/Conversations Panel",component:S,argTypes:{recentThreads:{control:"object",description:"Array of recent conversation threads to display"},selectedThreadId:{control:"text",description:"ID of the currently selected thread"},showConversationRename:{control:"boolean",description:"Show rename option in conversations panel"},showConversationDelete:{control:"boolean",description:"Show delete option in conversations panel"}},args:{recentThreads:h,selectedThreadId:null,showConversationRename:!0,showConversationDelete:!0},render:n=>p`
      <div style="width: 400px; height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-conversations-panel
          .recentThreads=${n.recentThreads}
          .selectedThreadId=${n.selectedThreadId}
          ?show-conversation-rename=${n.showConversationRename}
          ?show-conversation-delete=${n.showConversationDelete}
          @forge-ai-conversations-panel-select=${e("forge-ai-conversations-panel-select")}
          @forge-ai-conversations-panel-new-chat=${e("forge-ai-conversations-panel-new-chat")}
          @forge-ai-conversations-panel-close=${e("forge-ai-conversations-panel-close")}
          @forge-ai-conversations-panel-search=${e("forge-ai-conversations-panel-search")}
          @forge-ai-conversations-panel-rename=${e("forge-ai-conversations-panel-rename")}
          @forge-ai-conversations-panel-delete=${e("forge-ai-conversations-panel-delete")}>
        </forge-ai-conversations-panel>
      </div>
    `},v={},g={args:{selectedThreadId:"thread-2"}},m={args:{recentThreads:[]}},f={args:{recentThreads:h},render:n=>p`
      <div style="width: 400px; height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-conversations-panel
          .recentThreads=${n.recentThreads}
          .selectedThreadId=${n.selectedThreadId}
          ?show-conversation-rename=${n.showConversationRename}
          ?show-conversation-delete=${n.showConversationDelete}
          @forge-ai-conversations-panel-select=${e("forge-ai-conversations-panel-select")}
          @forge-ai-conversations-panel-new-chat=${e("forge-ai-conversations-panel-new-chat")}
          @forge-ai-conversations-panel-close=${e("forge-ai-conversations-panel-close")}
          @forge-ai-conversations-panel-search=${r=>{e("forge-ai-conversations-panel-search")(r)}}
          @forge-ai-conversations-panel-rename=${e("forge-ai-conversations-panel-rename")}
          @forge-ai-conversations-panel-delete=${e("forge-ai-conversations-panel-delete")}>
        </forge-ai-conversations-panel>
      </div>
      <div style="margin-top: 16px;">
        <p><strong>Local Search (Default)</strong></p>
        <p>
          Click "Search chats" to enter search view. Type in the search field - results are filtered locally from recent
          threads with 300ms debounce.
        </p>
      </div>
    `},w={args:{recentThreads:h},render:n=>{const r=[...h,{id:"thread-9",title:"Advanced TypeScript generics tutorial",time:"1 week ago",date:new Date(Date.now()-6048e5)},{id:"thread-10",title:"Building custom Lit directives",time:"1 week ago",date:new Date(Date.now()-6912e5)},{id:"thread-11",title:"TypeScript utility types explained",time:"2 weeks ago",date:new Date(Date.now()-12096e5)},{id:"thread-12",title:"Performance optimization techniques",time:"2 weeks ago",date:new Date(Date.now()-1296e6)}],s=a=>{e("forge-ai-conversations-panel-search")(a),a.preventDefault();const{query:i,setResults:l}=a.detail;setTimeout(()=>{const o=r.filter(t=>t.title.toLowerCase().includes(i.toLowerCase()));l(o)},1e3)};return p`
      <div style="width: 400px; height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-conversations-panel
          .recentThreads=${n.recentThreads}
          .selectedThreadId=${n.selectedThreadId}
          ?show-conversation-rename=${n.showConversationRename}
          ?show-conversation-delete=${n.showConversationDelete}
          @forge-ai-conversations-panel-select=${e("forge-ai-conversations-panel-select")}
          @forge-ai-conversations-panel-new-chat=${e("forge-ai-conversations-panel-new-chat")}
          @forge-ai-conversations-panel-close=${e("forge-ai-conversations-panel-close")}
          @forge-ai-conversations-panel-search=${s}
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
          The component shows a loading spinner while waiting. Results include threads beyond the recent 8 shown in the
          main view (12 total searchable threads).
        </p>
      </div>
    `}},u={args:{recentThreads:[]},render:n=>{const r=[{id:"thread-1",title:"Old conversation about TypeScript",time:"3 weeks ago",date:new Date(Date.now()-18144e5)},{id:"thread-2",title:"Archived discussion on web components",time:"1 month ago",date:new Date(Date.now()-2592e6)}],s=a=>{e("forge-ai-conversations-panel-search")(a),a.preventDefault();const{query:i,setResults:l}=a.detail;setTimeout(()=>{const o=r.filter(t=>t.title.toLowerCase().includes(i.toLowerCase()));l(o)},800)};return p`
      <div style="width: 400px; height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-conversations-panel
          .recentThreads=${n.recentThreads}
          .selectedThreadId=${n.selectedThreadId}
          ?show-conversation-rename=${n.showConversationRename}
          ?show-conversation-delete=${n.showConversationDelete}
          @forge-ai-conversations-panel-select=${e("forge-ai-conversations-panel-select")}
          @forge-ai-conversations-panel-new-chat=${e("forge-ai-conversations-panel-new-chat")}
          @forge-ai-conversations-panel-close=${e("forge-ai-conversations-panel-close")}
          @forge-ai-conversations-panel-search=${s}
          @forge-ai-conversations-panel-rename=${e("forge-ai-conversations-panel-rename")}
          @forge-ai-conversations-panel-delete=${e("forge-ai-conversations-panel-delete")}>
        </forge-ai-conversations-panel>
      </div>
      <div style="margin-top: 16px; max-width: 400px;">
        <p><strong>No Recent Threads + Async Search</strong></p>
        <p>
          No recent threads are shown in the main view. Click "Search chats" to search through older archived
          conversations.
        </p>
      </div>
    `}},T={args:{recentThreads:h},render:n=>{const a=D(120);let i=0;const l=t=>{e("forge-ai-conversations-panel-search")(t.detail),t.preventDefault();const{query:d,setResults:c}=t.detail;setTimeout(()=>{const $=a.filter(y=>y.title.toLowerCase().includes(d.toLowerCase()));c($.slice(0,20)),i=0},500)},o=t=>{e("forge-ai-conversations-panel-load-more")(t.detail);const{appendResults:d}=t.detail;setTimeout(()=>{i++;const c=i*20,$=c+20,y=a.slice(c,$);d(y)},500)};return p`
      <div style="width: 400px; height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-conversations-panel
          .recentThreads=${n.recentThreads}
          .selectedThreadId=${n.selectedThreadId}
          ?show-conversation-rename=${n.showConversationRename}
          ?show-conversation-delete=${n.showConversationDelete}
          @forge-ai-conversations-panel-select=${e("forge-ai-conversations-panel-select")}
          @forge-ai-conversations-panel-new-chat=${e("forge-ai-conversations-panel-new-chat")}
          @forge-ai-conversations-panel-close=${e("forge-ai-conversations-panel-close")}
          @forge-ai-conversations-panel-search=${l}
          @forge-ai-conversations-panel-load-more=${o}
          @forge-ai-conversations-panel-rename=${e("forge-ai-conversations-panel-rename")}
          @forge-ai-conversations-panel-delete=${e("forge-ai-conversations-panel-delete")}>
        </forge-ai-conversations-panel>
      </div>
      <div style="margin-top: 16px; max-width: 400px;">
        <p><strong>Infinite Scroll Demo</strong></p>
        <p>
          Click "Search chats" and enter a search term (try "TypeScript"). Results load 20 at a time with a 500ms delay
          to simulate async search.
        </p>
        <p><strong>Features:</strong></p>
        <ul>
          <li>Initial search returns first 20 results</li>
          <li>Scroll to bottom triggers load-more event</li>
          <li>Each load-more appends 20 more results (500ms delay)</li>
          <li>Loading spinner shows during fetch</li>
          <li>Pagination stops when all results loaded</li>
          <li>Total dataset: ${120} threads</li>
        </ul>
      </div>
    `}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"{}",...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    selectedThreadId: 'thread-2'
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    recentThreads: []
  }
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
          Click "Search chats" to enter search view. Type in the search field - results are filtered locally from recent
          threads with 300ms debounce.
        </p>
      </div>
    \`;
  }
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    recentThreads: sampleThreads
  },
  render: args => {
    const allThreads: Thread[] = [...sampleThreads, {
      id: 'thread-9',
      title: 'Advanced TypeScript generics tutorial',
      time: '1 week ago',
      date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    }, {
      id: 'thread-10',
      title: 'Building custom Lit directives',
      time: '1 week ago',
      date: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000)
    }, {
      id: 'thread-11',
      title: 'TypeScript utility types explained',
      time: '2 weeks ago',
      date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000)
    }, {
      id: 'thread-12',
      title: 'Performance optimization techniques',
      time: '2 weeks ago',
      date: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000)
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
          The component shows a loading spinner while waiting. Results include threads beyond the recent 8 shown in the
          main view (12 total searchable threads).
        </p>
      </div>
    \`;
  }
}`,...w.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    recentThreads: []
  },
  render: args => {
    const searchableThreads: Thread[] = [{
      id: 'thread-1',
      title: 'Old conversation about TypeScript',
      time: '3 weeks ago',
      date: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000)
    }, {
      id: 'thread-2',
      title: 'Archived discussion on web components',
      time: '1 month ago',
      date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
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
          No recent threads are shown in the main view. Click "Search chats" to search through older archived
          conversations.
        </p>
      </div>
    \`;
  }
}`,...u.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    recentThreads: sampleThreads
  },
  render: args => {
    const TOTAL_THREADS = 120;
    const PAGE_SIZE = 20;
    const allThreads = generateThreads(TOTAL_THREADS);
    let currentPage = 0;
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
        currentPage = 0;
      }, 500);
    };
    const handleLoadMore = (e: CustomEvent<ForgeAiConversationsPanelLoadMoreEventData>) => {
      action('forge-ai-conversations-panel-load-more')(e.detail);
      const {
        appendResults
      } = e.detail;
      setTimeout(() => {
        currentPage++;
        const start = currentPage * PAGE_SIZE;
        const end = start + PAGE_SIZE;
        const nextPage = allThreads.slice(start, end);
        appendResults(nextPage);
      }, 500);
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
          @forge-ai-conversations-panel-load-more=\${handleLoadMore}
          @forge-ai-conversations-panel-rename=\${action('forge-ai-conversations-panel-rename')}
          @forge-ai-conversations-panel-delete=\${action('forge-ai-conversations-panel-delete')}>
        </forge-ai-conversations-panel>
      </div>
      <div style="margin-top: 16px; max-width: 400px;">
        <p><strong>Infinite Scroll Demo</strong></p>
        <p>
          Click "Search chats" and enter a search term (try "TypeScript"). Results load 20 at a time with a 500ms delay
          to simulate async search.
        </p>
        <p><strong>Features:</strong></p>
        <ul>
          <li>Initial search returns first 20 results</li>
          <li>Scroll to bottom triggers load-more event</li>
          <li>Each load-more appends 20 more results (500ms delay)</li>
          <li>Loading spinner shows during fetch</li>
          <li>Pagination stops when all results loaded</li>
          <li>Total dataset: \${TOTAL_THREADS} threads</li>
        </ul>
      </div>
    \`;
  }
}`,...T.parameters?.docs?.source}}};const J=["Demo","WithSelectedThread","EmptyState","WithLocalSearch","WithAsyncSearch","WithNoRecentThreads","WithInfiniteScroll"];export{v as Demo,m as EmptyState,w as WithAsyncSearch,T as WithInfiniteScroll,f as WithLocalSearch,u as WithNoRecentThreads,g as WithSelectedThread,J as __namedExportsOrder,B as default};

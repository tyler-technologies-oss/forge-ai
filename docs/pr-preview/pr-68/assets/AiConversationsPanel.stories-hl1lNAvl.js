import{x as g}from"./iframe-4PSpynT3.js";import"./ai-conversations-panel-aRX1u15a.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-DDgNQfxw.js";import"./base-DEhi61ki.js";import"./class-map-DNOv9QtK.js";import"./when-CI7b_ccM.js";import"./ref-DzHNudZC.js";import"./ai-icon-CwWMCvm9.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-D2oG_4Yj.js";import"./ai-spinner-BY0xbpzF.js";import"./ai-dropdown-menu-DBnDtsw-.js";import"./query-assigned-elements-BQQxo_v9.js";import"./if-defined--LWskl4_.js";import"./popover-qPAgfF95.js";import"./overlay-Bk48A2Mo.js";import"./floating-ui.dom-C0FiGihr.js";import"./query-assigned-nodes-BN3gESMJ.js";import"./ai-dropdown-menu-item-DAaYG3AM.js";import"./ai-modal-Bd_LQOAw.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,D="forge-ai-conversations-panel",C=(n,r=0)=>{const s=["TypeScript","Web Components","React","Angular","Vue","CSS Grid","Flexbox","JavaScript","Performance","Testing"],t=["best practices","tutorial","comparison","explained","patterns","optimization","debugging"];return Array.from({length:n},(i,c)=>{const o=r+c,a=s[o%s.length],d=t[Math.floor(o/s.length)%t.length],l=Math.floor(o/5)+1,h=Math.floor(Math.random()*20)+1;return{id:`thread-${o+1}`,title:`${a} ${d}`,createdAt:new Date(Date.now()-l*24*60*60*1e3).toISOString(),messageCount:h}})},p=[{id:"thread-1",title:"TypeScript best practices",createdAt:new Date(Date.now()-7200*1e3).toISOString(),messageCount:8},{id:"thread-2",title:"Web component architecture",createdAt:new Date(Date.now()-300*60*1e3).toISOString(),messageCount:15},{id:"thread-3",title:"How to use localStorage?",createdAt:new Date(Date.now()-1440*60*1e3).toISOString(),messageCount:3},{id:"thread-4",title:"Lit reactive controllers explained",createdAt:new Date(Date.now()-2160*60*1e3).toISOString(),messageCount:12},{id:"thread-5",title:"CSS Grid vs Flexbox comparison",createdAt:new Date(Date.now()-2880*60*1e3).toISOString(),messageCount:6},{id:"thread-6",title:"JavaScript async/await patterns",createdAt:new Date(Date.now()-4320*60*1e3).toISOString(),messageCount:9},{id:"thread-7",title:"React hooks vs Lit reactive properties",createdAt:new Date(Date.now()-5760*60*1e3).toISOString(),messageCount:7},{id:"thread-8",title:"Testing web components",createdAt:new Date(Date.now()-7200*60*1e3).toISOString(),messageCount:11}],J={title:"AI Components/Primitives/Conversations Panel",component:D,argTypes:{recentThreads:{control:"object",description:"Array of recent conversation threads to display"},selectedThreadId:{control:"text",description:"ID of the currently selected thread"},showConversationRename:{control:"boolean",description:"Show rename option in conversations panel"},showConversationDelete:{control:"boolean",description:"Show delete option in conversations panel"}},args:{recentThreads:p,selectedThreadId:null,showConversationRename:!0,showConversationDelete:!0},render:n=>g`
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
    `},v={},m={args:{selectedThreadId:"thread-2"}},f={args:{recentThreads:[]}},u={args:{recentThreads:p},render:n=>g`
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
    `},w={args:{recentThreads:p},render:n=>{const r=[...p,{id:"thread-9",title:"Advanced TypeScript generics tutorial",createdAt:new Date(Date.now()-6048e5).toISOString(),messageCount:18},{id:"thread-10",title:"Building custom Lit directives",createdAt:new Date(Date.now()-6912e5).toISOString(),messageCount:5},{id:"thread-11",title:"TypeScript utility types explained",createdAt:new Date(Date.now()-12096e5).toISOString(),messageCount:14},{id:"thread-12",title:"Performance optimization techniques",createdAt:new Date(Date.now()-1296e6).toISOString(),messageCount:22}],s=t=>{e("forge-ai-conversations-panel-search")(t),t.preventDefault();const{query:i,setResults:c}=t.detail;setTimeout(()=>{const o=r.filter(a=>a.title.toLowerCase().includes(i.toLowerCase()));c(o)},1e3)};return g`
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
    `}},T={args:{recentThreads:[]},render:n=>{const r=[{id:"thread-1",title:"Old conversation about TypeScript",createdAt:new Date(Date.now()-18144e5).toISOString(),messageCount:25},{id:"thread-2",title:"Archived discussion on web components",createdAt:new Date(Date.now()-2592e6).toISOString(),messageCount:19}],s=t=>{e("forge-ai-conversations-panel-search")(t),t.preventDefault();const{query:i,setResults:c}=t.detail;setTimeout(()=>{const o=r.filter(a=>a.title.toLowerCase().includes(i.toLowerCase()));c(o)},800)};return g`
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
    `}},S={args:{recentThreads:p},render:n=>{const t=C(120);let i=0;const c=a=>{e("forge-ai-conversations-panel-search")(a.detail),a.preventDefault();const{query:d,setResults:l}=a.detail;setTimeout(()=>{const h=t.filter($=>$.title.toLowerCase().includes(d.toLowerCase()));l(h.slice(0,20)),i=0},500)},o=a=>{e("forge-ai-conversations-panel-load-more")(a.detail);const{appendResults:d}=a.detail;setTimeout(()=>{i++;const l=i*20,h=l+20,$=t.slice(l,h);d($)},500)};return g`
      <div style="width: 400px; height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-conversations-panel
          .recentThreads=${n.recentThreads}
          .selectedThreadId=${n.selectedThreadId}
          ?show-conversation-rename=${n.showConversationRename}
          ?show-conversation-delete=${n.showConversationDelete}
          @forge-ai-conversations-panel-select=${e("forge-ai-conversations-panel-select")}
          @forge-ai-conversations-panel-new-chat=${e("forge-ai-conversations-panel-new-chat")}
          @forge-ai-conversations-panel-close=${e("forge-ai-conversations-panel-close")}
          @forge-ai-conversations-panel-search=${c}
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
    `}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"{}",...v.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    selectedThreadId: 'thread-2'
  }
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    recentThreads: []
  }
}`,...f.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
          The component shows a loading spinner while waiting. Results include threads beyond the recent 8 shown in the
          main view (12 total searchable threads).
        </p>
      </div>
    \`;
  }
}`,...w.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
          No recent threads are shown in the main view. Click "Search chats" to search through older archived
          conversations.
        </p>
      </div>
    \`;
  }
}`,...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};const j=["Demo","WithSelectedThread","EmptyState","WithLocalSearch","WithAsyncSearch","WithNoRecentThreads","WithInfiniteScroll"];export{v as Demo,f as EmptyState,w as WithAsyncSearch,S as WithInfiniteScroll,u as WithLocalSearch,T as WithNoRecentThreads,m as WithSelectedThread,j as __namedExportsOrder,J as default};

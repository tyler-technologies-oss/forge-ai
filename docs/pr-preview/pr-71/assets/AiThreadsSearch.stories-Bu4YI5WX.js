import{x as C}from"./iframe-2E2vvT2R.js";import"./ai-threads-search-D35K7UEM.js";import"./ai-threads-CxwUYamn.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-DtRSdPDs.js";import"./class-map-AgGcGwBm.js";import"./when-CI7b_ccM.js";import"./ai-edit-thread-DTLywI_y.js";import"./ref-BDlRal_7.js";import"./ai-dropdown-menu-CINB-DMk.js";import"./query-assigned-nodes-C9F2GzW-.js";import"./if-defined-C4VTxOf0.js";import"./popover-CSWML16V.js";import"./overlay-DylHKuML.js";import"./floating-ui.dom-C0FiGihr.js";import"./utils-BGBq21po.js";import"./ai-dropdown-menu-item-C6pHI7Os.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-spinner-BEmlCaQK.js";import"./ai-modal-B9X0PgvB.js";import"./ai-icon-D6YHQcru.js";import"./ai-gradient-container-BWmTGFA1.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,t=(r,a=0)=>{const s=["Getting Started with AI","Data Analysis Question","Code Review Discussion","Project Planning","Bug Investigation","Feature Development"];return Array.from({length:r},(o,n)=>({id:`thread-${a+n+1}`,title:`${s[n%s.length]}`,createdAt:new Date(Date.now()-(n+a)*864e5).toISOString(),messageCount:Math.floor(Math.random()*20)+1}))},R="forge-ai-threads-search",J={title:"AI Components/Primitives/Threads Search",component:R,argTypes:{threads:{control:"object",description:"Array of threads to display"},totalChats:{control:{type:"number"},description:"Total number of chats available for pagination. Set to 0 to disable infinite scroll."},showNewChat:{control:"boolean",description:'Show "New chat" button in header'},showThreadRename:{control:"boolean",description:"Show rename action in thread menu"},showThreadDelete:{control:"boolean",description:"Show delete action in thread menu"},placeholder:{control:"text",description:"Placeholder text for search input"},emptyMessage:{control:"text",description:"Message displayed when no results found"}},args:{threads:t(10),totalChats:0,showNewChat:!0,placeholder:"Search conversations...",emptyMessage:"No conversations found"},render:r=>C`
      <div style="height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-threads-search
          .threads=${r.threads}
          total-chats=${r.totalChats}
          ?show-new-chat=${r.showNewChat}
          ?show-thread-rename=${r.showThreadRename}
          ?show-thread-delete=${r.showThreadDelete}
          placeholder=${r.placeholder}
          empty-message=${r.emptyMessage}
          @forge-ai-threads-search-query=${e("forge-ai-threads-search-query")}
          @forge-ai-threads-search-load-more=${a=>{e("forge-ai-threads-search-load-more")(a),setTimeout(()=>{a.detail.appendResults([])},1e3)}}
          @forge-ai-threads-search-select=${e("forge-ai-threads-search-select")}
          @forge-ai-threads-search-new-chat=${e("forge-ai-threads-search-new-chat")}
          @forge-ai-threads-search-rename=${e("forge-ai-threads-search-rename")}
          @forge-ai-threads-search-delete=${e("forge-ai-threads-search-delete")}>
        </forge-ai-threads-search>
      </div>
    `},i={},l={args:{threads:t(30),showNewChat:!0}},g={args:{threads:[],showNewChat:!0},render:r=>{const a=t(50),s=o=>{o.preventDefault();const{query:n,setResults:T}=o.detail;e("forge-ai-threads-search-query")(o),setTimeout(()=>{const h=a.filter(d=>d.title.toLowerCase().includes(n.toLowerCase()));T(h.slice(0,20))},1e3)};return C`
      <div style="height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-threads-search
          .threads=${r.threads}
          ?show-new-chat=${r.showNewChat}
          @forge-ai-threads-search-query=${s}
          @forge-ai-threads-search-load-more=${e("forge-ai-threads-search-load-more")}
          @forge-ai-threads-search-select=${e("forge-ai-threads-search-select")}
          @forge-ai-threads-search-new-chat=${e("forge-ai-threads-search-new-chat")}>
        </forge-ai-threads-search>
      </div>
    `}},u={args:{threads:t(20),showNewChat:!0},render:r=>{const a=t(120);let s=0;const o=20,n=h=>{h.preventDefault();const{query:d,setResults:S}=h.detail;s=0,e("forge-ai-threads-search-query")(h),setTimeout(()=>{const v=a.filter(c=>c.title.toLowerCase().includes(d.toLowerCase()));S(v.slice(0,o))},500)},T=h=>{const{query:d,appendResults:S}=h.detail;s++,e("forge-ai-threads-search-load-more")(h),setTimeout(()=>{const v=a.filter(D=>D.title.toLowerCase().includes(d.toLowerCase())),c=s*o,N=c+o;S(v.slice(c,N))},500)};return C`
      <div style="height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-threads-search
          .threads=${r.threads}
          total-chats=${120}
          ?show-new-chat=${r.showNewChat}
          @forge-ai-threads-search-query=${n}
          @forge-ai-threads-search-load-more=${T}
          @forge-ai-threads-search-select=${e("forge-ai-threads-search-select")}
          @forge-ai-threads-search-new-chat=${e("forge-ai-threads-search-new-chat")}>
        </forge-ai-threads-search>
      </div>
    `}},m={args:{threads:[],showNewChat:!0,emptyMessage:"No chats available, start a new conversation!"}},f={args:{threads:t(10),showNewChat:!1}},w={args:{threads:t(10),showNewChat:!0},render:r=>C`
      <div style="height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-threads
          .threads=${r.threads}
          @forge-ai-threads-select=${e("forge-ai-threads-select")}
          @forge-ai-threads-new-chat=${e("forge-ai-threads-new-chat")}
          @forge-ai-threads-clear-history=${e("forge-ai-threads-clear-history")}>
          <forge-ai-threads-search
            .threads=${r.threads}
            ?show-new-chat=${r.showNewChat}
            @forge-ai-threads-search-query=${e("forge-ai-threads-search-query")}
            @forge-ai-threads-search-load-more=${e("forge-ai-threads-search-load-more")}
            @forge-ai-threads-search-select=${e("forge-ai-threads-search-select")}
            @forge-ai-threads-search-new-chat=${e("forge-ai-threads-search-new-chat")}>
          </forge-ai-threads-search>
        </forge-ai-threads>
      </div>
    `},p={args:{threads:t(10),showNewChat:!0,showThreadRename:!0,showThreadDelete:!0}},$={args:{threads:t(10),showNewChat:!0,showThreadRename:!0,showThreadDelete:!1}},y={args:{threads:t(10),showNewChat:!0,showThreadRename:!1,showThreadDelete:!0}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    threads: generateThreads(30),
    showNewChat: true
  }
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    threads: [],
    showNewChat: true
  },
  render: (args: any) => {
    const allThreads = generateThreads(50);
    const handleSearch = (e: CustomEvent) => {
      e.preventDefault();
      const {
        query,
        setResults
      } = e.detail;
      action('forge-ai-threads-search-query')(e);
      setTimeout(() => {
        const results = allThreads.filter(t => t.title.toLowerCase().includes(query.toLowerCase()));
        setResults(results.slice(0, 20));
      }, 1000);
    };
    return html\`
      <div style="height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-threads-search
          .threads=\${args.threads}
          ?show-new-chat=\${args.showNewChat}
          @forge-ai-threads-search-query=\${handleSearch}
          @forge-ai-threads-search-load-more=\${action('forge-ai-threads-search-load-more')}
          @forge-ai-threads-search-select=\${action('forge-ai-threads-search-select')}
          @forge-ai-threads-search-new-chat=\${action('forge-ai-threads-search-new-chat')}>
        </forge-ai-threads-search>
      </div>
    \`;
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    threads: generateThreads(20),
    showNewChat: true
  },
  render: (args: any) => {
    const allThreads = generateThreads(120);
    let currentPage = 0;
    const pageSize = 20;
    const handleSearch = (e: CustomEvent) => {
      e.preventDefault();
      const {
        query,
        setResults
      } = e.detail;
      currentPage = 0;
      action('forge-ai-threads-search-query')(e);
      setTimeout(() => {
        const filtered = allThreads.filter(t => t.title.toLowerCase().includes(query.toLowerCase()));
        setResults(filtered.slice(0, pageSize));
      }, 500);
    };
    const handleLoadMore = (e: CustomEvent) => {
      const {
        query,
        appendResults
      } = e.detail;
      currentPage++;
      action('forge-ai-threads-search-load-more')(e);
      setTimeout(() => {
        const filtered = allThreads.filter(t => t.title.toLowerCase().includes(query.toLowerCase()));
        const start = currentPage * pageSize;
        const end = start + pageSize;
        appendResults(filtered.slice(start, end));
      }, 500);
    };
    return html\`
      <div style="height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-threads-search
          .threads=\${args.threads}
          total-chats=\${120}
          ?show-new-chat=\${args.showNewChat}
          @forge-ai-threads-search-query=\${handleSearch}
          @forge-ai-threads-search-load-more=\${handleLoadMore}
          @forge-ai-threads-search-select=\${action('forge-ai-threads-search-select')}
          @forge-ai-threads-search-new-chat=\${action('forge-ai-threads-search-new-chat')}>
        </forge-ai-threads-search>
      </div>
    \`;
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    threads: [],
    showNewChat: true,
    emptyMessage: 'No chats available, start a new conversation!'
  }
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    threads: generateThreads(10),
    showNewChat: false
  }
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    threads: generateThreads(10),
    showNewChat: true
  },
  render: (args: any) => {
    return html\`
      <div style="height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-threads
          .threads=\${args.threads}
          @forge-ai-threads-select=\${action('forge-ai-threads-select')}
          @forge-ai-threads-new-chat=\${action('forge-ai-threads-new-chat')}
          @forge-ai-threads-clear-history=\${action('forge-ai-threads-clear-history')}>
          <forge-ai-threads-search
            .threads=\${args.threads}
            ?show-new-chat=\${args.showNewChat}
            @forge-ai-threads-search-query=\${action('forge-ai-threads-search-query')}
            @forge-ai-threads-search-load-more=\${action('forge-ai-threads-search-load-more')}
            @forge-ai-threads-search-select=\${action('forge-ai-threads-search-select')}
            @forge-ai-threads-search-new-chat=\${action('forge-ai-threads-search-new-chat')}>
          </forge-ai-threads-search>
        </forge-ai-threads>
      </div>
    \`;
  }
}`,...w.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    threads: generateThreads(10),
    showNewChat: true,
    showThreadRename: true,
    showThreadDelete: true
  }
}`,...p.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    threads: generateThreads(10),
    showNewChat: true,
    showThreadRename: true,
    showThreadDelete: false
  }
}`,...$.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    threads: generateThreads(10),
    showNewChat: true,
    showThreadRename: false,
    showThreadDelete: true
  }
}`,...y.parameters?.docs?.source}}};const V=["Demo","WithLocalSearch","WithAsyncSearch","WithInfiniteScroll","EmptyState","WithoutNewChatButton","InThreadsContext","WithRenameAndDelete","WithRenameOnly","WithDeleteOnly"];export{i as Demo,m as EmptyState,w as InThreadsContext,g as WithAsyncSearch,y as WithDeleteOnly,u as WithInfiniteScroll,l as WithLocalSearch,p as WithRenameAndDelete,$ as WithRenameOnly,f as WithoutNewChatButton,V as __namedExportsOrder,J as default};

import{x as u}from"./iframe-RRnsZQGs.js";import"./ai-threads-search-DGc90g3j.js";import"./ai-threads-kbH2Jiq6.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-TwXTZb3z.js";import"./query-BSUsQcO2.js";import"./class-map-DbpK6gRv.js";import"./when-CI7b_ccM.js";import"./utils-DIqd7FWX.js";import"./ai-edit-thread-DntubQvC.js";import"./ref-D94Gb322.js";import"./ai-dropdown-menu-BHt4BoIB.js";import"./query-assigned-elements-CbIKkRRA.js";import"./if-defined-JVCyC3He.js";import"./popover-DcHJkMR2.js";import"./overlay-OE7BYOon.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./query-assigned-nodes-Cpd6AYdi.js";import"./ai-dropdown-menu-item--DfSoXpi.js";import"./ai-error-message-PO7j5vW9.js";import"./ai-spinner-B24YL9KZ.js";import"./ai-modal-Ct2nR55q.js";import"./ai-icon-CXpivbd_.js";import"./ai-gradient-container-dXHKhEkY.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,s=(e,t=0)=>{const a=["Getting Started with AI","Data Analysis Question","Code Review Discussion","Project Planning","Bug Investigation","Feature Development"];return Array.from({length:e},(o,n)=>({id:`thread-${t+n+1}`,title:`${a[n%a.length]}`,createdAt:new Date(Date.now()-(n+t)*864e5).toISOString(),messageCount:Math.floor(Math.random()*20)+1}))},D="forge-ai-threads-search",te={title:"AI Components/Primitives/Threads Search",component:D,argTypes:{threads:{control:"object",description:"Array of threads to display"},totalChats:{control:{type:"number"},description:"Total number of chats available for pagination. Set to 0 to disable infinite scroll."},headerTitle:{control:"text",description:"Title text shown in the header"},showNewChatButton:{control:"boolean",description:'Show "New chat" button in header'},showBackButton:{control:"boolean",description:"Show a back button before the header title"},showSearch:{control:"boolean",description:"Show the search field"},showThreadRename:{control:"boolean",description:"Show rename action in thread menu"},showThreadDelete:{control:"boolean",description:"Show delete action in thread menu"},placeholder:{control:"text",description:"Placeholder text for search input"},errorMessage:{control:"text",description:"Message describing a failed thread load. Replaces the empty state with a retry banner when nothing is loaded. When threads are already on screen the list stays visible and the message shows as a compact single line with a retry - at the bottom of the list if a page was in flight, otherwise above it"}},args:{threads:s(10),totalChats:0,headerTitle:"All chats",showNewChatButton:!0,showBackButton:!1,showSearch:!0,placeholder:"Find a chat by title",emptyMessage:"No conversations found"},render:e=>u`
      <div style="height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-threads-search
          .threads=${e.threads}
          total-chats=${e.totalChats}
          header-title=${e.headerTitle}
          .showNewChatButton=${e.showNewChatButton}
          ?show-back-button=${e.showBackButton}
          .showSearch=${e.showSearch}
          ?show-thread-rename=${e.showThreadRename}
          ?show-thread-delete=${e.showThreadDelete}
          placeholder=${e.placeholder}
          .errorMessage=${e.errorMessage}
          @forge-ai-threads-search-retry=${t=>{r("forge-ai-threads-search-retry")(t);const a=t.target;a.errorMessage=void 0}}
          @forge-ai-threads-search-query=${r("forge-ai-threads-search-query")}
          @forge-ai-threads-search-load-more=${t=>{r("forge-ai-threads-search-load-more")(t),setTimeout(()=>{t.detail.appendResults([])},1e3)}}
          @forge-ai-threads-search-select=${r("forge-ai-threads-search-select")}
          @forge-ai-threads-search-new-chat=${r("forge-ai-threads-search-new-chat")}
          @forge-ai-threads-search-rename=${r("forge-ai-threads-search-rename")}
          @forge-ai-threads-search-delete=${r("forge-ai-threads-search-delete")}
          @forge-ai-threads-search-back=${r("forge-ai-threads-search-back")}>
        </forge-ai-threads-search>
      </div>
    `},f={},w={args:{threads:s(30),showNewChatButton:!0}},p={args:{threads:[],showNewChatButton:!0},render:e=>{const t=s(50),a=o=>{o.preventDefault();const{query:n,setResults:N}=o.detail;r("forge-ai-threads-search-query")(o),setTimeout(()=>{const h=t.filter(d=>d.title.toLowerCase().includes(n.toLowerCase()));N(h.slice(0,20))},1e3)};return u`
      <div style="height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-threads-search
          .threads=${e.threads}
          .showNewChatButton=${e.showNewChatButton}
          @forge-ai-threads-search-query=${a}
          @forge-ai-threads-search-load-more=${r("forge-ai-threads-search-load-more")}
          @forge-ai-threads-search-select=${r("forge-ai-threads-search-select")}
          @forge-ai-threads-search-new-chat=${r("forge-ai-threads-search-new-chat")}>
        </forge-ai-threads-search>
      </div>
    `}},$={args:{threads:s(20),showNewChatButton:!0},render:e=>{const t=s(120);let a=0;const o=20,n=h=>{h.preventDefault();const{query:d,setResults:b}=h.detail;a=0,r("forge-ai-threads-search-query")(h),setTimeout(()=>{const x=t.filter(m=>m.title.toLowerCase().includes(d.toLowerCase()));b(x.slice(0,o))},500)},N=h=>{const{query:d,appendResults:b}=h.detail;a++,r("forge-ai-threads-search-load-more")(h),setTimeout(()=>{const x=t.filter(q=>q.title.toLowerCase().includes(d.toLowerCase())),m=a*o,R=m+o;b(x.slice(m,R))},500)};return u`
      <div style="height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-threads-search
          .threads=${e.threads}
          total-chats=${120}
          .showNewChatButton=${e.showNewChatButton}
          @forge-ai-threads-search-query=${n}
          @forge-ai-threads-search-load-more=${N}
          @forge-ai-threads-search-select=${r("forge-ai-threads-search-select")}
          @forge-ai-threads-search-new-chat=${r("forge-ai-threads-search-new-chat")}>
        </forge-ai-threads-search>
      </div>
    `}},C={args:{threads:s(3),headerTitle:"Chat history",showNewChatButton:!1,showBackButton:!0,showSearch:!1}},c={args:{threads:[],showNewChatButton:!0}},y={args:{threads:s(10),showNewChatButton:!1}},S={args:{threads:s(10),showNewChatButton:!0},render:e=>u`
      <div style="height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-threads
          .threads=${e.threads}
          @forge-ai-threads-select=${r("forge-ai-threads-select")}
          @forge-ai-threads-new-chat=${r("forge-ai-threads-new-chat")}
          @forge-ai-threads-clear-history=${r("forge-ai-threads-clear-history")}>
          <forge-ai-threads-search
            .threads=${e.threads}
            .showNewChatButton=${e.showNewChatButton}
            @forge-ai-threads-search-query=${r("forge-ai-threads-search-query")}
            @forge-ai-threads-search-load-more=${r("forge-ai-threads-search-load-more")}
            @forge-ai-threads-search-select=${r("forge-ai-threads-search-select")}
            @forge-ai-threads-search-new-chat=${r("forge-ai-threads-search-new-chat")}>
          </forge-ai-threads-search>
        </forge-ai-threads>
      </div>
    `},T={args:{threads:s(10),showNewChatButton:!0,showThreadRename:!0,showThreadDelete:!0}},v={args:{threads:s(10),showNewChatButton:!0,showThreadRename:!0,showThreadDelete:!1}},B={args:{threads:s(10),showNewChatButton:!0,showThreadRename:!1,showThreadDelete:!0}},i={args:{threads:[],errorMessage:"Could not load your chat history."}},l={args:{threads:s(5),errorMessage:"403 Forbidden - access to this chat was revoked."}},g={args:{threads:s(20),totalChats:120},render:e=>u`
      <div style="height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-threads-search
          .threads=${e.threads}
          total-chats=${e.totalChats}
          header-title=${e.headerTitle}
          .showNewChatButton=${e.showNewChatButton}
          .showSearch=${e.showSearch}
          placeholder=${e.placeholder}
          @forge-ai-threads-search-retry=${t=>{r("forge-ai-threads-search-retry")(t);const a=t.target;a.errorMessage=void 0}}
          @forge-ai-threads-search-load-more=${t=>{r("forge-ai-threads-search-load-more")(t);const a=t.target;setTimeout(()=>{a.errorMessage="Could not load more chats."},800)}}
          @forge-ai-threads-search-select=${r("forge-ai-threads-search-select")}
          @forge-ai-threads-search-new-chat=${r("forge-ai-threads-search-new-chat")}>
        </forge-ai-threads-search>
      </div>
    `};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"{}",...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    threads: generateThreads(30),
    showNewChatButton: true
  }
}`,...w.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    threads: [],
    showNewChatButton: true
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
          .showNewChatButton=\${args.showNewChatButton}
          @forge-ai-threads-search-query=\${handleSearch}
          @forge-ai-threads-search-load-more=\${action('forge-ai-threads-search-load-more')}
          @forge-ai-threads-search-select=\${action('forge-ai-threads-search-select')}
          @forge-ai-threads-search-new-chat=\${action('forge-ai-threads-search-new-chat')}>
        </forge-ai-threads-search>
      </div>
    \`;
  }
}`,...p.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    threads: generateThreads(20),
    showNewChatButton: true
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
          .showNewChatButton=\${args.showNewChatButton}
          @forge-ai-threads-search-query=\${handleSearch}
          @forge-ai-threads-search-load-more=\${handleLoadMore}
          @forge-ai-threads-search-select=\${action('forge-ai-threads-search-select')}
          @forge-ai-threads-search-new-chat=\${action('forge-ai-threads-search-new-chat')}>
        </forge-ai-threads-search>
      </div>
    \`;
  }
}`,...$.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    threads: generateThreads(3),
    headerTitle: 'Chat history',
    showNewChatButton: false,
    showBackButton: true,
    showSearch: false
  }
}`,...C.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    threads: [],
    showNewChatButton: true
  }
}`,...c.parameters?.docs?.source},description:{story:'With no query entered the list reads "No chats yet"; a search with no matches reads "No chats found".',...c.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    threads: generateThreads(10),
    showNewChatButton: false
  }
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    threads: generateThreads(10),
    showNewChatButton: true
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
            .showNewChatButton=\${args.showNewChatButton}
            @forge-ai-threads-search-query=\${action('forge-ai-threads-search-query')}
            @forge-ai-threads-search-load-more=\${action('forge-ai-threads-search-load-more')}
            @forge-ai-threads-search-select=\${action('forge-ai-threads-search-select')}
            @forge-ai-threads-search-new-chat=\${action('forge-ai-threads-search-new-chat')}>
          </forge-ai-threads-search>
        </forge-ai-threads>
      </div>
    \`;
  }
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    threads: generateThreads(10),
    showNewChatButton: true,
    showThreadRename: true,
    showThreadDelete: true
  }
}`,...T.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    threads: generateThreads(10),
    showNewChatButton: true,
    showThreadRename: true,
    showThreadDelete: false
  }
}`,...v.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    threads: generateThreads(10),
    showNewChatButton: true,
    showThreadRename: false,
    showThreadDelete: true
  }
}`,...B.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    threads: [],
    errorMessage: 'Could not load your chat history.'
  }
}`,...i.parameters?.docs?.source},description:{story:"A failed load with nothing to fall back on - the error replaces the empty state.",...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    threads: generateThreads(5),
    errorMessage: '403 Forbidden - access to this chat was revoked.'
  }
}`,...l.parameters?.docs?.source},description:{story:`A failure that is not tied to the end of the list - a rejected thread selection, for instance. Results
stay on screen and the message reads as a compact single line above them.`,...l.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    threads: generateThreads(20),
    totalChats: 120
  },
  render: (args: any) => {
    return html\`
      <div style="height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-threads-search
          .threads=\${args.threads}
          total-chats=\${args.totalChats}
          header-title=\${args.headerTitle}
          .showNewChatButton=\${args.showNewChatButton}
          .showSearch=\${args.showSearch}
          placeholder=\${args.placeholder}
          @forge-ai-threads-search-retry=\${(e: CustomEvent) => {
      action('forge-ai-threads-search-retry')(e);
      const threadsSearch = e.target as AiThreadsSearchComponent;
      threadsSearch.errorMessage = undefined;
    }}
          @forge-ai-threads-search-load-more=\${(e: CustomEvent) => {
      action('forge-ai-threads-search-load-more')(e);
      const threadsSearch = e.target as AiThreadsSearchComponent;
      // The page never resolves, which is what keeps the failure at the bottom of the list.
      setTimeout(() => {
        threadsSearch.errorMessage = 'Could not load more chats.';
      }, 800);
    }}
          @forge-ai-threads-search-select=\${action('forge-ai-threads-search-select')}
          @forge-ai-threads-search-new-chat=\${action('forge-ai-threads-search-new-chat')}>
        </forge-ai-threads-search>
      </div>
    \`;
  }
}`,...g.parameters?.docs?.source},description:{story:`A failed "load more" - scroll to the bottom of the list to trigger it. The page was in flight, so the
failure reads at the bottom where the load-more spinner would have been.`,...g.parameters?.docs?.description}}};const ae=["Demo","WithLocalSearch","WithAsyncSearch","WithInfiniteScroll","WithCustomHeader","EmptyState","WithoutNewChatButton","InThreadsContext","WithRenameAndDelete","WithRenameOnly","WithDeleteOnly","ErrorState","ErrorAboveList","LoadMoreErrorState"];export{f as Demo,c as EmptyState,l as ErrorAboveList,i as ErrorState,S as InThreadsContext,g as LoadMoreErrorState,p as WithAsyncSearch,C as WithCustomHeader,B as WithDeleteOnly,$ as WithInfiniteScroll,w as WithLocalSearch,T as WithRenameAndDelete,v as WithRenameOnly,y as WithoutNewChatButton,ae as __namedExportsOrder,te as default};

import{x as T}from"./iframe-B1WUWRSJ.js";import"./ai-threads-search-BVTmqLYc.js";import"./ai-threads-DSs18FCW.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-DNkJX02r.js";import"./class-map-DuzfYfaF.js";import"./when-CI7b_ccM.js";import"./utils-DIqd7FWX.js";import"./ai-edit-thread-DIrGLgxt.js";import"./ref-C43NmTUj.js";import"./ai-dropdown-menu-luqwE60M.js";import"./query-assigned-nodes-BOE2ErRe.js";import"./if-defined-C9FRuCWh.js";import"./popover-BOwcGf3X.js";import"./overlay-B0U85LQs.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-dropdown-menu-item-BRhjlG_m.js";import"./ai-spinner-DDFyu-o6.js";import"./ai-modal-D3UEuwfl.js";import"./ai-icon-C6MZnaUX.js";import"./ai-gradient-container-DvsuVcyv.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,r=(e,a=0)=>{const s=["Getting Started with AI","Data Analysis Question","Code Review Discussion","Project Planning","Bug Investigation","Feature Development"];return Array.from({length:e},(o,n)=>({id:`thread-${a+n+1}`,title:`${s[n%s.length]}`,createdAt:new Date(Date.now()-(n+a)*864e5).toISOString(),messageCount:Math.floor(Math.random()*20)+1}))},D="forge-ai-threads-search",J={title:"AI Components/Primitives/Threads Search",component:D,argTypes:{threads:{control:"object",description:"Array of threads to display"},totalChats:{control:{type:"number"},description:"Total number of chats available for pagination. Set to 0 to disable infinite scroll."},headerTitle:{control:"text",description:"Title text shown in the header"},showNewChatButton:{control:"boolean",description:'Show "New chat" button in header'},showBackButton:{control:"boolean",description:"Show a back button before the header title"},showSearch:{control:"boolean",description:"Show the search field"},showThreadRename:{control:"boolean",description:"Show rename action in thread menu"},showThreadDelete:{control:"boolean",description:"Show delete action in thread menu"},placeholder:{control:"text",description:"Placeholder text for search input"},emptyMessage:{control:"text",description:"Message displayed when no results found"}},args:{threads:r(10),totalChats:0,headerTitle:"All chats",showNewChatButton:!0,showBackButton:!1,showSearch:!0,placeholder:"Find a chat by title",emptyMessage:"No conversations found"},render:e=>T`
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
          empty-message=${e.emptyMessage}
          @forge-ai-threads-search-query=${t("forge-ai-threads-search-query")}
          @forge-ai-threads-search-load-more=${a=>{t("forge-ai-threads-search-load-more")(a),setTimeout(()=>{a.detail.appendResults([])},1e3)}}
          @forge-ai-threads-search-select=${t("forge-ai-threads-search-select")}
          @forge-ai-threads-search-new-chat=${t("forge-ai-threads-search-new-chat")}
          @forge-ai-threads-search-rename=${t("forge-ai-threads-search-rename")}
          @forge-ai-threads-search-delete=${t("forge-ai-threads-search-delete")}
          @forge-ai-threads-search-back=${t("forge-ai-threads-search-back")}>
        </forge-ai-threads-search>
      </div>
    `},i={},l={args:{threads:r(30),showNewChatButton:!0}},u={args:{threads:[],showNewChatButton:!0},render:e=>{const a=r(50),s=o=>{o.preventDefault();const{query:n,setResults:B}=o.detail;t("forge-ai-threads-search-query")(o),setTimeout(()=>{const h=a.filter(d=>d.title.toLowerCase().includes(n.toLowerCase()));B(h.slice(0,20))},1e3)};return T`
      <div style="height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-threads-search
          .threads=${e.threads}
          .showNewChatButton=${e.showNewChatButton}
          @forge-ai-threads-search-query=${s}
          @forge-ai-threads-search-load-more=${t("forge-ai-threads-search-load-more")}
          @forge-ai-threads-search-select=${t("forge-ai-threads-search-select")}
          @forge-ai-threads-search-new-chat=${t("forge-ai-threads-search-new-chat")}>
        </forge-ai-threads-search>
      </div>
    `}},g={args:{threads:r(20),showNewChatButton:!0},render:e=>{const a=r(120);let s=0;const o=20,n=h=>{h.preventDefault();const{query:d,setResults:S}=h.detail;s=0,t("forge-ai-threads-search-query")(h),setTimeout(()=>{const N=a.filter(c=>c.title.toLowerCase().includes(d.toLowerCase()));S(N.slice(0,o))},500)},B=h=>{const{query:d,appendResults:S}=h.detail;s++,t("forge-ai-threads-search-load-more")(h),setTimeout(()=>{const N=a.filter(b=>b.title.toLowerCase().includes(d.toLowerCase())),c=s*o,v=c+o;S(N.slice(c,v))},500)};return T`
      <div style="height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-threads-search
          .threads=${e.threads}
          total-chats=${120}
          .showNewChatButton=${e.showNewChatButton}
          @forge-ai-threads-search-query=${n}
          @forge-ai-threads-search-load-more=${B}
          @forge-ai-threads-search-select=${t("forge-ai-threads-search-select")}
          @forge-ai-threads-search-new-chat=${t("forge-ai-threads-search-new-chat")}>
        </forge-ai-threads-search>
      </div>
    `}},w={args:{threads:r(3),headerTitle:"Chat history",showNewChatButton:!1,showBackButton:!0,showSearch:!1}},m={args:{threads:[],showNewChatButton:!0,emptyMessage:"No chats available, start a new conversation!"}},f={args:{threads:r(10),showNewChatButton:!1}},p={args:{threads:r(10),showNewChatButton:!0},render:e=>T`
      <div style="height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-threads
          .threads=${e.threads}
          @forge-ai-threads-select=${t("forge-ai-threads-select")}
          @forge-ai-threads-new-chat=${t("forge-ai-threads-new-chat")}
          @forge-ai-threads-clear-history=${t("forge-ai-threads-clear-history")}>
          <forge-ai-threads-search
            .threads=${e.threads}
            .showNewChatButton=${e.showNewChatButton}
            @forge-ai-threads-search-query=${t("forge-ai-threads-search-query")}
            @forge-ai-threads-search-load-more=${t("forge-ai-threads-search-load-more")}
            @forge-ai-threads-search-select=${t("forge-ai-threads-search-select")}
            @forge-ai-threads-search-new-chat=${t("forge-ai-threads-search-new-chat")}>
          </forge-ai-threads-search>
        </forge-ai-threads>
      </div>
    `},C={args:{threads:r(10),showNewChatButton:!0,showThreadRename:!0,showThreadDelete:!0}},$={args:{threads:r(10),showNewChatButton:!0,showThreadRename:!0,showThreadDelete:!1}},y={args:{threads:r(10),showNewChatButton:!0,showThreadRename:!1,showThreadDelete:!0}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    threads: generateThreads(30),
    showNewChatButton: true
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    threads: generateThreads(3),
    headerTitle: 'Chat history',
    showNewChatButton: false,
    showBackButton: true,
    showSearch: false
  }
}`,...w.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    threads: [],
    showNewChatButton: true,
    emptyMessage: 'No chats available, start a new conversation!'
  }
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    threads: generateThreads(10),
    showNewChatButton: false
  }
}`,...f.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    threads: generateThreads(10),
    showNewChatButton: true,
    showThreadRename: true,
    showThreadDelete: true
  }
}`,...C.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    threads: generateThreads(10),
    showNewChatButton: true,
    showThreadRename: true,
    showThreadDelete: false
  }
}`,...$.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    threads: generateThreads(10),
    showNewChatButton: true,
    showThreadRename: false,
    showThreadDelete: true
  }
}`,...y.parameters?.docs?.source}}};const V=["Demo","WithLocalSearch","WithAsyncSearch","WithInfiniteScroll","WithCustomHeader","EmptyState","WithoutNewChatButton","InThreadsContext","WithRenameAndDelete","WithRenameOnly","WithDeleteOnly"];export{i as Demo,m as EmptyState,p as InThreadsContext,u as WithAsyncSearch,w as WithCustomHeader,y as WithDeleteOnly,g as WithInfiniteScroll,l as WithLocalSearch,C as WithRenameAndDelete,$ as WithRenameOnly,f as WithoutNewChatButton,V as __namedExportsOrder,J as default};

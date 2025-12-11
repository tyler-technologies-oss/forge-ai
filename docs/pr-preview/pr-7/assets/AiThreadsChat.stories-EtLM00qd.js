import{x as i}from"./iframe-CqdJ-B5E.js";import{M as s}from"./mock-adapter-BN0uINtG.js";import"./ai-threads-Dnb_IO2_.js";import"./ai-chatbot-BsFYuIzd.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-CZRpZD5D.js";import"./state-DfQD4py3.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ai-modal-DkDEthWf.js";import"./class-map-yvRZVwy_.js";import"./query-BpjciUlk.js";import"./utils-BGBq21po.js";import"./when-CI7b_ccM.js";import"./ai-attachment-8WRVA1ge.js";import"./tooltip-P1bH_QFM.js";import"./overlay-BTce5-kD.js";import"./ai-chat-header-CWJJ-9cd.js";import"./ai-icon-Bkfg54LL.js";import"./ai-gradient-container-BDnKr2JU.js";import"./ai-dropdown-menu-DejtTYi1.js";import"./if-defined-BdxBiqdg.js";import"./popover-BkA3FTbz.js";import"./ai-agent-info-CwMzhJpI.js";import"./ai-chat-interface-Eo3_PuPu.js";import"./ai-empty-state-DRTGRtMA.js";import"./ai-error-message-C8_pRtTO.js";import"./ai-file-picker-CZanXmGw.js";import"./ai-prompt-Ckz1Cnwc.js";import"./ai-response-message-CRwYke9_.js";import"./ai-actions-toolbar-BH9oD0ja.js";import"./ai-suggestions-DQgNR1Dn.js";import"./ai-thinking-indicator-DKXoq2bJ.js";import"./ai-user-message-BevalqTv.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,c="forge-ai-threads",N={title:"AI Components/Form Factors/Threads",component:c,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},enableFileUpload:{control:{type:"boolean"},description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{enableFileUpload:!1,placeholder:"Ask a question..."},render:o=>{const r=new s({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
      <div style="height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-threads
          .threads=${a}
          @forge-ai-threads-select=${e("forge-ai-threads-select")}
          @forge-ai-threads-new-chat=${e("forge-ai-threads-new-chat")}
          @forge-ai-threads-clear-history=${e("forge-ai-threads-clear-history")}>
          <forge-ai-chatbot
            .adapter=${r}
            ?enable-file-upload=${o.enableFileUpload}
            placeholder=${o.placeholder}
            @forge-ai-chatbot-connected=${e("forge-ai-chatbot-connected")}
            @forge-ai-chatbot-disconnected=${e("forge-ai-chatbot-disconnected")}
            @forge-ai-chatbot-message-sent=${e("forge-ai-chatbot-message-sent")}
            @forge-ai-chatbot-message-received=${e("forge-ai-chatbot-message-received")}
            @forge-ai-chatbot-tool-call=${e("forge-ai-chatbot-tool-call")}
            @forge-ai-chatbot-error=${e("forge-ai-chatbot-error")}
            @forge-ai-chatbot-clear=${e("forge-ai-chatbot-clear")}
            @forge-ai-chatbot-info=${e("forge-ai-chatbot-info")}>
          </forge-ai-chatbot>
        </forge-ai-threads>
      </div>
    `}},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const R=["Demo"];export{t as Demo,R as __namedExportsOrder,N as default};

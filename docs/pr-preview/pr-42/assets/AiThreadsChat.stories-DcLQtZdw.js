import{x as i}from"./iframe-IuMUK9hq.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-e6xJcFwD.js";import"./ai-chatbot-C83hPnmo.js";import"./ai-message-thread-C4ZPOg27.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-DsM4zBWD.js";import"./base-CxHDylmg.js";import"./query-assigned-elements-CSyy1IHd.js";import"./ref-BmMRLsB4.js";import"./class-map-Dq7mak8q.js";import"./when-CI7b_ccM.js";import"./ai-attachment-BzkglzJp.js";import"./ai-spinner-CwJvGI47.js";import"./tooltip-CsV51u9Q.js";import"./overlay-C4I9xKVs.js";import"./ai-chat-header-Bvg2_sUz.js";import"./ai-icon-fR0Yusbo.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-HuZYwGG_.js";import"./ai-dropdown-menu-zAfL2Dx7.js";import"./if-defined-De3-HCRI.js";import"./popover-UCQGYRPD.js";import"./ai-dropdown-menu-item-PsP7zlZL.js";import"./ai-modal-D6zunc06.js";import"./ai-agent-info-Dtlz9LMm.js";import"./ai-agent-selector-LFenVep_.js";import"./ai-chat-interface-DiGpy2nt.js";import"./ai-file-picker-Cd9hMpsp.js";import"./ai-prompt-BOsjRYg7.js";import"./ai-suggestions-BBgfJhvv.js";import"./ai-voice-input-A54m7o6B.js";import"./ai-response-message-toolbar-B5gKfQkn.js";import"./ai-empty-state-BgKIc3XJ.js";import"./ai-error-message-Cxqaa1cw.js";import"./ai-response-message-MkvJAwTm.js";import"./ai-thinking-indicator-Ovyi7K6M.js";import"./ai-user-message-DDbFkl-4.js";import"./ai-user-message-toolbar-BQuH5tAz.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Q={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
      <div style="height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-threads
          .threads=${a}
          @forge-ai-threads-select=${t("forge-ai-threads-select")}
          @forge-ai-threads-new-chat=${t("forge-ai-threads-new-chat")}
          @forge-ai-threads-clear-history=${t("forge-ai-threads-clear-history")}>
          <forge-ai-chatbot
            .adapter=${r}
            file-upload=${o.fileUpload}
            placeholder=${o.placeholder}
            @forge-ai-chatbot-connected=${t("forge-ai-chatbot-connected")}
            @forge-ai-chatbot-disconnected=${t("forge-ai-chatbot-disconnected")}
            @forge-ai-chatbot-message-sent=${t("forge-ai-chatbot-message-sent")}
            @forge-ai-chatbot-message-received=${t("forge-ai-chatbot-message-received")}
            @forge-ai-chatbot-tool-call=${t("forge-ai-chatbot-tool-call")}
            @forge-ai-chatbot-error=${t("forge-ai-chatbot-error")}
            @forge-ai-chatbot-clear=${t("forge-ai-chatbot-clear")}
            @forge-ai-chatbot-info=${t("forge-ai-chatbot-info")}>
          </forge-ai-chatbot>
        </forge-ai-threads>
      </div>
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const V=["Demo"];export{e as Demo,V as __namedExportsOrder,Q as default};

import{x as i}from"./iframe-eEjxNfM7.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-BU0AgUu5.js";import"./ai-chatbot-BBECV20Q.js";import"./ai-message-thread-uv4fJhBs.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-C_wI3bCM.js";import"./base-DMMOcqYX.js";import"./query-assigned-elements-nnd1nKAl.js";import"./ref-DePJ6gl8.js";import"./class-map-C5hM4zgJ.js";import"./when-CI7b_ccM.js";import"./ai-attachment-BrGCLdaJ.js";import"./ai-spinner-BumTfL_Z.js";import"./tooltip-DwTP9F_V.js";import"./overlay-6-XUNQLV.js";import"./ai-chat-header-DufAVTiQ.js";import"./ai-icon-D2vjMxgQ.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-ChUVtcWJ.js";import"./ai-dropdown-menu-D0RuKong.js";import"./if-defined-BKI_yjvn.js";import"./popover-CHqW9ann.js";import"./ai-dropdown-menu-item-Dw8f3pVU.js";import"./ai-modal-Dd6gzce9.js";import"./ai-agent-info-BKPXp4Op.js";import"./ai-agent-selector-DS8bZtAM.js";import"./ai-chat-interface-j89TAb3r.js";import"./ai-file-picker-CeC2VbU3.js";import"./ai-prompt-DO44f1Vx.js";import"./ai-suggestions-D6kpEUQJ.js";import"./ai-voice-input-CK9eseRp.js";import"./ai-response-message-toolbar-ByKkSO6-.js";import"./ai-empty-state-BbIVr4Ro.js";import"./ai-error-message-B-lwNOj3.js";import"./ai-response-message-DtVsaQxa.js";import"./ai-thinking-indicator-Hb4Cg89p.js";import"./ai-user-message-DeGAJgtR.js";import"./ai-user-message-toolbar-DXHafurx.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Q={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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

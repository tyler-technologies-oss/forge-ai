import{x as i}from"./iframe-mbq2TPuS.js";import{M as p}from"./mock-adapter-CJcooZGU.js";import"./ai-threads-BAPvTLjW.js";import"./ai-chatbot-Zhlck_9j.js";import"./ai-message-thread-BnlcQNB7.js";import"./utils-DYbogL2a.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-D4Lx6sWC.js";import"./state-CGvgpzp5.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-xuzRPusJ.js";import"./class-map-D-LkPUfA.js";import"./when-CI7b_ccM.js";import"./ai-attachment-BE35PYCg.js";import"./tooltip-CQ4UBk1x.js";import"./query-BpjciUlk.js";import"./overlay-Dcle-3zS.js";import"./ai-chat-header-CT-oUmZV.js";import"./ai-icon-DyyrFZKa.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-BBNIIDf8.js";import"./ai-dropdown-menu-BxTJ7mSV.js";import"./if-defined-7rt0esym.js";import"./popover-xsUvGXWe.js";import"./ai-modal-8xNp8g0S.js";import"./ai-agent-info-DtksMUPq.js";import"./ai-chat-interface-Dyzp4CpT.js";import"./ai-file-picker-izrJcxD0.js";import"./ai-prompt-t5r46TQZ.js";import"./ai-suggestions-hAVveEkV.js";import"./ai-voice-input-DBCjtddp.js";import"./ai-empty-state-CgmAGwJa.js";import"./ai-error-message-NG1M0Dpe.js";import"./ai-response-message-iqMESahU.js";import"./ai-actions-toolbar-BWdIzgx3.js";import"./ai-thinking-indicator-CF1LRq5-.js";import"./ai-user-message-CrfNP6E5.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const J=["Demo"];export{e as Demo,J as __namedExportsOrder,z as default};

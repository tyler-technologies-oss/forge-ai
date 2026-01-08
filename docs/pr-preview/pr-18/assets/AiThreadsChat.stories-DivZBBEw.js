import{x as i}from"./iframe-UBQo4PCm.js";import{M as p}from"./mock-adapter-BdCNJp5x.js";import"./ai-threads-BKRMjsLI.js";import"./ai-chatbot-Bk4ud-2Z.js";import"./ai-message-thread-tF70imqn.js";import"./utils-Dod8vlOP.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-D76MYmmc.js";import"./state-BQ3v4-l0.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-DS4e2KKB.js";import"./class-map-C-4gKB17.js";import"./when-CI7b_ccM.js";import"./ai-attachment-_CRg_w4p.js";import"./ai-spinner-BthhXt10.js";import"./tooltip-vAaNcnQQ.js";import"./query-BpjciUlk.js";import"./overlay-Da1m7QlF.js";import"./ai-chat-header-C73GtsbX.js";import"./ai-icon-HlwESr0f.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-D4lA8whB.js";import"./ai-dropdown-menu-gE2uOe5G.js";import"./ai-dropdown-menu-item-DMksAxeq.js";import"./popover-Cl_k0Lui.js";import"./ai-modal-BsXnz8p5.js";import"./ai-agent-info-DayUB-0t.js";import"./ai-chat-interface-I7hK94jp.js";import"./ai-file-picker-JMqP2RuO.js";import"./ai-prompt-DIwQqMD5.js";import"./ai-suggestions-CcTYonbS.js";import"./ai-voice-input-B20eg1xe.js";import"./ai-empty-state-BjBj8rxI.js";import"./ai-error-message-jF6WdbtR.js";import"./ai-response-message-vyfN8Qy8.js";import"./ai-actions-toolbar-C5H8gkjk.js";import"./ai-thinking-indicator-CSHTM5Kh.js";import"./ai-user-message-Dte2LBFK.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",J={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const Q=["Demo"];export{e as Demo,Q as __namedExportsOrder,J as default};

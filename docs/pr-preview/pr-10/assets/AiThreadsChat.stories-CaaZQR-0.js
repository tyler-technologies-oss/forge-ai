import{x as i}from"./iframe-Ba0CBLMY.js";import{M as p}from"./mock-adapter-CJcooZGU.js";import"./ai-threads-BFUaFhRZ.js";import"./ai-chatbot-PcgqsLEq.js";import"./ai-message-thread-Brm0AYsC.js";import"./utils-DYbogL2a.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-BqH8pT5-.js";import"./state-CqLWUwpe.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref--WlaNTos.js";import"./class-map-Cos5Mhm7.js";import"./when-CI7b_ccM.js";import"./ai-attachment-BgzXIOOG.js";import"./tooltip-CSGn1lEz.js";import"./query-BpjciUlk.js";import"./overlay-B0minTIM.js";import"./ai-chat-header-DVL1tz-O.js";import"./ai-icon-DBMTvFrW.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DsL3Ci5a.js";import"./ai-dropdown-menu-D9Fe-nLx.js";import"./if-defined-DIi9Dsbs.js";import"./popover-DrgAc2--.js";import"./ai-modal-CKrNGbrn.js";import"./ai-agent-info-BUjcmN8G.js";import"./ai-chat-interface-CX8FOVkZ.js";import"./ai-file-picker-CMT0mjvR.js";import"./ai-prompt-BCWnWq8j.js";import"./ai-suggestions-Bp-BMHge.js";import"./ai-voice-input-D6AZYGhG.js";import"./ai-empty-state-YirBiAeT.js";import"./ai-error-message-D13RyZxd.js";import"./ai-response-message-dBc05DOJ.js";import"./ai-actions-toolbar-l34C3vBY.js";import"./ai-thinking-indicator-DeZ-AUFu.js";import"./ai-user-message-DJnGzwYS.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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

import{x as i}from"./iframe-CPmT_U8b.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-BN0GOYBh.js";import"./ai-chatbot-Jsp0MPQF.js";import"./ai-message-thread-CyZAqx0q.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-DWsdB_Da.js";import"./base-1DQjdzZX.js";import"./query-assigned-elements-cbNHC7yM.js";import"./ref-B6Vretdt.js";import"./class-map-nq3NNEm6.js";import"./when-CI7b_ccM.js";import"./ai-attachment-CowM_NPN.js";import"./ai-spinner-C4b3Rd3w.js";import"./tooltip-DRhpCtQR.js";import"./overlay-Kf3hGrrX.js";import"./ai-chat-header-BA-sTN2y.js";import"./ai-icon-B3WWyapD.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-Br9heeY8.js";import"./ai-dropdown-menu-ZR1MxwZQ.js";import"./if-defined-DwA3V-iX.js";import"./popover-lygPIzNm.js";import"./ai-dropdown-menu-item-4Bd91Uaj.js";import"./ai-modal-CDI9iCJQ.js";import"./ai-agent-info-9Xt8p3m8.js";import"./ai-chat-interface-oNDrT_mM.js";import"./ai-file-picker-BOcVCTZL.js";import"./ai-prompt-7Elg1vUX.js";import"./ai-suggestions-RV3tfO7l.js";import"./ai-voice-input-B8dnBmLq.js";import"./ai-actions-toolbar-D6v995CV.js";import"./ai-empty-state-CqYfSCKU.js";import"./ai-error-message-DC_dYdO7.js";import"./ai-response-message-D0wzHIwT.js";import"./ai-thinking-indicator-JeMkeFSF.js";import"./ai-user-message-BOU68BpN.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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

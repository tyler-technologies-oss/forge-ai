import{x as i}from"./iframe-B5fIpjb6.js";import{M as p}from"./mock-adapter-DPRgB_9-.js";import"./ai-threads-D-9Xl6SP.js";import"./ai-chatbot-DtaTIjyI.js";import"./ai-message-thread-HRPZV3hW.js";import"./utils-Dod8vlOP.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-DnzNiTxy.js";import"./state-C5lX-6fi.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-nliCyh1_.js";import"./class-map-BZIiCJqF.js";import"./when-CI7b_ccM.js";import"./ai-attachment-CPEgB6ca.js";import"./ai-spinner-DJC57Ov4.js";import"./tooltip-lKLDBEn2.js";import"./query-BpjciUlk.js";import"./overlay-CvkdCZ0e.js";import"./ai-chat-header-Crw7-jeI.js";import"./ai-icon-C9i7x_JY.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-BKUCz31V.js";import"./ai-dropdown-menu-Bt7I2sj6.js";import"./ai-dropdown-menu-item-Su2GjS1H.js";import"./popover-DoJfNRR4.js";import"./ai-modal-BWKGWUjF.js";import"./ai-agent-info-DiA5Lblo.js";import"./ai-chat-interface-ryXeL_Tz.js";import"./ai-file-picker-Cd6WawGT.js";import"./ai-prompt-CbfxKYa1.js";import"./ai-suggestions-C00DhKoG.js";import"./ai-voice-input-CCfc9sbG.js";import"./ai-actions-toolbar-DIMJw7D7.js";import"./ai-empty-state-D2Vo0DRU.js";import"./ai-error-message-CxDLME4P.js";import"./ai-response-message-Dy9BfCdK.js";import"./ai-thinking-indicator-CY1PySDH.js";import"./ai-user-message-D59QZNRF.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",J={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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

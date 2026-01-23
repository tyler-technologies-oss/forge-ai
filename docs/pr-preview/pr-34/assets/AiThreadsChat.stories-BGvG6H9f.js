import{x as i}from"./iframe-BCiei324.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-2O3M3k-r.js";import"./ai-chatbot-DmiRz_TV.js";import"./ai-message-thread-Dyv70l-Y.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-BHcuA25v.js";import"./base-Cvtvbcdv.js";import"./query-assigned-elements-C2Fh-mMc.js";import"./ref-B_wnuDOZ.js";import"./class-map-CXmOtiF8.js";import"./when-CI7b_ccM.js";import"./ai-attachment-RJh2ETjS.js";import"./ai-spinner-B341obWM.js";import"./tooltip-CmXrsQsc.js";import"./overlay-B6dwsa-g.js";import"./ai-chat-header-pdjJFKR5.js";import"./ai-icon-Dx-1iusq.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CcKmEkNy.js";import"./ai-dropdown-menu-D7fRs8nJ.js";import"./if-defined-B-rBCLkz.js";import"./popover-BKBXj_7Y.js";import"./ai-dropdown-menu-item-DZUmIvCa.js";import"./ai-modal-CguB5zBl.js";import"./ai-agent-info-Ayg8Hoxh.js";import"./ai-agent-selector-CJ28hmXI.js";import"./ai-chat-interface-DYR1Wp3m.js";import"./ai-file-picker-DnQKppmJ.js";import"./ai-prompt-BW3TK1o0.js";import"./ai-suggestions-BN1BKLlL.js";import"./ai-voice-input-1wQuWNxe.js";import"./ai-actions-toolbar-AkFu4jTA.js";import"./ai-empty-state-Id6WG7Rk.js";import"./ai-error-message-6F-vvIhz.js";import"./ai-response-message-C2cG_HLR.js";import"./ai-thinking-indicator-Du_ajMl0.js";import"./ai-user-message-93xAR1jc.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",J={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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

import{x as i}from"./iframe-Dp4oOS9d.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-Dj3ivjoj.js";import"./ai-chatbot-BOp9Oh4F.js";import"./ai-message-thread-BBYUB27G.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-BLX18UUA.js";import"./base-BH012yZ_.js";import"./query-assigned-elements-BUwt9auJ.js";import"./ref-BeJf-lEx.js";import"./class-map-sLhJY_1l.js";import"./when-CI7b_ccM.js";import"./ai-attachment-Sz_LBvQk.js";import"./ai-spinner-c5-ZKmQI.js";import"./tooltip-TMpENqFM.js";import"./overlay-bKwux8E4.js";import"./ai-chat-header-C3XWugF6.js";import"./ai-icon-CpURWGou.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-B3zpgG4Y.js";import"./ai-dropdown-menu-CCTiJgMx.js";import"./if-defined-CBRrsVNV.js";import"./popover-BKTivLQ6.js";import"./ai-dropdown-menu-item-DVtmC88H.js";import"./ai-modal-eHoQZgRA.js";import"./ai-agent-info-DmbMMVzs.js";import"./ai-chat-interface-Vy9RHo58.js";import"./ai-file-picker-BEAAXMEV.js";import"./ai-prompt-Cl7uwc7l.js";import"./ai-suggestions-BNfkw_PV.js";import"./ai-voice-input-Br0P0ry4.js";import"./ai-response-message-toolbar-BaCsU5AV.js";import"./ai-empty-state-J3XItggm.js";import"./ai-error-message-ubwfK0Di.js";import"./ai-response-message-DF8_xMsZ.js";import"./ai-thinking-indicator-BW1zh6aT.js";import"./ai-user-message-5K5iI8R2.js";import"./ai-user-message-toolbar-Cxzv1d8S.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",J={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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

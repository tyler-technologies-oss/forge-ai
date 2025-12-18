import{x as i}from"./iframe-4E2mj6Mt.js";import{M as p}from"./mock-adapter-MuFwfiLK.js";import"./ai-threads-u7xfvzzp.js";import"./ai-chatbot-CE6tKHoX.js";import"./ai-message-thread-CGeuZFWU.js";import"./utils-C_XXmvvR.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-dr-OOLCt.js";import"./state-CEaWS6_A.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-ergCtqT6.js";import"./class-map-hXApVkkt.js";import"./when-CI7b_ccM.js";import"./ai-attachment-DMZa3I0D.js";import"./tooltip-ti1qEjTn.js";import"./query-BpjciUlk.js";import"./overlay-DUlfa-cA.js";import"./ai-chat-header-CfaSc-Wg.js";import"./ai-icon-7by3_Awl.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-Z8rqdUUs.js";import"./ai-dropdown-menu-DqVW9USA.js";import"./if-defined-C933J7tc.js";import"./popover-CUqJZZ1x.js";import"./ai-modal-Bm0-kdsH.js";import"./ai-agent-info-CJrNxdzT.js";import"./ai-chat-interface-DDEnn1H8.js";import"./ai-file-picker-DATO6yBL.js";import"./ai-prompt-C-lnM2Er.js";import"./ai-suggestions-C_yg7vcg.js";import"./ai-voice-input-B-Cd2Hdn.js";import"./ai-empty-state-DXIydU-Z.js";import"./ai-error-message-BxCkrojv.js";import"./ai-response-message-Cs3f4V26.js";import"./ai-actions-toolbar-CWuSv2MX.js";import"./ai-thinking-indicator-WTddLvvM.js";import"./ai-user-message-C9Q9KT6J.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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

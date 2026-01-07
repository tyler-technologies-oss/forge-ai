import{x as i}from"./iframe-CFYGiabN.js";import{M as p}from"./mock-adapter-Dat2lqqN.js";import"./ai-threads-BQQlLJov.js";import"./ai-chatbot-D7FV9bWn.js";import"./ai-message-thread-SyPDlVwj.js";import"./utils-C_XXmvvR.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-w1hCfGMq.js";import"./state-BoTvQGUi.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-DmghPTiT.js";import"./class-map-D7R_s0aE.js";import"./when-CI7b_ccM.js";import"./ai-attachment-BrEXgX7-.js";import"./ai-spinner-Buodgk-F.js";import"./tooltip-CgEkvLhT.js";import"./query-BpjciUlk.js";import"./overlay-_r767FVP.js";import"./ai-chat-header-Bc4QbtPQ.js";import"./ai-icon-c4Liqes0.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-ePU0Sjz6.js";import"./ai-dropdown-menu-BSDxMRXc.js";import"./ai-dropdown-menu-item-C9l3BQ1e.js";import"./popover-BS70J-Wp.js";import"./ai-modal-BqxqrBOS.js";import"./ai-agent-info-COyLvfTX.js";import"./ai-chat-interface-5Wex5ZQY.js";import"./ai-file-picker-BzH4vMAK.js";import"./ai-prompt-Dmya30e9.js";import"./ai-suggestions-DuX25Ov8.js";import"./ai-voice-input-BZ_2pNFT.js";import"./ai-empty-state-ChzZYKAB.js";import"./ai-error-message-CCJH35yH.js";import"./ai-response-message-Dpa0zB06.js";import"./ai-actions-toolbar-CPu5b7TH.js";import"./ai-thinking-indicator-Cfbo0wIA.js";import"./ai-user-message-fr7Rfmts.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",J={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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

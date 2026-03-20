import{x as i}from"./iframe-SInbbIrY.js";import{M as p}from"./mock-adapter-BYw0QxWR.js";import"./ai-threads-CGbbbIaP.js";import"./ai-chatbot-base-BxkBYJfM.js";import"./ai-chatbot-CSSbNISC.js";import"./ai-message-thread-DGLDmvif.js";import"./utils-BojVjD0a.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-BiV8fbcb.js";import"./base-kPG9LX_y.js";import"./query-assigned-elements-DJy4YmOv.js";import"./ref-DlxiPx2M.js";import"./class-map-DAkH78er.js";import"./when-CI7b_ccM.js";import"./ai-attachment-C1ZddwQt.js";import"./ai-spinner-rCmZQA50.js";import"./tooltip-BqW2vRDN.js";import"./overlay-C_sLuovZ.js";import"./ai-chat-header-DtwdtcGI.js";import"./ai-icon-C6yL7x1s.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-B997RF0x.js";import"./ai-dropdown-menu-BfSsyzca.js";import"./if-defined-8Hejse_B.js";import"./popover-BgRRrD0G.js";import"./ai-dropdown-menu-item-eACyIPeF.js";import"./ai-modal-DQeO0G4M.js";import"./ai-agent-info-BTeSanGm.js";import"./ai-agent-selector-BLEmsIi_.js";import"./ai-chat-interface-nNV-6W5s.js";import"./ai-file-picker-Bq-8p3_4.js";import"./ai-prompt-pOVsFPXf.js";import"./ai-suggestions-BOKSOIXF.js";import"./ai-voice-input-ax6389SA.js";import"./ai-response-message-toolbar-NV7H10sD.js";import"./ai-empty-state-CbBV_Aob.js";import"./ai-error-message-DQLLPxFE.js";import"./ai-response-message-sobSFpPV.js";import"./ai-thinking-indicator-x4yZETYG.js";import"./ai-user-message-DZxVVmV-.js";import"./ai-user-message-toolbar-GVXcp4Wk.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",V={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const W=["Demo"];export{e as Demo,W as __namedExportsOrder,V as default};
